import { ContentBlock } from 'draft-js';
import { extractLinks } from './utils/extractLinks';

// Gets all the links in the text, and returns them via the callback
const linkStrategy = (
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void
): void => {
  const links = extractLinks(contentBlock.getText());
  if (links) {
    for (const link of links) {
      callback(link.index, link.lastIndex);
    }
  }
};

export default linkStrategy;
