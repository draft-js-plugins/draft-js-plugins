import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState } from 'draft-js';
import unionClassNames from 'union-class-names';

class UndoButton extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.any,
  };

  onClick = (event) => {
    event.stopPropagation();
    this.props.store.setEditorState(EditorState.undo(this.props.store.getEditorState()));
  };

  render() {
    const { theme = {}, children, className } = this.props;
    const combinedClassName = unionClassNames(theme.undo, className);
    return (
      <button
        disabled={
          !this.props.store ||
          !this.props.store.getEditorState ||
          this.props.store.getEditorState().getUndoStack().isEmpty()
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

export default UndoButton;
