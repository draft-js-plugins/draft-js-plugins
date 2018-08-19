import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import editorStyles from './editorStyles.css';
import {
  HeadlineOneButton,
  HeadlineTwoButton,
  BlockquoteButton,
  CodeBlockButton,
  UnorderedListButton,
  OrderedListButton,
} from 'draft-js-buttons';

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;
const plugins = [sideToolbarPlugin];
const text = 'Once you click into the text field the sidebar plugin will show up …';

export default class SimpleSideToolbarEditor extends Component {

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
      <div className={editorStyles.editor} onClick={this.focus}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
        />
        <SideToolbar>{
          (getEditorState, setEditorState, theme) => {
            const buttonProps= {
              getEditorState,
              setEditorState,
              theme
            };

            // may be use React.Fragment instead of div to improve perfomance after React 16
            return (<div>
              <HeadlineOneButton {...buttonProps}/>
              <HeadlineTwoButton {...buttonProps}/>
              <BlockquoteButton {...buttonProps}/>
              <CodeBlockButton {...buttonProps}/>
              <UnorderedListButton {...buttonProps}/>
              <OrderedListButton {...buttonProps}/>
            </div>)
          }
        }</SideToolbar>
      </div>
    );
  }
}
