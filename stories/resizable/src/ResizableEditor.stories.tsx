import React from 'react';
import { Story, Meta } from '@storybook/react';

import ResizeableEditor from './ResizableEditor';

export default {
  title: 'Resizeable/Resizeable editor',
  component: ResizeableEditor,
} as Meta;

export const Default: Story = () => <ResizeableEditor />;
