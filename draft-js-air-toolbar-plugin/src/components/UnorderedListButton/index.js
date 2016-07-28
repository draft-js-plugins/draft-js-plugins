import styles from '../../airToolbarStyles.css';
import createBlockStyleButton from '../../utils/createBlockStyleButton';

export default createBlockStyleButton({
  blockType: 'unordered-list-item',
  theme: styles,
  children: 'UL',
});
