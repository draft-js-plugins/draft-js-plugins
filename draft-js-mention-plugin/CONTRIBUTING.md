# Contributing

Working off your own fork? This plugin uses some tooling you might not necessarily have for your own project:

* Webpack
* CSS Modules
* Stage-0 Babel compilation.

## Webpack

You'll need Webpack to get it all working. Don't have webpack already? Consider adopting it for your project, because it's boss.

## CSS Modules

For your CSS loader in webpack, ensure you enable CSS modules:

```js
{
  test: /\.css$/,
  loaders: [
    'style', 'css?modules'
  ]
}
```

## Stage-0 Babel compilation

This plugin uses the latest and greatest from Babel, so you'll need to use Stage-0 if you aren't already. First, install it:

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
