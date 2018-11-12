var faker = require('faker');
var db = require('./db/database.js');
var fs = require('fs');

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

const loadImages = (callback) => {
  let q = `LOAD DATA LOCAL INFILE './images.txt' INTO TABLE images
          FIELDS TERMINATED BY '|'
          (image, restaurant_id)
          SET id = NULL;
  `
  console.log('about to insert file...')
  db.query(q, (err) => {
    if (err) console.log('error on LOADING txt file: ', err);
    else {
      console.log('query performed successfully')
      callback();
    }
  });
}

const loadNames = (callback) => {
  let q = `LOAD DATA LOCAL INFILE './names.txt' INTO TABLE restaurants
          FIELDS TERMINATED BY '\n'
          (name)
          SET id = NULL;
  `
  console.log('about to insert file...')
  db.query(q, (err) => {
    if (err) console.log('error on LOADING txt file: ', err);
    else {
      console.log('query performed successfully')
      callback();
    }
  });
}


const names = require('./data/restaurants.js')
const generateNames = (callback) => {

  let data = ''
  for (let i = 0; i < 1000000; i++) {
    let company = names.restaurants[Math.floor(Math.random() * 1000)]
    data += company + '\n';
  }

  writeData(`./names.txt`, data, callback)
}

var count = 1;
const images = require('./data/images.js');
const generateImages = (callback) => {
  
  let data = '';
  for (let i = 0; i < 1000000; i++) {

    let numberOfImages = Math.floor(Math.random() * 8) + 1;
    for (let i = 0; i < numberOfImages; i++) {
      let image = images.images[Math.floor(Math.random() * 1000)]
      data += image + '|' + count + '\n'
    }

    count++
  }

  writeData('./images.txt', data, callback);
}

var runCounter = 0;
const promisifyFunction = (funcCreate, funcLoad, path) => {
  console.log('runCounter is: ', runCounter);
  if (runCounter === 10) {
    console.log('ALL DONE')
    return;
  }
  return new Promise( (resolve) => {
    funcCreate(() => {resolve()});
  })
  .then( () => {
    console.log('file created, loading file...')
    return new Promise ( (resolve) => {
      funcLoad( () => {resolve()});
    })
  })
  .then ( () => {
    console.log('file loaded')
    return new Promise( (resolve) => {
      deleteFile( () => {resolve()}, path);
    })
  })
  .then( () => {
    console.log('file wiped, starting next batch...')
    runCounter++;
    promisifyFunction(funcCreate, funcLoad, path);
  })
  .catch( (err) => {
    console.log('error in Promise chain: ', err);
  })
}


// promisifyFunction(generateImages, loadImages, './images.txt');
//promisifyFunction(generateNames, loadNames, './names.txt');

writeData('./names.txt', 'hi, Liz', ()=>{console.log('done')});

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
