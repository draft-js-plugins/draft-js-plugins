import React, { Component } from 'react';
import {
  Entity,
} from 'draft-js';
// eslint-disable-next-line import/no-unresolved
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
// eslint-disable-next-line import/no-unresolved
import createSidebarPlugin, { TextAction, Sidebar } from 'draft-js-sidebar-plugin';
import axios from 'axios';
import editorStyles from './editorStyles.css';
import codeImg from './code.svg';

class AddEmbedButton extends React.Component {

  getEntity = (url) =>
    // personal trial key limited 1000r/mo
    axios.get('http://iframe.ly/api/oembed', {
      params: {
        url: encodeURI(url),
        api_key: '54369a367cc9edef72dd01',
      },
    }).then((response) => Entity.create('EMBED', 'IMMUTABLE', response.data));

  render = () => (
    <TextAction
      icon={codeImg}
      getEntity={this.getEntity}
      placeholder="insert social media link (youtube, twitter, ...)"
      {...this.props} />
  );
}

const actions = [AddEmbedButton];

const sidebarPlugin = createSidebarPlugin();
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

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <Sidebar
        editorState={this.state.editorState}
        editor={this.editor}
        emptyLineOnly={true}
        actions={actions}
      >
        <div className={editorStyles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
        </div>
      </Sidebar>
    );
  }
}
