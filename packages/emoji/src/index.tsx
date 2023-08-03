import * as PopperJS from '@popperjs/core';
import { Modifier } from 'react-popper';
import React, {
  ComponentType,
  CSSProperties,
  KeyboardEvent,
  ReactElement,
  ReactNode,
} from 'react';
import {
  EditorPlugin,
  AriaProps,
  EditorCommand,
} from '@draft-js-plugins/editor';
import { Map, List } from 'immutable';
import keys from 'lodash/keys';
import { DraftHandleValue, EditorState } from 'draft-js';
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
import { PositionSuggestionsParams } from './utils/positionSuggestions';
import emojiList from './utils/emojiList';
import { defaultTheme } from './theme';
import type { EmojiPluginTheme } from './theme';
import Group from './components/EmojiSelect/Popover/Groups/Group';
import JoyPixelEmojiImage from './components/Emoji/JoyPixelEmojiImage';
import NativeEmojiImage from './components/Emoji/NativeEmojiImage';
import NativeEmojiInlineText from './components/Emoji/NativEmojiInlineText';
import JoyPixelEmojiInlineText from './components/Emoji/JoyPixelEmojiInlineText';

export { defaultTheme };
export type { EmojiPluginTheme };

export type PopperOptions = Omit<Partial<PopperJS.Options>, 'modifiers'> & {
  createPopper?: typeof PopperJS.createPopper;
  modifiers?: ReadonlyArray<Modifier<unknown>>;
};

export interface EmojiImageProps {
  emoji: string;
  theme: EmojiPluginTheme;
  unicode: string;
}

export interface EmojiInlineTextProps {
  theme: EmojiPluginTheme;
  decoratedText: string;
  children: ReactNode;
  className?: string;
}

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
  keyBindingFn?(event: KeyboardEvent): EditorCommand | null | undefined;
  handleKeyCommand: undefined;
  handleReturn?(event: KeyboardEvent): DraftHandleValue;
  onChange?(editorState: EditorState): EditorState;
}

export interface EmojiPluginConfig {
  theme?: EmojiPluginTheme;
  positionSuggestions?: (arg: PositionSuggestionsParams) => CSSProperties;
  priorityList?: { [k: string]: string[] };
  selectGroups?: EmojiSelectGroup[];
  selectButtonContent?: ReactNode;
  toneSelectOpenDelay?: number;
  useNativeArt?: boolean;
  emojiImage?: ComponentType<EmojiImageProps>;
  emojiInlineText?: ComponentType<EmojiInlineTextProps>;
  disableInlineEmojis?: boolean;
  popperOptions?: PopperOptions;
}

interface GetClientRectFn {
  (): ClientRect | undefined;
}

export interface EmojiPluginStore {
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
  getPortalClientRect(offsetKey: string): ClientRect | undefined;
  getAllSearches(): Map<string, string>;
  isEscaped(offsetKey: string): boolean;
  escapeSearch(offsetKey: string): void;
  resetEscapedSearch(): void;
  register(offsetKey: string): void;
  updatePortalClientRect(offsetKey: string, func: GetClientRectFn): void;
  unregister(offsetKey: string): void;

  getReferenceElement(): HTMLElement | null;
  setReferenceElement(element: HTMLElement | null): void;
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
  let referenceElement: HTMLElement | null;

  const store: EmojiPluginStore = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: (offsetKey) => clientRectFunctions.get(offsetKey)?.(),
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

    getReferenceElement: () => referenceElement,
    setReferenceElement: (element: HTMLElement | null) => {
      referenceElement = element;
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
    positionSuggestions,
    priorityList,
    selectGroups,
    selectButtonContent,
    toneSelectOpenDelay,
    useNativeArt,
    disableInlineEmojis,
    emojiImage = useNativeArt ? NativeEmojiImage : JoyPixelEmojiImage,
    emojiInlineText = useNativeArt
      ? NativeEmojiInlineText
      : JoyPixelEmojiInlineText,
    popperOptions,
  } = config;

  // if priorityList is configured in config then set priorityList
  if (priorityList) {
    emojiList.setPriorityList(priorityList);
  }
  const suggestionsProps = {
    ariaProps,
    callbacks,
    theme,
    store,
    positionSuggestions,
    shortNames: List(keys(emojiList.list)),
    emojiImage,
    popperOptions,
  };
  const selectProps = {
    theme,
    store,
    selectGroups,
    selectButtonContent,
    toneSelectOpenDelay,
    emojiImage,
  };
  const DecoratedEmojiSuggestions = (
    props: EmojiSuggestionsPubParams
  ): ReactElement => <EmojiSuggestions {...props} {...suggestionsProps} />;
  const DecoratedEmojiSelect = (props: EmojiSelectPubParams): ReactElement => (
    <EmojiSelect {...props} {...selectProps} />
  );
  const DecoratedEmoji = (props: EmojiProps): ReactElement => (
    <Emoji {...props} theme={theme} emojiInlineText={emojiInlineText} />
  );
  const DecoratedEmojiSuggestionsPortal = (
    props: EmojiSuggestionsPortalParams
  ): ReactElement => <EmojiSuggestionsPortal {...props} store={store} />;
  return {
    EmojiSuggestions: DecoratedEmojiSuggestions,
    EmojiSelect: DecoratedEmojiSelect,
    decorators: disableInlineEmojis
      ? []
      : [
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

    keyBindingFn: (keyboardEvent: KeyboardEvent) =>
      callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent),
    handleReturn: (keyboardEvent: KeyboardEvent) =>
      callbacks.handleReturn && callbacks.handleReturn(keyboardEvent),
    onChange: (editorState) => {
      let newEditorState = attachImmutableEntitiesToEmojis(editorState);
      if (
        !newEditorState
          .getCurrentContent()
          .equals(editorState.getCurrentContent())
      ) {
        const selection = editorState.getSelection();
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
