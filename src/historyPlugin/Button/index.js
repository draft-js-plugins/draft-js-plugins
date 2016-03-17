import React from 'react';
import applyStyles from '../../utils/applyStyles';

// import styles from './styles.css';

const Button = (props) => {
  const { theme, ...otherProps } = props;  // eslint-disable-line no-use-before-define
  return (
    <button
      { ...otherProps }
      { ...applyStyles(theme.get('button')) }
    />
  );
};

export default Button;
