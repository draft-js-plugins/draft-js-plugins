import React from 'react';
import { Story, Meta } from '@storybook/react';

import CustomAddVideoEditor from './CustomAddVideoEditor';

export default {
  title: 'Video/Editor with Video Plugin and Add Video Button',
  component: CustomAddVideoEditor
} as Meta;

export const Default: Story  = () => <CustomAddVideoEditor />;
