const express = require('express');
const bodyParser = require('body-parser');
const model = require('./model.js');
const path = require('path');
const morgan = require('morgan');
let app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post('/header', function (req, res) {
//   console.log('id: ', req.body.id)
//   model.getImagesFromDb(req.body.id, (err, images) => {
//     // console.log(images);
//     console.log('images controller: ', images);
//     res.send({
//       images,
//       currentLocation: {
//         country: 'United States',
//         metro: 'New York / Tri-State Area',
//         region: 'Manhattan',
//         community: 'Theater District / Times Square'
//       }
//     });
//   });

app.post('/header', function (req, res) {
  console.log('id: ', req.body.id)
  model.getImagesFromDb(req.body.id, (images) => {
    // console.log(images);
    console.log('images controller: ', images);
    res.send({
      images,
      currentLocation: {
        country: 'United States',
        metro: 'New York / Tri-State Area',
        region: 'Manhattan',
        community: 'Theater District / Times Square'
      }
    });
  });
  // res.send({
  //   images: model.getImagesFromDb(null, (err, arr) => { return (arr); }),
  //   // images: [
  //   //   "https://resizer.otstatic.com/v2/photos/large/24010777.jpg",
  //   //   "https://resizer.otstatic.com/v2/photos/large/23872837.jpg",
  //   //   "https://ot-foodspotting-production.s3.amazonaws.com/reviews/654855/thumb_600.jpg",
  //   //   "https://ot-foodspotting-production.s3.amazonaws.com/reviews/4331043/thumb_600.jpg",
  //   //   "https://ot-foodspotting-production.s3.amazonaws.com/reviews/4331079/thumb_600.jpg",
  //   //   "https://resizer.otstatic.com/v2/photos/large/24010777.jpg",
  //   //   "https://resizer.otstatic.com/v2/photos/large/23872837.jpg",
  //   //   "https://ot-foodspotting-production.s3.amazonaws.com/reviews/654855/thumb_600.jpg",
  //   //   "https://ot-foodspotting-production.s3.amazonaws.com/reviews/4331043/thumb_600.jpg",
  //   //   "https://ot-foodspotting-production.s3.amazonaws.com/reviews/4331079/thumb_600.jpg"
  //   // ],
  //   currentLocation: {
  //     country: 'United States',
  //     metro: 'New York / Tri-State Area',
  //     region: 'Manhattan',
  //     community: 'Theater District / Times Square'
  //   }
  // });
});

app.get('/header', function (req, res) {
  // TODO - your code here!
  res.send({
    metros: { 0: `New York / Tri-State Area`, 1: `Orange County`, 2: `Philadeplhia Area` },
    regions: {
      0: [`Manhattan`, `New Jersey - North`, `New Jersey - Central`],
      1: [`All Orange County`, `North Orange County`, `South Orange County`],
      2: [`Philadelphia`, `Western Suburbs`, `New Jersey Suburbs`]
    }

  });
});

app.post('/options', (req, res) => {
  console.log(req.body);
  var list = [];
  if (req.body.option === 'EN') {
    list = ['English', 'Espanol'];
  } else if (req.body.option === 'Mobile') {
    list = ['iOS App', 'Android App'];
  }
  res.send(list);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'));
});

let port = 3040;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

