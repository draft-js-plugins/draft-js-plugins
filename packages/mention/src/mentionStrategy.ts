import { ContentBlock, ContentState } from 'draft-js';
import getTypeByTrigger from './utils/getTypeByTrigger';

const findMentionEntities = (triggers: string[]) => (
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
): void => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      triggers.some(
        (trigger) =>
          contentState.getEntity(entityKey).getType() ===
          getTypeByTrigger(trigger)
      )
    );
  }, callback);
};

export default findMentionEntities;
