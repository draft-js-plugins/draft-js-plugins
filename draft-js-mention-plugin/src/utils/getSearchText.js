import getSearchTextAt from './getSearchTextAt';

export default (editorState, selection, triggers) => {
  const anchorKey = selection.getAnchorKey();
  const anchorOffset = selection.getAnchorOffset();
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(anchorKey);
  const blockText = currentBlock.getText();
  return getSearchTextAt(blockText, anchorOffset, triggers);
};
