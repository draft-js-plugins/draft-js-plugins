import removeSticker from './modifiers/removeSticker';
import sticker from './Sticker';

export default (stickers) => (contentBlock, editor) => {
  const type = contentBlock.getType();
  if (type === 'sticker') {
    return {
      component: sticker(stickers),
      props: {
        onRemove: (blockKey) => {
          editor.onChange(removeSticker(editor.props.editorState, blockKey));
        },
      },
    };
  }

  return undefined;
};
