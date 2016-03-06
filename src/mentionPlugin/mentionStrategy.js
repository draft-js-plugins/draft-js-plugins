import { Entity } from 'draft-js-cutting-edge';

const findMention = (character) => {
  const entityKey = character.getEntity();
  return (entityKey !== null && Entity.get(entityKey).getType() === 'mention');
};

const findMentionEntities = (contentBlock, callback) => {
  contentBlock.findEntityRanges(findMention, callback);
};

export default findMentionEntities;
