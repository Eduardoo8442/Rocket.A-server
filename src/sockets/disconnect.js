const GetUsers = require('../models/tableSchema');
function disconnect(socket = null, io = null) {
    socket.on('disconnect', () => {
    GetUsers.findOneAndDelete({ name: socket.data.name })
    .then(result => {
      if (result) {
        console.log('Usuário excluído:', result);
        io.emit('exitUserSendClient', ({ name: socket.data.name }));
      } else {
        console.log('Usuário não encontrado.');
      }
    })
    .catch(erro => {
      console.error('Erro ao excluir usuário:', erro); 
    });
    });
    }
    module.exports = disconnect;