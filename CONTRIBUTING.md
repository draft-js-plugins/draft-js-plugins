# Contributing

We are open to, and grateful for, any contributions made by you. By contributing to DraftJS Plugins, you agree to abide by the [code of conduct](https://github.com/draft-js-plugins/draft-js-plugins/blob/master/CODE_OF_CONDUCT.md).

## Reporting Issues and Asking Questions

Before opening an issue, please search the [issue tracker](https://github.com/draft-js-plugins/draft-js-plugins/issues) to make sure your issue hasn’t already been reported.

## Development

You must have [Node.js v5](https://nodejs.org/en/download/package-manager/) or later installed to develop DraftJS plugins. We mostly use the docs to hack & prototype new features. Get it up & running with:

```sh
npm install --global yarn
yarn install
yarn build
cd packages/docs
yarn install
yarn dev
```

## Linting

We follow the [Airbnb JavaScript Styleguide ](https://github.com/airbnb/javascript) with a few exeptions. Checkout the [.eslintrc](https://github.com/draft-js-plugins/draft-js-plugins/blob/master/.eslintrc) and [.flowconfig](https://github.com/draft-js-plugins/draft-js-plugins/blob/master/.flowconfig) to see the rules. With running this command you can check if your code-changes comply to the style we chose:

```sh
npm run lint
```

Do not hesitate to propose changes to the style. We are open to these as well.

## Testing

Please help us to improve the test-suite, by adding & updating tests together with your submission. While it's not mandatory it makes our lives way easier to review your changes and keep up the quality of the software.

Run all the tests via:

```sh
npm test
```

## Changelog

We keep a changelog for each released package. Please help us by adding your changes to the changelog. We follow the recommendations of [keepachangelog.com](http://keepachangelog.com/).

## Documentation

Independent improvements to the documentation are very welcome. I (Nik) would even argue that most of them are even more valuable than changes to the libraries themselves.

We are also happy about updates to the documentation in combination with changes.

## Using your own fork in your own development

Because of the structure of this repository you can not just use your own fork of draft-js-plugins in your own development projects. There are a few problems; first NPM doesn't allow referencing sub directories. So `"draft-js-plugins-editor": "<your github username>/draft-js-plugins-editor"` does not work. And secondly by specifying `"draft-js-plugins": "<your github username>/draft-js-plugins"` NPM does not get the sources for the different sub projects (I "Mark" don't know why). Thankfully [Yarn](https://yarnpkg.com/) does do this as expected. So to get your own fork working you need to follow the folling steps:

1. Add `"draft-js-plugins": "<your github username>/draft-js-plugins"` to your package files.

2. Install Yarn `npm install --global yarn` and install node modules `yarn install`

3. Reference the needed sub packages in your code f.ex. the plugin editor `import PluginEditor from '@draft-js-plugins/editor';`

4. When using Webpack you need to tell it how to compile the draft-js-plugins code, you do that by adding an additional loader like this:

```
module: {
  loaders: [{
    test: /\.js$/,
    loaders: 'babel-loader',
    include: [
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'editor', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'hashtag', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'linkify', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'mention', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'sticker', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'undo', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'emoji', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'drag-n-drop', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'drag-n-drop-upload', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'counter', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'focus', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'alignment', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'image', 'src'),
      path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'resizeable', 'src')
    ]
  }]
}
```

5. And you need to tell the compiler where to find the different draft-js-plugins modules

```
resolve: {
  alias: {
    '@draft-js-plugins/editor': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'plugins-editor', 'src'),
    '@draft-js-plugins/hashtag': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'hashtag', 'src'),
    '@draft-js-plugins/linkify': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'linkify', 'src'),
    '@draft-js-plugins/mention': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'mention', 'src'),
    '@draft-js-plugins/sticker': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'sticker', 'src'),
    '@draft-js-plugins/undo': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'undo', 'src'),
    '@draft-js-plugins/emoji': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'emoji', 'src'),
    '@draft-js-plugins/counter': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'counter', 'src'),
    '@draft-js-plugins/drag-n-drop': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'drag-n-drop', 'src'),
    '@draft-js-plugins/drag-n-drop-upload': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'drag-n-drop-upload', 'src'),
    '@draft-js-plugins/focus': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'focus', 'src'),
    '@draft-js-plugins/alignment': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'alignment', 'src'),
    '@draft-js-plugins/image': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'image', 'src'),
    '@draft-js-plugins/resizeable': path.join(__dirname, 'node_modules', 'draft-js-plugins', 'packages', 'resizeable', 'src')
  }
}
```

For your CSS loader in webpack, ensure you enable CSS modules:

```js
{
  test: /\.css$/,
  loaders: [
    'style-loader', 'css-loader?modules'
  ]
}
```

You'll need to use Babel Stage-0 if you aren't already. First, install it:

```bash
yarn add babel-preset-stage-0
```

Then use it as a preset when loading your JS:

```js
{
  test: /\.js$/,
  loader: 'babel-loader',
  query: {
    presets: ['es2015', 'react', 'stage-0'],
  },
}
```

## Publishing Github Pages (for the core team)

Run `./scripts/publishGithubPages.sh`

The `build` script renames the .babelrc files of all plugins to avoid issues with the build. In the future we might be able to remove this again.
