import React from 'react';
import { Story, Meta } from '@storybook/react';
import CustomImageEditor from './CustomImageEditor';

export default {
  title:
    'Image/Editor With Image Plugin And A Few Others DragAndDrop Alignment Resizable Focus',
  component: CustomImageEditor,
} as Meta;

export const Default: Story = () => <CustomImageEditor />;
