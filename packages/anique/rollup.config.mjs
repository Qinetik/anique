import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import withSolid from "rollup-preset-solid";
import typescript from 'rollup-plugin-typescript2';
import multiEntry from "@rollup/plugin-multi-entry";
import pkg from './package.json' assert { type : "json" }
import path from "path";

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default withSolid([
  {
    input: "src/**/*",
    output: [
      {
        dir: path.dirname(pkg.module),
        preserveModules: true,
        preserveModulesRoot: path.resolve(__dirname, 'src'),
        format: 'esm',
        sourcemap: true,

      },
    ],
    plugins: [
      typescript(/*{ plugin options }*/),
      peerDepsExternal(),
      multiEntry({
        entryFileName : "[name].js"
      })
    ],
    external: ['solid-js/web'],
  }
])
