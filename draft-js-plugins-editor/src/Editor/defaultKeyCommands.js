import { RichUtils } from 'draft-js';

export default {
  handleKeyCommand: (command, editorState, { setEditorState }) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState != null) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  }
};
