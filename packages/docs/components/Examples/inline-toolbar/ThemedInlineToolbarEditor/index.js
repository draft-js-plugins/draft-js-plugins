import React, { Component } from 'react';

import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';

import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import editorStyles from './editorStyles.module.css';
import buttonStyles from './buttonStyles.module.css';
import toolbarStyles from './toolbarStyles.module.css';

const inlineToolbarPlugin = createInlineToolbarPlugin({
  theme: { buttonStyles, toolbarStyles },
});
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const text =
  'In this editor a toolbar with a lot more options shows up once you select part of the text …';

export default class ThemedInlineToolbarEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  componentDidMount() {
    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      editorState: createEditorStateWithText(text),
    });
  }

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
        <InlineToolbar />
      </div>
    );
  }
}
