import { ContentBlock, ContentState } from 'draft-js';
import getTypeByTrigger from './utils/getTypeByTrigger';

const findMentionEntities = (trigger: string) => (
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
): void => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === getTypeByTrigger(trigger)
    );
  }, callback);
};

export default findMentionEntities;
