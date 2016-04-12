import cleanupEmpty from './utils/cleanupEmpty';

let types = [];
const cleanupEmptyPlugin = options => {
  types = options.types || [];
  return {
    onChange: editorState => {
      let newEditorState = editorState;

      editorState.getCurrentContent().get('blockMap').forEach((block) => {
        if (types.indexOf(block.get('type')) !== -1 && block.getEntityAt(0) === null) {
          newEditorState = cleanupEmpty(editorState, block.get('key'), block.get('type'));
        }
      });
      return newEditorState;
    },
  };
};

export default cleanupEmptyPlugin;
export const cleanupType = item => types.push(item);
export const cleanupTypes = items => types.push(...items);
