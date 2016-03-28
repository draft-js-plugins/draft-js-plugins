import React, {Component} from 'react';
import {EditorState} from 'draft-js';
//import request from 'superagent';
import Editor from 'draft-js-plugins-editor';
import createUploadPlugin from 'draft-js-dnd-plugin';
import styles from './styles.css';

const uploadPlugin = createUploadPlugin({
    upload: (data, success, failed, progress) => {
        // Mock file upload, actually only happens client side
        var reader = new FileReader();
        // This is called when finished reading
        reader.onload = function (e) {
            // Report progress
            progress(100);
            // Return an array with one image
            success([{
                // These are attributes like size, name, type, ...
                ...data.files[0],
                // This is the files content as base64
                src: e.target.result,
                // No URL, since nothing on server
                url: null
            }])
        };
        // Start reading the file
        reader.readAsDataURL(data.files[0]);
        // Report progress
        progress(0);

        // This would be a real file upload to server
        /*request.post('/upload')
            .accept('application/json')
            .send(data.formData)
            .on('progress', ({percent}) => {
                progress(percent);
            })
            .end((err, res) => {
                if (err) {
                    return failed(err);
                }
                success(res.body.files, 'image');
            });*/
    }
});
const plugins = [uploadPlugin];

export default class SimpleDndEditor extends Component {
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
