const qs = require('qs')

// REST verbs
const GET = 'get'
const PUT = 'put'
const POST = 'post'
const DELETE = 'delete'

// Defines requestHeaders object
const REQUEST_HEADERS = {
  'Content-Type': 'application/json'
}

// Defines request
function buildRequest (verb, options) {
  // Defines request headers
  let requestHeaders = { ...REQUEST_HEADERS }

  // Returns request object
  let req = { method: verb, headers: new Headers(requestHeaders) }

  // Appends body to request if it's defined
  if (options.body) req.body = JSON.stringify(options.body)

  // Returns the request
  return req
}

// Defines the URL for a request
function buildUrl (url, options) {
  if (options.query) {
    url = [url, '?', qs.stringify(options.query)].join('')
  }
  return url
}

// TODO - this function should return the server-provided error messages
function handleErrors (response) {
  if (!response.ok) {
    throw Error(response)
  }
  return response
}

// // // //

// $POST helper function
export const $POST = function (url, options = {}) {
  return fetch(buildUrl(url, options), buildRequest(POST, options))
  .then(handleErrors)
  .then((response) => { return response.json() })
}

// // // //

// $GET Helper function
export const $GET = function (url, options = {}) {
  return fetch(buildUrl(url, options), buildRequest(GET, options))
  .then(handleErrors)
  .then((response) => { return response.json() })
}

// // // //

// $PUT helper function
export const $PUT = function (url, options = {}) {
  return fetch(buildUrl(url, options), buildRequest(PUT, options))
  .then(handleErrors)
  .then((response) => { return response.json() })
}

// // // //

// $DEL helper function
export const $DEL = function (url, options = {}) {
  return fetch(buildUrl(url, options), buildRequest(DELETE, options))
  .then(handleErrors)
  .then((response) => { return response.json() })
}
