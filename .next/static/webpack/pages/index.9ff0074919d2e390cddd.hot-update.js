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
        className: "col-12 ".concat(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contactFormHeading),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9jb250YWN0Y2FyZC9jb21wb25lbnRzL2NvbnRhY3Rmb3JtL0NvbnRhY3RGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwidmFsaWRhdGVGaWVsZCIsImZpZWxkTmFtZSIsImNvbmNhdCIsImxlbmd0aCIsInZhbGlkYXRlRm9ybSIsInByZXZTdGF0ZSIsImZvcm1WYWxpZCIsInN0YXRlIiwiZmlyc3ROYW1lVmFsaWQiLCJwaG9uZU51bWJlclZhbGlkIiwiZmlyc3ROYW1lIiwicGhvbmVOdW1iZXIiLCJsYXN0TmFtZSIsImVtYWlsQWRkcmVzcyIsIm1lc3NhZ2VUZXh0IiwiZGF0YSIsImxvYWRpbmdTdGF0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImlzTG9hZGluZyIsImVycm9yIiwic3VibWl0dGVkIiwic3R5bGVzIiwiY29udGFjdEZvcm1CYWNrZ3JvdW5kIiwiY29udGFjdEZvcm1BbGlnbiIsImNvbnRhY3RGb3JtQ29udGFpbmVyIiwiY29udGFjdEZvcm1Db250YWluZXJXaWR0aCIsImNvbnRhY3RGb3JtSGVhZGluZyIsIm9uQ2hhbmdlIiwib25TdWJtaXQiLCJjb2xvciIsImZvbnRTaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7O0lBRU1BLFc7Ozs7O0FBRUwseUJBQWM7QUFBQTs7QUFBQTs7QUFDWjs7QUFEWSxtUUFxQkgsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2pCLFVBQU1DLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNELElBQXRCO0FBQ0EsVUFBTUUsS0FBSyxHQUFHSCxDQUFDLENBQUNF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QUFLLGlCQUFTLEVBQUMsd0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUcsYUFBSyxFQUFFO0FBQUNxQixlQUFLLEVBQUMsT0FBUDtBQUFnQkMsa0JBQVEsRUFBQztBQUF6QixTQUFWO0FBQTRDLGlCQUFTLEVBQUMsZ0JBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsQ0FERCxFQUlDO0FBQUssaUJBQVMsRUFBQyw0QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FERCxFQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRkQsQ0FKRCxDQURELENBekJMLENBREEsQ0FqRUosQ0FERCxDQURELEVBNkdDO0FBQU0saUJBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTZCO0FBQUcsY0FBTSxFQUFDLFFBQVY7QUFBbUIsWUFBSSxFQUFDLDRCQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUE3QixDQTdHRCxDQUREO0FBaUhBOzs7O0VBdkx3QkMsK0M7O0FBMExYN0MsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWZmMDA3NDkxOWQyZTM5MGNkZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XHJcbmltcG9ydCBSZWFjdExvYWRpbmcgZnJvbSAncmVhY3QtbG9hZGluZyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGFjdEZvcm0ubW9kdWxlLnNjc3MnO1xyXG5cclxuY2xhc3MgQ29udGFjdEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdCAgc3VwZXIoKTtcclxuXHQgIHRoaXMuc3RhdGUgPSB7IFxyXG5cdCAgXHRmaXJzdE5hbWU6ICcnLFxyXG5cdCAgXHRsYXN0TmFtZTogJycsXHJcblx0ICBcdHBob25lTnVtYmVyOiAnJyxcclxuXHQgIFx0ZW1haWxBZGRyZXNzOiAnJyxcclxuXHQgIFx0bWVzc2FnZVRleHQ6ICcnLFxyXG5cdFx0XHRcclxuXHRcdFx0Zmlyc3ROYW1lVmFsaWQ6IHRydWUsXHJcblx0XHRcdHBob25lTnVtYmVyVmFsaWQ6IHRydWUsXHJcblx0XHRcdGZvcm1WYWxpZDogZmFsc2UsXHJcblx0XHRcdFxyXG5cdFx0XHRsb2FkaW5nU3RhdGU6ICdwcmUtbG9hZCcsXHJcblxyXG5cdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRlcnJvcjogZmFsc2UsXHJcblx0XHRcdHN1Ym1pdHRlZDogZmFsc2VcclxuXHQgIH1cclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRbbmFtZV06IHZhbHVlXHJcblx0XHR9LCAoKSA9PiB7IHRoaXMudmFsaWRhdGVGaWVsZChuYW1lLCB2YWx1ZSkgfSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZUZpZWxkID0gKGZpZWxkTmFtZSwgdmFsdWUpID0+IHtcclxuXHQgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZmllbGROYW1lLmNvbmNhdChcIlZhbGlkXCIpXToodmFsdWUubGVuZ3RoID4gMClcclxuICAgIH0sIFxyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm0pO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG5cdCAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuXHQgIFx0Zm9ybVZhbGlkOiBcdHRoaXMuc3RhdGUuZmlyc3ROYW1lVmFsaWQgJiYgdGhpcy5zdGF0ZS5waG9uZU51bWJlclZhbGlkXHJcblx0XHR9KSk7XHJcblx0fVxyXG5cclxuXHRvblN1Ym1pdCA9ICgpID0+IHtcclxuXHJcblx0XHR0aGlzLnZhbGlkYXRlRmllbGQoJ2ZpcnN0TmFtZScsIHRoaXMuc3RhdGUuZmlyc3ROYW1lKTtcclxuXHRcdHRoaXMudmFsaWRhdGVGaWVsZCgncGhvbmVOdW1iZXInLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyKTtcclxuXHJcblx0XHRjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIHBob25lTnVtYmVyLCBlbWFpbEFkZHJlc3MsIG1lc3NhZ2VUZXh0IH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmVOdW1iZXIsIGVtYWlsQWRkcmVzcywgbWVzc2FnZVRleHQgfTtcclxuXHJcblx0XHRpZiAodGhpcy5zdGF0ZS5mb3JtVmFsaWQgPT09IHRydWUpIHtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+KHsgbG9hZGluZ1N0YXRlOiAnbG9hZGluZycgfSkpO1xyXG5cclxuXHRcdFx0ZmV0Y2goJy9hcGkvY29udGFjdCcsIHsgLy8gJy9hcGkvY29udGFjdCdcclxuXHQgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuXHQgICAgICBoZWFkZXJzOiB7XHJcblx0ICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXHJcblx0ICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0ICAgICAgfSxcclxuXHQgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG5cdCAgICB9KS50aGVuKChyZXMpID0+IHtcclxuXHQgICAgICByZXMuc3RhdHVzID09PSAyMDAgPyB0aGlzLnNldFN0YXRlKHsgbG9hZGluZ1N0YXRlOiAnc3VibWl0dGVkJyB9KSA6IHRoaXMuc2V0U3RhdGUoe2xvYWRpbmdTdGF0ZTogJ2Vycm9yJ30pXHJcblx0ICAgIH0pXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWN0Rm9ybUJhY2tncm91bmR9YH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Bjb2wtMTIgJHtzdHlsZXMuY29udGFjdEZvcm1BbGlnbn1gfT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93ICR7c3R5bGVzLmNvbnRhY3RGb3JtQ29udGFpbmVyfSAke3N0eWxlcy5jb250YWN0Rm9ybUNvbnRhaW5lcldpZHRofWB9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbC0xMiAke3N0eWxlcy5jb250YWN0Rm9ybUhlYWRpbmd9YH0+XHJcblx0XHRcdFx0XHRcdFx0PGgxIG5hbWU9XCJjb250YWN0c2VjdGlvblwiPkNPTlRBQ1Q8L2gxPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNiBhbGlnbi1jb250YWN0LWlucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbnB1dC13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJmaXJzdE5hbWVcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZmlyc3ROYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWUgKHJlcXVpcmVkKVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bjb250YWN0LWZvcm0taW5wdXQgJHt0aGlzLnN0YXRlLmZpcnN0TmFtZVZhbGlkID8gJycgOiAnY29udGFjdC1mb3JtLWVycm9yLWNsYXNzJ31gfSBcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGFsaWduLWNvbnRhY3QtaW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWlucHV0LXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJsYXN0TmFtZVwiICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubGFzdE5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShlKX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1pbnB1dFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGFsaWduLWNvbnRhY3QtaW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWlucHV0LXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBob25lTnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW1iZXJ9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlciAocmVxdWlyZWQpXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGNvbnRhY3QtZm9ybS1pbnB1dCAke3RoaXMuc3RhdGUucGhvbmVOdW1iZXJWYWxpZCA/ICcnIDogJ2NvbnRhY3QtZm9ybS1lcnJvci1jbGFzcyd9YH0gXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYWxpZ24tY29udGFjdC1pbnB1dHNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5wdXQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxBZGRyZXNzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZW1haWxBZGRyZXNzfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKGUpfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb250YWN0LWZvcm0taW5wdXRcIiBcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBhbGlnbi1jb250YWN0LWlucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dGFyZWEtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibWVzc2FnZVRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlVGV4dH0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShlKX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS10ZXh0YXJlYVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgIDxGYWRlIGJvdHRvbT5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYWxpZ24tY29udGFjdC1pbnB1dHNcIj5cclxuXHRcdFx0ICAgICAgXHR7XHQodGhpcy5zdGF0ZS5sb2FkaW5nU3RhdGUgPT09ICdwcmUtbG9hZCcpICYmXHJcblx0XHRcdFx0ICAgICAgXHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9IGNsYXNzTmFtZT1cImNvbnRhY3Qtc3VibWl0LWJ1dHRvblwiPlxyXG5cdFx0XHRcdCAgICAgIFx0XHRTVUJNSVRcclxuXHRcdFx0XHQgICAgICBcdDwvYnV0dG9uPlx0XHJcblx0XHRcdCAgICAgIFx0fVxyXG5cdFx0XHQgICAgICBcdHsodGhpcy5zdGF0ZS5sb2FkaW5nU3RhdGUgPT09ICdsb2FkaW5nJykgJiYgXHJcblx0ICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBzcGlubmVyLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdCAgICAgICAgPFJlYWN0TG9hZGluZyB0eXBlPXtcInNwaW5cIn0gY29sb3I9e1wid2hpdGVcIn0gaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfSAvPlxyXG5cdFx0XHRcdFx0ICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIHsgKHRoaXMuc3RhdGUubG9hZGluZ1N0YXRlID09PSAnc3VibWl0dGVkJykgJiZcclxuXHQgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcblx0ICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgc3Bpbm5lci13cmFwcGVyXCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8aSBzdHlsZT17e2NvbG9yOid3aGl0ZScsIGZvbnRTaXplOic4MHB4J319IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+IGNoZWNrX2NpcmNsZSA8L2k+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29udGFjdC1zcGlubmVyLXR4dFwiPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdFx0PHA+VGhhbmsgeW91IGZvciB5b3VyIG1lc3NhZ2UuPC9wPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdFx0PHA+V2Ugd2lsbCBjb250YWN0IHlvdSB3aXRoaW4gMjQgaG91cnMuPC9wPiBcclxuXHQgICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmxvYWRpbmdTdGF0ZSA9PT0gJ2Vycm9yJykgJiYgXHJcblx0ICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG5cdCAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHNwaW5uZXItd3JhcHBlclwiPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdFx0PGkgc3R5bGU9e3tjb2xvcjond2hpdGUnLCBmb250U2l6ZTonODBweCd9fSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPiBlcnJvciA8L2k+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29udGFjdC1zcGlubmVyLXR4dFwiPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdFx0PHA+T29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmchPC9wPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdFx0PHA+UGxlYXNlIGNhbGwgMDQzMSA3NzEgMDg4LjwvcD4gXHJcblx0ICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHRcdDwvZGl2PlxyXG5cdCAgICAgICAgICAgIFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgfVxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPC9GYWRlPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwid2Vic2l0ZS1ieVwiPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vYWxla3NhbmRhcmd1amFzLm5ldFwiPldlYnNpdGUgYnkgQUcgV2ViIERldjwvYT48L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=