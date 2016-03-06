import React, { Component, PropTypes } from 'react';
import { EditorState } from 'draft-js-cutting-edge';

import HistoryEntry from './HistoryEntry';
import styles from './styles';

class History extends Component {
  generateHistoryEntries(stack, style) {
    return stack.map((entry) => (
      <HistoryEntry style={style} >
        { entry.getPlainText() }
      </HistoryEntry>
    ));
  }

  render() {
    const undoStack = this.props.editorState.getUndoStack();
    const redoStack = this.props.editorState.getRedoStack().reverse();
    const undoHistory = this.generateHistoryEntries(undoStack, styles.entry);
    const redoHistory = this.generateHistoryEntries(redoStack, styles.entry);
    const currentEntryStyle = {
      ...styles.entry,
      color: '#000',
    };

    return (
      <div>
        { redoHistory }
        <HistoryEntry style={ currentEntryStyle }>
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
