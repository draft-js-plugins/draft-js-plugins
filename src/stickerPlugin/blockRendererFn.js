import removeSticker from './modifiers/removeSticker';

export default (config) => (contentBlock, getEditorState, updateEditorState) => {
  const type = contentBlock.getType();
  if (type === 'sticker') {
    return {
      component: config.Sticker,
      props: {
        onRemove: (blockKey) => {
          updateEditorState(removeSticker(getEditorState(), blockKey));
        },
      },
    };
  }

  return undefined;
};
