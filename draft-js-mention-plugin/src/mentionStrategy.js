import { Entity } from 'draft-js';

const findMention = (trigger) => (character) => {
  const entityKey = character.getEntity();
  return (entityKey !== null && Entity.get(entityKey).getType() === `mention-${trigger}`);
};

const findMentionEntities = (trigger) => (contentBlock, callback) => {
  contentBlock.findEntityRanges(findMention(trigger), callback);
};

export default findMentionEntities;
