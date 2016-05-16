import React, { Component, PropTypes } from 'react';

import decodeOffsetKey from '../utils/decodeOffsetKey';
import { genKey } from 'draft-js';
import getSearchText from '../utils/getSearchText';

export default function (addModifier, Entry, suggestionsThemeKey) {
  return class CompletionSuggestions extends Component {

    static propTypes = {
      entityMutability: PropTypes.oneOf([
        'SEGMENTED',
        'IMMUTABLE',
        'MUTABLE',
      ]),
    };

    state = {
      isActive: false,
      focusedOptionIndex: 0,
    };

    componentWillMount() {
      this.key = genKey();
      this.props.callbacks.onChange = this.onEditorStateChange;
    }

    componentDidUpdate = (prevProps, prevState) => {
      if (this.refs.popover) {
        // In case the list shrinks there should be still an option focused.
        // Note: this might run multiple times and deduct 1 until the condition is
        // not fullfilled anymore.
        const size = this.props.suggestions.size;
        if (size > 0 && this.state.focusedOptionIndex >= size) {
          this.setState({
            focusedOptionIndex: size - 1,
          });
        }

        const decoratorRect = this.props.store.getPortalClientRect(this.activeOffsetKey);
        const newStyles = this.props.positionSuggestions({
          decoratorRect,
          prevProps,
          prevState,
          props: this.props,
          state: this.state,
        });
        Object.keys(newStyles).forEach((key) => {
          this.refs.popover.style[key] = newStyles[key];
        });
      }
    };

    componentWillUnmount = () => {
      this.props.callbacks.onChange = undefined;
    };

    onEditorStateChange = (editorState) => {
      const searches = this.props.store.getAllSearches();

      // if no search portal is active there is no need to show the popover
      if (searches.size === 0) {
        return editorState;
      }

      const removeList = () => {
        this.props.store.resetEscapedSearch();
        this.closeDropdown();
        return editorState;
      };

      // get the current selection
      const selection = editorState.getSelection();
      const anchorOffset = selection.getAnchorOffset();

      // the list should not be visible if a range is selected or the editor has no focus
      if (!selection.isCollapsed() || !selection.getHasFocus()) return removeList();

      // identify the start & end positon of each search-text
      const offsetDetails = searches.map((offsetKey) => decodeOffsetKey(offsetKey));

      // a leave can be empty when it is removed due e.g. using backspace
      const leaves = offsetDetails.map(({ blockKey, decoratorKey, leafKey }) => (
        editorState
        .getBlockTree(blockKey)
        .getIn([decoratorKey, 'leaves', leafKey])
      ));

      // if all leaves are undefined the popover should be removed
      if (leaves.every((leave) => leave === undefined)) {
        return removeList();
      }

      // Checks that the cursor is after the 'autocomplete' character but still somewhere in
      // the word (search term). Setting it to allow the cursor to be left of
      // the 'autocomplete' causes troubles due selection confusion.
      const selectionIsInsideWord = leaves
      .filter((leave) => leave !== undefined)
      .map(({ start, end }) => (
        start === 0 && anchorOffset === 1 && anchorOffset <= end || // @ is the first character
        anchorOffset > start + 1 && anchorOffset <= end // @ is in the text or at the end
      ));

      if (selectionIsInsideWord.every((isInside) => isInside === false)) return removeList();

      this.activeOffsetKey = selectionIsInsideWord
      .filter(value => value === true)
      .keySeq()
      .first();

      this.onSearchChange(editorState, selection);

      // make sure the escaped search is reseted in the cursor since the user
      // already switched to another completion search
      if (!this.props.store.isEscaped(this.activeOffsetKey)) {
        this.props.store.resetEscapedSearch();
      }

      // If none of the above triggered to close the window, it's safe to assume
      // the dropdown should be open. This is useful when a user focuses on another
      // input field and then comes back: the dropdown will again.
      if (!this.state.isActive && !this.props.store.isEscaped(this.activeOffsetKey)) {
        this.openDropdown();
      }

      // makes sure the focused index is reseted every time a new selection opens
      // or the selection was moved to another completion search
      if (this.lastSelectionIsInsideWord === undefined ||
          !selectionIsInsideWord.equals(this.lastSelectionIsInsideWord)) {
        this.setState({
          focusedOptionIndex: 0,
        });
      }

      this.lastSelectionIsInsideWord = selectionIsInsideWord;

      return editorState;
    };

    onSearchChange = (editorState, selection) => {
      const { word } = getSearchText(editorState, selection);
      const searchValue = word.substring(1, word.length);
      if (this.lastSearchValue !== searchValue) {
        this.lastSearchValue = searchValue;
        this.props.onSearchChange({ value: searchValue });
      }
    };

    onDownArrow = (keyboardEvent) => {
      keyboardEvent.preventDefault();
      const newIndex = this.state.focusedOptionIndex + 1;
      this.onCompletionFocus(newIndex >= this.props.suggestions.size ? 0 : newIndex);
    };

    onTab = (keyboardEvent) => {
      keyboardEvent.preventDefault();
      this.commitSelection();
    };

    onUpArrow = (keyboardEvent) => {
      keyboardEvent.preventDefault();
      if (this.props.suggestions.size > 0) {
        const newIndex = this.state.focusedOptionIndex - 1;
        this.onCompletionFocus(Math.max(newIndex, 0));
      }
    };

    onEscape = (keyboardEvent) => {
      keyboardEvent.preventDefault();

      const activeOffsetKey = this.lastSelectionIsInsideWord
      .filter(value => value === true)
      .keySeq()
      .first();
      this.props.store.escapeSearch(activeOffsetKey);
      this.closeDropdown();

      // to force a re-render of the outer component to change the aria props
      this.props.store.setEditorState(this.props.store.getEditorState());
    };

    onCompletionSelect = (completion) => {
      this.closeDropdown();
      const newEditorState = addModifier(
        this.props.store.getEditorState(),
        completion,
        this.props.entityMutability,
      );
      this.props.store.setEditorState(newEditorState);
    };

    onCompletionFocus = (index) => {
      const descendant = `completion-option-${this.key}-${index}`;
      this.props.ariaProps.ariaActiveDescendantID = descendant;
      this.state.focusedOptionIndex = index;

      // to force a re-render of the outer component to change the aria props
      this.props.store.setEditorState(this.props.store.getEditorState());
    };

    commitSelection = () => {
      this.onCompletionSelect(this.props.suggestions.get(this.state.focusedOptionIndex));
      return true;
    };

    openDropdown = () => {
      // This is a really nasty way of attaching & releasing the key related functions.
      // It assumes that the keyFunctions object will not loose its reference and
      // by this we can replace inner parameters spread over different modules.
      // This better be some registering & unregistering logic. PRs are welcome :)
      this.props.callbacks.onDownArrow = this.onDownArrow;
      this.props.callbacks.onUpArrow = this.onUpArrow;
      this.props.callbacks.onEscape = this.onEscape;
      this.props.callbacks.handleReturn = this.commitSelection;
      this.props.callbacks.onTab = this.onTab;

      const descendant = `completion-option-${this.key}-${this.state.focusedOptionIndex}`;
      this.props.ariaProps.ariaActiveDescendantID = descendant;
      this.props.ariaProps.ariaOwneeID = `completions-list-${this.key}`;
      this.props.ariaProps.ariaHasPopup = 'true';
      this.props.ariaProps.ariaExpanded = 'true';
      this.setState({
        isActive: true,
      });
    };

    closeDropdown = () => {
      // make sure none of these callbacks are triggered
      this.props.callbacks.onDownArrow = undefined;
      this.props.callbacks.onUpArrow = undefined;
      this.props.callbacks.onTab = undefined;
      this.props.callbacks.onEscape = undefined;
      this.props.callbacks.handleReturn = undefined;
      this.props.ariaProps.ariaHasPopup = 'false';
      this.props.ariaProps.ariaExpanded = 'false';
      this.props.ariaProps.ariaActiveDescendantID = undefined;
      this.props.ariaProps.ariaOwneeID = undefined;
      this.setState({
        isActive: false,
      });
    };

    render() {
      if (!this.state.isActive) {
        return null;
      }

      const { theme = {} } = this.props;
      return (
        <div
          {...this.props}
          className={ theme[suggestionsThemeKey] }
          role="listbox"
          id={ `completions-list-${this.key}` }
          ref="popover"
        >
          {
            this.props.suggestions.map((completion, index) => (
              <Entry
                key={ completion.get('name') }
                onCompletionSelect={ this.onCompletionSelect }
                onCompletionFocus={ this.onCompletionFocus }
                isFocused={ this.state.focusedOptionIndex === index }
                completion={ completion }
                index={ index }
                id={ `completion-option-${this.key}-${index}` }
                theme={ theme }
              />
            ))
          }
        </div>
      );
    }
  };
}
