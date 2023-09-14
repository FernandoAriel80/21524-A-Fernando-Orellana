<h1>tp-epica-foro</h1>

**Crea la base de datos**

Para crear la base de datos deje un forodb.sql con el nombre de la base que es forodb, solo lo tiene que copiar y ejecutar en PHPmyAdmin.

**Instala dependencias del programa**
Las dependencias que use solo fueron las necesarias para el programa, son estas:

npm init -y

npm i

npm install express

npm install sequelize

npm install mysql2

npm install ejs

npm i dotenv

npm i nodemon --save-dev

Despues modificamos el package.json en la parte de scripts y se la remplazamos por este para poder levantar el seridor solo una vez y no tener que levantar el servidor cada vez que atualizamos algo:

"scripts": {
    "dev":"nodemon app.js"
  },

  y ejecutamos el programa con: "npm run dev"

  
