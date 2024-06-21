const express = require("express");
const routes = express.Router();
const multerConfig = require('./config/multerConfig');


const entryController = require('./controllers/entryController');
routes.get('/', (req, res) => {
    return res.json({status: "API carregada"});
})
routes.post('/entry', entryController.index);
routes.post('/upload', multerConfig.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).json('Nenhum arquivo foi enviado.');
    }
    const filePath = req.file.path;
   const imageLink = `${process.env.URL}/uploads/${filePath.replace('uploads/', '')}`;


  res.status(200).json({ imageLink });
  });
module.exports = routes;