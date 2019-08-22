import React from 'react';
import { Map } from 'immutable';
import { EditorState } from 'draft-js';
import { Picker } from '@tunoltd/emoji-mart';

import Emoji from './components/Emoji';
import EmojiSuggestions from './components/EmojiSuggestions';
import EmojiSuggestionsPortal from './components/EmojiSuggestionsPortal';
import emojiStrategy from './emojiStrategy';
import emojiSuggestionsStrategy from './emojiSuggestionsStrategy';
import emojiStyles from './emojiStyles.css';
import emojiSuggestionsStyles from './emojiSuggestionsStyles.css';
import emojiSuggestionsEntryStyles from './emojiSuggestionsEntryStyles.css';
import attachImmutableEntitiesToEmojis from './modifiers/attachImmutableEntitiesToEmojis';
import defaultPositionSuggestions from './utils/positionSuggestions';
import addEmoji from './modifiers/addEmoji';

// TODO activate/deactivate different the conversion or search part

export default (config = {}) => {
  const defaultTheme = {
    emoji: emojiStyles.emoji,

    emojiSuggestions: emojiSuggestionsStyles.emojiSuggestions,

    emojiSuggestionsEntry: emojiSuggestionsEntryStyles.emojiSuggestionsEntry,
    emojiSuggestionsEntryFocused:
      emojiSuggestionsEntryStyles.emojiSuggestionsEntryFocused,
    emojiSuggestionsEntryText:
      emojiSuggestionsEntryStyles.emojiSuggestionsEntryText,
    emojiSuggestionsEntryIcon:
      emojiSuggestionsEntryStyles.emojiSuggestionsEntryIcon,
  };

  const callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    handleReturn: undefined,
    onChange: undefined,
  };

  const ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined,
  };

  let searches = Map();
  let escapedSearch;
  let clientRectFunctions = Map();
  let isOpened;

  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: offsetKey => clientRectFunctions.get(offsetKey)(),
    getAllSearches: () => searches,
    isEscaped: offsetKey => escapedSearch === offsetKey,
    escapeSearch: offsetKey => {
      escapedSearch = offsetKey;
    },

    resetEscapedSearch: () => {
      escapedSearch = undefined;
    },

    register: offsetKey => {
      searches = searches.set(offsetKey, offsetKey);
    },

    updatePortalClientRect: (offsetKey, func) => {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },

    unregister: offsetKey => {
      searches = searches.delete(offsetKey);
      clientRectFunctions = clientRectFunctions.delete(offsetKey);
    },

    getIsOpened: () => isOpened,
    setIsOpened: nextIsOpened => {
      isOpened = nextIsOpened;
    },
  };

  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const {
    theme = defaultTheme,
    positionSuggestions = defaultPositionSuggestions,
    useNativeArt,
    emojiSet = 'google',
  } = config;

  const pickerProps = {
    onClick(emoji) {
      const newEditorState = addEmoji(store.getEditorState(), emoji.native);
      store.setEditorState(newEditorState);
    },
    set: emojiSet,
  };
  const suggestionsProps = {
    ariaProps,
    callbacks,
    theme,
    store,
    positionSuggestions,
    useNativeArt,
    emojiSet,
  };
  const emojiProps = {
    theme,
    useNativeArt,
    emojiSet,
  };
  const DecoratedEmojiSuggestions = props => (
    <EmojiSuggestions {...props} {...suggestionsProps} />
  );
  const DecoratedEmojiSelect = props => <Picker {...props} {...pickerProps} />;
  const DecoratedEmoji = props => <Emoji {...props} {...emojiProps} />;
  const DecoratedEmojiSuggestionsPortal = props => (
    <EmojiSuggestionsPortal {...props} store={store} />
  );
  return {
    EmojiSuggestions: DecoratedEmojiSuggestions,
    EmojiSelect: DecoratedEmojiSelect,
    decorators: [
      {
        strategy: emojiStrategy,
        component: DecoratedEmoji,
      },
      {
        strategy: emojiSuggestionsStrategy,
        component: DecoratedEmojiSuggestionsPortal,
      },
    ],
    getAccessibilityProps: () => ({
      role: 'combobox',
      ariaAutoComplete: 'list',
      ariaHasPopup: ariaProps.ariaHasPopup,
      ariaExpanded: ariaProps.ariaExpanded,
      ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
      ariaOwneeID: ariaProps.ariaOwneeID,
    }),

    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },

    keyBindingFn: keyboardEvent =>
      callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent),
    handleReturn: keyboardEvent =>
      callbacks.handleReturn && callbacks.handleReturn(keyboardEvent),
    onChange: editorState => {
      const currentSelectionState = editorState.getSelection();
      let newEditorState = attachImmutableEntitiesToEmojis(editorState);

      if (
        !newEditorState
          .getCurrentContent()
          .equals(editorState.getCurrentContent())
      ) {
        // Forcing the current selection ensures that it will be at it's right place.
        // This solves the issue where inserting an Emoji on OSX with Apple's Emoji
        // selector led to the right selection the data, but wrong position in
        // the contenteditable.
        newEditorState = EditorState.forceSelection(
          newEditorState,
          currentSelectionState
        );
      }

      if (callbacks.onChange) return callbacks.onChange(newEditorState);
      return newEditorState;
    },
  };
};
