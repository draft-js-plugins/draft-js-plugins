import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleHashtagEditor from './SimpleHashtagEditor';

export default {
  title: 'Hashtag/Editor with Hashtag Plugin',
  component: SimpleHashtagEditor,
} as Meta;

export const Default: Story = () => <SimpleHashtagEditor />;
