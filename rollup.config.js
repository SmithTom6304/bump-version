import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';

const config = {
  input: "src/index.ts",
  output: {
    esModule: true,
    dir: 'dist',
    format: "es",
    sourcemap: true,
  },
  plugins: [commonjs(), nodeResolve({ preferBuiltins: true }), typescript()],
};

export default config;