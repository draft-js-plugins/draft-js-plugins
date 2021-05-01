import { ContentBlock } from 'draft-js';
import { findWithRegex, StrategyCallback } from '@draft-js-plugins/utils';

const EMOJI_REGEX = /(\s|^):[\w]*:?/g;

export default (
  contentBlock: ContentBlock,
  callback: StrategyCallback
): void => {
  findWithRegex(EMOJI_REGEX, contentBlock, callback);
};
