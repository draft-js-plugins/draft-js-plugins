import React from 'react';
import { Entity } from 'draft-js-cutting-edge';

import styles from './styles';

const Mention = (props) => {
  const { mention } = Entity.get(props.entityKey).getData();
  return (
    <a href={mention.link} style={styles.mention}>
      { props.children }
    </a>
  );
};

export default Mention;
