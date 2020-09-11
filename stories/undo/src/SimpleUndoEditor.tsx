import React, { useRef, useState } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createUndoPlugin from 'draft-js-undo-plugin';
import editorStyles from './editorStyles.css';

const undoPlugin = createUndoPlugin();
const { UndoButton, RedoButton } = undoPlugin;
const plugins = [undoPlugin];

const SimpleUndoEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
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
      </div>
      <div className={editorStyles.options}>
        <UndoButton />
        <RedoButton />
      </div>
    </div>
  );
};

export default SimpleUndoEditor;
