"use strict"

exports.__esModule = true

var _react = require("react")

var _react2 = _interopRequireDefault(_react)

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _loadGoogleMapsSdk = require("./loadGoogleMapsSdk")

var _loadGoogleMapsSdk2 = _interopRequireDefault(_loadGoogleMapsSdk)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

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

    ;(0, _loadGoogleMapsSdk2.default)(params, function(googleMaps) {
      return _this2.setState({googleMaps: googleMaps})
    })
  }

  GoogleMapsLoader.prototype.render = function render() {
    var googleMaps = this.state.googleMaps
    var render = this.props.render

    return render(googleMaps)
  }

  return GoogleMapsLoader
})(_react2.default.Component)

GoogleMapsLoader.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        params: _propTypes2.default.shape({
          key: _propTypes2.default.string.isRequired,
          libraries: _propTypes2.default.string,
        }).isRequired,
        render: _propTypes2.default.func.isRequired,
      }
    : {}

exports.default = GoogleMapsLoader
module.exports = exports["default"]
