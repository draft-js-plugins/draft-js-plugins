import refreshState from './modifiers/refreshState';
import Wrapper from './components/block-focus-wrapper';
import { SelectionState, EditorState } from 'draft-js';
import styles from './style.css';

const defaultTheme = { ...styles };

function setSelection(getEditorState, setEditorState, previousActiveBlock, mode){
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
}

const focusPlugin = config => {
  const theme = config.theme ? config.theme : defaultTheme;
  let activeBlock = null;
  return {
    onChange: (editorState) => {
      const selection = editorState.getSelection();
      const actualActiveBlock = editorState.getCurrentContent().getBlockForKey(selection.getAnchorKey());
      if (!activeBlock || !actualActiveBlock || activeBlock.get('key') !== actualActiveBlock.get('key')) {
        activeBlock = actualActiveBlock;
        return EditorState.forceSelection(editorState, selection);
      } return editorState;
    }, blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => ({
      decorators: [Wrapper(theme)],
      props: {
        focused: activeBlock && contentBlock.get('key') === activeBlock.get('key'),
        focus: () => {
          activeBlock = contentBlock;
          setEditorState(
            EditorState.forceSelection(getEditorState(), new SelectionState({
              anchorKey: activeBlock.get('key'),
              anchorOffset: activeBlock.get('length') || 0,
              focusKey: activeBlock.get('key'),
              focusOffset: activeBlock.get('length') || 0,
              isBackward: false,
            }))
          );
        },
      },
    }), onDownArrow: (event, { getEditorState, setEditorState }) => {
      activeBlock = setSelection(getEditorState, setEditorState, activeBlock, 'next');
    }, onUpArrow: (event, { getEditorState, setEditorState }) => {
      activeBlock = setSelection(getEditorState, setEditorState, activeBlock, 'previous');
    },
  };
};

export default focusPlugin;
