import { EditorState, SelectionState } from 'draft-js';
import getSearchTextAt, { SearchTextAtResult } from './getSearchTextAt';

export default (
  editorState: EditorState,
  selection: SelectionState,
  triggers: string[]
): SearchTextAtResult => {
  const anchorKey = selection.getAnchorKey();
  const anchorOffset = selection.getAnchorOffset();
  const currentContent = editorState.getCurrentContent();
  const currentBlock = currentContent.getBlockForKey(anchorKey);
  const blockText = currentBlock.getText();
  return getSearchTextAt(blockText, anchorOffset, triggers);
};
