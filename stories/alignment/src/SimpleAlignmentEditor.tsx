import React, { useState, useRef, ReactElement, ReactNode } from 'react';
import {
  convertFromRaw,
  DefaultDraftBlockRenderMap,
  EditorState,
  RawDraftContentState,
} from 'draft-js';
import Immutable from 'immutable';
import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createAlignmentPlugin from '@draft-js-plugins/alignment';
import createFocusPlugin from '@draft-js-plugins/focus';
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

function BlockWrapper({ children }: { children?: ReactNode }): ReactElement {
  return <div className={editorStyles.wrapper}>{children}</div>;
}

const blockRenderMap = Immutable.Map({
  atomic: {
    element: 'figure',
    wrapper: <BlockWrapper />,
  },
});
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

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
          blockRenderMap={extendedBlockRenderMap}
        />
        <AlignmentTool />
      </div>
    </div>
  );
};

export default SimpleAlignmentEditor;
