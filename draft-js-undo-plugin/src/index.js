import decorateComponentWithProps from 'decorate-component-with-props';
import createStore from './utils/createStore';
import UndoButton from './UndoButton';
import RedoButton from './RedoButton';
import styles from './styles.css';

const defaultTheme = {
  redo: styles.button,
  undo: styles.button,
};

export default (config = {}) => {
  const undoContent = config.undoContent ? config.undoContent : '↺';
  const redoContent = config.redoContent ? config.redoContent : '↻';
  const store = createStore();

  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    UndoButton: decorateComponentWithProps(UndoButton, { theme, store, children: undoContent }),
    RedoButton: decorateComponentWithProps(RedoButton, { theme, store, children: redoContent }),
    initialize: ({ getEditorState, setEditorState }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },
    onChange: (editorState) => {
      store.updateItem('selection', editorState.getSelection());
      return editorState;
    },
  };
};
