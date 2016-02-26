/* @flow */

import {
  EditorState,
  Modifier,
  SelectionState
} from 'draft-js';

export default (editorState: Object, blockKey: String): Object => {
  const content = editorState.getCurrentContent();
  const beforeKey = content.getKeyBefore(blockKey);
  const beforeBlock = content.getBlockBefore(blockKey);
  const afterKey = content.getKeyAfter(blockKey);

  let withoutSticker;
  if (typeof beforeKey === 'undefined' && typeof afterKey !== 'undefined') {
    const targetRange = new SelectionState({
      anchorKey: blockKey,
      anchorOffset: 0,
      focusKey: afterKey,
      focusOffset: 0,
    });
    withoutSticker = Modifier.removeRange(content, targetRange, 'backward');
    withoutSticker = Modifier.setBlockType(
      withoutSticker,
      withoutSticker.getSelectionAfter(),
      'unstyled'
    );
  } else if (typeof beforeKey !== 'undefined') {
    const targetRange = new SelectionState({
      anchorKey: beforeKey,
      anchorOffset: beforeBlock.getLength(),
      focusKey: blockKey,
      focusOffset: 0,
    });
    withoutSticker = Modifier.removeRange(content, targetRange, 'backward');
  } else {
    withoutSticker = Modifier.setBlockType(
      content,
      content.getSelectionAfter(),
      'unstyled'
    );
  }

  const newState = EditorState.push(editorState, withoutSticker, 'remove-sticker');
  return EditorState.forceSelection(newState, withoutSticker.getSelectionAfter());
};
