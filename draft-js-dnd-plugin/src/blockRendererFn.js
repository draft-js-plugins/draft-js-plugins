import { Entity } from 'draft-js';
import removeBlock from './modifiers/removeBlock';
import refreshEditorState from './modifiers/refreshEditorState';

export default (config) => (contentBlock, getEditorState, updateEditorState) => {
  const type = contentBlock.getType();
  if (type === 'image') {
    const entityKey = contentBlock.getEntityAt(0);
    const data = entityKey ? Entity.get(entityKey).data : {};
    return {
      component: config.Image,
      props: {
        ...data,
        remove: () => updateEditorState(removeBlock(getEditorState(), contentBlock.key)),

        // This is for block-alignment-wrapper, only temporarily living here
        refreshEditorState: () => updateEditorState(refreshEditorState(getEditorState())),
      },
    };
  }

  return undefined;
};
