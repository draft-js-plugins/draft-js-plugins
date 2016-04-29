import Image from './components/image';
import { EditorState, Entity } from 'draft-js';
import styles from './style.css';
import decorateComponentWithProps from './utils/decorateWithProps';

const defaultTheme = {
  ...styles,
};

const imagePlugin = config => {
  const theme = config.theme ? config.theme : defaultTheme;
  return {
    // Handle 'block-image' block-type with Image component
    blockRendererFn: (contentBlock) => {
      const type = contentBlock.getType();
      if (type === 'block-image') {
        // Feed entity data to block-component's props
        const entityKey = contentBlock.getEntityAt(0);
        const data = entityKey ? Entity.get(entityKey).data : {};
        return {
          component: decorateComponentWithProps(Image, { theme, ...data })
        };
      } return undefined;
    },
  };
};

export default imagePlugin;
