webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/mapview/MapContainer.js":
/*!**************************************************!*\
  !*** ./pages/components/mapview/MapContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_mapview_MapView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mapview/MapView */ "./pages/components/mapview/components/mapview/MapView.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapContainer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapContainer.scss */ "./pages/components/mapview/MapContainer.scss");
/* harmony import */ var _MapContainer_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MapContainer_scss__WEBPACK_IMPORTED_MODULE_3__);


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





var MapContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MapContainer, _React$Component);

  function MapContainer() {
    var _this;

    _classCallCheck(this, MapContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MapContainer).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updatePredicate", function () {
      _this.setState({
        isSmallWindow: window.innerWidth < 994
      });
    });

    _this.state = {
      isSmallWindow: false
    };
    return _this;
  }

  _createClass(MapContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
        top: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-block d-lg-none col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          border: '1px solid black'
        },
        className: "map-heading-container-phonescreen"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-heading-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        id: "locationsection",
        className: "map-heading"
      }, "LOCATION"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-address-padding"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "map-address-text"
      }, "100 Princess Street "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "map-address-text"
      }, "Cleveland QLD 4163"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "default",
        className: "col-lg-8 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_mapview_MapView__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-none d-lg-block col-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-heading-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-heading-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        id: "locationsection",
        className: "map-heading"
      }, "LOCATION")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "map-address-padding"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "map-address-text"
      }, "100 Princess Street"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "map-address-text"
      }, "Cleveland QLD 4163")))));
    }
  }]);

  return MapContainer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MapContainer); // import MapView from './components/mapview/MapView';
// import Fade from 'react-reveal/Fade';
// import './MapContainer.scss';
// const MapContainer = () => {
//     return (
//         <div className="row map-component-container">
//             <Fade left>
//             <div className="col-4">
//                 <div className="map-heading-container">
//                     <div className="map-heading-wrapper">
//                         <h1 className="map-heading">LOCATION</h1>
//                     </div>
//                     <div className="map-address-padding">
//                         <p className="map-address-text">100 Princess Street</p>
//                         <p className="map-address-text">Cleveland QLD 4163</p>
//                     </div>
//                 </div>
//             </div>    
//             </Fade>
//             <div style={{paddingRight:'15px'}} id="default" className="col-8">
//                 <MapView />
//             </div>
//         </div>    
//     );
// } 
// export default MapContainer;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components\\mapview\\MapContainer")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.9611f3494247aef3eb5b.hot-update.js.map