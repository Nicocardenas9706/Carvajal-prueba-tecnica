Primero que todo se procedera a descargar Node.js e instalar todas sus dependencias.
Luego ingresaremos a la carpeta "Carvajal prueba tecnica" (que se ubica en este repositorio de GitHub)
Descargaremos cada archivo "API-NODEJS-MYSQL.zip" y "crudtest.zip"
Quedara una carpeta con dos subcarpetas "API-NODEJS-MYSQL" y "crudtest". 


Se Usara Visual Studio Code para abrir cada carpeta extraída.
Empezaremos por abrir la carpeta "API-NODEJS-MYSQL" en visual code
El siguiente paso sera buscar en las extensiones de Visual Studio Code "REST Client" y procederemos a instalarla.


esto es muy importante, debemos fijarnos muy bien en la siguiente instruccion.
debemos asegurarnos de estar en la carpeta "API-NODEJS-MYSQL"
Accedemos al CMD o al terminal de visual estudio code para instalar los paquetes necesarios:

1) npm install express
2) npm install nodemon --save-dev
3) npm install mysql express-myconnection
4) node server.js
5) npm run start (esta instruccion se da cuando se haya ensamblado totalmente el paso siguiente (La instalacion del MySQL WORKBENCH))

Seguido a esto descargaremos el programa "MySQL WORKBENCH" desde el navegador.

Los datos que se usaron en mySQL WorkBench fueron los pretedeterminados por dicho aplicativo: 

    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'data'

CREATE TABLE 'data'.'libretas' (
  'id' INT NOT NULL AUTO_INCREMENT, -> (El 'id' es PK)
  'Nombres' VARCHAR(100) NOT NULL,
  'Apellido' VARCHAR(100) NOT NULL,
  'Edad' INT
  'Correo' VARCHAR(100) NOT NULL,
  'Telefono' INT,
  'Ciudad' VARCHAR(100) NOT NULL,
  'Direccion' VARCHAR(100) NOT NULL,


(En un futuro se implementara la seccion de Login y Register, donde el rol 'ADMINISTRADOR', poseera todos los derechos para usar el CRUD y un 'USUARIO' que podra usar algunas funciones del CRUD)

luego

Abrir otra ventana de visual code y abriremos la carpeta crustest
esto es muy importante, debemos fijarnos muy bien en la siguiente instruccion.
dentro de la carpeta abierta (crudtest) usremos los siguientes comandos:

(primero debemos abrir el terminal que se encuentra en la barra de herramientas de la parte superior)
1) npm install
Para instalar los modulos restantes del node
2) npm start 

Al frontEnd esta creado en react, en el cual podremos observar las diferentes funciones del CRUD y podremos hacer uso de ellas.
