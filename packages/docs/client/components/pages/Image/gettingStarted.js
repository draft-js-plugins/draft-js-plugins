// It is important to import the Editor which accepts plugins.

import Editor from '@draft-js-plugins/editor';

import createImagePlugin from '@draft-js-plugins/image';
import React from 'react';

const imagePlugin = createImagePlugin();

// The Editor accepts an array of plugins. In this case, only the imagePlugin
// is passed in, although it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <Editor
    editorState={editorState}
    onChange={onChange}
    plugins={[imagePlugin]}
  />
);

export default MyEditor;
