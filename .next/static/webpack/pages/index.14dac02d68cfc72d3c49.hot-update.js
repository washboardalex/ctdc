webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/contactcard/components/contactform/ContactForm.js":
/*!****************************************************************************!*\
  !*** ./pages/components/contactcard/components/contactform/ContactForm.js ***!
  \****************************************************************************/
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
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loading */ "./node_modules/react-loading/dist/react-loading.js");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ContactForm.module.scss */ "./pages/components/contactcard/components/contactform/ContactForm.module.scss");
/* harmony import */ var _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\contactcard\\components\\contactform\\ContactForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var ContactForm = /*#__PURE__*/function (_Component) {
  Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ContactForm, _Component);

  var _super = _createSuper(ContactForm);

  function ContactForm() {
    var _this;

    Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContactForm);

    _this = _super.call(this);

    Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onChange", function (e) {
      var name = e.target.name;
      var value = e.target.value;

      _this.setState(Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, name, value), function () {
        _this.validateField(name, value);
      });
    });

    Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "validateField", function (fieldName, value) {
      _this.setState(Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, fieldName.concat("Valid"), value.length > 0), _this.validateForm);
    });

    Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "validateForm", function () {
      _this.setState(function (prevState) {
        return {
          formValid: _this.state.firstNameValid && _this.state.phoneNumberValid
        };
      });
    });

    Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onSubmit", function () {
      _this.validateField('firstName', _this.state.firstName);

      _this.validateField('phoneNumber', _this.state.phoneNumber);

      var _this$state = _this.state,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          phoneNumber = _this$state.phoneNumber,
          emailAddress = _this$state.emailAddress,
          messageText = _this$state.messageText;
      var data = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress,
        messageText: messageText
      };

      if (_this.state.formValid === true) {
        _this.setState(function (prevState) {
          return {
            loadingState: 'loading'
          };
        });

        fetch('/api/contact', {
          // '/api/contact'
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(function (res) {
          res.status === 200 ? _this.setState({
            loadingState: 'submitted'
          }) : _this.setState({
            loadingState: 'error'
          });
        });
      }
    });

    _this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      messageText: '',
      firstNameValid: true,
      phoneNumberValid: true,
      formValid: false,
      loadingState: 'pre-load',
      isLoading: false,
      error: false,
      submitted: false
    };
    return _this;
  }

  Object(D_work_ctdc_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContactForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "".concat(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contactFormBackground),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 4
        }
      }, __jsx("div", {
        className: "col-12 ".concat(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contactFormAlign),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }
      }, __jsx("div", {
        className: "row ".concat(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contactFormContainer, " ").concat(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contactFormContainerWidth),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "col-12 contact-form-heading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 7
        }
      }, __jsx("h1", {
        name: "contactsection",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 8
        }
      }, "CONTACT")), __jsx("div", {
        className: "col-6 align-contact-inputs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "contact-input-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 8
        }
      }, __jsx("input", {
        name: "firstName",
        value: this.state.firstName,
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        placeholder: "First Name (required)",
        type: "text",
        className: "contact-form-input ".concat(this.state.firstNameValid ? '' : 'contact-form-error-class'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }))), __jsx("div", {
        className: "col-6 align-contact-inputs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 10
        }
      }, __jsx("div", {
        className: "contact-input-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 8
        }
      }, __jsx("input", {
        name: "lastName",
        value: this.state.lastName,
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        placeholder: "Last Name",
        type: "text",
        className: "contact-form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }
      }))), __jsx("div", {
        className: "col-12 align-contact-inputs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 10
        }
      }, __jsx("div", {
        className: "contact-input-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 8
        }
      }, __jsx("input", {
        name: "phoneNumber",
        value: this.state.phoneNumber,
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        placeholder: "Phone Number (required)",
        type: "text",
        className: "contact-form-input ".concat(this.state.phoneNumberValid ? '' : 'contact-form-error-class'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }
      }))), __jsx("div", {
        className: "col-12 align-contact-inputs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 10
        }
      }, __jsx("div", {
        className: "contact-input-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 8
        }
      }, __jsx("input", {
        name: "emailAddress",
        value: this.state.emailAddress,
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        placeholder: "Email",
        type: "text",
        className: "contact-form-input",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 9
        }
      }))), __jsx("div", {
        className: "col-12 align-contact-inputs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 10
        }
      }, __jsx("div", {
        className: "textarea-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 8
        }
      }, __jsx("textarea", {
        name: "messageText",
        value: this.state.messageText,
        onChange: function onChange(e) {
          return _this2.onChange(e);
        },
        placeholder: "Your Message",
        type: "text",
        className: "contact-form-textarea",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 9
        }
      }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default.a, {
        bottom: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 10
        }
      }, __jsx("div", {
        className: "col-12 align-contact-inputs",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 10
        }
      }, this.state.loadingState === 'pre-load' && __jsx("button", {
        onClick: this.onSubmit,
        className: "contact-submit-button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 12
        }
      }, "SUBMIT"), this.state.loadingState === 'loading' && __jsx("div", {
        className: "col-12 spinner-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 16
        }
      }, __jsx(react_loading__WEBPACK_IMPORTED_MODULE_9___default.a, {
        type: "spin",
        color: "white",
        height: 80,
        width: 80,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 14
        }
      })), this.state.loadingState === 'submitted' && __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "col-12 spinner-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 17
        }
      }, __jsx("i", {
        style: {
          color: 'white',
          fontSize: '80px'
        },
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 18
        }
      }, " check_circle ")), __jsx("div", {
        className: "col-12 contact-spinner-txt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 18
        }
      }, "Thank you for your message."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 18
        }
      }, "We will contact you within 24 hours.")))), this.state.loadingState === 'error' && __jsx("div", {
        className: "col-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 16
        }
      }, __jsx("div", {
        className: "col-12 spinner-wrapper",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 17
        }
      }, __jsx("i", {
        style: {
          color: 'white',
          fontSize: '80px'
        },
        className: "material-icons",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 18
        }
      }, " error ")), __jsx("div", {
        className: "col-12 contact-spinner-txt",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 17
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 18
        }
      }, "Oops, something went wrong!"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 18
        }
      }, "Please call 0431 771 088.")))))))), __jsx("span", {
        className: "website-by",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 5
        }
      }, __jsx("a", {
        target: "_blank",
        href: "http://aleksandargujas.net",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 34
        }
      }, "Website by AG Web Dev")));
    }
  }]);

  return ContactForm;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9jb250YWN0Y2FyZC9jb21wb25lbnRzL2NvbnRhY3Rmb3JtL0NvbnRhY3RGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwidmFsaWRhdGVGaWVsZCIsImZpZWxkTmFtZSIsImNvbmNhdCIsImxlbmd0aCIsInZhbGlkYXRlRm9ybSIsInByZXZTdGF0ZSIsImZvcm1WYWxpZCIsInN0YXRlIiwiZmlyc3ROYW1lVmFsaWQiLCJwaG9uZU51bWJlclZhbGlkIiwiZmlyc3ROYW1lIiwicGhvbmVOdW1iZXIiLCJsYXN0TmFtZSIsImVtYWlsQWRkcmVzcyIsIm1lc3NhZ2VUZXh0IiwiZGF0YSIsImxvYWRpbmdTdGF0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImlzTG9hZGluZyIsImVycm9yIiwic3VibWl0dGVkIiwic3R5bGVzIiwiY29udGFjdEZvcm1CYWNrZ3JvdW5kIiwiY29udGFjdEZvcm1BbGlnbiIsImNvbnRhY3RGb3JtQ29udGFpbmVyIiwiY29udGFjdEZvcm1Db250YWluZXJXaWR0aCIsIm9uQ2hhbmdlIiwib25TdWJtaXQiLCJjb2xvciIsImZvbnRTaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7O0lBRU1BLFc7Ozs7O0FBRUwseUJBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWSxtUUFxQkgsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2pCLFVBQU1DLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELElBQXRCO0FBQ0EsVUFBTUUsS0FBSyxHQUFHSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBdkI7O0FB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QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFHLGFBQUssRUFBRTtBQUFDb0IsZUFBSyxFQUFDLE9BQVA7QUFBZ0JDLGtCQUFRLEVBQUM7QUFBekIsU0FBVjtBQUE0QyxpQkFBUyxFQUFDLGdCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELENBREQsRUFJQztBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUZELENBSkQsQ0FERCxDQXpCTCxDQURBLENBakVKLENBREQsQ0FERCxFQTZHQztBQUFNLGlCQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE2QjtBQUFHLGNBQU0sRUFBQyxRQUFWO0FBQW1CLFlBQUksRUFBQyw0QkFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBN0IsQ0E3R0QsQ0FERDtBQWlIQTs7OztFQXZMd0JDLCtDOztBQTBMWDVDLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE0ZGFjMDJkNjhjZmM3MmQzYzQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xyXG5pbXBvcnQgUmVhY3RMb2FkaW5nIGZyb20gJ3JlYWN0LWxvYWRpbmcnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRhY3RGb3JtLm1vZHVsZS5zY3NzJztcclxuXHJcbmNsYXNzIENvbnRhY3RGb3JtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHQgIHN1cGVyKCk7XHJcblx0ICB0aGlzLnN0YXRlID0geyBcclxuXHQgIFx0Zmlyc3ROYW1lOiAnJyxcclxuXHQgIFx0bGFzdE5hbWU6ICcnLFxyXG5cdCAgXHRwaG9uZU51bWJlcjogJycsXHJcblx0ICBcdGVtYWlsQWRkcmVzczogJycsXHJcblx0ICBcdG1lc3NhZ2VUZXh0OiAnJyxcclxuXHRcdFx0XHJcblx0XHRcdGZpcnN0TmFtZVZhbGlkOiB0cnVlLFxyXG5cdFx0XHRwaG9uZU51bWJlclZhbGlkOiB0cnVlLFxyXG5cdFx0XHRmb3JtVmFsaWQ6IGZhbHNlLFxyXG5cdFx0XHRcclxuXHRcdFx0bG9hZGluZ1N0YXRlOiAncHJlLWxvYWQnLFxyXG5cclxuXHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcclxuXHRcdFx0ZXJyb3I6IGZhbHNlLFxyXG5cdFx0XHRzdWJtaXR0ZWQ6IGZhbHNlXHJcblx0ICB9XHJcblx0fVxyXG5cclxuXHRvbkNoYW5nZSA9IChlKSA9PiB7XHJcblx0XHRjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcclxuXHRcdGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0W25hbWVdOiB2YWx1ZVxyXG5cdFx0fSwgKCkgPT4geyB0aGlzLnZhbGlkYXRlRmllbGQobmFtZSwgdmFsdWUpIH0pO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGVGaWVsZCA9IChmaWVsZE5hbWUsIHZhbHVlKSA9PiB7XHJcblx0ICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgW2ZpZWxkTmFtZS5jb25jYXQoXCJWYWxpZFwiKV06KHZhbHVlLmxlbmd0aCA+IDApXHJcbiAgICB9LCBcclxuICAgIHRoaXMudmFsaWRhdGVGb3JtKTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcclxuXHQgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcblx0ICBcdGZvcm1WYWxpZDogXHR0aGlzLnN0YXRlLmZpcnN0TmFtZVZhbGlkICYmIHRoaXMuc3RhdGUucGhvbmVOdW1iZXJWYWxpZFxyXG5cdFx0fSkpO1xyXG5cdH1cclxuXHJcblx0b25TdWJtaXQgPSAoKSA9PiB7XHJcblxyXG5cdFx0dGhpcy52YWxpZGF0ZUZpZWxkKCdmaXJzdE5hbWUnLCB0aGlzLnN0YXRlLmZpcnN0TmFtZSk7XHJcblx0XHR0aGlzLnZhbGlkYXRlRmllbGQoJ3Bob25lTnVtYmVyJywgdGhpcy5zdGF0ZS5waG9uZU51bWJlcik7XHJcblxyXG5cdFx0Y29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBwaG9uZU51bWJlciwgZW1haWxBZGRyZXNzLCBtZXNzYWdlVGV4dCB9ID0gdGhpcy5zdGF0ZTtcclxuXHRcdGNvbnN0IGRhdGEgPSB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIHBob25lTnVtYmVyLCBlbWFpbEFkZHJlc3MsIG1lc3NhZ2VUZXh0IH07XHJcblxyXG5cdFx0aWYgKHRoaXMuc3RhdGUuZm9ybVZhbGlkID09PSB0cnVlKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9Pih7IGxvYWRpbmdTdGF0ZTogJ2xvYWRpbmcnIH0pKTtcclxuXHJcblx0XHRcdGZldGNoKCcvYXBpL2NvbnRhY3QnLCB7IC8vICcvYXBpL2NvbnRhY3QnXHJcblx0ICAgICAgbWV0aG9kOiAncG9zdCcsXHJcblx0ICAgICAgaGVhZGVyczoge1xyXG5cdCAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonLFxyXG5cdCAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdCAgICAgIH0sXHJcblx0ICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuXHQgICAgfSkudGhlbigocmVzKSA9PiB7XHJcblx0ICAgICAgcmVzLnN0YXR1cyA9PT0gMjAwID8gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdTdGF0ZTogJ3N1Ym1pdHRlZCcgfSkgOiB0aGlzLnNldFN0YXRlKHtsb2FkaW5nU3RhdGU6ICdlcnJvcid9KVxyXG5cdCAgICB9KVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVuZGVyICgpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFjdEZvcm1CYWNrZ3JvdW5kfWB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyICR7c3R5bGVzLmNvbnRhY3RGb3JtQWxpZ259YH0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJvdyAke3N0eWxlcy5jb250YWN0Rm9ybUNvbnRhaW5lcn0gJHtzdHlsZXMuY29udGFjdEZvcm1Db250YWluZXJXaWR0aH1gfT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29udGFjdC1mb3JtLWhlYWRpbmdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgbmFtZT1cImNvbnRhY3RzZWN0aW9uXCI+Q09OVEFDVDwvaDE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGFsaWduLWNvbnRhY3QtaW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWlucHV0LXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImZpcnN0TmFtZVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdE5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShlKX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZSAocmVxdWlyZWQpXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGNvbnRhY3QtZm9ybS1pbnB1dCAke3RoaXMuc3RhdGUuZmlyc3ROYW1lVmFsaWQgPyAnJyA6ICdjb250YWN0LWZvcm0tZXJyb3ItY2xhc3MnfWB9IFxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgYWxpZ24tY29udGFjdC1pbnB1dHNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5wdXQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0ICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImxhc3ROYW1lXCIgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0TmFtZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKGUpfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLWlucHV0XCIgXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYWxpZ24tY29udGFjdC1pbnB1dHNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5wdXQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGhvbmVOdW1iZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5waG9uZU51bWJlcn0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShlKX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyIChyZXF1aXJlZClcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgY29udGFjdC1mb3JtLWlucHV0ICR7dGhpcy5zdGF0ZS5waG9uZU51bWJlclZhbGlkID8gJycgOiAnY29udGFjdC1mb3JtLWVycm9yLWNsYXNzJ31gfSBcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBhbGlnbi1jb250YWN0LWlucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbnB1dC13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbEFkZHJlc3NcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbEFkZHJlc3N9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1pbnB1dFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGFsaWduLWNvbnRhY3QtaW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0YXJlYS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJtZXNzYWdlVGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2VUZXh0fSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKGUpfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLXRleHRhcmVhXCIgXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPEZhZGUgYm90dG9tPlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBhbGlnbi1jb250YWN0LWlucHV0c1wiPlxyXG5cdFx0XHQgICAgICBcdHtcdCh0aGlzLnN0YXRlLmxvYWRpbmdTdGF0ZSA9PT0gJ3ByZS1sb2FkJykgJiZcclxuXHRcdFx0XHQgICAgICBcdDxidXR0b24gb25DbGljaz17dGhpcy5vblN1Ym1pdH0gY2xhc3NOYW1lPVwiY29udGFjdC1zdWJtaXQtYnV0dG9uXCI+XHJcblx0XHRcdFx0ICAgICAgXHRcdFNVQk1JVFxyXG5cdFx0XHRcdCAgICAgIFx0PC9idXR0b24+XHRcclxuXHRcdFx0ICAgICAgXHR9XHJcblx0XHRcdCAgICAgIFx0eyh0aGlzLnN0YXRlLmxvYWRpbmdTdGF0ZSA9PT0gJ2xvYWRpbmcnKSAmJiBcclxuXHQgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHNwaW5uZXItd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0ICAgICAgICA8UmVhY3RMb2FkaW5nIHR5cGU9e1wic3BpblwifSBjb2xvcj17XCJ3aGl0ZVwifSBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9IC8+XHJcblx0XHRcdFx0XHQgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgeyAodGhpcy5zdGF0ZS5sb2FkaW5nU3RhdGUgPT09ICdzdWJtaXR0ZWQnKSAmJlxyXG5cdCAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuXHQgICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHQgICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBzcGlubmVyLXdyYXBwZXJcIj5cclxuXHQgICAgICAgICAgICBcdFx0XHRcdDxpIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgZm9udFNpemU6JzgwcHgnfX0gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj4gY2hlY2tfY2lyY2xlIDwvaT5cclxuXHQgICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb250YWN0LXNwaW5uZXItdHh0XCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8cD5UaGFuayB5b3UgZm9yIHlvdXIgbWVzc2FnZS48L3A+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8cD5XZSB3aWxsIGNvbnRhY3QgeW91IHdpdGhpbiAyNCBob3Vycy48L3A+IFxyXG5cdCAgICAgICAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdCAgICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdDwvZGl2PlxyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB7KHRoaXMuc3RhdGUubG9hZGluZ1N0YXRlID09PSAnZXJyb3InKSAmJiBcclxuXHQgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcblx0ICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgc3Bpbm5lci13cmFwcGVyXCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8aSBzdHlsZT17e2NvbG9yOid3aGl0ZScsIGZvbnRTaXplOic4MHB4J319IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+IGVycm9yIDwvaT5cclxuXHQgICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb250YWN0LXNwaW5uZXItdHh0XCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8cD5Pb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyE8L3A+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8cD5QbGVhc2UgY2FsbCAwNDMxIDc3MSAwODguPC9wPiBcclxuXHQgICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICB9XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICA8L0ZhZGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3ZWJzaXRlLWJ5XCI+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9hbGVrc2FuZGFyZ3VqYXMubmV0XCI+V2Vic2l0ZSBieSBBRyBXZWIgRGV2PC9hPjwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==