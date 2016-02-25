import React from 'react';
import styles from './styles';

export default (props) => (
  <span {...props} style={styles.root}>
    {props.children}
  </span>
);
