/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration
 */

const config = {
    npmRebuild: false,
    appId: 'com.weaver.bird',
    productName: 'Bird',
    directories: {
        output: 'dist_electron',
        buildResources: 'assets',
    },
    files: [
        {
            from: 'dist',
            to: 'dist',
            filter: ['**/*'],
        },
        './package.json',
    ],
    extraMetadata: {
        main: 'entry.main.min.js',
    },
     mac: {
        target: 'dmg',
    },
     win: {
        target: 'nsis',
    },
     linux: {
        target: 'AppImage',
    },  

}
module.exports = config;