import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleCounterEditor from './SimpleCounterEditor';

export default {
  title: 'Miscellaneous/Editor With Counter Plugin',
  component: SimpleCounterEditor,
} as Meta;

export const Default: Story = () => <SimpleCounterEditor />;
