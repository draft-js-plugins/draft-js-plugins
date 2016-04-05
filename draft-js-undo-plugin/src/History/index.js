import React, { Component, PropTypes } from 'react';
import { EditorState } from 'draft-js';
import unionClassNames from 'union-class-names';
import { Map } from 'immutable';

import HistoryEntry from './HistoryEntry';

class History extends Component {

  generateHistoryEntries(stack) {
    const { theme = Map(), className } = this.props;
    const combinedClassName = unionClassNames(theme.get('historyItem'), className);

    return stack.map((entry) => (
      <HistoryEntry className={ combinedClassName }>
        { entry.getPlainText() }
      </HistoryEntry>
    ));
  }

  render() {
    const {
      theme = Map(),
      editorState = EditorState.createEmpty(),
      className,
    } = this.props;

    const undoStack = editorState.getUndoStack();
    const redoStack = editorState.getRedoStack().reverse();
    const undoHistory = this.generateHistoryEntries(undoStack);
    const redoHistory = this.generateHistoryEntries(redoStack);

    const combinedClassName = unionClassNames(theme.get('historyItemActive'), className);

    return (
      <div>
        { redoHistory }
        <HistoryEntry className={ combinedClassName }>
          { editorState.getCurrentContent().getPlainText() }
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
