import React, { Component } from 'react';
import { EditorState, Entity } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createDndPlugin from 'draft-js-dnd-plugin';
import styles from './styles.css';
import mockUpload from '../utils/mockUpload';
import addBlock from 'draft-js-dnd-plugin/modifiers/addBlock';

import PreviewGithub from '../components/preview-github';
import BlockImage from '../components/block-image';
import BlockText from '../components/block-text';
import cleanupEmpty from '../utils/cleanupEmpty';

const dndPlugin = createDndPlugin({
  allowDrop: true,
  handleUpload: (data, success, failed, progress) =>
    mockUpload(data, success, failed, progress),
  handlePlaceholder: (state, selection, data) => {
    const { type } = data;
    if (type.indexOf('image/') === 0) {
      return addBlock(state, state.getSelection(), 'block-image', data);
    } else if (type.indexOf('text/') === 0 || type === 'application/json') {
      return addBlock(state, state.getSelection(), 'preview-github', data);
    } return state;
  }, handleBlock: (state, selection, data) => {
    const { type } = data;
    if (type.indexOf('image/') === 0) {
      return addBlock(state, state.getSelection(), 'block-image', data);
    } else if (type.indexOf('text/') === 0 || type === 'application/json') {
      return addBlock(state, state.getSelection(), 'block-text', data);
    } return state;
  }, // This would be a real file upload to server
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
      editorState: cleanupEmpty(editorState, ['block-image', 'block-text']),
    });
  };

  focus = () => {
    this.refs.editor.focus();
  };

  blockRendererFn = (contentBlock) => {
    const type = contentBlock.getType();
    if (type === 'preview-github') {
      const entityKey = contentBlock.getEntityAt(0);
      const data = entityKey ? Entity.get(entityKey).data : {};
      return {
        component: PreviewGithub,
        props: { ...data },
      };
    } else if (type === 'block-text') {
      const entityKey = contentBlock.getEntityAt(0);
      const data = entityKey ? Entity.get(entityKey).data : {};
      return {
        component: BlockText,
        props: { ...data },
      };
    } else if (type === 'block-image') {
      const entityKey = contentBlock.getEntityAt(0);
      const data = entityKey ? Entity.get(entityKey).data : {};
      return {
        component: BlockImage,
        props: {
          ...data,
          refreshEditorState: () => {
            const { editorState } = this.state;
            this.onChange(EditorState.forceSelection(editorState, editorState.getCurrentContent().getSelectionAfter()));
          },
        },
      };
    } return undefined;
  }

  render() {
    const { editorState } = this.state;
    const { isDragging, progress } = this.props;
    const classNames = [styles.editor];
    if (isDragging) classNames.push(styles.dnd);
    if (progress) classNames.push(styles.uploading);

    return (
      <div className={classNames.join(' ')} onClick={this.focus}>
        <Editor editorState={editorState}
          onChange={this.onChange}
          blockRendererFn={this.blockRendererFn}
          plugins={[dndPlugin]}
          ref="editor"
        />
      </div>
    );
  }
}

export default SimpleDndEditor;
