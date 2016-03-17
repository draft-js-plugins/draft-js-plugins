import React from 'react';
import styles from './styles.css';
import applyStyles from '../../utils/applyStyles';

const Button = (props) => {
  const {theme, ...otherProps} = props;
  return (<button
    { ...otherProps }
    { ...applyStyles(theme.get('button')) }
  />);
};

export default Button;
