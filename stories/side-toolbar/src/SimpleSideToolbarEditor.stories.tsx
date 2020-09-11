import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleSideToolbarEditor from './SimpleSideToolbarEditor';

export default {
  title: 'Toolbar/Sidebar',
  component: SimpleSideToolbarEditor,
} as Meta;

export const Default: Story = () => <SimpleSideToolbarEditor />;
