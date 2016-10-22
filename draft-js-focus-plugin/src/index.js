import { EditorState } from 'draft-js';
import setSelection from './modifiers/setSelection';
import setFocusToBlock from './modifiers/setFocusToBlock';
import createDecorator from './createDecorator';
import styles from './style.css';

const defaultTheme = { ...styles };
const store = {
  types: {},
  addType: (type) => {
    store.types[type] = true;
  }
};

// TODO make sure to remove the native selection of a text when the user clicks on the block
const focusPlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;
  let activeBlock = null;
  return {
    theme,
    // Wrap all block-types in block-focus decorator
    blockRendererFn: (contentBlock, { getEditorState, setEditorState, setReadOnly, getReadOnly }) => {
      const readOnly = getReadOnly();
      const setFocus = () => {
        if (readOnly) return;
        if (!activeBlock || activeBlock.get('key') !== contentBlock.get('key')) {
          // Set active block to current block
          activeBlock = contentBlock;
          // Force selection to move to current block
          setFocusToBlock(getEditorState, setEditorState, activeBlock);
          setReadOnly(true);
        }
      };
      const unsetFocus = (direction, event) => {
        if (readOnly) return;

        setReadOnly(false);
        if (direction) {
          activeBlock = setSelection(store, getEditorState, setEditorState, contentBlock, direction, event);
          setEditorState(EditorState.forceSelection(getEditorState(), getEditorState().getSelection()));
          if (activeBlock) {
            setTimeout(() => {
              setReadOnly(true);
            }, 1);
          }
        } else {
          activeBlock = undefined;
          setEditorState(EditorState.forceSelection(getEditorState(), getEditorState().getSelection()));
        }
      };
      const isFocused = !readOnly && activeBlock && contentBlock.get('key') === activeBlock.get('key');

      // Return the decorator and feed it theme and above properties
      return {
        props: {
          unsetFocus, isFocused, setFocus
        }
      };
    },
    // Handle down/up arrow events and set activeBlock/selection if necessary
    onDownArrow: (event, { getEditorState, setEditorState, setReadOnly }) => {
      activeBlock = setSelection(store, getEditorState, setEditorState, activeBlock, 'down', event);
      // TODO match by entitiy instead of block type
      setReadOnly(activeBlock && store.types[activeBlock.get('type')]);
    },
    onUpArrow: (event, { getEditorState, setEditorState, setReadOnly }) => {
      activeBlock = setSelection(store, getEditorState, setEditorState, activeBlock, 'up', event);
      // TODO match by entitiy instead of block type
      setReadOnly(activeBlock && store.types[activeBlock.get('type')]);
    },
    decorator: createDecorator({ theme: styles, store }),
  };
};

export default focusPlugin;
