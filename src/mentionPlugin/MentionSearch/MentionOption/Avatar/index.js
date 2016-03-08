import React from 'react';
import styles from './styles';

const Avatar = ({ mention }) => {
  if (mention.has('avatar')) {
    return (
      <img src={ mention.get('avatar') } style={ styles.root } />
    );
  }

  return null;
};

export default Avatar;
