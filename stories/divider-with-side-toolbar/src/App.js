import React, { useRef, useState } from 'react';
import { convertFromRaw, EditorState } from 'draft-js';

import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createFocusPlugin from '@draft-js-plugins/focus';
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';
import createDividerPlugin from '@draft-js-plugins/divider';

import editorStyles from './editorStyles.css';

const focusPlugin = createFocusPlugin();

const decorator = composeDecorators(focusPlugin.decorator);

const dividerPlugin = createDividerPlugin({ decorator });
const { DividerButton } = dividerPlugin;

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const plugins = [focusPlugin, dividerPlugin, sideToolbarPlugin];

/* eslint-disable */
const initialState = {
  entityMap: {
    0: {
      type: 'divider',
      mutability: 'IMMUTABLE',
      data: {},
    },
  },
  blocks: [
    {
      key: '9gm3s',
      text:
        'This is a simple example for divider plugin. Click side toolbar divider button.',
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
  ],
};
/* eslint-enable */

const CustomImageEditor = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(initialState))
  );
  const editor = useRef();

  const onChange = (value) => {
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
        ref={(element) => {
          editor.current = element;
        }}
      />

      <SideToolbar>
        {
          // may be use React.Fragment instead of div to improve perfomance after React 16
          (externalProps) => (
            <div>
              <DividerButton {...externalProps} />
            </div>
          )
        }
      </SideToolbar>
    </div>
  );
};

export default CustomImageEditor;
