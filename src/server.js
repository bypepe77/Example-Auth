const express  = require('express');
const http     = require('http')
const { dbConnection } = require('./database/config');

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);

        dbConnection()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use('/api/auth', require('./routes/auth'))
    }

    execute() {
        this.middlewares();

        this.server.listen(this.port, () => {
            console.log("Listening on port", this.port)
        })
    }
}

module.exports = Server