import { EditorState } from 'draft-js';
import getBlockMapKeys from './getBlockMapKeys';

export default (
  editorState: EditorState
): Immutable.Iterable<number, string> => {
  const selectionState = editorState.getSelection();
  const contentState = editorState.getCurrentContent();
  return getBlockMapKeys(
    contentState,
    selectionState.getStartKey(),
    selectionState.getEndKey()
  );
};
