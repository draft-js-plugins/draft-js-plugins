import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleFocusEditor from './SimpleFocusEditor';

export default {
  title: 'Miscellaneous/Editor with Focus Plugin',
  component: SimpleFocusEditor,
} as Meta;

export const Default: Story = () => <SimpleFocusEditor />;
