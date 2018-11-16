const cassandra = require('cassandra-driver');
const db = new cassandra.Client({ contactPoints: ['localhost:9042'], keyspace: 'headers' });
const fs = require('fs');

const stream = fs.createWriteStream('images.csv');
let count = 1;

const names = require('../data/restaurants.js')
const images = require('../data/images.js');
const generateRow = () => {
  let numberOfImages = Math.floor(Math.random() * 8) + 1;
  let name = names.restaurants[Math.floor(Math.random() * 1000)];
  let imageArray = '{';

  for (let i = 0; i < numberOfImages; i++) {
    let image = images.images[Math.floor(Math.random() * 1000)];
    if (i === numberOfImages - 1) imageArray += image + '}';
    else imageArray += image + ', ';
  }

  return `${count}|${name}|${imageArray}`;
}

const writeRow = () => {
  console.log('back in writeRow: ', count);
  while (count < 10000001) {
    let row = generateRow();
    count++
    
    if(!stream.write(row + '\n')) return;
    
  }
  console.log('done')
  stream.end();
}

writeRow();
stream.on('drain', () => {
  console.log('drain called')
  writeRow();
})

// fs.truncate('./images.csv', 0, (err) => {
//   console.log('inside truncate')
//   if (err) console.log('error on trucate: ', err);
//   else console.log('file wiped');
// })
