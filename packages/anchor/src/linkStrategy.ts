import { ContentBlock, ContentState } from 'draft-js';

export const matchesEntityType = (type: string): boolean => type === 'LINK';

export default function strategy(
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  contentState: ContentState
): void {
  if (!contentState) return;
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      matchesEntityType(contentState.getEntity(entityKey).getType())
    );
  }, callback);
}
