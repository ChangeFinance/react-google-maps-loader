import load from "little-loader"
import qs from "query-string"

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

      load(GOOGLE_MAP_PLACES_API + "?" + qs.stringify(params), function(err) {
        if (err) {
          throw new Error("Unable to load Google Map SDK")
        }

        state = LOADED
        sdk = window.google.maps

        while (queue.length > 0) {
          queue.pop()(sdk)
        }
      })
    }
  }
}

export default loadGoogleMapsSdk
