import  type { IpcMainEvent, IpcMainInvokeEvent } from "electron";
import { ipcMain } from "electron";
import { channel } from "node:diagnostics_channel";

// IPC channels 

export type MainOnChannels = 
|'clear'
|'start';

export const ipcMainOn = (
    channel: MainOnChannels,
    listener: (event: IpcMainEvent, ...args: any[]) => void
) => ipcMain.on(channel, listener);


export type OnceChannels = 'secondAfterAppStarted';

export const ipcMainOnce = (
    channel: OnceChannels,
    listener: (event: IpcMainEvent, ...args: any[]) => void
) => ipcMain.once(channel, listener);


export type HandleChannels = 
|'getAppVersion'
|'backup';

export const ipcMainHadle = (
    channel: HandleChannels,
    listener: (event: IpcMainInvokeEvent, ...args: any[]) => Promise<any> | any
) => ipcMain.handle(channel, listener);








