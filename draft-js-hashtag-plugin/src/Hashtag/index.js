import React, { Component } from 'react';
import unionClassNames from 'union-class-names';

export default class Hashtag extends Component {
  render() {
    const { theme = {}, className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(theme.hashtag, className);
    return (
      <span {...props} className={combinedClassName} />
    );
  }
}
