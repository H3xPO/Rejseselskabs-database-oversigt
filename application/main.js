const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;

// SET ENV
//process.env.NODE_END = 'production';

let mainWindow;
let addWindow;

// Listen for app to be ready
app.on('ready', function () {
    // Create new window
    loginWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Acces Database'
    });
    // Load html into window
    loginWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'loginWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    // Quit app when closed
    loginWindow.on('closed', function () {
        app.quit();
    })
})

// Handle create add window
function createMainWindow() {
    // Create new window
    addWindow = new BrowserWindow({
        title: 'Database Viewer'
    });
    // Load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    // Garbage collection handle
    addWindow.on('close', function () {
        addWindow = null;
    })
}