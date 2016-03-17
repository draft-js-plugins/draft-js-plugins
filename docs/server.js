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
  title = 'DraftJS Plugins (including the ultimate Unicorn Editor)',
  bundle = '/app.js',
  body = '',
  stylesheet = '',

  // googleAnalytics = `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  // })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  // ga('create', 'UA-75176147-1', 'auto');
  // ga('send', 'pageview');`,

  // <script>
  //   { googleAnalytics }
  // </script>

}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      <title>{title}</title>
      <link rel="stylesheet" href="css/normalize.css" />
      <link rel="stylesheet" href="css/base.css" />
      <link rel="stylesheet" href="css/Draft.css" />
      { stylesheet && <link rel="stylesheet" href={stylesheet} /> }
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300" rel="stylesheet" type="text/css" />
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
