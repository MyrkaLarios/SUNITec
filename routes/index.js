var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  // knex('NIVEL').select().then(data => {
  //   console.log(data);
  //   res.json(data)
  // })
  res.render('index')
});

router.post('/insert/question', (req, res, next) => {
  knex('PREGUNTA').insert({
    id_pregunta: null,
    descripcion: req.body.descripcion,
    id_unidad: req.body.id_unidad,
    valor: req.body.valor,
    id_coordi: req.body.id_coordi
  }).then(data => {
    // knex.insert([
    //   {
    //     id_opciones: null,
    //     contenido: req.body.option1,
    //     id_pregunta: data[0],
    //     resp_correcta:
    //   },
    //   {
    //     title: 'Fahrenheit 451'
    //   }], 'id').into('books')
    console.log(data[0])
    console.log(req.body)
  })
})

module.exports = router;
