import AddBlock from './addBlock';
import RemoveBlock from './removeBlock';
import { Entity } from 'draft-js';

export default function onDropBlock() {
  return function onDropBlockInner(e) {
    const { selection, dataTransfer, editorState, onChange } = e;

    const state = editorState();
        // Get data 'text' (anything else won't move the cursor) and expecting kind of data (text/key)
    const raw = dataTransfer.data.getData('text');
    const data = raw ? raw.split(':') : [];

    if (data.length !== 2) {
      return undefined;
    }
        // Existing block dropped
    if (data[0] === 'key') {
      const blockKey = data[1];
            // Get content, selection, block
      const block = state.getCurrentContent().getBlockForKey(blockKey);
      const editorStateAfterInsert = AddBlock(state, selection, block.getType(), Entity.get(block.getEntityAt(0)).data);
      onChange(RemoveBlock(editorStateAfterInsert, blockKey));
    }
        // New block dropped
    if (data[0] === 'type') {
      const blockType = data[1];
            // Get content, selection, block
      const editorStateAfterInsert = AddBlock(state, selection, blockType, {});
      onChange(editorStateAfterInsert);
    }
    return true;
  };
}
