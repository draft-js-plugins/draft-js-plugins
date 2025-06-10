import React, { ComponentType, FC, ReactElement } from 'react';
import { EditorPlugin } from '@draft-js-plugins/editor';
import { EditorState, SelectionState } from 'draft-js';
import { createStore, Store } from '@draft-js-plugins/utils';
import Toolbar, { ToolbarChildrenProps } from './components/Toolbar';
import Separator from './components/Separator';
import { defaultTheme, InlineToolbarPluginTheme } from './theme';

export interface InlineToolbarPluginConfig {
  theme?: InlineToolbarPluginTheme;
}

export interface ToolbarProps {
  children?:
    | ((externalProps: ToolbarChildrenProps) => ReactElement)
    | FC<ToolbarChildrenProps>;
  overrideContent?: ComponentType<ToolbarChildrenProps>;
}

export type InlineToolBarPlugin = EditorPlugin & {
  InlineToolbar: ComponentType<ToolbarProps>;
};

export interface StoreItemMap {
  selection?: SelectionState;
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
  isVisible?: boolean;
  getEditorRef?(): {
    refs?: { editor: HTMLElement };
    editor: HTMLElement;
  };
}

export type InlineToolbarPluginStore = Store<StoreItemMap>;

export default (
  config: InlineToolbarPluginConfig = {}
): InlineToolBarPlugin => {
  const store = createStore<StoreItemMap>({
    isVisible: false,
  });

  const { theme = defaultTheme } = config;

  const InlineToolbar = (props: ToolbarProps): ReactElement => (
    <Toolbar {...props} store={store} theme={theme} />
  );

  return {
    initialize: ({ getEditorState, setEditorState, getEditorRef }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
      store.updateItem('getEditorRef', getEditorRef);
    },
    // Re-Render the text-toolbar on selection change
    onChange: (editorState) => {
      store.updateItem('selection', editorState.getSelection());
      return editorState;
    },
    InlineToolbar,
  };
};

export { Separator };
