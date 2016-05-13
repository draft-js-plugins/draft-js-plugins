import Decorator from './decorators/block-alignment';
import styles from './style.css';

// Block-Types to be handled will be stored here

const alignmentPlugin = config => {
  const theme = config.theme ? config.theme : styles;
  return { theme };
};

export default alignmentPlugin;
export const AlignmentDecorator = Decorator({ theme: styles });
