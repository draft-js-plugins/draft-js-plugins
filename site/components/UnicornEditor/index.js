import React, { Component } from 'react';
import Editor, { createEmpty } from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import stickerPlugin from 'draft-js-sticker-plugin';
import linkPlugin from 'draft-js-link-plugin';
import { EditorState } from 'draft-js';
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
    editorState: createEmpty(plugins),
    readOnly: false,
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
    if (!this.state.readOnly) {
      this.setState({
        editorState: EditorState.undo(this.state.editorState),
      });
    }
  };

  redo = () => {
    if (!this.state.readOnly) {
      this.setState({
        editorState: EditorState.redo(this.state.editorState),
      });
    }
  };

  toggleReadOnly = () => {
    this.setState({
      readOnly: !this.state.readOnly,
    });
  };

  toggleShowState = () => {
    this.setState({
      showState: !this.state.showState,
    });
  };

  /* eslint-disable react/jsx-no-bind */
  render() {
    const readOnlyButtonStyle = {
      ...styles.button,
      background: (this.state.readOnly ? '#ededed' : '#fff'),
    };

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

        <h2>Unicorn Editor</h2>

        <div style={styles.editor} onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            spellCheck
            readOnly={ this.state.readOnly }
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
            style={ readOnlyButtonStyle }
            onClick={ this.toggleReadOnly }
          >
            Toggle Read Only
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
          <li>Custom Stickers</li>
          <li>Hashtag Support</li>
          <li>Automatically turns links into Anchor-tags</li>
          <li>@mentions (comming soon …)</li>
        </ul>

        <h3>Why?</h3>
        <p>
          Just because Unicorns are cooler than Cats 😜
        </p>
      </div>
    );
  }
}
