// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Función que se conecta a la base de datos y crea un tweet.
const insertTweetModel = async (text, userId) => {
    // Obtenemos un pool de conexiones.
    const pool = await getPool();

    // Insertamos el tweet.
    await pool.query(`INSERT INTO tweets (text, userId) VALUES (?, ?)`, [
        text,
        userId,
    ]);
};

export default insertTweetModel;
