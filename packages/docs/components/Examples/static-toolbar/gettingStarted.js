// It is important to import the Editor which accepts plugins.
import Editor from '@draft-js-plugins/editor';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import React from 'react';

// Creates an Instance. At this step, a configuration object can be passed in
// as an argument.
const toolbarPlugin = createToolbarPlugin();

// The Editor accepts an array of plugins. In this case, only the toolbarPlugin
// is passed in, although it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <Editor
    editorState={editorState}
    onChange={onChange}
    plugins={[toolbarPlugin]}
  />
);

export default MyEditor;
