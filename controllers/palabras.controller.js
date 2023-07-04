import Service from '../services/palabras.service.js'
import { validarPalabra } from "../validators/palabras.validations.js";

class Controller {

    constructor() {
        this.service = new Service()
    }

    ingresarPalabra = async (req, res) => {
        const palabra = req.body
        const validation = validarPalabra(palabra)

        if (!validation.result) {
            return res.status(422).json({ "error": "palabra no valida" });
        }
        const nuevaPalabra = await this.service.agregarPalabra(palabra)
        return res.status(200).json(nuevaPalabra)
    }

    armarFrase = async (req, res) => {
        const palabras = await this.service.armarFrase()
        res.send(palabras)
    }

    contarPalabras = async (req, res) => {
        const palabras = await this.service.contarPalabras()
        res.json(palabras)
    }

    eliminarPalabra = async (req, res) => {
        const palabra = req.params.palabra;
        const validation = validarPalabra({ palabra });
        if (!validation.result)
            return res.status(422).json({ "error": "palabra no valida" });

        try {
            const palabraEliminada = await this.service.eliminarPalabra(palabra)
            return res.status(200).json(palabraEliminada);
        } catch {
            return res.status(404).json({ "error": "palabra no encontrada" });
        }
    }
}

export default Controller