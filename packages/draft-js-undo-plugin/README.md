# DraftJS Undo Plugin

*This is a plugin for the `draft-js-plugins-editor`.*

This plugin adds undo/redo functionality to your editor!

## Usage

First instantiate the plugin:

```js
import createUndoPlugin from 'draft-js-undo-plugin';

const undoPlugin = createUndoPlugin();
```

Now get the `UndoButton` and the `RedoButton` components from the instance:

```JS
const { UndoButton, RedoButton } = undoPlugin;
```

Which take two props, `onChange` (a function that takes a new editor state as an argument and updates your editor's state) and `editorState` (the current editor state). Render them with those props and your editor now has undo/redo functionality!

```HTML
<UndoButton onChange={ this.onChange } editorState={ this.state.editorState } />
<RedoButton onChange={ this.onChange } editorState={ this.state.editorState } />
```

## Importing the default styles

The plugin ships with a default styling available at this location in the installed package:
`node_modules/draft-js-undo-plugin/lib/plugin.css`.

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
    import 'draft-js-undo-plugin/lib/plugin.css';
    ```
4. Restart Webpack.

### Browserify Usage

TODO: PR welcome
