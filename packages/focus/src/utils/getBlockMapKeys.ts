import { ContentState } from 'draft-js';

export default (
  contentState: ContentState,
  startKey: string,
  endKey: string
): Immutable.Iterable<number, string> => {
  const blockMapKeys = contentState.getBlockMap().keySeq();
  return blockMapKeys
    .skipUntil((key) => key === startKey)
    .takeUntil((key) => key === endKey)
    .concat([endKey]);
};
