import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default [
    {
        input: 'src/core/base-component-1.js',
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'esm' },
        ],
        plugins: [
            del({ targets: ['dist/*'] }),
            resolve(),
            babel({ 
                exclude: 'node_modules/**',
                presets: ['@babel/env', '@babel/preset-react']
            }),
            commonjs()
        ],
        external: Object.keys(pkg.peerDependencies || {}),
    },
];