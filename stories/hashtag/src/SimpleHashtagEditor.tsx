import React, { ReactElement, useRef, useState } from 'react';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createHashtagPlugin from '@draft-js-plugins/hashtag';
import editorStyles from './editorStyles.css';

const hashtagPlugin = createHashtagPlugin();
const plugins = [hashtagPlugin];
const text = `#TIL: This editor can have all sorts of #hashtags. Pretty #cool :)
Try it yourself by starting a word with a # (hash character) …
`;

const SimpleHashtagEditor = (): ReactElement => {
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

export default SimpleHashtagEditor;
