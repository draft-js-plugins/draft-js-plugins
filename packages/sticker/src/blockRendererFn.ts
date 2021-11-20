import { ContentBlock } from 'draft-js';
import { PluginFunctions } from '@draft-js-plugins/editor';
import { ComponentType } from 'react';
import removeSticker from './modifiers/removeSticker';
import { StickerPubProps } from './Sticker';

export default (sticker: ComponentType<StickerPubProps>) => (
  contentBlock: ContentBlock,
  { getEditorState, setEditorState }: PluginFunctions
): unknown => {
  const type = contentBlock.getType();
  if (type === 'sticker') {
    return {
      component: sticker,
      props: {
        onRemove: (blockKey: string) => {
          setEditorState(removeSticker(getEditorState(), blockKey));
        },
      },
    };
  }

  return undefined;
};
