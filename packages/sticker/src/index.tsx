import React, { ComponentType, ReactElement, ReactNode } from 'react';
import { Map } from 'immutable';
import { EditorPlugin } from '@draft-js-plugins/editor';
import addSticker from './modifiers/addSticker';
import removeSticker from './modifiers/removeSticker';
import cleanupEmptyStickers from './modifiers/cleanupEmptyStickers';
import blockRendererFn from './blockRendererFn';
import Sticker, { StickerPubProps } from './Sticker';
import StickerSelect, { StickerSelectPubParams } from './StickerSelect';
import { defaultTheme, StickerPluginTheme } from './theme';

export type ImmutableStickerPluginItem = Immutable.Map<
  string,
  Immutable.Map<string, string>
>;
export type ImmutableDataStickerPluginItem = Immutable.Map<
  string,
  ImmutableStickerPluginItem
>;

export interface StickerPluginConfig {
  attachRemoveButton?: boolean;
  theme?: StickerPluginTheme;
  stickers: ImmutableDataStickerPluginItem;
  selectButtonContent?: ReactNode;
}

export default (
  config: StickerPluginConfig
): EditorPlugin & {
  add: typeof addSticker;
  remove: typeof removeSticker;
  StickerSelect: ComponentType<StickerSelectPubParams>;
} => {
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
  const DecoratedSticker = (props: StickerPubProps): ReactElement => (
    <Sticker
      {...props}
      attachRemoveButton={attachRemoveButton}
      stickers={stickers}
      theme={theme}
    />
  );
  const DecoratedStickerSelect = (
    props: StickerSelectPubParams
  ): ReactElement => (
    <StickerSelect
      {...props}
      selectButtonContent={selectButtonContent}
      stickers={stickers}
      theme={theme}
    />
  );
  return {
    blockRendererFn: blockRendererFn(DecoratedSticker),
    onChange: cleanupEmptyStickers,
    add: addSticker,
    remove: removeSticker,
    blockRenderMap: Map({ sticker: { element: 'div' } }),
    StickerSelect: DecoratedStickerSelect,
  };
};
