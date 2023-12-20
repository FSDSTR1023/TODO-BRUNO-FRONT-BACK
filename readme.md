Dejo el .env para que lo podais probar.
Este proyecto consta de dos partes.



### Dentro de la carpeta general del proyecto ejecutar el comando npm install para instalar dependencias y hacer lo mismo dentro del directorio client

### Para correr el proyecto ejecutar el comando npm run dev en ambos directorios tanto en la raiz como en la carpeta client

# Parte de Servidor backend

Que se encuentra alojada en la carpeta src
En la cual encontraremos los siguientes archivos:

- index.js

  > Este sera nuestro punto de entrada a la aplicacion y es donde tendremos la coneccion a la base de datos y el servidor de express.

- db.js

  > Este archivo es donde se encuentra la configuracion de la base de datos.

- config.js

  > Este archivo contiene una variable de entorno requerida por los JSON web Tokens

- app.js

  > Este archivo es donde se encuentra la configuracion del servidor de express. Y la derigencia de las rutas.

- readme.md
  > Este archivo es donde se encuentra la documentacion de la parte de backend y del Frontend.
  > y las Carpetas:
- controllers
  > Aqui encontraremos las funciones de las rutas auth para los usuarios y las funciones de las rutas de las tareas.
- models
  > Aqui encontraremos los modelos de los usuarios y las tareas.
- routes
- schemas
- libs
- middlewares
