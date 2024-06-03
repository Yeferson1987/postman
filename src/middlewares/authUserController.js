// Importamos las dependencias.
import jwt from 'jsonwebtoken';

// Importamos las variables de entorno.
import { SECRET } from '../../env.js';

// Importamos los errores.
import {
    notAuthenticatedError,
    invalidTokenError,
} from '../services/errorService.js';

// Función controladora intermedia que desencripta el token y crea la propiedad "req.user".
// Si no hay token lanza un error.
const authUserController = async (req, res, next) => {
    try {
        // Obtenemos el token.
        const { authorization } = req.headers;

        // Si falta el token lanzamos un error.
        if (!authorization) {
            notAuthenticatedError();
        }

        // Variable donde almacenaremos la info del token una vez desencriptado.
        let tokenInfo;

        try {
            // Desencriptamos el token.
            tokenInfo = jwt.verify(authorization, SECRET);

            // Creamos una propiedad en la request inventada por nosotros para insertar los datos del usuario.
            req.user = tokenInfo;

            // Avanzamos a la siguiente función controladora.
            next();
        } catch (err) {
            console.error(err);

            // Utilizamos el try catch únicamente para lanzar un mensaje personalizado en español en caso de que la
            // verificación del token falle.
            invalidTokenError();
        }
    } catch (err) {
        next(err);
    }
};

export default authUserController;
