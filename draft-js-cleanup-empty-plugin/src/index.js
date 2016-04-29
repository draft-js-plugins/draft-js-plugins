import cleanupEmpty from './utils/cleanupEmpty';

// Block-Types to be handled will be stored here
let types = [];
const cleanupEmptyPlugin = options => {
  types = options.types || [];
  return {
    onChange: editorState => {
      let newEditorState = editorState;

      // Iterate over blockMap
      editorState.getCurrentContent().get('blockMap').forEach(block => {
        // If the block type is registered within the plugin, and no entity was
        // found, perform cleanup of the block
        if (types.indexOf(block.get('type')) !== -1 && block.getEntityAt(0) === null) {
          newEditorState = cleanupEmpty(editorState, block.get('key'), block.get('type'));
        }
      });
      return newEditorState;
    },
  };
};

export default cleanupEmptyPlugin;
// Use this to add one type to the list
export const cleanupType = item => types.push(item);
// Use this to add multiple types to the list
export const cleanupTypes = items => types.push(...items);
