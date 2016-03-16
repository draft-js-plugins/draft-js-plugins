import addSticker from './modifiers/addSticker';
import removeSticker from './modifiers/removeSticker';
import cleanupEmptyStickers from './modifiers/cleanupEmptyStickers';
import blockRendererFn from './blockRendererFn';
import sticker from './Sticker';
import stickerSelect from './StickerSelect';

const stickerPlugin = (config) => ({
  pluginProps: {
    blockRendererFn: blockRendererFn(config),
    onChange: cleanupEmptyStickers,
  },
  add: addSticker,
  remove: removeSticker,
  Sticker: sticker(config.stickers, config.hasRemove),
  StickerSelect: stickerSelect(config.stickers),
});

export default stickerPlugin;
