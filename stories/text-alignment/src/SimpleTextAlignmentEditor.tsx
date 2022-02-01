import React, { ReactElement, useRef, useState } from 'react';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import createTextAlignmentPlugin from '@draft-js-plugins/text-alignment';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
} from '@draft-js-plugins/buttons';
import editorStyles from './editorStyles.css';

const inlineToolbarPlugin = createToolbarPlugin();
const textAlignmentPlugin = createTextAlignmentPlugin();

const { Toolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin, textAlignmentPlugin];
const text =
  'Try selecting a part of this text and click on one of alignment buttons';

const SimpleStaticWithTextAlignment = (): ReactElement => {
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
        <Toolbar>
          {
            // may be use React.Fragment instead of div to improve perfomance after React 16
            (externalProps) => (
              <div>
                <ItalicButton {...externalProps} />
                <BoldButton {...externalProps} />
                <UnderlineButton {...externalProps} />
                <textAlignmentPlugin.TextAlignment {...externalProps} />
              </div>
            )
          }
        </Toolbar>
      </div>
    </div>
  );
};

export default SimpleStaticWithTextAlignment;
