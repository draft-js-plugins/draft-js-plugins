import React, { Component } from 'react';

import MentionOption from './MentionOption';
import addMention from '../modifiers/addMention';
import getSearchText from '../utils/getSearchText';
import decodeOffsetKey from '../utils/decodeOffsetKey';
import { genKey, getVisibleSelectionRect } from 'draft-js';
import { List } from 'immutable';

export default class MentionSearch extends Component {

  state = {
    isActive: false,
    focusedOptionIndex: 0,
  };

  componentWillMount() {
    this.key = genKey();
    this.props.callbacks.onChange = this.onEditorStateChange;
  }

  componentDidUpdate = () => {
    if (this.refs.popover) {
      // In case the list shrinks there should be still an option focused.
      // Note: this might run multiple times and deduct 1 until the condition is
      // not fullfilled anymore.
      const size = this.filteredMentions.size;
      if (size > 0 && this.state.focusedOptionIndex >= size) {
        this.setState({
          focusedOptionIndex: size - 1,
        });
      }

      const visibleRect = getVisibleSelectionRect(window);
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      this.refs.popover.style.top = `${visibleRect.top + scrollTop}px`;
      this.refs.popover.style.left = `${visibleRect.left + scrollLeft}px`;
    }
  };

  componentWillUnmount = () => {
    this.props.callbacks.onChange = undefined;
  };

  onEditorStateChange = (editorState) => {
    const searches = this.props.store.getAllSearches();

    // if no search portal is active there is no need to show the popover
    if (searches.size === 0) {
      // TODO if open close the popover
      return editorState;
    }

    const removeList = () => {
      this.closeDropdown();
      return editorState;
    };

    // get the current selection
    const selection = editorState.getSelection();

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

    const anchorOffset = selection.getAnchorOffset();

    // Checks that the cursor is after the @ character but still somewhere in
    // the word (search term). Setting it to allow the cursor to be left of
    // the @ causes troubles due selection confusion.
    const selectionIsInsideWord = leaves.map(({ start, end }) => (
      anchorOffset > start + 1 && anchorOffset <= end
    ));
    if (selectionIsInsideWord.every((isInside) => isInside === false)) return removeList();

    // If none of the above triggered to close the window, it's safe to assume
    // the dropdown should be open. This is useful when a user focuses on another
    // input field and then comes back: the dropdown will again.

    console.log(selectionIsInsideWord.filter(value => value === true).keySeq().first());
    const activeOffsetKey = selectionIsInsideWord
      .filter(value => value === true)
      .keySeq()
      .first();

    // console.log(!this.props.store.isEscaped(activeOffsetKey));
    if (!this.state.isActive && !this.props.store.isEscaped(activeOffsetKey)) {
      this.openDropdown();
    }

    // makes sure the focused index is reseted every time a new selection opens
    // or the selection was moved to another mention search
    if (this.lastSelectionIsInsideWord === undefined ||
        !selectionIsInsideWord.equals(this.lastSelectionIsInsideWord)) {
      this.setState({
        focusedOptionIndex: 0,
      });
    }

    this.lastSelectionIsInsideWord = selectionIsInsideWord;

    return editorState;
  };

  onDownArrow = (keyboardEvent) => {
    keyboardEvent.preventDefault();
    const newIndex = this.state.focusedOptionIndex + 1;
    this.onMentionFocus(newIndex >= this.filteredMentions.size ? 0 : newIndex);
  };

  onTab = (keyboardEvent) => {
    keyboardEvent.preventDefault();
    this.commitSelection();
  };

  onUpArrow = (keyboardEvent) => {
    keyboardEvent.preventDefault();
    if (this.filteredMentions.size > 0) {
      const newIndex = this.state.focusedOptionIndex - 1;
      this.onMentionFocus(Math.max(newIndex, 0));
    }
  };

  onEscape = (keyboardEvent) => {
    keyboardEvent.preventDefault();

    const activeOffsetKey = this.lastSelectionIsInsideWord
      .filter(value => value === true)
      .keySeq()
      .first();

    console.log(activeOffsetKey);
    this.props.store.escapeSearch(activeOffsetKey);
    this.closeDropdown();

    // to force a re-render of the outer component to change the aria props
    this.props.store.setEditorState(this.props.store.getEditorState());
  };

  onMentionSelect = (mention) => {
    this.closeDropdown();
    const newEditorState = addMention(this.props.store.getEditorState(), mention);
    this.props.store.setEditorState(newEditorState);
  };

  onMentionFocus = (index) => {
    const descendant = `mention-option-${this.key}-${index}`;
    this.props.ariaProps.ariaActiveDescendantID = descendant;
    this.state.focusedOptionIndex = index;

    // to force a re-render of the outer component to change the aria props
    this.props.store.setEditorState(this.props.store.getEditorState());
  };

  // Get the first 5 mentions that match
  getMentionsForFilter = () => {
    const selection = this.props.store.getEditorState().getSelection();
    const { word } = getSearchText(this.props.store.getEditorState(), selection);
    const mentionValue = word.substring(1, word.length).toLowerCase();
    const mentions = this.props.mentions ? this.props.mentions : List([]);
    const filteredValues = mentions.filter((mention) => (
      !mentionValue || mention.get('name').toLowerCase().indexOf(mentionValue) > -1
    ));
    const size = filteredValues.size < 5 ? filteredValues.size : 5;
    return filteredValues.setSize(size);
  };

  commitSelection = () => {
    this.onMentionSelect(this.filteredMentions.get(this.state.focusedOptionIndex));
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

    const descendant = `mention-option-${this.key}-${this.state.focusedOptionIndex}`;
    this.props.ariaProps.ariaActiveDescendantID = descendant;
    this.props.ariaProps.ariaOwneeID = `mentions-list-${this.key}`;
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

    this.filteredMentions = this.getMentionsForFilter();

    const { theme } = this.props;
    return (
      <div
        {...this.props}
        className={ theme.get('autocomplete') }
        role="listbox"
        id={ `mentions-list-${this.key}` }
        ref="popover"
      >
        {
          this.filteredMentions.map((mention, index) => (
            <MentionOption
              key={ mention.get('name') }
              onMentionSelect={ this.onMentionSelect }
              onMentionFocus={ this.onMentionFocus }
              isFocused={ this.state.focusedOptionIndex === index }
              mention={ mention }
              index={ index }
              id={ `mention-option-${this.key}-${index}` }
              theme={ theme }
            />
          ))
        }
      </div>
    );
  }
}
