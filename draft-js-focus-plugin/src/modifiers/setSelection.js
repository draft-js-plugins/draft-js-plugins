import { SelectionState, EditorState } from 'draft-js';

// Set selection of editor to next/previous block
export default (getEditorState, setEditorState, previousActiveBlock, mode) => {
  const selection = getEditorState().getSelection();
  const editorState = getEditorState();
  const activeBlock = mode === 'previous'
    ? editorState.getCurrentContent().getBlockBefore(selection.getAnchorKey())
    : editorState.getCurrentContent().getBlockAfter(selection.getAnchorKey());

  setTimeout(() => {
    const newEditorState = getEditorState();
    const newSelection = newEditorState.getSelection();
    const selectedBlock = newEditorState.getCurrentContent().getBlockForKey(newSelection.getAnchorKey());
    const actualActiveBlock = newEditorState.getCurrentContent().getBlockForKey(newSelection.getAnchorKey());

    if (!activeBlock) {
      return selectedBlock;
    } else if (previousActiveBlock && selectedBlock.get('key') === previousActiveBlock.get('key')) {
      return selectedBlock;
    } else if (previousActiveBlock && activeBlock.get('key') === previousActiveBlock.get('key')) {
      return activeBlock;
    }

    if (activeBlock.get('key') !== actualActiveBlock.get('key')) {
      // Hack
      setEditorState(EditorState.forceSelection(newEditorState, selection));
      setEditorState(EditorState.forceSelection(newEditorState, new SelectionState({
        anchorKey: activeBlock.get('key'),
        anchorOffset: activeBlock.get('length') || 0,
        focusKey: activeBlock.get('key'),
        focusOffset: activeBlock.get('length') || 0,
        isBackward: false,
      })));
    } return undefined;
  });
};
