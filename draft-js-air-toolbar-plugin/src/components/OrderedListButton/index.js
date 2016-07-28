import styles from '../../airToolbarStyles.css';
import createBlockStyleButton from '../../utils/createBlockStyleButton';

export default createBlockStyleButton({
  blockType: 'ordered-list-item',
  theme: styles,
  children: 'OL',
});
