import React, { ReactElement, useRef, useState } from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createLinkifyPlugin from '@draft-js-plugins/linkify';
import editorStyles from './editorStyles.css';

const linkifyPlugin = createLinkifyPlugin({
  target: '_blank',
  component(props) {
    // eslint-disable-next-line no-alert, jsx-a11y/anchor-has-content
    return <a {...props} onClick={() => alert('Clicked on Link!')} />;
  },
});

const plugins = [linkifyPlugin];

const CustomMentionEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef<Editor>();

  const onChange = (value: EditorState): void => {
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
        ref={element => {
          editor.current = element;
        }}
      />
    </div>
  );
};

export default CustomMentionEditor;
