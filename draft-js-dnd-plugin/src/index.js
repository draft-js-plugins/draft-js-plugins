import onDropFile from './modifiers/onDropFile';
import onDropBlock from './modifiers/onDropBlock';

const dndPlugin = (config = {}) => ({
  handleDroppedFiles: onDropFile(config),
  handleDrop: onDropBlock(config),
});

export default dndPlugin;
