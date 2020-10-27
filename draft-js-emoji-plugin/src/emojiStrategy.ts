import findWithRegex from 'find-with-regex';
import emojione from 'emojione';
import { ContentBlock } from 'draft-js';

const unicodeRegex = new RegExp(emojione.unicodeRegexp, 'g');

export default (
  contentBlock: ContentBlock,
  callback: StrategyCallback
): void => {
  findWithRegex(unicodeRegex, contentBlock, callback);
};
