import { Entity } from 'draft-js';

// TODO this is pretty hacky, maybe a better way?
/* eslint-disable */
function getWordAt(str, pos) {

    // Perform type conversions.
    str = String(str);
    pos = Number(pos) >>> 0;

    // Search for the word's beginning and end.
    var left = str.slice(0, pos + 1).search(/\S+$/),
        right = str.slice(pos).search(/\s/);

    // The last word in the string is a special case.
    if (right < 0) {
        return {
          word: str.slice(left),
          begin: left,
          end: str.length,
        };
    }

    // Return the word, using the located bounds to extract it from the string.
    return {
      word: str.slice(left, right + pos),
      begin: left,
      end: right + pos,
    };
}
/* eslint-enable */

const mentionSearchStrategy = editor => (contentBlock, callback) => {
  console.log(editor);
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
