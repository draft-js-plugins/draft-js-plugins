import React from 'react';
import createStore from './utils/createStore';
import Toolbar from './components/Toolbar';
import { defaultTheme } from './theme.js';

export default (config = {}) => {
  const defaultPostion = 'left';

  const store = createStore({
    isVisible: false,
  });

  const { position = defaultPostion, theme = defaultTheme } = config;

  const SideToolbar = props => (
    <Toolbar {...props} store={store} theme={theme} position={position} />
  );

  return {
    initialize: ({ setEditorState, getEditorState, getEditorRef }) => {
      store.updateItem('getEditorState', getEditorState);
      store.updateItem('setEditorState', setEditorState);
      store.updateItem('getEditorRef', getEditorRef);
    },
    // Re-Render the toolbar on every change
    onChange: editorState => {
      store.updateItem('editorState', editorState);
      return editorState;
    },
    SideToolbar,
  };
};
