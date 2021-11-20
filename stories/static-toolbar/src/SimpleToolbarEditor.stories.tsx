import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleToolbarEditor from './SimpleToolbarEditor';

export default {
  title: 'Toolbar/Simple toolbar editor',
  component: SimpleToolbarEditor,
} as Meta;

export const Default: Story = () => <SimpleToolbarEditor />;
