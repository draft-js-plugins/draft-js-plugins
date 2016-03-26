import React, { Component } from 'react';
import Editor from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createStickerPlugin from 'draft-js-sticker-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createMentionPlugin from 'draft-js-mention-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createUndoPlugin from 'draft-js-undo-plugin';
import styles from './styles.css';
import stickers from './stickers';
import mentions from './mentions';
import {
  // convertToRaw,
  convertFromRaw,
  ContentState,
  EditorState,
} from 'draft-js';
import initialState from './initialState';

const emojiPlugin = createEmojiPlugin();
const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();
const mentionPlugin = createMentionPlugin({
  mentions,
});
const undoPlugin = createUndoPlugin();
const stickerPlugin = createStickerPlugin({
  stickers,
});
const { StickerSelect } = stickerPlugin;
const { UndoButton, RedoButton } = undoPlugin;

const plugins = [
  emojiPlugin,
  hashtagPlugin,
  stickerPlugin,
  linkifyPlugin,
  mentionPlugin,
];

const contentState = ContentState.createFromBlockArray(convertFromRaw(initialState));

export default class UnicornEditor extends Component {

  state = {
    editorState: EditorState.createWithContent(contentState),
    showState: false,
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });

    // console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())));
  };

  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    return (
      <div className={ styles.root }>
        <div className={ styles.editor } onClick={ this.focus }>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            spellCheck
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
        </div>
      </div>
    );
  }
}
