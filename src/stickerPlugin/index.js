import addSticker from './modifiers/addSticker';
import removeSticker from './modifiers/removeSticker';
import cleanupEmptyStickers from './modifiers/cleanupEmptyStickers';
import blockRendererFn from './blockRendererFn';
import sticker from './Sticker';
import stickerSelect from './StickerSelect';

const stickerPlugin = (config) => ({
  add: addSticker,
  blockRendererFn: blockRendererFn(config), // standard plugin callback
  onChange: cleanupEmptyStickers, // standard plugin callback
  remove: removeSticker,
  Sticker: sticker(config.stickers, config.hasRemove),
  StickerSelect: stickerSelect(config.stickers),
});

export default stickerPlugin;
