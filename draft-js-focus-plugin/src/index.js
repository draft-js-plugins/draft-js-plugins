import { EditorState } from 'draft-js';
import setSelection from './modifiers/setSelection';
import createDecorator from './createDecorator';
import createStore from './utils/createStore';
import defaultTheme from './style.css';

const store = createStore({});

const oneAtomicBlockIsSelected = (editorState) => {
  const selection = editorState.getSelection();
  if (selection.getAnchorKey() !== selection.getFocusKey()) {
    return false;
  }
  const content = editorState.getCurrentContent();
  const block = content.getBlockForKey(selection.getAnchorKey());
  return block.getType() === 'atomic';
};

// TODO make sure to remove the native selection of a text when the user clicks on the block
const focusPlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    onChange: (editorState) => {
      // TODO check if selection changed
      store.updateItem('selection', editorState.getSelection());
      return editorState;
    },
    keyBindingFn(evt, { getEditorState, setEditorState }) {
      const editorState = getEditorState();
      if (oneAtomicBlockIsSelected(editorState)) {
        // arrow left
        if (evt.keyCode === 37) {
          setSelection(store, getEditorState, setEditorState, 'up', evt);
        }
        // arrow right
        if (evt.keyCode === 39) {
          setSelection(store, getEditorState, setEditorState, 'down', evt);
        }
      }
    },
    // Wrap all block-types in block-focus decorator
    blockRendererFn: (contentBlock, { getEditorState, setEditorState, getReadOnly }) => {
      if (contentBlock.getType() !== 'atomic') {
        return undefined;
      }
      // const isFocused = !getReadOnly() && contentBlock.getKey() === getEditorState().getSelection().getAnchorKey();
      const isFocused = () => (
        contentBlock.getKey() === getEditorState().getSelection().getAnchorKey()
      );

      const unsetFocus = (direction, event) => {
        if (getReadOnly()) return;

        if (direction) {
          setSelection(store, getEditorState, setEditorState, contentBlock, direction, event);
          // TODO why has the editorstate be set again?
          const editorState = getEditorState();
          setEditorState(EditorState.forceSelection(editorState, editorState.getSelection()));
        } else {
          const editorState = getEditorState();
          setEditorState(EditorState.forceSelection(editorState, editorState.getSelection()));
        }
      };

      return {
        props: {
          unsetFocus,
          isFocused,
        }
      };
    },
    // Handle down/up arrow events and set activeBlock/selection if necessary
    onDownArrow: (event, { getEditorState, setEditorState }) => {
      // TODO match by entitiy instead of block type
      const editorState = getEditorState();
      if (oneAtomicBlockIsSelected(editorState)) {
        setSelection(store, getEditorState, setEditorState, 'down', event);
      }
    },
    onUpArrow: (event, { getEditorState, setEditorState }) => {
      // TODO match by entitiy instead of block type
      const editorState = getEditorState();
      if (oneAtomicBlockIsSelected(editorState)) {
        setSelection(store, getEditorState, setEditorState, 'up', event);
      }
    },
    decorator: createDecorator({ theme, store }),
  };
};

export default focusPlugin;
