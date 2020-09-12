import React, { useRef, useState } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import editorStyles from './editorStyles.css';

const linkifyPlugin = createLinkifyPlugin({
  target: '_blank',
  component: props => (
    // eslint-disable-next-line no-alert, jsx-a11y/anchor-has-content
    <a {...props} onClick={() => alert('Clicked on Link!')} />
  ),
});

const plugins = [linkifyPlugin];

const CustomMentionEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
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

export default CustomMentionEditor;
