const { MongoClient, ObjectId } = require('mongodb');
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

// GET /api/restaurants/{restaurantId}
exports.handler = function(event, context, callback) {
  MongoClient.connect(DB_URL, (err, connection) => {
    if (err) return errorResponse(callback, err);

    const db = connection.db(DB_NAME);
    const restaurantCollection = db.collection('restaurants');

    // Isolates restaurantID parameter
    // TODO - handle missing restaurantId parameter
    const restaurantId = event.queryStringParameters.id

    // Finds ONE restaurant
    restaurantCollection.findOne({ _id: ObjectId(restaurantId) }, (err, result) => {
      if (err) return errorResponse(callback, err);

      console.log('FOUND FOUND???')
      console.log(result)

      connection.close();

      callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      });

    })

  });
}
