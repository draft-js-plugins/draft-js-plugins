import Decorator from './decorators/resizeable';
import { Entity, EditorState } from 'draft-js';

const resizeablePlugin = () => ({
  // Wrap all block-types in resizeable decorator
  blockRendererFn: (contentBlock, { getEditorState, setEditorState }) => {
    const setEntityData = data => {
      const entityKey = contentBlock.getEntityAt(0);
      if (entityKey) {
        const editorState = getEditorState();
        Entity.mergeData(entityKey, { ...data });
        setEditorState(EditorState.forceSelection(editorState, editorState.getSelection()));
      }
      return { ...data };
    };
    return {
      decorators: [Decorator(setEntityData)]
    };
  } });

export default resizeablePlugin;
