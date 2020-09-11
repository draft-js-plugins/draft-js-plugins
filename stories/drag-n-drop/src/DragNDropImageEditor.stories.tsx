import React from 'react';
import { Story, Meta } from '@storybook/react';

import DragNDropImageEditor from './DragNDropImageEditor';

export default {
  title: 'Image/Editor With DragNDrop Plugin And Image Plugin',
  component: DragNDropImageEditor,
} as Meta;

export const Default: Story = () => <DragNDropImageEditor />;
