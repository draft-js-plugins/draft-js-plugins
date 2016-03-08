import React, { Component } from 'react';
import Editor, { createWithText } from 'draft-js-plugin-editor';
import hashtagPlugin from 'draft-js-hashtag-plugin';
import stickerPlugin from 'draft-js-sticker-plugin';
import linkifyPlugin from 'draft-js-linkify-plugin';
import mentionPlugin from 'draft-js-mention-plugin';
import historyPlugin from 'draft-js-history-plugin';
import styles from './styles';
import stickers from './stickers';
import mentions from './mentions';
import StatePreview from '../StatePreview';

// import { EditorState } from 'draft-js-cutting-edge';

const hashtagPluginInstance = hashtagPlugin();
const linkifyPluginInstance = linkifyPlugin();
const mentionPluginInstance = mentionPlugin({
  mentions,
});
const historyPluginInstance = historyPlugin();
const stickerPluginInstance = stickerPlugin({
  stickers,
});
const { StickerSelect } = stickerPluginInstance;
const { UndoButton, RedoButton, History } = historyPluginInstance;

const plugins = [
  hashtagPluginInstance,
  stickerPluginInstance,
  linkifyPluginInstance,
  mentionPluginInstance,
];

export default class UnicornEditor extends Component {

  state = {
    // editorState: EditorState.createEmpty(), // alternative to create an empty state
    editorState: createWithText('Hello World!'),
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
    const showStateButtonStyle = {
      ...styles.button,
      background: (this.state.showState ? '#ededed' : '#fff'),
    };

    return (
      <div style={styles.root}>

        <h2>Example: Unicorn Editor</h2>

        <div style={styles.editor} onClick={ this.focus } className="unicorn-editor-wrapper">
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
          <UndoButton
            editorState={ this.state.editorState }
            onChange={ this.onChange }
          />
          <RedoButton
            editorState={ this.state.editorState }
            onChange={ this.onChange }
          />
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
      <History editorState={ this.state.editorState } />

        <h3>Features in this Editor via Plugins</h3>
        <ul>
          <li>Custom stickers</li>
          <li>Hashtag support</li>
          <li>Automatically turns links into anchor tags</li>
          <li>Mentions</li>
        </ul>

        <h3>Why?</h3>
        <p>
          Just because unicorns are cooler than cats 😜
        </p>
      </div>
    );
  }
}
