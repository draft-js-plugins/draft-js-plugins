const fs = require('fs');
const path = require('path');
const child_process = require('child_process')
const { sync: matched } = require('matched');
const { sync: rimraf } = require('rimraf');

const root = process.argv[2];

let content = '';
matched('lib-css/**/*.css', { cwd: root }).forEach(file => {
  content += fs.readFileSync(file, 'utf-8');
});
fs.writeFileSync(path.join(root, 'lib', 'plugin.css'), content);
rimraf(path.join(root, 'lib-css'));
