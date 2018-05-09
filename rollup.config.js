import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default [{
  // input: ['index.js', 'vendor.js'],
  input: 'index-rollup.js',
  output: {
    // dir: 'dist',
    file: 'dist/rollup.js',
    format: 'es',
    // sourcemap: true
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({
      jsnext: true,
      // customResolveOptions: {
      //   moduleDirectory: 'node_modules',
      // },
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  watch: {
    exclude: ['node_modules/**'],
  },
  // experimentalCodeSplitting: true,
}, {
  input: 'index-react.js',
  output: {
    file: 'dist/react.js',
    format: 'es',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    resolve({
      jsnext: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  watch: {
    exclude: ['node_modules/**'],
  },
}];
