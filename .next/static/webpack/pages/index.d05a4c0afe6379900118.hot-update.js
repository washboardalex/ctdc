webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/landingcard/LandingCard.js":
/*!*****************************************************!*\
  !*** ./pages/components/landingcard/LandingCard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingCard.module.scss */ "./pages/components/landingcard/LandingCard.module.scss");
/* harmony import */ var _LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\landingcard\\LandingCard.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var LandingCard = function LandingCard() {
  return __jsx("div", {
    className: "row no-gutters cardContainer card-container-margin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 2
    }
  }, __jsx("div", {
    className: "col-12 landing-image-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "phrase-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "banner-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "d-none d-md-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  }, "Restore What is Missing, Protect What Remains"), __jsx("p", {
    className: "d-block d-md-none mobile-screen-banner-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 6
    }
  }, "Restore What is Missing"), __jsx("p", {
    className: "d-block d-md-none mobile-screen-banner-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, "Protect What Remains")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "active",
    to: "bookingsection",
    spy: true,
    smooth: true,
    offset: -25,
    duration: 800,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("button", {
    className: "booking-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }, "Book Now", __jsx("div", {
    className: "booking-button__horizontal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "booking-button__vertical",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }))))));
};

_c = LandingCard;
/* harmony default export */ __webpack_exports__["default"] = (LandingCard);

var _c;

$RefreshReg$(_c, "LandingCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9sYW5kaW5nY2FyZC9MYW5kaW5nQ2FyZC5qcyJdLCJuYW1lcyI6WyJMYW5kaW5nQ2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FFbkI7QUFBSyxhQUFTLHNEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsYUFBUyxFQUFDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscURBREQsRUFFQztBQUFHLGFBQVMsRUFBQyw2Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZELEVBR0M7QUFBRyxhQUFTLEVBQUMsNkNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFIRCxDQURELEVBTUMsTUFBQyxpREFBRDtBQUNNLGVBQVcsRUFBQyxRQURsQjtBQUVNLE1BQUUsRUFBQyxnQkFGVDtBQUdNLE9BQUcsRUFBRSxJQUhYO0FBSU0sVUFBTSxFQUFFLElBSmQ7QUFLTSxVQUFNLEVBQUUsQ0FBQyxFQUxmO0FBTU0sWUFBUSxFQUFHLEdBTmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRQztBQUFRLGFBQVMsRUFBQyxnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFFQztBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsRUFHQztBQUFLLGFBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEQsQ0FSRCxDQU5ELENBREQsQ0FERCxDQUZtQjtBQUFBLENBQXBCOztLQUFNQSxXO0FBOEJTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMDVhNGMwYWZlNjM3OTkwMDExOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xhbmRpbmdDYXJkLm1vZHVsZS5zY3NzJztcclxuXHJcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcclxuaW1wb3J0IHsgTGluaywgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5cclxuY29uc3QgTGFuZGluZ0NhcmQgPSAoKSA9PiAoXHJcblxyXG5cdDxkaXYgY2xhc3NOYW1lPXtgcm93IG5vLWd1dHRlcnMgY2FyZENvbnRhaW5lciBjYXJkLWNvbnRhaW5lci1tYXJnaW5gfT5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGxhbmRpbmctaW1hZ2UtY29udGFpbmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGhyYXNlLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyLXRleHRcIj5cclxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImQtbm9uZSBkLW1kLWJsb2NrXCI+UmVzdG9yZSBXaGF0IGlzIE1pc3NpbmcsIFByb3RlY3QgV2hhdCBSZW1haW5zPC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZC1ibG9jayBkLW1kLW5vbmUgbW9iaWxlLXNjcmVlbi1iYW5uZXItdGV4dFwiPlJlc3RvcmUgV2hhdCBpcyBNaXNzaW5nPC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZC1ibG9jayBkLW1kLW5vbmUgbW9iaWxlLXNjcmVlbi1iYW5uZXItdGV4dFwiPlByb3RlY3QgV2hhdCBSZW1haW5zPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxMaW5rXHJcbiAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICB0bz1cImJvb2tpbmdzZWN0aW9uXCJcclxuICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgIG9mZnNldD17LTI1fVxyXG4gICAgICAgICAgZHVyYXRpb249IHs4MDB9XHJcbiAgICAgICAgPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJib29raW5nLWJ1dHRvblwiPlxyXG5cdFx0XHRcdFx0XHRCb29rIE5vd1xyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctYnV0dG9uX19ob3Jpem9udGFsXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1idXR0b25fX3ZlcnRpY2FsXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nQ2FyZDsiXSwic291cmNlUm9vdCI6IiJ9