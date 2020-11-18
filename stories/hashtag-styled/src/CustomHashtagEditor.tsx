import React, { ReactElement, useRef, useState } from 'react';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import editorStyles from './editorStyles.css';
import hashtagStyles from './hashtagStyles.css';

const hashtagPlugin = createHashtagPlugin({ theme: hashtagStyles });
const plugins = [hashtagPlugin];
const text =
  'In this editor, we can even apply our own styles … #design #theme';

const CustomHashtagEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(
    createEditorStateWithText(text)
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

export default CustomHashtagEditor;
