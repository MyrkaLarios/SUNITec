var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('coordinator/exams/index')
});

router.get('/questions', (req, res, next) => {
  knex.select().from('UNIDAD').orderBy('id_nivel', 'desc').then( data => {
    let levelsData = {}
    data.forEach(item => {
      if (levelsData[item.id_nivel]){
        levelsData[item.id_nivel] = [...levelsData[`${item.id_nivel}`], [item.id_unidad, `${item.num_unidad}. ${item.nombre_unidad}`]]
      }else{
        levelsData[item.id_nivel] = [[item.id_unidad, `${item.num_unidad}. ${item.nombre_unidad}`]]
      }
    });
    res.render('questions/index', {levelsData})
  })

});

router.get('/questions/new', (req, res, next) => {
  knex.select().from('UNIDAD').orderBy('id_nivel', 'desc').then( data => {
    let levelsData = {}
    data.forEach(item => {
      if (levelsData[item.id_nivel]){
        levelsData[item.id_nivel] = [...levelsData[`${item.id_nivel}`], [item.id_unidad, `${item.num_unidad}. ${item.nombre_unidad}`]]
      }else{
        levelsData[item.id_nivel] = [[item.id_unidad, `${item.num_unidad}. ${item.nombre_unidad}`]]
      }
    });
    res.render('questions/new', {levelsData})
  })
});

router.post('/questions/create', (req, res, next) => {
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
