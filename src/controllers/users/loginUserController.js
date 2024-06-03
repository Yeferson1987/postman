// Importamos las dependencias.
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Importamos los modelos.
import selectUserByEmailModel from '../../models/users/selectUserByEmailModel.js';

// Importamos los errores.
import {
    missingFieldsError,
    invalidCredentialsError,
} from '../../services/errorService.js';

// Importamos las variables de entorno.
import { SECRET } from '../../../env.js';

// Función controladora final que logea a un usuario retornando un token.
const loginUserController = async (req, res, next) => {
    try {
        // Obtenemos los datos del body.
        const { email, password } = req.body;

        // Si falta algún campo lanzamos un error.
        if (!email || !password) {
            missingFieldsError();
        }

        // Obtenemos al usuario con el email dado.
        const user = await selectUserByEmailModel(email);

        // Variable que nos dirá si la contraseña coincide o no.
        let validPass;

        // Si el usuario existe comprobamos si la contraseña coincide.
        if (user) {
            validPass = await bcrypt.compare(password, user.password);
        }

        // Si el usuario no existe o si la contraseña no coincide lanzamos un error.
        if (!user || !validPass) {
            invalidCredentialsError();
        }

        // Creamos un objeto con la info que queremos agregar al token.
        const tokenInfo = {
            id: user.id,
        };

        // Creamos el token.
        const token = jwt.sign(tokenInfo, SECRET, {
            expiresIn: '7d',
        });

        // Enviamos una respuesta al cliente.
        res.status(201).send({
            status: 'ok',
            data: {
                token,
            },
        });
    } catch (err) {
        next(err);
    }
};

export default loginUserController;
