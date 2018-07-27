var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('tableName').insert({name: 'Myrka'});
  res.render('index', { title: 'Express' });
});

module.exports = router;
