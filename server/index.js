const newRelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const pg = require('../db/database.js');
// const mongo = require('../db/mongodb.js');
// const cassandra = require('../db/cassandradb.js');
let app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Headers = require('../client/dist/bundle-server.js').default;

const getData = async (id) => {
  let result = await pg.client.query(`SELECT image FROM images where restaurant_id = ${id};`)
  .then( (results) => {
    return results.rows})
  .catch( (err) => {console.log('error in getData: ', err)})

  let props = result.map(image => image.image);
  let component = React.createElement(Headers, props);
  let html = ReactDOMServer.renderToString(component);

  return {html: html, images: props};
}

app.get('/restaurants/:id', async (req, res) => {
  let id = req.params.id;
  let obj = await getData(id);
  
  res.send(`
  <!DOCTYPE html>
  <html>
  
  <head>
    <title>Headers</title>
  
  </head>
  
  <body style="margin: 0">
    <div id="app">${obj.html}</div>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script type="text/javascript" src="/bundle.js"></script>
  
    <script>
      ReactDOM.hydrate(
        React.createElement(Headers, ${JSON.stringify(obj)}),
        document.getElementById('app')
      )
    </script>
  </body>
  
  </html>
  `)
})

// Postgres GET
// app.get('/api/header/:id', (req, res) => {
//   let id = req.params.id;
//   pg.client.query(`SELECT image FROM images where restaurant_id = ${id};`)
//   .then( (results) => {
//     res.send({
//       images: results.rows.map(image => image.image),
      // currentLocation: {
      //   country: 'United States',
      //   metro: 'New York / Tri-State Area',
      //   region: 'Manhattan',
      //   community: 'Theater District / Times Square'
      // }
//     })
//   })
//   .catch( (err) => {res.sendStatus(500)})
// })

// MongoDB GET
// app.get('/api/header/:id', (req, res) => {
//   let id = req.params.id;
//   mongo.findImages(id)
//   .then( (results) => res.send({
//     images: results[0].images,
    // currentLocation: {
    //   country: 'United States',
    //   metro: 'New York / Tri-State Area',
    //   region: 'Manhattan',
    //   community: 'Theater District / Times Square'
    // }
//   }));
// })

// // Cassandra GET
// app.get('/api/header/:id', (req, res) => {
//   let id = req.params.id;
//   cassandra.getImages(id)
//   .then ( (results) => res.send(results.rows[0].images));
// })

// app.get('/header', function (req, res) {
//   // TODO - your code here!
//   res.send({
//     metros: { 0: `New York / Tri-State Area`, 1: `Orange County`, 2: `Philadeplhia Area` },
    // regions: {
    //   0: [`Manhattan`, `New Jersey - North`, `New Jersey - Central`],
    //   1: [`All Orange County`, `North Orange County`, `South Orange County`],
    //   2: [`Philadelphia`, `Western Suburbs`, `New Jersey Suburbs`]
    // }

//   });
// });

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

