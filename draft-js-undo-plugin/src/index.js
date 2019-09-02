import React from 'react';
import UndoButton from './UndoButton';
import RedoButton from './RedoButton';
import { defaultTheme } from './theme.js';

export default (config = {}) => {
  const undoContent = config.undoContent ? config.undoContent : '↺';
  const redoContent = config.redoContent ? config.redoContent : '↻';
  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
  };

  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  const DecoratedUndoButton = props => (
    <UndoButton {...props} theme={theme} store={store}>
      {undoContent}
    </UndoButton>
  );
  const DecoratedRedoButton = props => (
    <RedoButton {...props} theme={theme} store={store}>
      {redoContent}
    </RedoButton>
  );
  return {
    UndoButton: DecoratedUndoButton,
    RedoButton: DecoratedRedoButton,
    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
  };
};
