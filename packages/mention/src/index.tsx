import * as PopperJS from '@popperjs/core';
import { Modifier } from 'react-popper';
import { Map } from 'immutable';
import React, { ComponentType, ReactElement } from 'react';
import { EditorState } from 'draft-js';
import { EditorPlugin, AriaProps } from '@draft-js-plugins/editor';
import Mention, { MentionProps, SubMentionComponentProps } from './Mention';
import MentionSuggestions, {
  MentionSuggestionCallbacks,
  MentionSuggestionsPubProps,
} from './MentionSuggestions/MentionSuggestions'; // eslint-disable-line import/no-named-as-default
import MentionSuggestionsPortal, {
  MentionSuggestionsPortalProps,
} from './MentionSuggestionsPortal';
import addMention from './modifiers/addMention';
import { PositionSuggestionsFn } from './utils/positionSuggestions';
import defaultRegExp from './defaultRegExp';
import { defaultTheme, MentionPluginTheme } from './theme';
import mentionStrategy from './mentionStrategy';
import mentionSuggestionsStrategy from './mentionSuggestionsStrategy';
import suggestionsFilter from './utils/defaultSuggestionsFilter';

export { default as MentionSuggestions } from './MentionSuggestions/MentionSuggestions';
export { default as Popover } from './MentionSuggestions/Popover';

export { defaultTheme };
export { addMention };
export type { MentionPluginTheme };

export type PopperOptions = Omit<Partial<PopperJS.Options>, 'modifiers'> & {
  createPopper?: typeof PopperJS.createPopper;
  modifiers?: ReadonlyArray<Modifier<unknown>>;
};

export interface MentionData {
  link?: string;
  avatar?: string;
  name: string;
  id?: null | string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export interface MultiMentionData {
  [fieldName: string]: MentionData[];
}

export interface MentionPluginStore {
  setEditorState?(editorState: EditorState): void;
  getEditorState?(): EditorState;
  getPortalClientRect(offsetKey: string): ClientRect;
  getAllSearches(): Map<string, string>;
  isEscaped(offsetKey: string): boolean;
  escapeSearch(offsetKey: string): void;
  resetEscapedSearch(): void;
  register(offsetKey: string): void;
  updatePortalClientRect(offsetKey: string, funct: ClientRectFunction): void;
  unregister(offsetKey: string): void;
  getIsOpened(): boolean;
  setIsOpened(nextIsOpened: boolean): void;

  getReferenceElement(): HTMLElement | null;
  setReferenceElement(element: HTMLElement | null): void;
}

export interface MentionPluginConfig {
  mentionPrefix?: string;
  theme?: MentionPluginTheme;
  positionSuggestions?: PositionSuggestionsFn;
  mentionComponent?: ComponentType<SubMentionComponentProps>;
  mentionSuggestionsComponent?: ComponentType;
  entityMutability?: 'SEGMENTED' | 'IMMUTABLE' | 'MUTABLE';
  mentionTrigger?: string | string[];
  mentionRegExp?: string;
  supportWhitespace?: boolean;
  popperOptions?: PopperOptions;
}

interface ClientRectFunction {
  (): ClientRect;
}

export default (
  config: MentionPluginConfig = {}
): EditorPlugin & {
  MentionSuggestions: ComponentType<MentionSuggestionsPubProps>;
} => {
  const callbacks: MentionSuggestionCallbacks = {
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
  let clientRectFunctions: Map<string, ClientRectFunction> = Map();
  let isOpened = false;
  let referenceElement: HTMLElement | null;

  const store: MentionPluginStore = {
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

    getIsOpened: () => isOpened,
    setIsOpened: (nextIsOpened) => {
      isOpened = nextIsOpened;
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
    mentionPrefix = '',
    theme = defaultTheme,
    positionSuggestions,
    mentionComponent,
    mentionSuggestionsComponent: MentionSuggestionsComponent = MentionSuggestions,
    entityMutability = 'SEGMENTED',
    mentionTrigger = '@',
    mentionRegExp = defaultRegExp,
    supportWhitespace = false,
    popperOptions,
  } = config;
  const mentionTriggers: string[] =
    typeof mentionTrigger === 'string' ? [mentionTrigger] : mentionTrigger;
  const mentionSearchProps = {
    ariaProps,
    callbacks,
    theme,
    store,
    entityMutability,
    positionSuggestions,
    mentionTriggers,
    mentionPrefix,
    popperOptions,
  };
  const DecoratedMentionSuggestionsComponent = (
    props: MentionSuggestionsPubProps
  ): ReactElement => (
    <MentionSuggestionsComponent {...props} {...mentionSearchProps} />
  );
  const DecoratedMention = (props: MentionProps): ReactElement => (
    <Mention {...props} theme={theme} mentionComponent={mentionComponent} />
  );
  const DecoratedMentionSuggestionsPortal = (
    props: Omit<MentionSuggestionsPortalProps, 'store'>
  ): ReactElement => <MentionSuggestionsPortal {...props} store={store} />;
  return {
    MentionSuggestions: DecoratedMentionSuggestionsComponent,
    decorators: [
      {
        strategy: mentionStrategy(mentionTriggers),
        component: DecoratedMention,
      },
      {
        strategy: mentionSuggestionsStrategy(
          mentionTriggers,
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

    keyBindingFn: (keyboardEvent) =>
      callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent),
    handleReturn: (keyboardEvent) =>
      callbacks.handleReturn && callbacks.handleReturn(keyboardEvent),
    onChange: (editorState) => {
      if (callbacks.onChange) {
        return callbacks.onChange(editorState);
      }
      return editorState;
    },
  };
};

export const defaultSuggestionsFilter = suggestionsFilter;
