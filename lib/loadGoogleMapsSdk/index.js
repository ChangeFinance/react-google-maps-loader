"use strict"

exports.__esModule = true

var _littleLoader = require("little-loader")

var _littleLoader2 = _interopRequireDefault(_littleLoader)

var _queryString = require("query-string")

var _queryString2 = _interopRequireDefault(_queryString)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

var GOOGLE_MAP_PLACES_API = "https://maps.googleapis.com/maps/api/js"
var NOT_LOADED = 0
var LOADING = 1
var LOADED = 2

var queue = []
var state = NOT_LOADED
var sdk = void 0

function loadGoogleMapsSdk(params, callback) {
  if (typeof window !== "undefined") {
    if (state === LOADED) {
      callback(sdk)
    } else if (state === LOADING) {
      queue.push(callback)
    } else if (window.google != null && window.google.maps != null) {
      state = LOADED
      sdk = window.google.maps
      callback(sdk)
    } else {
      state = LOADING
      queue.push(callback)

      ;(0, _littleLoader2.default)(
        GOOGLE_MAP_PLACES_API + "?" + _queryString2.default.stringify(params),
        function(err) {
          if (err) {
            throw new Error("Unable to load Google Map SDK")
          }

          state = LOADED
          sdk = window.google.maps

          while (queue.length > 0) {
            queue.pop()(sdk)
          }
        }
      )
    }
  }
}

exports.default = loadGoogleMapsSdk
module.exports = exports["default"]
