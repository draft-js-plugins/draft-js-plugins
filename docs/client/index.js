import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';

// Import your routes so that you can pass them to the <Router /> component
// eslint-disable-next-line import/no-named-as-default
import routes from './routes.js';

// Only render in the browser
if (typeof document !== 'undefined') {
  render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('root')
  );
}

// Export the routes here so that ReactStaticPlugin can access them and build
// the static files.
export * from './routes.js';
