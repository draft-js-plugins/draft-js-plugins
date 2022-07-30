import React from 'react';
import { Story, Meta } from '@storybook/react';
import { convertFromRaw, EditorState } from 'draft-js';
import TableEditor from './TableEditor';

export default {
  title: 'Table/Editor with Table Plugin',
  component: TableEditor,
} as Meta;

const sample3x3Table = EditorState.createWithContent(
  convertFromRaw({
    entityMap: {},
    blocks: [
      {
        key: '9gm3s',
        text: 'Text before the table',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ov7rta',
        text: '',
        type: 'table',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 0,
            length: 1,
            key: 0,
          },
        ],
        data: {
          columns: 3,
        },
      },
      {
        key: 'ov7r11',
        text: 'Heading 1',
        type: 'th',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ov7r12',
        text: 'Heading 2',
        type: 'th',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ov7r13',
        text: 'Heading 3',
        type: 'th',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ov7r21',
        text: 'First Col In Row 1',
        type: 'th',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ov7r22',
        text: '2-2',
        type: 'td',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ov7r23',
        text: '2-3',
        type: 'td',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ov7r31',
        text: 'Alice',
        type: 'td',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ov7r32',
        text: 'Bob',
        type: 'td',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'ov7r33',
        text: 'Mary',
        type: 'td',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
      {
        key: 'e23a8',
        text: 'Text after the table',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  })
);

export const Sample3x3Table: Story = () => (
  <TableEditor initialState={sample3x3Table} />
);
