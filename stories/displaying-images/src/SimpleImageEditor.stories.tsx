import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleImageEditor from './SimpleImageEditor';

export default {
  title: 'Image/Editor with Image Plugin',
  component: SimpleImageEditor,
} as Meta;

export const Default: Story = () => <SimpleImageEditor />;
