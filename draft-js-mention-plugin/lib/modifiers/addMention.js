"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _draftJs = require("draft-js");

var _getSearchText2 = _interopRequireDefault(require("../utils/getSearchText"));

var _getTypeByTrigger = _interopRequireDefault(require("../utils/getTypeByTrigger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addMention = function addMention(editorState, mention, mentionPrefix, mentionTrigger, entityMutability) {
  var contentStateWithEntity = editorState.getCurrentContent().createEntity((0, _getTypeByTrigger["default"])(mentionTrigger), entityMutability, {
    mention: mention
  });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  var currentSelectionState = editorState.getSelection();

  var _getSearchText = (0, _getSearchText2["default"])(editorState, currentSelectionState, mentionTrigger),
      begin = _getSearchText.begin,
      end = _getSearchText.end; // get selection of the @mention search text


  var mentionTextSelection = currentSelectionState.merge({
    anchorOffset: begin,
    focusOffset: end
  });

  var mentionReplacedContent = _draftJs.Modifier.replaceText(editorState.getCurrentContent(), mentionTextSelection, "".concat(mentionPrefix).concat(mention.name), null, // no inline style needed
  entityKey); // If the mention is inserted at the end, a space is appended right after for
  // a smooth writing experience.


  var blockKey = mentionTextSelection.getAnchorKey();
  var blockSize = editorState.getCurrentContent().getBlockForKey(blockKey).getLength();

  if (blockSize === end) {
    mentionReplacedContent = _draftJs.Modifier.insertText(mentionReplacedContent, mentionReplacedContent.getSelectionAfter(), ' ');
  }

  var newEditorState = _draftJs.EditorState.push(editorState, mentionReplacedContent, 'insert-mention');

  return _draftJs.EditorState.forceSelection(newEditorState, mentionReplacedContent.getSelectionAfter());
};

var _default = addMention;
exports["default"] = _default;