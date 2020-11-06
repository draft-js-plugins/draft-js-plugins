import React from 'react';
import { Story, Meta } from '@storybook/react';

import CustomMentionEditor from './CustomMentionEditor';

export default {
  title: 'Mention/Editor with custom themed Mention Plugin',
  component: CustomMentionEditor,
} as Meta;

export const Default: Story = () => <CustomMentionEditor />;
