import React, { useState, useRef } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import editorStyles from './editorStyles.css';

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true,
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin];
const text = `Cool, we can have all sorts of Emojis here. 🙌
🌿☃️🎉🙈 aaaand maybe a few more here 🐲☀️🗻 Quite fun!`;

const CustomEmojiEditor = () => {
  const [editorState, setEditorState] = useState(
    createEditorStateWithText(text)
  );
  const editor = useRef();

  const onChange = value => {
    setEditorState(value);
  };

  const focus = () => {
    editor.current.focus();
  };

  return (
    <div>
      <div className={editorStyles.editor} onClick={focus}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={element => {
            editor.current = element;
          }}
        />
        <EmojiSuggestions />
      </div>
      <div className={editorStyles.options}>
        <EmojiSelect />
      </div>
    </div>
  );
};

export default CustomEmojiEditor;
