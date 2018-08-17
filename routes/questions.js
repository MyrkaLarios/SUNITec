var express = require('express');
var router = express.Router();
var knex = require('../knex');

router.get('/', (req, res, next) => {
  knex.select().table('PREGUNTAS').then(data => {
    console.log(data)
  })
})

router.post('/create', (req, res, next) => {
  knex('PREGUNTA').insert({
    id_pregunta: null,
    descripcion: req.body.descripcion,
    id_unidad: req.body.id_unidad,
    valor: req.body.valor,
    id_coordi: req.body.id_coordi
  }).then(data => {
    console.log(req.body)
    req.body.options.forEach(async (val, i) => {
      const correcta = i == req.body.radioOptions ? 1 : 0;
      await insertOption(val, correcta, data[0])
    });
    res.redirect('/coordinator/questions')
  })
})

insertOption = async (val, correcta, id_pregunta) => {
  await knex('OPCIONES').insert({
    id_opciones: null,
    contenido: val,
    id_pregunta: id_pregunta,
    resp_correcta: correcta
  })
}

module.exports = router;
