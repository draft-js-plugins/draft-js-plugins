import React from 'react';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import Separator from './components/Separator';
import { defaultTheme } from './theme.js';

export default (config = {}) => {
  const store = createStore({});

  const { theme = defaultTheme } = config;

  const StaticToolbar = props => (
    <Toolbar {...props} store={store} theme={theme} />
  );

  return {
    initialize: ({ getEditorState, setEditorState }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
    },

    // Re-Render the text-toolbar on selection change
    onChange: editorState => {
      store.updateItem('selection', editorState.getSelection());
      return editorState;
    },
    Toolbar: StaticToolbar,
  };
};

export { Separator };
