import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createUndoPlugin from '@draft-js-plugins/undo';
import editorStyles from './editorStyles.module.css';
import buttonStyles from './buttonStyles.module.css';

const theme = {
  undo: buttonStyles.button,
  redo: buttonStyles.button,
};
const undoPlugin = createUndoPlugin({
  undoContent: 'Undo',
  redoContent: 'Redo',
  theme,
});
const { UndoButton, RedoButton } = undoPlugin;
const plugins = [undoPlugin];

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
            ref={(element) => {
              this.editor = element;
            }}
          />
        </div>
        <div className={editorStyles.options}>
          <UndoButton />
          <RedoButton />
        </div>
      </div>
    );
  }
}
