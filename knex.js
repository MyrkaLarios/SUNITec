var knexFile = require('./knexfile');
var enviroment = process.env.NODE_ENV || 'development';
var knex = require('knex')(knexFile[enviroment]);

module.exports = knex;
