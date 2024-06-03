// Importamos las dependencias.
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Obtenemos las variables de entorno.
import { PORT } from './env.js';

// Importamos las rutas.
import routes from './src/routes/index.js';

// Importamos las funciones controladoras finales de los errores.
import {
    errorController,
    notFoundController,
} from './src/controllers/errors/index.js';

// Creamos el servidor.
const app = express();

// Middleware que lee un body en formato JSON.
app.use(express.json());

// Middleware que evita problemas de conexión entre cliente y servidor.
app.use(cors());

// Middleware que muestra info sobre la petición entrante.
app.use(morgan('dev'));

// Middleware que indica a express dónde están las rutas.
app.use(routes);

// Middleware de manejo de errores.
app.use(errorController);

// Middleware de ruta no encontrada.
app.use(notFoundController);

// Le indicamos al servidor que escuche peticiones en un puerto concreto.
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
