import {Modifier, CharacterMetadata, BlockMapBuilder, EditorState, ContentBlock, ContentState, Entity, genKey, convertToRaw, convertFromRaw} from "draft-js";

export default function (editorState, key, data) {
  const currentContentState = editorState.getCurrentContent();

  const block = currentContentState.getBlockForKey(key);
  const entityKey = block.getEntityAt(0);
  Entity.mergeData(entityKey, data);

  return EditorState.forceSelection(editorState, editorState.getCurrentContent().getSelectionAfter());
}