// It is important to import the Editor which accepts plugins.
import Editor from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import React from 'react';

// Creates an Instance. At this step the configuration can be passed as argument.
const emojiPlugin = createEmojiPlugin();

// The Editor accept a list of plugins. In this case only the emojiPlugin is
// passed, while it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <Editor
    editorState={ editorState }
    onChange={ onChange }
    plugins={ [emojiPlugin] }
  />
);

export default MyEditor;
