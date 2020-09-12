import React from 'react';
import { Story, Meta } from '@storybook/react';

// @ts-ignore remove it when the file is migrated to ts
import DividerWithSideToolbarEditor from './App';

export default {
  title: 'Divider/Divider with side toolbar',
  component: DividerWithSideToolbarEditor,
} as Meta;

export const Default: Story = () => <DividerWithSideToolbarEditor />;
