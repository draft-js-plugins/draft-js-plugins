import React from 'react';
import { Story, Meta } from '@storybook/react';

import MentionEditorWithWhitespaceSupport from './MentionEditorWithWhitespaceSupport';

export default {
  title: 'Mentions/Mentions with whitespace',
  component: MentionEditorWithWhitespaceSupport,
} as Meta;

export const Default: Story = () => <MentionEditorWithWhitespaceSupport />;
