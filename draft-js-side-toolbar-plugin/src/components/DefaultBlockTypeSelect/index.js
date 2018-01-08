import React from 'react';

import {
  HeadlineOneButton,
  HeadlineTwoButton,
  BlockquoteButton,
  CodeBlockButton,
  UnorderedListButton,
  OrderedListButton,
} from 'draft-js-buttons';

import BlockTypeSelect from '../BlockTypeSelect';

const DefaultBlockTypeSelect = ({
  getEditorState,
  setEditorState,
  theme,
  store,
  wrapIcon,
  extra
}) => (
  <BlockTypeSelect
    getEditorState={getEditorState}
    setEditorState={setEditorState}
    theme={theme}
    structure={[
      HeadlineOneButton,
      HeadlineTwoButton,
      UnorderedListButton,
      OrderedListButton,
      BlockquoteButton,
      CodeBlockButton,
    ]}
    store={store}
    wrapIcon={wrapIcon}
    extra={extra}
  />
);

export default DefaultBlockTypeSelect;
