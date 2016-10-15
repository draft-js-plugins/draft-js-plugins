import {
  AtomicBlockUtils,
  Entity,
  RichUtils,
} from 'draft-js';

import * as customType from '../constants';

export default function addVideo(editorState, { srcType, srcID, url }) {
  if (RichUtils.getCurrentBlockType(editorState) === 'atomic') {
    return editorState;
  }

  const entityKey = Entity.create(
    'TOKEN',
    'IMMUTABLE',
    {
      type: customType.VIDEOTYPE,
      srcType,
      srcID,
      url,
    }
  );
  return AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' ');
}
