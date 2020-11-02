import React, { ComponentType, FC, ReactElement } from 'react';
import { EditorPlugin } from 'draft-js-plugins-editor';
import createStore from './utils/createStore';
import Toolbar, { ToolbarChildrenProps } from './components/Toolbar';
import Separator from './components/Separator';
import { defaultTheme, InlineToolbarPluginTheme } from './theme.js';

export interface InlineToolbarPluginConfig {
  theme?: InlineToolbarPluginTheme;
}

export interface ToolbarProps {
  children?: FC<ToolbarChildrenProps>;
  overrideContent?: ComponentType<ToolbarChildrenProps>;
}

export type InlineToolBarPlugin = EditorPlugin & {
  InlineToolbar: ComponentType<ToolbarProps>;
};

export default (
  config: InlineToolbarPluginConfig = {}
): InlineToolBarPlugin => {
  const store = createStore({
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
    onChange: editorState => {
      store.updateItem('selection', editorState.getSelection());
      return editorState;
    },
    InlineToolbar,
  };
};

export { Separator };
