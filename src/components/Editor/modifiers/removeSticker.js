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
  const targetRange = new SelectionState({
    anchorKey: beforeKey,
    anchorOffset: beforeBlock.getLength(),
    focusKey: blockKey,
    focusOffset: 0,
  });

  const withoutSticker = Modifier.removeRange(content, targetRange, 'backward');

  // const resetBlock = Modifier.setBlockType(
  //   withoutSticker,
  //   withoutSticker.getSelectionAfter(),
  //   'unstyled'
  // );

  const newState = EditorState.push(editorState, withoutSticker, 'remove-sticker');
  return EditorState.forceSelection(newState, withoutSticker.getSelectionAfter());
};
