import onDropFile from './modifiers/onDropFile';
import onDropBlock from './modifiers/onDropBlock';
import wrapper from './components/block-draggable-wrapper';

const dndPlugin = (config = {}) => ({
  blockRendererFn: (contentBlock, { }) => ({
    decorators: [wrapper],
  }),
  handleDroppedFiles: onDropFile(config),
  handleDrop: onDropBlock(config),
});

export default dndPlugin;
