import Emoji from './Emoji';
import EmojiSuggestions from './EmojiSuggestions';
// import EmojiSuggestionsPortal from './EmojiSuggestionsPortal';
import emojiStrategy from './emojiStrategy';
import emojiSuggestionsStrategy from './emojiSuggestionsStrategy';
import decorateComponentWithProps from 'decorate-component-with-props';
import { Map } from 'immutable';
import emojiStyles from './emojiStyles.css';
import emojiSuggestionsStyles from './emojiSuggestionsStyles.css';
import emojiSuggestionsEntryStyles from './emojiSuggestionsEntryStyles.css';
import attachImmutableEntitiesToEmojis from './modifiers/attachImmutableEntitiesToEmojis';
import { EditorState } from 'draft-js';

// TODO provide an imagePath url via config
// TODO activate/deactivate different the conversion or search part

const defaultTheme = {
  emoji: emojiStyles.emoji,

  autocomplete: emojiSuggestionsStyles.autocomplete,
  autocompletePopover: emojiSuggestionsStyles.autocompletePopover,

  autocompleteEntry: emojiSuggestionsEntryStyles.autocompleteEntry,
  autocompleteEntryFocused: emojiSuggestionsEntryStyles.autocompleteEntryFocused,
  autocompleteEntryText: emojiSuggestionsEntryStyles.autocompleteEntryText,
  autocompleteEntryIcon: emojiSuggestionsEntryStyles.autocompleteEntryIcon,
  autocompleteEntryAvatar: emojiSuggestionsEntryStyles.autocompleteEntryAvatar,
};

const callbacks = {
  keyBindingFn: Map(),
  handleKeyCommand: Map(),
  onDownArrow: Map(),
  onUpArrow: Map(),
  onTab: Map(),
  onEscape: Map(),
  handleReturn: Map(),
  onChange: Map(),
};

const ariaProps = {
  ariaHasPopup: Map(),
  ariaExpanded: Map(),
  ariaOwneeID: Map(),
  ariaActiveDescendantID: Map(),
};

const emojiPlugin = (config = {}) => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  const emojiSearchProps = {
    ariaProps,
    callbacks,
    theme,
  };
  return {
    decorators: [
      {
        strategy: emojiStrategy,
        component: decorateComponentWithProps(Emoji, { theme }),
      },
      {
        strategy: emojiSuggestionsStrategy,
        component: decorateComponentWithProps(EmojiSuggestions, emojiSearchProps),
      },
    ],

    getAccessibilityProps: () => {
      const ariaHasPopup = ariaProps.ariaHasPopup.some((entry) => entry);
      const ariaExpanded = ariaProps.ariaExpanded.some((entry) => entry);
      return {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaHasPopup ? 'true' : 'false',
        ariaExpanded: ariaExpanded ? 'true' : 'false',
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID.first(),
        ariaOwneeID: ariaProps.ariaOwneeID.first(),
      };
    },

    onDownArrow: (keyboardEvent) => callbacks.onDownArrow.forEach((onDownArrow) => onDownArrow(keyboardEvent)),
    onTab: (keyboardEvent) => callbacks.onTab.forEach((onTab) => onTab(keyboardEvent)),
    onUpArrow: (keyboardEvent) => callbacks.onUpArrow.forEach((onUpArrow) => onUpArrow(keyboardEvent)),
    onEscape: (keyboardEvent) => callbacks.onEscape.forEach((onEscape) => onEscape(keyboardEvent)),
    handleReturn: (keyboardEvent) => (
      callbacks.handleReturn
      .map((handleReturn) => handleReturn(keyboardEvent))
      .find((result) => result === true)
    ),
    onChange: (editorState) => {
      let newEditorState = attachImmutableEntitiesToEmojis(editorState);

      if (!newEditorState.getCurrentContent().equals(editorState.getCurrentContent())) {
        // Forcing the current selection ensures that it will be at it's right place.
        // This solves the issue where inserting an Emoji on OSX with Apple's Emoji
        // selector led to the right selection the data, but wrong position in
        // the contenteditable.
        newEditorState = EditorState.forceSelection(
          newEditorState,
          newEditorState.getSelection(),
        );
      }

      if (callbacks.onChange.size !== 0) {
        callbacks.onChange.forEach((onChange) => {
          newEditorState = onChange(editorState);
        });
      }

      return newEditorState;
    },
  };
};

export default emojiPlugin;
