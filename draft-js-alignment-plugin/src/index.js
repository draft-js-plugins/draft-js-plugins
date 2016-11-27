import { Entity, EditorState } from 'draft-js';
import decorateComponentWithProps from 'decorate-component-with-props';
import createDecorator from './createDecorator';
import AlignmentTool from './AlignmentTool';
import createStore from './utils/createStore';

const store = createStore({
  isVisible: false,
});

const createSetAlignment = (contentBlock, { getEditorState, setEditorState }) => (data) => {
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
    initialize: ({ getReadOnly, getEditorState, setEditorState }) => {
      store.updateItem('getReadOnly', getReadOnly);
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    decorator: createDecorator({ config, store }),
    blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => {
      const entityKey = contentBlock.getEntityAt(0);
      const alignmentData = entityKey ? Entity.get(entityKey).data : {};
      return {
        props: {
          alignment: alignmentData.alignment || 'default',
          setAlignment: createSetAlignment(contentBlock, { getEditorState, setEditorState }),
        },
      };
    },
    AlignmentTool: decorateComponentWithProps(AlignmentTool, alignmentToolProps),
  };
};
