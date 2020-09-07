import React from 'react';
import clsx from 'clsx';
import linkifyIt from 'linkify-it';
import tlds from 'tlds';

const linkify = linkifyIt();
linkify.tlds(tlds);

// The component we render when we encounter a hyperlink in the text
const Link = props => {
  const {
    decoratedText = '',
    theme = {},
    target = '_self',
    rel = 'noreferrer noopener',
    className,
    component,
    dir, // eslint-disable-line no-unused-vars
    entityKey, // eslint-disable-line no-unused-vars
    getEditorState, // eslint-disable-line no-unused-vars
    offsetKey, // eslint-disable-line no-unused-vars
    setEditorState, // eslint-disable-line no-unused-vars
    contentState, // eslint-disable-line no-unused-vars
    ...otherProps
  } = props;

  const combinedClassName = clsx(theme.link, className);
  const links = linkify.match(decoratedText);
  const href = links && links[0] ? links[0].url : '';

  const linkProps = {
    ...otherProps,
    href,
    target,
    rel,
    className: combinedClassName,
  };

  return component ? (
    React.createElement(component, linkProps)
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a {...linkProps} />
  );
};

export default Link;
