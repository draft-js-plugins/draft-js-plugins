import React from 'react';
import { Story, Meta } from '@storybook/react';

import RelativeParentInlineToolbarEditor from './RelativeParentInlineToolbarEditor';

export default {
  title: 'Inline Toolbar/Inline Toolbar with relatively positioned parent',
  component: RelativeParentInlineToolbarEditor,
} as Meta;

export const Default: Story = () => <RelativeParentInlineToolbarEditor />;
