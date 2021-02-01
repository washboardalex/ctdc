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
        className: "align-nav-items",
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
        className: "button all type1",
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
        className: "button type2",
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
          columnNumber: 54
        }
      }, "Services"))), __jsx("li", {
        id: "",
        className: "all button-main nav-bar-head",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }
      }, __jsx("h1", {
        className: "all nav-logo-text",
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
        className: "all nav-logo-text",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uYXZiYXIvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIk5hdkJhciIsInNldFN0YXRlIiwidXNlQ2hlZXplYnVyZ2VyIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInN0YXRlIiwidXBkYXRlUHJlZGljYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdHlsZXMiLCJhbGwiLCJuYXZDb250YWN0QmFyIiwiY29udGFjdEJhclRleHQiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJuYXZCYXJTdHlsZSIsIm1hcmdpbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7SUFJTUEsTTs7Ozs7QUFDTCxvQkFBYztBQUFBOztBQUFBOztBQUNiOztBQURhLDBRQWdCSyxZQUFNO0FBQ3RCLFlBQUtDLFFBQUwsQ0FBYztBQUFFQyx1QkFBZSxFQUFFQyxNQUFNLENBQUNDLFVBQVAsR0FBb0I7QUFBdkMsT0FBZDtBQUNELEtBbEJZOztBQUViLFVBQUtDLEtBQUwsR0FBYTtBQUNaSCxxQkFBZSxFQUFFO0FBREwsS0FBYjtBQUZhO0FBS2I7Ozs7d0NBRW1CO0FBQ2pCLFdBQUtJLGVBQUw7QUFDQUgsWUFBTSxDQUFDSSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLRCxlQUF2QztBQUNEOzs7MkNBRXNCO0FBQ3JCSCxZQUFNLENBQUNLLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtGLGVBQTFDO0FBQ0Q7Ozs2QkFNUTtBQUNQLFVBQU1KLGVBQWUsR0FBRyxLQUFLRyxLQUFMLENBQVdILGVBQW5DO0FBRUYsYUFFRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tBLGVBQWUsR0FDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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RUFBQyxLQUFQO0FBQWEsaUJBQVMsRUFBQyxrQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSSSxDQTFCUCxFQW9DTyxNQUFDLGlEQUFEO0FBQ0UsbUJBQVcsRUFBQyxRQURkO0FBRUUsVUFBRSxFQUFDLGdCQUZMO0FBR0UsV0FBRyxFQUFFLElBSFA7QUFJRSxjQUFNLEVBQUUsSUFKVjtBQUtFLGNBQU0sRUFBRSxDQUFDLEVBTFg7QUFNRSxnQkFBUSxFQUFHLElBTmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVFKO0FBQUksVUFBRSxFQUFDLFNBQVA7QUFBaUIsaUJBQVMsRUFBQyxrQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSSxDQXBDUCxDQURJLENBTkEsQ0FOTixDQUZIO0FBbUVBOzs7O0VBM0ZtQkMsNENBQUssQ0FBQ0MsUzs7QUE4RlpsQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMmJkMDJiYzBkMGNiM2IxM2U4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9SZWFjdCBzY3JvbGwgY2FuIHVzZSBlbGVtZW50IGlkIGFzIGEgcmVmZXJlbmNlIGZvciB3aGVyZSB0byBzY3JvbGwuXHJcbi8vSSBoYXZlIHB1dCB0aGVzZSBlaXRoZXIgaW4gdGhlIHRpdGxlIGVsZW1lbnRzIChoMSkgb3IgdGhlaXIgc3Vycm91bmRpbmcgZGl2c1xyXG5pbXBvcnQgeyBMaW5rLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcblxyXG5pbXBvcnQgQnVyZ2VyIGZyb20gJy4vY29tcG9uZW50cy9idXJnZXJtZW51L0J1cmdlck1lbnUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2QmFyLm1vZHVsZS5zY3NzJztcclxuXHJcblxyXG5cclxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR1c2VDaGVlemVidXJnZXI6IHRydWVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy51cGRhdGVQcmVkaWNhdGUoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlUHJlZGljYXRlKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVQcmVkaWNhdGUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUHJlZGljYXRlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZUNoZWV6ZWJ1cmdlcjogd2luZG93LmlubmVyV2lkdGggPCAxMDg1IH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdXNlQ2hlZXplYnVyZ2VyID0gdGhpcy5zdGF0ZS51c2VDaGVlemVidXJnZXI7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0ICBcclxuXHQgICAgPGRpdj5cclxuICAgICAgICAge3VzZUNoZWV6ZWJ1cmdlciA/IChcclxuICAgICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICBcdDxCdXJnZXIgLz5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgKSA6IChcclxuICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hbGx9ICR7c3R5bGVzLm5hdkNvbnRhY3RCYXJ9YH0+IFxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hbGx9ICR7c3R5bGVzLmNvbnRhY3RCYXJUZXh0fWB9PiBcclxuICAgICAgICAgICAgICAgUGg6IDA0MzEgNzcxIDA4OCB8IEUtbWFpbDogY2xldmVsYW5kLnRvb3RoQGdtYWlsLmNvbSB8IFByb3ZpZGVyIE51bWJlcjogNDA0MDM2MUggfCBBQk46IDY4IDA5OSA2NzEgOTY0XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8bmF2IHN0eWxlPXt7bWFyZ2luQm90dG9tOic0MHB4JywgbWFyZ2luVG9wOicyMHB4J319IGNsYXNzTmFtZT17YCR7c3R5bGVzLmFsbH0gJHtzdHlsZXMubmF2QmFyU3R5bGV9YH0+XHJcbiBcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiYWxpZ24tbmF2LWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPVwiYWJvdXRzZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249IHs3MDB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpIGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJidXR0b24gYWxsIHR5cGUxXCI+QWJvdXQ8L2xpPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89XCJzZXJ2aWNlc3NlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj0gezgwMH1cclxuICAgICAgICAgICAgICA+XHJcbiBcdFx0XHRcdFx0XHRcdCAgPGxpIGlkPVwic2VydmljZXNcIiBjbGFzc05hbWU9XCJidXR0b24gdHlwZTJcIj48c3BhbiBjbGFzc05hbWU9XCJhbGwgbm8tdW5kZXJsaW5lXCI+U2VydmljZXM8L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiBcdFx0XHRcdFx0XHRcdDxsaSBpZD1cIlwiIGNsYXNzTmFtZT1cImFsbCBidXR0b24tbWFpbiBuYXYtYmFyLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhbGwgbmF2LWxvZ28tdGV4dFwiPkNsZXZlLVRvb3RoPC9oMT5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3ttYXJnaW46JzIwcHgnfX0gc3JjPVwiL3N0YXRpYy9sb2dvM19vcHQucG5nXCIgYWx0PVwiVG9vdGhcIiBoZWlnaHQ9XCI5MFwiIHdpZHRoPVwiOTBcIi8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWxsIG5hdi1sb2dvLXRleHRcIj5EZW50dXJlIENsaW5pYzwvaDE+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89XCJsb2NhdGlvbnNlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstMTB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj0gezgwMH1cclxuICAgICAgICAgICAgICA+XHJcbiBcdFx0XHRcdFx0XHRcdCAgPGxpIGlkPVwiZmFxXCIgY2xhc3NOYW1lPVwiYWxsIGJ1dHRvbiB0eXBlM1wiPkxvY2F0aW9uPC9saT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPVwiY29udGFjdHNlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstMzV9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj0gezEwMDB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gXHRcdFx0XHRcdFx0XHQgIDxsaSBpZD1cImNvbnRhY3RcIiBjbGFzc05hbWU9XCJhbGwgYnV0dG9uIHR5cGUyXCI+Q29udGFjdDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gXHRcdFx0XHRcdFx0PC91bD5cclxuIFx0XHRcdFx0XHQ8L25hdj5cclxuICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICApfVxyXG4gICAgICAgPC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSBcclxuXHRcclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyOyJdLCJzb3VyY2VSb290IjoiIn0=