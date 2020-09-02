import React, { useState, useRef } from 'react';
import { convertFromRaw, EditorState } from 'draft-js';
import Editor, { composeDecorators } from 'draft-js-plugins-editor';
import createFocusPlugin from 'draft-js-focus-plugin';
import createColorBlockPlugin from './colorBlockPlugin';
import editorStyles from './editorStyles.css';

const focusPlugin = createFocusPlugin();

const decorator = composeDecorators(focusPlugin.decorator);

const colorBlockPlugin = createColorBlockPlugin({ decorator });
const plugins = [focusPlugin, colorBlockPlugin];

/* eslint-disable */
const initialState = {
  entityMap: {
    '0': {
      type: 'colorBlock',
      mutability: 'IMMUTABLE',
      data: {},
    },
  },
  blocks: [
    {
      key: '9gm3s',
      text: 'This is a simple example. Click on the block to focus on it.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'ov7r',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0,
        },
      ],
      data: {},
    },
    {
      key: 'e23a8',
      text:
        'More text here to demonstrate how inline left/right alignment works …',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};
/* eslint-enable */

const CustomImageEditor = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(initialState))
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
    </div>
  );
};

export default CustomImageEditor;
