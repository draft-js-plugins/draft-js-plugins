'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (editorState, selection, type, data, entityType) {
  var text = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : ' ';

  var currentContentState = editorState.getCurrentContent();
  var currentSelectionState = selection;

  // in case text is selected it is removed and then the block is appended
  var afterRemovalContentState = _draftJs.Modifier.removeRange(currentContentState, currentSelectionState, 'backward');

  // deciding on the postion to split the text
  var targetSelection = afterRemovalContentState.getSelectionAfter();
  var blockKeyForTarget = targetSelection.get('focusKey');
  var block = currentContentState.getBlockForKey(blockKeyForTarget);
  var insertionTargetSelection = void 0;
  var insertionTargetBlock = void 0;

  // In case there are no characters or entity or the selection is at the start it
  // is safe to insert the block in the current block.
  // Otherwise a new block is created (the block is always its own block)
  var isEmptyBlock = block.getLength() === 0 && block.getEntityAt(0) === null;
  var selectedFromStart = currentSelectionState.getStartOffset() === 0;
  if (isEmptyBlock || selectedFromStart) {
    insertionTargetSelection = targetSelection;
    insertionTargetBlock = afterRemovalContentState;
  } else {
    // the only way to insert a new seems to be by splitting an existing in to two
    insertionTargetBlock = _draftJs.Modifier.splitBlock(afterRemovalContentState, targetSelection);

    // the position to insert our blocks
    insertionTargetSelection = insertionTargetBlock.getSelectionAfter();
  }

  // TODO not sure why we need it …
  var newContentStateAfterSplit = _draftJs.Modifier.setBlockType(insertionTargetBlock, insertionTargetSelection, type);

  // creating a new ContentBlock including the entity with data
  // Entity will be created with a specific type, if defined, else will fall back to the ContentBlock type
  var entityKey = _draftJs.Entity.create(entityType || type, 'IMMUTABLE', _extends({}, data));
  var charData = _draftJs.CharacterMetadata.create({ entity: entityKey });

  var fragmentArray = [new _draftJs.ContentBlock({
    key: (0, _draftJs.genKey)(),
    type: type,
    text: text,
    characterList: (0, _immutable.List)((0, _immutable.Repeat)(charData, text.length || 1)) }),

  // new contentblock so we can continue wrting right away after inserting the block
  new _draftJs.ContentBlock({
    key: (0, _draftJs.genKey)(),
    type: 'unstyled',
    text: '',
    characterList: (0, _immutable.List)() })];

  // create fragment containing the two content blocks
  var fragment = _draftJs.BlockMapBuilder.createFromArray(fragmentArray);

  // replace the contentblock we reserved for our insert
  return _draftJs.Modifier.replaceWithFragment(newContentStateAfterSplit, insertionTargetSelection, fragment);
};

var _immutable = require('immutable');

var _draftJs = require('draft-js');