/**
 * Adds backspace support to stickers
 */

import { ContentBlock, EditorState, Modifier, SelectionState } from 'draft-js';

const cleanupSticker = (
  editorState: EditorState,
  blockKey: string
): EditorState => {
  const content = editorState.getCurrentContent();

  // get range of the broken sticker block
  const targetRange = new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 0,
  });

  // convert the sticker block to a unstyled block to make text editing work
  const withoutSticker = Modifier.setBlockType(
    content,
    targetRange,
    'unstyled'
  );
  const newState = EditorState.push(
    editorState,
    withoutSticker,
    'remove-range'
  );
  return EditorState.forceSelection(
    newState,
    withoutSticker.getSelectionAfter()
  );
};

export default (editorState: EditorState): EditorState => {
  let newEditorState = editorState;

  // If there is an empty sticker block we remove it.
  // This can happen if a user hits the backspace button and removes the sticker.
  // In this case the block will still be of type sticker.
  editorState
    .getCurrentContent()
    .get('blockMap')
    .forEach((block: ContentBlock) => {
      if (block.get('type') === 'sticker' && block.getEntityAt(0) === null) {
        newEditorState = cleanupSticker(editorState, block.get('key'));
      }
    });
  return newEditorState;
};
