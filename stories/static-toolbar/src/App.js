import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createToolbarPlugin from 'draft-js-static-toolbar-plugin';
import editorStyles from './editorStyles.css';

const inlineToolbarPlugin = createToolbarPlugin();
const { Toolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const text = 'The toolbar above the editor can be used for formatting text, as in conventional static editors  …';

export default class SimpleInlineToolbarEditor extends Component {
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
