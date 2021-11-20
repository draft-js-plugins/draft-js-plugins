import React, { Component } from 'react';

import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';

import createToolbarPlugin from '@draft-js-plugins/static-toolbar';
import editorStyles from './editorStyles.module.css';
import buttonStyles from './buttonStyles.module.css';
import toolbarStyles from './toolbarStyles.module.css';

const toolbarPlugin = createToolbarPlugin({
  theme: { buttonStyles, toolbarStyles },
});
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];
const text =
  'In this editor a toolbar with a lot more options shows up once you select part of the text …';

export default class ThemedToolbarEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  componentDidMount() {
    // fixing issue with SSR https://github.com/facebook/draft-js/issues/2332#issuecomment-761573306
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      editorState: createEditorStateWithText(text),
    });
  }

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
          />
          <Toolbar />
        </div>
      </div>
    );
  }
}
