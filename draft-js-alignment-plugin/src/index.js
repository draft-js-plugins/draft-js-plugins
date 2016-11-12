import { Entity, EditorState } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';
import createDecorator from './createDecorator';
import AlignmentTool from './AlignmentTool';

const store = {
  getEditorRef: undefined,
  getReadOnly: undefined,
  getEditorState: undefined,
  setEditorState: undefined,
};

const createSetAlignmentData = (contentBlock, { getEditorState, setEditorState }) => (data) => {
  const entityKey = contentBlock.getEntityAt(0);
  if (entityKey) {
    const editorState = getEditorState();
    Entity.mergeData(entityKey, { ...data });
    setEditorState(EditorState.forceSelection(editorState, editorState.getSelection()));
  }
};

export default (config) => {
  const alignmentToolProps = {
    store
  };
  return {
    initialize: ({ getEditorRef, getReadOnly, getEditorState, setEditorState }) => {
      store.getReadOnly = getReadOnly;
      store.getEditorRef = getEditorRef;
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    decorator: createDecorator({ config, store }),
    blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => {
      const entityKey = contentBlock.getEntityAt(0);
      const alignmentData = entityKey ? Entity.get(entityKey).data : {};
      return {
        props: {
          alignmentData,
          setAlignmentData: createSetAlignmentData(contentBlock, { getEditorState, setEditorState }),
        },
      };
    },
    AlignmentTool: decorateComponentWithProps(AlignmentTool, alignmentToolProps),
  };
};
