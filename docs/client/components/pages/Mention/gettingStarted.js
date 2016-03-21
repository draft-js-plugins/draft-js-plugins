// It is important to import the Editor which accepts plugins.
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin from 'draft-js-mention-plugin';
import React from 'react';
import { fromJS } from 'immutable';

// Creates an Instance. Passing a list of mentions as argument.
const mentions = fromJS([
  {
    name: 'Max Stoiber',
    link: 'https://twitter.com/mxstbr',
    avatar: 'https://pbs.twimg.com/profile_images/681114454029942784/PwhopfmU_400x400.jpg',
  },
  {
    name: 'Nik Graf',
    link: 'https://twitter.com/nikgraf',
    avatar: 'https://pbs.twimg.com/profile_images/535634005769457664/Ppl32NaN_400x400.jpeg',
  },
]);

const mentionPlugin = createMentionPlugin({ mentions });

// The Editor accept a list of plugins. In this case only the mentionPlugin is
// passed, while it is possible to pass in multiple plugins.
const MyEditor = ({ editorState, onChange }) => (
  <Editor
    editorState={ editorState }
    onChange={ onChange }
    plugins={ [mentionPlugin] }
  />
);

export default MyEditor;
