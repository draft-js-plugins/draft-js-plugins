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
    blockRendererFn: (contentBlock) => {
      const type = contentBlock.getType();
      if (type === 'block-image') {
        const entityKey = contentBlock.getEntityAt(0);
        const data = entityKey ? Entity.get(entityKey).data : {};
        return {
          component: decorateComponentWithProps(Image, { theme }),
          props: {
            ...data,
          },
        };
      } return undefined;
    },
  };
};

export default imagePlugin;
