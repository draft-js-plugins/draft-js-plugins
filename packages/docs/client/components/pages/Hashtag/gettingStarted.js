// It is important to import the Editor which accepts plugins.
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import React from 'react';

// Creates an Instance. At this step, a configuration object can be passed in
// as an argument.
const hashtagPlugin = createHashtagPlugin();

// The Editor accepts an array of plugins. In this case, only the hashtagPlugin
// is passed in, although it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <Editor
    editorState={editorState}
    onChange={onChange}
    plugins={[hashtagPlugin]}
  />
);

export default MyEditor;
