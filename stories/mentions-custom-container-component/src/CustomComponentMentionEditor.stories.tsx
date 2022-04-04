import React from 'react';
import { Story, Meta } from '@storybook/react';

import CustomContainerComponentMentionEditor from './CustomContainerComponentMentionEditor';

export default {
  title: 'Mentions/Mentions with styled suggestions container',
  component: CustomContainerComponentMentionEditor,
} as Meta;

export const Default: Story = () => <CustomContainerComponentMentionEditor />;
