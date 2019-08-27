import React from 'react';
import { Map } from 'immutable';
import addSticker from './modifiers/addSticker';
import removeSticker from './modifiers/removeSticker';
import cleanupEmptyStickers from './modifiers/cleanupEmptyStickers';
import blockRendererFn from './blockRendererFn';
import Sticker from './Sticker';
import StickerSelect from './StickerSelect';
import { defaultTheme } from './theme.js';

export default (config = {}) => {
  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const theme = config.theme ? config.theme : defaultTheme;
  const stickers = config.stickers;
  const selectButtonContent = config.selectButtonContent
    ? config.selectButtonContent
    : '☺';

  // default to true if not explicitly set to false
  const attachRemoveButton = config.attachRemoveButton !== false;
  const DecoratedSticker = props => (
    <Sticker
      {...props}
      attachRemoveButton={attachRemoveButton}
      stickers={stickers}
      theme={theme}
    />
  );
  const DecoratedStickerSelect = props => (
    <StickerSelect
      {...props}
      selectButtonContent={selectButtonContent}
      stickers={stickers}
      theme={theme}
    />
  );
  const blockRendererConfig = {
    ...config,
    Sticker: DecoratedSticker,
  };
  return {
    blockRendererFn: blockRendererFn(blockRendererConfig),
    onChange: cleanupEmptyStickers,
    add: addSticker,
    remove: removeSticker,
    blockRenderMap: Map({ sticker: { element: 'div' } }),
    StickerSelect: DecoratedStickerSelect,
  };
};
