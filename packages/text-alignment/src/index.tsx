import React, { ComponentType, ReactElement } from 'react';
import { ContentBlock, EditorState } from 'draft-js';
import { EditorPlugin } from '@draft-js-plugins/editor';
import { createStore, Store } from '@draft-js-plugins/utils';
import TextAlignmentComponent from './TextAlignmentComponent';
import type { TextAlignmentButtonsTheme } from './theme';

export interface AlignmentPluginProps {
  theme: TextAlignmentButtonsTheme;
}

export interface AlignmentPluginConfig {
  prefixClass?: string;
}

interface StoreItemMap {
  getEditorState?(): EditorState;
  setEditorState?(editorState: EditorState): void;
}

export type AlignmentPluginStore = Store<StoreItemMap>;

export default (
  config: AlignmentPluginConfig = {}
): EditorPlugin & {
  TextAlignment: ComponentType<AlignmentPluginProps>;
} => {
  const store = createStore<StoreItemMap>();
  const TextAlignment = (props: AlignmentPluginProps): ReactElement => (
    <TextAlignmentComponent store={store} {...props} />
  );

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
    return style;
  };

  const prefixClass = config.prefixClass
    ? config.prefixClass
    : 'draft-textAlign';
  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    blockStyleFn: (block: ContentBlock, { getEditorState }) => {
      let alignment = getBlockAlignment(block);
      if (!block.getText()) {
        const previousBlock = getEditorState()
          .getCurrentContent()
          .getBlockBefore(block.getKey());
        if (previousBlock) {
          alignment = getBlockAlignment(previousBlock);
        }
      }
      return `${prefixClass}-${alignment}`;
    },
    TextAlignment,
  };
};
