import React, { Component } from 'react';
import Editor, { createEmptyEditorState } from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import stickerPlugin from 'draft-js-sticker-plugin';
import {
  EditorState, // eslint-disable-line
  compositeDecorator, // eslint-disable-line
} from 'draft-js';
import styles from './styles';
import stickers from './stickers';
import { List } from 'immutable';
import StatePreview from '../StatePreview';

const hashtagPluginInstance = hashtagPlugin();
const stickerPluginInstance = stickerPlugin({ stickers });
const { StickerSelect } = stickerPluginInstance;

const plugins = List([
  hashtagPluginInstance,
  stickerPluginInstance,
]);

export default class UnicornEditor extends Component {

  state = {
    editorState: createEmptyEditorState(plugins),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  addSticker = (stickerId) => {
    this.setState({
      editorState: stickerPluginInstance.add(this.state.editorState, stickerId),
    });
  };

  /* eslint-disable react/jsx-no-bind */
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="I'm a Unicorn Input!"
            plugins={plugins}
            spellCheck
          />
        </div>
        <StickerSelect editor={ this } />
        <StatePreview editorState={ this.state.editorState } />
      </div>
    );
  }
}
