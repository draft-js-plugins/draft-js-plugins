import React, { Component } from 'react';
import Editor, { createWithText } from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import Immutable from 'immutable';
import stickerPlugin from 'draft-js-sticker-plugin';
import linkifyPlugin from 'draft-js-linkify-plugin';
import historyPlugin from 'draft-js-history-plugin';
import { EditorState } from 'draft-js';
import styles from './styles.css';
import stickers from './stickers';
import StatePreview from '../StatePreview';
import Link from './Link';

// import Sticker from './Sticker';
// const stickerPluginInstance = stickerPlugin({ stickers, Sticker });
const stickerPluginInstance = stickerPlugin({ stickers, hasRemove: false });
const hashtagPluginInstance = hashtagPlugin({ theme: Immutable.Map({
  hashtag: {
    color: '#7AA04A',
    fontFamily: 'monospace',
  }
})});
const linkifyPluginInstance = linkifyPlugin({ Link });
const historyPluginInstance = historyPlugin();
const { UndoButton, RedoButton } = historyPluginInstance;
const { StickerSelect } = stickerPluginInstance;

const plugins = [
  hashtagPluginInstance,
  stickerPluginInstance,
  linkifyPluginInstance,
];

export default class UnicornEditor extends Component {

  state = {
    editorState: createWithText('Hello World!', plugins),
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

  undo = () => {
    this.setState({
      editorState: EditorState.undo(this.state.editorState),
    });
  };

  redo = () => {
    this.setState({
      editorState: EditorState.redo(this.state.editorState),
    });
  };

  toggleShowState = () => {
    this.setState({
      showState: !this.state.showState,
    });
  };

  render() {
    const stateButton = this.state.showState ? styles.pressedStateButton : styles.stateButton;

    return (
      <div className={ styles.root }>

        <div className={ styles.editor } onClick={ this.focus }>
          <Editor
            editorState={ this.state.editorState }
            onChange={ this.onChange }
            plugins={ plugins }
            spellCheck
            className="waaahhh"
            ref="editor"
          />
        </div>
        <div>
          <div className={ styles.stickerSelect }>
            <StickerSelect editor={ this } />
          </div>
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
