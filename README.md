# ENDPOINTS (FINAL CORTO)

  1. Endpoint: POST `/palabras`

  Descripción:
    Endpoint utilizado para agregar palabras individuales.

  Respuestas:
    200: Palabra agregada correctamente

    422: Si la palabra no es válida.

  Ejemplo:
    >POST `/palabras`

    body: {
      "palabra": "palabra",
    }


====================================================================================================================

2. Endpoint: GET `/frase`

  Descripción:
    Devuelve las palabras ingresadas en forma de texto formando una frase.

  Respuestas:
    200

  Ejemplo:
    >GET `/frase`

====================================================================================================================

3. Endpoint: GET `/palabras`

  Descripción:
    Devuelve un objeto cuya clave es la palabra y su valor la cantidad de veces que existe esa palabra

  Respuestas:
    200

  Ejemplo:
    >GET `/palabras`

====================================================================================================================

4. Endpoint: DELETE `/palabras/:palabra`

  Descripción:
    Endpoint utilizado para borrar palabras (se borran todas sus apariciones).

  Respuestas:
    200: Palabra eliminada correctamente.

    404: Si no se encuentra la palabra.

    422: Si la palabra no es valida.

  Ejemplo:
    >DELETE `/palabras/hola`

