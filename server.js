const express = require('express');
const bodyParser = require('body-parser');
const translateRouter = require('./router');

function translateServer(translateFunc) {
  const router = translateRouter(translateFunc);

  const server = express();

  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.use('/api', router);

  return server;
}

module.exports = translateServer;
