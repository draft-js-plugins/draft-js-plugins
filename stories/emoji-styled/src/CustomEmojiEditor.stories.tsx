import React from 'react';
import { Story, Meta } from '@storybook/react';

import CustomEmojiEditor from './CustomEmojiEditor';

export default {
  title: 'Emoji/Editor with Emoji Plugin using native emojis',
  component: CustomEmojiEditor
} as Meta;

export const Default: Story  = () => <CustomEmojiEditor />;
