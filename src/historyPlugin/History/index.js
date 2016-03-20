import React, { Component, PropTypes } from 'react';

import HistoryEntry from './HistoryEntry';

class History extends Component {

  generateHistoryEntries(stack) {
    return stack.map((entry) => (
      <HistoryEntry>
        { entry.getPlainText() }
      </HistoryEntry>
    ));
  }

  render() {
    const undoStack = this.props.editorState.getUndoStack();
    const redoStack = this.props.editorState.getRedoStack().reverse();
    const undoHistory = this.generateHistoryEntries(undoStack);
    const redoHistory = this.generateHistoryEntries(redoStack);

    return (
      <div>
        { redoHistory }
        <HistoryEntry>
          { this.props.editorState.getCurrentContent().getPlainText() }
        </HistoryEntry>
        { undoHistory }
      </div>
    );
  }
}

History.propTypes = {
  editorState: PropTypes.any.isRequired,
};

export default History;
