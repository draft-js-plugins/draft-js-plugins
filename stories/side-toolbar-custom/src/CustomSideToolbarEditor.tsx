import React, { ReactElement, useRef, useState } from 'react';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import {
  HeadlineOneButton,
  HeadlineTwoButton,
  BlockquoteButton,
  CodeBlockButton,
} from '@draft-js-plugins/buttons';
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';

import editorStyles from './editorStyles.css';
import buttonStyles from './buttonStyles.css';
import toolbarStyles from './toolbarStyles.css';
import blockTypeSelectStyles from './blockTypeSelectStyles.css';

// Setting the side Toolbar at right position(default is left) and styling with custom theme
const sideToolbarPlugin = createSideToolbarPlugin({
  position: 'right',
  theme: { buttonStyles, toolbarStyles, blockTypeSelectStyles },
});
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin];
const text =
  'Once you click into the text field the sidebar plugin will show up …';

const CustomSideToolbarEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(
    createEditorStateWithText(text)
  );
  const editor = useRef();

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
      <SideToolbar>
        {
          // may be use React.Fragment instead of div to improve perfomance after React 16
          (externalProps) => (
            <div>
              <HeadlineOneButton {...externalProps} />
              <HeadlineTwoButton {...externalProps} />
              <BlockquoteButton {...externalProps} />
              <CodeBlockButton {...externalProps} />
            </div>
          )
        }
      </SideToolbar>
    </div>
  );
};

export default CustomSideToolbarEditor;
