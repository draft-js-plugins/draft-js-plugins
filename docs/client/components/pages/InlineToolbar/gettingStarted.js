// It is important to import the Editor which accepts plugins.
import Editor from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin'; // eslint-disable-line import/no-unresolved
import React from 'react';
import editorStyles from './editorStyles.css';

// Creates an Instance. At this step, a configuration object can be passed in
// as an argument.
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

// The Editor accepts an array of plugins. In this case, only the inlineToolbarPlugin
// is passed in, although it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <div className={editorStyles.editor}>
    <Editor
      editorState={editorState}
      onChange={onChange}
      plugins={[inlineToolbarPlugin]}
    />
    <InlineToolbar />
  </div>
);

export default MyEditor;
