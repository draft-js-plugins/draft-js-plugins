'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (contentState, blockKey) {
  var afterKey = contentState.getKeyAfter(blockKey);
  var afterBlock = contentState.getBlockForKey(afterKey);
  var targetRange = void 0;

  // Only if the following block the last with no text then the whole block
  // should be removed. Otherwise the block should be reduced to an unstyled block
  // without any characters.
  if (afterBlock && afterBlock.getType() === 'unstyled' && afterBlock.getLength() === 0 && afterBlock === contentState.getBlockMap().last()) {
    targetRange = new _draftJs.SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: afterKey,
      focusOffset: 0
    });
  } else {
    targetRange = new _draftJs.SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: blockKey,
      focusOffset: 1
    });
  }

  // change the blocktype and remove the characterList entry with the block
  var newContentState = _draftJs.Modifier.setBlockType(contentState, targetRange, 'unstyled');
  return _draftJs.Modifier.removeRange(newContentState, targetRange, 'backward');
};

var _draftJs = require('draft-js');