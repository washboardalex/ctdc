webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/bookingcard/BookingCard.js":
/*!*****************************************************!*\
  !*** ./pages/components/bookingcard/BookingCard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_calendlywidget_CalendlyWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/calendlywidget/CalendlyWidget */ "./pages/components/bookingcard/components/calendlywidget/CalendlyWidget.js");
/* harmony import */ var _BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BookingCard.module.scss */ "./pages/components/bookingcard/BookingCard.module.scss");
/* harmony import */ var _BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _landingcard_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../landingcard/LandingCard.module.scss */ "./pages/components/landingcard/LandingCard.module.scss");
/* harmony import */ var _landingcard_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_landingcard_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\bookingcard\\BookingCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var BookingCard = /*#__PURE__*/function (_Component) {
  Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(BookingCard, _Component);

  var _super = _createSuper(BookingCard);

  function BookingCard() {
    Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BookingCard);

    return _super.apply(this, arguments);
  }

  Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BookingCard, [{
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
      return __jsx("div", {
        className: "".concat(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bookingCardMargin),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 4
        }
      }, __jsx("div", {
        id: "bookingsection",
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 5
        }
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_6___default.a, {
        top: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }
      }, __jsx("div", {
        style: {
          marginBottom: '20px'
        },
        className: "d-block d-lg-none col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "".concat(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bookingCardHeadContainer, " col-12"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 8
        }
      }, __jsx("h1", {
        className: "".concat(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bookingHeading),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }, "BOOK NOW")), __jsx("div", {
        className: "col-12 ".concat(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bookingText),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 8
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }, "We have provided an online booking form to make your booking process as easy as possible - if you prefer to book over the phone or via email, please do not hesitate to contact us on 0450 260 650, or send an email to cleveland.tooth@gmail.com. ")), __jsx("div", {
        className: "col-12 ".concat(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bookingText),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 8
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, "Aside from the home clinic, Ana also works at the Aboriginal and Torres Strait Islander Health Service - this means that during the week she is often unavailable.  If none of the times below work for you, please let us know and we will do our best to find an appointment time that is mutually suitable."))))), __jsx("div", {
        className: "col-lg-6 col-md-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "row no-pad no-gutters ".concat(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bookingCardContainer),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "col-12 ".concat(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.calendlyContainer),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 8
        }
      }))), __jsx("div", {
        className: "d-none d-lg-block col-6",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "".concat(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bookingCardHeadContainer, " col-12"),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 8
        }
      }, __jsx("h1", {
        className: "".concat(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bookingHeading),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, "BOOK NOW")), __jsx("div", {
        className: "col-12 ".concat(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bookingText),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 8
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 9
        }
      }, "We have provided an online booking form to make your booking process as convenient as possible - if you prefer to book over the phone or via email, please do not hesitate to contact us on 0450 260 650, or send an email to cleveland.tooth@gmail.com. ")), __jsx("div", {
        className: "col-12 ".concat(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.bookingText),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 8
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      }, "Aside from the home clinic, Ana also works at the Aboriginal and Torres Strait Islander Health Service - this means that during the week she is often unavailable.  If none of the times below work for you, please let us know and we will do our best to find an appointment time that is mutually suitable.")), __jsx("div", {
        style: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 29
        }
      }, __jsx("button", {
        className: "".concat(_landingcard_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.bookingButton),
        onClick: function onClick() {
          return window.open('https://bookings.nookal.com/bookings/company/VBMMX', '_blank');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 33
        }
      }, "Book Online", __jsx("div", {
        className: "".concat(_landingcard_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.bookingButton__horizontal),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 37
        }
      }), __jsx("div", {
        className: "".concat(_landingcard_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.bookingButton__vertical),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 37
        }
      })))))));
    }
  }]);

  return BookingCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BookingCard);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9ib29raW5nY2FyZC9Cb29raW5nQ2FyZC5qcyJdLCJuYW1lcyI6WyJCb29raW5nQ2FyZCIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZXMiLCJib29raW5nQ2FyZE1hcmdpbiIsIm1hcmdpbkJvdHRvbSIsImJvb2tpbmdDYXJkSGVhZENvbnRhaW5lciIsImJvb2tpbmdIZWFkaW5nIiwiYm9va2luZ1RleHQiLCJib29raW5nQ2FyZENvbnRhaW5lciIsImNhbGVuZGx5Q29udGFpbmVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIndpZHRoIiwic3R5bGVzMiIsImJvb2tpbmdCdXR0b24iLCJ3aW5kb3ciLCJvcGVuIiwiYm9va2luZ0J1dHRvbl9faG9yaXpvbnRhbCIsImJvb2tpbmdCdXR0b25fX3ZlcnRpY2FsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBSUE7QUFDQTs7SUFFTUEsVzs7Ozs7Ozs7Ozs7Ozt3Q0FFZTtBQUNuQjtBQUNFLFVBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxVQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FELFlBQU0sQ0FBQ0UsWUFBUCxDQUFvQixLQUFwQixFQUE0Qix1REFBNUI7QUFDQUYsWUFBTSxDQUFDRSxZQUFQLENBQW9CLE1BQXBCLEVBQTJCLGlCQUEzQjtBQUNBTCxVQUFJLENBQUNNLFdBQUwsQ0FBaUJILE1BQWpCO0FBQ0Q7Ozs2QkFFTztBQUNSLGFBQ0M7QUFBSyxpQkFBUyxZQUFLSSwrREFBTSxDQUFDQyxpQkFBWixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLFVBQUUsRUFBQyxnQkFBUjtBQUF5QixpQkFBUyxFQUFDLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQyxNQUFDLHdEQUFEO0FBQU0sV0FBRyxNQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFLLGFBQUssRUFBRTtBQUFDQyxzQkFBWSxFQUFDO0FBQWQsU0FBWjtBQUFtQyxpQkFBUyxFQUFDLDBCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsWUFBS0YsK0RBQU0sQ0FBQ0csd0JBQVosWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSSxpQkFBUyxZQUFLSCwrREFBTSxDQUFDSSxjQUFaLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxDQURELEVBSUM7QUFBSyxpQkFBUyxtQkFBWUosK0RBQU0sQ0FBQ0ssV0FBbkIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrUEFERCxDQUpELEVBT0M7QUFBSyxpQkFBUyxtQkFBWUwsK0RBQU0sQ0FBQ0ssV0FBbkIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwVEFERCxDQVBELENBREQsQ0FEQSxDQURELEVBZ0JDO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxrQ0FBMkJMLCtEQUFNLENBQUNNLG9CQUFsQyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLGlCQUFTLG1CQUFZTiwrREFBTSxDQUFDTyxpQkFBbkIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FERCxDQWhCRCxFQXVCQztBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLGlCQUFTLFlBQUtQLCtEQUFNLENBQUNHLHdCQUFaLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUksaUJBQVMsWUFBS0gsK0RBQU0sQ0FBQ0ksY0FBWixDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsQ0FERCxFQUlDO0FBQUssaUJBQVMsbUJBQVlKLCtEQUFNLENBQUNLLFdBQW5CLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscVFBREQsQ0FKRCxFQU9DO0FBQUssaUJBQVMsbUJBQVlMLCtEQUFNLENBQUNLLFdBQW5CLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMFRBREQsQ0FQRCxFQVVzQjtBQUFLLGFBQUssRUFBRTtBQUFDRyxpQkFBTyxFQUFDLE1BQVQ7QUFBaUJDLHdCQUFjLEVBQUUsUUFBakM7QUFBMkNDLG9CQUFVLEVBQUUsUUFBdkQ7QUFBaUVDLGVBQUssRUFBRTtBQUF4RSxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFRLGlCQUFTLFlBQUtDLDJFQUFPLENBQUNDLGFBQWIsQ0FBakI7QUFBK0MsZUFBTyxFQUFFO0FBQUEsaUJBQU1DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLG9EQUFaLEVBQWlFLFFBQWpFLENBQU47QUFBQSxTQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUVJO0FBQUssaUJBQVMsWUFBS0gsMkVBQU8sQ0FBQ0kseUJBQWIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosRUFHSTtBQUFLLGlCQUFTLFlBQUtKLDJFQUFPLENBQUNLLHVCQUFiLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUhKLENBREosQ0FWdEIsQ0FERCxDQXZCRCxDQURELENBREQ7QUFnREE7Ozs7RUE1RHdCQywrQzs7QUFnRVgxQiwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMDE1NDVlYTFhZjJiZmIxZTVjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcclxuXHJcbmltcG9ydCBDYWxlbmRseVdpZGdldCBmcm9tICcuL2NvbXBvbmVudHMvY2FsZW5kbHl3aWRnZXQvQ2FsZW5kbHlXaWRnZXQnO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQm9va2luZ0NhcmQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgc3R5bGVzMiBmcm9tICcuLi9sYW5kaW5nY2FyZC9MYW5kaW5nQ2FyZC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jbGFzcyBCb29raW5nQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0Ly9BZGRzIHNjcmlwdCB0YWcgZm9yIGNhbGVuZGx5IHdpZGdldFxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgICdodHRwczovL2Fzc2V0cy5jYWxlbmRseS5jb20vYXNzZXRzL2V4dGVybmFsL3dpZGdldC5qcycpO1xyXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQvamF2YXNjcmlwdCcpXHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgfVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJvb2tpbmdDYXJkTWFyZ2lufWB9PlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJib29raW5nc2VjdGlvblwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PEZhZGUgdG9wPlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTonMjBweCd9fSBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbGctbm9uZSBjb2wtMTJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJvb2tpbmdDYXJkSGVhZENvbnRhaW5lcn0gY29sLTEyYH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm9va2luZ0hlYWRpbmd9YH0+Qk9PSyBOT1c8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyICR7c3R5bGVzLmJvb2tpbmdUZXh0fWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+V2UgaGF2ZSBwcm92aWRlZCBhbiBvbmxpbmUgYm9va2luZyBmb3JtIHRvIG1ha2UgeW91ciBib29raW5nIHByb2Nlc3MgYXMgZWFzeSBhcyBwb3NzaWJsZSAtIGlmIHlvdSBwcmVmZXIgdG8gYm9vayBvdmVyIHRoZSBwaG9uZSBvciB2aWEgZW1haWwsIHBsZWFzZSBkbyBub3QgaGVzaXRhdGUgdG8gY29udGFjdCB1cyBvbiAwNDUwIDI2MCA2NTAsIG9yIHNlbmQgYW4gZW1haWwgdG8gY2xldmVsYW5kLnRvb3RoQGdtYWlsLmNvbS4gPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyICR7c3R5bGVzLmJvb2tpbmdUZXh0fWB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+QXNpZGUgZnJvbSB0aGUgaG9tZSBjbGluaWMsIEFuYSBhbHNvIHdvcmtzIGF0IHRoZSBBYm9yaWdpbmFsIGFuZCBUb3JyZXMgU3RyYWl0IElzbGFuZGVyIEhlYWx0aCBTZXJ2aWNlIC0gdGhpcyBtZWFucyB0aGF0IGR1cmluZyB0aGUgd2VlayBzaGUgaXMgb2Z0ZW4gdW5hdmFpbGFibGUuICBJZiBub25lIG9mIHRoZSB0aW1lcyBiZWxvdyB3b3JrIGZvciB5b3UsIHBsZWFzZSBsZXQgdXMga25vdyBhbmQgd2Ugd2lsbCBkbyBvdXIgYmVzdCB0byBmaW5kIGFuIGFwcG9pbnRtZW50IHRpbWUgdGhhdCBpcyBtdXR1YWxseSBzdWl0YWJsZS48L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2Plx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9GYWRlPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgbm8tcGFkIG5vLWd1dHRlcnMgJHtzdHlsZXMuYm9va2luZ0NhcmRDb250YWluZXJ9YH0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Bjb2wtMTIgJHtzdHlsZXMuY2FsZW5kbHlDb250YWluZXJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWJsb2NrIGNvbC02XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib29raW5nQ2FyZEhlYWRDb250YWluZXJ9IGNvbC0xMmB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJvb2tpbmdIZWFkaW5nfWB9PkJPT0sgTk9XPC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbC0xMiAke3N0eWxlcy5ib29raW5nVGV4dH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPldlIGhhdmUgcHJvdmlkZWQgYW4gb25saW5lIGJvb2tpbmcgZm9ybSB0byBtYWtlIHlvdXIgYm9va2luZyBwcm9jZXNzIGFzIGNvbnZlbmllbnQgYXMgcG9zc2libGUgLSBpZiB5b3UgcHJlZmVyIHRvIGJvb2sgb3ZlciB0aGUgcGhvbmUgb3IgdmlhIGVtYWlsLCBwbGVhc2UgZG8gbm90IGhlc2l0YXRlIHRvIGNvbnRhY3QgdXMgb24gMDQ1MCAyNjAgNjUwLCBvciBzZW5kIGFuIGVtYWlsIHRvIGNsZXZlbGFuZC50b290aEBnbWFpbC5jb20uIDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbC0xMiAke3N0eWxlcy5ib29raW5nVGV4dH1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxwPkFzaWRlIGZyb20gdGhlIGhvbWUgY2xpbmljLCBBbmEgYWxzbyB3b3JrcyBhdCB0aGUgQWJvcmlnaW5hbCBhbmQgVG9ycmVzIFN0cmFpdCBJc2xhbmRlciBIZWFsdGggU2VydmljZSAtIHRoaXMgbWVhbnMgdGhhdCBkdXJpbmcgdGhlIHdlZWsgc2hlIGlzIG9mdGVuIHVuYXZhaWxhYmxlLiAgSWYgbm9uZSBvZiB0aGUgdGltZXMgYmVsb3cgd29yayBmb3IgeW91LCBwbGVhc2UgbGV0IHVzIGtub3cgYW5kIHdlIHdpbGwgZG8gb3VyIGJlc3QgdG8gZmluZCBhbiBhcHBvaW50bWVudCB0aW1lIHRoYXQgaXMgbXV0dWFsbHkgc3VpdGFibGUuPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlczIuYm9va2luZ0J1dHRvbn1gfSBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbignaHR0cHM6Ly9ib29raW5ncy5ub29rYWwuY29tL2Jvb2tpbmdzL2NvbXBhbnkvVkJNTVgnLCdfYmxhbmsnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvb2sgT25saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMyLmJvb2tpbmdCdXR0b25fX2hvcml6b250YWx9YH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMyLmJvb2tpbmdCdXR0b25fX3ZlcnRpY2FsfWB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2Plx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblx0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29raW5nQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9