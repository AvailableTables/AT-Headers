const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  password: 'JSangiolo92010!',
  database: 'headers'
});

client.connect();
console.log('db connected');

module.exports.client = client;

