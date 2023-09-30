import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import withSolid from "rollup-preset-solid";
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json' assert { type : "json" }

const config = {
  name: 'qinetik-emotion',
  extensions: ['.ts', '.tsx'],
}

export default withSolid([
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript(/*{ plugin options }*/),
      peerDepsExternal(),
      resolve({ extensions: config.extensions }),
      babel({
        extensions: config.extensions,
        include: ['src/**/*'],
        exclude: 'node_modules/**',
      })
    ],
    external: ['solid-js/web'],
  },
  // {
  //   input: 'src/index.ts',
  //   output: [{ file: pkg.types, format: 'es' }],
  //   plugins: [typescript(/*{ plugin options }*/)],
  // },
])
