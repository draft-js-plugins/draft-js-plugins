import getWordAt from './getWordAt';

const mentionSearchStrategy = editor => (contentBlock, callback) => {
  const editorState = editor.state.editorState;
  const selection = editorState.getSelection();
  const selectionBlockKey = selection.getAnchorKey();
  if (selection.isCollapsed() && selectionBlockKey === contentBlock.getKey()) {
    const blockText = contentBlock.getText();
    const { word, begin, end } = getWordAt(blockText, selection.getAnchorOffset());
    const mentionRegex = /\@([\w]*)/;
    const matches = word.match(mentionRegex);
    const existingEntityKey = contentBlock.getEntityAt(begin);

    // const alreadyMention = Entity.get(existingEntityKey).getType() === 'MENTION';
    if (!existingEntityKey && matches) {
      callback(begin, end);
    }
  }
};

export default mentionSearchStrategy;
