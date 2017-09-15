import React, { Component } from 'react';

import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';

import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import editorStyles from './editorStyles.css';
import buttonStyles from './buttonStyles.css';
import toolbarStyles from './toolbarStyles.css';

const toolbarPlugin = createToolbarPlugin({
  theme: { buttonStyles, toolbarStyles }
});
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin];
const text = 'In this editor a toolbar with a lot more options shows up once you select part of the text …';

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

  render() {
    return (
      <div>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
          <Toolbar />
        </div>
      </div>
    );
  }
}
