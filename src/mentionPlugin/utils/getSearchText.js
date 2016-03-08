import getWordAt from './getWordAt';

const getSearchText = (editorState, anchorKey, anchorOffset) => {
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(anchorKey);
  const blockText = currentBlock.getText();
  return getWordAt(blockText, anchorOffset);
};

export default getSearchText;
