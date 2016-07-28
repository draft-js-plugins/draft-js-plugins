import styles from '../../buttonStyles.css';
import createBlockStyleButton from '../../utils/createBlockStyleButton';

export default createBlockStyleButton({
  blockType: 'ordered-list-item',
  theme: styles,
  children: 'OL',
});
