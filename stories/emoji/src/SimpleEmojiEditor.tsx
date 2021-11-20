import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import React, { ReactElement, useRef, useState } from 'react';

import { EditorState } from 'draft-js';
import createEmojiPlugin from '@draft-js-plugins/emoji';
import editorStyles from './editorStyles.css';

const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin];
const text = `Cool, we can have all sorts of Emojis here. 🙌
🌿☃️🎉🙈 aaaand maybe a few more here 🐲☀️🗻 Quite fun!`;

const SimpleEmojiEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState<EditorState>(
    createEditorStateWithText(text)
  );
  const editor = useRef<Editor>();

  const onChange = (value: EditorState): void => {
    setEditorState(value);
  };

  const focus = (): void => {
    editor.current.focus();
  };

  return (
    <div>
      <div className={editorStyles.editor} onClick={focus}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={(element) => {
            editor.current = element;
          }}
        />
        <EmojiSuggestions />
      </div>
      <div className={editorStyles.options}>
        <EmojiSelect closeOnEmojiSelect />
      </div>
    </div>
  );
};

export default SimpleEmojiEditor;
