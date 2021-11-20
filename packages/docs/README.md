# DraftJS Plugins Docs

![Draft JS Plugins Logo](http://static.nikgraf.com/draft-js-plugins/draft-js-plugins.svg)

High quality plugins with great UX on top of [DraftJS](https://github.com/facebook/draft-js).

## Development

You must have [Node.js v5](https://nodejs.org/en/download/package-manager/) or later installed to develop DraftJS plugins. We use these docs to hack & prototype new features. Get it up & running with:

```sh
npm install --global yarn
yarn install
yarn build
cd docs
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the documentation.

## Publishing Github Pages (for the core team)

```sh
npm install --global yarn
yarn install
yarn build
cd docs
yarn deploy:gh-pages
```
