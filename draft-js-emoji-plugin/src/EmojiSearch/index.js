import React, { Component } from 'react';

import EmojiOption from './EmojiOption';
import addEmoji from '../modifiers/addEmoji';
import getSearchText from '../utils/getSearchText';
import decodeOffsetKey from '../utils/decodeOffsetKey';
import { genKey } from 'draft-js';
import emojiShortNames from '../utils/shortNames';

export default class EmojiSearch extends Component {

  state = {
    focusedOptionIndex: 0,
    isOpen: false,
  };

  componentWillMount() {
    this.key = genKey();

    // This a really nasty way of attaching & releasing the key related functions.
    // It assumes that the keyFunctions object will not loose its reference and
    // by this we can replace inner parameters spread over different modules.
    // This better be some registering & unregistering logic. PRs are welcome :)
    this.props.callbacks.onChange = this.props.callbacks.onChange.set(this.key, this.onEditorStateChange);
  }

  componentDidMount() {
    // since the initial state is false we have to set the proper aria states
    // for a closed popover
    this.updateAriaCloseDropdown();

    // Note: to force a re-render of the outer component to change the aria props
    this.props.setEditorState(this.props.getEditorState());
  }

  componentDidUpdate = () => {
    // In case the list shrinks there should be still an option focused.
    // Note: this might run multiple times and deduct 1 until the condition is
    // not fullfilled anymore.
    const size = this.filteredEmojis.size;
    if (size > 0 && this.state.focusedOptionIndex >= size) {
      this.setState({
        focusedOptionIndex: this.filteredEmojis.size - 1,
      });
    }
  };

  componentWillUnmount = () => {
    this.props.callbacks.onChange = this.props.callbacks.onChange.delete(this.key);
  };

  onEditorStateChange = (editorState) => {
    const removeList = () => {
      if (this.state.isOpen) {
        this.closeDropdown();
      }

      return editorState;
    };

    // identify the start & end positon of the search-text
    const { blockKey, decoratorKey, leafKey } = decodeOffsetKey(this.props.offsetKey);

    const leave = editorState
      .getBlockTree(blockKey)
      .getIn([decoratorKey, 'leaves', leafKey]);

    // the leave can be empty when it is removed due e.g. using backspace
    if (leave === undefined) {
      return editorState;
    }

    const { start, end } = leave;

    // get the current selection
    const selection = editorState.getSelection();

    // the list should not be visible in case a range is selected or the editor has no focus
    if (!selection.isCollapsed() || !selection.getHasFocus()) return removeList();

    // only show the search component for the current block
    const sameBlock = selection.getAnchorKey() === blockKey;
    if (!sameBlock) return removeList();

    // Checks that the curosr is after the @ character but still somewhere in
    // the word (search term). Setting it to allow the cursor being left of
    // the @ causes causes troubles as due selection connfusion.
    const anchorOffset = selection.getAnchorOffset();
    if (anchorOffset <= start || end < anchorOffset) return removeList();

    // If none of the above triggered to close the window, it's save to assume
    // the dropdown should be open. This is useful when a user focuses on another
    // input field and then comes back: the dropwdown will again.
    if (!this.state.isOpen) {
      this.openDropdown();
    }

    return editorState;
  };

  onEmojiSelect = (emoji) => {
    this.closeDropdown();
    const newEditorState = addEmoji(this.props.getEditorState(), emoji);
    this.props.setEditorState(newEditorState);
  };

  onDownArrow = (keyboardEvent) => {
    keyboardEvent.preventDefault();
    const newIndex = this.state.focusedOptionIndex + 1;
    this.onEmojiFocus(newIndex >= this.filteredEmojis.size ? 0 : newIndex);
  };

  onUpArrow = (keyboardEvent) => {
    keyboardEvent.preventDefault();
    if (this.filteredEmojis.size > 0) {
      const newIndex = this.state.focusedOptionIndex - 1;
      this.onEmojiFocus(Math.max(newIndex, 0));
    }
  };

  onTab = (keyboardEvent) => {
    keyboardEvent.preventDefault();
    this.commitSelection();
  };

  onEscape = (keyboardEvent) => {
    keyboardEvent.preventDefault();

    this.closeDropdown();

    // to force a re-render of the outer component to change the aria props
    this.props.setEditorState(this.props.getEditorState());
  };

  onEmojiFocus = (index) => {
    const descendant = `emoji-option-${this.key}-${index}`;
    this.props.ariaProps.ariaActiveDescendantID = this.props.ariaProps.ariaActiveDescendantID.set(this.key, descendant);
    this.setState({
      focusedOptionIndex: index,
    });

    // to force a re-render of the outer component to change the aria props
    this.props.setEditorState(this.props.getEditorState());
  };

  // Get the first 6 emojis that match
  getEmojisForFilter = () => {
    const selection = this.props.getEditorState().getSelection();
    const { word } = getSearchText(this.props.getEditorState(), selection);
    const emojiValue = word.substring(1, word.length).toLowerCase();
    const filteredValues = emojiShortNames.filter((emojiShortName) => (
      !emojiValue || emojiShortName.indexOf(emojiValue) > -1
    ));
    const size = filteredValues.size < 6 ? filteredValues.size : 6;
    return filteredValues.setSize(size);
  };

  commitSelection = () => {
    this.onEmojiSelect(this.filteredEmojis.get(this.state.focusedOptionIndex));
    return true;
  };

  openDropdown = () => {
    // This a really nasty way of attaching & releasing the key related functions.
    // It assumes that the keyFunctions object will not loose its reference and
    // by this we can replace inner parameters spread over different modules.
    // This better be some registering & unregistering logic. PRs are welcome :)
    this.props.callbacks.onDownArrow = this.props.callbacks.onDownArrow.set(this.key, this.onDownArrow);
    this.props.callbacks.onUpArrow = this.props.callbacks.onUpArrow.set(this.key, this.onUpArrow);
    this.props.callbacks.onEscape = this.props.callbacks.onEscape.set(this.key, this.onEscape);
    this.props.callbacks.handleReturn = this.props.callbacks.handleReturn.set(this.key, this.commitSelection);
    this.props.callbacks.onTab = this.props.callbacks.onTab.set(this.key, this.onTab);

    const descendant = `emoji-option-${this.key}-${this.state.focusedOptionIndex}`;
    this.props.ariaProps.ariaActiveDescendantID = this.props.ariaProps.ariaActiveDescendantID.set(this.key, descendant);
    const owneeId = `emojis-list-${this.key}`;
    this.props.ariaProps.ariaOwneeID = this.props.ariaProps.ariaOwneeID.set(this.key, owneeId);
    this.props.ariaProps.ariaHasPopup = this.props.ariaProps.ariaHasPopup.set(this.key, true);
    this.props.ariaProps.ariaExpanded = this.props.ariaProps.ariaExpanded.set(this.key, true);
    this.setState({
      isOpen: true,
    });
  };

  updateAriaCloseDropdown = () => {
    this.props.ariaProps.ariaHasPopup = this.props.ariaProps.ariaHasPopup.delete(this.key);
    this.props.ariaProps.ariaExpanded = this.props.ariaProps.ariaExpanded.delete(this.key);
    this.props.ariaProps.ariaActiveDescendantID = this.props.ariaProps.ariaActiveDescendantID.delete(this.key);
    this.props.ariaProps.ariaOwneeID = this.props.ariaProps.ariaOwneeID.delete(this.key);
  };

  closeDropdown = () => {
    // make sure none of these callbacks are triggered
    this.props.callbacks.onDownArrow = this.props.callbacks.onDownArrow.delete(this.key);
    this.props.callbacks.onUpArrow = this.props.callbacks.onUpArrow.delete(this.key);
    this.props.callbacks.onEscape = this.props.callbacks.onEscape.delete(this.key);
    this.props.callbacks.handleReturn = this.props.callbacks.handleReturn.delete(this.key);
    this.updateAriaCloseDropdown();
    this.setState({
      isOpen: false,
    });
  };

  render() {
    this.filteredEmojis = this.getEmojisForFilter();
    const { theme } = this.props;
    return (
      <span {...this.props} className={ theme.get('autocomplete') } spellCheck={ false }>
        { this.state.isOpen && this.filteredEmojis.size > 0 ?
        <div
          className={ theme.get('autocompletePopover') }
          contentEditable={ false }
          role="listbox"
          id={ `emojis-list-${this.key}` }
        >
          {
            this.filteredEmojis.map((emoji, index) => (
              <EmojiOption
                key={ emoji }
                onEmojiSelect={ this.onEmojiSelect }
                onEmojiFocus={ this.onEmojiFocus }
                isFocused={ this.state.focusedOptionIndex === index }
                emoji={ emoji }
                index={ index }
                id={ `emoji-option-${this.key}-${index}` }
                theme={ theme }
              />
            ))
          }
        </div>
        : null}
        { this.props.children }
      </span>
    );
  }
}
