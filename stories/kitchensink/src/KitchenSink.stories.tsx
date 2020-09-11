import React from 'react';
import { Story, Meta } from '@storybook/react';

import KitchenSink from './KitchenSink';

export default {
  title: 'Miscellaneous/Kitchen sink',
  component: KitchenSink,
} as Meta;

export const Default: Story = () => <KitchenSink />;
