import { List } from 'immutable';
import {
  Modifier,
  ContentBlock,
  EditorState,
  BlockMapBuilder,
  genKey as generateRandomKey,
} from 'draft-js';

export default function insertNewLine(editorState) {
  const newEditorState = editorState;
  const contentState = newEditorState.getCurrentContent();
  const selectionState = newEditorState.getSelection();
  const currentBlock = contentState.getBlockForKey(selectionState.getFocusKey());

  const fragmentArray = [
    currentBlock,
    new ContentBlock({
      key: generateRandomKey(),
      type: 'unstyled',
      text: '',
      characterList: List(),
    }),
  ];

  const fragment = BlockMapBuilder.createFromArray(fragmentArray);

  const withUnstyledBlock = Modifier.replaceWithFragment(
    contentState,
    selectionState,
    fragment,
  );

  const newContent = withUnstyledBlock.merge({
    selectionAfter: withUnstyledBlock.getSelectionAfter().set('hasFocus', true),
  });

  return EditorState.push(newEditorState, newContent, 'insert-fragment');
}
