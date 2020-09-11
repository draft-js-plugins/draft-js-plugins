import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');

  const requests = require.context('../stories', true, /\.stories\.tsx$/);

  requests.forEach(req => {
    req.keys().forEach(fname => req(fname));
  });
}

configure(loadStories, module);
