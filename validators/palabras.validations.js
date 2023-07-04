import Joi from "joi"

export const validarPalabra = palabra => {

    const palabraSchema = Joi.object({
        palabra: Joi.string().pattern(/^[a-zA-Z]+$/).required()
    })

    const { error } = palabraSchema.validate(palabra);
    if (error) {
        return { result: false, error }
    }
    return { result: true }
}