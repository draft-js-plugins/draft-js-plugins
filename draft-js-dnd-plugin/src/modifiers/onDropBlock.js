import addBlock from './addBlock';
import removeBlock from './removeBlock';
import { Entity } from 'draft-js';
import { DRAFTJS_BLOCK_KEY, DRAFTJS_BLOCK_TYPE } from '../constants';

export default function onDropBlock({ handleDefaultData }) {
  return function onDropBlockInner(selection, dataTransfer, isInternal, { getEditorState, setEditorState }) {
    const state = getEditorState();

    // Get data 'text' (anything else won't move the cursor) and expecting kind of data (text/key)
    const raw = dataTransfer.data.getData('text');
    const data = raw ? raw.split(':') : [];

    if (data.length !== 2) {
      return undefined;
    }

    // Existing block dropped
    if (data[0] === DRAFTJS_BLOCK_KEY) {
      const blockKey = data[1];

      // Get content, selection, block
      const block = state.getCurrentContent().getBlockForKey(blockKey);
      const editorStateAfterInsert = addBlock(state, selection, block.getType(), Entity.get(block.getEntityAt(0)).data);
      setEditorState(removeBlock(editorStateAfterInsert, blockKey));
    }

    // New block dropped
    if (data[0] === DRAFTJS_BLOCK_TYPE) {
      const blockType = data[1];

      // Get content, selection, block
      const editorStateAfterInsert = addBlock(state, selection, blockType, handleDefaultData ? handleDefaultData(blockType) : {});
      setEditorState(editorStateAfterInsert);
    }

    return true;
  };
}
