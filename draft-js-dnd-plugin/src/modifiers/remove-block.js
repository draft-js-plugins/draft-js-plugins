import {Modifier, ContentState, EditorState, SelectionState, convertFromRaw, convertToRaw} from "draft-js";

export default function(editorState, key){
    var contentState = editorState.getCurrentContent();
    var block = contentState.getBlockForKey(key);
    if(!block){
        return editorState;
    }
    var selectionSate = new SelectionState({
        anchorKey: block.getKey(),
        anchorOffset: 0,
        focusKey: block.getKey(),
        focusOffset: block.getLength()
    });
    var afterRemoval = Modifier.removeRange(contentState, selectionSate, 'backward');
    // Workaround, removeRange removed entity, but not the block
    var rawContent = convertToRaw(afterRemoval);
    rawContent.blocks = rawContent.blocks.filter(x=>x.key !== block.getKey());
    var newState = EditorState.push(editorState, ContentState.createFromBlockArray(convertFromRaw(rawContent)), 'remove-range');
    return newState;
}