CREATE TABLE publicacion(
	  id_publicacion INT PRIMARY KEY AUTO_INCREMENT,
    autor VARCHAR(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    detalle VARCHAR(500) NOT NULL,
    url_imagen VARCHAR(255) NOT NULL,
    fecha_publicacion DATE NULL
);


/* instalaciones necesarias para usar este programa

npm init -y

npm i

npm install express

npm install sequelize

npm install mysql2

npm install ejs

npm i dotenv

npm i nodemon --save-dev

"scripts": {
    "dev":"nodemon app.js"
  },

*/