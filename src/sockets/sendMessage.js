const randomIdMessage = require('../functions/randomIdMessage');
function sendMessage(socket = null, io = null) {
socket.on('sendMessage', ({name, message, image, imageMessage}) => {
if(!name.trim() || !message.trim() && imageMessage === null) return;
const idMessage = randomIdMessage(12);
io.emit('receive', { name, message, image, imageMessage, idMessage });
});
}
module.exports = sendMessage;