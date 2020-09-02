import React, { useRef, useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import editorStyles from './editorStyles.css';

const linkifyPlugin = createLinkifyPlugin();
const plugins = [linkifyPlugin];

const SimpleMentionEditor = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromText('Hello there google.com')
    )
  );
  const editor = useRef();

  const onChange = value => {
    setEditorState(value);
  };

  const focus = () => {
    editor.current.focus();
  };

  return (
    <div className={editorStyles.editor} onClick={focus}>
      <Editor
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        ref={element => {
          editor.current = element;
        }}
      />
    </div>
  );
};

export default SimpleMentionEditor;
