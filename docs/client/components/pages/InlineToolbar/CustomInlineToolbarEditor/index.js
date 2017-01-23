import React, { Component } from 'react';
// eslint-disable-next-line import/no-unresolved
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
// eslint-disable-next-line import/no-unresolved
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';
// eslint-disable-next-line import/no-unresolved
import createLinkifyPlugin from 'draft-js-linkify-plugin'; // eslint-disable-line import/no-unresolved
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
  AddLinkButton,
} from '../../../../../../draft-js-buttons/src/'; // eslint-disable-line import/no-unresolved
import editorStyles from './editorStyles.css';

let linkAddElement = null;
let inlineToolbarElement = null;

const addLink = () => {
  linkAddElement.openPopover();
};

const inlineToolbarPlugin = createInlineToolbarPlugin({
  structure: [
    BoldButton,
    ItalicButton,
    UnderlineButton,
    CodeButton,
    Separator,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
    AddLinkButton,
  ],
  addLink,
});
const { InlineToolbar } = inlineToolbarPlugin;
const linkifyPlugin = createLinkifyPlugin();
const { LinkAdd } = linkifyPlugin;
const plugins = [inlineToolbarPlugin, linkifyPlugin];
const text = 'In this editor a toolbar shows up once you select part of the text …';

export default class CustomInlineToolbarEditor extends Component {

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
          <InlineToolbar
            ref={(element) => { inlineToolbarElement = element; }}
          />
        </div>
        <LinkAdd
          ref={(element) => { linkAddElement = element; }}
          editorState={this.state.editorState}
          onChange={this.onChange}
          inlineToolbarElement={inlineToolbarElement}
        />
      </div>
    );
  }
}
