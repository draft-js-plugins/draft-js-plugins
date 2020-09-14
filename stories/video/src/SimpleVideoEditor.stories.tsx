import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleVideoEditor from './SimpleVideoEditor';

export default {
  title: 'Video/Editor with Video Plugin',
  component: SimpleVideoEditor
} as Meta;

export const Default: Story  = () => <SimpleVideoEditor />;
