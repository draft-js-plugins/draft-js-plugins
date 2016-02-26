/* @flow */

import React, { Component } from 'react';
import {
  Editor,
  EditorState,
  CompositeDecorator,
} from 'draft-js';
import hashtagStrategy from './hashtagStrategy';
import Hashtag from './Hashtag';
import Sticker from './Sticker';
import styles from './styles';
import addSticker from './modifiers/addSticker';
import removeSticker from './modifiers/removeSticker';

const compositeDecorator = new CompositeDecorator([
  {
    strategy: hashtagStrategy,
    component: Hashtag,
  },
]);

type UnicornEditorState = {
  editorState: any,
}

export default class UnicornEditor extends Component {

  state: UnicornEditorState = {
    editorState: EditorState.createEmpty(compositeDecorator),
  };

  onChange: Function = (editorState: Object): void => {
    // console.log(editorState.toJS());
    this.setState({
      editorState,
    });
  };

  myBlockRenderer: Function = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === 'sticker') {
      return {
        component: Sticker,
        props: {
          onRemove: (blockKey) => {
            const newState = removeSticker(this.state.editorState, blockKey);
            this.setState({
              editorState: newState,
            });
          },
        },
      };
    }

    return undefined;
  };

  focus: Function = (): void => {
    this.refs.editor.focus();
  };

  addSticker: Function = (): void => {
    // TODO fix selection for adding & remove

    this.setState({
      editorState: addSticker(this.state.editorState),
    });
  };

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            blockRendererFn={this.myBlockRenderer}
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="I'm a Unicorn Input!"
            ref="editor"
            spellCheck
          />
        </div>
        <button
          onClick={this.addSticker}
          type="button"
        >
          Add a Unicorn
        </button>
        <input
          style={styles.button}
          type="button"
          value="Log State"
        />
      </div>
    );
  }
}
