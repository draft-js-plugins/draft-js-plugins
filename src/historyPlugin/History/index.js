import React, { Component, PropTypes } from 'react';

import HistoryEntry from './HistoryEntry';
import styles from './styles.css';

class History extends Component {
  generateHistoryEntries(stack, className) {
    return stack.map((entry) => (
      <HistoryEntry className={ className } >
        { entry.getPlainText() }
      </HistoryEntry>
    ));
  }

  render() {
    const undoStack = this.props.editorState.getUndoStack();
    const redoStack = this.props.editorState.getRedoStack().reverse();
    const undoHistory = this.generateHistoryEntries(undoStack, styles.entry);
    const redoHistory = this.generateHistoryEntries(redoStack, styles.entry);

    return (
      <div>
        { redoHistory }
        <HistoryEntry className={ styles.currentEntry }>
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
