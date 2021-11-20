import React from 'react';
import { Story, Meta } from '@storybook/react';

import MentionsTriggerInTrigger from './MentionsTriggerInTrigger';

export default {
  title: 'Mentions/Editor where the trigger is used within mentions',
  component: MentionsTriggerInTrigger,
} as Meta;

export const Default: Story = () => <MentionsTriggerInTrigger />;
