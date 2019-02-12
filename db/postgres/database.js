const { Client } = require('pg')

const client = new Client({
  host: '13.59.236.7',
  user: 'postgres',
  database: 'headers'
});

client.connect();
console.log('db connected');

module.exports.client = client;

