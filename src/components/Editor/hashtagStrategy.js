/* @flow */

import findWithRegex from './findWithRegex';

/**
 * Super simple decorators for handles and hashtags, for demonstration
 * purposes only. Don't reuse these regexes.
 */
const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g;

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
};
