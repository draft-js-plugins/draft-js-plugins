import getSearchTextAt from './getSearchTextAt';

export default (editorState, selection, mentionTrigger) => {
  const anchorKey = selection.getAnchorKey();
  const anchorOffset = selection.getAnchorOffset();
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(anchorKey);
  const blockText = currentBlock.getText();
  const searchText = getSearchTextAt(blockText, anchorOffset, mentionTrigger);
  return searchText;
};
