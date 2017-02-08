'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = moveBlock;

var _draftJs = require('draft-js');

var _addBlock = require('./addBlock');

var _addBlock2 = _interopRequireDefault(_addBlock);

var _removeBlock = require('./removeBlock');

var _removeBlock2 = _interopRequireDefault(_removeBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function moveBlock(editorState, selection, blockKey) {
  var currentContent = editorState.getCurrentContent();
  var block = currentContent.getBlockForKey(blockKey);
  var entity = _draftJs.Entity.get(block.getEntityAt(0));
  var contentWithNewBlock = (0, _addBlock2.default)(editorState, selection, block.getType(), entity.data, entity.type);
  var contentWithoutOldBlock = (0, _removeBlock2.default)(contentWithNewBlock, blockKey);
  // force to new selection
  var newSelection = new _draftJs.SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 0
  });
  return _draftJs.EditorState.forceSelection(_draftJs.EditorState.push(editorState, contentWithoutOldBlock, 'insert-fragment'), newSelection);
}