import React, { Component } from 'react';
import Editor, { createWithText } from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import stickerPlugin from 'draft-js-sticker-plugin';
import linkifyPlugin from 'draft-js-linkify-plugin';
import { EditorState } from 'draft-js';
import styles from './styles';
import stickers from './stickers';
import StatePreview from '../StatePreview';
import Hashtag from './Hashtag';
import Link from './Link';

// import Sticker from './Sticker';
// const stickerPluginInstance = stickerPlugin({ stickers, Sticker });
const stickerPluginInstance = stickerPlugin({ stickers, hasRemove: false });
const hashtagPluginInstance = hashtagPlugin({ Hashtag });
const linkifyPluginInstance = linkifyPlugin({ Link });
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

  /* eslint-disable react/jsx-no-bind */
  render() {
    const showStateButtonStyle = {
      ...styles.button,
      background: (this.state.showState ? '#ededed' : '#fff'),
    };

    const smallButtonStyle = {
      ...styles.button,
      width: 40,
      fontWeight: 'bold',
      fontSize: '1.5em',
      padding: 0,
      top: 0,
    };

    return (
      <div style={styles.root}>

        <h2>Example: Superhero Editor</h2>

        <div style={styles.editor} onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            spellCheck
            ref="editor"
          />
        </div>
        <div>
          <div style={ styles.stickerSelect }>
            <StickerSelect editor={ this } />
          </div>
          <button
            style={ smallButtonStyle }
            onClick={ this.undo }
          >
            ↺
          </button>
          <button
            style={ smallButtonStyle }
            onClick={ this.redo }
          >
            ↻
          </button>
          <button
            style={ showStateButtonStyle }
            onClick={ this.toggleShowState }
          >
            Toggle State Preview
          </button>
        </div>
        <StatePreview
          editorState={ this.state.editorState }
          collapsed={ !this.state.showState }
        />

        <h3>Features in this Editor via Plugins</h3>
        <ul>
          <li>Custom stickers</li>
          <li>Hashtag support & applying a custom Hashtag component</li>
          <li>Automatically turns links into anchor tags</li>
          <li>@mentions (coming soon…)</li>
        </ul>
      </div>
    );
  }
}
