import * as PopperJS from '@popperjs/core';
import { Modifier } from 'react-popper';
import { Map } from 'immutable';
import { ComponentType } from 'react';
import { EditorState } from 'draft-js';
import { EditorPlugin } from '@draft-js-plugins/editor';
import { SubMentionComponentProps } from './Mention';
import MentionSuggestions, {
  MentionSuggestionsPubProps,
} from './MentionSuggestions/MentionSuggestions';
import addMention from './modifiers/addMention';
import { PositionSuggestionsFn } from './utils/positionSuggestions';
import { defaultTheme, MentionPluginTheme } from './theme';
export { default as MentionSuggestions } from './MentionSuggestions/MentionSuggestions';
export { defaultTheme };
export { addMention };
export type { MentionPluginTheme };
export declare type PopperOptions = Omit<
  Partial<PopperJS.Options>,
  'modifiers'
> & {
  createPopper?: typeof PopperJS.createPopper;
  modifiers?: ReadonlyArray<Modifier<unknown>>;
};
export interface MentionData {
  link?: string;
  avatar?: string;
  name: string;
  id?: null | string | number;
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
declare const _default: (config?: MentionPluginConfig) => EditorPlugin & {
  MentionSuggestions: ComponentType<MentionSuggestionsPubProps>;
};
export default _default;
export declare const defaultSuggestionsFilter: (
  searchValue: string,
  suggestions: MentionData[] | MultiMentionData,
  trigger?: string | undefined
) => MentionData[];
