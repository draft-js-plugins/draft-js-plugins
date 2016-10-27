import React from 'react';
import HeadlineOneButton from '../../../../draft-js-inline-toolbar-plugin/src/components/HeadlineOneButton';
import HeadlineTwoButton from '../../../../draft-js-inline-toolbar-plugin/src/components/HeadlineTwoButton';
import BlockquoteButton from '../../../../draft-js-inline-toolbar-plugin/src/components/BlockquoteButton';
import CodeBlockButton from '../../../../draft-js-inline-toolbar-plugin/src/components/CodeBlockButton';
import UnorderedListButton from '../../../../draft-js-inline-toolbar-plugin/src/components/UnorderedListButton';
import OrderedListButton from '../../../../draft-js-inline-toolbar-plugin/src/components/OrderedListButton';
import BlockTypeSelect from '../BlockTypeSelect';

const DefaultBlockTypeSelect = ({ getEditorState, setEditorState }) => (
  <BlockTypeSelect
    getEditorState={getEditorState}
    setEditorState={setEditorState}
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
