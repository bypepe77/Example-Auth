const Server = require('./src/server')

require('dotenv').config();

const server = new Server();

server.execute();