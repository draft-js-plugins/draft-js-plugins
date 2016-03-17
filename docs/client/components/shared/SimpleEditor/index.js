import React, { Component } from 'react';
import Editor from 'draft-js-plugin-editor';
import { EditorState } from 'draft-js';
import styles from './styles.css';
import StatePreview from '../StatePreview';

export default config => class UnicornEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(), // alternative to create an empty state
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

  /* eslint-disable react/jsx-no-bind */
  render() {
    const stateButton = this.state.showState ? styles.pressedStateButton : styles.stateButton;
    let UndoButton, RedoButton;
    if (config.pluginNames.indexOf('history') >= 0) {
      const historyPluginInstalce = config.plugins[0]
      UndoButton = historyPluginInstalce.UndoButton;
      RedoButton = historyPluginInstalce.RedoButton;
    }

    return (
      <div className={ styles.root }>

        <div className={ styles.editor } onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={config.plugins}
            spellCheck
            ref="editor"
          />
        </div>
        <div>
          { config.pluginNames.indexOf('history') >= 0 ?
          <span>
            <UndoButton
              editorState={ this.state.editorState }
              onChange={ this.onChange }
            />
            <RedoButton
              editorState={ this.state.editorState }
              onChange={ this.onChange }
            />
          </span>: undefined }
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
