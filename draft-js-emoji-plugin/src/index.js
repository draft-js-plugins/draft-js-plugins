import { Map, List } from 'immutable';

import keys from 'lodash.keys';
import decorateComponentWithProps from 'decorate-component-with-props';
import { EditorState } from 'draft-js';
import Emoji from './components/Emoji';
import EmojiSuggestions from './components/EmojiSuggestions';
import EmojiSuggestionsPortal from './components/EmojiSuggestionsPortal';
import EmojiSelect from './components/EmojiSelect';
import emojiStrategy from './emojiStrategy';
import emojiSuggestionsStrategy from './emojiSuggestionsStrategy';
import emojiStyles from './emojiStyles.css';
import emojiSuggestionsStyles from './emojiSuggestionsStyles.css';
import emojiSuggestionsEntryStyles from './emojiSuggestionsEntryStyles.css';
import emojiSelectStyles from './emojiSelectStyles.css';
import attachImmutableEntitiesToEmojis from './modifiers/attachImmutableEntitiesToEmojis';
import defaultPositionSuggestions from './utils/positionSuggestions';
import emojiList from './utils/emojiList';
import { emojiToDeleteWithColons } from './constants/emojiToDelete';

const defaultImagePath = '//cdn.jsdelivr.net/emojione/assets/svg/';
const defaultImageType = 'svg';
const defaultCacheBustParam = '?v=2.2.7';

// TODO activate/deactivate different the conversion or search part

export default (config = {}) => {
  const defaultTheme = {
    emoji: emojiStyles.emoji,

    emojiSuggestions: emojiSuggestionsStyles.emojiSuggestions,

    emojiSuggestionsEntry: emojiSuggestionsEntryStyles.emojiSuggestionsEntry,
    emojiSuggestionsEntryFocused: emojiSuggestionsEntryStyles.emojiSuggestionsEntryFocused,
    emojiSuggestionsEntryText: emojiSuggestionsEntryStyles.emojiSuggestionsEntryText,
    emojiSuggestionsEntryIcon: emojiSuggestionsEntryStyles.emojiSuggestionsEntryIcon,

    emojiSelect: emojiSelectStyles.emojiSelect,

    emojiSelectButton: emojiSelectStyles.emojiSelectButton,
    emojiSelectButtonPressed: emojiSelectStyles.emojiSelectButtonPressed,

    emojiSelectPopover: emojiSelectStyles.emojiSelectPopover,
    emojiSelectPopoverClosed: emojiSelectStyles.emojiSelectPopoverClosed,
    emojiSelectPopoverTitle: emojiSelectStyles.emojiSelectPopoverTitle,
    emojiSelectPopoverGroups: emojiSelectStyles.emojiSelectPopoverGroups,

    emojiSelectPopoverGroup: emojiSelectStyles.emojiSelectPopoverGroup,
    emojiSelectPopoverGroupTitle: emojiSelectStyles.emojiSelectPopoverGroupTitle,
    emojiSelectPopoverGroupList: emojiSelectStyles.emojiSelectPopoverGroupList,
    emojiSelectPopoverGroupItem: emojiSelectStyles.emojiSelectPopoverGroupItem,

    emojiSelectPopoverToneSelect: emojiSelectStyles.emojiSelectPopoverToneSelect,
    emojiSelectPopoverToneSelectList: emojiSelectStyles.emojiSelectPopoverToneSelectList,
    emojiSelectPopoverToneSelectItem: emojiSelectStyles.emojiSelectPopoverToneSelectItem,

    emojiSelectPopoverEntry: emojiSelectStyles.emojiSelectPopoverEntry,
    emojiSelectPopoverEntryFocused: emojiSelectStyles.emojiSelectPopoverEntryFocused,
    emojiSelectPopoverEntryIcon: emojiSelectStyles.emojiSelectPopoverEntryIcon,

    emojiSelectPopoverNav: emojiSelectStyles.emojiSelectPopoverNav,
    emojiSelectPopoverNavItem: emojiSelectStyles.emojiSelectPopoverNavItem,
    emojiSelectPopoverNavEntry: emojiSelectStyles.emojiSelectPopoverNavEntry,
    emojiSelectPopoverNavEntryActive: emojiSelectStyles.emojiSelectPopoverNavEntryActive,

    emojiSelectPopoverScrollbar: emojiSelectStyles.emojiSelectPopoverScrollbar,
    emojiSelectPopoverScrollbarThumb: emojiSelectStyles.emojiSelectPopoverScrollbarThumb,
  };

  const callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    onDownArrow: undefined,
    onUpArrow: undefined,
    onTab: undefined,
    onEscape: undefined,
    handleReturn: undefined,
    onChange: undefined,
  };

  const ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: 'false',
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined,
  };

  let searches = Map();
  let escapedSearch;
  let clientRectFunctions = Map();

  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: (offsetKey) => clientRectFunctions.get(offsetKey)(),
    getAllSearches: () => searches,
    isEscaped: (offsetKey) => escapedSearch === offsetKey,
    escapeSearch: (offsetKey) => {
      escapedSearch = offsetKey;
    },

    resetEscapedSearch: () => {
      escapedSearch = undefined;
    },

    register: (offsetKey) => {
      searches = searches.set(offsetKey, offsetKey);
    },

    updatePortalClientRect: (offsetKey, func) => {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },

    unregister: (offsetKey) => {
      searches = searches.delete(offsetKey);
      clientRectFunctions = clientRectFunctions.delete(offsetKey);
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
    imagePath = defaultImagePath,
    imageType = defaultImageType,
    allowImageCache,
    positionSuggestions = defaultPositionSuggestions,
    priorityList,
    selectGroups,
    selectButtonContent,
    toneSelectOpenDelay,
    useNativeArt,
  } = config;

  const cacheBustParam = allowImageCache ? '' : defaultCacheBustParam;

  const modifiedEmojiList = emojiList.list;

  emojiToDeleteWithColons.forEach((name) => {
    delete modifiedEmojiList[name];
  });

  // if priorityList is configured in config then set priorityList
  if (priorityList) emojiList.setPriorityList(priorityList);
  const suggestionsProps = {
    ariaProps,
    cacheBustParam,
    callbacks,
    imagePath,
    imageType,
    theme,
    store,
    positionSuggestions,
    shortNames: List(keys(modifiedEmojiList)),
    useNativeArt,
  };
  const selectProps = {
    cacheBustParam,
    imagePath,
    imageType,
    theme,
    store,
    selectGroups,
    selectButtonContent,
    toneSelectOpenDelay,
    useNativeArt,
  };
  return {
    EmojiSuggestions: decorateComponentWithProps(EmojiSuggestions, suggestionsProps),
    EmojiSelect: decorateComponentWithProps(EmojiSelect, selectProps),
    decorators: [
      {
        strategy: emojiStrategy,
        component: decorateComponentWithProps(Emoji, { theme, imagePath, imageType, cacheBustParam, useNativeArt }),
      },
      {
        strategy: emojiSuggestionsStrategy,
        component: decorateComponentWithProps(EmojiSuggestionsPortal, { store }),
      },
    ],
    getAccessibilityProps: () => (
      {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaProps.ariaHasPopup,
        ariaExpanded: ariaProps.ariaExpanded,
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
        ariaOwneeID: ariaProps.ariaOwneeID,
      }
    ),

    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },

    onDownArrow: (keyboardEvent) => callbacks.onDownArrow && callbacks.onDownArrow(keyboardEvent),
    onTab: (keyboardEvent) => callbacks.onTab && callbacks.onTab(keyboardEvent),
    onUpArrow: (keyboardEvent) => callbacks.onUpArrow && callbacks.onUpArrow(keyboardEvent),
    onEscape: (keyboardEvent) => callbacks.onEscape && callbacks.onEscape(keyboardEvent),
    handleReturn: (keyboardEvent) => callbacks.handleReturn && callbacks.handleReturn(keyboardEvent),
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

      if (callbacks.onChange) return callbacks.onChange(newEditorState);
      return newEditorState;
    },
  };
};
