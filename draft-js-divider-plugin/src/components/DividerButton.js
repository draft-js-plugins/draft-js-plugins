import React, { Component } from 'react';
import PropTypes from 'prop-types';

import unionClassNames from 'union-class-names';

class DividerButton extends Component {
  onClick = (event) => {
    event.preventDefault();

    const editorState = this.props.getEditorState();
    const newEditorState = this.props.addDivider(editorState);

    this.props.setEditorState(newEditorState);
  };

  preventBubblingUp = (event) => {
    event.preventDefault();
  };

  blockTypeIsActive = () => {
    const editorState = this.props.getEditorState();
    const type = editorState
      .getCurrentContent()
      .getBlockForKey(editorState.getSelection().getStartKey())
      .getType();
    return type === this.props.blockType;
  };

  render() {
    const { theme } = this.props;
    const className = this.blockTypeIsActive()
      ? unionClassNames(theme.button, theme.active)
      : theme.button;

    return (
      <div className={theme.buttonWrapper} onMouseDown={this.preventBubblingUp}>
        <button className={className} onClick={this.onClick} type="button">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
      </div>
    );
  }
}

DividerButton.propTypes = {
  theme: PropTypes.object,
  getEditorState: PropTypes.func.isRequired,
  setEditorState: PropTypes.func.isRequired,
  addDivider: PropTypes.func.isRequired
};

DividerButton.defaultProps = {
  theme: {}
};

export default DividerButton;
