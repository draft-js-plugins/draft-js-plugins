/* @flow */

import findWithRegex from './findWithRegex';

/**
 * Super simple decorators for handles and hashtags, for demonstration
 * purposes only. Don't reuse these regexes.
 */
const LINK_REGEX = /(https?:\/\/[^\s]+)/g;

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(LINK_REGEX, contentBlock, callback);
};
