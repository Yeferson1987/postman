// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Función que se conecta a la base de datos y retorna el listado de tweets.
const selectAllTweetsModel = async () => {
    // Obtenemos el pool de conexiones.
    const pool = await getPool();

    // Obtenemos el listado de tweets.
    const [tweets] = await pool.query(`SELECT * FROM tweets`);

    return tweets;
};

export default selectAllTweetsModel;
