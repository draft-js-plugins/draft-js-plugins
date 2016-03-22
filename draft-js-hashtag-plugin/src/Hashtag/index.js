import { Map } from 'immutable';
import React, { Component } from 'react';
import unionClassNames from 'union-class-names';

export default class Hashtag extends Component {
  render() {
    const { theme = Map(), className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(theme.get('hashtag'), className);
    return (
      <span { ...props } className={ combinedClassName } />
    );
  }
}
