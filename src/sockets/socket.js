require('dotenv').config();
function initSocket(server) {
const io = require('socket.io')(server, {
        cors: {
            origin: `${process.env.URLFRONT}`
        }
    })
    return io;
}

module.exports = initSocket;