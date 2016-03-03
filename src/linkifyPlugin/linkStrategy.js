/* @flow */

import linkifyIt from 'linkify-it';
import tlds from 'tlds';

const linkify = linkifyIt();
linkify.tlds(tlds);

export default (contentBlock: Object, callback: Function) => {
  const links = linkify.match(contentBlock.get('text'));
  if (typeof links !== 'undefined' && links !== null) {
    for (let i = 0; i < links.length; i++) {
      callback(links[i].index, links[i].lastIndex);
    }
  }
};
