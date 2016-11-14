import { Entity, EditorState } from 'draft-js';
import removeBlock from './utils/removeBlock';

const setEntityDataFn = (contentBlock, { getEditorState, setEditorState }) => (data) => {
  const entityKey = contentBlock.getEntityAt(0);
  if (entityKey) {
    const editorState = getEditorState();
    Entity.mergeData(entityKey, { ...data });
    setEditorState(EditorState.forceSelection(editorState, editorState.getSelection()));
  }
};

const removeBlockFn = (contentBlock, { getEditorState, setEditorState }) => () => {
  setEditorState(removeBlock(getEditorState(), contentBlock.get('key')));
};

const entityPropsPlugin = () => ({
  blockRendererFn: (contentBlock, pluginEditor) => {
    const entityKey = contentBlock.getEntityAt(0);
    const entityData = entityKey ? Entity.get(entityKey).data : {};
    return {
      props: {
        pluginEditor,
        entityData,
        setEntityData: setEntityDataFn(contentBlock, pluginEditor),
        removeBlock: removeBlockFn(contentBlock, pluginEditor)
      },
    };
  },
});

export default entityPropsPlugin;
