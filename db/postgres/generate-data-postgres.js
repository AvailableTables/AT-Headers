const db = require('./database.js');
const fs = require('fs');
const copyFrom = require('pg-copy-streams').from

const writeData = (path, data, callback) => {
  fs.appendFile(path, data, (err) => {
    if (err) console.log('error on append to join: ', err);
    else callback()
  })
}

const deleteFile = (callback, path) => {
  fs.truncate(path, 0, (err) => {
    if (err) console.log('error deleting file: ', err);
    else callback();
  });
}

const addIndex = (callback) => {
  db.client.query(`CREATE INDEX ON images(restaurant_id)`, (err) => {
    if (err) console.log('error on creating index: ', err);
    else callback();
  })
}

const loadData = (callback, table) => {
  const stream = db.client.query(copyFrom(`COPY ${table} FROM STDIN DELIMITER '|'`));
  const fileStream = fs.createReadStream(`./${table}.csv`);

  fileStream.on('error', (err) =>{
    console.log('error in reading file: ', err)
  })
  stream.on('error', (err) => {
    console.log('error in copy command: ', err)
  })
  stream.on('end', () => {
    console.log('file loaded')
    callback()
  })
  fileStream.pipe(stream);
}

const names = require('../../data/restaurants.js')
const generateNames = (callback, startingId) => {

  let data = ''
  let id = startingId * 1000000 + 1;
  let endingId = startingId * 1000000 + 1000001;

  for (let i = id; i < endingId; i++) {
    let company = names.restaurants[Math.floor(Math.random() * 1000)]
    if (i === endingId - 1) data += i + '|' + company; 
    else data += i + '|' + company + '\n';
  }

  writeData(`./restaurants.csv`, data, callback)
}

var count = 1;
const images = require('../../data/images.js');
const generateImages = (callback, startingId) => {
  
  let id = startingId * 1000000 + 1;
  let endingId = startingId * 1000000 + 1000001;
  let data = '';
  for (let i = id; i < endingId; i++) {

    let numberOfImages = Math.floor(Math.random() * 8) + 1;
    for (let j = 0; j < numberOfImages; j++) {
      let image = images.images[Math.floor(Math.random() * 1000)]
      data += count + '|' + image + '|' + i + '\n'
      count++
    }
  }

  writeData('./images.csv', data, callback);
}

var runCounter = 0;
const promisifyFunction = (funcCreate, table) => {

  console.log('runCounter is: ', runCounter);
  if (runCounter === 10) {
    if (table === 'images') addIndex( () => {
      console.log('Index created')
    })
    console.log('ALL DONE');
    return;
  }
  return new Promise( (resolve) => {
    funcCreate(() => {resolve()}, runCounter);
  })
  .then( () => {
    console.log('file created, loading file...')
    return new Promise ( (resolve) => {
      loadData( () => {resolve()}, table);
    })
  })
  .then ( () => {
    return new Promise( (resolve) => {
      deleteFile( () => {resolve()}, `./${table}.csv`);
    })
  })
  .then( () => {
    console.log('file wiped, starting next batch...')
    runCounter++;
    promisifyFunction(funcCreate, table);
  })
  .catch( (err) => {
    console.log('error in Promise chain: ', err);
  })
}

module.exports = {
  names: function() {promisifyFunction(generateNames, 'restaurants')},
  images: function() {promisifyFunction(generateImages, 'images')}
}

