import React from 'react';
import { Story, Meta } from '@storybook/react';

import ThemedToolbarEditor from './ThemedToolbarEditor';

export default {
  title: 'Toolbar/Themed toolbar editor',
  component: ThemedToolbarEditor,
} as Meta;

export const Default: Story = () => <ThemedToolbarEditor />;
