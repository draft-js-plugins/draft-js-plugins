import React, { Component, PropTypes } from 'react';
import { EditorState } from 'draft-js';
import unionClassNames from 'union-class-names';
import { Map } from 'immutable';

class UndoButton extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func.isRequired,
    editorState: PropTypes.any.isRequired,
    theme: PropTypes.any,
  };

  onClick = () => {
    this.props.onChange(EditorState.undo(this.props.editorState));
  };

  render() {
    const { theme = Map(), children, className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(theme.get('undo'), className);
    return (
      <button
        disabled={ this.props.editorState.getUndoStack().isEmpty() }
        onClick={ this.onClick }
        className={ combinedClassName }
      >
        { children }
      </button>
    );
  }
}

export default UndoButton;
