// Importamos los modelos.
import selectTweetByIdModel from '../../models/tweets/selectTweetByIdModel.js';

// Función controladora final que permite crear un tweet.
const getTweetController = async (req, res, next) => {
    try {
        // Obtenemos el path param correspondiente.
        const { tweetId } = req.params;

        // Obtenemos el tweet por ID.
        const tweet = await selectTweetByIdModel(tweetId);

        // Enviamos una respuesta al cliente.
        res.send({
            status: 'ok',
            data: {
                tweet,
            },
        });
    } catch (err) {
        next(err);
    }
};

export default getTweetController;
