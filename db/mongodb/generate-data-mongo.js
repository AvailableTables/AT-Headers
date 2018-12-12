const mongo = require('./mongodb.js');
const fs = require('fs');

const stream = fs.createWriteStream('images.csv');
let count = 1;

const names = require('../../data/restaurants.js')
const images = require('../../data/images.js');
const generateRow = () => {
  let numberOfImages = Math.floor(Math.random() * 8) + 1;
  let imageArray = [];

  for (let i = 0; i < numberOfImages; i++) {
    imageArray.push(images.images[Math.floor(Math.random() * 1000)]);
  }

  let obj = {}
  obj.id = count;
  obj.name = names.restaurants[Math.floor(Math.random() * 1000)];
  obj.images = imageArray;
  return JSON.stringify(obj);
}

const writeRow = () => {
  console.log('back in writeRow: ', count);
  while (count < 10000001) {
    let row = generateRow();
    count++
    
    if(!stream.write('\n' + row)) return;
    
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