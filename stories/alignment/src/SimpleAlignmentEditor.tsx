import React, { useState, useRef, ReactElement } from 'react';
import { convertFromRaw, EditorState, RawDraftContentState } from 'draft-js';
import Editor, { composeDecorators } from 'draft-js-plugins-editor';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createColorBlockPlugin from './colorBlockPlugin';
import editorStyles from './editorStyles.css';

const focusPlugin = createFocusPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  alignmentPlugin.decorator,
  focusPlugin.decorator
);

const colorBlockPlugin = createColorBlockPlugin({ decorator });
const plugins = [focusPlugin, alignmentPlugin, colorBlockPlugin];

/* eslint-disable */
const initialState: RawDraftContentState = {
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
      text:
        'This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.',
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

const SimpleAlignmentEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(initialState))
  );

  const editor = useRef<Editor>();

  return (
    <div>
      <div
        className={editorStyles.editor}
        onClick={(): void => {
          editor.current.focus();
        }}
      >
        <Editor
          editorState={editorState}
          onChange={(value): void => {
            setEditorState(value);
          }}
          plugins={plugins}
          ref={(element) => {
            editor.current = element;
          }}
        />
        <AlignmentTool />
      </div>
    </div>
  );
};

export default SimpleAlignmentEditor;
