import { List } from 'immutable';
import {
  Modifier,
  ContentBlock,
  EditorState,
  BlockMapBuilder,
  genKey as generateRandomKey,
} from 'draft-js';

export default function insertNewLine(editorState) {
  const newEditorState = EditorState.forceSelection(
    editorState,
    editorState.getCurrentContent().getSelectionAfter(),
  );
  const contentState = newEditorState.getCurrentContent();
  const selectionState = newEditorState.getSelection();
  const insertionTarget = contentState.getSelectionAfter();

  const fragmentArray = [
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
    insertionTarget,
    fragment,
  );

  const newContent = withUnstyledBlock.merge({
    selectionBefore: selectionState,
    selectionAfter: withUnstyledBlock.getSelectionAfter().set('hasFocus', true),
  });

  return EditorState.push(newEditorState, newContent, 'insert-fragment');
}
