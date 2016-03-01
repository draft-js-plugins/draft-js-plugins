import removeSticker from './modifiers/removeSticker';
import sticker from './Sticker';

export default (stickers) => (contentBlock, editorContext) => {
  const type = contentBlock.getType();
  if (type === 'sticker') {
    return {
      component: sticker(stickers),
      props: {
        onRemove: (blockKey) => {
          editorContext.onChange(removeSticker(editorContext.props.editorState, blockKey));
        },
      },
    };
  }

  return undefined;
};
