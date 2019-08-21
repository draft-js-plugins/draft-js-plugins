import React, { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

class CustomCounter extends Component {
  static propTypes = {
    theme: PropTypes.any,
    limit: PropTypes.number,
    countFunction: PropTypes.func.isRequired,
  };

  getClassNames(count, limit) {
    const { theme = {}, className } = this.props;
    const defaultStyle = clsx(theme.counter, className);
    const overLimitStyle = clsx(theme.counterOverLimit, className);
    return count > limit ? overLimitStyle : defaultStyle;
  }

  render() {
    const { store, limit, countFunction } = this.props;
    const plainText = store
      .getEditorState()
      .getCurrentContent()
      .getPlainText('');
    const count = countFunction(plainText);
    const classNames = this.getClassNames(count, limit);

    return <span className={classNames}>{count}</span>;
  }
}

export default CustomCounter;
