import { Entity } from 'draft-js';

// Filter editorState's blockMap
export function getBlocksWhereEntityData(editorState, filter) {
  return editorState.getCurrentContent().get('blockMap').filter((block) => {
    const entityData = block.getEntityAt(0) ? Entity.get(block.getEntityAt(0)).getData() : null;
    return entityData && filter(entityData);
  });
}
