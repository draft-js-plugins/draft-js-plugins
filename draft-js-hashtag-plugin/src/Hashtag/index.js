import React, { Component } from 'react';
import unionClassNames from 'union-class-names';

export default class Hashtag extends Component {
  render() {
    const { theme = {}, className, children } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(theme.hashtag, className);
    return (
      <span className={combinedClassName}>{children}</span>
    );
  }
}
