import { Entity } from 'draft-js';

const entityPropsPlugin = () => {
  return {
    blockRendererFn: (contentBlock) => {
      const entityKey = contentBlock.getEntityAt(0);
      const data = entityKey ? Entity.get(entityKey).data : {};
      return {
        props: {
          ...data,
        },
      };
    },
  };
};

export default entityPropsPlugin;
