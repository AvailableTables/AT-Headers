const cassandra = require('cassandra-driver');
var Client = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });

let getImages = (id) => {
  return Client.execute(`SELECT images FROM images WHERE id = ${id}`)
}

module.exports.Client = Client;
module.exports.getImages = getImages;