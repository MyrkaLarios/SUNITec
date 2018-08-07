var express = require('express');
var router = express.Router();
var knex = require('../knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  // knex('NIVEL').select().then(data => {
  //   console.log(data);
  //   res.json(data)
  // })
  res.render('login')
});

module.exports = router;
