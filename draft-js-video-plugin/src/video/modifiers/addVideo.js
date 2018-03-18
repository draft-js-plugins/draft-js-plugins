import {
  AtomicBlockUtils,
  RichUtils,
} from 'draft-js';

import * as types from '../constants';

import utils from '../utils';

const YOUTUBE_PREFIX = 'https://www.youtube.com/embed/';
const VIMEO_PREFIX = 'https://player.vimeo.com/video/';

const getIframeSrc = (src) => {
  const {
    isYoutube,
    getYoutubeSrc,
    isVimeo,
    getVimeoSrc,
  } = utils;
  if (isYoutube(src)) {
    const { srcID } = getYoutubeSrc(src);
    return `${YOUTUBE_PREFIX}${srcID}`;
  }
  if (isVimeo(src)) {
    const { srcID } = getVimeoSrc(src);
    return `${VIMEO_PREFIX}${srcID}`;
  }
  return undefined;
};

export default function addVideo(editorState, { src }) {
  if (RichUtils.getCurrentBlockType(editorState) === types.ATOMIC) {
    return editorState;
  }
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(
    types.VIDEOTYPE,
    'IMMUTABLE',
    { src: getIframeSrc(src) },
  );
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  return AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
}
