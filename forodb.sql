CREATE TABLE publicacion(
	id_publicacion INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    detalle VARCHAR(500) NOT NULL,
    url_imagen VARCHAR(255) NOT NULL,
    fecha_publicacion DATE NULL
);

CREATE TABLE admin(
	 id_admin INT PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(50) NOT NULL,
    clave VARCHAR(50) NOT NULL
);

INSERT INTO admin(usuario,clave)VALUE('profe1','12345')


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