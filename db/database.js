const mysql = require('mysql');
//const mysqlConfig = require('../config.js');

const connection = mysql.createConnection({
  user: 'root',
  password: 'JSangiolo92010!',
  database: 'neliades'
});

connection.connect();

module.exports = connection;