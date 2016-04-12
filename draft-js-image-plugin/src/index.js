import Image from './components/image';
import { EditorState, Entity } from 'draft-js';

const imagePlugin = () => {
  return {
    blockRendererFn: (contentBlock) => {
      const type = contentBlock.getType();
      if (type === 'block-image') {
        const entityKey = contentBlock.getEntityAt(0);
        const data = entityKey ? Entity.get(entityKey).data : {};
        return {
          component: Image,
          props: {
            ...data,
          },
        };
      } return undefined;
    },
  };
};

export default imagePlugin;
