const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'newuser',
    password: 'password',
    database: 'ventas'
});

connection.connect((error) => {
    if (error) {
        console.log('El error de conexion es : ' + error);
        return;
    }
    console.log('¡Conectado a la base de datos!');
});
module.exports = connection;
