import '../styles/globals.css';
import '../styles/normalize.css';
import '../styles/draft.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ReactElement } from 'react';

export default function MyApp({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
