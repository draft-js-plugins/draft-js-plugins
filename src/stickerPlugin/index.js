import addSticker from './modifiers/addSticker';
import removeSticker from './modifiers/removeSticker';
import cleanupEmptyStickers from './modifiers/cleanupEmptyStickers';
import blockRendererFn from './blockRendererFn';
import sticker from './Sticker';
import stickerSelect from './StickerSelect';
import { fromJS } from 'immutable';
import stickerStyles from './Sticker/styles.css';
import stickerSelectStyles from './StickerSelect/styles.css';
import stickerOptionStyles from './StickerSelect/StickerOption/styles.css';
import decorateComponentWithProps from '../utils/decorateComponentWithProps';

const defaultStyles = fromJS({
  stickerSelect: stickerSelectStyles.root,
  popover: stickerSelectStyles.popover,
  removeSticker: stickerStyles.remove,
  stickerImage: stickerStyles.image,
  sticker: stickerStyles.root,
  closedPopover: stickerSelectStyles.closedPopover,
  selectButton: stickerSelectStyles.button,
  bottomGradient: stickerSelectStyles.bottomGradient,
  buttonPressed: stickerSelectStyles.pressedButton,
  stickerList: stickerSelectStyles.stickerList,
  icon: stickerSelectStyles.icon,
  buttonText: stickerSelectStyles.buttonText,
  stickerOption: stickerOptionStyles.root,
  stickerOptionImage: stickerOptionStyles.image,
});

const stickerPlugin = (config = {}) => {
  const theme = defaultStyles.merge(config.theme);
  return {
    pluginProps: {
      blockRendererFn: blockRendererFn(config),
      onChange: cleanupEmptyStickers,
    },
    add: addSticker,
    remove: removeSticker,
    Sticker: decorateComponentWithProps(sticker(config.stickers, config.attachRemoveButton), { theme }),
    StickerSelect: decorateComponentWithProps(stickerSelect(config.stickers), { theme }),
  };
};

export default stickerPlugin;
