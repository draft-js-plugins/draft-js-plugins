import React, {Component} from 'react';
import Image from './Image';
import {EditorState} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createUploadPlugin from 'draft-js-dnd-plugin';
import createToolbarPlugin from 'draft-js-toolbar-plugin';
import TextToolbar from 'draft-js-toolbar-plugin/components/text-toolbar';
import styles from './styles.css';
import mockUpload from '../utils/mockUpload';
import DndWrapper from 'draft-js-dnd-plugin/components/dnd-wrapper';
import decorateWithProps from 'decorate-component-with-props';

const toolbarPlugin = createToolbarPlugin({});
const uploadPlugin = createUploadPlugin({
  Image: decorateWithProps(Image, {toolbarTheme: toolbarPlugin.theme}),
  upload: (data, success, failed, progress) =>
    mockUpload(data, success, failed, progress),
});

class SimpleDndEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    draggingOver: false,
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  render() {
    const {editorState} = this.state;
    const {isDragging, progress} = this.props;
    const classNames = [styles.editor];
    if (isDragging) classNames.push(styles.dnd);
    if (progress) classNames.push(styles.uploading);

    const plugins = [uploadPlugin, toolbarPlugin];
    return (
      <div className={classNames.join(' ')} onClick={this.focus}>
        <Editor editorState={editorState} onChange={this.onChange} plugins={plugins} ref="editor" />
        <TextToolbar editorState={ editorState } theme={toolbarPlugin.theme} onChange={this.onChange} />
      </div>
    );
  }
}

export default DndWrapper(SimpleDndEditor, uploadPlugin);
