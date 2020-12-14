import React, { ComponentType, ReactElement } from 'react';
import { createStore, Store } from '@draft-js-plugins/utils';
import { EditorState, SelectionState } from 'draft-js';
import { EditorPlugin } from '@draft-js-plugins/editor';
import Toolbar, { ToolbarPubProps } from './components/Toolbar';
import Separator from './components/Separator';
import { defaultTheme, StaticToolbarPluginTheme } from './theme';

export type { StaticToolbarPluginTheme };

export interface StaticToolbarPluginConfig {
  theme?: StaticToolbarPluginTheme;
}

export type ToolbarProps = ToolbarPubProps;

export type StaticToolBarPlugin = EditorPlugin & {
  Toolbar: ComponentType<ToolbarPubProps>;
};

export interface StoreItemMap {
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
  selection?: SelectionState;
}

export type StaticToolBarPluginStore = Store<StoreItemMap>;

export default (
  config: StaticToolbarPluginConfig = {}
): StaticToolBarPlugin => {
  const store = createStore<StoreItemMap>();

  const { theme = defaultTheme } = config;

  const StaticToolbar = (props: ToolbarPubProps): ReactElement => (
    <Toolbar {...props} store={store} theme={theme} />
  );

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },

    // Re-Render the text-toolbar on selection change
    onChange: (editorState) => {
      store.updateItem('selection', editorState.getSelection());
      return editorState;
    },
    Toolbar: StaticToolbar,
  };
};

export { Separator };
