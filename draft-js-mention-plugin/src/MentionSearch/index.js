import React, { Component } from 'react';

import MentionOption from './MentionOption';
import addMention from '../modifiers/addMention';
import getSearchText from '../utils/getSearchText';
import decodeOffsetKey from '../utils/decodeOffsetKey';
import { genKey, getVisibleSelectionRect } from 'draft-js';
import { List } from 'immutable';

export default class MentionSearch extends Component {

  componentWillMount() {
    this.key = genKey();

    // TODO simplify this (there should be only one mention search on the page)
    this.props.callbacks.onChange = this.props.callbacks.onChange.set(this.key, this.onEditorStateChange);
  }

  componentWillUpdate = (nextProps) => {
    // if (nextProps.store.searchActive) {
    //   // TODO avoid double binding
    //   this.props.store.forceRenderOfMentionSearch = this.forceUpdate.bind(this);
    //   this.props.store.filteredMentions = this.getMentionsForFilter();
    // } else {
    //   this.props.store.forceRenderOfMentionSearch = undefined;
    //   this.props.store.filteredMentions = undefined;
    // }
  };

  componentDidUpdate = () => {
    if (this.refs.popover) {
      const visibleRect = getVisibleSelectionRect(window);
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      this.refs.popover.style.top = `${visibleRect.top + scrollTop}px`;
      this.refs.popover.style.left = `${visibleRect.left + scrollLeft}px`;
    }

    // In case the list shrinks there should be still an option focused.
    // Note: this might run multiple times and deduct 1 until the condition is
    // not fullfilled anymore.
    // TODO
    // const size = this.props.store.filteredMentions.size;
    // if (size > 0 && this.props.store.focusedOptionIndex >= size) {
    //   this.setState({
    //     focusedOptionIndex: this.props.store.filteredMentions.size - 1,
    //   });
    // }
  };

  componentWillUnmount = () => {
    // TODO simplify this (there should be only one mention search on the page)
    this.props.callbacks.onChange = this.props.callbacks.onChange.delete(this.key);
  };

  onEditorStateChange = (editorState) => {
    const searches = this.props.store.getAll();

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

    // Checks that the cursor is after the @ character but still somewhere in
    // the word (search term). Setting it to allow the cursor to be left of
    // the @ causes troubles as due selection confusion.
    const anchorOffset = selection.getAnchorOffset();
    if (anchorOffset <= start || end < anchorOffset) return removeList();

    // If none of the above triggered to close the window, it's safe to assume
    // the dropdown should be open. This is useful when a user focuses on another
    // input field and then comes back: the dropdown will again.
    // this.openDropdown();
    console.log('select');

    return editorState;
  };

  onMentionSelect = (mention) => {
    this.closeDropdown();
    const newEditorState = addMention(this.props.store.getEditorState(), mention);
    this.props.store.setEditorState(newEditorState);
  };

  onMentionFocus = (index) => {
    const descendant = `mention-option-${this.key}-${index}`;
    this.props.ariaProps.ariaActiveDescendantID = this.props.ariaProps.ariaActiveDescendantID.set(this.key, descendant);

    this.props.store.focusedOptionIndex = index;

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

  closeDropdown = () => {
    // make sure none of these callbacks are triggered
    this.props.callbacks.onDownArrow = this.props.callbacks.onDownArrow.delete(this.key);
    this.props.callbacks.onUpArrow = this.props.callbacks.onUpArrow.delete(this.key);
    this.props.callbacks.onEscape = this.props.callbacks.onEscape.delete(this.key);
    this.props.callbacks.handleReturn = this.props.callbacks.handleReturn.delete(this.key);
    this.props.ariaProps.ariaHasPopup = this.props.ariaProps.ariaHasPopup.delete(this.key);
    this.props.ariaProps.ariaExpanded = this.props.ariaProps.ariaExpanded.delete(this.key);
    this.props.ariaProps.ariaActiveDescendantID = this.props.ariaProps.ariaActiveDescendantID.delete(this.key);
    this.props.ariaProps.ariaOwneeID = this.props.ariaProps.ariaOwneeID.delete(this.key);
    this.props.store.searchActive = false;
  };

  render() {
    if (!this.props.store.searchActive) {
      return null;
    }

    const { theme } = this.props;
    return (
      <div
        {...this.props}
        className={ theme.get('autocomplete') }
        contentEditable={ false }
        role="listbox"
        id={ `mentions-list-${this.key}` }
        ref="popover"
      >
        {
          this.props.store.filteredMentions.map((mention, index) => (
            <MentionOption
              key={ mention.get('name') }
              onMentionSelect={ this.onMentionSelect }
              onMentionFocus={ this.onMentionFocus }
              isFocused={ this.props.store.focusedOptionIndex === index }
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
