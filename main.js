const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;

// SET ENV
//process.env.NODE_END = 'production';

// Access password
const password = '1234';

let mainWindow;

// Listen for app to be ready
app.on('ready', function () {
    // Create new window
    mainWindow = new BrowserWindow({
        title: 'Acces Database',
        width: 800,
        height: 800
    });

    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/login.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Quit app when closed
    mainWindow.on('closed', function () {
        app.quit();
    })

    // Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert Menu
    Menu.setApplicationMenu(mainMenu);
})

// Login hanlder ( ipc call: 'login' )
ipcMain.on('login',function(e, pw){
    if(pw == password){
        console.log('Acces Granted...')
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'src/main.html'),
            protocol: 'file:',
            slashes: true
        }))
    }
    else{
        console.log('Acces Denied...')
        e.sender.send('login', 'Acces denied, try again!');        
    }
})

// Form data grabber via ( ipc call: 'formdata' )
ipcMain.on('formdata',function(e, formData){
    const newData = formData
    console.log(newData);
})

// Data from sqlite3
/*const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('rejse.db');

//const data = 'test';

// Send data to main.html via IPC:table
ipcMain.on('table',function(e){
    console.log('Table Start modtaget');
    db.serialize(function () {
        db.each("SELECT * FROM rejser", function (err, row) {
            console.log(row.idtravle + " " + row.hotel);
            e.sender.send('table', row.location);
        });
    });
    db.close();

    //e.sender.send('table', data);
})*/
    


// Change URL: Main ( ipc call: 'main' )
ipcMain.on('main', function(e) {
    console.log('Directed to main.html')
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/main.html'),
        protocol: 'file:',
        slashes: true
    }))
})

// Change URL: Add Data ( ipc call: 'adddata' )
ipcMain.on('adddata',function(e){
    console.log('Directed to add.html')
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/add.html'),
        protocol: 'file:',
        slashes: true
    }))
})

// Change URL: Login ( ipc call: 'logout' )
ipcMain.on('logout', function(e) {
    console.log('Directed to login.html')
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'src/login.html'),
        protocol: 'file:',
        slashes: true
    }))
})


// Create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Item',
                click() {
                    createAddWindow();
                }
            },
            {
                label: 'Clear Items',
                click() {
                    mainWindow.webContents.send('item:clear');
                }
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' :
                    'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    }
];

// If mac, add empty object to menu
if (process.platform == 'darwin') {
    mainMenuTemplate.unshift({});
}

// Add developer tools item if not in production
if (process.env.NODE_END !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' :
                    'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}


/*const mysql = require('mysql');

// Add the credentials to access your database
const connection = mysql.createConnection({
    host: 'localhost:3306',
    user: 'root',
    password: null, // or the original password : 'apaswword'
    database: 'ourcodeworld-database'
});

// connect to mysql
connection.connect(function (err) {
    // in case of error
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
        break;
    }
    else console.log('Connected to MySQL Database');
});

// Close the connection
connection.end(function () {
    console.log('Disconnected form MySQL Database')
    // The connection has been closed
});*/
