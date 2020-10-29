/* @flow */

import { ContentBlock } from 'draft-js';
import findWithRegex from 'find-with-regex';

const EMOJI_REGEX = /(\s|^):[\w]*/g;

export default (
  contentBlock: ContentBlock,
  callback: StrategyCallback
): void => {
  findWithRegex(EMOJI_REGEX, contentBlock, callback);
};
