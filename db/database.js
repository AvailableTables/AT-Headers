const { Client } = require('pg')

const client = new Client({
  host: '18.224.107.139',
  user: 'postgres',
  database: 'headers'
});

client.connect();
console.log('db connected');

module.exports.client = client;

