// It is important to import the Editor which accepts plugins.
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import React from 'react';

// Creates an Instance. At this step the configuration can be passed as argument.
const linkifyPlugin = createLinkifyPlugin();

// The Editor accept a list of plugins. In this case only the linkifyPlugin is
// passed, while it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <Editor
    editorState={ editorState }
    onChange={ onChange }
    plugins={ [linkifyPlugin] }
  />
);

export default MyEditor;
