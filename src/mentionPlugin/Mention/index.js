import React from 'react';
import { Entity } from 'draft-js-cutting-edge';
import styles from './styles';

const Mention = (props) => {
  const { mention } = Entity.get(props.entityKey).getData();

  if (mention.has('link')) {
    return (
      <a
        href={mention.get('link')}
        style={styles.mention}
        spellCheck={ false }
      >
        { props.children }
      </a>
    );
  }

  return (
    <span
      style={styles.mention}
      spellCheck={ false }
    >
      { props.children }
    </span>
  );
};

export default Mention;
