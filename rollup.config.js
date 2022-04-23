import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default [
    {
        input: 'src/core/base-component-1',
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'esm' },
        ],
        plugins: [
            del({ targets: ['dist/*'] }),
        ],
        external: Object.keys(pkg.peerDependencies || {}),
    },
];