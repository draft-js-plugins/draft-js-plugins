/* @flow */

import React, { Component } from 'react';
import applyStyles from '../../utils/applyStyles';

export default class Hashtag extends Component {
  render() {
    const { theme, children, ...props } = this.props; // eslint-disable-line no-use-before-define
    return (
      <span {...props} { ...applyStyles(theme.get('hashtag')) }>
        { children }
      </span>
    );
  }
}
