const { MongoClient, ObjectId } = require('mongodb');
const { errorResponse, successResponse } = require('./helpers');
const DB_URL = process.env.DB;
const DB_NAME = process.env.DB_NAME;

// // // //

// GET /api/restaurants/{restaurantId}
exports.handler = function(event, context, callback) {
  MongoClient.connect(DB_URL, (err, connection) => {
    if (err) return errorResponse(callback, err);

    const db = connection.db(DB_NAME);
    const restaurantCollection = db.collection('restaurants');

    console.log(event.pathParameters)
    console.log(event.pathParameters.restaurantId)

    // Isolates restaurantID parameter
    // TODO - handle missing restaurantId parameter
    const restaurantId = event.pathParameters.restaurantId

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
