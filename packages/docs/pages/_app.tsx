/* eslint-disable import/first */
import '../styles/globals.css';
import '../styles/normalize.css';
import '../styles/draft.css';

import '@draft-js-plugins/sticker/lib/plugin.css';
import '@draft-js-plugins/side-toolbar/lib/plugin.css';
import '@draft-js-plugins/inline-toolbar/lib/plugin.css';
import '@draft-js-plugins/static-toolbar/lib/plugin.css';
import '@draft-js-plugins/hashtag/lib/plugin.css';
import '@draft-js-plugins/linkify/lib/plugin.css';
import '@draft-js-plugins/mention/lib/plugin.css';
import '@draft-js-plugins/emoji/lib/plugin.css';
import '@draft-js-plugins/undo/lib/plugin.css';
import '@draft-js-plugins/image/lib/plugin.css';
import '@draft-js-plugins/focus/lib/plugin.css';
import '@draft-js-plugins/alignment/lib/plugin.css';

import 'prismjs/themes/prism.css';

import { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import Head from 'next/head';

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>DraftJS Plugins - High quality plugins with great UX</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
