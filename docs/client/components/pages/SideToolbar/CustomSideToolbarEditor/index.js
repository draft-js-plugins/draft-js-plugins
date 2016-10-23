import React, { Component } from 'react';
// eslint-disable-next-line import/no-unresolved
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
// eslint-disable-next-line import/no-unresolved
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import editorStyles from './editorStyles.css';

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin];
const text = 'In this editor a toolbar with a lot more options shows up once you select part of the text …';

export default class CustomSideToolbarEditor extends Component {

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
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
        <SideToolbar />
      </div>
    );
  }
}
