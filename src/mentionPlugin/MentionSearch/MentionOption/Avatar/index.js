import React from 'react';
import styles from './styles.css';

const Avatar = ({ mention }) => {
  if (mention.has('avatar')) {
    return (
      <img src={ mention.get('avatar') } className={ styles.root } />
    );
  }

  return null;
};

export default Avatar;
