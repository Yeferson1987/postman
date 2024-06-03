// Importamos las dependencias.
import bcrypt from 'bcrypt';

// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Importamos los errores.
import {
    userAlreadyRegisteredError,
    emailAlreadyRegisteredError,
} from '../../services/errorService.js';

// Función que realiza una consulta a la base de datos para crear un nuevo usuario.
const insertUserModel = async (username, email, password) => {
    // Obtenemos el pool de conexiones.
    const pool = await getPool();

    // Comprobamos si existe algún usuario con el nombre dado.
    let [users] = await pool.query('SELECT id FROM users WHERE username = ?', [
        username,
    ]);

    // Si existe algún usuario con ese nombre lanzamos un error.
    if (users.length > 0) {
        userAlreadyRegisteredError();
    }

    // Comprobamos si existe algún usuario con el email dado.
    [users] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);

    // Si existe algún usuario con ese email lanzamos un error.
    if (users.length > 0) {
        emailAlreadyRegisteredError();
    }

    // Encriptamos la contraseña.
    const hashedPass = await bcrypt.hash(password, 10);

    // Insertamos el usuario.
    await pool.query(
        `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
        [username, email, hashedPass],
    );
};

export default insertUserModel;
