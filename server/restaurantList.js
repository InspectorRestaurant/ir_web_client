const { MongoClient } = require('mongodb');
const { errorResponse, successResponse, handlePagination } = require('./helpers');
const DB_URL = process.env.DB;
const DB_NAME = process.env.DB_NAME;

// // // //

// Defines the attributes returned when searching
// SEE https://docs.mongodb.com/manual/reference/method/db.collection.find/#find-projection
const searchProjection = {
    '_id': true,
    'facility': true,
    'operation_name': true,
    'corp_name': true,
    'address.city': true
}

// GET /api/restaurants
exports.handler = function(event, context, callback) {

  // Connects to MongoDB
  MongoClient.connect(DB_URL, (err, connection) => {

    // Connection error handling
    if (err) return errorResponse(callback, err);

    // DB helpers
    const db = connection.db(DB_NAME);
    const restaurantCollection = db.collection('restaurants'); // TODO - constantize 'restaurants'

    // Pulls pagination parameters
    const { page, per_page, skip } = handlePagination(event.queryStringParameters || {})

    // Gets count of all restaurants (should be cached, or ideally done in a single query)
    restaurantCollection.count()
    .then((count) => {

        // Paginates the restaurant collection
        restaurantCollection.find({})
        .project(searchProjection)
        .sort({ operation_name: 1 })
        .limit(per_page)
        .skip(skip)
        .toArray((err, items) => {

          // Handles find query error
          if (err) return errorResponse(callback, err);

          // Closes the DB connection
          connection.close();

          // Sends response to client
          callback(null, {
            statusCode: 200,
            body: JSON.stringify({ items, page, per_page, count })
          });

        })

    })

  });
}
