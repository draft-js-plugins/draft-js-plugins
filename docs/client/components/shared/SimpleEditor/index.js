import React, { Component } from 'react';
import Editor from 'draft-js-plugin-editor';
import { EditorState } from 'draft-js';
import styles from './styles.css';
import StatePreview from '../StatePreview';

export default plugins => class UnicornEditor extends Component {

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
    const pluginsList = plugins.valueSeq().toArray();
    const stateButton = this.state.showState ? styles.pressedStateButton : styles.stateButton;
    let UndoButton, RedoButton, StickerSelect;
    if (plugins.get('history')) {
      const historyPluginInstance = plugins.get('history');
      UndoButton = historyPluginInstance.UndoButton;
      RedoButton = historyPluginInstance.RedoButton;
    }
    else if (plugins.get('sticker')) {
      const stickerPluginInstance = plugins.get('sticker');
      StickerSelect = stickerPluginInstance.StickerSelect;
    }

    return (
      <div className={ styles.root }>

        <div className={ styles.editor } onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={pluginsList}
            spellCheck
            ref="editor"
          />
        </div>
        <div>
          { plugins.get('sticker') ?
            <div className={ styles.stickerSelect }>
              <StickerSelect editor={ this } />
            </div> : undefined }
          { plugins.get('history') ?
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
