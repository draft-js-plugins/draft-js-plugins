import addSticker from './modifiers/addSticker';
import removeSticker from './modifiers/removeSticker';
import cleanupEmptyStickers from './modifiers/cleanupEmptyStickers';
import blockRendererFn from './blockRendererFn';
import sticker from './Sticker';

export default (config) => ({
  add: addSticker,
  blockRendererFn: blockRendererFn(config.stickers), // standard
  cleanupStateOnChange: cleanupEmptyStickers, // standard
  remove: removeSticker,
  Sticker: sticker(config.stickers),
});

// TODO fix the remove when clickin on the icon
