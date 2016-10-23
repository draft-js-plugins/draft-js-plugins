import React from 'react';
import styles from '../../inlineToolbarStyles.css';
import createBlockStyleButton from '../../utils/createBlockStyleButton';

export default createBlockStyleButton({
  blockType: 'header-two',
  theme: styles,
  children: 'H2',
});
