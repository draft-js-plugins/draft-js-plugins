import React, { Component } from 'react';
import unionClassNames from 'union-class-names';
import { Map } from 'immutable';

// The component we render when we encounter a hyperlink in the text
export default class Link extends Component {
  render() {
    const { theme = Map(), className, ...props } = this.props; // eslint-disable-line no-use-before-define
    const combinedClassName = unionClassNames(theme.get('link'), className);
    return (
      <a
        { ...props }
        href={ this.props.decoratedText }
        className={ combinedClassName }
      />
    );
  }
}
