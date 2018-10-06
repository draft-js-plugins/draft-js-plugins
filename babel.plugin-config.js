const fs = require('fs');
const path = require('path');
const camelcase = require('camelcase');

const pkg = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), './package.json'), 'utf-8')
);
const prefix = camelcase(pkg.name);

module.exports = {
  ignore: ['**/__test__/**'],
  presets: ['@babel/preset-react', '@babel/preset-flow', '@babel/preset-env'],
  plugins: ['@babel/plugin-proposal-class-properties'],
  env: {
    production: {
      plugins: [
        [
          './scripts/babel-plugin-css-private-classes.js',
          {
            localIdentName: `${prefix}__[local]__[hash:base64:5]`,
            dir: 'lib-css'
          }
        ]
      ]
    }
  }
};
