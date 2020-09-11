import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleMentionEditor from './SimpleMentionEditor';

export default {
  title: 'Mentions/Editor with Mention Plugin',
  component: SimpleMentionEditor,
} as Meta;

export const Default: Story = () => <SimpleMentionEditor />;
