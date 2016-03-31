import cleanupEmpty from './modifiers/cleanupEmpty';
import onDropFile from './modifiers/onDropFile';
import onDropBlock from './modifiers/onDropBlock';
import blockRendererFn from './blockRendererFn';
import Image from './Image';
import imageStyles from './imageStyles.css';
import { Map } from 'immutable';
import { EditorState } from 'draft-js';
import EventEmitter from './utils/eventEmitter';
import decorateComponentWithProps from 'decorate-component-with-props';

const defaultTheme = Map({
  imageWrapper: imageStyles.imageWrapper,
  image: imageStyles.image,
  imageButton: imageStyles.imageButton,
  imageLoader: imageStyles.imageLoader,

  // This is for block-alignment-wrapper, only temporarily living here
  left: imageStyles.left,
  center: imageStyles.center,
  right: imageStyles.right,
});

const uploadPlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme;

  const attachButtons = config.attachButtons !== false;

  const emitter = new EventEmitter();
  const blockRendererConfig = {
    ...config,
    emitter,
    Image: decorateComponentWithProps(config.Image || Image, { theme, attachButtons }),

    // This is for block-alignment-wrapper, only temporarily living here
    refreshEditorState: (editorState, onChange) => onChange(EditorState.forceSelection(editorState, editorState.getCurrentContent().getSelectionAfter())),
  };

  return {
    onChange: cleanupEmpty,
    blockRendererFn: blockRendererFn(blockRendererConfig),
    handleDroppedFiles: onDropFile(blockRendererConfig),
    handleDrop: onDropBlock(blockRendererConfig),
    addListener: emitter.addListener,
    removeListener: emitter.removeListener,
  };
};

export default uploadPlugin;
