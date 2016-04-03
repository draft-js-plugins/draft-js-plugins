import { Entity } from 'draft-js';
import removeBlock from './modifiers/removeBlock';
import refreshEditorState from './modifiers/refreshEditorState';

export default (config) => (contentBlock, { getEditorState, setEditorState }) => {
  const type = contentBlock.getType();
  if (type === 'image') {
    const entityKey = contentBlock.getEntityAt(0);
    const data = entityKey ? Entity.get(entityKey).data : {};
    return {
      component: config.Image,
      props: {
        ...data,
        remove: () => setEditorState(removeBlock(getEditorState(), contentBlock.key)),

        // This is for block-alignment-wrapper, only temporarily living here
        refreshEditorState: () => setEditorState(refreshEditorState(getEditorState())),
      },
    };
  }

  return undefined;
};
