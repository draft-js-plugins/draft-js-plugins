import { SelectionState, EditorState } from 'draft-js';
import refreshState from './refreshState';

// Set selection of editor to next/previous block
export default (getEditorState, setEditorState, previousActiveBlock, mode) => {
  const selection = getEditorState().getSelection();
  const editorState = getEditorState();
  const activeBlock = mode === 'previous'
    ? editorState.getCurrentContent().getBlockBefore(selection.getAnchorKey())
    : editorState.getCurrentContent().getBlockAfter(selection.getAnchorKey());

  if (!activeBlock) return undefined;
  if (previousActiveBlock && activeBlock.get('key') === previousActiveBlock.get('key')) {
    return undefined;
  }

  setTimeout(() => {
    const actualActiveBlock = editorState.getCurrentContent().getBlockForKey(selection.getAnchorKey());
    if (activeBlock.get('key') !== actualActiveBlock.get('key')) {
      setEditorState(EditorState.forceSelection(editorState, new SelectionState({
        anchorKey: activeBlock.get('key'),
        anchorOffset: activeBlock.get('length') || 0,
        focusKey: activeBlock.get('key'),
        focusOffset: activeBlock.get('length') || 0,
        isBackward: false,
      })));
    } else {
      refreshState(setEditorState, editorState);
    }
  });
  return activeBlock;
};
