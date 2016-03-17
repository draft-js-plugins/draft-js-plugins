import React, { Component, PropTypes } from 'react';

import HistoryEntry from './HistoryEntry';
import applyStyles from '../../utils/applyStyles';

// import styles from './styles.css';

class History extends Component {

  generateHistoryEntries(stack, historyStyles) {
    return stack.map((entry) => (
      <HistoryEntry {...historyStyles} >
        { entry.getPlainText() }
      </HistoryEntry>
    ));
  }

  render() {
    const undoStack = this.props.editorState.getUndoStack();
    const redoStack = this.props.editorState.getRedoStack().reverse();
    const entryStyles = applyStyles(this.props.theme.get('entry'));
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
