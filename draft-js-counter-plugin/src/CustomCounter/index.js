import React, { Component } from 'react';
import PropTypes from 'prop-types';
import unionClassNames from 'union-class-names';

class CustomCounter extends Component {

  static propTypes = {
    component: PropTypes.func,
    theme: PropTypes.any,
    limit: PropTypes.number,
    countFunction: PropTypes.func.isRequired,
  };

  getClassNames(count, limit) {
    const { theme = {}, className } = this.props;
    const defaultStyle = unionClassNames(theme.counter, className);
    const overLimitStyle = unionClassNames(theme.counterOverLimit, className);
    return count > limit ? overLimitStyle : defaultStyle;
  }

  render() {
    const { store, limit, countFunction, component } = this.props;
    const plainText = store.getEditorState().getCurrentContent().getPlainText('');
    const count = countFunction(plainText);
    const classNames = this.getClassNames(count, limit);
    if (component) {
      const CustomComponent = component;
      return <CustomComponent className={classNames} count={count} limit={limit} />;
    }

    return <span className={classNames}>{count}</span>;
  }
}

export default CustomCounter;
