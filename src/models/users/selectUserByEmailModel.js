// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Función que realiza una consulta a la base de datos para seleccionar un usuario con un email dado.
const selectUserByEmailModel = async (email) => {
    // Obtenemos un pool de conexiones.
    const pool = await getPool();

    // Obtenemos los datos del usuario.
    const [users] = await pool.query(
        `SELECT id, password FROM users WHERE email = ?`,
        [email],
    );

    // Si existe un usuario con el email dado estará en la posición 0 dado que es imposible que en
    // nuestra base de datos haya más de un usuario con el mismo email. Retornamos esa posición.
    return users[0];
};

export default selectUserByEmailModel;
