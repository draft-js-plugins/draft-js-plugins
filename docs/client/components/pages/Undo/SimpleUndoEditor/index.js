import React, { Component } from 'react';
import Editor from 'draft-js-plugin-editor';
import { EditorState } from 'draft-js';
import historyPlugin from 'draft-js-history-plugin';
import styles from './styles.css';
import StatePreview from '../../../shared/StatePreview';

const historyPluginInstance = historyPlugin();
const { UndoButton, RedoButton } = historyPluginInstance;

export default class SimpleUndoEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(),
    showState: false,
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  toggleShowState = () => {
    this.setState({
      showState: !this.state.showState,
    });
  };

  render() {
    const stateButton = this.state.showState ?
      styles.pressedStateButton :
      styles.stateButton;

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
          <button
            className={ stateButton }
            onClick={ this.toggleShowState }
          >
            Toggle State Preview
          </button>
        </div>
        <StatePreview
          editorState={ this.state.editorState }
          collapsed={ !this.state.showState }
        />
      </div>
    );
  }
}
