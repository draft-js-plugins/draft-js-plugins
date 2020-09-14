import React from 'react';
import { Story, Meta } from '@storybook/react';

import CustomHashtagEditor from './CustomHashtagEditor';

export default {
  title: 'Hashtag/Editor with custom themed Hashtag Plugin',
  component: CustomHashtagEditor,
} as Meta;

export const Default: Story = () => <CustomHashtagEditor />;
