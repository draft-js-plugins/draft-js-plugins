import React from 'react';
import { Story, Meta } from '@storybook/react';

import MentionMultiTriggers from './MentionMultiTriggers';

export default {
  title: 'Mentions/Mentions with multi triggers',
  component: MentionMultiTriggers,
} as Meta;

export const Default: Story = () => <MentionMultiTriggers />;
