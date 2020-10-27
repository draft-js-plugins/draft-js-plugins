import React, {
  ComponentType,
  CSSProperties,
  KeyboardEvent,
  ReactNode,
} from 'react';
import { EditorPlugin, AriaProps } from 'draft-js-plugins-editor';
import { Map, List } from 'immutable';
import keys from 'lodash/keys';
import { DraftEditorCommand, DraftHandleValue, EditorState } from 'draft-js';
import Emoji, { EmojiProps } from './components/Emoji';
import EmojiSuggestions, {
  EmojiSuggestionsPubParams,
} from './components/EmojiSuggestions';
import EmojiSuggestionsPortal, {
  EmojiSuggestionsPortalParams,
} from './components/EmojiSuggestionsPortal';
import EmojiSelect, { EmojiSelectPubParams } from './components/EmojiSelect';
import emojiStrategy from './emojiStrategy';
import emojiSuggestionsStrategy from './emojiSuggestionsStrategy';
import attachImmutableEntitiesToEmojis from './modifiers/attachImmutableEntitiesToEmojis';
import defaultPositionSuggestions, {
  PositionSuggestionsParams,
} from './utils/positionSuggestions';
import emojiList from './utils/emojiList';
import { defaultTheme, EmojiPluginTheme } from './theme';
import Group from './components/EmojiSelect/Popover/Groups/Group';

export { defaultTheme, EmojiPluginTheme };

const defaultImagePath = '//cdn.jsdelivr.net/emojione/assets/svg/';
const defaultImageType = 'svg';
const defaultCacheBustParam = '?v=2.2.7';

export interface EmojiSuggestionsState {
  isActive?: boolean;
  focusedOptionIndex: number;
}

export interface EmojiSelectGroup {
  title: string;
  icon: ReactNode;
  categories: string[];
  instance?: Group | null;
  top?: number;
  topList?: number;
}

export interface EmojiPLuginCallbacks {
  keyBindingFn?(event: KeyboardEvent): DraftEditorCommand | string | null;
  handleKeyCommand: undefined;
  handleReturn?(event: KeyboardEvent): DraftHandleValue;
  onChange?(editorState: EditorState): EditorState;
}

export interface EmojiPluginConfig {
  theme?: EmojiPluginTheme;
  imagePath?: string;
  imageType?: string;
  allowImageCache?: boolean;
  positionSuggestions?: (arg: PositionSuggestionsParams) => CSSProperties;
  priorityList?: { [k: string]: string[] };
  selectGroups?: EmojiSelectGroup[];
  selectButtonContent?: ReactNode;
  toneSelectOpenDelay?: number;
  useNativeArt?: boolean;
}

interface GetClientRectFn {
  (): ClientRect;
}

export interface EmojiPluginStore {
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
  getPortalClientRect(offsetKey: string): ClientRect;
  getAllSearches(): Map<string, string>;
  isEscaped(offsetKey: string): boolean;
  escapeSearch(offsetKey: string): void;
  resetEscapedSearch(): void;
  register(offsetKey: string): void;
  updatePortalClientRect(offsetKey: string, func: GetClientRectFn): void;
  unregister(offsetKey: string): void;
}

export type EmojiPlugin = EditorPlugin & {
  EmojiSuggestions: ComponentType<EmojiSuggestionsPubParams>;
  EmojiSelect: ComponentType<EmojiSelectPubParams>;
};
// TODO activate/deactivate different the conversion or search part

export default (config: EmojiPluginConfig = {}): EmojiPlugin => {
  const callbacks: EmojiPLuginCallbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    handleReturn: undefined,
    onChange: undefined,
  };

  const ariaProps: AriaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined,
  };

  let searches: Map<string, string> = Map();
  let escapedSearch: string | undefined;
  let clientRectFunctions: Map<string, GetClientRectFn> = Map();

  const store: EmojiPluginStore = {
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

  // if priorityList is configured in config then set priorityList
  if (priorityList) {
    emojiList.setPriorityList(priorityList);
  }
  const suggestionsProps = {
    ariaProps,
    cacheBustParam,
    callbacks,
    imagePath,
    imageType,
    theme,
    store,
    positionSuggestions,
    shortNames: List(keys(emojiList.list)),
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
  const DecoratedEmojiSuggestions = (props: EmojiSuggestionsPubParams) => (
    <EmojiSuggestions {...props} {...suggestionsProps} />
  );
  const DecoratedEmojiSelect = (props: EmojiSelectPubParams) => (
    <EmojiSelect {...props} {...selectProps} />
  );
  const DecoratedEmoji = (props: EmojiProps) => (
    <Emoji
      {...props}
      theme={theme}
      imagePath={imagePath}
      imageType={imageType}
      cacheBustParam={cacheBustParam}
      useNativeArt={Boolean(useNativeArt)}
    />
  );
  const DecoratedEmojiSuggestionsPortal = (
    props: EmojiSuggestionsPortalParams
  ) => <EmojiSuggestionsPortal {...props} store={store} />;
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

    keyBindingFn: (
      keyboardEvent: KeyboardEvent
    ): DraftEditorCommand | string | null =>
      callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent),
    handleReturn: (keyboardEvent: KeyboardEvent) =>
      callbacks.handleReturn && callbacks.handleReturn(keyboardEvent),
    onChange: editorState => {
      let newEditorState = attachImmutableEntitiesToEmojis(editorState);
      const selection = editorState.getSelection();

      if (
        !newEditorState
          .getCurrentContent()
          .equals(editorState.getCurrentContent())
      ) {
        // Forcing the current selection ensures that it will be at it's right place.
        // This solves the issue where inserting an Emoji on OSX with Apple's Emoji
        // selector led to the right selection the data, but wrong position in
        // the contenteditable.
        newEditorState = EditorState.forceSelection(newEditorState, selection);
      }

      if (callbacks.onChange) {
        return callbacks.onChange(newEditorState);
      }
      return newEditorState;
    },
  };
};
