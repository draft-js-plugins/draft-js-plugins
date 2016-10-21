import React, { Component } from 'react';
import {
  Entity,
} from 'draft-js';
// eslint-disable-next-line import/no-unresolved
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
// eslint-disable-next-line import/no-unresolved
import createSidebarPlugin, { INPUT_TYPES } from 'draft-js-sidebar-plugin';
import editorStyles from './editorStyles.css';
import codeImg from './code.svg';

const actions = [{
  name: 'insert-twitter',
  inputType: INPUT_TYPES.TEXT,
  placeholder: 'insert tweet link',
  icon: codeImg,
  // eslint-disable-next-line no-unused-vars
  add: (tweetUrl) => Entity.create('EMBED', 'IMMUTABLE', {
    url: 'https://twitter.com/sebmarkbage/status/786586514155110400',
    author_name: 'Sebastian Markbåge',
    author_url: 'https://twitter.com/sebmarkbage',
    html: '\u003Cblockquote class="twitter-tweet"\u003E\u003Cp lang="en" dir="ltr"\u003EI *think* #2 is strictly better. It avoids an allocation and indirect jump for 0-1 items. Everything else is equal. \u003Ca href="https://t.co/5C9O8vSDDk"\u003Ehttps://t.co/5C9O8vSDDk\u003C/a\u003E\u003C/p\u003E&mdash; Sebastian Markbåge (@sebmarkbage) \u003Ca href="https://twitter.com/sebmarkbage/status/786586514155110400"\u003EOctober 13, 2016\u003C/a\u003E\u003C/blockquote\u003E\n\u003Cscript async src="//platform.twitter.com/widgets.js" charset="utf-8"\u003E\u003C/script\u003E',
    width: 550,
    height: null,
    type: 'rich',
    cache_age: '3153600000',
    provider_name: 'Twitter',
    provider_url: 'https://twitter.com',
    version: '1.0',
  }),
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
