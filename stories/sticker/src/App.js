import React, { useRef, useState } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createStickerPlugin from 'draft-js-sticker-plugin';
import editorStyles from './editorStyles.css';
import stickers from './stickers';

const stickerPlugin = createStickerPlugin({ stickers });
const plugins = [stickerPlugin];
const StickerSelect = stickerPlugin.StickerSelect;

const SimpleMentionEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const editor = useRef();

  const onChange = value => {
    setEditorState(value);
  };

  const focus = () => {
    editor.current.focus();
  };

  // simulate `this`
  const self = {
    onChange,
    state: {
      editorState,
    },
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
      </div>
      <div className={editorStyles.options}>
        <StickerSelect editor={self} />
      </div>
    </div>
  );
};

export default SimpleMentionEditor;
