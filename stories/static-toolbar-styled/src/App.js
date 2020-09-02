/* eslint-disable react/no-multi-comp */
import React, { useRef, useState, useEffect } from 'react';

import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';

import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
  SubButton,
  SupButton,
} from 'draft-js-buttons';
import editorStyles from './editorStyles.css';

const HeadlinesPicker = props => {
  const onWindowClick = () =>
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    props.onOverrideContent(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.addEventListener('click', onWindowClick);
    });

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      window.removeEventListener('click', onWindowClick);
    };
  }, []);

  const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
  return (
    <div>
      {buttons.map((
        Button,
        i // eslint-disable-next-line
      ) => (
        // eslint-disable-next-line react/no-array-index-key
        <Button key={i} {...props} />
      ))}
    </div>
  );
};

const HeadlinesButton = ({ onOverrideContent }) => {
  const onClick = () =>
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    onOverrideContent(HeadlinesPicker);

  return (
    <div className={editorStyles.headlineButtonWrapper}>
      <button onClick={onClick} className={editorStyles.headlineButton}>
        H
      </button>
    </div>
  );
};

const toolbarPlugin = createToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    CodeButton,
    Separator,
    HeadlinesButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
    SubButton,
    SupButton,
  ],
});
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];
const text =
  'Remember to place the <Toolbar> component bellow the Editor component …';

const CustomToolbarEditor = () => {
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
          customStyleMap={{
            SUBSCRIPT: { fontSize: '0.6em', verticalAlign: 'sub' },
            SUPERSCRIPT: { fontSize: '0.6em', verticalAlign: 'super' },
          }}
          ref={element => {
            editor.current = element;
          }}
        />
        <Toolbar />
      </div>
    </div>
  );
};

export default CustomToolbarEditor;
