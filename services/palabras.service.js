import Model from "../models/palabras.model.js"

class Service {

  constructor() {
    this.model = new Model()
  }

  agregarPalabra = async (palabra) => {
    const nuevaPalabra = palabra.palabra;
    const res = await this.model.agregarPalabra(nuevaPalabra);
    return res;
  }

  armarFrase = async () => {
    const palabras = await this.model.obtenerPalabras()
    const frase = palabras.palabras.join(' ');
    return frase
  }

  contarPalabras = async () => {
    const palabras = await this.model.obtenerPalabras()
    const palabrasContadas = {}
    for (let i = 0; i < palabras.palabras.length; i++) {
      const palabra = palabras.palabras[i];
      if (palabrasContadas[palabra]) {
        palabrasContadas[palabra]++;
      } else {
        palabrasContadas[palabra] = 1;
      }
    }
    return palabrasContadas
  }

  eliminarPalabra = async (palabra) => {

    const palabras = await this.model.obtenerPalabras();

    if (palabras.palabras.includes(palabra)) {
      const res = await this.model.eliminarPalabra(palabra);
      return res;
    } else {
      throw new Error("Palabra no encontrada");
    }
  };
}

export default Service