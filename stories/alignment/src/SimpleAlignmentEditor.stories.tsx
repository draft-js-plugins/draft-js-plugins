import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleAlignmentEditor from './SimpleAlignmentEditor';

export default {
  title: 'Miscellaneous/Editor With Alignment Plugin',
  component: SimpleAlignmentEditor,
} as Meta;

export const Default: Story = () => <SimpleAlignmentEditor />;
