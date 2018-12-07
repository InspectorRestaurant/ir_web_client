
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

// Defines default pagination options
function handlePagination (query) {
    let page = Number(query.page) || 1;
    page = Math.max(page - 1, 0)
    let per_page = Number(query.per_page) || 10;
    let skip = per_page * page;
    return { page, per_page, skip }
}

// // // //

module.exports = {
    errorResponse,
    successResponse,
    handlePagination
}
