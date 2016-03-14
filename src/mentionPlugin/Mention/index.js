import React from 'react';
import { Entity } from 'draft-js';
import styles from './styles.css';

const Mention = (props) => {
  const { mention } = Entity.get(props.entityKey).getData();

  if (mention.has('link')) {
    return (
      <a
        href={ mention.get('link') }
        className={ styles.rootLink }
        spellCheck={ false }
      >
        { props.children }
      </a>
    );
  }

  return (
    <span
      className={ styles.root }
      spellCheck={ false }
    >
      { props.children }
    </span>
  );
};

export default Mention;
