import esbuild , {type BuildOptions} from 'esbuild';
import pkg from './package.json' assert { type: 'json' };
import path from 'node:path';

interface Options {
    mode ?: 'production' | 'development';
    autoRestart ?: boolean;
}

const inspectPort = process.env.INSPECT_PORT || 9229;

export default async function build(options: Options) {
    const mode = options.mode || 'production';
    const __DEV__ = mode !== 'production';
    const PORT = pkg.dev['dev-server-port'];
    const autoRestart = options.autoRestart || false;

    const outdir = __DEV__ ? path.join(__dirname, 'src') : path.join(__dirname, 'build');



    const mainBuildOptions : BuildOptions = {
        entryPoints: ["./src/entry.main.ts"],
        outfile: path.join(outdir, 'entry.main.min.js'),
        bundle: true,
        platform: 'node',
        sourcemap: true,
        format: 'cjs',
        external: ['electron'
        ],
    };


    const main = esbuild.build(mainBuildOptions);

    return Promise.all([main]).catch((err) => {
        console.error(err);
        process.exit(1);
    });

}

const isMain = require.main === module;

if (isMain) {
    const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
    const autoRestart = process.argv.includes('--auto-restart');
    build({mode, autoRestart});
}