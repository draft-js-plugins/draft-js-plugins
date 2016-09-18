/* @flow */

import findWithRegex from 'find-with-regex';
import emojione from 'emojione';

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(new RegExp(emojione.unicodeRegex, 'g'), contentBlock, callback);
};
