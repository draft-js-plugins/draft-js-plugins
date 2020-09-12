import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleLinkifyEditor from './SimpleLinkifyEditor';

export default {
  title: 'Linkify/Editor with Linkify Plugin',
  component: SimpleLinkifyEditor,
} as Meta;

export const Default: Story = () => <SimpleLinkifyEditor />;
