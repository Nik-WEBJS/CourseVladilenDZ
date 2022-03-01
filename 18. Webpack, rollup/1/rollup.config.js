import styles from "rollup-plugin-styles";
import image from 'rollup-plugin-img';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload'

export default {
    input: './app.js',
    output: {
      file: 'bundle.js',
      format: 'cjs'
    },
    watch: {},
    plugins: [
      styles(),
      image({
        limit: 10000
      }),
      babel({ babelHelpers: 'bundled' }),
      serve({open: true, host: 'localhost', port: 10001,}),
      livereload()
    ],
  };