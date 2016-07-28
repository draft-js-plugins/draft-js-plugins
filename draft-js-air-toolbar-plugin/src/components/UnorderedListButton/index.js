import styles from '../../buttonStyles.css';
import createBlockStyleButton from '../../utils/createBlockStyleButton';

export default createBlockStyleButton({
  blockType: 'unordered-list-item',
  theme: styles,
  children: 'UL',
});
