import React, { Component } from 'react';
import type ReactElement from 'react';
import { Editor, EditorState, CompositeDecorator } from 'draft-js';
import hashtagStrategy from './hashtagStrategy';
import Hashtag from './Hashtag';
import styles from './styles';

const compositeDecorator = new CompositeDecorator([
  {
    strategy: hashtagStrategy,
    component: Hashtag,
  },
]);

export default class UnicornEditor extends Component {

  state = {
    editorState: EditorState.createEmpty(compositeDecorator),
  };

  onChange = (editorState) => {
    this.setState({ editorState });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  logState = () => {
    console.log(this.state.editorState.toJS()); // eslint-disable-line no-console
  };

  render(): ReactElement {
    return (
      <div style={styles.root}>
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="I'm a Unicorn!"
            ref="editor"
          />
        </div>
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
