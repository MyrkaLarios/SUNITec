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

    knex('PREGUNTA')
      .join('UNIDAD', 'PREGUNTA.id_unidad', '=', 'UNIDAD.id_unidad')
      .select('UNIDAD.id_nivel',
              'UNIDAD.num_unidad',
              'UNIDAD.nombre_unidad',
              'PREGUNTA.descripcion')
    .then(questions => {
      console.log(questions)
      res.render('questions/index', {levelsData, questions})
    })
  })
});

router.get('/questions/filter', (req, res, next) => {
  knex.select().from('UNIDAD').then( data => {
    let levelsData = {}
    data.forEach(item => {
      if (levelsData[item.id_nivel]){
        levelsData[item.id_nivel] = [...levelsData[`${item.id_nivel}`], [item.id_unidad, `${item.num_unidad}. ${item.nombre_unidad}`]]
      }else{
        levelsData[item.id_nivel] = [[item.id_unidad, `${item.num_unidad}. ${item.nombre_unidad}`]]
      }
    });
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



// router.get('/questions', (req, res, next) => {

// })

module.exports = router;
