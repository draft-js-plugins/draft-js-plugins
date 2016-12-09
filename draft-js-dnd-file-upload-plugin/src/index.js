import onDropFile from './modifiers/onDropFile';

const createDndFileUploadPlugin = (config = {}) => ({
  // Handle file drops
  handleDroppedFiles: onDropFile(config),
});

export default createDndFileUploadPlugin;
