/* @flow */

import React, { Component } from 'react';

export default class Hashtag extends Component {
  render() {
    const { theme, children, ...props } = this.props; // eslint-disable-line no-use-before-define
    return (
      <span { ...props } className={ theme.get('hashtag') }>
        { children }
      </span>
    );
  }
}
