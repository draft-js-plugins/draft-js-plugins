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

  getClassNames(count, limit) {
    const { theme = Map(), className } = this.props;
    const defaultStyle = unionClassNames(theme.get('counter'), className);
    const overLimitStyle = unionClassNames(theme.get('overLimit'), className);
    return count > limit ? overLimitStyle : defaultStyle;
  }

  render() {
    const { editorState, limit, ...props } = this.props; // eslint-disable-line no-use-before-define
    const count = this.getLineCount(editorState);
    const classNames = this.getClassNames(count, limit);

    return <span className={ classNames }>{count}</span>;
  }
}

export default LineCounter;
