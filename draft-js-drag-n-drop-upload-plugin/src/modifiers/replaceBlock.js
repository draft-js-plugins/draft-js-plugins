import { BlockMapBuilder, Modifier, EditorState, SelectionState } from 'draft-js';


export default function (editorState, newBlock, oldBlock) {
  const content = editorState.getCurrentContent();
  const blockKey = oldBlock.getKey();

  const targetRange = new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 1,
  });

  const contentWithReplacedBlock = Modifier.replaceWithFragment(
    content,
    targetRange,
    BlockMapBuilder.createFromArray([newBlock])
  );

  const newState = EditorState.push(
    editorState,
    contentWithReplacedBlock,
    'modify-block'
  );

  // restore selection
  return EditorState.forceSelection(newState, editorState.getSelection());
}
