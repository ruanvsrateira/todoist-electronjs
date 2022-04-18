const { app, BrowserWindow } = require('electron');

const path = require('path')

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});


const createWindow = () => {
    const icon = path.resolve(__dirname, 'logo.png');
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: path.resolve(__dirname, 'assets', 'icon.png'),
    })
  
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})