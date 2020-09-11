import React from 'react';
import { Story, Meta } from '@storybook/react';

import CustomComponentMentionEditor from './CustomComponentMentionEditor';

export default {
  title: 'Mentions/Mentions with styled suggestions',
  component: CustomComponentMentionEditor,
} as Meta;

export const Default: Story = () => <CustomComponentMentionEditor />;
