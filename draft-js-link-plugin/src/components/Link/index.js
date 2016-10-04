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
    target = '_blank',
    rel = 'noopener noreferrer',
    theme = {},
    className,
  } = props;

  const combinedClassName = unionClassNames(theme.link, className);
  return (
    <a href={getUrl(props.entityKey, urlKey)} target={target} rel={rel} className={combinedClassName}>
      {props.children}
    </a>
  );
};

export default Link;
