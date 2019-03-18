webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/mapview/components/mapview/MapView.js":
/*!****************************************************************!*\
  !*** ./pages/components/mapview/components/mapview/MapView.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var style = {
  height: "400px",
  width: "100%"
};

var MapView =
/*#__PURE__*/
function (_Component) {
  _inherits(MapView, _Component);

  function MapView() {
    var _this;

    _classCallCheck(this, MapView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MapView).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMarkerClick", function (props, marker, e) {
      _this.setState(function (prevState) {
        return {
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      if (_this.state.showingInfoWindow) {
        _this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMarkerMounted", function (element) {
      _this.onMarkerClick(element.props, element.marker, element);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMapIdle", function () {
      _this.setState({
        mapLoaded: true
      });
    });

    _this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapLoaded: false
    };
    _this.handleMapIdle = _this.handleMapIdle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onMarkerClick = _this.onMarkerClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(MapView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Map"], {
        google: this.props.google,
        style: style,
        initialCenter: {
          lat: -27.53412,
          lng: 153.27063
        },
        zoom: this.props.zoom,
        onIdle: this.handleMapIdle
      }, this.state.mapLoaded && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
        ref: this.onMarkerMounted,
        onClick: this.onMarkerClick
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["InfoWindow"], {
        marker: this.state.activeMarker,
        visible: this.state.showingInfoWindow,
        onClose: this.onClose
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Cleve-Tooth Denture Clinic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "100 Princess St, Cleveland QLD 4163"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Ph: 0431 771 088"))));
    }
  }]);

  return MapView;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: 'AIzaSyDyhhLFhaI7oKOojSNJOi2e9lVf8PiYoTk'
})(MapView));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components\\mapview\\components\\mapview\\MapView")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.9515ecddc47c62616458.hot-update.js.map