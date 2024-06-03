// Importamos las dependencias.
import express from 'express';

// Importamos las rutas.
import userRoutes from './userRoutes.js';
import tweetRoutes from './tweetRoutes.js';

// Creamos un router.
const router = express.Router();

// Middleware que indica a express dónde están las rutas.
router.use(userRoutes);
router.use(tweetRoutes);

export default router;
