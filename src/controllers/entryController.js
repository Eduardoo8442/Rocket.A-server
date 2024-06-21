const GetUsers = require("../models/tableSchema");

exports.index = (req, res) => {
    const name = req.body.name;
    const newUser = new GetUsers({
        name,
      });
      newUser.save()
      .then(result => {
        console.log('Um novo usuário entrou no chat!', result);
        return res.status(200).json({ response: 'Usuário salvo.' });
      })
      .catch(erro => {
        console.error('Erro ao salvar usuário:', erro);
        return res.status(400).json({ response: 'Erro ao salvar usuário. '});
      });
return;
}