/* eslint-disable quote-props */

import { RawDraftContentState } from 'draft-js';

// const text = `Once upon a time there was a new Editor. It was all about unicorns and supported features like #hashtags. It's creators like Jyoti, Nik or Julian could mentioned. Of course it also supports unicorn stickers like this one:
//
// Of course it also supports Emojis 🤓 🎉`;

export default {
  entityMap: {
    0: {
      type: 'IMAGE',
      mutability: 'IMMUTABLE',
      data: {
        src: '/images/canada-landscape-small.jpg',
      },
    },
  },
  blocks: [
    {
      key: '5ab2o',
      text:
        'You can add Emojis by typing colon : or mentions with an @. Add Stickers and undo your actions with the undo button below …',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '6u7zo',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '9gm3s',
      text:
        'Further you can have images in your text field. These images can be align and drag & dropped anywhere in the editor.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'ov7r',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0,
        },
      ],
      data: {},
    },
    {
      key: 'e23a8',
      text:
        'In addition rich text formatting tools are available to you in the sidebar, but also inline toolbar when selecting a text range.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
} as RawDraftContentState;
