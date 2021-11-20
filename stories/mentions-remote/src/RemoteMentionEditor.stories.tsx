import React from 'react';
import { Story, Meta } from '@storybook/react';

import RemoteMentionEditor from './RemoteMentionEditor';

export default {
  title: 'Mentions/Editor with Mention Plugin and asynchronously loaded suggestions',
  component: RemoteMentionEditor,
} as Meta;

export const Default: Story = () => <RemoteMentionEditor />;
