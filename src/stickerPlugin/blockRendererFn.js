import removeSticker from './modifiers/removeSticker';
import sticker from './Sticker';

export default (stickers) => (contentBlock) => {
  const type = contentBlock.getType();
  if (type === 'sticker') {
    return {
      component: sticker(stickers),
      props: {
        onRemove: (blockKey) => {
          this.setState({
            editorState: removeSticker(this.state.editorState, blockKey),
          });
        },
      },
    };
  }

  return undefined;
};
