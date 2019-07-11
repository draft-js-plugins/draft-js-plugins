const fs = require('fs');
const path = require('path');
const { sync: matched } = require('matched');

const root = process.argv[2];
let content = '';
matched(path.join(root, 'lib-css/**/*.css')).forEach(file => {
  content += fs.readFileSync(file, 'utf-8');
});
fs.writeFileSync(path.join(root, 'lib', 'plugin.css'), content);
