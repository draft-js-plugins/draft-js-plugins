import React, { Component } from 'react';
import addMention from '../modifiers/addMention';

export default class MentionSearchPortal extends Component {

  componentWillMount() {
    this.props.store.getEditorState = this.props.getEditorState;
    this.props.store.setEditorState = this.props.setEditorState;
    this.props.store.searchActive = true;
    this.props.store.focusedOptionIndex = 0;
    this.openDropdown();
  }

  componentWillUnmount() {
    this.props.store.getEditorState = undefined;
    this.props.store.setEditorState = undefined;
    this.props.store.searchActive = false;
    this.props.store.focusedOptionIndex = undefined;
  }

  onDownArrow = (keyboardEvent) => {
    keyboardEvent.preventDefault();
    const newIndex = this.props.store.focusedOptionIndex + 1;
    this.onMentionFocus(newIndex >= this.props.store.filteredMentions.size ? 0 : newIndex);
  };

  onTab = (keyboardEvent) => {
    keyboardEvent.preventDefault();
    this.commitSelection();
  };

  onUpArrow = (keyboardEvent) => {
    keyboardEvent.preventDefault();
    if (this.props.store.filteredMentions.size > 0) {
      const newIndex = this.props.store.focusedOptionIndex - 1;
      this.onMentionFocus(Math.max(newIndex, 0));
    }
  };

  onEscape = (keyboardEvent) => {
    keyboardEvent.preventDefault();

    this.closeDropdown();

    // to force a re-render of the outer component to change the aria props
    this.props.store.setEditorState(this.props.store.getEditorState());
  };

  onMentionFocus = (index) => {
    const descendant = `mention-option-${this.key}-${index}`;
    this.props.ariaProps.ariaActiveDescendantID = this.props.ariaProps.ariaActiveDescendantID.set(this.key, descendant);

    this.props.store.focusedOptionIndex = index;
    this.props.store.forceRenderOfMentionSearch();

    // to force a re-render of the outer component to change the aria props
    // TODO
    // this.props.store.setEditorState(this.props.store.getEditorState());
  };

  onMentionSelect = (mention) => {
    this.closeDropdown();
    const newEditorState = addMention(this.props.store.getEditorState(), mention);
    this.props.store.setEditorState(newEditorState);
  };

  commitSelection = () => {
    this.onMentionSelect(this.props.store.filteredMentions.get(this.props.store.focusedOptionIndex));
    return true;
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

  updateAriaCloseDropdown = () => {
    this.props.ariaProps.ariaHasPopup = this.props.ariaProps.ariaHasPopup.delete(this.key);
    this.props.ariaProps.ariaExpanded = this.props.ariaProps.ariaExpanded.delete(this.key);
    this.props.ariaProps.ariaActiveDescendantID = this.props.ariaProps.ariaActiveDescendantID.delete(this.key);
    this.props.ariaProps.ariaOwneeID = this.props.ariaProps.ariaOwneeID.delete(this.key);
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

    const descendant = `mention-option-${this.key}-${this.props.store.focusedOptionIndex}`;
    this.props.ariaProps.ariaActiveDescendantID = this.props.ariaProps.ariaActiveDescendantID.set(this.key, descendant);
    const owneeId = `mentions-list-${this.key}`;
    this.props.ariaProps.ariaOwneeID = this.props.ariaProps.ariaOwneeID.set(this.key, owneeId);
    this.props.ariaProps.ariaHasPopup = this.props.ariaProps.ariaHasPopup.set(this.key, true);
    this.props.ariaProps.ariaExpanded = this.props.ariaProps.ariaExpanded.set(this.key, true);
    this.props.store.searchActive = true;
  };

  render() {
    return (
      <span>
        { this.props.children }
      </span>
    );
  }
}

export default MentionSearchPortal;
