import Video from './components/video';
import addBlock from './modifiers/addBlock';

const createVideoPlugin = (config = {}) => {
  const {
    sources,
    type = 'block-video',
    component = Video,
  } = config;

  return {
    handlePastedText: (text, html, { getEditorState, setEditorState }) => {
      let video = null;
      sources.forEach((source) => {
        if (text.match(source.regex) !== null) {
          video = source.prefix + text.match(source.regex)[source.videoKeyIndex];
        }
      });

      if (video !== null) {
        const editorState = getEditorState();
        const selection = editorState.getSelection();
        setEditorState(addBlock(editorState, selection, type, { video }));
        return true;
      }
      return false;
    },
    blockRendererFn: (contentBlock) => {
      const blockType = contentBlock.getType();

      if (blockType === type) {
        return {
          component,
        };
      }
      return false;
    },
  };
};

export default createVideoPlugin;
