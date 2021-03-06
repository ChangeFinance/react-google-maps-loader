function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

import React from "react"
import PropTypes from "prop-types"

import loadGoogleMapsSdk from "./loadGoogleMapsSdk"

var GoogleMapsLoader = (function(_React$Component) {
  _inherits(GoogleMapsLoader, _React$Component)

  function GoogleMapsLoader() {
    _classCallCheck(this, GoogleMapsLoader)

    var _this = _possibleConstructorReturn(this, _React$Component.call(this))

    _this.state = {
      googleMaps: null,
    }
    return _this
  }

  GoogleMapsLoader.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this

    var params = this.props.params

    loadGoogleMapsSdk(params, function(googleMaps) {
      return _this2.setState({googleMaps: googleMaps})
    })
  }

  GoogleMapsLoader.prototype.render = function render() {
    var googleMaps = this.state.googleMaps
    var render = this.props.render

    return render(googleMaps)
  }

  return GoogleMapsLoader
})(React.Component)

GoogleMapsLoader.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        params: PropTypes.shape({
          key: PropTypes.string.isRequired,
          libraries: PropTypes.string,
        }).isRequired,
        render: PropTypes.func.isRequired,
      }
    : {}

export default GoogleMapsLoader
