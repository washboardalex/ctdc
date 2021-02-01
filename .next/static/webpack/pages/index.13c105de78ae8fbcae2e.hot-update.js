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
        className: "col-6 ".concat(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.alignContactInputs),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "".concat(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contactInputWrapper),
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
        className: "col-6 ".concat(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.alignContactInputs),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 10
        }
      }, __jsx("div", {
        className: "".concat(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contactInputWrapper),
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
        className: "".concat(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contactInputWrapper),
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
        className: "".concat(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contactInputWrapper),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9jb250YWN0Y2FyZC9jb21wb25lbnRzL2NvbnRhY3Rmb3JtL0NvbnRhY3RGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhY3RGb3JtIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwidmFsaWRhdGVGaWVsZCIsImZpZWxkTmFtZSIsImNvbmNhdCIsImxlbmd0aCIsInZhbGlkYXRlRm9ybSIsInByZXZTdGF0ZSIsImZvcm1WYWxpZCIsInN0YXRlIiwiZmlyc3ROYW1lVmFsaWQiLCJwaG9uZU51bWJlclZhbGlkIiwiZmlyc3ROYW1lIiwicGhvbmVOdW1iZXIiLCJsYXN0TmFtZSIsImVtYWlsQWRkcmVzcyIsIm1lc3NhZ2VUZXh0IiwiZGF0YSIsImxvYWRpbmdTdGF0ZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImlzTG9hZGluZyIsImVycm9yIiwic3VibWl0dGVkIiwic3R5bGVzIiwiY29udGFjdEZvcm1CYWNrZ3JvdW5kIiwiY29udGFjdEZvcm1BbGlnbiIsImNvbnRhY3RGb3JtQ29udGFpbmVyIiwiY29udGFjdEZvcm1Db250YWluZXJXaWR0aCIsImNvbnRhY3RGb3JtSGVhZGluZyIsImFsaWduQ29udGFjdElucHV0cyIsImNvbnRhY3RJbnB1dFdyYXBwZXIiLCJvbkNoYW5nZSIsIm9uU3VibWl0IiwiY29sb3IiLCJmb250U2l6ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBOztJQUVNQSxXOzs7OztBQUVMLHlCQUFjO0FBQUE7O0FBQUE7O0FBQ1o7O0FBRFksbVFBcUJILFVBQUNDLENBQUQsRUFBTztBQUNqQixVQUFNQyxJQUFJLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxJQUF0QjtBQUNBLFVBQU1FLEtBQUssR0FBR0gsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQXZCOztBQUNBLFlBQUtDLFFBQUwsdUhBQ0VILElBREYsRUFDU0UsS0FEVCxHQUVHLFlBQU07QUFBRSxjQUFLRSxhQUFMLENBQW1CSixJQUFuQixFQUF5QkUsS0FBekI7QUFBaUMsT0FGNUM7QUFHQSxLQTNCYTs7QUFBQSx3UUE2QkUsVUFBQ0csU0FBRCxFQUFZSCxLQUFaLEVBQXNCO0FBQ3BDLFlBQUtDLFFBQUwsdUhBQ0lFLFNBQVMsQ0FBQ0MsTUFBVixDQUFpQixPQUFqQixDQURKLEVBQ2dDSixLQUFLLENBQUNLLE1BQU4sR0FBZSxDQUQvQyxHQUdDLE1BQUtDLFlBSE47QUFJRCxLQWxDYTs7QUFBQSx1UUFvQ0MsWUFBTTtBQUNuQixZQUFLTCxRQUFMLENBQWMsVUFBQU0sU0FBUztBQUFBLGVBQUs7QUFDM0JDLG1CQUFTLEVBQUcsTUFBS0MsS0FBTCxDQUFXQyxjQUFYLElBQTZCLE1BQUtELEtBQUwsQ0FBV0U7QUFEekIsU0FBTDtBQUFBLE9BQXZCO0FBR0QsS0F4Q2E7O0FBQUEsbVFBMENILFlBQU07QUFFaEIsWUFBS1QsYUFBTCxDQUFtQixXQUFuQixFQUFnQyxNQUFLTyxLQUFMLENBQVdHLFNBQTNDOztBQUNBLFlBQUtWLGFBQUwsQ0FBbUIsYUFBbkIsRUFBa0MsTUFBS08sS0FBTCxDQUFXSSxXQUE3Qzs7QUFIZ0Isd0JBS3dELE1BQUtKLEtBTDdEO0FBQUEsVUFLUkcsU0FMUSxlQUtSQSxTQUxRO0FBQUEsVUFLR0UsUUFMSCxlQUtHQSxRQUxIO0FBQUEsVUFLYUQsV0FMYixlQUthQSxXQUxiO0FBQUEsVUFLMEJFLFlBTDFCLGVBSzBCQSxZQUwxQjtBQUFBLFVBS3dDQyxXQUx4QyxlQUt3Q0EsV0FMeEM7QUFNaEIsVUFBTUMsSUFBSSxHQUFHO0FBQUVMLGlCQUFTLEVBQVRBLFNBQUY7QUFBYUUsZ0JBQVEsRUFBUkEsUUFBYjtBQUF1QkQsbUJBQVcsRUFBWEEsV0FBdkI7QUFBb0NFLG9CQUFZLEVBQVpBLFlBQXBDO0FBQWtEQyxtQkFBVyxFQUFYQTtBQUFsRCxPQUFiOztBQUVBLFVBQUksTUFBS1AsS0FBTCxDQUFXRCxTQUFYLEtBQXlCLElBQTdCLEVBQW1DO0FBRWxDLGNBQUtQLFFBQUwsQ0FBYyxVQUFBTSxTQUFTO0FBQUEsaUJBQUk7QUFBRVcsd0JBQVksRUFBRTtBQUFoQixXQUFKO0FBQUEsU0FBdkI7O0FBRUFDLGFBQUssQ0FBQyxjQUFELEVBQWlCO0FBQUU7QUFDcEJDLGdCQUFNLEVBQUUsTUFEVTtBQUVsQkMsaUJBQU8sRUFBRTtBQUNQLHNCQUFVLG1DQURIO0FBRVAsNEJBQWdCO0FBRlQsV0FGUztBQU1sQkMsY0FBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZjtBQU5ZLFNBQWpCLENBQUwsQ0FPS1EsSUFQTCxDQU9VLFVBQUNDLEdBQUQsRUFBUztBQUNmQSxhQUFHLENBQUNDLE1BQUosS0FBZSxHQUFmLEdBQXFCLE1BQUsxQixRQUFMLENBQWM7QUFBRWlCLHdCQUFZLEVBQUU7QUFBaEIsV0FBZCxDQUFyQixHQUFvRSxNQUFLakIsUUFBTCxDQUFjO0FBQUNpQix3QkFBWSxFQUFFO0FBQWYsV0FBZCxDQUFwRTtBQUNELFNBVEg7QUFVQTtBQUNELEtBakVhOztBQUVaLFVBQUtULEtBQUwsR0FBYTtBQUNaRyxlQUFTLEVBQUUsRUFEQztBQUVaRSxjQUFRLEVBQUUsRUFGRTtBQUdaRCxpQkFBVyxFQUFFLEVBSEQ7QUFJWkUsa0JBQVksRUFBRSxFQUpGO0FBS1pDLGlCQUFXLEVBQUUsRUFMRDtBQU9iTixvQkFBYyxFQUFFLElBUEg7QUFRYkMsc0JBQWdCLEVBQUUsSUFSTDtBQVNiSCxlQUFTLEVBQUUsS0FURTtBQVdiVSxrQkFBWSxFQUFFLFVBWEQ7QUFhYlUsZUFBUyxFQUFFLEtBYkU7QUFjYkMsV0FBSyxFQUFFLEtBZE07QUFlYkMsZUFBUyxFQUFFO0FBZkUsS0FBYjtBQUZZO0FBbUJiOzs7OzZCQWdEUztBQUFBOztBQUNULGFBQ0M7QUFBSyxpQkFBUyxZQUFLQyxnRUFBTSxDQUFDQyxxQkFBWixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLGlCQUFTLG1CQUFZRCxnRUFBTSxDQUFDRSxnQkFBbkIsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxnQkFBU0YsZ0VBQU0sQ0FBQ0csb0JBQWhCLGNBQXdDSCxnRUFBTSxDQUFDSSx5QkFBL0MsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxtQkFBWUosZ0VBQU0sQ0FBQ0ssa0JBQW5CLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUksWUFBSSxFQUFDLGdCQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsQ0FERCxFQUlDO0FBQUssaUJBQVMsa0JBQVdMLGdFQUFNLENBQUNNLGtCQUFsQixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLGlCQUFTLFlBQUtOLGdFQUFNLENBQUNPLG1CQUFaLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQ0MsWUFBSSxFQUFDLFdBRE47QUFFQyxhQUFLLEVBQUUsS0FBSzdCLEtBQUwsQ0FBV0csU0FGbkI7QUFHQyxnQkFBUSxFQUFFLGtCQUFDZixDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDMEMsUUFBTCxDQUFjMUMsQ0FBZCxDQUFQO0FBQUEsU0FIWDtBQUlDLG1CQUFXLEVBQUMsdUJBSmI7QUFLQyxZQUFJLEVBQUMsTUFMTjtBQU1DLGlCQUFTLCtCQUF3QixLQUFLWSxLQUFMLENBQVdDLGNBQVgsR0FBNEIsRUFBNUIsR0FBaUMsMEJBQXpELENBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBREQsQ0FKRCxFQWdCSTtBQUFLLGlCQUFTLGtCQUFXcUIsZ0VBQU0sQ0FBQ00sa0JBQWxCLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNGO0FBQUssaUJBQVMsWUFBS04sZ0VBQU0sQ0FBQ08sbUJBQVosQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFDQyxZQUFJLEVBQUMsVUFETjtBQUVDLGFBQUssRUFBRSxLQUFLN0IsS0FBTCxDQUFXSyxRQUZuQjtBQUdDLGdCQUFRLEVBQUUsa0JBQUNqQixDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDMEMsUUFBTCxDQUFjMUMsQ0FBZCxDQUFQO0FBQUEsU0FIWDtBQUlDLG1CQUFXLEVBQUMsV0FKYjtBQUtDLFlBQUksRUFBQyxNQUxOO0FBTUMsaUJBQVMsRUFBQyxvQkFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FERSxDQWhCSixFQTRCSTtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNGO0FBQUssaUJBQVMsWUFBS2tDLGdFQUFNLENBQUNPLG1CQUFaLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQ0MsWUFBSSxFQUFDLGFBRE47QUFFQyxhQUFLLEVBQUUsS0FBSzdCLEtBQUwsQ0FBV0ksV0FGbkI7QUFHQyxnQkFBUSxFQUFFLGtCQUFDaEIsQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQzBDLFFBQUwsQ0FBYzFDLENBQWQsQ0FBUDtBQUFBLFNBSFg7QUFJQyxtQkFBVyxFQUFDLHlCQUpiO0FBS0MsWUFBSSxFQUFDLE1BTE47QUFNQyxpQkFBUywrQkFBd0IsS0FBS1ksS0FBTCxDQUFXRSxnQkFBWCxHQUE4QixFQUE5QixHQUFtQywwQkFBM0QsQ0FOVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FERSxDQTVCSixFQXdDSTtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNGO0FBQUssaUJBQVMsWUFBS29CLGdFQUFNLENBQUNPLG1CQUFaLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQ0MsWUFBSSxFQUFDLGNBRE47QUFFQyxhQUFLLEVBQUUsS0FBSzdCLEtBQUwsQ0FBV00sWUFGbkI7QUFHQyxnQkFBUSxFQUFFLGtCQUFDbEIsQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQzBDLFFBQUwsQ0FBYzFDLENBQWQsQ0FBUDtBQUFBLFNBSFg7QUFJQyxtQkFBVyxFQUFDLE9BSmI7QUFLQyxZQUFJLEVBQUMsTUFMTjtBQU1DLGlCQUFTLEVBQUMsb0JBTlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBREUsQ0F4Q0osRUFvREk7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRjtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQ0MsWUFBSSxFQUFDLGFBRE47QUFFQyxhQUFLLEVBQUUsS0FBS1ksS0FBTCxDQUFXTyxXQUZuQjtBQUdDLGdCQUFRLEVBQUUsa0JBQUNuQixDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDMEMsUUFBTCxDQUFjMUMsQ0FBZCxDQUFQO0FBQUEsU0FIWDtBQUlDLG1CQUFXLEVBQUMsY0FKYjtBQUtDLFlBQUksRUFBQyxNQUxOO0FBTUMsaUJBQVMsRUFBQyx1QkFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsQ0FERSxDQXBESixFQWlFSSxNQUFDLHdEQUFEO0FBQU0sY0FBTSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLEtBQUtZLEtBQUwsQ0FBV1MsWUFBWCxLQUE0QixVQUE3QixJQUNEO0FBQVEsZUFBTyxFQUFFLEtBQUtzQixRQUF0QjtBQUFnQyxpQkFBUyxFQUFDLHVCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLEVBTUcsS0FBSy9CLEtBQUwsQ0FBV1MsWUFBWCxLQUE0QixTQUE3QixJQUNJO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0YsTUFBQyxvREFBRDtBQUFjLFlBQUksRUFBRSxNQUFwQjtBQUE0QixhQUFLLEVBQUUsT0FBbkM7QUFBNEMsY0FBTSxFQUFFLEVBQXBEO0FBQXdELGFBQUssRUFBRSxFQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREUsQ0FQTixFQVdPLEtBQUtULEtBQUwsQ0FBV1MsWUFBWCxLQUE0QixXQUE3QixJQUNEO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFHLGFBQUssRUFBRTtBQUFDdUIsZUFBSyxFQUFDLE9BQVA7QUFBZ0JDLGtCQUFRLEVBQUM7QUFBekIsU0FBVjtBQUE0QyxpQkFBUyxFQUFDLGdCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURELENBREQsRUFJQztBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQUZELENBSkQsQ0FERCxDQVpMLEVBd0JNLEtBQUtqQyxLQUFMLENBQVdTLFlBQVgsS0FBNEIsT0FBN0IsSUFDQTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBRyxhQUFLLEVBQUU7QUFBQ3VCLGVBQUssRUFBQyxPQUFQO0FBQWdCQyxrQkFBUSxFQUFDO0FBQXpCLFNBQVY7QUFBNEMsaUJBQVMsRUFBQyxnQkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxDQURELEVBSUM7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FGRCxDQUpELENBREQsQ0F6QkwsQ0FEQSxDQWpFSixDQURELENBREQsRUE2R0M7QUFBTSxpQkFBUyxFQUFDLFlBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBNkI7QUFBRyxjQUFNLEVBQUMsUUFBVjtBQUFtQixZQUFJLEVBQUMsNEJBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQTdCLENBN0dELENBREQ7QUFpSEE7Ozs7RUF2THdCQywrQzs7QUEwTFgvQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xM2MxMDVkZTc4YWU4ZmJjYWUyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcclxuaW1wb3J0IFJlYWN0TG9hZGluZyBmcm9tICdyZWFjdC1sb2FkaW5nJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWN0Rm9ybS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jbGFzcyBDb250YWN0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0ICBzdXBlcigpO1xyXG5cdCAgdGhpcy5zdGF0ZSA9IHsgXHJcblx0ICBcdGZpcnN0TmFtZTogJycsXHJcblx0ICBcdGxhc3ROYW1lOiAnJyxcclxuXHQgIFx0cGhvbmVOdW1iZXI6ICcnLFxyXG5cdCAgXHRlbWFpbEFkZHJlc3M6ICcnLFxyXG5cdCAgXHRtZXNzYWdlVGV4dDogJycsXHJcblx0XHRcdFxyXG5cdFx0XHRmaXJzdE5hbWVWYWxpZDogdHJ1ZSxcclxuXHRcdFx0cGhvbmVOdW1iZXJWYWxpZDogdHJ1ZSxcclxuXHRcdFx0Zm9ybVZhbGlkOiBmYWxzZSxcclxuXHRcdFx0XHJcblx0XHRcdGxvYWRpbmdTdGF0ZTogJ3ByZS1sb2FkJyxcclxuXHJcblx0XHRcdGlzTG9hZGluZzogZmFsc2UsXHJcblx0XHRcdGVycm9yOiBmYWxzZSxcclxuXHRcdFx0c3VibWl0dGVkOiBmYWxzZVxyXG5cdCAgfVxyXG5cdH1cclxuXHJcblx0b25DaGFuZ2UgPSAoZSkgPT4ge1xyXG5cdFx0Y29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcblx0XHRjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdFtuYW1lXTogdmFsdWVcclxuXHRcdH0sICgpID0+IHsgdGhpcy52YWxpZGF0ZUZpZWxkKG5hbWUsIHZhbHVlKSB9KTtcclxuXHR9XHJcblxyXG5cdHZhbGlkYXRlRmllbGQgPSAoZmllbGROYW1lLCB2YWx1ZSkgPT4ge1xyXG5cdCAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIFtmaWVsZE5hbWUuY29uY2F0KFwiVmFsaWRcIildOih2YWx1ZS5sZW5ndGggPiAwKVxyXG4gICAgfSwgXHJcbiAgICB0aGlzLnZhbGlkYXRlRm9ybSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZUZvcm0gPSAoKSA9PiB7XHJcblx0ICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG5cdCAgXHRmb3JtVmFsaWQ6IFx0dGhpcy5zdGF0ZS5maXJzdE5hbWVWYWxpZCAmJiB0aGlzLnN0YXRlLnBob25lTnVtYmVyVmFsaWRcclxuXHRcdH0pKTtcclxuXHR9XHJcblxyXG5cdG9uU3VibWl0ID0gKCkgPT4ge1xyXG5cclxuXHRcdHRoaXMudmFsaWRhdGVGaWVsZCgnZmlyc3ROYW1lJywgdGhpcy5zdGF0ZS5maXJzdE5hbWUpO1xyXG5cdFx0dGhpcy52YWxpZGF0ZUZpZWxkKCdwaG9uZU51bWJlcicsIHRoaXMuc3RhdGUucGhvbmVOdW1iZXIpO1xyXG5cclxuXHRcdGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmVOdW1iZXIsIGVtYWlsQWRkcmVzcywgbWVzc2FnZVRleHQgfSA9IHRoaXMuc3RhdGU7XHJcblx0XHRjb25zdCBkYXRhID0geyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBwaG9uZU51bWJlciwgZW1haWxBZGRyZXNzLCBtZXNzYWdlVGV4dCB9O1xyXG5cclxuXHRcdGlmICh0aGlzLnN0YXRlLmZvcm1WYWxpZCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4oeyBsb2FkaW5nU3RhdGU6ICdsb2FkaW5nJyB9KSk7XHJcblxyXG5cdFx0XHRmZXRjaCgnL2FwaS9jb250YWN0JywgeyAvLyAnL2FwaS9jb250YWN0J1xyXG5cdCAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG5cdCAgICAgIGhlYWRlcnM6IHtcclxuXHQgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJyxcclxuXHQgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHQgICAgICB9LFxyXG5cdCAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcblx0ICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG5cdCAgICAgIHJlcy5zdGF0dXMgPT09IDIwMCA/IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nU3RhdGU6ICdzdWJtaXR0ZWQnIH0pIDogdGhpcy5zZXRTdGF0ZSh7bG9hZGluZ1N0YXRlOiAnZXJyb3InfSlcclxuXHQgICAgfSlcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlciAoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3RGb3JtQmFja2dyb3VuZH1gfT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbC0xMiAke3N0eWxlcy5jb250YWN0Rm9ybUFsaWdufWB9PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgJHtzdHlsZXMuY29udGFjdEZvcm1Db250YWluZXJ9ICR7c3R5bGVzLmNvbnRhY3RGb3JtQ29udGFpbmVyV2lkdGh9YH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyICR7c3R5bGVzLmNvbnRhY3RGb3JtSGVhZGluZ31gfT5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgbmFtZT1cImNvbnRhY3RzZWN0aW9uXCI+Q09OVEFDVDwvaDE+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGNvbC02ICR7c3R5bGVzLmFsaWduQ29udGFjdElucHV0c31gfT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3RJbnB1dFdyYXBwZXJ9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJmaXJzdE5hbWVcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZmlyc3ROYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWUgKHJlcXVpcmVkKVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bjb250YWN0LWZvcm0taW5wdXQgJHt0aGlzLnN0YXRlLmZpcnN0TmFtZVZhbGlkID8gJycgOiAnY29udGFjdC1mb3JtLWVycm9yLWNsYXNzJ31gfSBcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC02ICR7c3R5bGVzLmFsaWduQ29udGFjdElucHV0c31gfT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3RJbnB1dFdyYXBwZXJ9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibGFzdE5hbWVcIiAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmxhc3ROYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb250YWN0LWZvcm0taW5wdXRcIiBcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBhbGlnbi1jb250YWN0LWlucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFjdElucHV0V3JhcHBlcn1gfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBob25lTnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW1iZXJ9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlciAocmVxdWlyZWQpXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGNvbnRhY3QtZm9ybS1pbnB1dCAke3RoaXMuc3RhdGUucGhvbmVOdW1iZXJWYWxpZCA/ICcnIDogJ2NvbnRhY3QtZm9ybS1lcnJvci1jbGFzcyd9YH0gXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYWxpZ24tY29udGFjdC1pbnB1dHNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3RJbnB1dFdyYXBwZXJ9YH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbEFkZHJlc3NcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbEFkZHJlc3N9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1pbnB1dFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGFsaWduLWNvbnRhY3QtaW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0YXJlYS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJtZXNzYWdlVGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm1lc3NhZ2VUZXh0fSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKGUpfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJZb3VyIE1lc3NhZ2VcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29udGFjdC1mb3JtLXRleHRhcmVhXCIgXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3RleHRhcmVhPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPEZhZGUgYm90dG9tPlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBhbGlnbi1jb250YWN0LWlucHV0c1wiPlxyXG5cdFx0XHQgICAgICBcdHtcdCh0aGlzLnN0YXRlLmxvYWRpbmdTdGF0ZSA9PT0gJ3ByZS1sb2FkJykgJiZcclxuXHRcdFx0XHQgICAgICBcdDxidXR0b24gb25DbGljaz17dGhpcy5vblN1Ym1pdH0gY2xhc3NOYW1lPVwiY29udGFjdC1zdWJtaXQtYnV0dG9uXCI+XHJcblx0XHRcdFx0ICAgICAgXHRcdFNVQk1JVFxyXG5cdFx0XHRcdCAgICAgIFx0PC9idXR0b24+XHRcclxuXHRcdFx0ICAgICAgXHR9XHJcblx0XHRcdCAgICAgIFx0eyh0aGlzLnN0YXRlLmxvYWRpbmdTdGF0ZSA9PT0gJ2xvYWRpbmcnKSAmJiBcclxuXHQgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHNwaW5uZXItd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0ICAgICAgICA8UmVhY3RMb2FkaW5nIHR5cGU9e1wic3BpblwifSBjb2xvcj17XCJ3aGl0ZVwifSBoZWlnaHQ9ezgwfSB3aWR0aD17ODB9IC8+XHJcblx0XHRcdFx0XHQgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgeyAodGhpcy5zdGF0ZS5sb2FkaW5nU3RhdGUgPT09ICdzdWJtaXR0ZWQnKSAmJlxyXG5cdCAgICAgICAgICAgIFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cclxuXHQgICAgICAgICAgICBcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHQgICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBzcGlubmVyLXdyYXBwZXJcIj5cclxuXHQgICAgICAgICAgICBcdFx0XHRcdDxpIHN0eWxlPXt7Y29sb3I6J3doaXRlJywgZm9udFNpemU6JzgwcHgnfX0gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj4gY2hlY2tfY2lyY2xlIDwvaT5cclxuXHQgICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb250YWN0LXNwaW5uZXItdHh0XCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8cD5UaGFuayB5b3UgZm9yIHlvdXIgbWVzc2FnZS48L3A+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8cD5XZSB3aWxsIGNvbnRhY3QgeW91IHdpdGhpbiAyNCBob3Vycy48L3A+IFxyXG5cdCAgICAgICAgICAgIFx0XHRcdDwvZGl2PlxyXG5cdCAgICAgICAgICAgIFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdDwvZGl2PlxyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB7KHRoaXMuc3RhdGUubG9hZGluZ1N0YXRlID09PSAnZXJyb3InKSAmJiBcclxuXHQgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcblx0ICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgc3Bpbm5lci13cmFwcGVyXCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8aSBzdHlsZT17e2NvbG9yOid3aGl0ZScsIGZvbnRTaXplOic4MHB4J319IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+IGVycm9yIDwvaT5cclxuXHQgICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb250YWN0LXNwaW5uZXItdHh0XCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8cD5Pb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyE8L3A+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8cD5QbGVhc2UgY2FsbCAwNDMxIDc3MSAwODguPC9wPiBcclxuXHQgICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICB9XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICA8L0ZhZGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ3ZWJzaXRlLWJ5XCI+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHA6Ly9hbGVrc2FuZGFyZ3VqYXMubmV0XCI+V2Vic2l0ZSBieSBBRyBXZWIgRGV2PC9hPjwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==