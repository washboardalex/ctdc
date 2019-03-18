webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/components/bookingcard/BookingCard.js":
/*!*****************************************************!*\
  !*** ./pages/components/bookingcard/BookingCard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_calendlywidget_CalendlyWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/calendlywidget/CalendlyWidget */ "./pages/components/bookingcard/components/calendlywidget/CalendlyWidget.js");
/* harmony import */ var _BookingCard_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookingCard.scss */ "./pages/components/bookingcard/BookingCard.scss");
/* harmony import */ var _BookingCard_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BookingCard_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var BookingCard =
/*#__PURE__*/
function (_Component) {
  _inherits(BookingCard, _Component);

  function BookingCard() {
    _classCallCheck(this, BookingCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(BookingCard).apply(this, arguments));
  }

  _createClass(BookingCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //Adds script tag for calendly widget
      var body = document.querySelector('body');
      var script = document.createElement('script');
      script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
      script.setAttribute('type', 'text/javascript');
      body.appendChild(script);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "booking-card-margin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
        top: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-block d-lg-none col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "booking-card-head-container col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        id: "bookingsection",
        className: "booking-heading"
      }, "BOOK NOW")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 booking-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We have provided an online booking form to make your booking process as convenient as possible - if you prefer to book over the phone or via email, please do not hesitate to contact us on 0450 260 650, or send an email to cleveland.tooth@gmail.com. ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 booking-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Aside from the home clinic, Ana also works at the Aboriginal and Torres Strait Islander Health Service - this means that during the week she is often unavailable.  If none of the times below work for you, please let us know and we will do our best to find an appointment time that is mutually suitable."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-6 col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row no-pad no-gutters booking-card-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 calendly-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_calendlywidget_CalendlyWidget__WEBPACK_IMPORTED_MODULE_2__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
        right: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-none d-lg-block col-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "booking-card-head-container col-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        id: "bookingsection",
        className: "booking-heading"
      }, "BOOK NOW")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 booking-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We have provided an online booking form to make your booking process as convenient as possible - if you prefer to book over the phone or via email, please do not hesitate to contact us on 0450 260 650, or send an email to cleveland.tooth@gmail.com. ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12 booking-text"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Aside from the home clinic, Ana also works at the Aboriginal and Torres Strait Islander Health Service - this means that during the week she is often unavailable.  If none of the times below work for you, please let us know and we will do our best to find an appointment time that is mutually suitable.")))))));
    }
  }]);

  return BookingCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BookingCard);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/components\\bookingcard\\BookingCard")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.f312524a0259802fb8c0.hot-update.js.map