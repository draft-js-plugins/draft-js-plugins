import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
import createAirToolbarPlugin from 'draft-js-air-toolbar-plugin'; // eslint-disable-line import/no-unresolved
import editorStyles from './editorStyles.css';

const airToolbarPlugin = createAirToolbarPlugin();
const { AirToolbar } = airToolbarPlugin;
const plugins = [airToolbarPlugin];
const text = 'In this editor a toolbar shows up once you select part of the text …';

export default class SimpleAirToolbarEditor extends Component {

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
        <AirToolbar />
      </div>
    );
  }
}
