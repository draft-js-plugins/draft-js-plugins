import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleUndoEditor from './SimpleUndoEditor';

export default {
  title: 'Miscellaneous/Editor with undo plugin',
  component: SimpleUndoEditor
} as Meta;

export const Default: Story  = () => <SimpleUndoEditor />;
