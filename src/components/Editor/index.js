/* @flow */

import React, { Component } from 'react';
import {
  Editor,
  EditorState,
  Entity,
  CompositeDecorator,
  Modifier,
} from 'draft-js';
import hashtagStrategy from './hashtagStrategy';
import Hashtag from './Hashtag';
import Sticker from './Sticker';
import styles from './styles';

const compositeDecorator = new CompositeDecorator([
  {
    strategy: hashtagStrategy,
    component: Hashtag,
  },
]);

type UnicornEditorState = {
  editorState: any,
}

const myBlockRenderer = (contentBlock) => {
  const type = contentBlock.getType();
  if (type === 'sticker') {
    return {
      component: Sticker,
    };
  }

  return undefined;
};

export default class UnicornEditor extends Component {

  state: UnicornEditorState = {
    editorState: EditorState.createEmpty(compositeDecorator),
  };

  onChange: Function = (editorState: Object): void => {
    this.setState({
      editorState,
    });
  };

  focus: Function = (): void => {
    this.refs.editor.focus();
  };

  logState: Function = (): void => {
    console.log(this.state.editorState.toJS()); // eslint-disable-line no-console
  };

  addSticker: Function = (): void => {
    const { editorState } = this.state;
    const entityKey = Entity.create('sticker', 'IMMUTABLE', { id: '2345' });

    const newContentState = Modifier.insertText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      'Woooooot',
      undefined,
      entityKey,
    );

    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      'add-sticker'
    );

    // console.log(newEditorState.toJS());

    this.setState({
      editorState: newEditorState,
    });
  };

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            blockRendererFn={myBlockRenderer}
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="I'm a Unicorn!"
            ref="editor"
            spellCheck
          />
        </div>
        <button
          onClick={this.addSticker}
          type="button"
        >
          Sticker
        </button>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State"
        />
      </div>
    );
  }
}
