import React, { Component } from 'react';
import {
  EditorState,
  Modifier,
  RichUtils,
  Entity,
} from 'draft-js';
// eslint-disable-next-line import/no-unresolved
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import editorStyles from './editorStyles.css';

import createSidebarPlugin, { TYPES } from 'draft-js-sidebar-plugin';

const actions = [{
  name: 'test',
  type: TYPES.GENERIC,
  icon: 'lol',
  add: () => { return { then: (callback) => callback(Entity.create('EMBED', 'IMMUTABLE', { test: 'http://www.google.fr' }))}; }
}];

console.log(actions);

const sidebarPlugin = createSidebarPlugin({ actions });
const { renderSidebar } = sidebarPlugin;
const plugins = [sidebarPlugin];
const text = `#TIL: This editor can have all sorts of #hashtags. Pretty #cool :)
Try it yourself by starting a word with a # (hash character) …
`;

export default class SimpleHashtagEditor extends Component {

  state = {
    editorState: createEditorStateWithText(text),
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
            ref={(element) => { this.editor = element; }}
          />
        </div>
        {renderSidebar()}
      </div>
    );
  }
}
