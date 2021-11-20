import React from 'react';
import { Story, Meta } from '@storybook/react';

import CustomInlineToolbarEditor from './CustomInlineToolbarEditor';

export default {
  title: 'Inline Toolbar/Editor with inline toolbar plugin containing all buttons',
  component: CustomInlineToolbarEditor,
} as Meta;

export const Default: Story = () => <CustomInlineToolbarEditor />;
