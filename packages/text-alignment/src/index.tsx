import { EditorPlugin } from '@draft-js-plugins/editor';
import { createStore, Store } from '@draft-js-plugins/utils';
import { ContentBlock, EditorState } from 'draft-js';
import React, { ComponentType, ReactElement } from 'react';
import TextAlignmentComponent, {
  AlignmentPluginsPubParams,
} from './TextAlignmentComponent';
import type { TextAlignmentPluginTheme } from './theme';
import { defaultTheme } from './theme';

export interface AlignmentPluginConfig {
  theme?: TextAlignmentPluginTheme;
}

export type TextAlignmentPlugin = EditorPlugin & {
  TextAlignment: ComponentType<AlignmentPluginsPubParams>;
};

interface StoreItemMap {
  getEditorState?(): EditorState;
  setEditorState?(editorState: EditorState): void;
}

export type AlignmentPluginStore = Store<StoreItemMap>;

export default (config: AlignmentPluginConfig = {}): TextAlignmentPlugin => {
  const { theme = defaultTheme } = config;

  const store = createStore<StoreItemMap>();
  const TextAlignment = (props: AlignmentPluginsPubParams): ReactElement => (
    <TextAlignmentComponent store={store} {...props} />
  );

  const capitalFirstLetter = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const getBlockAlignment = (block: ContentBlock): string => {
    let style = 'left';
    block.findStyleRanges(
      (value) => {
        if (value.hasStyle('right')) style = 'right';
        if (value.hasStyle('center')) style = 'center';
        return true;
      },
      () => true
    );
    return capitalFirstLetter(style);
  };

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },

    blockStyleFn: (block: ContentBlock, { getEditorState }) => {
      let alignment = `draft${getBlockAlignment(block)}`;
      if (!block.getText()) {
        const previousBlock = getEditorState()
          .getCurrentContent()
          .getBlockBefore(block.getKey());
        if (previousBlock) {
          alignment = `draft${getBlockAlignment(previousBlock)}`;
        }
      }
      return theme.alignmentStyles[alignment];
    },
    TextAlignment,
  };
};
