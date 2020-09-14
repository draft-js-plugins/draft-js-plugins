import React from 'react';
import { Story, Meta } from '@storybook/react';

// @ts-ignore remove it when the file is migrated to ts
import CustomMentionEditor from './CustomMentionEditor';

export default {
  title: 'Mention/Editor with custom themed Mention Plugin',
  component: CustomMentionEditor,
} as Meta;

export const Default: Story = () => <CustomMentionEditor />;
