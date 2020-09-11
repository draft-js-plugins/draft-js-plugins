import React from 'react';
import { Story, Meta } from '@storybook/react';

import CustomToolbarEditor from './CustomToolbarEditor';

export default {
  title: 'Toolbar/Custom toolbar editor',
  component: CustomToolbarEditor
} as Meta;

export const Default: Story  = () => <CustomToolbarEditor />;
