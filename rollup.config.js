import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default {
  input: {
    index: 'src/index.tsx'
  },
  output: {
    format: 'cjs',
    dir: './dist/',
    entryFileNames: '[name].js'
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'es2015'
        }
      }
    }),
    terser()
  ]
};
