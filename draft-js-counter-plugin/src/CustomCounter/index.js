import React, { Component, PropTypes } from 'react';
import unionClassNames from 'union-class-names';

class CustomCounter extends Component {

  static propTypes = {
    editorState: PropTypes.any.isRequired,
    theme: PropTypes.any,
    countFunction: PropTypes.function,
  };

  getClassNames(count, limit) {
    const { theme = {}, className } = this.props;
    const defaultStyle = unionClassNames(theme.counter, className);
    const overLimitStyle = unionClassNames(theme.counterOverLimit, className);
    return count > limit ? overLimitStyle : defaultStyle;
  }

  render() {
    const { editorState, limit, countFunction } = this.props;
    const plainText = editorState.getCurrentContent().getPlainText('');
    const count = countFunction(plainText);
    const classNames = this.getClassNames(count, limit);

    return <span className={ classNames }>{count}</span>;
  }
}

export default CustomCounter;
