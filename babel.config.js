module.exports = {
  presets: ['@babel/env', '@babel/react', '@babel/flow'],
  plugins: [
    '@babel/proposal-class-properties',
    ['css-modules-transform', {
      "generateScopedName": "[name]__[local]___[hash:base64:5]",
      "extractCss": {
        "dir": "lib-css"
      }
    }]
  ]
}
