function joinedUser(socket = null, io = null) {
    socket.on('joinedUser', ({ name }) => {
        if(name) {
            io.emit('joinedUserSendClient', ({ name }));
        }
    });
    }
    module.exports = joinedUser;