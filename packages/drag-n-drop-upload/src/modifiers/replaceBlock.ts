import {
  Modifier,
  EditorState,
  SelectionState,
  DraftBlockType,
} from 'draft-js';

export default function replaceBlock(
  editorState: EditorState,
  blockKey: string,
  newType: DraftBlockType
): EditorState {
  let content = editorState.getCurrentContent();

  const targetRange = new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 1,
  });

  // change the blocktype and remove the characterList entry with the block
  content = Modifier.setBlockType(content, targetRange, newType);

  // force to new selection
  const newState = EditorState.push(editorState, content, 'change-block-type');
  return EditorState.forceSelection(newState, editorState.getSelection());
}
