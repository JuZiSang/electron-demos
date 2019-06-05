/**
 * electron 启动文件，配置在 package.json main 字段
 */
const { app, BrowserWindow } = require('electron')

function createWindow () {
  const newWindow = new BrowserWindow({ width: 375, height: 667, title: 'Electron Demos' })
  newWindow.loadURL('http://localhost:8080/index.html')
}

app.on("ready", () => {
  createWindow()
})
