import React, { Component } from 'react';

import MentionOption from './MentionOption';
import addMention from '../modifiers/addMention';
import getSearchText from '../utils/getSearchText';
import { genKey } from 'draft-js';
import { List } from 'immutable';

export default (callbacks, ariaProps) => {
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
      this.props.updateEditorState(this.props.getEditorState());
    }

    componentDidUpdate = () => {
      // In case the list shrinks there should be still an option focused.
      // Note: this might run multiple times and deduct 1 until the condition is
      // not fullfilled anymore.
      if (this.state.focusedOptionIndex >= this.filteredMentions.size) {
        this.setState({
          focusedOptionIndex: this.filteredMentions.size - 1,
        });
      }
    };

    componentWillUnmount() {
      // make sure none of these callbacks are triggered
      callbacks.onDownArrow = undefined; // eslint-disable-line no-param-reassign
      callbacks.onUpArrow = undefined; // eslint-disable-line no-param-reassign
      callbacks.onEscape = undefined; // eslint-disable-line no-param-reassign
      callbacks.handleReturn = undefined; // eslint-disable-line no-param-reassign
      callbacks.onChange = undefined; // eslint-disable-line no-param-reassign
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

    onMentionSelect = (mention) => {
      updateAriaCloseDropdown();
      const selection = this.props.getEditorState().getSelection();
      const newEditorState = addMention(this.props.getEditorState(), mention, selection);
      this.props.updateEditorState(newEditorState);
    };

    onDownArrow = (keyboardEvent) => {
      keyboardEvent.preventDefault();
      const newIndex = this.state.focusedOptionIndex + 1;
      this.onMentionFocus(newIndex >= this.filteredMentions.size ? 0 : newIndex);
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

      updateAriaCloseDropdown();
      this.setState({
        isOpen: false,
      });

      // to force a re-render of the outer component to change the aria props
      this.props.updateEditorState(this.props.getEditorState());
    };

    onMentionFocus = (index) => {
      ariaProps.ariaActiveDescendantID = `mention-option-${this.key}-${index}`; // eslint-disable-line no-param-reassign
      this.setState({
        focusedOptionIndex: index,
      });

      // to force a re-render of the outer component to change the aria props
      this.props.updateEditorState(this.props.getEditorState());
    };

    // Get the first 5 mentions that match
    getMentionsForFilter = () => {
      const selection = this.props.getEditorState().getSelection();
      const { word } = getSearchText(this.props.getEditorState(), selection);
      const mentionValue = word.substring(1, word.length).toLowerCase();
      const mentions = this.props.mentions ? this.props.mentions : List([]);
      const filteredValues = mentions.filter((mention) => (
        !mentionValue || mention.get('name').toLowerCase().indexOf(mentionValue) > -1
      ));
      const size = filteredValues.size < 5 ? filteredValues.size : 5;
      return filteredValues.setSize(size);
    };

    handleReturn = () => {
      this.onMentionSelect(this.filteredMentions.get(this.state.focusedOptionIndex));
      return true;
    };

    render() {
      this.filteredMentions = this.getMentionsForFilter();
      const { theme } = this.props;
      return (
        <span {...this.props} className={ theme.get('autocomplete') } spellCheck={ false }>
          { this.state.isOpen && this.filteredMentions.size > 0 ?
          <div
            className={ theme.get('autocompletePopover') }
            contentEditable={ false }
            role="listbox"
            id={ `mentions-list-${this.key}` }
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
          : null}
          { this.props.children }
        </span>
      );
    }
  }

  return MentionSearch;
};
