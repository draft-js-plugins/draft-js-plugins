import onDropFile from './modifiers/onDropFile';
import onDropBlock from './modifiers/onDropBlock';
import decorator from './decorators/draggable';

const dndPlugin = (config = {}) => ({
  // Wrap all block-types with the draggable decorator
  blockRendererFn: (contentBlock, { }) => ({
    decorators: [decorator],
  }),
  // Handle file drops
  handleDroppedFiles: onDropFile(config),
  // Handle any other drops (mostly blocks dragged and dropped across editor)
  handleDrop: onDropBlock(config),
});

export default dndPlugin;
