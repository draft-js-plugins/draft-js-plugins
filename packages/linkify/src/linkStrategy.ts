import { ContentBlock } from 'draft-js';
import { ExtractLinks } from './utils/extractLinks';

// Gets all the links in the text, and returns them via the callback
const linkStrategy = (
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
  customExtractLinks: ExtractLinks
): void => {
  const links = customExtractLinks(contentBlock.getText());
  if (links) {
    for (const link of links) {
      callback(link.index, link.lastIndex);
    }
  }
};

export default linkStrategy;
