const express = require('express');
const bodyParser = require('body-parser');
const model = require('./model.js');
const path = require('path');
const morgan = require('morgan');
const pg = require('../db/database.js');
const mongo = require('../db/mongodb.js');
const cassandra = require('../db/cassandradb.js');
let app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Postgres GET
// app.get('/api/header/:id', (req, res) => {
//   let id = req.params.id;
//   pg.client.query(`SELECT * FROM images where restaurant_id = ${id};`)
//   .then( (results) => res.send(results.rows))
//   .catch( (err) => {res.sendStatus(500)})
// })

// MongoDB GET
app.get('/api/header/:id', (req, res) => {
  let id = req.params.id;
  mongo.findImages(id)
  .then( (results) => res.send(results[0].images));
})

// // Cassandra GET
// app.get('/api/header/:id', (req, res) => {
//   let id = req.params.id;
//   cassandra.getImages(id)
//   .then ( (results) => res.send(results.rows[0].images));
// })


///////////////////////////////////////////

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

