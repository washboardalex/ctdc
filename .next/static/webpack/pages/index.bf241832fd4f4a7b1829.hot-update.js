webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/backtotopbutton/BackToTopButton.js":
/*!*************************************************************!*\
  !*** ./pages/components/backtotopbutton/BackToTopButton.js ***!
  \*************************************************************/
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
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _BackToTopButton_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BackToTopButton.module.scss */ "./pages/components/backtotopbutton/BackToTopButton.module.scss");
/* harmony import */ var _BackToTopButton_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_BackToTopButton_module_scss__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\backtotopbutton\\BackToTopButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var BackToTopButton = /*#__PURE__*/function (_React$Component) {
  Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(BackToTopButton, _React$Component);

  var _super = _createSuper(BackToTopButton);

  function BackToTopButton() {
    var _this;

    Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BackToTopButton);

    _this = _super.call(this);

    Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "updateToTopRender", function () {
      _this.setState(function (prevState) {
        return {
          hideBackToTopButton: !(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
        };
      });
    });

    Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "scrollToTop", function () {
      react_scroll__WEBPACK_IMPORTED_MODULE_8__["animateScroll"].scrollToTop();
    });

    _this.state = {
      hideBackToTopButton: true
    };
    return _this;
  }

  Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BackToTopButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", this.updateToTopRender);
      this.updateToTopRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.updateToTopRender);
    }
  }, {
    key: "render",
    value: function render() {
      var hideBackToTopButton = this.state.hideBackToTopButton;
      return __jsx("div", {
        id: "back-to-top-button",
        className: "".concat(styles.backToTopWrapper),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 4
        }
      }, !hideBackToTopButton && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
        bottom: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 6
        }
      }, __jsx("button", {
        onClick: this.scrollToTop,
        className: "back-to-top-button back-to-top-button-position",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
        }
      }, __jsx("i", {
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 8
        }
      }, "arrow_upward"), "Top")));
    }
  }]);

  return BackToTopButton;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BackToTopButton);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9iYWNrdG90b3BidXR0b24vQmFja1RvVG9wQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJhY2tUb1RvcEJ1dHRvbiIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiaGlkZUJhY2tUb1RvcEJ1dHRvbiIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbCIsInNjcm9sbFRvVG9wIiwic3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlVG9Ub3BSZW5kZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiYmFja1RvVG9wV3JhcHBlciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7SUFFTUEsZTs7Ozs7QUFFTCw2QkFBYztBQUFBOztBQUFBOztBQUNiOztBQURhLDRRQWlCTSxZQUFNO0FBQ3pCLFlBQUtDLFFBQUwsQ0FBYyxVQUFBQyxTQUFTO0FBQUEsZUFBSztBQUN4QkMsNkJBQW1CLEVBQUUsRUFBRUMsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsR0FBMEIsR0FBMUIsSUFBaUNGLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QkQsU0FBekIsR0FBcUMsR0FBeEU7QUFERyxTQUFMO0FBQUEsT0FBdkI7QUFHQSxLQXJCYTs7QUFBQSxzUUF1QkEsWUFBTztBQUNsQkUsZ0VBQU0sQ0FBQ0MsV0FBUDtBQUNELEtBekJZOztBQUViLFVBQUtDLEtBQUwsR0FBYTtBQUNaUCx5QkFBbUIsRUFBRTtBQURULEtBQWI7QUFGYTtBQUtiOzs7O3dDQUVtQjtBQUNuQlEsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxpQkFBdkM7QUFDQSxXQUFLQSxpQkFBTDtBQUNBOzs7MkNBRXNCO0FBQ3RCRixZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtELGlCQUExQztBQUNBOzs7NkJBY1E7QUFBQSxVQUNBVixtQkFEQSxHQUN3QixLQUFLTyxLQUQ3QixDQUNBUCxtQkFEQTtBQUVSLGFBQ0M7QUFBSyxVQUFFLEVBQUMsb0JBQVI7QUFBNkIsaUJBQVMsWUFBS1ksTUFBTSxDQUFDQyxnQkFBWixDQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsQ0FBQ2IsbUJBQUQsSUFDQSxNQUFDLHdEQUFEO0FBQU0sY0FBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFRLGVBQU8sRUFBRSxLQUFLTSxXQUF0QjtBQUFtQyxpQkFBUyxFQUFDLGdEQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBRyxpQkFBUyxFQUFDLGdCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREQsUUFERCxDQUZGLENBREQ7QUFZQTs7OztFQTVDNEJRLDRDQUFLLENBQUNDLFM7O0FBZ0RyQmxCLDhFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJmMjQxODMyZmQ0ZjRhN2IxODI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FuaW1hdGVTY3JvbGwgYXMgc2Nyb2xsIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xyXG5cclxuaW1wb3J0ICcuL0JhY2tUb1RvcEJ1dHRvbi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jbGFzcyBCYWNrVG9Ub3BCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRoaWRlQmFja1RvVG9wQnV0dG9uOiB0cnVlXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMudXBkYXRlVG9Ub3BSZW5kZXIpO1xyXG5cdFx0dGhpcy51cGRhdGVUb1RvcFJlbmRlcigpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLnVwZGF0ZVRvVG9wUmVuZGVyKTtcclxuXHR9XHJcblxyXG5cclxuXHR1cGRhdGVUb1RvcFJlbmRlciA9ICgpID0+IHtcclxuXHRcdHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgIGhpZGVCYWNrVG9Ub3BCdXR0b246ICEoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAxNTAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDE1MClcclxuICAgIH0pKTtcclxuXHR9XHJcblxyXG5cdHNjcm9sbFRvVG9wID0gKCkgID0+IHtcclxuICAgIHNjcm9sbC5zY3JvbGxUb1RvcCgpO1xyXG4gIH1cclxuXHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGNvbnN0IHsgaGlkZUJhY2tUb1RvcEJ1dHRvbiB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgaWQ9XCJiYWNrLXRvLXRvcC1idXR0b25cIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iYWNrVG9Ub3BXcmFwcGVyfWB9PlxyXG5cdFx0XHRcdHshaGlkZUJhY2tUb1RvcEJ1dHRvbiAmJiBcclxuXHRcdFx0XHRcdDxGYWRlIGJvdHRvbT5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNjcm9sbFRvVG9wfSBjbGFzc05hbWU9XCJiYWNrLXRvLXRvcC1idXR0b24gYmFjay10by10b3AtYnV0dG9uLXBvc2l0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd191cHdhcmQ8L2k+XHJcblx0XHRcdFx0XHRcdFx0VG9wXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9GYWRlPlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWNrVG9Ub3BCdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==