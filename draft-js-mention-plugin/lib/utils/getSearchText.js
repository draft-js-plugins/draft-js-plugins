"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getSearchTextAt = _interopRequireDefault(require("./getSearchTextAt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(editorState, selection, trigger) {
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset();
  var currentContent = editorState.getCurrentContent();
  var currentBlock = currentContent.getBlockForKey(anchorKey);
  var blockText = currentBlock.getText();
  return (0, _getSearchTextAt["default"])(blockText, anchorOffset, trigger);
};

exports["default"] = _default;