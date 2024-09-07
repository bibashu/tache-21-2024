// socket.js
let io;

module.exports = {
  init: (server) => {
    io = require('socket.io')(server);
    return io;
  },
  getIo: () => {
    if (!io) {
      throw new Error('Socket.io non initialisé !');
    }
    return io;
  },
};
