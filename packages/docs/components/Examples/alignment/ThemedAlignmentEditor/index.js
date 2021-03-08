import React, { Component } from 'react';
import {
  convertFromRaw,
  DefaultDraftBlockRenderMap,
  EditorState,
} from 'draft-js';
import Immutable from 'immutable';
import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createAlignmentPlugin from '@draft-js-plugins/alignment';
import createFocusPlugin from '@draft-js-plugins/focus';
import createColorBlockPlugin from './colorBlockPlugin';
import editorStyles from './editorStyles.module.css';
import alignmentToolStyles from './alignmentToolStyles.module.css';
import buttonStyles from './buttonStyles.module.css';

const focusPlugin = createFocusPlugin();
const alignmentPlugin = createAlignmentPlugin({
  theme: {
    alignmentToolStyles,
    buttonStyles,
  },
});
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  alignmentPlugin.decorator,
  focusPlugin.decorator
);

const colorBlockPlugin = createColorBlockPlugin({ decorator });
const plugins = [focusPlugin, alignmentPlugin, colorBlockPlugin];

/* eslint-disable */
const initialState = {
  entityMap: {
    0: {
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

function BlockWrapper({ children }) {
  return <div className={editorStyles.wrapper}>{children}</div>;
}

const blockRenderMap = Immutable.Map({
  atomic: {
    element: 'figure',
    wrapper: <BlockWrapper />,
  },
});
const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

export default class ThemedAlignmentEditor extends Component {
  state = {
    editorState: EditorState.createWithContent(convertFromRaw(initialState)),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => {
              this.editor = element;
            }}
            blockRenderMap={extendedBlockRenderMap}
          />
          <AlignmentTool />
        </div>
      </div>
    );
  }
}
