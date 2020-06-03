import getTypeByTrigger from './utils/getTypeByTrigger';

const findMentionEntities = triggers => (
  contentBlock,
  callback,
  contentState
) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      triggers.some(
        trigger =>
          contentState.getEntity(entityKey).getType() ===
          getTypeByTrigger(trigger)
      )
    );
  }, callback);
};

export default findMentionEntities;
