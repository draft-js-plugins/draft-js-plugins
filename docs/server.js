/**
 * NOTE: This file must be run with babel-node as Node is not yet compatible
 * with all of ES6 and we also use JSX.
 */
import url from 'url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import express from 'express';
import webpack from 'webpack';

import config from './webpack.config.dev.js';

const Html = ({
  title = 'Rainbow Unicorns',
  bundle = '/app.js',
  body = '',
  stylesheet = '',
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      {stylesheet && <link rel="stylesheet" href={stylesheet} />}
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: body }} />
      <script src={bundle} />
    </body>
  </html>
);

/**
 * Render the entire web page to a string. We use render to static markup here
 * to avoid react hooking on to the document HTML that will not be managed by
 * React. The body prop is a string that contains the actual document body,
 * which react will hook on to.
 *
 * We also take this opportunity to prepend the doctype string onto the
 * document.
 *
 * @param {object} props
 * @return {string}
 */
const renderDocumentToString = props => {
  const markup = renderToStaticMarkup(<Html {...props} />);
  return `<!doctype html>${markup}`;
};

const app = express();
const compiler = webpack(config);

app.use('/css', express.static('publicTemplate/css'));
app.use('/images', express.static('publicTemplate/images'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

// Send the boilerplate HTML payload down for all get requests. Routing will be
// handled entirely client side and we don't make an effort to pre-render pages
// before they are served when in dev mode.
app.get('*', (req, res) => {
  const html = renderDocumentToString({
    bundle: `${config.output.publicPath}app.js`,
  });
  res.send(html);
});

// NOTE: url.parse can't handle URLs without a protocol explicitly defined. So
// if we parse '//localhost:8888' it doesn't work. We manually add a protocol even
// though we are only interested in the port.
const { port } = url.parse(`http:${config.output.publicPath}`);

app.listen(port, 'localhost', err => {
  if (err) return console.error(err); // eslint-disable-line no-console
  console.log(`Dev server listening at http://localhost:${port}`); // eslint-disable-line no-console

  return undefined;
});
