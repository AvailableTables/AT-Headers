const cassandra = require('cassandra-driver');
const db = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });
const db2 = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });
const db3 = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });
const db4 = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });
const db5 = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });
const db6 = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });
const db7 = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });
const db8 = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });
const db9 = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });
const db10 = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });

const createLoadFunc = (db) => {
  return function(array, callback){
    db.batch(array, {prepare: true}, (err) => {
      if (err) console.log('error on batch: ', err);
      else {
        // console.log('batch loaded');
        callback();
      }
    })
  }
}

const loadQueries1 = createLoadFunc(db);
const loadQueries2 = createLoadFunc(db2);
const loadQueries3 = createLoadFunc(db3);
const loadQueries4 = createLoadFunc(db4);
const loadQueries5 = createLoadFunc(db5);
const loadQueries6 = createLoadFunc(db6);
const loadQueries7 = createLoadFunc(db7);
const loadQueries8 = createLoadFunc(db8);
const loadQueries9 = createLoadFunc(db9);
const loadQueries10 = createLoadFunc(db10);

var count = 0
const createInsertStatement = () => {
  let numberOfImages = Math.floor(Math.random() * 8) + 1;
  let name = names.restaurants[Math.floor(Math.random() * 1000)];
  let imagesStr = `{`;

  for (let j = 0; j < numberOfImages; j++) {
    let image = images.images[Math.floor(Math.random() * 1000)];
    if (j === numberOfImages - 1) imagesStr += `'${image}'}`;
    else imagesStr += `'${image}', `;
  }

  count++;
  return `INSERT INTO images (id, name, images) VALUES (${count}, $$${name}$$, ${imagesStr});`;
}

const images = require('./data/images.js');
const names = require('./data/restaurants.js');
const generateImages = (callback) => {

  let queries1 = [];
  let queries2 = [];
  let queries3 = [];
  let queries4 = [];
  let queries5 = [];
  let queries6 = [];
  let queries7 = [];
  let queries8 = [];
  let queries9 = [];
  let queries10 = [];
  for (let i = 0; i < 100; i++) {

    queries1.push(createInsertStatement());
    queries2.push(createInsertStatement());
    queries3.push(createInsertStatement());
    queries4.push(createInsertStatement());
    queries5.push(createInsertStatement());
    queries6.push(createInsertStatement());
    queries7.push(createInsertStatement());
    queries8.push(createInsertStatement());
    queries9.push(createInsertStatement());
    queries10.push(createInsertStatement());
  }
  console.log('about to load...')
  loadQueries1(queries1, () => {});
  loadQueries2(queries2, () => {});
  loadQueries3(queries3, () => {});
  loadQueries4(queries4, () => {});
  loadQueries5(queries5, () => {});
  loadQueries6(queries6, () => {});
  loadQueries7(queries7, () => {});
  loadQueries8(queries8, () => {});
  loadQueries9(queries9, () => {});
  loadQueries10(queries10, callback);
}

var runCounter = 0;
const promiseLoad = () => {
  console.log(runCounter * 1000, ' records loaded');
  if (runCounter === 10000) {
    console.log('ALL DONE');
    return;
  }

  return new Promise( (resolve) => {
    generateImages(() => {resolve()})
  })
  .then( () => {
    console.log()
    runCounter++;
    promiseLoad();
  })

}

promiseLoad();
