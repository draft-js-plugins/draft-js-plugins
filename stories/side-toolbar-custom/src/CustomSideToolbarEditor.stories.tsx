import React from 'react';
import { Story, Meta } from '@storybook/react';

import CustomSideToolbarEditor from './CustomSideToolbarEditor';

export default {
  title: 'Toolbar/Styled sidebar',
  component: CustomSideToolbarEditor,
} as Meta;

export const Default: Story = () => <CustomSideToolbarEditor />;
