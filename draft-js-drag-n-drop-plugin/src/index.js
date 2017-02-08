import createDropHandler from './handleDrop';
import createDecorator from './createDecorator';

const createBlockDndPlugin = ({ onDrop }) => {
  const store = {
    getReadOnly: undefined,
  };

  return {
    initialize: ({ getReadOnly }) => {
      store.getReadOnly = getReadOnly;
    },
    decorator: createDecorator({ store }),
    // Handle blocks dragged and dropped across the editor
    handleDrop: createDropHandler({ onDrop }),
  };
};

export default createBlockDndPlugin;
