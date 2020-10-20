import {
  EditorPlugin,
  PluginFunctions,
} from 'draft-js-plugins-editor/src/index';
import { Map } from 'immutable';
import Mention from './Mention';
import MentionSuggestions from './MentionSuggestions/MentionSuggestions'; // eslint-disable-line import/no-named-as-default
import MentionSuggestionsPortal from './MentionSuggestionsPortal';
import React, {
  CSSProperties,
  FunctionComponent,
  KeyboardEvent,
  ReactElement,
} from 'react';
import addMention from './modifiers/addMention';
import defaultPositionSuggestions from './utils/positionSuggestions';
import defaultRegExp from './defaultRegExp';
import { defaultTheme } from './theme';
import mentionStrategy from './mentionStrategy';
import mentionSuggestionsStrategy from './mentionSuggestionsStrategy';
import suggestionsFilter from './utils/defaultSuggestionsFilter';
import { DraftHandleValue, EditorState, DraftEditorCommand } from 'draft-js';

export { default as MentionSuggestions } from './MentionSuggestions/MentionSuggestions';

export { defaultTheme };
export { addMention };

export interface MentionPluginStore {
  setEditorState?(editorState: EditorState): void;
  getEditorState?(): EditorState;
  getPortalClientRect(offsetKey: string): void;
  getAllSearches(): unknown;
  isEscaped(offsetKey: string): boolean;
  escapeSearch(offsetKey: string): void;
  resetEscapedSearch(): void;
  register(offsetKey: string): void;
  updatePortalClientRect(offsetKey: string, funct: ClientRectFunction): void;
  unregister(offsetKey: string): void;
  getIsOpened(): boolean;
  setIsOpened(nextIsOpened: boolean): void;
}

export interface MentionPluginConfig {
  mentionPrefix?: string;
  theme?: typeof defaultTheme;
  positionSuggestions?(): CSSProperties;
  mentionComponent?: ReactElement;
  mentionSuggestionsComponent?: ReactElement;
  entityMutability?: 'SEGMENTED' | 'IMMUTABLE' | 'MUTABLE';
  mentionTrigger?: string;
  mentionRegExp?: string;
  supportWhitespace?: boolean;
  entryComponent?: ReactElement;
}

interface Callbacks {
  keyBindingFn?(e: KeyboardEvent): DraftEditorCommand | string | null;
  handleKeyCommand: undefined;
  handleReturn?(e: KeyboardEvent): DraftHandleValue;
  onChange?(editorState: EditorState): EditorState;
}

interface ClientRectFunction {
  (): ClientRect;
}

export default (
  config: MentionPluginConfig = {}
): EditorPlugin & {
  MentionSuggestions: FunctionComponent;
} => {
  const callbacks: Callbacks = {
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
  let escapedSearch: string | undefined;
  let clientRectFunctions: Map<string, ClientRectFunction> = Map();
  let isOpened = false;

  const store: MentionPluginStore = {
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
    mentionPrefix = '',
    theme = defaultTheme,
    positionSuggestions = defaultPositionSuggestions,
    mentionComponent,
    mentionSuggestionsComponent: MentionSuggestionsComponent = MentionSuggestions,
    entityMutability = 'SEGMENTED',
    mentionTrigger = '@',
    mentionRegExp = defaultRegExp,
    supportWhitespace = false,
    entryComponent,
  } = config;
  const mentionSearchProps = {
    ariaProps,
    callbacks,
    theme,
    store,
    entityMutability,
    positionSuggestions,
    mentionTrigger,
    mentionPrefix,
    entryComponent,
  };
  const DecoratedMentionSuggestionsComponent = props => (
    <MentionSuggestionsComponent {...props} {...mentionSearchProps} />
  );
  const DecoratedMention = props => (
    <Mention {...props} theme={theme} mentionComponent={mentionComponent} />
  );
  const DecoratedMentionSuggestionsPortal = props => (
    <MentionSuggestionsPortal {...props} store={store} />
  );
  return {
    MentionSuggestions: DecoratedMentionSuggestionsComponent,
    decorators: [
      {
        strategy: mentionStrategy(mentionTrigger),
        component: DecoratedMention,
      },
      {
        strategy: mentionSuggestionsStrategy(
          mentionTrigger,
          supportWhitespace,
          mentionRegExp
        ),
        component: DecoratedMentionSuggestionsPortal,
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
      (callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent)) || null,
    handleReturn: keyboardEvent =>
      callbacks.handleReturn && callbacks.handleReturn(keyboardEvent),
    onChange: editorState => {
      if (callbacks.onChange) {
        return callbacks.onChange(editorState);
      }
      return editorState;
    },
  };
};

export const defaultSuggestionsFilter = suggestionsFilter;
