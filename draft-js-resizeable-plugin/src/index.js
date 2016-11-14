import { Entity, EditorState } from 'draft-js';
import createDecorator from './createDecorator';

const store = {
  getEditorRef: undefined,
  getReadOnly: undefined,
  getEditorState: undefined,
  setEditorState: undefined,
};

const createSetResizeData = (contentBlock, { getEditorState, setEditorState }) => (data) => {
  const entityKey = contentBlock.getEntityAt(0);
  if (entityKey) {
    const editorState = getEditorState();
    Entity.mergeData(entityKey, { ...data });
    setEditorState(EditorState.forceSelection(editorState, editorState.getSelection()));
  }
};

export default (config) => ({
  initialize: ({ getEditorRef, getReadOnly, getEditorState, setEditorState }) => {
    store.getReadOnly = getReadOnly;
    store.getEditorRef = getEditorRef;
    store.getEditorState = getEditorState;
    store.setEditorState = setEditorState;
  },
  decorator: createDecorator({ config, store }),
  blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => {
    const entityKey = contentBlock.getEntityAt(0);
    const resizeData = entityKey ? Entity.get(entityKey).data : {};
    return {
      props: {
        resizeData,
        setResizeData: createSetResizeData(contentBlock, { getEditorState, setEditorState }),
      },
    };
  }
});
