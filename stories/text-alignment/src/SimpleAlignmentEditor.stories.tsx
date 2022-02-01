import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleTextAlignmentEditor from './SimpleTextAlignmentEditor';

export default {
  title: 'TextAlignment/Simple Static toolbar',
  component: SimpleTextAlignmentEditor,
} as Meta;

export const Default: Story = () => <SimpleTextAlignmentEditor />;
