import React, { ComponentType, ReactElement } from 'react';
import { EditorState } from 'draft-js';
import { EditorPlugin } from '@draft-js-plugins/editor';
import CharCounter, { CharCounterPubProps } from './CharCounter';
import WordCounter, { WordCounterPubParams } from './WordCounter';
import LineCounter, { LineCounterPubParams } from './LineCounter';
import CustomCounter, { CustomCounterPubProps } from './CustomCounter';
import { CounterPluginTheme, defaultTheme } from './theme';

export interface CounterPluginStore {
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
}

export interface CounterPluginConfig {
  theme?: CounterPluginTheme;
}

export type CounterPlugin = EditorPlugin & {
  CharCounter: ComponentType<CharCounterPubProps>;
  WordCounter: ComponentType<WordCounterPubParams>;
  LineCounter: ComponentType<LineCounterPubParams>;
  CustomCounter: ComponentType<CustomCounterPubProps>;
};

export default (config: CounterPluginConfig = {}): CounterPlugin => {
  const store: CounterPluginStore = {
    getEditorState: undefined,
    setEditorState: undefined,
  };
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  const DecoratedCharCounter = (props: CharCounterPubProps): ReactElement => (
    <CharCounter {...props} theme={theme} store={store} />
  );
  const DecoratedWordCounter = (props: WordCounterPubParams): ReactElement => (
    <WordCounter {...props} theme={theme} store={store} />
  );
  const DecoratedLineCounter = (props: LineCounterPubParams): ReactElement => (
    <LineCounter {...props} theme={theme} store={store} />
  );
  const DecoratedCustomCounter = (
    props: CustomCounterPubProps
  ): ReactElement => <CustomCounter {...props} theme={theme} store={store} />;
  return {
    CharCounter: DecoratedCharCounter,
    WordCounter: DecoratedWordCounter,
    LineCounter: DecoratedLineCounter,
    CustomCounter: DecoratedCustomCounter,
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
  };
};
