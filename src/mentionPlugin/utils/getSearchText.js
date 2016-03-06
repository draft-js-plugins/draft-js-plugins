import getWordAt from './getWordAt';

const getSearchText = (editorState, selection) => {
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(selection.getAnchorKey());
  const blockText = currentBlock.getText();
  return getWordAt(blockText, selection.getAnchorOffset());
};

export default getSearchText;
