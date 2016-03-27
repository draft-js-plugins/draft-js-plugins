import React, {Component} from 'react';
import {EditorState} from 'draft-js';
import request from 'superagent';
import Editor from 'draft-js-plugins-editor';
import createUploadPlugin from 'draft-js-upload-plugin';
import styles from './styles.css';

const uploadPlugin = createUploadPlugin({
    upload: (data, success, failed, progress) => {
        request.post('/upload')
            .accept('application/json')
            .send(data)
            .on('progress', ({percent}) => {
                progress(percent);
            })
            .end((err, res) => {
                if (err) {
                    return failed(err);
                }
                success(res.body.files, 'image');
            });
    }
});
const plugins = [uploadPlugin];

export default class SimpleUploadEditor extends Component {
    state = {
        editorState: EditorState.createEmpty(),
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
        return (
            <div>
                <div className={ styles.editor } onClick={ this.focus }>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref="editor"
                    />
                </div>
            </div>
        );
    }
}
