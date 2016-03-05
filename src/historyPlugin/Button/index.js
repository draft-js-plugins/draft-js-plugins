import React from 'react';

import styles from './styles';

const Button = (props) => (
  <button style={ styles.root } { ...props } />
);

export default Button;
