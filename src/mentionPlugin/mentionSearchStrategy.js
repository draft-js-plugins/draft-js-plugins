import getWordAt from './utils/getWordAt';

const mentionSearchStrategy = (contentBlock, callback, editorContext) => {
  // TODO check if the selection is faster or the regex to improve performance
  const editorState = editorContext.props.editorState;
  const selection = editorState.getSelection();
  const selectionBlockKey = selection.getAnchorKey();
  if (selection.isCollapsed() && selectionBlockKey === contentBlock.getKey()) {
    const blockText = contentBlock.getText();
    const { word, begin, end } = getWordAt(blockText, selection.getAnchorOffset());
    const mentionRegex = /\@([\w]*)/;
    const matches = word.match(mentionRegex);
    const existingEntityKey = contentBlock.getEntityAt(begin);
    if (!existingEntityKey && matches) {
      callback(begin, end);
    }
  }
};

export default mentionSearchStrategy;
