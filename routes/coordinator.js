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

module.exports = router;
