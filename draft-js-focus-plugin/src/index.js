import { EditorState } from 'draft-js';
import setSelection from './modifiers/setSelection';
import createDecorator from './createDecorator';
import createStore from './utils/createStore';
import blockInSelection from './utils/blockInSelection';
import defaultTheme from './style.css';

const store = createStore({});

const oneAtomicBlockIsSelected = (editorState) => {
  const selection = editorState.getSelection();
  if (selection.getAnchorKey() !== selection.getFocusKey()) {
    return false;
  }
  const content = editorState.getCurrentContent();
  const block = content.getBlockForKey(selection.getAnchorKey());
  // check for atomic block and for entity
  return block.getType() === 'atomic';
};

// TODO make sure to remove the native selection of a text when the user clicks on the block
const focusPlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;
  let lastSelection;
  let lastContentState;

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    onChange: (editorState) => {
      // in case the content changed there is no need to re-render blockRendererFn
      // since if a block was added it will be rendered anyway and if it was text
      // then the change was not a pure selection change
      const contentState = editorState.getCurrentContent();
      if (!contentState.equals(lastContentState)) {
        lastContentState = contentState;
        return editorState;
      }
      lastContentState = contentState;

      const selection = editorState.getSelection();
      if (lastSelection && selection.equals(lastSelection)) {
        lastSelection = editorState.getSelection();
        return editorState;
      }

      // TODO check for if an atomic block is affected that has a focus entity
      lastSelection = editorState.getSelection();
      // By forcing the selection the editor will trigger the blockRendererFn which is
      // necessary
      return EditorState.forceSelection(editorState, editorState.getSelection());
    },
    keyBindingFn(evt, { getEditorState, setEditorState }) {
      const editorState = getEditorState();
      // TODO match by entitiy instead of block type
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

      // Don't manually overwrite in case the shift key is used to avoid breaking
      // native behaviour that works anyway.
      if (evt.shiftKey) {
        return;
      }

      // arrow left
      if (evt.keyCode === 37) {
        // Covering the case to select the before block
        const selection = editorState.getSelection();
        const selectionKey = selection.getAnchorKey();
        const beforeBlock = editorState.getCurrentContent().getBlockBefore(selectionKey);
        // only if the selection caret is a the left most position
        if (beforeBlock && selection.getAnchorOffset() === 0 && beforeBlock.getType() === 'atomic') {
          setSelection(store, getEditorState, setEditorState, 'up', evt);
        }
      }
      // arrow right
      if (evt.keyCode === 39) {
        // Covering the case to select the after block
        const selection = editorState.getSelection();
        const selectionKey = selection.getFocusKey();
        const currentBlock = editorState.getCurrentContent().getBlockForKey(selectionKey);
        const afterBlock = editorState.getCurrentContent().getBlockAfter(selectionKey);
        const notAtomicAndLastPost =
          currentBlock.getType() !== 'atomic' &&
          currentBlock.getLength() === selection.getFocusOffset();
        if (afterBlock && notAtomicAndLastPost && afterBlock.getType() === 'atomic') {
          setSelection(store, getEditorState, setEditorState, 'down', evt);
        }
      }
    },
    // Wrap all block-types in block-focus decorator
    blockRendererFn: (contentBlock, { getEditorState, setEditorState, getReadOnly }) => {
      if (contentBlock.getType() !== 'atomic') {
        return undefined;
      }

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

      // TODO is getReadOnly correct here?
      const editorState = getEditorState();
      const isFocused = !getReadOnly() && blockInSelection(editorState, contentBlock.getKey());

      return {
        props: {
          unsetFocus,
          isFocused,
          isCollapsedSelection: editorState.getSelection().isCollapsed(),
        }
      };
    },
    // Handle down/up arrow events and set activeBlock/selection if necessary
    onDownArrow: (event, { getEditorState, setEditorState }) => {
      // TODO if one block is selected and the user wants to expand the selection using the shift key

      // TODO match by entitiy instead of block type
      const editorState = getEditorState();
      if (oneAtomicBlockIsSelected(editorState)) {
        setSelection(store, getEditorState, setEditorState, 'down', event);
        return;
      }

      // Don't manually overwrite in case the shift key is used to avoid breaking
      // native behaviour that works anyway.
      if (event.shiftKey) {
        return;
      }

      // Covering the case to select the after block with arrow down
      const selectionKey = editorState.getSelection().getAnchorKey();
      const afterBlock = editorState.getCurrentContent().getBlockAfter(selectionKey);
      if (afterBlock && afterBlock.getType() === 'atomic') {
        setSelection(store, getEditorState, setEditorState, 'down', event);
      }
    },
    onUpArrow: (event, { getEditorState, setEditorState }) => {
      // TODO if one block is selected and the user wants to expand the selection using the shift key

      // TODO match by entitiy instead of block type
      const editorState = getEditorState();
      if (oneAtomicBlockIsSelected(editorState)) {
        setSelection(store, getEditorState, setEditorState, 'up', event);
      }

      // Don't manually overwrite in case the shift key is used to avoid breaking
      // native behaviour that works anyway.
      if (event.shiftKey) {
        return;
      }

      // Covering the case to select the before block with arrow up
      const selectionKey = editorState.getSelection().getAnchorKey();
      const beforeBlock = editorState.getCurrentContent().getBlockBefore(selectionKey);
      if (beforeBlock && beforeBlock.getType() === 'atomic') {
        setSelection(store, getEditorState, setEditorState, 'up', event);
      }
    },
    decorator: createDecorator({ theme }),
  };
};

export default focusPlugin;
