// It is important to import the Editor which accepts plugins.
import Editor from 'draft-js-plugins-editor';
import createLinkPlugin from 'draft-js-anchor-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import { ItalicButton, BoldButton, UnderlineButton } from 'draft-js-buttons';
import React from 'react';

// Here's your chance to pass in a configuration object (see below).
const linkPlugin = createLinkPlugin();

// Pass the `linkPlugin.LinkButton` into the structure of the inline toolbar.
const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    linkPlugin.LinkButton
  ]
});

const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin, linkPlugin];

const MyEditor = ({ editorState, onChange }) => (
  <div>
    <Editor
      editorState={editorState}
      onChange={onChange}
      plugins={plugins}
    />
    <InlineToolbar />
  </div>
);

export default MyEditor;
