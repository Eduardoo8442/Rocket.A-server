const GetUsers = require('../models/tableSchema');
function usersList(socket = null) {
socket.on('usersList', async () => {
try {
    const data = await GetUsers.find();
    socket.emit('receiveListUsers', { data });
} catch(e) {
   console.log('Erro ao buscar lista de usuários. tipo:', e);
}
});
}
module.exports = usersList;