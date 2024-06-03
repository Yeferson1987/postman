// Importamos los modelos.
import insertUserModel from '../../models/users/insertUserModel.js';

// Importamos los errores.
import { missingFieldsError } from '../../services/errorService.js';

// Función controladora final que crea un nuevo usuario.
const newUserController = async (req, res, next) => {
    try {
        // Obtener los datos del body.
        const { username, email, password } = req.body;

        // Si falta algún campo lanzamos un error.
        if (!username || !email || !password) {
            missingFieldsError();
        }

        // Insertamos el usuario.
        await insertUserModel(username, email, password);

        // Enviamos una respuesta al cliente.
        res.status(201).send({
            status: 'ok',
            message: 'Usuario creado',
        });
    } catch (err) {
        next(err);
    }
};

export default newUserController;
