import React from 'react';

import {
  HeadlineOneButton,
  HeadlineTwoButton,
  BlockquoteButton,
  CodeBlockButton,
  UnorderedListButton,
  OrderedListButton,
} from 'draft-js-buttons'; // eslint-disable-line import/no-unresolved

import BlockTypeSelect from '../BlockTypeSelect';

const DefaultBlockTypeSelect = ({ getEditorState, setEditorState, theme, store }) => (
  <BlockTypeSelect
    getEditorState={getEditorState}
    setEditorState={setEditorState}
    theme={theme}
    store={store}
    structure={[
      HeadlineOneButton,
      HeadlineTwoButton,
      UnorderedListButton,
      OrderedListButton,
      BlockquoteButton,
      CodeBlockButton,
    ]}
  />
);

export default DefaultBlockTypeSelect;
