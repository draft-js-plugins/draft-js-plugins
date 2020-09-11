import React from 'react';
import { storiesOf } from '@storybook/react';

import ResizableEditor from './resizable/src/ResizableEditor';
import AddImageEditor from './adding-images/src/AddImageEditor';
import CustomMentionEditor from './mentions-custom-styled/src/CustomMentionEditor';
import DividerWithSideToolbarEditor from './divider-with-side-toolbar/src/App';

storiesOf('Remaining/Plugins', module)
  .add('Editor with Image Plugin and Add mechanism', () => <AddImageEditor />)
  .add('Divider with SideToolbar', () => <DividerWithSideToolbarEditor />)
  .add('Editor with custom themed Mention Plugin', () => (
    <CustomMentionEditor />
  ))
  .add('Resizable Editor', () => <ResizableEditor />);
