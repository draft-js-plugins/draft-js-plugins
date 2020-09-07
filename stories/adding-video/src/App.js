import React, { useRef, useState } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createVideoPlugin from 'draft-js-video-plugin';
import VideoAdd from './VideoAdd';
import editorStyles from './editorStyles.css';

const videoPlugin = createVideoPlugin();

const plugins = [videoPlugin];

const CustomVideoEditor = () => {
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
      <VideoAdd
        editorState={editorState}
        onChange={onChange}
        modifier={videoPlugin.addVideo}
      />
    </div>
  );
};

export default CustomVideoEditor;
