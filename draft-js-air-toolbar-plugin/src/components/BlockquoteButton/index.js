import styles from '../../airToolbarStyles.css';
import createBlockStyleButton from '../../utils/createBlockStyleButton';

export default createBlockStyleButton({
  blockType: 'blockquote',
  theme: styles,
  children: '"',
});
