import { List } from 'immutable';
import {
  ContentBlock,
  EditorState,
  BlockMapBuilder,
  genKey as generateRandomKey,
} from 'draft-js';

const insertBlockAfterSelection = (contentState, selectionState, newBlock) => {
  const targetKey = selectionState.getStartKey();
  const array = [];
  contentState.getBlockMap().forEach((block, blockKey) => {
    array.push(block);
    if (blockKey !== targetKey) return;
    array.push(newBlock);
  });
  return contentState.merge({
    blockMap: BlockMapBuilder.createFromArray(array),
    selectionBefore: selectionState,
    selectionAfter: selectionState.merge({
      anchorKey: newBlock.getKey(),
      anchorOffset: newBlock.getLength(),
      focusKey: newBlock.getKey(),
      focusOffset: newBlock.getLength(),
      isBackward: false,
    }),
  });
};

export default function insertNewLine(editorState) {
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const newLineBlock = new ContentBlock({
    key: generateRandomKey(),
    type: 'unstyled',
    text: '',
    characterList: List(),
  });
  const withNewLine = insertBlockAfterSelection(contentState, selectionState, newLineBlock);
  const newContent = withNewLine.merge({
    selectionAfter: withNewLine.getSelectionAfter().set('hasFocus', true),
  });
  return EditorState.push(editorState, newContent, 'insert-fragment');
}
