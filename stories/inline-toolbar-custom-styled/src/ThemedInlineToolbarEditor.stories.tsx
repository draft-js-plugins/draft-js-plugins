import React from 'react';
import { Story, Meta } from '@storybook/react';

import ThemedInlineToolbarEditor from './ThemedInlineToolbarEditor';

export default {
  title: 'Inline Toolbar/Editor with custom themed toolbar plugin',
  component: ThemedInlineToolbarEditor,
} as Meta;

export const Default: Story = () => <ThemedInlineToolbarEditor />;
