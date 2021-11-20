import { EditorState, SelectionState } from 'draft-js';
import getWordAt, { WordAtResult } from './getWordAt';

export default function getSearchText(
  editorState: EditorState,
  selection: SelectionState
): WordAtResult {
  const anchorKey = selection.getAnchorKey();
  const anchorOffset = selection.getAnchorOffset() - 1;
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(anchorKey);
  const blockText = currentBlock.getText();

  return getWordAt(blockText, anchorOffset);
}
