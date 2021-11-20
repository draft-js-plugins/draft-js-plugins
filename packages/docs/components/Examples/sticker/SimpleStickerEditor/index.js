import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createStickerPlugin from '@draft-js-plugins/sticker';
import editorStyles from './editorStyles.module.css';
import stickers from './stickers';

const stickerPlugin = createStickerPlugin({ stickers });
const plugins = [stickerPlugin];
const StickerSelect = stickerPlugin.StickerSelect;

export default class SimpleMentionEditor extends Component {
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
          <StickerSelect editor={this} />
        </div>
      </div>
    );
  }
}
