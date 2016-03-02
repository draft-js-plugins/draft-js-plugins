import React, { Component } from 'react';
import Editor, { createEmptyEditorState } from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import stickerPlugin from 'draft-js-sticker-plugin';
import linkPlugin from 'draft-js-link-plugin';
import {
  EditorState, // eslint-disable-line
  compositeDecorator, // eslint-disable-line
} from 'draft-js';
import styles from './styles';
import stickers from './stickers';
import { List } from 'immutable';
import StatePreview from '../StatePreview';

const hashtagPluginInstance = hashtagPlugin();
const linkPluginInstance = linkPlugin();
const stickerPluginInstance = stickerPlugin({ stickers });
const { StickerSelect } = stickerPluginInstance;

const plugins = List([
  hashtagPluginInstance,
  stickerPluginInstance,
  linkPluginInstance,
]);

export default class UnicornEditor extends Component {

  state = {
    editorState: createEmptyEditorState(plugins),
    readOnly: false,
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  addSticker = (stickerId) => {
    this.setState({
      editorState: stickerPluginInstance.add(this.state.editorState, stickerId),
    });
  };

  toggleReadOnly = () => {
    this.setState({
      readOnly: !this.state.readOnly,
    });
  };

  /* eslint-disable react/jsx-no-bind */
  render() {
    const readOnlyButtonStyle = {
      ...styles.readOnlyButton,
      background: (this.state.readOnly ? '#ededed' : '#fff'),
    };

    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="I'm a Unicorn Input!"
            plugins={plugins}
            spellCheck
            readOnly={ this.state.readOnly }
            ref="editor"
          />
        </div>
        <div>
          <StickerSelect editor={ this } />
          <button
            style={ readOnlyButtonStyle }
            onClick={ this.toggleReadOnly }
          >
            Toggle Read Only
          </button>
        </div>
        <StatePreview editorState={ this.state.editorState } />
      </div>
    );
  }
}
