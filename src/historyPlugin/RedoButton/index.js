import React, { Component, PropTypes } from 'react';
import { EditorState } from 'draft-js-cutting-edge';

import Button from '../Button';

class RedoButton extends Component {
  onClick = () => {
    this.props.onChange(EditorState.redo(this.props.editorState));
  };

  render() {
    return (
      <Button
        disabled={ this.props.editorState.getRedoStack().isEmpty() }
        onClick={ this.onClick }
      >
        ↻
      </Button>
    );
  }
}

RedoButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  editorState: PropTypes.any.isRequired,
};

export default RedoButton;
