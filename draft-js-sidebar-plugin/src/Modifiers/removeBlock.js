import { SelectionState, Modifier, EditorState } from 'draft-js';


// https://github.com/facebook/draft-js/blob/master/examples%2Ftex%2Fjs%2Fmodifiers%2FremoveTeXBlock.js#L19

const removeBlock = (editorState, blockKey) => {

  const contentState = editorState.getCurrentContent();
  const block = contentState.getBlockForKey(blockKey);

  const selection = new SelectionState({
    anchorKey: blockKey,
    anchorOffset: 0,
    focusKey: blockKey,
    focusOffset: block.getLength(),
  })
  const withoutText = Modifier.removeRange(
    contentState,
    selection,
    'backward'
  );
  const resetBlock =  Modifier.setBlockType(
    withoutText,
    withoutText.getSelectionAfter(),
    'unstyled'
  );
  return EditorState.push(editorState, resetBlock, 'remove-range');

}

export default removeBlock;