import { Entity } from 'draft-js';

const findMention = (trigger) => {
  trigger = trigger || '@';

  return (character) => {
    const entityKey = character.getEntity();
    return (entityKey !== null && Entity.get(entityKey).getType() === 'mention-' + trigger);
  }
}

const findMentionEntities = (trigger) => {
  trigger = trigger || '@';

  return (contentBlock, callback) => {
    contentBlock.findEntityRanges(findMention(trigger), callback)
  }
};

export default findMentionEntities;
