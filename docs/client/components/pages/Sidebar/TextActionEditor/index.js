import React, { Component } from 'react';
import {
  Entity,
} from 'draft-js';
// eslint-disable-next-line import/no-unresolved
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
// eslint-disable-next-line import/no-unresolved
import createSidebarPlugin, { INPUT_TYPES } from 'draft-js-sidebar-plugin';
import axios from 'axios';
import editorStyles from './editorStyles.css';
import codeImg from './code.svg';

const actions = [{
  name: 'insert-twitter',
  inputType: INPUT_TYPES.TEXT,
  placeholder: 'insert social media link (youtube, twitter, ...)',
  icon: codeImg,
  // eslint-disable-next-line no-unused-vars
  add: (url) =>
    //personal trial key limited 1000r/mo
    axios.get('http://iframe.ly/api/oembed',{
      params: {
        url:encodeURI(url),
        api_key: '54369a367cc9edef72dd01',
      },
    }).then((response) =>Entity.create('EMBED', 'IMMUTABLE', response.data)),
}];

const sidebarPlugin = createSidebarPlugin({ actions });
const { Sidebar } = sidebarPlugin;
const plugins = [sidebarPlugin];
const text = ` When you click somewhere on an empty line of the editor,
a button will appear on the left.
When you click on the button you will have access to the actions.
`;

export default class BasicActionEditor extends Component {

  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  getPluginMethods = () => {
    if (!this.editor) {
      return {};
    }
    return this.editor.getPluginMethods();
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div style={{ position: 'relative' }} ref={(container) => { this.container = container; }}>
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
        </div>
        <Sidebar
          editorState={this.state.editorState}
          getPluginMethods={this.getPluginMethods}
          container={this.container}
        />
      </div>
    );
  }
}
