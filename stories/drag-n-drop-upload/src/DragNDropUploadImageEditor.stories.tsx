import React from 'react';
import { Story, Meta } from '@storybook/react';

import DragNDropImageEditor from './DragNDropImageEditorUpload';

export default {
  title: 'Image/Editor With DragNDrop Upload Plugin',
  component: DragNDropImageEditor,
} as Meta;

export const Default: Story = () => <DragNDropImageEditor />;
