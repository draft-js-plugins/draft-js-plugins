import React, { ReactElement, useRef, useState } from 'react';

import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';

import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import editorStyles from './editorStyles.css';
import buttonStyles from './buttonStyles.css';
import toolbarStyles from './toolbarStyles.css';

const inlineToolbarPlugin = createInlineToolbarPlugin({
  theme: { buttonStyles, toolbarStyles },
});
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const text =
  'In this editor a toolbar with a lot more options shows up once you select part of the text …';

const ThemedInlineToolbarEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(
    createEditorStateWithText(text)
  );
  const editor = useRef<Editor>();

  const onChange = (value): void => {
    setEditorState(value);
  };

  const focus = (): Editor => {
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
      <InlineToolbar />
    </div>
  );
};

export default ThemedInlineToolbarEditor;
