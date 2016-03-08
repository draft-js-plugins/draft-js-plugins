import {
  EditorState,
  SelectionState,
} from 'draft-js-cutting-edge';

/**
 * Returns a new EditorState where the Selection is forced to be at the end.
 *
 * This ensures to mimic the textarea behaviour where the Selection is placed at
 * the end in case you click somewhere further down the the last text. It still
 * works to place the Selection at a specific location by clicking on the text.
 */
const forceSelectionToLastCharacter = (editorState) => {
  const content = editorState.getCurrentContent();
  const blockMap = content.getBlockMap();

  const key = blockMap.last().getKey();
  const length = blockMap.last().getLength();

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
