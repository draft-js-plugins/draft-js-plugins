import { EditorPlugin } from 'draft-js-plugins-editor';
import { List } from 'immutable';
import { ComponentType, CSSProperties, ReactNode } from 'react';

export interface EmojiPluginTheme {
  emoji?: string;

  emojiSuggestions?: string;

  emojiSuggestionsEntry?: string;
  emojiSuggestionsEntryFocused?: string;
  emojiSuggestionsEntryText?: string;
  emojiSuggestionsEntryIcon?: string;
}

export interface EmojiSuggestionsState {
  isActive?: boolean;
  focusedOptionIndex: number;
}

export interface EmojiPluginConfig {
  theme?: EmojiPluginTheme;
  imagePath?: string;
  imageType?: string;
  allowImageCache?: boolean;
  positionSuggestions?: (arg: {
    decoratorRect: DOMRect;
    popover: Element;
    props: { suggestions: any[] };
    state: EmojiSuggestionsState;
    filteredEmojis: List<string>;
  }) => CSSProperties;
  priorityList?: { [k: string]: string | undefined };
  toneSelectOpenDelay?: number;
  useNativeArt?: boolean;
}

export type EmojiPlugin = EditorPlugin & {
  EmojiSuggestions: ComponentType<unknown>;
};

declare const createEmojiPlugin: (config?: EmojiPluginConfig) => EmojiPlugin;

export default createEmojiPlugin;
