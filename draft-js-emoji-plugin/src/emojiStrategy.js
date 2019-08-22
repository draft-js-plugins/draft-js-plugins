import findWithRegex from 'find-with-regex';

import { re as unicodeRegex } from './utils/emojiRegex';

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(unicodeRegex, contentBlock, callback);
};
