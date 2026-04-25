const {contextBridge, ipcRender} = require("electron");

contextBridge.exposeInMainWorld("api", {
    navigate: (url) => ipcRender.send("navigate", url)
})