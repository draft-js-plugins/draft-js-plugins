import React, { Component } from 'react';

import MentionOption from './MentionOption';
import addMention from '../modifiers/addMention';
import styles from './styles';
import getSearchText from '../utils/getSearchText';
import { genKey } from 'draft-js';

export default (mentions, callbacks, ariaProps) => {
  const updateAriaCloseDropdown = () => {
    ariaProps.ariaHasPopup = 'false'; // eslint-disable-line no-param-reassign
    ariaProps.ariaExpanded = 'false'; // eslint-disable-line no-param-reassign
    ariaProps.ariaActiveDescendantID = undefined; // eslint-disable-line no-param-reassign
    ariaProps.ariaOwneeID = undefined; // eslint-disable-line no-param-reassign
  };

  class MentionSearch extends Component {

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
      callbacks.onDownArrow = this.onDownArrow; // eslint-disable-line no-param-reassign
      callbacks.onUpArrow = this.onUpArrow; // eslint-disable-line no-param-reassign
      callbacks.onEscape = this.onEscape; // eslint-disable-line no-param-reassign
      callbacks.handleReturn = this.handleReturn; // eslint-disable-line no-param-reassign
      callbacks.onChange = this.onEditorStateChange; // eslint-disable-line no-param-reassign
      ariaProps.ariaActiveDescendantID = `mention-option-${this.key}-${this.state.focusedOptionIndex}`; // eslint-disable-line no-param-reassign
      ariaProps.ariaOwneeID = `mentions-list-${this.key}`; // eslint-disable-line no-param-reassign
    }

    componentDidMount() {
      // This a really nasty way of attaching & releasing the key related functions.
      // It assumes that the ariaProps object will not loose its reference and
      // by this we can replace inner parameters spread over different modules.
      // This better be some registering & unregistering logic. PRs are welcome :)
      if (this.state.isOpen) {
        ariaProps.ariaHasPopup = 'true'; // eslint-disable-line no-param-reassign
        ariaProps.ariaExpanded = 'true'; // eslint-disable-line no-param-reassign
      } else {
        updateAriaCloseDropdown();
      }

      // Note: to force a re-render of the outer component to change the aria props
      this.props.editor.onChange(this.props.editor.props.editorState);
    }

    componentWillUnmount() {
      callbacks.onDownArrow = undefined; // eslint-disable-line no-param-reassign
      callbacks.onUpArrow = undefined; // eslint-disable-line no-param-reassign
      callbacks.onEscape = undefined; // eslint-disable-line no-param-reassign
      callbacks.handleReturn = undefined; // eslint-disable-line no-param-reassign
      callbacks.onChange = undefined; // eslint-disable-line no-param-reassign
    }

    onEditorStateChange = (editorState) => {
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
      if (!selection.isCollapsed() || !selection.getHasFocus()) return removeList();
      const sameBlock = selection.getAnchorKey() === this.initialSelection.getAnchorKey();
      if (!sameBlock) return removeList();
      const { begin, end } = getSearchText(editorState, this.initialSelection);
      const anchorOffset = selection.getAnchorOffset();
      if (anchorOffset <= begin || end < anchorOffset) return removeList();

      if (!this.state.isOpen) {
        this.setState({
          isOpen: true,
        });
      }

      return editorState;
    };

    onMentionSelect = (mention) => {
      updateAriaCloseDropdown();
      const selection = this.props.editor.props.editorState.getSelection();
      const newEditorState = addMention(this.props.editor.props.editorState, mention, selection);
      this.props.editor.onChange(newEditorState);
    };

    onDownArrow = (keyboardEvent) => {
      keyboardEvent.preventDefault();
      const filteredMentions = this.getMentionsForFilter();
      const newIndex = this.state.focusedOptionIndex + 1;
      this.onMentionFocus(newIndex >= filteredMentions.size ? 0 : newIndex);
    };

    onUpArrow = (keyboardEvent) => {
      keyboardEvent.preventDefault();

      const filteredMentions = this.getMentionsForFilter();
      if (filteredMentions.size > 0) {
        const newIndex = this.state.focusedOptionIndex - 1;
        this.onMentionFocus(Math.max(newIndex, 0));
      }
    };

    onEscape = (keyboardEvent) => {
      keyboardEvent.preventDefault();

      updateAriaCloseDropdown();
      this.setState({
        isOpen: false,
      });

      // to force a re-render of the outer component to change the aria props
      this.props.editor.onChange(this.props.editor.props.editorState);
    };

    onMentionFocus = (index) => {
      ariaProps.ariaActiveDescendantID = `mention-option-${this.key}-${index}`; // eslint-disable-line no-param-reassign
      this.setState({
        focusedOptionIndex: index,
      });

      // to force a re-render of the outer component to change the aria props
      this.props.editor.onChange(this.props.editor.props.editorState);
    };

    // Get the first 5 mentions that match
    getMentionsForFilter = () => {
      const selection = this.props.editor.props.editorState.getSelection();
      const { word } = getSearchText(this.props.editor.props.editorState, selection);
      const mentionValue = word.substring(1, word.length).toLowerCase();
      const filteredValues = mentions && mentions.filter((mention) => (
        !mentionValue || mention.get('name').toLowerCase().indexOf(mentionValue) > -1
      ));
      const size = filteredValues.size < 5 ? filteredValues.size : 5;
      return filteredValues.setSize(size);
    };

    handleReturn = () => {
      const filteredMentions = this.getMentionsForFilter();
      this.onMentionSelect(filteredMentions.get(this.state.focusedOptionIndex));
      return true;
    };

    render() {
      const filteredMentions = this.getMentionsForFilter();
      return (
        <span {...this.props} style={ styles.root } spellCheck={ false }>
          { this.state.isOpen && filteredMentions.size > 0 ?
          <div
            style={ styles.dropdown }
            contentEditable={ false }
            role="listbox"
            id={ `mentions-list-${this.key}` }
          >
            {
              filteredMentions.map((mention, index) => (
                <MentionOption
                  key={ mention.get('name') }
                  onMentionSelect={ this.onMentionSelect }
                  onMentionFocus={ this.onMentionFocus }
                  isFocused={ this.state.focusedOptionIndex === index }
                  mention={ mention }
                  index={ index }
                  id={ `mention-option-${this.key}-${index}` }
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

  return MentionSearch;
};
