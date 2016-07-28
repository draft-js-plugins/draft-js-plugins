import styles from '../../airToolbarStyles.css';
import createBlockStyleButton from '../../utils/createBlockStyleButton';

export default createBlockStyleButton({
  blockType: 'code-block',
  theme: styles,
  children: 'Code block',
});
