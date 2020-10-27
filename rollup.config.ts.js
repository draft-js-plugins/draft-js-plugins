import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { existsSync } from 'fs';

const input = existsSync('./src/index.ts')
  ? './src/index.ts'
  : './src/index.tsx';
const external = id => !id.startsWith('.') && !path.isAbsolute(id);
const extensions = ['.ts', '.js', '.tsx', '.jsx'];

export default [
  {
    input,
    output: {
      format: 'cjs',
      file: './lib/index.cjs.js',
      exports: 'named',
    },
    external,
    plugins: [
      nodeResolve({ extensions }),
      babel({ rootMode: 'upward', extensions }),
    ],
  },
  {
    input,
    output: {
      format: 'esm',
      file: './lib/index.esm.js',
    },
    external,
    plugins: [
      nodeResolve({ extensions }),
      babel({
        extensions,
        rootMode: 'upward',
        plugins: [
          [
            'babel-plugin-transform-rename-import',
            {
              replacements: [{ original: 'lodash', replacement: 'lodash-es' }],
            },
          ],
        ],
      }),
    ],
  },
];
