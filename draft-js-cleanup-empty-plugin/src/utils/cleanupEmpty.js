import {
  EditorState,
  Modifier,
  SelectionState,
} from 'draft-js';

export default (editorState, blockKey, type) => {
  const content = editorState.getCurrentContent();

  // get range of the broken block
  const targetRange = new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 0,
  });

  // convert the block to a unstyled block to make text editing work
  const without = Modifier.setBlockType(
    content,
    targetRange,
    'unstyled'
  );
  const newState = EditorState.push(editorState, without, `remove-${type}`);
  return EditorState.forceSelection(newState, without.getSelectionAfter());
};
