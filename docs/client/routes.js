import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/wrappers/App';
import Page from './components/wrappers/Page';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import Hashtag from './components/pages/Hashtag';
import Emoji from './components/pages/Emoji';
import Linkify from './components/pages/Linkify';
import Sticker from './components/pages/Sticker';
import Undo from './components/pages/Undo';
import Mention from './components/pages/Mention';
import Wysiwyg from './components/pages/Wysiwyg';
import Counter from './components/pages/Counter';
import Playground from './components/pages/Playground';
import AirToolbar from './components/pages/AirToolbar';

export const routes = (
  <Route path="/" title="App" component={App}>
    <IndexRoute component={Home} />
    <Route path="/" title="App" component={Page}>
      <Route path="plugin/hashtag" title="App - Hashtag" component={Hashtag} />
      <Route path="plugin/emoji" title="App - Emoji" component={Emoji} />
      <Route path="plugin/linkify" title="App - Linkify" component={Linkify} />
      <Route path="plugin/sticker" title="App - Sticker" component={Sticker} />
      <Route path="plugin/undo" title="App - Undo" component={Undo} />
      <Route path="plugin/mention" title="App - Mention" component={Mention} />
      <Route path="plugin/wysiwyg" title="App - Wysiwyg" component={Wysiwyg} />
      <Route path="plugin/counter" title="App - Counter" component={Counter} />
      <Route path="plugin/air-toolbar" title="App - AirToolbar" component={AirToolbar} />
    </Route>
    <Route path="playground" title="App - Development Playground" component={Playground} />
    <Route path="*" title="404: Not Found" component={NotFound} />
  </Route>
);

export default routes;
