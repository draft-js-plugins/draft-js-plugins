import { Entity } from 'draft-js';

function linkStrategy(contentBlock, cb) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        Entity.get(entityKey).getType() === 'LINK'
      );
    },
    cb
  );
}

export default linkStrategy;
