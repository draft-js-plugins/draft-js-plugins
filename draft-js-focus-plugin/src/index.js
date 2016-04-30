import setSelection from './modifiers/setSelection';
import decorator from './decorators/block-focus';
import { SelectionState, EditorState } from 'draft-js';
import styles from './style.css';

const defaultTheme = { ...styles };

const focusPlugin = config => {
  const theme = config.theme ? config.theme : defaultTheme;
  let activeBlock = null;
  return {
    // Handle onChange to check if a block is selected/focused
    onChange: (editorState) => {
      const selection = editorState.getSelection();
      const actualActiveBlock = editorState.getCurrentContent().getBlockForKey(selection.getAnchorKey());
      if (!activeBlock || !actualActiveBlock || activeBlock.get('key') !== actualActiveBlock.get('key')) {
        activeBlock = actualActiveBlock;
        return EditorState.forceSelection(editorState, selection);
      } return editorState;
    },
    // Wrap all block-types in block-focus decorator
    blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => {
      const isFocused = activeBlock && contentBlock.get('key') === activeBlock.get('key');
      const setFocus = () => {
        // Set active block to current block
        activeBlock = contentBlock;
        // Force selection to move to current block
        setEditorState(
          EditorState.forceSelection(getEditorState(), new SelectionState({
            anchorKey: activeBlock.get('key'),
            anchorOffset: activeBlock.get('length') || 0,
            focusKey: activeBlock.get('key'),
            focusOffset: activeBlock.get('length') || 0,
            isBackward: false,
          }))
        );
      };
      // Return the decorator and feed it theme and above properties
      return {
        decorators: [decorator(theme, isFocused, setFocus)],
      };
    },
    // Handle down/up arrow events and set activeBlock/selection if necessary
    onDownArrow: (event, { getEditorState, setEditorState }) => {
      activeBlock = setSelection(getEditorState, setEditorState, activeBlock, 'next');
    }, onUpArrow: (event, { getEditorState, setEditorState }) => {
      activeBlock = setSelection(getEditorState, setEditorState, activeBlock, 'previous');
    },
  };
};

export default focusPlugin;
