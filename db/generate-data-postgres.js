const faker = require('faker');
const db = require('./db/database.js');
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

const names = require('./data/restaurants.js')
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
const images = require('./data/images.js');
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
let startTime = new Date();
const promisifyFunction = (funcCreate, table) => {
  console.log('runCounter is: ', runCounter);
  if (runCounter === 10) {
    console.log('ALL DONE')
    let endTime = new Date();
    console.log('Data generated + loaded in ', (endTime - startTime) / 1000, ' seconds');
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

// promisifyFunction(generateNames, 'restaurants');
promisifyFunction(generateImages, 'images');

    // generate company names
// for (let i = 0; i < 1000; i++) {
//   let company = faker.company.companyName();
//   fs.appendFile('./companies.txt', `\`${company}\`,${'\n'}`, (err) => {
//     if (err) console.log(err);
//   })
// }

// generate images
// for (let i = 0; i < 1000; i++) {
//   let image = `https://picsum.photos/200/300/?${Math.floor(Math.random() * 100000)}`
//   fs.appendFile('./images', `\`${image}\`,${'\n'}`, (err) => {
//     if (err) console.log(err);
//   })
// }
