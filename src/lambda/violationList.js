const { MongoClient } = require('mongodb');
const DB_URL = process.env.DB;
const DB_NAME = process.env.DB_NAME;

// // // //

function errorResponse(callback, err) {
  console.error(err);

  callback(null, {
    statusCode: 500,
    body: JSON.stringify({ error: err })
  })
}

function successResponse(callback, res) {
  console.log('Saved new page request. Current count:', res.value.requests);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(res)
  });
}

// // // //

// GET /api/violations
// export function handler(event, context, callback) {
//   MongoClient.connect(DB_URL, (err, connection) => {
//     if (err) return errorResponse(callback, err);

//     const db = connection.db(DB_NAME);
//     const violationCollection = db.collection('violations');

//     violationCollection.find({})
//     .toArray((err, result) => {
//         if (err) return errorResponse(callback, err);

//         // res.setHeader('Cache-Control', 'max-age=604800, public');
//         callback(null, {
//           statusCode: 200,
//           body: JSON.stringify(result)
//         });

//     })

//   });

// }


// GET /api/cities
export function handler(event, context, callback) {

  // Connects to MongoDB
  MongoClient.connect(DB_URL, { useNewUrlParser: true }, (err, connection) => {

    // Connection error handling
    if (err) return errorResponse(callback, err);

    // DB helpers
    const db = connection.db(DB_NAME);
    const violationCollection = db.collection('violations'); // TODO - constantize 'violations'

    // Gets distinct cities
    violationCollection.find({})
    .toArray((err, result) => {

      // Handles find query error
      if (err) return errorResponse(callback, err);

      // Closes the DB connection
      connection.close();

      // Sends response to client
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      });

    })

  })

}
