// Importamos los modelos.
import insertTweetModel from '../../models/tweets/insertTweetModel.js';

// Importamos los errores...
import { missingFieldsError } from '../../services/errorService.js';

// Función controladora final que permite crear un tweet.
const newTweetController = async (req, res, next) => {
    try {
        // Obtenemos los datos del body.
        const { text } = req.body;

        // Si falta algún campo lanzamos un error.
        if (!text) {
            missingFieldsError();
        }

        // Insertamos el tweet.
        await insertTweetModel(text, req.user.id);

        // Enviamos una respuesta al cliente.
        res.status(201).send({
            status: 'ok',
            message: 'Tweet creado',
        });
    } catch (err) {
        next(err);
    }
};

export default newTweetController;
