import refreshState from './modifiers/refreshState';
import wrapper from './components/block-state-wrapper';
import { SelectionState, EditorState } from 'draft-js';
import './style.css';

function setSelection(getEditorState, setEditorState, previousActiveBlock, mode){
  const selection = getEditorState().getSelection();
  const editorState = getEditorState();
  const activeBlock = mode === 'previous'
    ? editorState.getCurrentContent().getBlockBefore(selection.getAnchorKey())
    : editorState.getCurrentContent().getBlockAfter(selection.getAnchorKey());

  if (!activeBlock) return;
  if (previousActiveBlock && activeBlock.get('key') === previousActiveBlock.get('key')) {
    return;
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
}

const statePlugin = () => {
  let activeBlock = null;
  return {
    onMouseUp: (event, { getEditorState, setEditorState }) => {
      if (!activeBlock) return;
      setTimeout(() => {
        const editorState = getEditorState();
        const selection = editorState.getSelection();
        const actualActiveBlock = editorState.getCurrentContent().getBlockForKey(selection.getAnchorKey());
        activeBlock = actualActiveBlock;
        setEditorState(EditorState.forceSelection(editorState, selection));
      }, 1);
    }, blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => ({
      decorators: [wrapper],
      props: {
        focused: activeBlock && contentBlock.get('key') === activeBlock.get('key'),
        focus: () => {
          activeBlock = contentBlock;
          setEditorState(EditorState.forceSelection(getEditorState(), new SelectionState({
            anchorKey: activeBlock.get('key'),
            anchorOffset: activeBlock.get('length') || 0,
            focusKey: activeBlock.get('key'),
            focusOffset: activeBlock.get('length') || 0,
            isBackward: false,
          })));
        },
      },
    }), onDownArrow: (event, { getEditorState, setEditorState }) => {
      activeBlock = setSelection(getEditorState, setEditorState, activeBlock, 'next');
    }, onUpArrow: (event, { getEditorState, setEditorState }) => {
      activeBlock = setSelection(getEditorState, setEditorState, activeBlock, 'previous');
    },
  };
};

export default statePlugin;
