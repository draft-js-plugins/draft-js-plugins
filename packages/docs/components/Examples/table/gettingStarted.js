// It is important to import the Editor which accepts plugins.
import Editor from '@draft-js-plugins/editor';
import createTablePlugin from '@draft-js-plugins/table';
import React from 'react';

// Creates an Instance. At this step, a configuration object can be passed in
// as an argument.
const tablePlugin = createTablePlugin();

// The Editor accepts an array of plugins. In this case, only the tablePlugin
// is passed in, although it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <div>
    <Editor
      editorState={editorState}
      onChange={onChange}
      plugins={[tablePlugin]}
    />
  </div>
);

export default MyEditor;
