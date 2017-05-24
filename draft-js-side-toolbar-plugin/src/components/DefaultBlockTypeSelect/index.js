import React from 'react';

import {
  HeadlineOneButton,
  HeadlineTwoButton,
  BlockquoteButton,
  CodeBlockButton,
  UnorderedListButton,
  OrderedListButton,
  AddImageButton,
} from '../../../../draft-js-buttons/src/'; // eslint-disable-line import/no-unresolved

import BlockTypeSelect from '../BlockTypeSelect';

const DefaultBlockTypeSelect = ({ getEditorState, setEditorState, theme, store }) => {
  const structure = [
    HeadlineOneButton,
    HeadlineTwoButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
  ];

  if (store.getItem('addImageFile') !== undefined) {
    structure.push(AddImageButton);
  }

  return (
    <BlockTypeSelect
      getEditorState={getEditorState}
      setEditorState={setEditorState}
      theme={theme}
      store={store}
      structure={structure}
    />
  );
};

export default DefaultBlockTypeSelect;
