// It is important to import the Editor which accepts plugins.
import Editor from '@draft-js-plugins/editor';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import React from 'react';

// Creates an Instance. At this step, a configuration object can be passed in
// as an argument.
const linkifyPlugin = createLinkifyPlugin();

// The Editor accepts an array of plugins. In this case, only the linkifyPlugin
// is passed in, although it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <Editor
    editorState={editorState}
    onChange={onChange}
    plugins={[linkifyPlugin]}
  />
);

export default MyEditor;
