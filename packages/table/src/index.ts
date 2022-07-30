import {
  EditorPlugin,
  EditorRef,
  PluginFunctions,
} from '@draft-js-plugins/editor';
import { EditorState, ContentBlock } from 'draft-js';
import { Map } from 'immutable';
import TableBlock from './TableBlock';

type TableEditorPlugin = EditorPlugin;

export interface TablePluginConfig {
  readOnly?: boolean;
}

export interface TablePluginStore {
  getEditorRef?(): EditorRef;
  getReadOnly?(): boolean;
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
}

export default function createTableEditorPlugin(): TableEditorPlugin {
  const store: TablePluginStore = {
    getEditorRef: undefined,
    getReadOnly: undefined,
    getEditorState: undefined,
    setEditorState: undefined,
  };
  const plugin: TableEditorPlugin = {
    initialize: ({
      getEditorRef,
      getReadOnly,
      getEditorState,
      setEditorState,
    }) => {
      store.getReadOnly = getReadOnly;
      store.getEditorRef = getEditorRef;
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    blockRenderMap: Map({
      // Prevent draft from rendering these blocks itself - we'll render
      // them into the table instead.
      tr: { element: (() => null) as unknown as string },
      td: { element: (() => null) as unknown as string },
      th: { element: (() => null) as unknown as string },
    }),
    blockRendererFn: (
      contentBlock: ContentBlock,
      { getEditorState }: PluginFunctions
    ) => {
      if (contentBlock.getType() === 'table') {
        return {
          component: TableBlock,
          editable: true,
          props: {
            getEditorState,
          },
        };
      }
      return null;
    },
  };
  return plugin;
}
