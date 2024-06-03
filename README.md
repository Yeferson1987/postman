# MiniTwitter

Se trata de una web que simula Twitter donde los usuarios publican tweets.

## Instalar

1. Instalar las dependencias mediante el comando `npm install` o `npm i`.

2. Guardar el archivo `.env.example` como `.env` y cubrir los datos necesarios.

3. Ejecutar `npm run initDb` para crear las tablas necesarias en la base de datos.

4. Ejecutar `npm run dev` para lanzar el servidor.

## Base de datos

### users

| Campo     | Tipo             | Descripción                          |
| --------- | ---------------- | ------------------------------------ |
| id        | INTEGER UNSIGNED | Identificador único del usuario      |
| email     | VARCHAR(100)     | Correo electrónico del usuario       |
| password  | VARCHAR(100)     | Contraseña del usuario (hash)        |
| username  | VARCHAR(30)      | Nombre de usuario del usuario        |
| createdAt | DATETIME         | Fecha y hora de creación del usuario |

### tweets

| Campo     | Tipo             | Descripción                        |
| --------- | ---------------- | ---------------------------------- |
| id        | INTEGER UNSIGNED | Identificador único del tweet      |
| text      | VARCHAR(255)     | Texto del tweet                    |
| idUser    | INTEGER UNSIGNED | Identificador del usuario creador  |
| createdAt | DATETIME         | Fecha y hora de creación del tweet |

## Endpoints del usuario

-   **POST** - `/users/register` - Crea un nuevo usuario.
-   **POST** - `/users/login` - Logea a un usuario retornando un token.

## Endpoints de los tweets

-   **POST** - `/tweets` - Crea una tweet. Requiere un token del que obtendremos el id del usuario creador.
-   **GET** - `/tweets` - Retorna el listado de tweets.
-   **GET** - `/tweet/:tweetId` - Retorna un tweet en concreto.

## ¿Qué hay que hacer?

Completa el contenido de los siguientes ficheros:

### Carpeta controllers

-   `newUserController.js`
-   `loginUserController.js`
-   `newTweetController.js`
-   `getTweetController.js`
-   `listTweetsrController.js`

### Carpeta middlewares

-   `authUserController.js`

#### Carpeta models

-   `insertUserModel.js`
-   `selectUserByEmailModel.js`
-   `insertTweetModel.js`
-   `selectAllTweetsModel.js`
-   `selectTweetByIdModel.js`
