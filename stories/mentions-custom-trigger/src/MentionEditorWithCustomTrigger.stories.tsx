import React from 'react';
import { Story, Meta } from '@storybook/react';

import MentionEditorWithCustomTrigger from './MentionEditorWithCustomTrigger';

export default {
  title: 'Mentions/Mentions with a custom trigger',
  component: MentionEditorWithCustomTrigger,
} as Meta;

export const Default: Story = () => <MentionEditorWithCustomTrigger />;
