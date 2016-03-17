import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import About from './components/About';
import HashtagPage from './components/HashtagPage';
import Wrapper from './components/Wrapper';

export const routes = (
  <Route path="/" title="App" component={Wrapper}>
    <IndexRoute component={HomePage} />
    <Route path="/" title="App" component={App}>
      <Route path="about" title="App - About" component={About} />
      <Route path="plugin/hashtag" title="App - Hashtag" component={HashtagPage} />
    </Route>
    <Route path="*" title="404: Not Found" component={NotFound} />
  </Route>
);

export default routes;
