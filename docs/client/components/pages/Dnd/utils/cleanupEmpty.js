import {
  EditorState,
  Modifier,
  SelectionState,
} from 'draft-js';

const cleanup = (editorState, blockKey, type) => {
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
  const newState = EditorState.push(editorState, without, 'remove-'+type);
  return EditorState.forceSelection(newState, without.getSelectionAfter());
};

export default (editorState, types) => {
  let newEditorState = editorState;

  // If there is an empty block we remove it.
  // This can happen if a user hits the backspace button and removes the block.
  // In this case the block will still be of type block.
  editorState.getCurrentContent().get('blockMap').forEach((block) => {
    if (types.indexOf(block.get('type')) !== -1 && block.getEntityAt(0) === null) {
      newEditorState = cleanup(editorState, block.get('key'), block.get('type'));
    }
  });
  return newEditorState;
};
