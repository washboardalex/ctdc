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
        className: "".concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.all, " ").concat(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.navLogoText),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uYXZiYXIvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsInNldFN0YXRlIiwidXNlQ2hlZXplYnVyZ2VyIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0YXRlIiwidXBkYXRlUHJlZGljYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZXMiLCJhbGwiLCJuYXZDb250YWN0QmFyIiwiY29udGFjdEJhclRleHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJuYXZCYXJTdHlsZSIsImFsaWduTmF2SXRlbXMiLCJidXR0b24iLCJ0eXBlMSIsInR5cGUyIiwiYnV0dG9uTWFpbiIsIm5hdkJhckhlYWQiLCJuYXZMb2dvVGV4dCIsIm1hcmdpbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7SUFJTUEsTTs7Ozs7QUFDTCxvQkFBYztBQUFBOztBQUFBOztBQUNiOztBQURhLDBRQWdCSyxZQUFNO0FBQ3RCLFlBQUtDLFFBQUwsQ0FBYztBQUFFQyx1QkFBZSxFQUFFQyxNQUFNLENBQUNDLFVBQVAsR0FBb0I7QUFBdkMsT0FBZDtBQUNELEtBbEJZOztBQUViLFVBQUtDLEtBQUwsR0FBYTtBQUNaSCxxQkFBZSxFQUFFO0FBREwsS0FBYjtBQUZhO0FBS2I7Ozs7d0NBRW1CO0FBQ2pCLFdBQUtJLGVBQUw7QUFDQUgsWUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLRCxlQUF2QztBQUNEOzs7MkNBRXNCO0FBQ3JCSCxZQUFNLENBQUNLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtGLGVBQTFDO0FBQ0Q7Ozs2QkFNUTtBQUNQLFVBQU1KLGVBQWUsR0FBRyxLQUFLRyxLQUFMLENBQVdILGVBQW5DO0FBRUYsYUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tBLGVBQWUsR0FDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0MsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FEYyxHQUtkLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFLLGlCQUFTLFlBQUtPLDJEQUFNLENBQUNDLEdBQVosY0FBbUJELDJEQUFNLENBQUNFLGFBQTFCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsWUFBS0YsMkRBQU0sQ0FBQ0MsR0FBWixjQUFtQkQsMkRBQU0sQ0FBQ0csY0FBMUIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtIQURGLENBREEsRUFNQTtBQUFLLGFBQUssRUFBRTtBQUFDQyxzQkFBWSxFQUFDLE1BQWQ7QUFBc0JDLG1CQUFTLEVBQUM7QUFBaEMsU0FBWjtBQUFxRCxpQkFBUyxZQUFLTCwyREFBTSxDQUFDQyxHQUFaLGNBQW1CRCwyREFBTSxDQUFDTSxXQUExQixDQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0o7QUFBSSxpQkFBUyxZQUFLTiwyREFBTSxDQUFDTyxhQUFaLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNPLE1BQUMsaURBQUQ7QUFDRSxtQkFBVyxFQUFDLFFBRGQ7QUFFRSxVQUFFLEVBQUMsY0FGTDtBQUdFLFdBQUcsRUFBRSxJQUhQO0FBSUUsY0FBTSxFQUFFLElBSlY7QUFLRSxjQUFNLEVBQUUsQ0FBQyxFQUxYO0FBTUUsZ0JBQVEsRUFBRyxHQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRRTtBQUFJLFVBQUUsRUFBQyxPQUFQO0FBQWUsaUJBQVMsWUFBS1AsMkRBQU0sQ0FBQ1EsTUFBWixjQUFzQlIsMkRBQU0sQ0FBQ0MsR0FBN0IsY0FBb0NELDJEQUFNLENBQUNTLEtBQTNDLENBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsQ0FEUCxFQVdPLE1BQUMsaURBQUQ7QUFDRSxtQkFBVyxFQUFDLFFBRGQ7QUFFRSxVQUFFLEVBQUMsaUJBRkw7QUFHRSxXQUFHLEVBQUUsSUFIUDtBQUlFLGNBQU0sRUFBRSxJQUpWO0FBS0UsY0FBTSxFQUFFLENBQUMsRUFMWDtBQU1FLGdCQUFRLEVBQUcsR0FOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUo7QUFBSSxVQUFFLEVBQUMsVUFBUDtBQUFrQixpQkFBUyxZQUFLVCwyREFBTSxDQUFDUSxNQUFaLGNBQXNCUiwyREFBTSxDQUFDVSxLQUE3QixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWlFO0FBQU0saUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBakUsQ0FSSSxDQVhQLEVBcUJDO0FBQUksVUFBRSxFQUFDLEVBQVA7QUFBVSxpQkFBUyxZQUFLViwyREFBTSxDQUFDQyxHQUFaLGNBQW1CRCwyREFBTSxDQUFDVyxVQUExQixjQUF3Q1gsMkRBQU0sQ0FBQ1ksVUFBL0MsQ0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNRO0FBQUksaUJBQVMsWUFBS1osMkRBQU0sQ0FBQ0MsR0FBWixjQUFtQkQsMkRBQU0sQ0FBQ2EsV0FBMUIsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURSLEVBRVE7QUFBSyxhQUFLLEVBQUU7QUFBQ0MsZ0JBQU0sRUFBQztBQUFSLFNBQVo7QUFBNkIsV0FBRyxFQUFDLHVCQUFqQztBQUF5RCxXQUFHLEVBQUMsT0FBN0Q7QUFBcUUsY0FBTSxFQUFDLElBQTVFO0FBQWlGLGFBQUssRUFBQyxJQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRlIsRUFHUTtBQUFJLGlCQUFTLFlBQUtkLDJEQUFNLENBQUNDLEdBQVosY0FBbUJELDJEQUFNLENBQUNhLFdBQTFCLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIUixDQXJCRCxFQTBCTyxNQUFDLGlEQUFEO0FBQ0UsbUJBQVcsRUFBQyxRQURkO0FBRUUsVUFBRSxFQUFDLGlCQUZMO0FBR0UsV0FBRyxFQUFFLElBSFA7QUFJRSxjQUFNLEVBQUUsSUFKVjtBQUtFLGNBQU0sRUFBRSxDQUFDLEVBTFg7QUFNRSxnQkFBUSxFQUFHLEdBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVFKO0FBQUksVUFBRSxFQUFDLEtBQVA7QUFBYSxpQkFBUyxFQUFDLGtCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJJLENBMUJQLEVBb0NPLE1BQUMsaURBQUQ7QUFDRSxtQkFBVyxFQUFDLFFBRGQ7QUFFRSxVQUFFLEVBQUMsZ0JBRkw7QUFHRSxXQUFHLEVBQUUsSUFIUDtBQUlFLGNBQU0sRUFBRSxJQUpWO0FBS0UsY0FBTSxFQUFFLENBQUMsRUFMWDtBQU1FLGdCQUFRLEVBQUcsSUFOYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBUUo7QUFBSSxVQUFFLEVBQUMsU0FBUDtBQUFpQixpQkFBUyxFQUFDLGtCQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJJLENBcENQLENBREksQ0FOQSxDQU5OLENBRkg7QUFtRUE7Ozs7RUEzRm1CRSw0Q0FBSyxDQUFDQyxTOztBQThGWnpCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIwYjNhZmQwN2Q1ZTljZjA4YzljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1JlYWN0IHNjcm9sbCBjYW4gdXNlIGVsZW1lbnQgaWQgYXMgYSByZWZlcmVuY2UgZm9yIHdoZXJlIHRvIHNjcm9sbC5cclxuLy9JIGhhdmUgcHV0IHRoZXNlIGVpdGhlciBpbiB0aGUgdGl0bGUgZWxlbWVudHMgKGgxKSBvciB0aGVpciBzdXJyb3VuZGluZyBkaXZzXHJcbmltcG9ydCB7IExpbmssIGFuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuXHJcbmltcG9ydCBCdXJnZXIgZnJvbSAnLi9jb21wb25lbnRzL2J1cmdlcm1lbnUvQnVyZ2VyTWVudSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZCYXIubW9kdWxlLnNjc3MnO1xyXG5cclxuXHJcblxyXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHVzZUNoZWV6ZWJ1cmdlcjogdHJ1ZVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnVwZGF0ZVByZWRpY2F0ZSgpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVQcmVkaWNhdGUpO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZVByZWRpY2F0ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcmVkaWNhdGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdXNlQ2hlZXplYnVyZ2VyOiB3aW5kb3cuaW5uZXJXaWR0aCA8IDEwODUgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB1c2VDaGVlemVidXJnZXIgPSB0aGlzLnN0YXRlLnVzZUNoZWV6ZWJ1cmdlcjtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQgIFxyXG5cdCAgICA8ZGl2PlxyXG4gICAgICAgICB7dXNlQ2hlZXplYnVyZ2VyID8gKFxyXG4gICAgICAgICAgIDxkaXY+IFxyXG4gICAgICAgICAgIFx0PEJ1cmdlciAvPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICApIDogKFxyXG4gICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmFsbH0gJHtzdHlsZXMubmF2Q29udGFjdEJhcn1gfT4gXHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmFsbH0gJHtzdHlsZXMuY29udGFjdEJhclRleHR9YH0+IFxyXG4gICAgICAgICAgICAgICBQaDogMDQzMSA3NzEgMDg4IHwgRS1tYWlsOiBjbGV2ZWxhbmQudG9vdGhAZ21haWwuY29tIHwgUHJvdmlkZXIgTnVtYmVyOiA0MDQwMzYxSCB8IEFCTjogNjggMDk5IDY3MSA5NjRcclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxuYXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzQwcHgnLCBtYXJnaW5Ub3A6JzIwcHgnfX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWxsfSAke3N0eWxlcy5uYXZCYXJTdHlsZX1gfT5cclxuIFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9e2Ake3N0eWxlcy5hbGlnbk5hdkl0ZW1zfWB9PlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz1cImFib3V0c2VjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPSB7NzAwfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsaSBpZD1cImFib3V0XCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke3N0eWxlcy5hbGx9ICR7c3R5bGVzLnR5cGUxfWB9PkFib3V0PC9saT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPVwic2VydmljZXNzZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249IHs4MDB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gXHRcdFx0XHRcdFx0XHQgIDxsaSBpZD1cInNlcnZpY2VzXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke3N0eWxlcy50eXBlMn1gfT48c3BhbiBjbGFzc05hbWU9XCJhbGwgbm8tdW5kZXJsaW5lXCI+U2VydmljZXM8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiBcdFx0XHRcdFx0XHRcdDxsaSBpZD1cIlwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmFsbH0gJHtzdHlsZXMuYnV0dG9uTWFpbn0gJHtzdHlsZXMubmF2QmFySGVhZH1gfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3N0eWxlcy5hbGx9ICR7c3R5bGVzLm5hdkxvZ29UZXh0fWB9PkNsZXZlLVRvb3RoPC9oMT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3ttYXJnaW46JzIwcHgnfX0gc3JjPVwiL3N0YXRpYy9sb2dvM19vcHQucG5nXCIgYWx0PVwiVG9vdGhcIiBoZWlnaHQ9XCI5MFwiIHdpZHRoPVwiOTBcIi8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWxsfSAke3N0eWxlcy5uYXZMb2dvVGV4dH1gfT5EZW50dXJlIENsaW5pYzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89XCJsb2NhdGlvbnNlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstMTB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj0gezgwMH1cclxuICAgICAgICAgICAgICA+XHJcbiBcdFx0XHRcdFx0XHRcdCAgPGxpIGlkPVwiZmFxXCIgY2xhc3NOYW1lPVwiYWxsIGJ1dHRvbiB0eXBlM1wiPkxvY2F0aW9uPC9saT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPVwiY29udGFjdHNlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstMzV9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj0gezEwMDB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gXHRcdFx0XHRcdFx0XHQgIDxsaSBpZD1cImNvbnRhY3RcIiBjbGFzc05hbWU9XCJhbGwgYnV0dG9uIHR5cGUyXCI+Q29udGFjdDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gXHRcdFx0XHRcdFx0PC91bD5cclxuIFx0XHRcdFx0XHQ8L25hdj5cclxuICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICApfVxyXG4gICAgICAgPC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSBcclxuXHRcclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJzb3VyY2VSb290IjoiIn0=