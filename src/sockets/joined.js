function joined(io) {
io.on('connection', socket => {
    console.log('usuário', socket.id, 'entrou');
    require('./sendMessage')(socket, io);
    require('./usersList')(socket);
    require('./disconnect')(socket, io);
    require('./saveName')(socket);
    require('./joinedUser')(socket, io);
    require('./popMessage')(socket, io);
});
}
module.exports = joined;