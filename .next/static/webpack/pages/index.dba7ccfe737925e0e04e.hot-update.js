webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/navbar/NavBar.js":
/*!*******************************************!*\
  !*** ./pages/components/navbar/NavBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var D_work_ctdc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_burgermenu_BurgerMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/burgermenu/BurgerMenu */ "./pages/components/navbar/components/burgermenu/BurgerMenu.js");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavBar.module.scss */ "./pages/components/navbar/NavBar.module.scss");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\navbar\\NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

//React scroll can use element id as a reference for where to scroll.
//I have put these either in the title elements (h1) or their surrounding divs




var NavBar = /*#__PURE__*/function (_React$Component) {
  Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(NavBar, _React$Component);

  var _super = _createSuper(NavBar);

  function NavBar() {
    var _this;

    Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NavBar);

    _this = _super.call(this);

    Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "updatePredicate", function () {
      _this.setState({
        useCheezeburger: window.innerWidth < 1085
      });
    });

    _this.state = {
      useCheezeburger: true
    };
    return _this;
  }

  Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NavBar, [{
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
      var useCheezeburger = this.state.useCheezeburger;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }
      }, useCheezeburger ? __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 12
        }
      }, __jsx(_components_burgermenu_BurgerMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      })) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 12
        }
      }, __jsx("div", {
        className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.all, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.navContactBar),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 12
        }
      }, __jsx("div", {
        className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.all, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contactBarText),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 14
        }
      }, "Ph: 0431 771 088 | E-mail: cleveland.tooth@gmail.com | Provider Number: 4040361H | ABN: 68 099 671 964")), __jsx("nav", {
        style: {
          marginBottom: '40px',
          marginTop: '20px'
        },
        className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.all, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.navBarStyle),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 12
        }
      }, __jsx("ul", {
        className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.alignNavItems),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 8
        }
      }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        activeClass: "active",
        to: "aboutsection",
        spy: true,
        smooth: true,
        offset: -70,
        duration: 700,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }
      }, __jsx("li", {
        id: "about",
        className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.button, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.all, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.type1),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, "About")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        activeClass: "active",
        to: "servicessection",
        spy: true,
        smooth: true,
        offset: -70,
        duration: 800,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }
      }, __jsx("li", {
        id: "services",
        className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.button, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.type2),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }
      }, __jsx("span", {
        className: "all no-underline",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 76
        }
      }, "Services"))), __jsx("li", {
        id: "",
        className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.all, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.buttonMain, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.navBarHead),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }
      }, __jsx("h1", {
        className: "".concat(all, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.navLogoText),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }
      }, "Cleve-Tooth"), __jsx("img", {
        style: {
          margin: '20px'
        },
        src: "/static/logo3_opt.png",
        alt: "Tooth",
        height: "90",
        width: "90",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }), __jsx("h1", {
        className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.all, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.navLogoText),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }
      }, "Denture Clinic")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        activeClass: "active",
        to: "locationsection",
        spy: true,
        smooth: true,
        offset: -10,
        duration: 800,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }
      }, __jsx("li", {
        id: "faq",
        className: "all button type3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }
      }, "Location")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        activeClass: "active",
        to: "contactsection",
        spy: true,
        smooth: true,
        offset: -35,
        duration: 1000,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }
      }, __jsx("li", {
        id: "contact",
        className: "all button type2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }, "Contact"))))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uYXZiYXIvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsInNldFN0YXRlIiwidXNlQ2hlZXplYnVyZ2VyIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0YXRlIiwidXBkYXRlUHJlZGljYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZXMiLCJhbGwiLCJuYXZDb250YWN0QmFyIiwiY29udGFjdEJhclRleHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJuYXZCYXJTdHlsZSIsImFsaWduTmF2SXRlbXMiLCJidXR0b24iLCJ0eXBlMSIsInR5cGUyIiwiYnV0dG9uTWFpbiIsIm5hdkJhckhlYWQiLCJuYXZMb2dvVGV4dCIsIm1hcmdpbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7SUFJTUEsTTs7Ozs7QUFDTCxvQkFBYztBQUFBOztBQUFBOztBQUNiOztBQURhLDBRQWdCSyxZQUFNO0FBQ3RCLFlBQUtDLFFBQUwsQ0FBYztBQUFFQyx1QkFBZSxFQUFFQyxNQUFNLENBQUNDLFVBQVAsR0FBb0I7QUFBdkMsT0FBZDtBQUNELEtBbEJZOztBQUViLFVBQUtDLEtBQUwsR0FBYTtBQUNaSCxxQkFBZSxFQUFFO0FBREwsS0FBYjtBQUZhO0FBS2I7Ozs7d0NBRW1CO0FBQ2pCLFdBQUtJLGVBQUw7QUFDQUgsWUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLRCxlQUF2QztBQUNEOzs7MkNBRXNCO0FBQ3JCSCxZQUFNLENBQUNLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtGLGVBQTFDO0FBQ0Q7Ozs2QkFNUTtBQUNQLFVBQU1KLGVBQWUsR0FBRyxLQUFLRyxLQUFMLENBQVdILGVBQW5DO0FBRUYsYUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tBLGVBQWUsR0FDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FEYyxHQUtkLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFLLGlCQUFTLFlBQUtPLDJEQUFNLENBQUNDLEdBQVosY0FBbUJELDJEQUFNLENBQUNFLGFBQTFCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsWUFBS0YsMkRBQU0sQ0FBQ0MsR0FBWixjQUFtQkQsMkRBQU0sQ0FBQ0csY0FBMUIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtIQURGLENBREEsRUFNQTtBQUFLLGFBQUssRUFBRTtBQUFDQyxzQkFBWSxFQUFDLE1BQWQ7QUFBc0JDLG1CQUFTLEVBQUM7QUFBaEMsU0FBWjtBQUFxRCxpQkFBUyxZQUFLTCwyREFBTSxDQUFDQyxHQUFaLGNBQW1CRCwyREFBTSxDQUFDTSxXQUExQixDQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0o7QUFBSSxpQkFBUyxZQUFLTiwyREFBTSxDQUFDTyxhQUFaLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNPLE1BQUMsaURBQUQ7QUFDRSxtQkFBVyxFQUFDLFFBRGQ7QUFFRSxVQUFFLEVBQUMsY0FGTDtBQUdFLFdBQUcsRUFBRSxJQUhQO0FBSUUsY0FBTSxFQUFFLElBSlY7QUFLRSxjQUFNLEVBQUUsQ0FBQyxFQUxYO0FBTUUsZ0JBQVEsRUFBRyxHQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRRTtBQUFJLFVBQUUsRUFBQyxPQUFQO0FBQWUsaUJBQVMsWUFBS1AsMkRBQU0sQ0FBQ1EsTUFBWixjQUFzQlIsMkRBQU0sQ0FBQ0MsR0FBN0IsY0FBb0NELDJEQUFNLENBQUNTLEtBQTNDLENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsQ0FEUCxFQVdPLE1BQUMsaURBQUQ7QUFDRSxtQkFBVyxFQUFDLFFBRGQ7QUFFRSxVQUFFLEVBQUMsaUJBRkw7QUFHRSxXQUFHLEVBQUUsSUFIUDtBQUlFLGNBQU0sRUFBRSxJQUpWO0FBS0UsY0FBTSxFQUFFLENBQUMsRUFMWDtBQU1FLGdCQUFRLEVBQUcsR0FOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUo7QUFBSSxVQUFFLEVBQUMsVUFBUDtBQUFrQixpQkFBUyxZQUFLVCwyREFBTSxDQUFDUSxNQUFaLGNBQXNCUiwyREFBTSxDQUFDVSxLQUE3QixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWlFO0FBQU0saUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBakUsQ0FSSSxDQVhQLEVBcUJDO0FBQUksVUFBRSxFQUFDLEVBQVA7QUFBVSxpQkFBUyxZQUFLViwyREFBTSxDQUFDQyxHQUFaLGNBQW1CRCwyREFBTSxDQUFDVyxVQUExQixjQUF3Q1gsMkRBQU0sQ0FBQ1ksVUFBL0MsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNRO0FBQUksaUJBQVMsWUFBS1gsR0FBTCxjQUFZRCwyREFBTSxDQUFDYSxXQUFuQixDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFIsRUFFUTtBQUFLLGFBQUssRUFBRTtBQUFDQyxnQkFBTSxFQUFDO0FBQVIsU0FBWjtBQUE2QixXQUFHLEVBQUMsdUJBQWpDO0FBQXlELFdBQUcsRUFBQyxPQUE3RDtBQUFxRSxjQUFNLEVBQUMsSUFBNUU7QUFBaUYsYUFBSyxFQUFDLElBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGUixFQUdRO0FBQUksaUJBQVMsWUFBS2QsMkRBQU0sQ0FBQ0MsR0FBWixjQUFtQkQsMkRBQU0sQ0FBQ2EsV0FBMUIsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUhSLENBckJELEVBMEJPLE1BQUMsaURBQUQ7QUFDRSxtQkFBVyxFQUFDLFFBRGQ7QUFFRSxVQUFFLEVBQUMsaUJBRkw7QUFHRSxXQUFHLEVBQUUsSUFIUDtBQUlFLGNBQU0sRUFBRSxJQUpWO0FBS0UsY0FBTSxFQUFFLENBQUMsRUFMWDtBQU1FLGdCQUFRLEVBQUcsR0FOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUo7QUFBSSxVQUFFLEVBQUMsS0FBUDtBQUFhLGlCQUFTLEVBQUMsa0JBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUkksQ0ExQlAsRUFvQ08sTUFBQyxpREFBRDtBQUNFLG1CQUFXLEVBQUMsUUFEZDtBQUVFLFVBQUUsRUFBQyxnQkFGTDtBQUdFLFdBQUcsRUFBRSxJQUhQO0FBSUUsY0FBTSxFQUFFLElBSlY7QUFLRSxjQUFNLEVBQUUsQ0FBQyxFQUxYO0FBTUUsZ0JBQVEsRUFBRyxJQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRSjtBQUFJLFVBQUUsRUFBQyxTQUFQO0FBQWlCLGlCQUFTLEVBQUMsa0JBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkksQ0FwQ1AsQ0FESSxDQU5BLENBTk4sQ0FGSDtBQW1FQTs7OztFQTNGbUJFLDRDQUFLLENBQUNDLFM7O0FBOEZaekIscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGJhN2NjZmU3Mzc5MjVlMGUwNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vUmVhY3Qgc2Nyb2xsIGNhbiB1c2UgZWxlbWVudCBpZCBhcyBhIHJlZmVyZW5jZSBmb3Igd2hlcmUgdG8gc2Nyb2xsLlxyXG4vL0kgaGF2ZSBwdXQgdGhlc2UgZWl0aGVyIGluIHRoZSB0aXRsZSBlbGVtZW50cyAoaDEpIG9yIHRoZWlyIHN1cnJvdW5kaW5nIGRpdnNcclxuaW1wb3J0IHsgTGluaywgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5cclxuaW1wb3J0IEJ1cmdlciBmcm9tICcuL2NvbXBvbmVudHMvYnVyZ2VybWVudS9CdXJnZXJNZW51JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdkJhci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5cclxuXHJcbmNsYXNzIE5hdkJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0dXNlQ2hlZXplYnVyZ2VyOiB0cnVlXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMudXBkYXRlUHJlZGljYXRlKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVByZWRpY2F0ZSk7XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlUHJlZGljYXRlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVByZWRpY2F0ZSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VDaGVlemVidXJnZXI6IHdpbmRvdy5pbm5lcldpZHRoIDwgMTA4NSB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHVzZUNoZWV6ZWJ1cmdlciA9IHRoaXMuc3RhdGUudXNlQ2hlZXplYnVyZ2VyO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdCAgXHJcblx0ICAgIDxkaXY+XHJcbiAgICAgICAgIHt1c2VDaGVlemVidXJnZXIgPyAoXHJcbiAgICAgICAgICAgPGRpdj4gXHJcbiAgICAgICAgICAgXHQ8QnVyZ2VyIC8+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWxsfSAke3N0eWxlcy5uYXZDb250YWN0QmFyfWB9PiBcclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWxsfSAke3N0eWxlcy5jb250YWN0QmFyVGV4dH1gfT4gXHJcbiAgICAgICAgICAgICAgIFBoOiAwNDMxIDc3MSAwODggfCBFLW1haWw6IGNsZXZlbGFuZC50b290aEBnbWFpbC5jb20gfCBQcm92aWRlciBOdW1iZXI6IDQwNDAzNjFIIHwgQUJOOiA2OCAwOTkgNjcxIDk2NFxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPG5hdiBzdHlsZT17e21hcmdpbkJvdHRvbTonNDBweCcsIG1hcmdpblRvcDonMjBweCd9fSBjbGFzc05hbWU9e2Ake3N0eWxlcy5hbGx9ICR7c3R5bGVzLm5hdkJhclN0eWxlfWB9PlxyXG4gXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLmFsaWduTmF2SXRlbXN9YH0+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPVwiYWJvdXRzZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249IHs3MDB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpIGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXR0b259ICR7c3R5bGVzLmFsbH0gJHtzdHlsZXMudHlwZTF9YH0+QWJvdXQ8L2xpPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89XCJzZXJ2aWNlc3NlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj0gezgwMH1cclxuICAgICAgICAgICAgICA+XHJcbiBcdFx0XHRcdFx0XHRcdCAgPGxpIGlkPVwic2VydmljZXNcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXR0b259ICR7c3R5bGVzLnR5cGUyfWB9PjxzcGFuIGNsYXNzTmFtZT1cImFsbCBuby11bmRlcmxpbmVcIj5TZXJ2aWNlczwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuIFx0XHRcdFx0XHRcdFx0PGxpIGlkPVwiXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWxsfSAke3N0eWxlcy5idXR0b25NYWlufSAke3N0eWxlcy5uYXZCYXJIZWFkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7YWxsfSAke3N0eWxlcy5uYXZMb2dvVGV4dH1gfT5DbGV2ZS1Ub290aDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7bWFyZ2luOicyMHB4J319IHNyYz1cIi9zdGF0aWMvbG9nbzNfb3B0LnBuZ1wiIGFsdD1cIlRvb3RoXCIgaGVpZ2h0PVwiOTBcIiB3aWR0aD1cIjkwXCIvPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7c3R5bGVzLmFsbH0gJHtzdHlsZXMubmF2TG9nb1RleHR9YH0+RGVudHVyZSBDbGluaWM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPVwibG9jYXRpb25zZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTEwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249IHs4MDB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gXHRcdFx0XHRcdFx0XHQgIDxsaSBpZD1cImZhcVwiIGNsYXNzTmFtZT1cImFsbCBidXR0b24gdHlwZTNcIj5Mb2NhdGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz1cImNvbnRhY3RzZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTM1fVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249IHsxMDAwfVxyXG4gICAgICAgICAgICAgID5cclxuIFx0XHRcdFx0XHRcdFx0ICA8bGkgaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwiYWxsIGJ1dHRvbiB0eXBlMlwiPkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuIFx0XHRcdFx0XHRcdDwvdWw+XHJcbiBcdFx0XHRcdFx0PC9uYXY+XHJcbiAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgKX1cclxuICAgICAgIDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0gXHJcblx0XHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiXSwic291cmNlUm9vdCI6IiJ9