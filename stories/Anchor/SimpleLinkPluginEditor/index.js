import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createLinkPlugin from 'draft-js-anchor-plugin';
import { ItalicButton, BoldButton, UnderlineButton } from 'draft-js-buttons';
import editorStyles from './editorStyles.css';

const linkPlugin = createLinkPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [BoldButton, ItalicButton, UnderlineButton, linkPlugin.LinkButton],
});
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin, linkPlugin];
const text =
  'Try selecting a part of this text and click on the link button in the toolbar that appears …';

export default class SimpleLinkPluginEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = editorState => this.setState({ editorState });

  focus = () => this.editor.focus();

  render() {
    return (
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={element => {
            this.editor = element;
          }}
        />
        <InlineToolbar />
      </div>
    );
  }
}
