/**
 * Create an editor state with some text in it already
 */

import {
  EditorState,
  SelectionState,
} from 'draft-js-cutting-edge';

const forceSelectionToLastCharacter = (editorState) => {
  const content = editorState.getCurrentContent();
  const blockMap = content.getBlockMap();

  const key = blockMap.last().getKey();
  const length = blockMap.last().getLength();

  // TODO Suggest helper functions to issac which set the selection to achieve
  // the good UX for a textarea. by clicking inside at the bottom right the cursor
  // should be placed at the end of the content.
  const selection = new SelectionState({
    anchorKey: key,
    anchorOffset: length,
    focusKey: key,
    focusOffset: length,
  });

  // Note: content.getSelectionAfter() is still a position 0 and not after the content
  return EditorState.forceSelection(editorState, selection);
};

export default forceSelectionToLastCharacter;
