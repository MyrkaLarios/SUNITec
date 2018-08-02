var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('NIVEL').select().then(data => {
    console.log(data);
    res.json(data)
  })
});

router.get('/insert/:id', (req, res, next) => {
  knex('NIVEL').insert({
    id_nivel: req.params.id
  }).then(data => {
    res.json(data)
  })
})

module.exports = router;
