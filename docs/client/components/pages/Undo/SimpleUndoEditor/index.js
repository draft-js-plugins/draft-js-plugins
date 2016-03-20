import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugin-editor';
import historyPlugin from 'draft-js-history-plugin';
import styles from './styles.css';

const historyPluginInstance = historyPlugin();
const { UndoButton, RedoButton } = historyPluginInstance;

export default class SimpleUndoEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    return (
      <div className={ styles.root }>
        <div className={ styles.editor } onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            ref="editor"
          />
        </div>
        <div>
          <UndoButton
            editorState={ this.state.editorState }
            onChange={ this.onChange }
          />
          <RedoButton
            editorState={ this.state.editorState }
            onChange={ this.onChange }
          />
        </div>
      </div>
    );
  }
}
