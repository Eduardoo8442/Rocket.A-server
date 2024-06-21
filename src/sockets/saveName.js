function saveName(socket = null) {
    socket.on('saveName', ({name}) => {
    socket.data.name = name;
    });
    }
    module.exports = saveName;