import React from 'react';
import { Story, Meta } from '@storybook/react';

import CustomLinkifyEditor from './CustomLinkifyEditor';

export default {
  title: 'Linkify/Editor with Linkify Plugin and configured to render links with target blank',
  component: CustomLinkifyEditor
} as Meta;

export const Default: Story  = () => (
  <CustomLinkifyEditor />
);
