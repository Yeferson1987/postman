// Importamos los modelos...
import selectAllTweetsModel from '../../models/tweets/selectAllTweetsModel.js';

// Función controladora final que permite crear un tweet.
const listTweetsController = async (req, res, next) => {
    try {
        // Obtenemos el listado de tweets.
        const tweets = await selectAllTweetsModel();

        // Enviamos una respuesta al cliente.
        res.send({
            status: 'ok',
            data: {
                tweets,
            },
        });
    } catch (err) {
        next(err);
    }
};

export default listTweetsController;
