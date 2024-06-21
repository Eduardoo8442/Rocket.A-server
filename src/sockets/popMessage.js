
function popMessage(socket = null, io = null) {
    socket.on('popMessage', ({ idMessage }) => {
         io.emit('popMessageSendClient', ({ idMessage }));
    });
    }
    module.exports = popMessage;