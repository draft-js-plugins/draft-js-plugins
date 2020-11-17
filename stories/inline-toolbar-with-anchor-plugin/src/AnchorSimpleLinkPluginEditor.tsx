import React, { useState, useRef, ReactElement } from 'react';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import createLinkPlugin from '@draft-js-plugins/anchor';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
} from '@draft-js-plugins/buttons';
import editorStyles from './editorStyles.css';

const linkPlugin = createLinkPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin, linkPlugin];
const text =
  'Try selecting a part of this text and click on the link button in the toolbar that appears …';

const SimpleLinkPluginEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(
    createEditorStateWithText(text)
  );

  const editor = useRef<Editor>();

  const onChange = (value): void => setEditorState(value);

  const focus = (): void => editor.current.focus();

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
      <InlineToolbar>
        {
          // may be use React.Fragment instead of div to improve perfomance after React 16
          (externalProps) => (
            <div>
              <BoldButton {...externalProps} />
              <ItalicButton {...externalProps} />
              <UnderlineButton {...externalProps} />
              <linkPlugin.LinkButton {...externalProps} />
            </div>
          )
        }
      </InlineToolbar>
    </div>
  );
};

export default SimpleLinkPluginEditor;
