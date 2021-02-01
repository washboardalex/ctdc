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
        className: "".concat(_BackToTopButton_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.backToTopWrapper),
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
        className: "".concat(_BackToTopButton_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.backToTopButton, " back-to-top-button-position"),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9iYWNrdG90b3BidXR0b24vQmFja1RvVG9wQnV0dG9uLmpzIl0sIm5hbWVzIjpbIkJhY2tUb1RvcEJ1dHRvbiIsInNldFN0YXRlIiwicHJldlN0YXRlIiwiaGlkZUJhY2tUb1RvcEJ1dHRvbiIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbCIsInNjcm9sbFRvVG9wIiwic3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlVG9Ub3BSZW5kZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3R5bGVzIiwiYmFja1RvVG9wV3JhcHBlciIsImJhY2tUb1RvcEJ1dHRvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7SUFFTUEsZTs7Ozs7QUFFTCw2QkFBYztBQUFBOztBQUFBOztBQUNiOztBQURhLDRRQWlCTSxZQUFNO0FBQ3pCLFlBQUtDLFFBQUwsQ0FBYyxVQUFBQyxTQUFTO0FBQUEsZUFBSztBQUN4QkMsNkJBQW1CLEVBQUUsRUFBRUMsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsR0FBMEIsR0FBMUIsSUFBaUNGLFFBQVEsQ0FBQ0csZUFBVCxDQUF5QkQsU0FBekIsR0FBcUMsR0FBeEU7QUFERyxTQUFMO0FBQUEsT0FBdkI7QUFHQSxLQXJCYTs7QUFBQSxzUUF1QkEsWUFBTztBQUNsQkUsZ0VBQU0sQ0FBQ0MsV0FBUDtBQUNELEtBekJZOztBQUViLFVBQUtDLEtBQUwsR0FBYTtBQUNaUCx5QkFBbUIsRUFBRTtBQURULEtBQWI7QUFGYTtBQUtiOzs7O3dDQUVtQjtBQUNuQlEsWUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxLQUFLQyxpQkFBdkM7QUFDQSxXQUFLQSxpQkFBTDtBQUNBOzs7MkNBRXNCO0FBQ3RCRixZQUFNLENBQUNHLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDLEtBQUtELGlCQUExQztBQUNBOzs7NkJBY1E7QUFBQSxVQUNBVixtQkFEQSxHQUN3QixLQUFLTyxLQUQ3QixDQUNBUCxtQkFEQTtBQUVSLGFBQ0M7QUFBSyxVQUFFLEVBQUMsb0JBQVI7QUFBNkIsaUJBQVMsWUFBS1ksb0VBQU0sQ0FBQ0MsZ0JBQVosQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLENBQUNiLG1CQUFELElBQ0EsTUFBQyx3REFBRDtBQUFNLGNBQU0sTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBUSxlQUFPLEVBQUUsS0FBS00sV0FBdEI7QUFBbUMsaUJBQVMsWUFBS00sb0VBQU0sQ0FBQ0UsZUFBWixpQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUcsaUJBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURELFFBREQsQ0FGRixDQUREO0FBWUE7Ozs7RUE1QzRCQyw0Q0FBSyxDQUFDQyxTOztBQWdEckJuQiw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMzAzNWIwOTVhZGNjNWQyMDEwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYWNrVG9Ub3BCdXR0b24ubW9kdWxlLnNjc3MnO1xyXG5cclxuY2xhc3MgQmFja1RvVG9wQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0aGlkZUJhY2tUb1RvcEJ1dHRvbjogdHJ1ZVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLnVwZGF0ZVRvVG9wUmVuZGVyKTtcclxuXHRcdHRoaXMudXBkYXRlVG9Ub3BSZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy51cGRhdGVUb1RvcFJlbmRlcik7XHJcblx0fVxyXG5cclxuXHJcblx0dXBkYXRlVG9Ub3BSZW5kZXIgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICBoaWRlQmFja1RvVG9wQnV0dG9uOiAhKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMTUwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAxNTApXHJcbiAgICB9KSk7XHJcblx0fVxyXG5cclxuXHRzY3JvbGxUb1RvcCA9ICgpICA9PiB7XHJcbiAgICBzY3JvbGwuc2Nyb2xsVG9Ub3AoKTtcclxuICB9XHJcblxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IGhpZGVCYWNrVG9Ub3BCdXR0b24gfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGlkPVwiYmFjay10by10b3AtYnV0dG9uXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmFja1RvVG9wV3JhcHBlcn1gfT5cclxuXHRcdFx0XHR7IWhpZGVCYWNrVG9Ub3BCdXR0b24gJiYgXHJcblx0XHRcdFx0XHQ8RmFkZSBib3R0b20+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5zY3JvbGxUb1RvcH0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYmFja1RvVG9wQnV0dG9ufSBiYWNrLXRvLXRvcC1idXR0b24tcG9zaXRpb25gfT5cclxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPmFycm93X3Vwd2FyZDwvaT5cclxuXHRcdFx0XHRcdFx0XHRUb3BcclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tUb1RvcEJ1dHRvbjsiXSwic291cmNlUm9vdCI6IiJ9