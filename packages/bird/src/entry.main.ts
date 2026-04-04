import electron, { app, BrowserWindow, session } from 'electron';
import { isMac } from './common/constants';
import * as windowUtils from './main/window-util';




app.on('ready', async() => {

    windowUtils.createWindow();


    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

});

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit();
    }
});

app.on('activate', (_error, hasVisibleWindows) => {
    if (!hasVisibleWindows) {
        try {
            windowUtils.createWindow();
        } catch (error) {
            console.error('Error creating window on activate:', error);
        }
    }
});

app.on('quit', () => {
    console.log('Performing cleanup before quitting...');
});

