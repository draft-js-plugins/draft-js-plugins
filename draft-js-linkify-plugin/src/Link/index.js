import React, { Component } from 'react';
import linkifyIt from 'linkify-it';
import tlds from 'tlds';

const linkify = linkifyIt();
linkify.tlds(tlds);

// The component we render when we encounter a hyperlink in the text
export default class Link extends Component {
  render() {
    /* eslint-disable no-use-before-define */
    const {
      decoratedText = '',
      target = '_self',
      className,
      ...props,
      } = this.props;
    /* eslint-enable */
    const links = linkify.match(decoratedText);
    const href = links && links[0] ? links[0].url : '';
    return (
      <this.props.component
        {...props}
        href={href}
        className={className}
        target={target}
      />
    );
  }
}
