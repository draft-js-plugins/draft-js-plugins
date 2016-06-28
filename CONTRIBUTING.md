# Contributing

We are open to, and grateful for, any contributions made by you. By contributing to DraftJS Plugins, you agree to abide by the [code of conduct](https://github.com/draft-js-plugins/draft-js-plugins/blob/master/CODE_OF_CONDUCT.md).

## Reporting Issues and Asking Questions

Before opening an issue, please search the [issue tracker](https://github.com/draft-js-plugins/draft-js-plugins/issues) to make sure your issue hasn’t already been reported.

## Development

You must have [Node.js v5](https://nodejs.org/en/download/package-manager/) or later installed to develop DraftJS plugins. We mostly use the docs to hack & prototype new features. Get it up & running with:

```sh
npm install
cd docs
npm install
npm start
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

## Publishing Github Pages (for the core team)

Run `./scripts/publishGithubPages.sh`

The `build` script renames the .babelrc files of all plugins to avoid issues with the build. In the future we might be able to remove this again.

## Publishing NPM Package as Beta

Go into the package and run `npm publish --tag beta`
