import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife'
    },
    watch: {
        skipWrite: false,
        clearScreen: false,
        include: 'src/**/*',
    },
    plugins: [
        resolve({
            brower: true,         
        }),
        commonjs({
            sourceMap: false
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        terser()
    ]
};