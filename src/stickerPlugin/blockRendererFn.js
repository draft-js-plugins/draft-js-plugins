import removeSticker from './modifiers/removeSticker';
import sticker from './Sticker';

export default (config) => (contentBlock, editor) => {
  const type = contentBlock.getType();
  if (type === 'sticker') {
    return {
      component: (config.Sticker !== undefined ? config.Sticker : sticker(config.stickers, config.hasRemove)),
      props: {
        onRemove: (blockKey) => {
          editor.onChange(removeSticker(editor.props.editorState, blockKey));
        },
      },
    };
  }

  return undefined;
};
