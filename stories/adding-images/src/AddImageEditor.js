import React, { useRef, useState } from 'react';

import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';

import createImagePlugin from '@draft-js-plugins/image';
import ImageAdd from './ImageAdd';

import editorStyles from './editorStyles.css';

const imagePlugin = createImagePlugin();
const plugins = [imagePlugin];

const text =
  'Click on the + button below and insert "/images/canada-landscape-small.jpg" to add the landscape image. Alternativly you can use any image url on the web.';

const CustomImageEditor = () => {
  const [editorState, setEditorState] = useState(
    createEditorStateWithText(text)
  );
  const editor = useRef();

  const onChange = (value) => {
    setEditorState(value);
  };

  const focus = () => {
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
      <ImageAdd
        editorState={editorState}
        onChange={onChange}
        modifier={imagePlugin.addImage}
      />
    </div>
  );
};

export default CustomImageEditor;
