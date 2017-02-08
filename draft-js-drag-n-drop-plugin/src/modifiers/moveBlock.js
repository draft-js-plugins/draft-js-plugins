import { EditorState, Entity, SelectionState } from 'draft-js';
import addBlock from './addBlock';
import removeBlock from './removeBlock';


export default function moveBlock(editorState, selection, blockKey) {
  const currentContent = editorState.getCurrentContent();
  const block = currentContent.getBlockForKey(blockKey);
  const entity = Entity.get(block.getEntityAt(0));
  const contentWithNewBlock = addBlock(
    editorState,
    selection,
    block.getType(),
    entity.data,
    entity.type
  );
  const contentWithoutOldBlock = removeBlock(
    contentWithNewBlock,
    blockKey
  );
  // force to new selection
  const newSelection = new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: 0,
  });
  return EditorState.forceSelection(
    EditorState.push(editorState, contentWithoutOldBlock, 'insert-fragment'),
    newSelection
  );
}
