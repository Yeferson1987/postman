// Importamos las dependencias.
import express from 'express';

// Importamos las funciones controladoras finales.
import {
    newTweetController,
    listTweetsController,
    getTweetController,
} from '../controllers/tweets/index.js';

// Importamos las funciones controladoras intermedias.
import { authUserController } from '../middlewares/index.js';

// Creamos un router.
const router = express.Router();

// Middleware que crea un nuevo tweet.
router.post('/tweets', authUserController, newTweetController);

// Middleware que retorna el listado de tweets.
router.get('/tweets', listTweetsController);

// Middleware que retorna info de un tweet.
router.get('/tweets/:tweetId', getTweetController);

export default router;
