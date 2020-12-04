import findWithRegex from 'find-with-regex';
import emojiToolkit from 'emoji-toolkit';
import { ContentBlock } from 'draft-js';

const unicodeRegex = new RegExp(emojiToolkit.regUnicode, 'g');

export default (
  contentBlock: ContentBlock,
  callback: StrategyCallback
): void => {
  findWithRegex(unicodeRegex, contentBlock, callback);
};
