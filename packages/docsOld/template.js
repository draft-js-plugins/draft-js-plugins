/* eslint-disable react/no-danger */

const React = require('react');

const head = `<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
<meta property="og:locale" content="en_US" />
<meta property="og:type" content="website" />
<meta property="og:title" content="draft-js-plugins - High quality plugins for DraftJS with great UX" />
<meta property="og:description" content="Facebook's rich-text editor framework DraftJS built on top of React allows you to create powerful editors. We built a plugin architecture on top of it that aims to provide you with plug & play extensions. It comes with a set of plugins with great UX serving mobile & desktop as well as screen-readers. You can combine them in any way you want to or build your own." />
<meta property="og:url" content="https://www.draft-js-plugins.com" />
<meta property="og:site_name" content="draft-js-plugins" />
<meta property="og:image" content="https://www.draft-js-plugins.com/images/draft-js-plugins.png" />
<title>DraftJS Plugins - High quality plugins with great UX</title>
<script>
  if (window.location.href.indexOf('draft-js-plugins.github.io/draft-js-plugins') !== -1) {
    // TODO improve redirect to redirect with the proper path
    window.location.href = 'https://www.draft-js-plugins.com/';
  }
</script>
<link rel="stylesheet" href="/css/normalize.css"/>
<link rel="stylesheet" href="/css/base.css"/>
<link rel="stylesheet" href="/css/Draft.css"/>
<link rel="stylesheet" href="/app.css"/>
<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300" rel="stylesheet" type="text/css"/>
<link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css'>`;

const Html = ({
  bundle = '/app.js',
  body = '',
  // favicon = 'favicon.ico',
}) => (
  <html lang="en">
    <head dangerouslySetInnerHTML={{ __html: head }} />
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: body }} />
      <script src={bundle} />
    </body>
  </html>
);

module.exports = Html;
