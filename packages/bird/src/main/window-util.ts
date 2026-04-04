import { 
    BrowserView , 
    BrowserWindow,
    type BrowserWindow as ElectronBrowserWindow} 
    from "electron";

const browserWindows = new Map<'Weaver'| 'HiddenBrowserWindow', ElectronBrowserWindow>();
let hiddenWindowIsBusy = false;


export function createWindow() : ElectronBrowserWindow {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    mainWindow.loadFile('src/ui/index.html');
    return mainWindow;
}
