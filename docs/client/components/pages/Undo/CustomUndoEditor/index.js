import React, { Component } from 'react';
import { Map } from 'immutable';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createUndoPlugin from 'draft-js-undo-plugin';
import editorStyles from './editorStyles.css';
import buttonStyles from './buttonStyles.css';

const theme = Map({
  undo: buttonStyles.button,
  redo: buttonStyles.button,
});
const undoPlugin = createUndoPlugin({
  undoContent: 'Undo',
  redoContent: 'Redo',
  theme,
});
const { UndoButton, RedoButton } = undoPlugin;

export default class CustomUndoEditor extends Component {

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
      <div>
        <div className={ editorStyles.editor } onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            ref="editor"
          />
        </div>
        <div className={ editorStyles.options }>
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
