import AddBlock from './addBlock';
import ModifyBlockData from './modifyBlockData';
import {genKey, Entity} from "draft-js";

export default function(config) {
    return function(e){
        const {props, selection, files, editorState, onChange} = e;
        // Get upload function from config or editor props
        const upload = config.upload || props.upload;
        const progress = config.progress || props.progress || ((x)=>config.emitter.emit('progress', x));
        if (upload) {
            var formData = new FormData();

            // Set data {files: [Array of files], formData: FormData}
            var data = {files: []};
            for (var key in files) {
                formData.append('files', files[key]);
                data.files.push(files[key]);
            }
            data.formData = data;

            // Read files on client side
            readFiles(data.files).then(files=>{
                // Add blocks for each image before uploading
                var newEditorState = editorState();
                files.forEach(function (x) {
                    newEditorState = AddBlock(newEditorState, selection, 'image', {...x, progress: 1});
                });
                onChange(newEditorState);

                // Perform upload
                upload(data, files => {
                    // Success, remove 'progress' and 'src'
                    var newEditorState = editorState();
                    files.forEach(function (x) {
                        var key = getBlockWhereEntityData(newEditorState, y=>y.src===x.src);
                        if(key) {
                            newEditorState = ModifyBlockData(newEditorState, key, {
                                progress: undefined,
                                src: undefined, ...x
                            });
                        }
                    });
                    // Propagate progress
                    if(progress) progress(null);
                    onChange(newEditorState);
                }, (err)=> {
                    console.error(err)
                }, (percent)=> {
                    // On progress, set entity data's progress field
                    var newEditorState = editorState();
                    files.forEach(function (x) {
                        var key = getBlockWhereEntityData(newEditorState, y=>y.src===x.src);
                        if(key){
                            newEditorState = ModifyBlockData(newEditorState, key, {progress: percent});
                        }
                    });
                    onChange(newEditorState);
                    // Propagate progress
                    if(progress) progress(percent);
                });
            });

            return true;
        }
    }
}

function readFiles(files){
    return Promise.all(files.map(readFile));
}

function readFile(file){
    return new Promise((resolve, reject)=>{
        var reader = new FileReader();
        // This is called when finished reading
        reader.onload = function (e) {
            // Return an array with one image
            resolve({
                // These are attributes like size, name, type, ...
                ...file,
                // This is the files content as base64
                src: e.target.result,
                // No URL, since nothing on server
                url: null
            });
        };
        reader.readAsDataURL(file);
    });
}

function getBlockWhereEntityData(state, query){
    var map = state.getCurrentContent().get('blockMap').toArray();
    for(var i=0; i<map.length; i++){
        var block = map[i];
        var entityData = block.getEntityAt(0) ? Entity.get(block.getEntityAt(0)).getData() : null;
        if (block.get('type') === 'image' && entityData && query(entityData)) {
            return block.get('key');
        }
    }
    return null;
}