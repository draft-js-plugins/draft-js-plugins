import React, { useState, useRef, ReactElement } from 'react';
import { convertFromRaw, EditorState } from 'draft-js';
import Editor, { composeDecorators } from '@draft-js-plugins/editor';
import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';
import createImagePlugin from '@draft-js-plugins/image';
import createFocusPlugin from '@draft-js-plugins/focus';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import createDragNDropUploadPlugin from '@draft-js-plugins/drag-n-drop-upload';
import editorStyles from './editorStyles.css';

// Plugins
const blockDndPlugin = createBlockDndPlugin();
const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const decorator = composeDecorators(
  focusPlugin.decorator,
  blockDndPlugin.decorator,
  resizeablePlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

/*
*
* @name: handleUpload
* @desc: Custom file upload function.
* @param {param type} data - (){})
* @param {param type} success - successful upload
* @param {param type} failed - failed to upload files.
* @param {param type} progress - handle progress.
*/
const customUpload = async (data, success /*, failed, progress*/):void => {
 //console.log("::::");
 //console.log(files);
 //console.log("Uploading file");
 /*const UPLOAD_URL = "";
 const options = {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ title: 'Fetch POST Request Example' })
 }
 const response = await fetch(UPLOAD_URL, options);
 return response.json();*/

 //fetch(UPLOAD_URL, options);
 const files = [{
   src: 'https://www.wired.com/wp-content/uploads/2015/06/15DAY2jc_7247.jpg'
 }]; 
 setTimeout(() => {
   success(files, { retainSrc: true });
 }, 3000);

}

const dndFileUploadPlugin = createDragNDropUploadPlugin({
  handleUpload: customUpload,
  addImage: imagePlugin.addImage
});

const plugins = [
  blockDndPlugin,
  focusPlugin,
  imagePlugin,
  resizeablePlugin,
  dndFileUploadPlugin
];

/* eslint-disable */
const initialState = {
  entityMap: {
    '0': {
      type: 'IMAGE',
      mutability: 'IMMUTABLE',
      data: {
        src: '/images/canada-landscape-small.jpg',
      },
    },
  },
  blocks: [
    {
      key: '9gm3s',
      text:
        'You can have images in your text field which are draggable. Hover over the image press down your mouse button and drag it to another position inside the editor.',
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
        'You can checkout the alignment tool plugin documentation to see how to build a compatible block plugin …',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};
/* eslint-enable */

const CustomImageEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(initialState))
  );

  const onChange = (value): void => {
    setEditorState(value);
  };

  const editor = useRef<Editor>();

  const focus = (): void => {
    editor.current.focus();
  };

  return (
    <div>
      <div className={editorStyles.editor} onClick={focus}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          plugins={plugins}
          ref={(element) => {
            editor.current = element;
          }}
        />
      </div>
    </div>
  );
};

export default CustomImageEditor;
