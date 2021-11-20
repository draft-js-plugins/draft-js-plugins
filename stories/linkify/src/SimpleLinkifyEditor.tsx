import React, { ReactElement, useRef, useState } from 'react';
import { EditorState, ContentState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import editorStyles from './editorStyles.css';

const linkifyPlugin = createLinkifyPlugin();
const plugins = [linkifyPlugin];

const SimpleMentionEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromText('Hello there google.com')
    )
  );
  const editor = useRef<Editor>();

  const onChange = (value): void => {
    setEditorState(value);
  };

  const focus = (): void => {
    editor.current.focus();
  };

  return (
    <div className={editorStyles.editor} onClick={focus}>
      <Editor
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        ref={(element) => {
          editor.current = element;
        }}
      />
    </div>
  );
};

export default SimpleMentionEditor;
