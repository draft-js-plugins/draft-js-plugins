import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import HomePage from './components/HomePage';
import About from './components/About';
import HashtagPage from './components/HashtagPage';
import EmojiPage from './components/EmojiPage';
import LinkifyPage from './components/LinkifyPage';
import StickerPage from './components/StickerPage';
import UndoPage from './components/UndoPage';
import MentionPage from './components/MentionPage';
import Wrapper from './components/Wrapper';

export const routes = (
  <Route path="/" title="App" component={Wrapper}>
    <IndexRoute component={HomePage} />
    <Route path="/" title="App" component={App}>
      <Route path="about" title="App - About" component={About} />
      <Route path="plugin/hashtag" title="App - Hashtag" component={HashtagPage} />
      <Route path="plugin/emoji" title="App - Emoji" component={EmojiPage} />
      <Route path="plugin/linkify" title="App - Linkify" component={LinkifyPage} />
      <Route path="plugin/sticker" title="App - Sticker" component={StickerPage} />
      <Route path="plugin/undo" title="App - Undo" component={UndoPage} />
      <Route path="plugin/mention" title="App - Mention" component={MentionPage} />
    </Route>
    <Route path="*" title="404: Not Found" component={NotFound} />
  </Route>
);

export default routes;
