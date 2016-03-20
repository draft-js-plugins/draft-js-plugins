// It is important to import the Editor which accepts plugins.
import Editor from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import React from 'react';

// Creates an Instance of the hashtagPlugin.
// At this step a configuration can be passed in as well.
const hashtagPluginInstance = hashtagPlugin();

// The Editor accept a list of plugins. In this case
// only the hashtagPluginInstance is passed, but in general
// it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <Editor
    editorState={ editorState }
    onChange={ onChange }
    plugins={ [hashtagPluginInstance] }
  />
);

export default MyEditor;
