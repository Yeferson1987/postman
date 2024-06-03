// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Importamos los errores.
import { notFoundError } from '../../services/errorService.js';

// Función que se conecta a la base de datos y retorna un tweet en concreto.
const selectTweetByIdModel = async (tweetId) => {
    // Obtenemos el pool de conexiones.
    const pool = await getPool();

    // Obtenemos el listado de tweets.
    const [tweets] = await pool.query(`SELECT * FROM tweets WHERE id = ?`, [
        tweetId,
    ]);

    // Si falta el tweet lanzamos un error.
    if (tweets.length < 1) {
        notFoundError('tweet');
    }

    // Si el tweet existe estará en la posición cero dado que solo puede existir un tweet
    // con un ID dado.
    return tweets[0];
};

export default selectTweetByIdModel;
