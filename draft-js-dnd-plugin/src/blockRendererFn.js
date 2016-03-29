import { Entity } from 'draft-js';
import removeBlock from './modifiers/removeBlock';

export default (config) => (contentBlock, getEditorState, updateEditorState) => {
  const type = contentBlock.getType();
  if (type === 'image') {
    const entityKey = contentBlock.getEntityAt(0);
    const data = entityKey ? Entity.get(entityKey).data : {};
    return {
      component: config.Image,
      props: {
        ...data,
        remove: () => updateEditorState(removeBlock(getEditorState(), contentBlock.key))
      }
    };
  }

  return undefined;
};
