import { EditorState } from 'draft-js';
/* eslint-disable react/no-multi-comp */
import React, { ReactElement, useState } from 'react';
import Editor from '@draft-js-plugins/editor';
import createTableEditorPlugin from '@draft-js-plugins/table';
import editorStyles from './editorStyles.css';

const tablePlugin = createTableEditorPlugin();
const plugins = [tablePlugin];

export interface CustomTableEditorProps {
  initialState: EditorState;
}

const CustomTableEditor = ({
  initialState,
}: CustomTableEditorProps): ReactElement => {
  const [editorState, setEditorState] = useState(initialState);

  return (
    <div className={editorStyles.editor}>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        plugins={plugins}
      />
    </div>
  );
};

export default CustomTableEditor;
