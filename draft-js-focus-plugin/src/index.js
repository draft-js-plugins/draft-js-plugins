import setSelection from './modifiers/setSelection';
import Decorator from './decorators/block-focus';
import { SelectionState, EditorState } from 'draft-js';
import styles from './style.css';

const defaultTheme = { ...styles };
const store = {
  types: {},
  addType: type => {
    store.types[type] = true;
  }
};

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
          setEditorState(
            EditorState.forceSelection(getEditorState(), new SelectionState({
              anchorKey: activeBlock.get('key'),
              anchorOffset: activeBlock.get('length') || 0,
              focusKey: activeBlock.get('key'),
              focusOffset: activeBlock.get('length') || 0,
              hasFocus: true,
              isBackward: false,
            }))
          );
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
      setReadOnly(activeBlock && store.types[activeBlock.get('type')]);
    }, onUpArrow: (event, { getEditorState, setEditorState, setReadOnly }) => {
      activeBlock = setSelection(store, getEditorState, setEditorState, activeBlock, 'up', event);
      setReadOnly(activeBlock && store.types[activeBlock.get('type')]);
    },
  };
};

export default focusPlugin;
export const FocusDecorator = Decorator({ theme: styles, store });
export const FocusDecoratorStyles = styles;
