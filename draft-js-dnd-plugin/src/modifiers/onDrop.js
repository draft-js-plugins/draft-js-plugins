import AddBlock from './addBlock';
import RemoveBlock from './remove-block';
import {Entity} from "draft-js";

export default function(config) {
    return function(e){
        const {props, selection, dataTransfer, isInternal, editorState, onChange} = e;

        var state = editorState();
        // Get data 'text' (anything else won't move the cursor) and expecting kind of data (text/key)
        var raw = dataTransfer.data.getData("text");
        var data = raw ? raw.split(':') : [];

        if(data.length !== 2){
            return;
        }
        // Existing block dropped
        if(data[0] === 'key'){
            var blockKey = data[1];
            // Get content, selection, block
            var block = state.getCurrentContent().getBlockForKey(blockKey);
            var editorStateAfterInsert = AddBlock(state, selection, block.getType(), Entity.get(block.getEntityAt(0)).data);
            onChange(RemoveBlock(editorStateAfterInsert, blockKey));
        }
        // New block dropped
        else if(data[0] === 'type'){
            var blockType = data[1];
            // Get content, selection, block
            var editorStateAfterInsert = AddBlock(state, selection, blockType, {});
            onChange(editorStateAfterInsert);
        }
        return true;
    }
}