require('dotenv').config();
const initSocket = require('./sockets/socket');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const routes = require('./routes');
const connectDb = require('./config/database');

connectDb();

const io = initSocket(server);
require('./sockets/joined')(io);


app.use('/uploads', express.static('uploads'));


const corsOptions = {
    origin: `${process.env.URLFRONT}`, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(routes);

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
     console.log('Servidor rodando na porta', port);
  });
module.exports = { app, server };