# DraftJS Linkify Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin turns hyperlinks in the text to highlighted, clickable anchor tags!

## Usage

```js
import createLinkifyPlugin from 'draft-js-linkify-plugin';

const linkifyPlugin = createLinkifyPlugin();
```

## Importing the default styles

The plugin ships with a default styling available at this location in the installed package:
`node_modules/draft-js-linkify-plugin/lib/plugin.css`.

### Webpack Usage

You can import the css file by using the `style-loader` and `css-loader`. For example you can add this to your webpack config:

```js
module: {
  loaders: [{
    test: /\.css$/,
    loaders: [
      'style', 'css'
    ]
  }]
}
```

and then import the styles:

```js
import 'draft-js-linkify-plugin/lib/plugin.css';
```

### Browserify Usage

TODO: PR welcome
