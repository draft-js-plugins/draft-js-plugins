import React from 'react';
import { Story, Meta } from '@storybook/react';

import AnchorSimpleLinkPluginEditor from './AnchorSimpleLinkPluginEditor';

export default {
  title: 'Anchor/Editor with Anchor Plugin',
  component: AnchorSimpleLinkPluginEditor,
} as Meta;

export const Default: Story = () => <AnchorSimpleLinkPluginEditor />;
