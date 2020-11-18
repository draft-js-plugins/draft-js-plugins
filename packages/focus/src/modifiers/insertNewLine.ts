import { List } from 'immutable';
import {
  ContentBlock,
  EditorState,
  BlockMapBuilder,
  genKey as generateRandomKey,
  ContentState,
  SelectionState,
} from 'draft-js';

const insertBlockAfterSelection = (
  contentState: ContentState,
  selectionState: SelectionState,
  newBlock: ContentBlock
): ContentState => {
  const targetKey = selectionState.getStartKey();
  const array: ContentBlock[] = [];
  contentState.getBlockMap().forEach((block, blockKey) => {
    array.push(block!);
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
  }) as ContentState;
};

export default function insertNewLine(editorState: EditorState): EditorState {
  const contentState = editorState.getCurrentContent();
  const selectionState = editorState.getSelection();
  const newLineBlock = new ContentBlock({
    key: generateRandomKey(),
    type: 'unstyled',
    text: '',
    characterList: List(),
  });
  const withNewLine = insertBlockAfterSelection(
    contentState,
    selectionState,
    newLineBlock
  );
  const newContent = withNewLine.merge({
    selectionAfter: withNewLine.getSelectionAfter().set('hasFocus', true),
  }) as ContentState;
  return EditorState.push(editorState, newContent, 'insert-fragment');
}
