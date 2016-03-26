# DraftJS Mention Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin allows you to add stickers to your editor!

Usage:

```js
import createMentionPlugin from 'draft-js-mention-plugin';

const mentionPlugin = createMentionPlugin({ mentions });
```

## Importing the default styles

The plugin ships with a default styling available at this location in the installed package:
`node_modules/draft-js-mention-plugin/lib/plugin.css`.

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
import 'draft-js-mention-plugin/lib/plugin.css';
```

### Browserify Usage

TODO: PR welcome
