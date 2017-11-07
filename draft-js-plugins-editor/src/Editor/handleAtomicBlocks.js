import { RichUtils } from 'draft-js';

export default {
  // TODO: Find a better place for this.
  // This solves atomic block removes
  // it's not placed inside draft-js-image-plugin because it's required by
  // all atomic blocks.
  // A similar fix is done also inside draft-js-focus-plugin and is there
  // because the fix is just for the focus case
  handleKeyCommand: (command, _, { getEditorState, setEditorState }) => {
    const newState = RichUtils.handleKeyCommand(getEditorState(), command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  },
};
