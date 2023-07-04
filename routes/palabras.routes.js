import express from 'express'
import Controller from '../controllers/palabras.controller.js'

class Router {

    constructor(){
        this.router = express.Router()
        this.controller = new Controller()
    }

    start(){
        this.router.post('/palabras', this.controller.ingresarPalabra)
        this.router.get('/frase', this.controller.armarFrase)
        this.router.get('/palabras', this.controller.contarPalabras)
        this.router.delete('/palabras/:palabra', this.controller.eliminarPalabra)

        return this.router
    }
}

export default Router