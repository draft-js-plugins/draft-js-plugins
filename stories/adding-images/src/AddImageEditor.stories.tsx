import React from 'react';
import { Story, Meta } from '@storybook/react';

import AddImageEditor from './AddImageEditor';

export default {
  title: 'Image/Editor with Image Plugin and Add mechanism',
  component: AddImageEditor,
} as Meta;

export const Default: Story = () => <AddImageEditor />;
