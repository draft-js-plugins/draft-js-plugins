import React from 'react';
import { Story, Meta } from '@storybook/react';

import RelativeParentSideToolbarEditor from './RelativeParentSideToolbarEditor';

export default {
  title: 'Toolbar/Sidebar with relatively positioned parent',
  component: RelativeParentSideToolbarEditor,
} as Meta;

export const Default: Story = () => <RelativeParentSideToolbarEditor />;
