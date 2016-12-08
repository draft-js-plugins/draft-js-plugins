export default (editorState) => {
  const selectionState = editorState.getSelection();
  const contentState = editorState.getCurrentContent();
  const startKey = selectionState.getStartKey();
  const endKey = selectionState.getEndKey();
  const blockMapKeys = contentState.getBlockMap().keySeq();
  return blockMapKeys
    .skipUntil((key) => key === startKey)
    .takeUntil((key) => key === endKey)
    .concat([endKey]);
};
