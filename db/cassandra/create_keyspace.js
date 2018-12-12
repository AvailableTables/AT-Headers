const cassandra = require('cassandra-driver');
var Client = new cassandra.Client({
  contactPoints: ['localhost:9042']
})

const createKeySpace = (callback) => {
  Client.execute('DROP KEYSPACE IF EXISTS headers;')
    .then( (result) => {
      console.log('keyspace dropped')
      Client.execute(`CREATE KEYSPACE headers WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '2'}`)
        .then( (result) => {
          console.log('keyspace created')
          Client.execute('USE headers;')
            .then( (result) => {
              console.log('selected headers')
              Client.execute('CREATE TABLE images ( id int PRIMARY KEY, name text, images set<text>)')
                .then( (result) => {
                  console.log('table created')
                })
            })
        })
    })
}

createKeySpace()