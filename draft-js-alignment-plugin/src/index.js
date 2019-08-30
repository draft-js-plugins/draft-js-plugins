import React from 'react';
import { EditorState } from 'draft-js';
import createDecorator from './createDecorator';
import AlignmentTool from './AlignmentTool';
import createStore from './utils/createStore';
import { defaultTheme } from './theme.js';

const createSetAlignment = (
  contentBlock,
  { getEditorState, setEditorState }
) => data => {
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

export default (config = {}) => {
  const store = createStore({
    isVisible: false,
  });

  const { theme = defaultTheme } = config;

  const DecoratedAlignmentTool = props => (
    <AlignmentTool {...props} store={store} theme={theme} />
  );

  return {
    initialize: ({ getReadOnly, getEditorState, setEditorState }) => {
      store.updateItem('getReadOnly', getReadOnly);
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    decorator: createDecorator({ config, store }),
    blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => {
      const entityKey = contentBlock.getEntityAt(0);
      const contentState = getEditorState().getCurrentContent();
      const alignmentData = entityKey
        ? contentState.getEntity(entityKey).data
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
};
