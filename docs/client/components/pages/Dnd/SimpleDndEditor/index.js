import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createUploadPlugin from 'draft-js-dnd-plugin';
import styles from './styles.css';
import mockUpload from '../utils/mockUpload';
import DndWrapper from 'draft-js-dnd-plugin/components/dnd-wrapper';

const uploadPlugin = createUploadPlugin({
  upload: (data, success, failed, progress) =>
      mockUpload(data, success, failed, progress),

  // This would be a real file upload to server
  /* superagent.post('/upload')
          .accept('application/json')
          .send(data.formData)
          .on('progress', ({ percent }) => {
            progress(percent);
          })
          .end((err, res) => {
            if (err) {
              return failed(err);
            }
            success(res.body.files, 'image');
          });*/
});

class SimpleDndEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
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
    const { isDragging, progress } = this.props;
    const classNames = [styles.editor];
    if (isDragging) classNames.push(styles.dnd);
    if (progress) classNames.push(styles.uploading);

    return (
            <div className={classNames.join(' ')} onClick={this.focus}>
                <Editor editorState={editorState} onChange={this.onChange} plugins={[uploadPlugin]} ref="editor" />
            </div>
        );
  }
}

export default DndWrapper(SimpleDndEditor, uploadPlugin);
