import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import TextToolbar from 'draft-js-toolbar-plugin/components/text-toolbar';
import createToolbarPlugin from 'draft-js-toolbar-plugin';
import styles from './styles.css';

const toolbarPlugin = createToolbarPlugin({});
const text = `Cool, we can have all sorts of Emojis here. 🙌
🌿☃️🎉🙈 aaaand maybe a few more here 🐲☀️🗻 Quite fun!`;

class SimpleToolbarEditor extends Component {
  state = {
    editorState: createEditorStateWithText(text),
    draggingOver: false,
  };

  onChange = (editorState) => {
    // console.log(convertToRaw(editorState.getCurrentContent()));
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    const { editorState } = this.state;

    const classNames = [styles.editor];
    return (
        <div className={classNames.join(' ')} onClick={this.focus}>
            <Editor editorState={ editorState } onChange={this.onChange} plugins={[toolbarPlugin]} ref="editor" />
            <TextToolbar editorState={ editorState } theme={toolbarPlugin.theme} onChange={this.onChange} />
        </div>
    );
  }
}

export default SimpleToolbarEditor;
