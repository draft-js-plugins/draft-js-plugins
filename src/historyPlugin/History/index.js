import React, { Component, PropTypes } from 'react';

import HistoryEntry from './HistoryEntry';
import styles from './styles.css';
import applyStyles from '../../utils/applyStyles';

class History extends Component {
  generateHistoryEntries(stack, styles) {
    return stack.map((entry) => (
      <HistoryEntry {...styles} >
        { entry.getPlainText() }
      </HistoryEntry>
    ));
  }

  render() {
    const undoStack = this.props.editorState.getUndoStack();
    const redoStack = this.props.editorState.getRedoStack().reverse();
    const entryStyles = applyStyles(this.props.theme.get('entry'))
    const undoHistory = this.generateHistoryEntries(undoStack, entryStyles);
    const redoHistory = this.generateHistoryEntries(redoStack, entryStyles);

    return (
      <div>
        { redoHistory }
        <HistoryEntry {...applyStyles(this.props.theme.get('lastEntry'))}>
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
