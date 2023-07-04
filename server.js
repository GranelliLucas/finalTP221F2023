import express from 'express';
import Router from './routes/palabras.routes.js'

class Server {
    constructor(port) {

        this.app = express();
        this.port = port;
    }

    start() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }))

        this.app.use('/', new Router().start())

        this.server = this.app.listen(this.port,
            () => console.log(`Servidor escuchando en http://localhost:${this.port}`)
        )
        this.server.on('error', error => console.log(`Error: ${error.message}`))

        return this.app
    }

    stop() {
        this.server.close()
    }
}

export default Server