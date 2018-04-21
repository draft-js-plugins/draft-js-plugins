import { insertCustomBlock } from '../utils';

export default (blockType) => (editorState) => insertCustomBlock(editorState, blockType);
