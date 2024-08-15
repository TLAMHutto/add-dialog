const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  // You can define methods here to interact with the main process
});
