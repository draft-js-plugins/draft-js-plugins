import React, { ComponentType } from 'react';
import { ContentBlock, EditorState } from 'draft-js';
import { EditorPlugin } from 'draft-js-plugins-editor';
import createDecorator from './createDecorator';
import AlignmentTool from './AlignmentTool';
import createStore from './utils/createStore';
import { defaultTheme, AlignmentPluginTheme } from './theme';

const createSetAlignment = (
  contentBlock: ContentBlock,
  {
    getEditorState,
    setEditorState,
  }: {
    setEditorState(editorState: EditorState): void; // a function to update the EditorState
    getEditorState(): EditorState; // a function to get the current EditorState
  }
) => (data: Object) => {
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

interface AlignmentPluginConfig {
  theme?: AlignmentPluginTheme;
}

export default function(
  config: AlignmentPluginConfig = {}
): EditorPlugin & {
  decorator: ReturnType<typeof createDecorator>;
  AlignmentTool: ComponentType;
} {
  const store = createStore({
    isVisible: false,
  });

  const { theme = defaultTheme } = config;

  const DecoratedAlignmentTool = () => (
    <AlignmentTool store={store} theme={theme} />
  );

  return {
    initialize: ({ getReadOnly, getEditorState, setEditorState }) => {
      store.updateItem('getReadOnly', getReadOnly);
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    decorator: createDecorator({ store }),
    blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => {
      const entityKey = contentBlock.getEntityAt(0);
      const contentState = getEditorState().getCurrentContent();
      const alignmentData = entityKey
        ? contentState.getEntity(entityKey).getData()
        : {};
      return {
        props: {
          alignment: alignmentData.alignment || 'default',
          setAlignment: createSetAlignment(contentBlock, {
            getEditorState,
            setEditorState,
          }),
        },
      };
    },
    AlignmentTool: DecoratedAlignmentTool,
  };
}
