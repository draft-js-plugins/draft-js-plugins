import React, { Component } from 'react';
import { convertFromRaw, EditorState } from 'draft-js';

import Editor, { composeDecorators } from 'draft-js-plugins-editor';
import createFocusPlugin from 'draft-js-focus-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import createDividerPlugin from 'draft-js-divider-plugin';
// eslint-disable-next-line
import BlockTypeSelect from 'draft-js-side-toolbar-plugin/components/BlockTypeSelect';
import editorStyles from './editorStyles.css';

const focusPlugin = createFocusPlugin();

const decorator = composeDecorators(focusPlugin.decorator);

const dividerPlugin = createDividerPlugin({ decorator });

const DefaultBlockTypeSelect = ({ getEditorState, setEditorState, theme }) => (
  <BlockTypeSelect
    getEditorState={getEditorState}
    setEditorState={setEditorState}
    theme={theme}
    structure={[dividerPlugin.DividerButton]}
  />
);

const sideToolbarPlugin = createSideToolbarPlugin({
  structure: [DefaultBlockTypeSelect]
});

const { SideToolbar } = sideToolbarPlugin;

const plugins = [focusPlugin, dividerPlugin, sideToolbarPlugin];

/* eslint-disable */
const initialState = {
  entityMap: {
    '0': {
      type: 'divider',
      mutability: 'IMMUTABLE',
      data: {}
    }
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
      data: {}
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
          key: 0
        }
      ],
      data: {}
    }
  ]
};
/* eslint-enable */

export default class CustomImageEditor extends Component {
  state = {
    editorState: EditorState.createWithContent(convertFromRaw(initialState))
  };

  onChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => {
            this.editor = element;
          }}
        />

        <SideToolbar />
      </div>
    );
  }
}
