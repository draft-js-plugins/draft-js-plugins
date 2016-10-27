import React from 'react';
import HeaderOneButton from '../../../../draft-js-inline-toolbar-plugin/src/components/HeaderOneButton';
import HeaderTwoButton from '../../../../draft-js-inline-toolbar-plugin/src/components/HeaderTwoButton';
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
      HeaderOneButton,
      HeaderTwoButton,
      UnorderedListButton,
      OrderedListButton,
      BlockquoteButton,
      CodeBlockButton,
    ]}
  />
);

export default DefaultBlockTypeSelect;
