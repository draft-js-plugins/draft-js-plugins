import React, { Component } from 'react';

import EmojiOption from './EmojiOption';
import addEmoji from '../modifiers/addEmoji';
import getSearchText from '../utils/getSearchText';
import { genKey } from 'draft-js';
import emojiShortNames from '../utils/shortNames';

export default class EmojiSearch extends Component {

  state = {
    focusedOptionIndex: 0,
    isOpen: true,
  };

  componentWillMount() {
    this.key = genKey();

    // This a really nasty way of attaching & releasing the key related functions.
    // It assumes that the keyFunctions object will not loose its reference and
    // by this we can replace inner parameters spread over different modules.
    // This better be some registering & unregistering logic. PRs are welcome :)
    this.props.callbacks.onDownArrow = this.onDownArrow;
    this.props.callbacks.onUpArrow = this.onUpArrow;
    this.props.callbacks.onEscape = this.onEscape;
    this.props.callbacks.handleReturn = this.handleReturn;
    this.props.callbacks.onChange = this.onEditorStateChange;
    this.props.ariaProps.ariaActiveDescendantID = `emoji-option-${this.key}-${this.state.focusedOptionIndex}`;
    this.props.ariaProps.ariaOwneeID = `emojis-list-${this.key}`;
  }

  componentDidMount() {
    // This a really nasty way of attaching & releasing the key related functions.
    // It assumes that the ariaProps object will not loose its reference and
    // by this we can replace inner parameters spread over different modules.
    // This better be some registering & unregistering logic. PRs are welcome :)
    if (this.state.isOpen) {
      this.props.ariaProps.ariaHasPopup = 'true';
      this.props.ariaProps.ariaExpanded = 'true';
    } else {
      this.updateAriaCloseDropdown();
    }

    // Note: to force a re-render of the outer component to change the aria props
    this.props.updateEditorState(this.props.getEditorState());
  }

  componentDidUpdate = () => {
    // In case the list shrinks there should be still an option focused.
    // Note: this might run multiple times and deduct 1 until the condition is
    // not fullfilled anymore.
    if (this.state.focusedOptionIndex >= this.filteredEmojis.size) {
      this.setState({
        focusedOptionIndex: this.filteredEmojis.size - 1,
      });
    }
  };

  componentWillUnmount() {
    // make sure none of these callbacks are triggered
    this.props.callbacks.onDownArrow = undefined;
    this.props.callbacks.onUpArrow = undefined;
    this.props.callbacks.onEscape = undefined;
    this.props.callbacks.handleReturn = undefined;
    this.props.callbacks.onChange = undefined;
  }

  onEditorStateChange = (editorState) => {
    // store the initialSelection (must be at the @)
    if (this.initialSelection === undefined) {
      this.initialSelection = editorState.getSelection();
    }

    const removeList = () => {
      if (this.state.isOpen) {
        this.setState({
          isOpen: false,
        });
      }

      return editorState;
    };

    const selection = editorState.getSelection();

    // the list should not be visible in case a range is selected or the editor has no focus
    if (!selection.isCollapsed() || !selection.getHasFocus()) return removeList();

    // only show the search component for the current block
    const sameBlock = selection.getAnchorKey() === this.initialSelection.getAnchorKey();
    if (!sameBlock) return removeList();

    // Checks that the curosr is after the @ character but still somewhere in
    // the word (search term). Setting it to allow the cursor being left of
    // the @ causes causes troubles as due selection connfusion.
    const { begin, end } = getSearchText(editorState, this.initialSelection);
    const anchorOffset = selection.getAnchorOffset();
    if (anchorOffset <= begin || end < anchorOffset) return removeList();

    // If none of the above triggered to close the window, it's save to assume
    // the dropdown should be open. This is useful when a user focuses on another
    // input field and then comes back: the dropwdown will again.
    if (!this.state.isOpen) {
      this.setState({
        isOpen: true,
      });
    }

    return editorState;
  };

  onEmojiSelect = (emoji) => {
    this.updateAriaCloseDropdown();
    const selection = this.props.getEditorState().getSelection();
    const newEditorState = addEmoji(this.props.getEditorState(), emoji, selection);
    this.props.updateEditorState(newEditorState);
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

  onEscape = (keyboardEvent) => {
    keyboardEvent.preventDefault();

    this.updateAriaCloseDropdown();
    this.setState({
      isOpen: false,
    });

    // to force a re-render of the outer component to change the aria props
    this.props.updateEditorState(this.props.getEditorState());
  };

  onEmojiFocus = (index) => {
    this.props.ariaProps.ariaActiveDescendantID = `emoji-option-${this.key}-${index}`;
    this.setState({
      focusedOptionIndex: index,
    });

    // to force a re-render of the outer component to change the aria props
    this.props.updateEditorState(this.props.getEditorState());
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

  handleReturn = () => {
    this.onEmojiSelect(this.filteredEmojis.get(this.state.focusedOptionIndex));
    return true;
  };

  updateAriaCloseDropdown = () => {
    this.props.ariaProps.ariaHasPopup = 'false';
    this.props.ariaProps.ariaExpanded = 'false';
    this.props.ariaProps.ariaActiveDescendantID = undefined;
    this.props.ariaProps.ariaOwneeID = undefined;
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
