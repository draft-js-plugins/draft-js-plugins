import React from 'react';

import styles from './styles';

const Button = (props) => (
  <button
    style={ (props.disabled ? {
      ...styles.root,
      backgroundColor: '#bbb',
    } : styles.root) }
    disabled={ props.disabled }
    { ...props }
  />
);

export default Button;
