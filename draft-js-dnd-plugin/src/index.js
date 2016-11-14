import onDropFile from './modifiers/onDropFile';
import onDropBlock from './modifiers/onDropBlock';
import createDecorator from './createDecorator';

const store = {
  getReadOnly: undefined,
};

const dndPlugin = (config = {}) => ({
  initialize: ({ getReadOnly }) => {
    store.getReadOnly = getReadOnly;
  },
  // Handle file drops
  handleDroppedFiles: onDropFile(config),
  // Handle any other drops (mostly blocks dragged and dropped across editor)
  handleDrop: onDropBlock(config),
  decorator: createDecorator({ store }),
});

export default dndPlugin;
