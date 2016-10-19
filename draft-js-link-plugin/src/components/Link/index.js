import React from 'react';
import { Entity } from 'draft-js';
import unionClassNames from 'union-class-names';

const getUrl = (entityKey, urlKey) => {
  const data = Entity.get(entityKey).getData();
  return data[urlKey];
};

const Link = (props) => {
  const {
    urlKey,
    entityKey,
    theme,
    className,
    component,
    rel = 'noopener noreferrer',
    ...otherProps,
  } = props;

  const combinedClassName = unionClassNames(theme.link, className);
  const componentProps = {
    href: getUrl(entityKey, urlKey),
    className: combinedClassName,
    rel,
    ...otherProps,
  };

  return component
    ? React.createElement(component, componentProps)
    : <a {...componentProps} />; // eslint-disable-line jsx-a11y/anchor-has-content
};

export default Link;
