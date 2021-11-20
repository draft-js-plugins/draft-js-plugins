import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleEmojiEditor from './SimpleEmojiEditor';

export default {
  title: 'Emoji/Editor with Emoji Plugin using emoji-one plugins',
  component: SimpleEmojiEditor,
} as Meta;

export const Default: Story = () => <SimpleEmojiEditor />;
