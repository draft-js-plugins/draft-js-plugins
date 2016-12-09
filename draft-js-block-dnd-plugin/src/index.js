import onDropBlock from './modifiers/onDropBlock';
import createDecorator from './createDecorator';

const store = {
  getReadOnly: undefined,
};

const createBlockDndPlugin = (config = {}) => ({
  initialize: ({ getReadOnly }) => {
    store.getReadOnly = getReadOnly;
  },
  // Handle any other drops (mostly blocks dragged and dropped across editor)
  handleDrop: onDropBlock(config),
  decorator: createDecorator({ store }),
});

export default createBlockDndPlugin;
