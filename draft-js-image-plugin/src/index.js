import Image from './components/image';
import styles from './style.css';

const imagePlugin = config => {
  const type = config.type || 'block-image';
  const theme = config.theme ? config.theme : styles;
  const component = config.component || Image({ theme });
  return {
    // Handle 'block-image' block-type with Image component
    blockRendererFn: (contentBlock) => {
      const blockType = contentBlock.getType();
      if (blockType === type) {
        return {
          component
        };
      } return undefined;
    },
  };
};

export default imagePlugin;
export const imageCreator = Image;
export const imageStyles = styles;
