// It is important to import the Editor which accepts plugins.
import Editor from 'draft-js-plugins-editor';
import createStickerPlugin from 'draft-js-sticker-plugin';
import React from 'react';

// Creates an Instance. Passing a list of stickers as argument.
const stickers = fromJS({
  data: {
    'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b': {
      id: 'b3aa388f-b9f4-45b0-bba5-d92cf2caa48b',
      url: '../images/unicorn-4.png',
    },
    'adec3f13-823c-47c3-b4d1-be4f68dd9d6d': {
      id: 'adec3f13-823c-47c3-b4d1-be4f68dd9d6d',
      url: '../images/unicorn-1.png',
    },
  },
});

const stickerPlugin = createStickerPlugin({ stickers });

// The Editor accept a list of plugins. In this case only the stickerPlugin is
// passed, while it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <Editor
    editorState={ editorState }
    onChange={ onChange }
    plugins={ [stickerPlugin] }
  />
);

export default MyEditor;
