const { app, BrowserWindow, NodeEventEmitter } = require('electron')

const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 760,
        frame: false,
        resizable: false,
        fullscreenable: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, 'preload.js'),
        }
    })
    //setTimeout(function(){ win.setSize(900, 740); }, 1200)

    win.loadFile('./web_content/index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})