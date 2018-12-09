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
exports.handler = function(event, context, callback) {
  MongoClient.connect(DB_URL, (err, connection) => {
    if (err) return errorResponse(callback, err);

    const db = connection.db(DB_NAME);
    const violationCollection = db.collection('violations');

    // GET /api/cities
    violationCollection.find({}, (err, result) => {
        if (err) return errorResponse(callback, err);

        // TODO - this result should be cached
        // res.setHeader('Cache-Control', 'max-age=604800, public');
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(result)
        });

    })

  });
}
