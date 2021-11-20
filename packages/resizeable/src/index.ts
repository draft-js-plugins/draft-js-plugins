import { EditorState, ContentBlock } from 'draft-js';
import { EditorPlugin, EditorRef } from '@draft-js-plugins/editor';
import createDecorator from './createDecorator';

type ResizeableEditorPlugin = EditorPlugin & {
  decorator: ReturnType<typeof createDecorator>;
};

export type ScaleType = 'auto' | 'relative' | 'absolute';

export interface BlockProps {
  setResizeData(value: { width: number; height: number }): void;
  resizeData: { width: number; height: number };
}

export interface ResizeablePluginConfig {
  blockProps?: BlockProps;
  horizontal?: ScaleType;
  vertical?: ScaleType;
  initialWidth?: string;
  initialHeight?: string;
}

export interface ResizeablePluginStore {
  getEditorRef?(): EditorRef;
  getReadOnly?(): boolean;
  getEditorState?(): EditorState;
  setEditorState?(state: EditorState): void;
}

const createSetResizeData =
  (
    contentBlock: ContentBlock,
    {
      getEditorState,
      setEditorState,
    }: {
      getEditorState(): EditorState;
      setEditorState(state: EditorState): void;
    }
  ) =>
  (data: Record<string, unknown>) => {
    const entityKey = contentBlock.getEntityAt(0);
    if (entityKey) {
      const editorState = getEditorState();
      const contentState = editorState.getCurrentContent();
      contentState.mergeEntityData(entityKey, { ...data });
      setEditorState(
        EditorState.forceSelection(editorState, editorState.getSelection())
      );
    }
  };

export default (
  config: ResizeablePluginConfig = {}
): ResizeableEditorPlugin => {
  const store: ResizeablePluginStore = {
    getEditorRef: undefined,
    getReadOnly: undefined,
    getEditorState: undefined,
    setEditorState: undefined,
  };
  return {
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
    decorator: createDecorator({ config, store }),
    blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => {
      const entityKey = contentBlock.getEntityAt(0);
      const contentState = getEditorState().getCurrentContent();
      const resizeData = entityKey
        ? contentState.getEntity(entityKey).getData()
        : {};
      return {
        props: {
          resizeData,
          setResizeData: createSetResizeData(contentBlock, {
            getEditorState,
            setEditorState,
          }),
        },
      };
    },
  };
};
