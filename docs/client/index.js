import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';

// Since we're rendering static files don't forget to use browser history.
// Server's don't get the URL hash during a request.
import createBrowserHistory from 'history/lib/createBrowserHistory';

// Import your routes so that you can pass them to the <Router /> component
import routes from './routes.js';

// Only render in the browser
if (typeof document !== 'undefined') {
  render(
    <Router routes={routes} history={createBrowserHistory()} />,
    document.getElementById('root')
  );
}

// Export the routes here so that ReactStaticPlugin can access them and build
// the static files.
export * from './routes.js';
