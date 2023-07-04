import fs from 'fs'

class ModelFile {

    constructor() {
        this.nombreArchivo = './data/palabras.json'
    }

    leerArchivo = async archivo => {
        try {
            const colores = JSON.parse(await fs.promises.readFile(archivo, 'utf-8'))
            return colores
        } catch {
            return []
        }
    }

    obtenerPalabras = async () => {
        const colores = await this.leerArchivo(this.nombreArchivo)
        return colores;
    }

    agregarPalabra = async (palabra) => {
        const palabras = await this.obtenerPalabras()

        palabras.palabras.push(palabra)
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(palabras))

        return { palabra }
    }

    eliminarPalabra = async (palabra) => {
        const palabras = await this.obtenerPalabras()

        palabras.palabras = palabras.palabras.filter(p => p !== palabra)
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(palabras))

        return { palabra }
    }
}

export default ModelFile