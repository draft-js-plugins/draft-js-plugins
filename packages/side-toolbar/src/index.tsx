import React, { ComponentType, ReactElement, FC } from 'react';
import { EditorState } from 'draft-js';
import { createStore, Store } from '@draft-js-plugins/utils';
import { EditorPlugin } from '@draft-js-plugins/editor';
import * as PopperJS from '@popperjs/core';
import { Modifier } from 'react-popper';
import Toolbar, {
  SideToolbarChildrenProps,
} from './components/Toolbar/Toolbar';
import { defaultTheme, SideToolbarPluginTheme } from './theme';
import type { SideToolbarButtonProps } from './components/BlockTypeSelect/SideToolbarButton';
import SideToolbarButton from './components/BlockTypeSelect/SideToolbarButton';
import { CreateBlockTypeSelectPopperOptionsFn } from './components/BlockTypeSelect/BlockTypeSelect';

export type { SideToolbarPluginTheme, SideToolbarButtonProps };

export type SideToolbarPosition = 'left' | 'right';

export interface SideToolbarPluginConfig {
  theme?: SideToolbarPluginTheme;
  position?: SideToolbarPosition;
  popperOptions?: PopperOptions;
  sideToolbarButtonComponent?: ComponentType<SideToolbarButtonProps>;
  createBlockTypeSelectPopperOptions?: CreateBlockTypeSelectPopperOptionsFn;
}

export type PopperOptions = Omit<Partial<PopperJS.Options>, 'modifiers'> & {
  createPopper?: typeof PopperJS.createPopper;
  modifiers?: ReadonlyArray<Modifier<unknown>>;
};

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

  const {
    position = defaultPostion,
    theme = defaultTheme,
    sideToolbarButtonComponent = SideToolbarButton,
    popperOptions,
    createBlockTypeSelectPopperOptions,
  } = config;

  const SideToolbar = (props: SideToolbarProps): ReactElement => (
    <Toolbar
      {...props}
      store={store}
      theme={theme}
      position={position}
      popperOptions={popperOptions}
      sideToolbarButtonComponent={sideToolbarButtonComponent}
      createBlockTypeSelectPopperOptions={createBlockTypeSelectPopperOptions}
    />
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
