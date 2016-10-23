import styles from '../../inlineToolbarStyles.css';
import createBlockStyleButton from '../../utils/createBlockStyleButton';

export default createBlockStyleButton({
  blockType: 'header-one',
  theme: styles,
  children: 'H1',
});
