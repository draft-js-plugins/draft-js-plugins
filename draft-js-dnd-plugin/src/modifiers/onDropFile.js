import AddBlock from './addBlock';

export default function(config) {
    return function(e){
        const {props, selection, files, editorState, onChange} = e;
        // Get upload function from config or editor props
        const upload = config.upload || props.upload;
        if (upload) {
            //this.setState({fileDrag: false, uploading: true});
            console.log('Starting upload');

            var data = new FormData();
            for (var key in files) {
                data.append('files', files[key]);
            }
            upload(data, (files, tag)=> {
                console.log('Upload done');
                // Success, tag can be function that returns editorState or a tag-type (default: image)
                var newEditorState = editorState();
                files.forEach(function (x) {
                    newEditorState = typeof tag === 'function' ? tag(x) : AddBlock(newEditorState, selection, tag || 'image', x);
                });
                onChange(newEditorState);
            }, (err)=> {
                // Failed
                console.error(err)
                //this.setState({uploading: false, uploadError: err});
            }, (percent)=> {
                // Progress
                //this.setState({percent: percent !== 100 ? percent : null});
                console.log(percent)
            });
            return true;
        }
    }
}