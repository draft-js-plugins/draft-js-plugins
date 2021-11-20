import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleStickerEditor from './SimpleStickerEditor';

export default {
  title: 'Sticker/Editor with Sticker Plugin',
  component: SimpleStickerEditor,
} as Meta;

export const Default: Story = () => <SimpleStickerEditor />;
