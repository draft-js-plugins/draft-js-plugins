import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleInlineToolbarEditor from './SimpleInlineToolbarEditor';

export default {
  title: 'Inline Toolbar/Editor with default inline toolbar plugin',
  component: SimpleInlineToolbarEditor,
} as Meta;

export const Default: Story = () => <SimpleInlineToolbarEditor />;
