import React, { Component } from 'react';
import type ReactElement from 'react';
import { Editor, EditorState, CompositeDecorator } from 'draft-js';
import hashtagStrategy from './hashtagStrategy';
import Hashtag from './Hashtag';
import styles from './styles';

export default class UnicornEditor extends Component {

  constructor(props) {
    super(props);

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: hashtagStrategy,
        component: Hashtag,
      },
    ]);

    this.state = { editorState: EditorState.createEmpty(compositeDecorator) };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });
    this.logState = () => console.log(this.state.editorState.toJS()); // eslint-disable-line no-console
  }

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
