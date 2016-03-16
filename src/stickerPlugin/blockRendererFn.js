import removeSticker from './modifiers/removeSticker';
import sticker from './Sticker';

export default (config) => (contentBlock, getEditorState, updateEditorState) => {
  const type = contentBlock.getType();
  if (type === 'sticker') {
    return {
      component: (config.Sticker !== undefined ? config.Sticker : sticker(config.stickers, config.hasRemove)),
      props: {
        onRemove: (blockKey) => {
          updateEditorState(removeSticker(getEditorState(), blockKey));
        },
      },
    };
  }

  return undefined;
};
