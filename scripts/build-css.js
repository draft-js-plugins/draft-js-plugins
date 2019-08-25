const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const { sync: matched } = require('matched');
const { sync: rimraf } = require('rimraf');

const root = process.argv[2];
const libCss = path.join(root, 'lib-css');

child_process.execSync(
  `yarn linaria "${path.join(root, 'src/**/*.js')}" -o ${libCss}`,
  { cwd: path.resolve('..'), stdio: 'inherit' }
);

let content = '';
matched('lib-css/**/*.css', { cwd: root }).forEach(file => {
  content += fs.readFileSync(file, 'utf-8');
});
fs.writeFileSync(path.join(root, 'lib', 'plugin.css'), content);
rimraf(libCss);
