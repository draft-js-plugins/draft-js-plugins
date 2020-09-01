import React from 'react';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import Separator from './components/Separator';
import { defaultTheme } from './theme.js';

export default (config = {}) => {
  const store = createStore({
    isVisible: false,
  });

  const { theme = defaultTheme } = config;

  const InlineToolbar = props => (
    <Toolbar {...props} store={store} theme={theme} />
  );

  return {
    initialize: ({ getEditorState, setEditorState, getEditorRef }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
      store.updateItem('getEditorRef', getEditorRef);
    },
    // Re-Render the text-toolbar on selection change
    onChange: editorState => {
      store.updateItem('selection', editorState.getSelection());
      return editorState;
    },
    InlineToolbar,
  };
};

export { Separator };
