import url from 'url';
import express from 'express';
import webpack from 'webpack';
import config from './webpack.config.dev';
import html from './index.html';

const app = express();
const compiler = webpack(config);

app.use('/css', express.static('publicTemplate/css'));
app.use('/images', express.static('publicTemplate/images'));
app.use('/data', express.static('publicTemplate/data'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

// Send the boilerplate HTML payload down for all get requests. Routing will be
// handled entirely client side and we don't make an effort to pre-render pages
// before they are served when in dev mode.
app.get('*', (req, res) => {
  const output = html();
  res.send(output);
});

// NOTE: url.parse can't handle URLs without a protocol explicitly defined. So
// if we parse '//localhost:8888' it doesn't work. We manually add a protocol even
// though we are only interested in the port.
const { port } = url.parse(`http:${config.output.publicPath}`);

app.listen(port, 'localhost', (err) => {
  if (err) return console.error(err); // eslint-disable-line no-console
  console.log(`Dev server listening at http://localhost:${port}`); // eslint-disable-line no-console

  return undefined;
});
