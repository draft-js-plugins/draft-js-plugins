import React, { ComponentType, ReactElement, FC } from 'react';
import { EditorState } from 'draft-js';
import { createStore, Store } from '@draft-js-plugins/utils';
import { EditorPlugin } from '@draft-js-plugins/editor';
import Toolbar, { SideToolbarChildrenProps } from './components/Toolbar';
import { defaultTheme, SideToolbarPluginTheme } from './theme';

export type { SideToolbarPluginTheme };

export type SideToolbarPosition = 'left' | 'right';

export interface SideToolbarPluginConfig {
  theme?: SideToolbarPluginTheme;
  position?: SideToolbarPosition;
}

export interface SideToolbarProps {
  children?: FC<SideToolbarChildrenProps>;
}

export type SideToolbarPlugin = EditorPlugin & {
  SideToolbar: ComponentType<SideToolbarProps>;
};

interface StoreItemMap {
  isVisible?: boolean;
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
  editorState?: EditorState;
  getEditorRef?(): {
    refs?: { editor: HTMLElement };
    editor: HTMLElement;
  };
}

export type SideToolbarPluginStore = Store<StoreItemMap>;

export default (config: SideToolbarPluginConfig = {}): SideToolbarPlugin => {
  const defaultPostion = 'left';

  const store = createStore<StoreItemMap>({
    isVisible: false,
  });

  const { position = defaultPostion, theme = defaultTheme } = config;

  const SideToolbar = (props: SideToolbarProps): ReactElement => (
    <Toolbar {...props} store={store} theme={theme} position={position} />
  );

  return {
    initialize: ({ setEditorState, getEditorState, getEditorRef }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
      store.updateItem('getEditorRef', getEditorRef);
    },
    // Re-Render the toolbar on every change
    onChange: (editorState) => {
      store.updateItem('editorState', editorState);
      return editorState;
    },
    SideToolbar,
  };
};
