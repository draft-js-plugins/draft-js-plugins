import React, { Component } from 'react';
import unionClassNames from 'union-class-names';
import linkifyIt from 'linkify-it';
import tlds from 'tlds';

const linkify = linkifyIt();
linkify.tlds(tlds);

// The component we render when we encounter a hyperlink in the text
export default class Link extends Component {
  render() {
    const {
      decoratedText = '',
      theme = {},
      target = '_self',
      className,
      component,
      ...rest,
    } = this.props;

    const combinedClassName = unionClassNames(theme.link, className);
    const links = linkify.match(decoratedText);
    const href = links && links[0] ? links[0].url : '';

    const props = {
      ...rest,
      href,
      target,
      className: combinedClassName,
    };

    return component
      ? React.createElement(component, props)
      : <a {...props} />;
  }
}
