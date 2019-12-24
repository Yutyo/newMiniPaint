console.log('miniPaint, the offline online image editor!');

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;
 function createWindow() {
   win = new BrowserWindow({width: 1000, height: 620, icon: path.join(__dirname + '/img/logo.png')});
   win.loadURL(url.format({
     pathname: path.join(__dirname, 'index.html'),
     protocol: 'file',
     slashes: true
   }));

   win.on('closed', () => {
     win = null;
   })
 }

 app.on('ready', createWindow);

 app.on('activate', () => {
   if (win === nul) {
     createWindow()
   }
 })
 electron.app.on('browser-window-created',function(e,window) {
     window.setMenu(null);
 });
