import {
  AtomicBlockUtils,
  Entity,
  RichUtils,
} from 'draft-js';

import * as types from '../constants';

export default function addVideo(editorState, { scr }) {
  if (RichUtils.getCurrentBlockType(editorState) === types.ATOMIC) {
    return editorState;
  }

  const entityKey = Entity.create(
    types.VIDEOTYPE,
    'IMMUTABLE',
    {
      scr,
    }
  );
  return AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
}
