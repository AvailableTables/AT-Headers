const sqlDb = require('../db/database.js');

//For Mongo
//const mongoDb = require('../../db/mongodb')

// var processImages = (err, results, callback) => {
//   results = (JSON.parse(JSON.stringify(results)));
//   console.log('processed results: ', JSON.parse(JSON.stringify(results)));
//   console.log('unprocessed results: ', results);
//   var arr = [];
//   for (var i = 0; i < results.length; i++) {
//     arr.push(results[i].url);
//   }
//   callback(err, arr);
// };

module.exports = {

  //build a query
  // getRestaurantFromDb: (id, callback) => {
  //   var queryStr = `select * from Restaurant where id=${id}`;
  //   sqlDb.query(queryStr, (err, results) => {
  //     console.log(results);
  //     // console.log(JSON.parse(JSON.stringify(results)));
  //     //callback(err, results);
  //   });
  // },
  getImagesFromDb: (id, callback) => {
    var queryStr = `select * from Images where restaurant_id=${id}`;

    sqlDb.query(queryStr, (err, results) => {
      console.log(results);
      if (err) {
        console.error(err);
      } else {
        var arr = [];
        for (var i = 0; i < results.length; i++) {
          arr.push(results[i].url);
        }
        callback(arr);
      }
      //processImages(err, results, callback);
      // results = (JSON.parse(JSON.stringify(results)));
      // console.log('processed results: ', JSON.parse(JSON.stringify(results)));
      // console.log('unprocessed results: ', results);
    });
  }
};


// results = (JSON.parse(JSON.stringify(results)));
// console.log('processed results: ', JSON.parse(JSON.stringify(results)));
// console.log('unprocessed results: ', results);
// var arr = [];
// for (var i = 0; i < results.length; i++) {
//   arr.push(results[i].url);
// }
// callback(err, arr);
