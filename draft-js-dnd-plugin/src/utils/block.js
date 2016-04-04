import { Entity } from 'draft-js';

export function getBlocksWhereEntityData(state, query) {
  return state.getCurrentContent().get('blockMap').filter(block => {
    const entityData = block.getEntityAt(0) ? Entity.get(block.getEntityAt(0)).getData() : null;
    return entityData && query(entityData);
  });
}
