import React, { Component } from 'react';
import { EditorState, convertFromRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor'; // eslint-disable-line import/no-unresolved
import createLinkPlugin from 'draft-js-link-plugin'; // eslint-disable-line import/no-unresolved
import editorStyles from './editorStyles.css';
import data from './data';

const linkPlugin = createLinkPlugin({
  type: "MY-CUSTOM-LINK-ENTITY",
  urlKey: "my-custom-attribute",
});
const plugins = [linkPlugin];

export default class CustomEntityLinkEditor extends Component {

  state = {
    editorState: EditorState.createWithContent(convertFromRaw(data)),
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
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
      </div>
    );
  }
}
