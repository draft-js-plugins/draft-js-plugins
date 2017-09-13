import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SimpleAlignmentEditor from './Alignment/SimpleAlignmentEditor';

storiesOf('Alignment Plugin', module)
  .add('Simple ', () => <SimpleAlignmentEditor />);
