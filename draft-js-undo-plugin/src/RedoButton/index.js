import React from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import unionClassNames from 'union-class-names';

import ListenToSelection from '../ListenToSelection';

class RedoButton extends ListenToSelection {

  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.any,
  };

  onClick = () => {
    this.setEditorState(EditorState.redo(this.getEditorState()));
  };

  render() {
    const { theme = {}, children, className } = this.props;
    const combinedClassName = unionClassNames(theme.redo, className);
    const editorState = this.getEditorState();

    return (
      <button
        disabled={
          !editorState || editorState.getRedoStack().isEmpty()
        }
        type="button"
        onClick={this.onClick}
        className={combinedClassName}
      >
        {children}
      </button>
    );
  }
}

export default RedoButton;
