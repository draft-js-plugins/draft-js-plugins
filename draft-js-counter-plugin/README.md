# DraftJS Counter Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin adds character and word counting functionality to your editor!

## Usage

First instantiate the plugin:

```js
import createCounterPlugin from 'draft-js-counter-plugin';

const counterPlugin = createCounterPlugin();
```

Now get the `CharCounter` and the `WordCounter` components from the instance:

```JS
const { CharCounter, WordCounter } = undoPlugin;
```

Which take two props:

1. `editorState`: the current editor state.
2. `options`: a configuration object with the following options:
  - `limit`: the character or word limit that will cause the counter to change color
  - `limitColor`: the special color that will be applied when the character or word limit has been reached

Render them with those props and your editor now has counting functionality!

```HTML
<CharCounter editorState={ this.state.editorState } />
<WordCounter editorState={ this.state.editorState } />
```

## Importing the default styles

The plugin ships with a default styling available at this location in the installed package:
`node_modules/draft-js-counter-plugin/lib/plugin.css`.

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
    import 'draft-js-counter-plugin/lib/plugin.css';
    ```
4. Restart Webpack.

### Browserify Usage

TODO: PR welcome
