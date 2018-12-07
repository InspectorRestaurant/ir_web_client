const { MongoClient } = require('mongodb');
const { errorResponse, successResponse } = require('./helpers');
const DB_URL = process.env.DB;
const DB_NAME = process.env.DB_NAME;

// // // //

// GET /api/restaurants
exports.handler = function(event, context, callback) {
  MongoClient.connect(DB_URL, (err, connection) => {
    if (err) return errorResponse(callback, err);

    const db = connection.db(DB_NAME);
    const restaurantCollection = db.collection('restaurants');

    // GET /api/cities
    restaurantCollection.distinct('address.city', (err, result) => {
        if (err) return errorResponse(callback, err);

        // res.setHeader('Cache-Control', 'max-age=604800, public');
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(result)
        });

    })

  });

}
