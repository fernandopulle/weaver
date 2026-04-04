import electron, { app, BrowserWindow, session } from 'electron';
import { isMac } from './common/constants';





app.on('ready', () => {
createWindow();    


    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

});

app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

app.on('quit', () => {
    console.log('Performing cleanup before quitting...');
});

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadFile('src/ui/index.html');

}
