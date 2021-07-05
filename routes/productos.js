var express = require('express');
var router = express.Router();
var db = require('../conexion/conexion');

router.get('/', function(req, res, next) {

    db.query('SELECT * FROM tblproductos', (error, resultados) => {
      console.log(resultados);
        if (error) {
            throw error;
        } else {
          console.log(resultados);
            res.render('productos', { title: 'Productos', Libros:resultados });
        }
    });

});

module.exports = router;
