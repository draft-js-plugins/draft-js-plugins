import React, { useRef, useState } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import editorStyles from './editorStyles.css';

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin];
const text =
  'Once you click into the text field the sidebar plugin will show up …';

const SimpleSideToolbarEditor = () => {
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
    <div className={editorStyles.editor} onClick={focus}>
      <Editor
        editorState={editorState}
        onChange={onChange}
        plugins={plugins}
        ref={element => {
          editor.current = element;
        }}
      />
      <SideToolbar />
    </div>
  );
};

export default SimpleSideToolbarEditor;
