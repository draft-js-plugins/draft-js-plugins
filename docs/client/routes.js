import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Wrapper from './components/Wrapper';

export const routes = (
  <Route path="/" title="App" component={Wrapper}>
    <IndexRoute component={Home} />
    <Route path="/" title="App" component={App}>
      <Route path="about" title="App - About" component={About} />
    </Route>
    <Route path="*" title="404: Not Found" component={NotFound} />
  </Route>
);

export default routes;
