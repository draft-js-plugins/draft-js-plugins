/**
 * Removes a sticker from the editor state
 */

import {
  EditorState,
  Modifier,
  SelectionState
} from 'draft-js';

export default (editorState: Object, blockKey: String) => {
  const content = editorState.getCurrentContent();
  const afterKey = content.getKeyAfter(blockKey);

  let withoutSticker;
  if (afterKey !== undefined) {
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
