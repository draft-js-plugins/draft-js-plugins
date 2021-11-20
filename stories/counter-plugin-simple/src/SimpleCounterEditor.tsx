import React, { useState, useRef, ReactElement } from 'react';
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createCounterPlugin from '@draft-js-plugins/counter';
import editorStyles from './editorStyles.css';

const counterPlugin = createCounterPlugin();
const { CharCounter, WordCounter, LineCounter, CustomCounter } = counterPlugin;
const plugins = [counterPlugin];
const text = `This editor has counters below!
Try typing here and watch the numbers go up. 🙌

Note that the color changes when you pass one of the following limits:
- 200 characters
- 30 words
- 10 lines
`;

const SimpleCounterEditor = (): ReactElement => {
  const [editorState, setEditorState] = useState(
    createEditorStateWithText(text)
  );
  const editor = useRef<Editor>();

  const onChange = (value): void => {
    setEditorState(value);
  };

  const focus = (): void => {
    editor.current.focus();
  };

  const customCountFunction = (str: string): number => {
    const wordArray = str.match(/\S+/g); // matches words according to whitespace
    return wordArray ? wordArray.length : 0;
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
      <div>
        <CharCounter limit={200} /> characters
      </div>
      <div>
        <WordCounter limit={30} /> words
      </div>
      <div>
        <LineCounter limit={10} /> lines
      </div>
      <div>
        <CustomCounter limit={40} countFunction={customCountFunction} />
        <span> words (custom function)</span>
      </div>
      <br />
      <br />
    </div>
  );
};

export default SimpleCounterEditor;
