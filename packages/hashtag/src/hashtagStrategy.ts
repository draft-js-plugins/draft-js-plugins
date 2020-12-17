import { ContentBlock } from 'draft-js';
import { extractHashtagsWithIndices } from './utils/extractHashtags';

export default (
  contentBlock: ContentBlock,
  callback: (begin: number, end: number) => void
): void => {
  const text = contentBlock.getText();
  const results = extractHashtagsWithIndices(text);

  results.forEach(hashtag => {
    callback(hashtag.indices[0], hashtag.indices[1]);
  });
};
