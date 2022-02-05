// It is important to import the Editor which accepts plugins.
import Editor from '@draft-js-plugins/editor';
import createTextAlignmentPlugin from '@draft-js-plugins/text-alignment';
import createStaticToolbarPlugin from '@draft-js-plugins/static-toolbar';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
} from '@draft-js-plugins/buttons';
import React from 'react';

const textAlignmentPlugin = createTextAlignmentPlugin();
const staticToolbarPlugin = createStaticToolbarPlugin();

const { Toolbar } = staticToolbarPlugin;
const plugins = [staticToolbarPlugin, textAlignmentPlugin];

const MyEditor = ({ editorState, onChange }) => (
  <div>
    <Editor editorState={editorState} onChange={onChange} plugins={plugins} />
    <Toolbar>
      <ItalicButton />
      <BoldButton />
      <UnderlineButton />
      <textAlignmentPlugin.TextAlignment />
    </Toolbar>
  </div>
);

export default MyEditor;
