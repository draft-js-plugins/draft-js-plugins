import React, { Component, PropTypes } from 'react';
import unionClassNames from 'union-class-names';
import { Map } from 'immutable';

class LineCounter extends Component {

  static propTypes = {
    editorState: PropTypes.any.isRequired,
    theme: PropTypes.any,
  };

  getLineCount(editorState) {
    const blockArray = editorState.getCurrentContent().getBlocksAsArray();
    return blockArray ? blockArray.length : null;
  }

  render() {
    const { theme = Map(), editorState, className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(theme.get('charCounter'), className);
    const count = this.getLineCount(editorState);

    return <span className={ combinedClassName }>{count}</span>;
  }
}

export default LineCounter;
