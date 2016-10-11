import { AtomicBlockUtils, EditorState } from 'draft-js';


// https://github.com/facebook/draft-js/blob/master/examples%2Ftex%2Fjs%2Fmodifiers%2FremoveTeXBlock.js#L19

const insertBlock = (editorState, entityKey) => {
  const newState = AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
  const selection = newState.getCurrentContent().getSelectionBefore();

  return EditorState.forceSelection(newState, selection);
}

export default insertBlock;

