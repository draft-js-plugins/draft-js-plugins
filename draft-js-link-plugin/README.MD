# DraftJS Link Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin is meant to provide a base strategy and a base react component to decorate links in draft-js

## Usage

```js
import createLinkPlugin from 'draft-js-link-plugin';

const linkPlugin = createLinkPlugin({
  component: MyReactComponent, // component to represents links default is a basic <a>
  type: 'LINK', // entity type for links default 'LINK'
  urlKey: 'url' // key in the data hash of the entity where the url can be found, default: 'url'
  theme: // a css module style object the class for default component is .link
  target: // target for the default component (default: _blank)
  rel: // rel attribute for default component (default: noopener noreferrer)
});
```

## Importing the default styles

The plugin ships with a default styling available at this location in the installed package:
`node_modules/draft-js-link-plugin/lib/plugin.css`.

### Webpack Usage

### Webpack Usage
Follow the steps below to import the css file by using Webpack's `style-loader` and `css-loader`.

1. Install Webpack loaders: `npm install style-loader css-loader --save-dev`
2. Add the below section to Webpack config (if your Webpack already has loaders array, simply add the below loader object(`{test:foo, loaders:bar[]}`) as an item in the array).

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

3. Add the below import line to your component to tell Webpack to inject style to your component.

    ```js
    import 'draft-js-link-plugin/lib/plugin.css';
    ```
4. Restart Webpack.


### Browserify Usage

TODO: PR welcome
