import React from 'react';
import { Entity } from 'draft-js';

const Link = (props) => {
  const { href } = Entity.get(props.entityKey).getData();
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};

export default Link;
