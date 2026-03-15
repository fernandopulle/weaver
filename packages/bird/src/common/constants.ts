import { version } from "../../package.json";


const ENV = 'env';
const env = process[ENV];

export const getVersion = () => version;
export const getAppPlatform = () => process.platform;

export const isMac = () => getAppPlatform() === 'darwin';
export const isWindows = () => getAppPlatform() === 'win32';
export const isLinux = () => getAppPlatform() === 'linux';
