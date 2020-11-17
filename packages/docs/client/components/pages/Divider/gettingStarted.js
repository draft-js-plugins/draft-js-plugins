// It is important to import the Editor which accepts plugins.

import Editor from '@draft-js-plugins/editor';

import createDividerPlugin from '@draft-js-plugins/divider';
import React from 'react';

const dividerPlugin = createDividerPlugin();

// The Editor accepts an array of plugins. In this case, only the dividerPlugin
// is passed in, although it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <Editor
    editorState={editorState}
    onChange={onChange}
    plugins={[dividerPlugin]}
  />
);

export default MyEditor;
