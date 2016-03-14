import React from 'react';
import styles from './styles.css';

const Button = (props) => (
  <button
    className={ styles.root }
    disabled={ props.disabled }
    { ...props }
  />
);

export default Button;
