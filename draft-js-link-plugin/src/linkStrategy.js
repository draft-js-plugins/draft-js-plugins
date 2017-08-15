export const matchesEntityType = (type) => type === 'LINK';

export default function strategy(contentBlock, cb, contentState) {
  if (!contentState) return;
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      matchesEntityType(contentState.getEntity(entityKey).getType())
    );
  }, cb);
}
