import React, { Component } from 'react';
import unionClassNames from 'union-class-names';
import { Map } from 'immutable';

// The component we render when we encounter a hyperlink in the text
export default class Link extends Component {
  render() {
    /* eslint-disable no-use-before-define */
    const {
      decoratedText,
      theme = Map(),
      prefix,
      target,
      className,
      ...props
      } = this.props;
    /* eslint-enable */
    const combinedClassName = unionClassNames(theme.get('link'), className);
    const href = decoratedText.startsWith(prefix) ? decoratedText : prefix + decoratedText;
    return (
      <a
        { ...props }
        href={ href }
        className={ combinedClassName }
        target={ target }
      />
    );
  }
}
