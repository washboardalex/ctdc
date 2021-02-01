module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/about/About.js":
/*!*****************************************!*\
  !*** ./pages/components/about/About.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.module.scss */ "./pages/components/about/About.module.scss");
/* harmony import */ var _About_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\about\\About.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const About = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 2
  }
}, __jsx("div", {
  style: {
    marginTop: '40px'
  },
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 2
  }
}, __jsx("div", {
  className: "col-12 about-us-head-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "about-us-heading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 4
  }
}, __jsx("h1", {
  id: "aboutsection",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, "ABOUT US"))), __jsx("div", {
  className: "col-12 about-us-section-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 4
  }
}, __jsx("div", {
  className: "col-12 about-us-component",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 6
  }
}, __jsx("div", {
  className: "col-12 sub-component-heading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 8
  }
}, "Our Staff"))), __jsx("div", {
  className: "row staff-card-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 6
  }
}, __jsx("div", {
  className: "col-12 staff-card-2nd-order",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}, __jsx("div", {
  style: {
    height: '100%'
  },
  className: "staff-card",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 8
  }
}, __jsx("div", {
  style: {
    height: '100%'
  },
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "col-lg-5 col-md-12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 10
  }
}, __jsx("div", {
  style: {
    height: '100%'
  },
  className: "staff-circle-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "staff-circle img-ana",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 12
  }
}))), __jsx("div", {
  style: {
    height: '100%'
  },
  className: "col-lg-7 col-md-12 staff-text-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 10
  }
}, __jsx("div", {
  style: {
    paddingTop: '20px',
    paddingLeft: '20px',
    marginRight: '20px'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 11
  }
}, __jsx("h5", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 12
  }
}, "Ana Gujas - Owner and Prosthetist"), __jsx("p", {
  className: "staff-card-p-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 12
  }
}, "Our Prosthetist, Ana Gujas, has forty years experience in the health industry. She has an Advanced Diploma in Dental Prosthetics and is a registered practitioner with the Dental Board of Australia."), __jsx("p", {
  className: "staff-card-p-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 12
  }
}, "She currently works as the Prosthetist for the Aboriginal and Torres Strait Islander Community Health Service in Woolloongabba and is owner-operator for Cleve-Tooth Denture Clinic.")))))), __jsx("div", {
  className: "col-12 staff-card-2nd-order",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "staff-card",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 8
  }
}, __jsx("div", {
  style: {
    height: '100%'
  },
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }
}, __jsx("div", {
  style: {
    height: '100%'
  },
  className: "col-lg-5 col-md-12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 10
  }
}, __jsx("div", {
  className: "staff-circle-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 11
  }
}, __jsx("div", {
  className: "staff-circle img-alex",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 12
  }
}))), __jsx("div", {
  style: {
    height: '100%'
  },
  className: "col-lg-7 col-md-12 staff-text-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 10
  }
}, __jsx("div", {
  style: {
    paddingTop: '20px',
    paddingLeft: '20px',
    marginRight: '20px'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 11
  }
}, __jsx("h5", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 12
  }
}, "Alex Gujas - Admin and Finance"), __jsx("p", {
  className: "staff-card-p-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 12
  }
}, " Alex handles scheduling, invoices, administration and compliance. If Ana is not available using our usual contact information, please call 0450 260 650 and Alex will be happy to assist."), __jsx("p", {
  className: "staff-card-p-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 12
  }
}, "He has been working at this family run business since its founding in 2006."))))))))))), __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 2
  }
}, __jsx("div", {
  className: "landing-break-image",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 3
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/components/about/About.module.scss":
/*!**************************************************!*\
  !*** ./pages/components/about/About.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"about-us-head-container": "About_about-us-head-container__1Dh_M",
	"about-us-heading": "About_about-us-heading__Du9f5",
	"about-us-section-container": "About_about-us-section-container__1di5k",
	"about-us-component": "About_about-us-component__2z5rP",
	"staff-card-wrapper": "About_staff-card-wrapper__1-b9j",
	"clinic-card-wrapper": "About_clinic-card-wrapper__1Ymk7",
	"staff-card": "About_staff-card__1YoFK",
	"staff-card-2nd-order": "About_staff-card-2nd-order__2yori",
	"sub-component-heading": "About_sub-component-heading__2GerG",
	"staff-circle-container": "About_staff-circle-container__2J191",
	"staff-circle": "About_staff-circle__3HHAx",
	"img-ana": "About_img-ana__-0_W0",
	"img-alex": "About_img-alex__3nzgA",
	"staff-text-container": "About_staff-text-container__2jgB8",
	"landing-break-image": "About_landing-break-image__1KEl6"
};


/***/ }),

/***/ "./pages/components/backtotopbutton/BackToTopButton.js":
/*!*************************************************************!*\
  !*** ./pages/components/backtotopbutton/BackToTopButton.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BackToTopButton_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackToTopButton.module.scss */ "./pages/components/backtotopbutton/BackToTopButton.module.scss");
/* harmony import */ var _BackToTopButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BackToTopButton_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\backtotopbutton\\BackToTopButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class BackToTopButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "updateToTopRender", () => {
      this.setState(prevState => ({
        hideBackToTopButton: !(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
      }));
    });

    _defineProperty(this, "scrollToTop", () => {
      react_scroll__WEBPACK_IMPORTED_MODULE_1__["animateScroll"].scrollToTop();
    });

    this.state = {
      hideBackToTopButton: true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.updateToTopRender);
    this.updateToTopRender();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateToTopRender);
  }

  render() {
    const {
      hideBackToTopButton
    } = this.state;
    return __jsx("div", {
      id: "back-to-top-button",
      className: "back-to-top-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 4
      }
    }, !hideBackToTopButton && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
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

}

/* harmony default export */ __webpack_exports__["default"] = (BackToTopButton);

/***/ }),

/***/ "./pages/components/backtotopbutton/BackToTopButton.module.scss":
/*!**********************************************************************!*\
  !*** ./pages/components/backtotopbutton/BackToTopButton.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"back-to-top-button": "BackToTopButton_back-to-top-button__2_1Hz",
	"back-to-top-button-position": "BackToTopButton_back-to-top-button-position__NUBMB"
};


/***/ }),

/***/ "./pages/components/bookingcard/BookingCard.js":
/*!*****************************************************!*\
  !*** ./pages/components/bookingcard/BookingCard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_calendlywidget_CalendlyWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/calendlywidget/CalendlyWidget */ "./pages/components/bookingcard/components/calendlywidget/CalendlyWidget.js");
/* harmony import */ var _BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookingCard.module.scss */ "./pages/components/bookingcard/BookingCard.module.scss");
/* harmony import */ var _BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BookingCard_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\bookingcard\\BookingCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class BookingCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    //Adds script tag for calendly widget
    const body = document.querySelector('body');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    script.setAttribute('type', 'text/javascript');
    body.appendChild(script);
  }

  render() {
    return __jsx("div", {
      className: "booking-card-margin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 4
      }
    }, __jsx("div", {
      id: "bookingsection",
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 5
      }
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
      top: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
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
        lineNumber: 27,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "booking-card-head-container col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 8
      }
    }, __jsx("h1", {
      className: "booking-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }
    }, "BOOK NOW")), __jsx("div", {
      className: "col-12 booking-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 8
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, "We have provided an online booking form to make your booking process as easy as possible - if you prefer to book over the phone or via email, please do not hesitate to contact us on 0450 260 650, or send an email to cleveland.tooth@gmail.com. ")), __jsx("div", {
      className: "col-12 booking-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 8
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, "Aside from the home clinic, Ana also works at the Aboriginal and Torres Strait Islander Health Service - this means that during the week she is often unavailable.  If none of the times below work for you, please let us know and we will do our best to find an appointment time that is mutually suitable."))))), __jsx("div", {
      className: "col-lg-6 col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "row no-pad no-gutters booking-card-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "col-12 calendly-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 8
      }
    }, __jsx("div", {
      style: {
        textAlign: 'center',
        margin: 30
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 37
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 41
      }
    }, "We are currently only accepting bookings via phone appointment."), __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 41
      }
    }, "Please contact 0450 260 650 to book."))))), __jsx("div", {
      className: "d-none d-lg-block col-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "booking-card-head-container col-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 8
      }
    }, __jsx("h1", {
      className: "booking-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, "BOOK NOW")), __jsx("div", {
      className: "col-12 booking-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 8
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, "We have provided an online booking form to make your booking process as convenient as possible - if you prefer to book over the phone or via email, please do not hesitate to contact us on 0450 260 650, or send an email to cleveland.tooth@gmail.com. ")), __jsx("div", {
      className: "col-12 booking-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 8
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, "Aside from the home clinic, Ana also works at the Aboriginal and Torres Strait Islander Health Service - this means that during the week she is often unavailable.  If none of the times below work for you, please let us know and we will do our best to find an appointment time that is mutually suitable."))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BookingCard);

/***/ }),

/***/ "./pages/components/bookingcard/BookingCard.module.scss":
/*!**************************************************************!*\
  !*** ./pages/components/bookingcard/BookingCard.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"booking-card-margin": "BookingCard_booking-card-margin__3hkgE",
	"booking-text": "BookingCard_booking-text__2iHA7",
	"booking-card-container": "BookingCard_booking-card-container__3WZb7",
	"booking-card-head-container": "BookingCard_booking-card-head-container__2M1p8",
	"booking-heading": "BookingCard_booking-heading__EZNJ3",
	"calendly-container": "BookingCard_calendly-container__1fvNw",
	"booking-form-heading": "BookingCard_booking-form-heading__2nOBe",
	"booking-copy-container": "BookingCard_booking-copy-container__2zqHI",
	"correct-margin": "BookingCard_correct-margin__1Cx15"
};


/***/ }),

/***/ "./pages/components/bookingcard/components/calendlywidget/CalendlyWidget.js":
/*!**********************************************************************************!*\
  !*** ./pages/components/bookingcard/components/calendlywidget/CalendlyWidget.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CalendlyWidget_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CalendlyWidget.module.scss */ "./pages/components/bookingcard/components/calendlywidget/CalendlyWidget.module.scss");
/* harmony import */ var _CalendlyWidget_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CalendlyWidget_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\bookingcard\\components\\calendlywidget\\CalendlyWidget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CalendlyWidget = () => __jsx("div", {
  class: "calendly-inline-widget",
  "data-url": "https://calendly.com/cleveland-tooth/60min?hide_gdpr_banner=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 2
  }
});

/* harmony default export */ __webpack_exports__["default"] = (CalendlyWidget);

/***/ }),

/***/ "./pages/components/bookingcard/components/calendlywidget/CalendlyWidget.module.scss":
/*!*******************************************************************************************!*\
  !*** ./pages/components/bookingcard/components/calendlywidget/CalendlyWidget.module.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"calendly-inline-widget": "CalendlyWidget_calendly-inline-widget__2J636"
};


/***/ }),

/***/ "./pages/components/contactcard/ContactCard.js":
/*!*****************************************************!*\
  !*** ./pages/components/contactcard/ContactCard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_contactform_ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contactform/ContactForm */ "./pages/components/contactcard/components/contactform/ContactForm.js");
/* harmony import */ var _ContactCard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactCard.module.scss */ "./pages/components/contactcard/ContactCard.module.scss");
/* harmony import */ var _ContactCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ContactCard_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\contactcard\\ContactCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContactCard = () => __jsx("div", {
  className: "row contact-container-height contact-container-dimensions",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(_components_contactform_ContactForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 4
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (ContactCard);

/***/ }),

/***/ "./pages/components/contactcard/ContactCard.module.scss":
/*!**************************************************************!*\
  !*** ./pages/components/contactcard/ContactCard.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contact-container-height": "ContactCard_contact-container-height__3KZcL",
	"landing-image-container": "ContactCard_landing-image-container__1gDs5",
	"contact-container-dimensions": "ContactCard_contact-container-dimensions__1MCLj",
	"contact-form-container": "ContactCard_contact-form-container__3hogj"
};


/***/ }),

/***/ "./pages/components/contactcard/components/contactform/ContactForm.js":
/*!****************************************************************************!*\
  !*** ./pages/components/contactcard/components/contactform/ContactForm.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading */ "react-loading");
/* harmony import */ var react_loading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactForm.module.scss */ "./pages/components/contactcard/components/contactform/ContactForm.module.scss");
/* harmony import */ var _ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ContactForm_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\contactcard\\components\\contactform\\ContactForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ContactForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onChange", e => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
        [name]: value
      }, () => {
        this.validateField(name, value);
      });
    });

    _defineProperty(this, "validateField", (fieldName, value) => {
      this.setState({
        [fieldName.concat("Valid")]: value.length > 0
      }, this.validateForm);
    });

    _defineProperty(this, "validateForm", () => {
      this.setState(prevState => ({
        formValid: this.state.firstNameValid && this.state.phoneNumberValid
      }));
    });

    _defineProperty(this, "onSubmit", () => {
      this.validateField('firstName', this.state.firstName);
      this.validateField('phoneNumber', this.state.phoneNumber);
      const {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        messageText
      } = this.state;
      const data = {
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        messageText
      };

      if (this.state.formValid === true) {
        this.setState(prevState => ({
          loadingState: 'loading'
        }));
        fetch('/api/contact', {
          // '/api/contact'
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => {
          res.status === 200 ? this.setState({
            loadingState: 'submitted'
          }) : this.setState({
            loadingState: 'error'
          });
        });
      }
    });

    this.state = {
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
  }

  render() {
    return __jsx("div", {
      className: "contact-form-background",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "col-12 contact-form-align",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "row contact-form-container contact-form-container-width",
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
      onChange: e => this.onChange(e),
      placeholder: "First Name (required)",
      type: "text",
      className: `contact-form-input ${this.state.firstNameValid ? '' : 'contact-form-error-class'}`,
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
      onChange: e => this.onChange(e),
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
      onChange: e => this.onChange(e),
      placeholder: "Phone Number (required)",
      type: "text",
      className: `contact-form-input ${this.state.phoneNumberValid ? '' : 'contact-form-error-class'}`,
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
      onChange: e => this.onChange(e),
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
      onChange: e => this.onChange(e),
      placeholder: "Your Message",
      type: "text",
      className: "contact-form-textarea",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }
    }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
    }, __jsx(react_loading__WEBPACK_IMPORTED_MODULE_2___default.a, {
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

}

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./pages/components/contactcard/components/contactform/ContactForm.module.scss":
/*!*************************************************************************************!*\
  !*** ./pages/components/contactcard/components/contactform/ContactForm.module.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contact-form-textarea": "ContactForm_contact-form-textarea__byq1t",
	"contact-form-input": "ContactForm_contact-form-input__1uoHG",
	"align-contact-inputs": "ContactForm_align-contact-inputs__1cC0L",
	"contact-form-background": "ContactForm_contact-form-background__2IhBA",
	"contact-form-align": "ContactForm_contact-form-align__DlXBI",
	"contact-form-container": "ContactForm_contact-form-container__1v6cs",
	"contact-form-container-width": "ContactForm_contact-form-container-width__1ZVgE",
	"contact-form-heading": "ContactForm_contact-form-heading__1d0v7",
	"contact-label-container": "ContactForm_contact-label-container__IDbCK",
	"contact-input-wrapper": "ContactForm_contact-input-wrapper__1ZzBw",
	"contact-form-error-class": "ContactForm_contact-form-error-class__EKsBb",
	"textarea-wrapper": "ContactForm_textarea-wrapper__2RCnP",
	"effect-1": "ContactForm_effect-1__3rOIv",
	"focus-border": "ContactForm_focus-border__3pZPp",
	"contact-submit-button": "ContactForm_contact-submit-button__1gUtp",
	"spinner-wrapper": "ContactForm_spinner-wrapper__DPBsA",
	"contact-spinner-txt": "ContactForm_contact-spinner-txt__-ldFe",
	"website-by": "ContactForm_website-by__2VW_w"
};


/***/ }),

/***/ "./pages/components/landingcard/LandingCard.js":
/*!*****************************************************!*\
  !*** ./pages/components/landingcard/LandingCard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingCard.module.scss */ "./pages/components/landingcard/LandingCard.module.scss");
/* harmony import */ var _LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\landingcard\\LandingCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LandingCard = () => __jsx("div", {
  className: `row no-gutters ${_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardContainer} ${_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cardContainerMargin}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 2
  }
}, __jsx("div", {
  className: `col-12 ${_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.landingImageContainer}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, __jsx("div", {
  className: `${_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.phraseContainer}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 4
  }
}, __jsx("div", {
  className: `${_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bannerText}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("p", {
  className: `d-none d-md-block`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 6
  }
}, "Restore What is Missing, Protect What Remains"), __jsx("p", {
  className: `d-block d-md-none ${_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mobileScreenBannerText}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 6
  }
}, "Restore What is Missing"), __jsx("p", {
  className: `d-block d-md-none ${_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mobileScreenBannerText}`,
  __self: undefined,
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
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx("button", {
  className: `${_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bookingButton}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 6
  }
}, "Book Now", __jsx("div", {
  className: `${_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bookingButton__horizontal}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}), __jsx("div", {
  className: `${_LandingCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bookingButton__vertical}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 7
  }
}))))));

/* harmony default export */ __webpack_exports__["default"] = (LandingCard);

/***/ }),

/***/ "./pages/components/landingcard/LandingCard.module.scss":
/*!**************************************************************!*\
  !*** ./pages/components/landingcard/LandingCard.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardContainer": "LandingCard_cardContainer__3GLgJ",
	"phraseContainer": "LandingCard_phraseContainer__3-Hox",
	"mobileScreenBannerText": "LandingCard_mobileScreenBannerText__2NDGs",
	"staffCardPText": "LandingCard_staffCardPText__U58AN",
	"bannerText": "LandingCard_bannerText__ByA76",
	"landingImageContainer": "LandingCard_landingImageContainer__2iAlT",
	"customActionTag": "LandingCard_customActionTag__1GIEY",
	"bookingButton": "LandingCard_bookingButton__3Mc_a",
	"bookingButton__horizontal": "LandingCard_bookingButton__horizontal__4Y576",
	"bookingButton__vertical": "LandingCard_bookingButton__vertical__NYgpt"
};


/***/ }),

/***/ "./pages/components/mapview/MapContainer.js":
/*!**************************************************!*\
  !*** ./pages/components/mapview/MapContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_mapview_MapView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mapview/MapView */ "./pages/components/mapview/components/mapview/MapView.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapContainer.module.scss */ "./pages/components/mapview/MapContainer.module.scss");
/* harmony import */ var _MapContainer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MapContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\mapview\\MapContainer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MapContainer = () => {
  return __jsx("div", {
    id: "locationsection",
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    top: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-block d-lg-none col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "map-heading-container-phonescreen",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      marginBottom: '20px'
    },
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "map-heading-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: "map-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }, "LOCATION"))), __jsx("div", {
    className: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "map-address-padding",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: "map-address-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, "100 Princess Street "), __jsx("p", {
    className: "map-address-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, "Cleveland QLD 4163"))))))), __jsx("div", {
    id: "default",
    className: "col-lg-8 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "map-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(_components_mapview_MapView__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "d-none d-lg-block col-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "map-heading-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "map-heading-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "map-heading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, "LOCATION")), __jsx("div", {
    className: "map-address-padding",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "map-address-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "100 Princess Street"), __jsx("p", {
    className: "map-address-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, "Cleveland QLD 4163")))));
};

/* harmony default export */ __webpack_exports__["default"] = (MapContainer);

/***/ }),

/***/ "./pages/components/mapview/MapContainer.module.scss":
/*!***********************************************************!*\
  !*** ./pages/components/mapview/MapContainer.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"map-container": "MapContainer_map-container__3FTV7",
	"map-address-padding": "MapContainer_map-address-padding__G8Ls1",
	"map-address-text": "MapContainer_map-address-text__2e3pT",
	"map-heading-container": "MapContainer_map-heading-container__DGmoq",
	"map-heading-container-phonescreen": "MapContainer_map-heading-container-phonescreen__11iCQ",
	"map-heading-wrapper": "MapContainer_map-heading-wrapper__WzBrE",
	"map-heading": "MapContainer_map-heading__NS1Im"
};


/***/ }),

/***/ "./pages/components/mapview/components/mapview/MapView.js":
/*!****************************************************************!*\
  !*** ./pages/components/mapview/components/mapview/MapView.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "google-maps-react");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\mapview\\components\\mapview\\MapView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const style = {
  height: "400px",
  width: "96.5%"
};

class MapView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "onMarkerClick", (props, marker, e) => {
      this.setState(prevState => ({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      }));
    });

    _defineProperty(this, "onClose", () => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    });

    _defineProperty(this, "onMarkerMounted", element => {
      this.onMarkerClick(element.props, element.marker, element);
    });

    _defineProperty(this, "handleMapIdle", () => {
      this.setState({
        mapLoaded: true
      });
    });

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapLoaded: false
    };
    this.handleMapIdle = this.handleMapIdle.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  render() {
    return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Map"], {
      google: this.props.google,
      style: style,
      initialCenter: {
        lat: -27.53412,
        lng: 153.27063
      },
      zoom: this.props.zoom,
      onIdle: this.handleMapIdle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }, this.state.mapLoaded && __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      ref: this.onMarkerMounted,
      onClick: this.onMarkerClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }), __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["InfoWindow"], {
      marker: this.state.activeMarker,
      visible: this.state.showingInfoWindow,
      onClose: this.onClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, "Cleve-Tooth Denture Clinic"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, "100 Princess St, Cleveland QLD 4163"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, "Ph: 0431 771 088"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: 'AIzaSyDyhhLFhaI7oKOojSNJOi2e9lVf8PiYoTk'
})(MapView));

/***/ }),

/***/ "./pages/components/navbar/NavBar.js":
/*!*******************************************!*\
  !*** ./pages/components/navbar/NavBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_burgermenu_BurgerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/burgermenu/BurgerMenu */ "./pages/components/navbar/components/burgermenu/BurgerMenu.js");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavBar.module.scss */ "./pages/components/navbar/NavBar.module.scss");
/* harmony import */ var _NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\navbar\\NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//React scroll can use element id as a reference for where to scroll.
//I have put these either in the title elements (h1) or their surrounding divs




class NavBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();

    _defineProperty(this, "updatePredicate", () => {
      this.setState({
        useCheezeburger: window.innerWidth < 1085
      });
    });

    this.state = {
      useCheezeburger: true
    };
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  render() {
    const useCheezeburger = this.state.useCheezeburger;
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
    }, __jsx(_components_burgermenu_BurgerMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 12
      }
    }, __jsx("div", {
      className: `${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.all} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navContactBar}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 12
      }
    }, __jsx("div", {
      className: `${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.all} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contactBarText}`,
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
      className: `${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.all} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navBarStyle}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 12
      }
    }, __jsx("ul", {
      className: `${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.alignNavItems}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 8
      }
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
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
      className: `${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.button} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.all} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.type1}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, "About")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
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
      className: `${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.button} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.type2}`,
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
      className: `${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.all} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.buttonMain} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navBarHead}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, __jsx("h1", {
      className: `${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.all} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navLogoText}`,
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
      className: `${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.all} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navLogoText}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, "Denture Clinic")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
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
      className: `${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.all} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.button} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.type3}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }
    }, "Location")), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
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
      className: `${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.button} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.all} ${_NavBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.type2}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }, "Contact"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./pages/components/navbar/NavBar.module.scss":
/*!****************************************************!*\
  !*** ./pages/components/navbar/NavBar.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navBarStyle": "NavBar_navBarStyle__2zAfB",
	"navBarHead": "NavBar_navBarHead__2ircd",
	"navbarAction": "NavBar_navbarAction__osPLs",
	"alignNavItems": "NavBar_alignNavItems__1krOT",
	"navItemStyle": "NavBar_navItemStyle__t3CyD",
	"navItemMain": "NavBar_navItemMain__3dSed",
	"navContactBar": "NavBar_navContactBar__2ow9j",
	"contactBarText": "NavBar_contactBarText__3ZrlZ",
	"all": "NavBar_all__1KXPJ",
	"button": "NavBar_button__1j-NK",
	"type1": "NavBar_type1__2lsYe",
	"type2": "NavBar_type2__2wpSA",
	"type3": "NavBar_type3__CMkJL",
	"navLogoText": "NavBar_navLogoText__2bNWq"
};


/***/ }),

/***/ "./pages/components/navbar/components/burgermenu/BurgerMenu.js":
/*!*********************************************************************!*\
  !*** ./pages/components/navbar/components/burgermenu/BurgerMenu.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BurgerMenu.module.scss */ "./pages/components/navbar/components/burgermenu/BurgerMenu.module.scss");
/* harmony import */ var _BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BurgerMenu_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\navbar\\components\\burgermenu\\BurgerMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class BurgerComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  handleLinkClick() {
    this.setState({
      menuOpen: false
    });
  }

  render() {
    const styles = {
      container: {
        position: 'absolute',
        top: 0,
        left: 30,
        zIndex: '99',
        opacity: 0.9,
        display: 'flex',
        alignItems: 'center',
        background: 'white',
        width: '100%',
        color: 'black',
        fontFamily: 'Lobster'
      },
      logo: {
        margin: '0 auto',
        transform: 'translateX(-40px)',
        marginTop: '10px'
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        filter: this.state.menuOpen ? 'blur(2px)' : null,
        transition: 'filter 0.5s ease'
      }
    };
    const menu = ['About', 'Services', 'Location', 'Contact'];
    const onClickDestination = ['aboutsection', 'servicessection', 'locationsection', 'contactsection'];
    const menuItems = menu.map((val, index) => {
      return __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        activeClass: "active",
        key: index,
        to: onClickDestination[index],
        spy: true,
        smooth: true,
        offset: -70,
        duration: 700,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, __jsx(MenuItem, {
        key: index,
        delay: `${index * 0.1}s`,
        onClick: () => {
          this.handleLinkClick();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }, val));
    });
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: styles.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx(MenuButton, {
      open: this.state.menuOpen,
      onClick: () => this.handleMenuClick(),
      color: "black",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }), __jsx("div", {
      style: styles.logo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "/static/logo3_opt.png",
      alt: "Tooth",
      height: "90",
      width: "90",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 36
      }
    }))), __jsx(Menu, {
      open: this.state.menuOpen,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, menuItems));
  }

}

class MenuItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: '1s appear forwards',
        animationDelay: this.props.delay
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: '1.2rem',
        padding: '1rem 0',
        margin: '0 5%',
        cursor: 'pointer',
        color: this.state.hover ? 'gray' : '#000000',
        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
        animationDelay: this.props.delay
      },
      line: {
        width: '90%',
        height: '1px',
        background: 'gray',
        margin: '0 auto',
        animation: '0.5s shrink forwards',
        animationDelay: this.props.delay
      }
    };
    return __jsx("div", {
      style: styles.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: styles.menuItem,
      onMouseEnter: () => {
        this.handleHover();
      },
      onMouseLeave: () => {
        this.handleHover();
      },
      onClick: this.props.onClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }
    }, this.props.children), __jsx("div", {
      style: styles.line,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 7
      }
    }));
  }

}
/* Menu.jsx */


class Menu extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({
        open: nextProps.open
      });
    }
  }

  render() {
    const styles = {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: this.state.open ? '100%' : 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        opacity: 0.95,
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 2
      },
      menuList: {
        paddingTop: '100px'
      }
    };
    return __jsx("div", {
      style: styles.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 7
      }
    }, this.state.open ? __jsx("div", {
      style: styles.menuList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, this.props.children) : null);
  }

}
/* MenuButton.jsx */


class MenuButton extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : 'black'
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({
        open: nextProps.open
      });
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const styles = {
      container: {
        height: '32px',
        width: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '4px'
      },
      line: {
        height: '2px',
        width: '20px',
        background: this.state.color,
        transition: 'all 0.2s ease'
      },
      lineTop: {
        transform: this.state.open ? 'rotate(45deg)' : 'none',
        transformOrigin: 'top left',
        marginBottom: '5px'
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? 'translateX(-16px)' : 'none'
      },
      lineBottom: {
        transform: this.state.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
        transformOrigin: 'top left',
        marginTop: '5px'
      }
    };
    return __jsx("div", {
      style: styles.container,
      onClick: this.props.onClick ? this.props.onClick : () => {
        this.handleClick();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 7
      }
    }, __jsx("div", {
      style: _objectSpread(_objectSpread({}, styles.line), styles.lineTop),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }
    }), __jsx("div", {
      style: _objectSpread(_objectSpread({}, styles.line), styles.lineMiddle),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }
    }), __jsx("div", {
      style: _objectSpread(_objectSpread({}, styles.line), styles.lineBottom),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 9
      }
    }));
  }

}
/* Main.jsx */


class Burger extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const styles = {
      main: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '110px'
      }
    };
    return __jsx("div", {
      style: styles.main,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 7
      }
    }, __jsx(BurgerComponent, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./pages/components/navbar/components/burgermenu/BurgerMenu.module.scss":
/*!******************************************************************************!*\
  !*** ./pages/components/navbar/components/burgermenu/BurgerMenu.module.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"appear": "BurgerMenu_appear__31vht",
	"slideIn": "BurgerMenu_slideIn__2gPWA",
	"shrink": "BurgerMenu_shrink__vbq2i"
};


/***/ }),

/***/ "./pages/components/servicescard/ServicesCard.js":
/*!*******************************************************!*\
  !*** ./pages/components/servicescard/ServicesCard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServicesCard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServicesCard.module.scss */ "./pages/components/servicescard/ServicesCard.module.scss");
/* harmony import */ var _ServicesCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ServicesCard_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\components\\servicescard\\ServicesCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ServicesCard = () => __jsx("div", {
  className: "row service-card-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 2
  }
}, __jsx("div", {
  className: "col-12 service-heading-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx("h1", {
  id: "servicessection",
  className: "service-heading",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 4
  }
}, "OUR SERVICES")), __jsx("div", {
  className: "col-12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 4
  }
}, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
  left: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "col-lg-4 col-md-6 col-sm-12 service-asset-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "circle denture-img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 6
  }
}), __jsx("div", {
  className: "service-asset-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 6
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}, "Dentures")))), __jsx("div", {
  className: "col-lg-4 col-md-6 col-sm-12 service-asset-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "circle repairs-img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 6
  }
}), __jsx("div", {
  className: "service-asset-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 6
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
}, "Repairs"))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
  right: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "col-lg-4 col-md-6 col-sm-12 service-asset-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "circle mouthguard-img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 6
  }
}), __jsx("div", {
  className: "service-asset-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 6
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }
}, "Mouthguards")))))));

/* harmony default export */ __webpack_exports__["default"] = (ServicesCard);

/***/ }),

/***/ "./pages/components/servicescard/ServicesCard.module.scss":
/*!****************************************************************!*\
  !*** ./pages/components/servicescard/ServicesCard.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"service-card-container": "ServicesCard_service-card-container__3sQsj",
	"service-heading-container": "ServicesCard_service-heading-container__1dQq2",
	"service-heading": "ServicesCard_service-heading__2rJhP",
	"service-asset-container": "ServicesCard_service-asset-container__3etuj",
	"circle": "ServicesCard_circle__1p1xB",
	"denture-img": "ServicesCard_denture-img__6he0u",
	"repairs-img": "ServicesCard_repairs-img__gmyT9",
	"mouthguard-img": "ServicesCard_mouthguard-img__1EYVO"
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navbar_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/NavBar */ "./pages/components/navbar/NavBar.js");
/* harmony import */ var _components_landingcard_LandingCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/landingcard/LandingCard */ "./pages/components/landingcard/LandingCard.js");
/* harmony import */ var _components_about_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/About */ "./pages/components/about/About.js");
/* harmony import */ var _components_servicescard_ServicesCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/servicescard/ServicesCard */ "./pages/components/servicescard/ServicesCard.js");
/* harmony import */ var _components_contactcard_ContactCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contactcard/ContactCard */ "./pages/components/contactcard/ContactCard.js");
/* harmony import */ var _components_bookingcard_BookingCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bookingcard/BookingCard */ "./pages/components/bookingcard/BookingCard.js");
/* harmony import */ var _components_mapview_MapContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mapview/MapContainer */ "./pages/components/mapview/MapContainer.js");
/* harmony import */ var _components_backtotopbutton_BackToTopButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/backtotopbutton/BackToTopButton */ "./pages/components/backtotopbutton/BackToTopButton.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/index.module.scss */ "./pages/styles/index.module.scss");
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\work\\ctdc\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Index = () => __jsx("div", {
  className: "index-doc",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 2
  }
}, __jsx(_components_navbar_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }
}), __jsx("div", {
  className: "container-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
}, __jsx(_components_landingcard_LandingCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 4
  }
}), __jsx(_components_about_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 4
  }
}), __jsx(_components_servicescard_ServicesCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 4
  }
}), __jsx(_components_mapview_MapContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 4
  }
}), __jsx(_components_bookingcard_BookingCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 4
  }
}), __jsx(_components_contactcard_ContactCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 4
  }
})), __jsx(_components_backtotopbutton_BackToTopButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/styles/index.module.scss":
/*!****************************************!*\
  !*** ./pages/styles/index.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"location-heading": "styles_location-heading__2swxY",
	"index-doc": "styles_index-doc__HpEPt"
};


/***/ }),

/***/ "google-maps-react":
/*!************************************!*\
  !*** external "google-maps-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loading":
/*!********************************!*\
  !*** external "react-loading" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loading");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9hYm91dC9BYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2Fib3V0L0Fib3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvYmFja3RvdG9wYnV0dG9uL0JhY2tUb1RvcEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2JhY2t0b3RvcGJ1dHRvbi9CYWNrVG9Ub3BCdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9ib29raW5nY2FyZC9Cb29raW5nQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2Jvb2tpbmdjYXJkL0Jvb2tpbmdDYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvYm9va2luZ2NhcmQvY29tcG9uZW50cy9jYWxlbmRseXdpZGdldC9DYWxlbmRseVdpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2Jvb2tpbmdjYXJkL2NvbXBvbmVudHMvY2FsZW5kbHl3aWRnZXQvQ2FsZW5kbHlXaWRnZXQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9jb250YWN0Y2FyZC9Db250YWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2NvbnRhY3RjYXJkL0NvbnRhY3RDYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvY29udGFjdGNhcmQvY29tcG9uZW50cy9jb250YWN0Zm9ybS9Db250YWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2NvbnRhY3RjYXJkL2NvbXBvbmVudHMvY29udGFjdGZvcm0vQ29udGFjdEZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9sYW5kaW5nY2FyZC9MYW5kaW5nQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2xhbmRpbmdjYXJkL0xhbmRpbmdDYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvbWFwdmlldy9NYXBDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9tYXB2aWV3L01hcENvbnRhaW5lci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL21hcHZpZXcvY29tcG9uZW50cy9tYXB2aWV3L01hcFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9uYXZiYXIvTmF2QmFyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvbmF2YmFyL05hdkJhci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL25hdmJhci9jb21wb25lbnRzL2J1cmdlcm1lbnUvQnVyZ2VyTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL25hdmJhci9jb21wb25lbnRzL2J1cmdlcm1lbnUvQnVyZ2VyTWVudS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3NlcnZpY2VzY2FyZC9TZXJ2aWNlc0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9zZXJ2aWNlc2NhcmQvU2VydmljZXNDYXJkLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3N0eWxlcy9pbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGUtbWFwcy1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbG9hZGluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJldmVhbC9GYWRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiXSwibmFtZXMiOlsiQWJvdXQiLCJtYXJnaW5Ub3AiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsIkJhY2tUb1RvcEJ1dHRvbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzZXRTdGF0ZSIsInByZXZTdGF0ZSIsImhpZGVCYWNrVG9Ub3BCdXR0b24iLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGwiLCJzY3JvbGxUb1RvcCIsInN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwidXBkYXRlVG9Ub3BSZW5kZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJCb29raW5nQ2FyZCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJDYWxlbmRseVdpZGdldCIsIkNvbnRhY3RDYXJkIiwiQ29udGFjdEZvcm0iLCJlIiwibmFtZSIsInRhcmdldCIsInZhbHVlIiwidmFsaWRhdGVGaWVsZCIsImZpZWxkTmFtZSIsImNvbmNhdCIsImxlbmd0aCIsInZhbGlkYXRlRm9ybSIsImZvcm1WYWxpZCIsImZpcnN0TmFtZVZhbGlkIiwicGhvbmVOdW1iZXJWYWxpZCIsImZpcnN0TmFtZSIsInBob25lTnVtYmVyIiwibGFzdE5hbWUiLCJlbWFpbEFkZHJlc3MiLCJtZXNzYWdlVGV4dCIsImRhdGEiLCJsb2FkaW5nU3RhdGUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImlzTG9hZGluZyIsImVycm9yIiwic3VibWl0dGVkIiwib25DaGFuZ2UiLCJvblN1Ym1pdCIsImNvbG9yIiwiZm9udFNpemUiLCJMYW5kaW5nQ2FyZCIsInN0eWxlcyIsImNhcmRDb250YWluZXIiLCJjYXJkQ29udGFpbmVyTWFyZ2luIiwibGFuZGluZ0ltYWdlQ29udGFpbmVyIiwicGhyYXNlQ29udGFpbmVyIiwiYmFubmVyVGV4dCIsIm1vYmlsZVNjcmVlbkJhbm5lclRleHQiLCJib29raW5nQnV0dG9uIiwiYm9va2luZ0J1dHRvbl9faG9yaXpvbnRhbCIsImJvb2tpbmdCdXR0b25fX3ZlcnRpY2FsIiwiTWFwQ29udGFpbmVyIiwic3R5bGUiLCJ3aWR0aCIsIk1hcFZpZXciLCJwcm9wcyIsIm1hcmtlciIsInNlbGVjdGVkUGxhY2UiLCJhY3RpdmVNYXJrZXIiLCJzaG93aW5nSW5mb1dpbmRvdyIsImVsZW1lbnQiLCJvbk1hcmtlckNsaWNrIiwibWFwTG9hZGVkIiwiaGFuZGxlTWFwSWRsZSIsImJpbmQiLCJvbkNsb3NlIiwiZ29vZ2xlIiwibGF0IiwibG5nIiwiem9vbSIsIm9uTWFya2VyTW91bnRlZCIsIkdvb2dsZUFwaVdyYXBwZXIiLCJhcGlLZXkiLCJOYXZCYXIiLCJ1c2VDaGVlemVidXJnZXIiLCJpbm5lcldpZHRoIiwidXBkYXRlUHJlZGljYXRlIiwiYWxsIiwibmF2Q29udGFjdEJhciIsImNvbnRhY3RCYXJUZXh0IiwibmF2QmFyU3R5bGUiLCJhbGlnbk5hdkl0ZW1zIiwiYnV0dG9uIiwidHlwZTEiLCJ0eXBlMiIsImJ1dHRvbk1haW4iLCJuYXZCYXJIZWFkIiwibmF2TG9nb1RleHQiLCJ0eXBlMyIsIkJ1cmdlckNvbXBvbmVudCIsIm1lbnVPcGVuIiwiaGFuZGxlTWVudUNsaWNrIiwiaGFuZGxlTGlua0NsaWNrIiwiY29udGFpbmVyIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiekluZGV4Iiwib3BhY2l0eSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJsb2dvIiwidHJhbnNmb3JtIiwiZmxleERpcmVjdGlvbiIsImZpbHRlciIsInRyYW5zaXRpb24iLCJtZW51Iiwib25DbGlja0Rlc3RpbmF0aW9uIiwibWVudUl0ZW1zIiwibWFwIiwidmFsIiwiaW5kZXgiLCJNZW51SXRlbSIsImhvdmVyIiwiaGFuZGxlSG92ZXIiLCJhbmltYXRpb24iLCJhbmltYXRpb25EZWxheSIsImRlbGF5IiwibWVudUl0ZW0iLCJwYWRkaW5nIiwiY3Vyc29yIiwibGluZSIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsIk1lbnUiLCJvcGVuIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsIm1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsImhhbmRsZUNsaWNrIiwianVzdGlmeUNvbnRlbnQiLCJsaW5lVG9wIiwidHJhbnNmb3JtT3JpZ2luIiwibGluZU1pZGRsZSIsImxpbmVCb3R0b20iLCJCdXJnZXIiLCJtYWluIiwiU2VydmljZXNDYXJkIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FB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LEVBTkQsQ0FGRCxFQVVDLE1BQUMsbUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVZELENBREQ7O0FBZWVBLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9BYm91dC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IChcclxuXHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0PGRpdiBzdHlsZT17e21hcmdpblRvcDonNDBweCd9fSBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGFib3V0LXVzLWhlYWQtY29udGFpbmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQtdXMtaGVhZGluZ1wiPlxyXG5cdFx0XHRcdDxoMSBpZD1cImFib3V0c2VjdGlvblwiPkFCT1VUIFVTPC9oMT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGFib3V0LXVzLXNlY3Rpb24tY29udGFpbmVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYWJvdXQtdXMtY29tcG9uZW50XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBzdWItY29tcG9uZW50LWhlYWRpbmdcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDM+T3VyIFN0YWZmPC9oMz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IHN0YWZmLWNhcmQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBzdGFmZi1jYXJkLTJuZC1vcmRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3toZWlnaHQ6JzEwMCUnfX0gY2xhc3NOYW1lPVwic3RhZmYtY2FyZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2hlaWdodDonMTAwJSd9fSBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtMTJcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3toZWlnaHQ6JzEwMCUnfX0gY2xhc3NOYW1lPVwic3RhZmYtY2lyY2xlLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGFmZi1jaXJjbGUgaW1nLWFuYVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2hlaWdodDonMTAwJSd9fSBjbGFzc05hbWU9XCJjb2wtbGctNyBjb2wtbWQtMTIgc3RhZmYtdGV4dC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7cGFkZGluZ1RvcDonMjBweCcsIHBhZGRpbmdMZWZ0OicyMHB4JywgbWFyZ2luUmlnaHQ6JzIwcHgnfX0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1PkFuYSBHdWphcyAtIE93bmVyIGFuZCBQcm9zdGhldGlzdDwvaDU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdGFmZi1jYXJkLXAtdGV4dFwiPk91ciBQcm9zdGhldGlzdCwgQW5hIEd1amFzLCBoYXMgZm9ydHkgeWVhcnMgZXhwZXJpZW5jZSBpbiB0aGUgaGVhbHRoIGluZHVzdHJ5LiBTaGUgaGFzIGFuIEFkdmFuY2VkIERpcGxvbWEgaW4gRGVudGFsIFByb3N0aGV0aWNzIGFuZCBpcyBhIHJlZ2lzdGVyZWQgcHJhY3RpdGlvbmVyIHdpdGggdGhlIERlbnRhbCBCb2FyZCBvZiBBdXN0cmFsaWEuPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3RhZmYtY2FyZC1wLXRleHRcIj5TaGUgY3VycmVudGx5IHdvcmtzIGFzIHRoZSBQcm9zdGhldGlzdCBmb3IgdGhlIEFib3JpZ2luYWwgYW5kIFRvcnJlcyBTdHJhaXQgSXNsYW5kZXIgQ29tbXVuaXR5IEhlYWx0aCBTZXJ2aWNlIGluIFdvb2xsb29uZ2FiYmEgYW5kIGlzIG93bmVyLW9wZXJhdG9yIGZvciBDbGV2ZS1Ub290aCBEZW50dXJlIENsaW5pYy48L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBzdGFmZi1jYXJkLTJuZC1vcmRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RhZmYtY2FyZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2hlaWdodDonMTAwJSd9fSBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2hlaWdodDonMTAwJSd9fSBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtbWQtMTJcIj5cdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RhZmYtY2lyY2xlLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGFmZi1jaXJjbGUgaW1nLWFsZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3toZWlnaHQ6JzEwMCUnfX0gY2xhc3NOYW1lPVwiY29sLWxnLTcgY29sLW1kLTEyIHN0YWZmLXRleHQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e3BhZGRpbmdUb3A6JzIwcHgnLCBwYWRkaW5nTGVmdDonMjBweCcsIG1hcmdpblJpZ2h0OicyMHB4J319ID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxoNT5BbGV4IEd1amFzIC0gQWRtaW4gYW5kIEZpbmFuY2U8L2g1PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwic3RhZmYtY2FyZC1wLXRleHRcIj4gQWxleCBoYW5kbGVzIHNjaGVkdWxpbmcsIGludm9pY2VzLCBhZG1pbmlzdHJhdGlvbiBhbmQgY29tcGxpYW5jZS4gSWYgQW5hIGlzIG5vdCBhdmFpbGFibGUgdXNpbmcgb3VyIHVzdWFsIGNvbnRhY3QgaW5mb3JtYXRpb24sIHBsZWFzZSBjYWxsIDA0NTAgMjYwIDY1MCBhbmQgQWxleCB3aWxsIGJlIGhhcHB5IHRvIGFzc2lzdC48L3A+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJzdGFmZi1jYXJkLXAtdGV4dFwiPkhlIGhhcyBiZWVuIHdvcmtpbmcgYXQgdGhpcyBmYW1pbHkgcnVuIGJ1c2luZXNzIHNpbmNlIGl0cyBmb3VuZGluZyBpbiAyMDA2LjwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuXHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nLWJyZWFrLWltYWdlXCI+PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0PC9SZWFjdC5GcmFnbWVudD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWJvdXQtdXMtaGVhZC1jb250YWluZXJcIjogXCJBYm91dF9hYm91dC11cy1oZWFkLWNvbnRhaW5lcl9fMURoX01cIixcblx0XCJhYm91dC11cy1oZWFkaW5nXCI6IFwiQWJvdXRfYWJvdXQtdXMtaGVhZGluZ19fRHU5ZjVcIixcblx0XCJhYm91dC11cy1zZWN0aW9uLWNvbnRhaW5lclwiOiBcIkFib3V0X2Fib3V0LXVzLXNlY3Rpb24tY29udGFpbmVyX18xZGk1a1wiLFxuXHRcImFib3V0LXVzLWNvbXBvbmVudFwiOiBcIkFib3V0X2Fib3V0LXVzLWNvbXBvbmVudF9fMno1clBcIixcblx0XCJzdGFmZi1jYXJkLXdyYXBwZXJcIjogXCJBYm91dF9zdGFmZi1jYXJkLXdyYXBwZXJfXzEtYjlqXCIsXG5cdFwiY2xpbmljLWNhcmQtd3JhcHBlclwiOiBcIkFib3V0X2NsaW5pYy1jYXJkLXdyYXBwZXJfXzFZbWs3XCIsXG5cdFwic3RhZmYtY2FyZFwiOiBcIkFib3V0X3N0YWZmLWNhcmRfXzFZb0ZLXCIsXG5cdFwic3RhZmYtY2FyZC0ybmQtb3JkZXJcIjogXCJBYm91dF9zdGFmZi1jYXJkLTJuZC1vcmRlcl9fMnlvcmlcIixcblx0XCJzdWItY29tcG9uZW50LWhlYWRpbmdcIjogXCJBYm91dF9zdWItY29tcG9uZW50LWhlYWRpbmdfXzJHZXJHXCIsXG5cdFwic3RhZmYtY2lyY2xlLWNvbnRhaW5lclwiOiBcIkFib3V0X3N0YWZmLWNpcmNsZS1jb250YWluZXJfXzJKMTkxXCIsXG5cdFwic3RhZmYtY2lyY2xlXCI6IFwiQWJvdXRfc3RhZmYtY2lyY2xlX18zSEhBeFwiLFxuXHRcImltZy1hbmFcIjogXCJBYm91dF9pbWctYW5hX18tMF9XMFwiLFxuXHRcImltZy1hbGV4XCI6IFwiQWJvdXRfaW1nLWFsZXhfXzNuemdBXCIsXG5cdFwic3RhZmYtdGV4dC1jb250YWluZXJcIjogXCJBYm91dF9zdGFmZi10ZXh0LWNvbnRhaW5lcl9fMmpnQjhcIixcblx0XCJsYW5kaW5nLWJyZWFrLWltYWdlXCI6IFwiQWJvdXRfbGFuZGluZy1icmVhay1pbWFnZV9fMUtFbDZcIlxufTtcbiIsImltcG9ydCB7YW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XHJcblxyXG5pbXBvcnQgJy4vQmFja1RvVG9wQnV0dG9uLm1vZHVsZS5zY3NzJztcclxuXHJcbmNsYXNzIEJhY2tUb1RvcEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGhpZGVCYWNrVG9Ub3BCdXR0b246IHRydWVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy51cGRhdGVUb1RvcFJlbmRlcik7XHJcblx0XHR0aGlzLnVwZGF0ZVRvVG9wUmVuZGVyKCk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMudXBkYXRlVG9Ub3BSZW5kZXIpO1xyXG5cdH1cclxuXHJcblxyXG5cdHVwZGF0ZVRvVG9wUmVuZGVyID0gKCkgPT4ge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgaGlkZUJhY2tUb1RvcEJ1dHRvbjogIShkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDE1MCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMTUwKVxyXG4gICAgfSkpO1xyXG5cdH1cclxuXHJcblx0c2Nyb2xsVG9Ub3AgPSAoKSAgPT4ge1xyXG4gICAgc2Nyb2xsLnNjcm9sbFRvVG9wKCk7XHJcbiAgfVxyXG5cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgeyBoaWRlQmFja1RvVG9wQnV0dG9uIH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBpZD1cImJhY2stdG8tdG9wLWJ1dHRvblwiIGNsYXNzTmFtZT1cImJhY2stdG8tdG9wLXdyYXBwZXJcIj5cclxuXHRcdFx0XHR7IWhpZGVCYWNrVG9Ub3BCdXR0b24gJiYgXHJcblx0XHRcdFx0XHQ8RmFkZSBib3R0b20+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5zY3JvbGxUb1RvcH0gY2xhc3NOYW1lPVwiYmFjay10by10b3AtYnV0dG9uIGJhY2stdG8tdG9wLWJ1dHRvbi1wb3NpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+YXJyb3dfdXB3YXJkPC9pPlxyXG5cdFx0XHRcdFx0XHRcdFRvcFxyXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvRmFkZT5cclxuXHRcdFx0XHR9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFja1RvVG9wQnV0dG9uOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJhY2stdG8tdG9wLWJ1dHRvblwiOiBcIkJhY2tUb1RvcEJ1dHRvbl9iYWNrLXRvLXRvcC1idXR0b25fXzJfMUh6XCIsXG5cdFwiYmFjay10by10b3AtYnV0dG9uLXBvc2l0aW9uXCI6IFwiQmFja1RvVG9wQnV0dG9uX2JhY2stdG8tdG9wLWJ1dHRvbi1wb3NpdGlvbl9fTlVCTUJcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XHJcblxyXG5pbXBvcnQgQ2FsZW5kbHlXaWRnZXQgZnJvbSAnLi9jb21wb25lbnRzL2NhbGVuZGx5d2lkZ2V0L0NhbGVuZGx5V2lkZ2V0JztcclxuXHJcblxyXG5cclxuaW1wb3J0ICcuL0Jvb2tpbmdDYXJkLm1vZHVsZS5zY3NzJztcclxuXHJcbmNsYXNzIEJvb2tpbmdDYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHQvL0FkZHMgc2NyaXB0IHRhZyBmb3IgY2FsZW5kbHkgd2lkZ2V0XHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAgJ2h0dHBzOi8vYXNzZXRzLmNhbGVuZGx5LmNvbS9hc3NldHMvZXh0ZXJuYWwvd2lkZ2V0LmpzJyk7XHJcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dC9qYXZhc2NyaXB0JylcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICB9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9va2luZy1jYXJkLW1hcmdpblwiPlxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJib29raW5nc2VjdGlvblwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0PEZhZGUgdG9wPlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e21hcmdpbkJvdHRvbTonMjBweCd9fSBjbGFzc05hbWU9XCJkLWJsb2NrIGQtbGctbm9uZSBjb2wtMTJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmctY2FyZC1oZWFkLWNvbnRhaW5lciBjb2wtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJib29raW5nLWhlYWRpbmdcIj5CT09LIE5PVzwvaDE+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYm9va2luZy10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5XZSBoYXZlIHByb3ZpZGVkIGFuIG9ubGluZSBib29raW5nIGZvcm0gdG8gbWFrZSB5b3VyIGJvb2tpbmcgcHJvY2VzcyBhcyBlYXN5IGFzIHBvc3NpYmxlIC0gaWYgeW91IHByZWZlciB0byBib29rIG92ZXIgdGhlIHBob25lIG9yIHZpYSBlbWFpbCwgcGxlYXNlIGRvIG5vdCBoZXNpdGF0ZSB0byBjb250YWN0IHVzIG9uIDA0NTAgMjYwIDY1MCwgb3Igc2VuZCBhbiBlbWFpbCB0byBjbGV2ZWxhbmQudG9vdGhAZ21haWwuY29tLiA8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYm9va2luZy10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cD5Bc2lkZSBmcm9tIHRoZSBob21lIGNsaW5pYywgQW5hIGFsc28gd29ya3MgYXQgdGhlIEFib3JpZ2luYWwgYW5kIFRvcnJlcyBTdHJhaXQgSXNsYW5kZXIgSGVhbHRoIFNlcnZpY2UgLSB0aGlzIG1lYW5zIHRoYXQgZHVyaW5nIHRoZSB3ZWVrIHNoZSBpcyBvZnRlbiB1bmF2YWlsYWJsZS4gIElmIG5vbmUgb2YgdGhlIHRpbWVzIGJlbG93IHdvcmsgZm9yIHlvdSwgcGxlYXNlIGxldCB1cyBrbm93IGFuZCB3ZSB3aWxsIGRvIG91ciBiZXN0IHRvIGZpbmQgYW4gYXBwb2ludG1lbnQgdGltZSB0aGF0IGlzIG11dHVhbGx5IHN1aXRhYmxlLjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1wYWQgbm8tZ3V0dGVycyBib29raW5nLWNhcmQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY2FsZW5kbHktY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW46IDMwfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+V2UgYXJlIGN1cnJlbnRseSBvbmx5IGFjY2VwdGluZyBib29raW5ncyB2aWEgcGhvbmUgYXBwb2ludG1lbnQuPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5QbGVhc2UgY29udGFjdCAwNDUwIDI2MCA2NTAgdG8gYm9vay48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8Q2FsZW5kbHlXaWRnZXQgLz4gKi99XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWJsb2NrIGNvbC02XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib29raW5nLWNhcmQtaGVhZC1jb250YWluZXIgY29sLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiYm9va2luZy1oZWFkaW5nXCI+Qk9PSyBOT1c8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGJvb2tpbmctdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+V2UgaGF2ZSBwcm92aWRlZCBhbiBvbmxpbmUgYm9va2luZyBmb3JtIHRvIG1ha2UgeW91ciBib29raW5nIHByb2Nlc3MgYXMgY29udmVuaWVudCBhcyBwb3NzaWJsZSAtIGlmIHlvdSBwcmVmZXIgdG8gYm9vayBvdmVyIHRoZSBwaG9uZSBvciB2aWEgZW1haWwsIHBsZWFzZSBkbyBub3QgaGVzaXRhdGUgdG8gY29udGFjdCB1cyBvbiAwNDUwIDI2MCA2NTAsIG9yIHNlbmQgYW4gZW1haWwgdG8gY2xldmVsYW5kLnRvb3RoQGdtYWlsLmNvbS4gPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGJvb2tpbmctdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+QXNpZGUgZnJvbSB0aGUgaG9tZSBjbGluaWMsIEFuYSBhbHNvIHdvcmtzIGF0IHRoZSBBYm9yaWdpbmFsIGFuZCBUb3JyZXMgU3RyYWl0IElzbGFuZGVyIEhlYWx0aCBTZXJ2aWNlIC0gdGhpcyBtZWFucyB0aGF0IGR1cmluZyB0aGUgd2VlayBzaGUgaXMgb2Z0ZW4gdW5hdmFpbGFibGUuICBJZiBub25lIG9mIHRoZSB0aW1lcyBiZWxvdyB3b3JrIGZvciB5b3UsIHBsZWFzZSBsZXQgdXMga25vdyBhbmQgd2Ugd2lsbCBkbyBvdXIgYmVzdCB0byBmaW5kIGFuIGFwcG9pbnRtZW50IHRpbWUgdGhhdCBpcyBtdXR1YWxseSBzdWl0YWJsZS48L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2Plx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblx0XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29raW5nQ2FyZDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib29raW5nLWNhcmQtbWFyZ2luXCI6IFwiQm9va2luZ0NhcmRfYm9va2luZy1jYXJkLW1hcmdpbl9fM2hrZ0VcIixcblx0XCJib29raW5nLXRleHRcIjogXCJCb29raW5nQ2FyZF9ib29raW5nLXRleHRfXzJpSEE3XCIsXG5cdFwiYm9va2luZy1jYXJkLWNvbnRhaW5lclwiOiBcIkJvb2tpbmdDYXJkX2Jvb2tpbmctY2FyZC1jb250YWluZXJfXzNXWmI3XCIsXG5cdFwiYm9va2luZy1jYXJkLWhlYWQtY29udGFpbmVyXCI6IFwiQm9va2luZ0NhcmRfYm9va2luZy1jYXJkLWhlYWQtY29udGFpbmVyX18yTTFwOFwiLFxuXHRcImJvb2tpbmctaGVhZGluZ1wiOiBcIkJvb2tpbmdDYXJkX2Jvb2tpbmctaGVhZGluZ19fRVpOSjNcIixcblx0XCJjYWxlbmRseS1jb250YWluZXJcIjogXCJCb29raW5nQ2FyZF9jYWxlbmRseS1jb250YWluZXJfXzFmdk53XCIsXG5cdFwiYm9va2luZy1mb3JtLWhlYWRpbmdcIjogXCJCb29raW5nQ2FyZF9ib29raW5nLWZvcm0taGVhZGluZ19fMm5PQmVcIixcblx0XCJib29raW5nLWNvcHktY29udGFpbmVyXCI6IFwiQm9va2luZ0NhcmRfYm9va2luZy1jb3B5LWNvbnRhaW5lcl9fMnpxSElcIixcblx0XCJjb3JyZWN0LW1hcmdpblwiOiBcIkJvb2tpbmdDYXJkX2NvcnJlY3QtbWFyZ2luX18xQ3gxNVwiXG59O1xuIiwiaW1wb3J0ICcuL0NhbGVuZGx5V2lkZ2V0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IENhbGVuZGx5V2lkZ2V0ID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3M9XCJjYWxlbmRseS1pbmxpbmUtd2lkZ2V0XCIgZGF0YS11cmw9XCJodHRwczovL2NhbGVuZGx5LmNvbS9jbGV2ZWxhbmQtdG9vdGgvNjBtaW4/aGlkZV9nZHByX2Jhbm5lcj0xXCI+PC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRseVdpZGdldDsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYWxlbmRseS1pbmxpbmUtd2lkZ2V0XCI6IFwiQ2FsZW5kbHlXaWRnZXRfY2FsZW5kbHktaW5saW5lLXdpZGdldF9fMko2MzZcIlxufTtcbiIsImltcG9ydCBDb250YWN0Rm9ybSBmcm9tICcuL2NvbXBvbmVudHMvY29udGFjdGZvcm0vQ29udGFjdEZvcm0nO1xyXG5cclxuaW1wb3J0ICcuL0NvbnRhY3RDYXJkLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IENvbnRhY3RDYXJkID0gKCkgPT4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgY29udGFjdC1jb250YWluZXItaGVpZ2h0IGNvbnRhY3QtY29udGFpbmVyLWRpbWVuc2lvbnNcIj5cclxuXHRcdFx0PENvbnRhY3RGb3JtIC8+XHJcblx0XHQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RDYXJkO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWN0LWNvbnRhaW5lci1oZWlnaHRcIjogXCJDb250YWN0Q2FyZF9jb250YWN0LWNvbnRhaW5lci1oZWlnaHRfXzNLWmNMXCIsXG5cdFwibGFuZGluZy1pbWFnZS1jb250YWluZXJcIjogXCJDb250YWN0Q2FyZF9sYW5kaW5nLWltYWdlLWNvbnRhaW5lcl9fMWdEczVcIixcblx0XCJjb250YWN0LWNvbnRhaW5lci1kaW1lbnNpb25zXCI6IFwiQ29udGFjdENhcmRfY29udGFjdC1jb250YWluZXItZGltZW5zaW9uc19fMU1DTGpcIixcblx0XCJjb250YWN0LWZvcm0tY29udGFpbmVyXCI6IFwiQ29udGFjdENhcmRfY29udGFjdC1mb3JtLWNvbnRhaW5lcl9fM2hvZ2pcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XHJcbmltcG9ydCBSZWFjdExvYWRpbmcgZnJvbSAncmVhY3QtbG9hZGluZyc7XHJcblxyXG5pbXBvcnQgJy4vQ29udGFjdEZvcm0ubW9kdWxlLnNjc3MnO1xyXG5cclxuY2xhc3MgQ29udGFjdEZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdCAgc3VwZXIoKTtcclxuXHQgIHRoaXMuc3RhdGUgPSB7IFxyXG5cdCAgXHRmaXJzdE5hbWU6ICcnLFxyXG5cdCAgXHRsYXN0TmFtZTogJycsXHJcblx0ICBcdHBob25lTnVtYmVyOiAnJyxcclxuXHQgIFx0ZW1haWxBZGRyZXNzOiAnJyxcclxuXHQgIFx0bWVzc2FnZVRleHQ6ICcnLFxyXG5cdFx0XHRcclxuXHRcdFx0Zmlyc3ROYW1lVmFsaWQ6IHRydWUsXHJcblx0XHRcdHBob25lTnVtYmVyVmFsaWQ6IHRydWUsXHJcblx0XHRcdGZvcm1WYWxpZDogZmFsc2UsXHJcblx0XHRcdFxyXG5cdFx0XHRsb2FkaW5nU3RhdGU6ICdwcmUtbG9hZCcsXHJcblxyXG5cdFx0XHRpc0xvYWRpbmc6IGZhbHNlLFxyXG5cdFx0XHRlcnJvcjogZmFsc2UsXHJcblx0XHRcdHN1Ym1pdHRlZDogZmFsc2VcclxuXHQgIH1cclxuXHR9XHJcblxyXG5cdG9uQ2hhbmdlID0gKGUpID0+IHtcclxuXHRcdGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xyXG5cdFx0Y29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHRbbmFtZV06IHZhbHVlXHJcblx0XHR9LCAoKSA9PiB7IHRoaXMudmFsaWRhdGVGaWVsZChuYW1lLCB2YWx1ZSkgfSk7XHJcblx0fVxyXG5cclxuXHR2YWxpZGF0ZUZpZWxkID0gKGZpZWxkTmFtZSwgdmFsdWUpID0+IHtcclxuXHQgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBbZmllbGROYW1lLmNvbmNhdChcIlZhbGlkXCIpXToodmFsdWUubGVuZ3RoID4gMClcclxuICAgIH0sIFxyXG4gICAgdGhpcy52YWxpZGF0ZUZvcm0pO1xyXG5cdH1cclxuXHJcblx0dmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG5cdCAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuXHQgIFx0Zm9ybVZhbGlkOiBcdHRoaXMuc3RhdGUuZmlyc3ROYW1lVmFsaWQgJiYgdGhpcy5zdGF0ZS5waG9uZU51bWJlclZhbGlkXHJcblx0XHR9KSk7XHJcblx0fVxyXG5cclxuXHRvblN1Ym1pdCA9ICgpID0+IHtcclxuXHJcblx0XHR0aGlzLnZhbGlkYXRlRmllbGQoJ2ZpcnN0TmFtZScsIHRoaXMuc3RhdGUuZmlyc3ROYW1lKTtcclxuXHRcdHRoaXMudmFsaWRhdGVGaWVsZCgncGhvbmVOdW1iZXInLCB0aGlzLnN0YXRlLnBob25lTnVtYmVyKTtcclxuXHJcblx0XHRjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIHBob25lTnVtYmVyLCBlbWFpbEFkZHJlc3MsIG1lc3NhZ2VUZXh0IH0gPSB0aGlzLnN0YXRlO1xyXG5cdFx0Y29uc3QgZGF0YSA9IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgcGhvbmVOdW1iZXIsIGVtYWlsQWRkcmVzcywgbWVzc2FnZVRleHQgfTtcclxuXHJcblx0XHRpZiAodGhpcy5zdGF0ZS5mb3JtVmFsaWQgPT09IHRydWUpIHtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+KHsgbG9hZGluZ1N0YXRlOiAnbG9hZGluZycgfSkpO1xyXG5cclxuXHRcdFx0ZmV0Y2goJy9hcGkvY29udGFjdCcsIHsgLy8gJy9hcGkvY29udGFjdCdcclxuXHQgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuXHQgICAgICBoZWFkZXJzOiB7XHJcblx0ICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXHJcblx0ICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0ICAgICAgfSxcclxuXHQgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG5cdCAgICB9KS50aGVuKChyZXMpID0+IHtcclxuXHQgICAgICByZXMuc3RhdHVzID09PSAyMDAgPyB0aGlzLnNldFN0YXRlKHsgbG9hZGluZ1N0YXRlOiAnc3VibWl0dGVkJyB9KSA6IHRoaXMuc2V0U3RhdGUoe2xvYWRpbmdTdGF0ZTogJ2Vycm9yJ30pXHJcblx0ICAgIH0pXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIgKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm0tYmFja2dyb3VuZFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbnRhY3QtZm9ybS1hbGlnblwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgY29udGFjdC1mb3JtLWNvbnRhaW5lciBjb250YWN0LWZvcm0tY29udGFpbmVyLXdpZHRoXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbnRhY3QtZm9ybS1oZWFkaW5nXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIG5hbWU9XCJjb250YWN0c2VjdGlvblwiPkNPTlRBQ1Q8L2gxPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNiBhbGlnbi1jb250YWN0LWlucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbnB1dC13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJmaXJzdE5hbWVcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZmlyc3ROYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWUgKHJlcXVpcmVkKVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bjb250YWN0LWZvcm0taW5wdXQgJHt0aGlzLnN0YXRlLmZpcnN0TmFtZVZhbGlkID8gJycgOiAnY29udGFjdC1mb3JtLWVycm9yLWNsYXNzJ31gfSBcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IGFsaWduLWNvbnRhY3QtaW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWlucHV0LXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJsYXN0TmFtZVwiICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubGFzdE5hbWV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShlKX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS1pbnB1dFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGFsaWduLWNvbnRhY3QtaW5wdXRzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWlucHV0LXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBob25lTnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUucGhvbmVOdW1iZXJ9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHRoaXMub25DaGFuZ2UoZSl9IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBob25lIE51bWJlciAocmVxdWlyZWQpXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGNvbnRhY3QtZm9ybS1pbnB1dCAke3RoaXMuc3RhdGUucGhvbmVOdW1iZXJWYWxpZCA/ICcnIDogJ2NvbnRhY3QtZm9ybS1lcnJvci1jbGFzcyd9YH0gXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYWxpZ24tY29udGFjdC1pbnB1dHNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaW5wdXQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxBZGRyZXNzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZW1haWxBZGRyZXNzfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uQ2hhbmdlKGUpfSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb250YWN0LWZvcm0taW5wdXRcIiBcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBhbGlnbi1jb250YWN0LWlucHV0c1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dGFyZWEtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHRhcmVhIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwibWVzc2FnZVRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dGhpcy5zdGF0ZS5tZXNzYWdlVGV4dH0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbkNoYW5nZShlKX0gXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiWW91ciBNZXNzYWdlXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbnRhY3QtZm9ybS10ZXh0YXJlYVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90ZXh0YXJlYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0ICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgIDxGYWRlIGJvdHRvbT5cclxuXHRcdFx0ICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYWxpZ24tY29udGFjdC1pbnB1dHNcIj5cclxuXHRcdFx0ICAgICAgXHR7XHQodGhpcy5zdGF0ZS5sb2FkaW5nU3RhdGUgPT09ICdwcmUtbG9hZCcpICYmXHJcblx0XHRcdFx0ICAgICAgXHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9IGNsYXNzTmFtZT1cImNvbnRhY3Qtc3VibWl0LWJ1dHRvblwiPlxyXG5cdFx0XHRcdCAgICAgIFx0XHRTVUJNSVRcclxuXHRcdFx0XHQgICAgICBcdDwvYnV0dG9uPlx0XHJcblx0XHRcdCAgICAgIFx0fVxyXG5cdFx0XHQgICAgICBcdHsodGhpcy5zdGF0ZS5sb2FkaW5nU3RhdGUgPT09ICdsb2FkaW5nJykgJiYgXHJcblx0ICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBzcGlubmVyLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdCAgICAgICAgPFJlYWN0TG9hZGluZyB0eXBlPXtcInNwaW5cIn0gY29sb3I9e1wid2hpdGVcIn0gaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfSAvPlxyXG5cdFx0XHRcdFx0ICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIHsgKHRoaXMuc3RhdGUubG9hZGluZ1N0YXRlID09PSAnc3VibWl0dGVkJykgJiZcclxuXHQgICAgICAgICAgICBcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcblx0ICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgc3Bpbm5lci13cmFwcGVyXCI+XHJcblx0ICAgICAgICAgICAgXHRcdFx0XHQ8aSBzdHlsZT17e2NvbG9yOid3aGl0ZScsIGZvbnRTaXplOic4MHB4J319IGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+IGNoZWNrX2NpcmNsZSA8L2k+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29udGFjdC1zcGlubmVyLXR4dFwiPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdFx0PHA+VGhhbmsgeW91IGZvciB5b3VyIG1lc3NhZ2UuPC9wPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdFx0PHA+V2Ugd2lsbCBjb250YWN0IHlvdSB3aXRoaW4gMjQgaG91cnMuPC9wPiBcclxuXHQgICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICBcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHQ8L2Rpdj5cclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgeyh0aGlzLnN0YXRlLmxvYWRpbmdTdGF0ZSA9PT0gJ2Vycm9yJykgJiYgXHJcblx0ICAgICAgICAgICAgXHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG5cdCAgICAgICAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHNwaW5uZXItd3JhcHBlclwiPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdFx0PGkgc3R5bGU9e3tjb2xvcjond2hpdGUnLCBmb250U2l6ZTonODBweCd9fSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPiBlcnJvciA8L2k+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29udGFjdC1zcGlubmVyLXR4dFwiPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdFx0PHA+T29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmchPC9wPlxyXG5cdCAgICAgICAgICAgIFx0XHRcdFx0PHA+UGxlYXNlIGNhbGwgMDQzMSA3NzEgMDg4LjwvcD4gXHJcblx0ICAgICAgICAgICAgXHRcdFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgXHRcdDwvZGl2PlxyXG5cdCAgICAgICAgICAgIFx0PC9kaXY+XHJcblx0ICAgICAgICAgICAgfVxyXG5cdFx0XHQgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgPC9GYWRlPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwid2Vic2l0ZS1ieVwiPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vYWxla3NhbmRhcmd1amFzLm5ldFwiPldlYnNpdGUgYnkgQUcgV2ViIERldjwvYT48L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhY3QtZm9ybS10ZXh0YXJlYVwiOiBcIkNvbnRhY3RGb3JtX2NvbnRhY3QtZm9ybS10ZXh0YXJlYV9fYnlxMXRcIixcblx0XCJjb250YWN0LWZvcm0taW5wdXRcIjogXCJDb250YWN0Rm9ybV9jb250YWN0LWZvcm0taW5wdXRfXzF1b0hHXCIsXG5cdFwiYWxpZ24tY29udGFjdC1pbnB1dHNcIjogXCJDb250YWN0Rm9ybV9hbGlnbi1jb250YWN0LWlucHV0c19fMWNDMExcIixcblx0XCJjb250YWN0LWZvcm0tYmFja2dyb3VuZFwiOiBcIkNvbnRhY3RGb3JtX2NvbnRhY3QtZm9ybS1iYWNrZ3JvdW5kX18ySWhCQVwiLFxuXHRcImNvbnRhY3QtZm9ybS1hbGlnblwiOiBcIkNvbnRhY3RGb3JtX2NvbnRhY3QtZm9ybS1hbGlnbl9fRGxYQklcIixcblx0XCJjb250YWN0LWZvcm0tY29udGFpbmVyXCI6IFwiQ29udGFjdEZvcm1fY29udGFjdC1mb3JtLWNvbnRhaW5lcl9fMXY2Y3NcIixcblx0XCJjb250YWN0LWZvcm0tY29udGFpbmVyLXdpZHRoXCI6IFwiQ29udGFjdEZvcm1fY29udGFjdC1mb3JtLWNvbnRhaW5lci13aWR0aF9fMVpWZ0VcIixcblx0XCJjb250YWN0LWZvcm0taGVhZGluZ1wiOiBcIkNvbnRhY3RGb3JtX2NvbnRhY3QtZm9ybS1oZWFkaW5nX18xZDB2N1wiLFxuXHRcImNvbnRhY3QtbGFiZWwtY29udGFpbmVyXCI6IFwiQ29udGFjdEZvcm1fY29udGFjdC1sYWJlbC1jb250YWluZXJfX0lEYkNLXCIsXG5cdFwiY29udGFjdC1pbnB1dC13cmFwcGVyXCI6IFwiQ29udGFjdEZvcm1fY29udGFjdC1pbnB1dC13cmFwcGVyX18xWnpCd1wiLFxuXHRcImNvbnRhY3QtZm9ybS1lcnJvci1jbGFzc1wiOiBcIkNvbnRhY3RGb3JtX2NvbnRhY3QtZm9ybS1lcnJvci1jbGFzc19fRUtzQmJcIixcblx0XCJ0ZXh0YXJlYS13cmFwcGVyXCI6IFwiQ29udGFjdEZvcm1fdGV4dGFyZWEtd3JhcHBlcl9fMlJDblBcIixcblx0XCJlZmZlY3QtMVwiOiBcIkNvbnRhY3RGb3JtX2VmZmVjdC0xX18zck9JdlwiLFxuXHRcImZvY3VzLWJvcmRlclwiOiBcIkNvbnRhY3RGb3JtX2ZvY3VzLWJvcmRlcl9fM3BaUHBcIixcblx0XCJjb250YWN0LXN1Ym1pdC1idXR0b25cIjogXCJDb250YWN0Rm9ybV9jb250YWN0LXN1Ym1pdC1idXR0b25fXzFnVXRwXCIsXG5cdFwic3Bpbm5lci13cmFwcGVyXCI6IFwiQ29udGFjdEZvcm1fc3Bpbm5lci13cmFwcGVyX19EUEJzQVwiLFxuXHRcImNvbnRhY3Qtc3Bpbm5lci10eHRcIjogXCJDb250YWN0Rm9ybV9jb250YWN0LXNwaW5uZXItdHh0X18tbGRGZVwiLFxuXHRcIndlYnNpdGUtYnlcIjogXCJDb250YWN0Rm9ybV93ZWJzaXRlLWJ5X18yVldfd1wiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xhbmRpbmdDYXJkLm1vZHVsZS5zY3NzJztcclxuXHJcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcclxuaW1wb3J0IHsgTGluaywgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5cclxuY29uc3QgTGFuZGluZ0NhcmQgPSAoKSA9PiAoXHJcblxyXG5cdDxkaXYgY2xhc3NOYW1lPXtgcm93IG5vLWd1dHRlcnMgJHtzdHlsZXMuY2FyZENvbnRhaW5lcn0gJHtzdHlsZXMuY2FyZENvbnRhaW5lck1hcmdpbn1gfT5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgY29sLTEyICR7c3R5bGVzLmxhbmRpbmdJbWFnZUNvbnRhaW5lcn1gfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5waHJhc2VDb250YWluZXJ9YH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5iYW5uZXJUZXh0fWB9PlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtgZC1ub25lIGQtbWQtYmxvY2tgfT5SZXN0b3JlIFdoYXQgaXMgTWlzc2luZywgUHJvdGVjdCBXaGF0IFJlbWFpbnM8L3A+XHJcblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9e2BkLWJsb2NrIGQtbWQtbm9uZSAke3N0eWxlcy5tb2JpbGVTY3JlZW5CYW5uZXJUZXh0fWB9PlJlc3RvcmUgV2hhdCBpcyBNaXNzaW5nPC9wPlxyXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPXtgZC1ibG9jayBkLW1kLW5vbmUgJHtzdHlsZXMubW9iaWxlU2NyZWVuQmFubmVyVGV4dH1gfT5Qcm90ZWN0IFdoYXQgUmVtYWluczwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8TGlua1xyXG4gICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgdG89XCJib29raW5nc2VjdGlvblwiXHJcbiAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICBvZmZzZXQ9ey0yNX1cclxuICAgICAgICAgIGR1cmF0aW9uPSB7ODAwfVxyXG4gICAgICAgID5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuYm9va2luZ0J1dHRvbn1gfT5cclxuXHRcdFx0XHRcdFx0Qm9vayBOb3dcclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5ib29raW5nQnV0dG9uX19ob3Jpem9udGFsfWB9PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmJvb2tpbmdCdXR0b25fX3ZlcnRpY2FsfWB9PjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdFxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ0NhcmQ7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZENvbnRhaW5lclwiOiBcIkxhbmRpbmdDYXJkX2NhcmRDb250YWluZXJfXzNHTGdKXCIsXG5cdFwicGhyYXNlQ29udGFpbmVyXCI6IFwiTGFuZGluZ0NhcmRfcGhyYXNlQ29udGFpbmVyX18zLUhveFwiLFxuXHRcIm1vYmlsZVNjcmVlbkJhbm5lclRleHRcIjogXCJMYW5kaW5nQ2FyZF9tb2JpbGVTY3JlZW5CYW5uZXJUZXh0X18yTkRHc1wiLFxuXHRcInN0YWZmQ2FyZFBUZXh0XCI6IFwiTGFuZGluZ0NhcmRfc3RhZmZDYXJkUFRleHRfX1U1OEFOXCIsXG5cdFwiYmFubmVyVGV4dFwiOiBcIkxhbmRpbmdDYXJkX2Jhbm5lclRleHRfX0J5QTc2XCIsXG5cdFwibGFuZGluZ0ltYWdlQ29udGFpbmVyXCI6IFwiTGFuZGluZ0NhcmRfbGFuZGluZ0ltYWdlQ29udGFpbmVyX18yaUFsVFwiLFxuXHRcImN1c3RvbUFjdGlvblRhZ1wiOiBcIkxhbmRpbmdDYXJkX2N1c3RvbUFjdGlvblRhZ19fMUdJRVlcIixcblx0XCJib29raW5nQnV0dG9uXCI6IFwiTGFuZGluZ0NhcmRfYm9va2luZ0J1dHRvbl9fM01jX2FcIixcblx0XCJib29raW5nQnV0dG9uX19ob3Jpem9udGFsXCI6IFwiTGFuZGluZ0NhcmRfYm9va2luZ0J1dHRvbl9faG9yaXpvbnRhbF9fNFk1NzZcIixcblx0XCJib29raW5nQnV0dG9uX192ZXJ0aWNhbFwiOiBcIkxhbmRpbmdDYXJkX2Jvb2tpbmdCdXR0b25fX3ZlcnRpY2FsX19OWWdwdFwiXG59O1xuIiwiaW1wb3J0IE1hcFZpZXcgZnJvbSAnLi9jb21wb25lbnRzL21hcHZpZXcvTWFwVmlldyc7XHJcblxyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XHJcblxyXG5pbXBvcnQgJy4vTWFwQ29udGFpbmVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IE1hcENvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImxvY2F0aW9uc2VjdGlvblwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8RmFkZSB0b3A+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ibG9jayBkLWxnLW5vbmUgY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1oZWFkaW5nLWNvbnRhaW5lci1waG9uZXNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzIwcHgnfX0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1oZWFkaW5nLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgIGNsYXNzTmFtZT1cIm1hcC1oZWFkaW5nXCI+TE9DQVRJT048L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtYWRkcmVzcy1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWFwLWFkZHJlc3MtdGV4dFwiPjEwMCBQcmluY2VzcyBTdHJlZXQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hcC1hZGRyZXNzLXRleHRcIj5DbGV2ZWxhbmQgUUxEIDQxNjM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TWFwVmlldyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWJsb2NrIGNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1oZWFkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLWhlYWRpbmctd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWFwLWhlYWRpbmdcIj5MT0NBVElPTjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtYWRkcmVzcy1wYWRkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1hcC1hZGRyZXNzLXRleHRcIj4xMDAgUHJpbmNlc3MgU3RyZWV0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXAtYWRkcmVzcy10ZXh0XCI+Q2xldmVsYW5kIFFMRCA0MTYzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBDb250YWluZXI7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFwLWNvbnRhaW5lclwiOiBcIk1hcENvbnRhaW5lcl9tYXAtY29udGFpbmVyX18zRlRWN1wiLFxuXHRcIm1hcC1hZGRyZXNzLXBhZGRpbmdcIjogXCJNYXBDb250YWluZXJfbWFwLWFkZHJlc3MtcGFkZGluZ19fRzhMczFcIixcblx0XCJtYXAtYWRkcmVzcy10ZXh0XCI6IFwiTWFwQ29udGFpbmVyX21hcC1hZGRyZXNzLXRleHRfXzJlM3BUXCIsXG5cdFwibWFwLWhlYWRpbmctY29udGFpbmVyXCI6IFwiTWFwQ29udGFpbmVyX21hcC1oZWFkaW5nLWNvbnRhaW5lcl9fREdtb3FcIixcblx0XCJtYXAtaGVhZGluZy1jb250YWluZXItcGhvbmVzY3JlZW5cIjogXCJNYXBDb250YWluZXJfbWFwLWhlYWRpbmctY29udGFpbmVyLXBob25lc2NyZWVuX18xMWlDUVwiLFxuXHRcIm1hcC1oZWFkaW5nLXdyYXBwZXJcIjogXCJNYXBDb250YWluZXJfbWFwLWhlYWRpbmctd3JhcHBlcl9fV3pCckVcIixcblx0XCJtYXAtaGVhZGluZ1wiOiBcIk1hcENvbnRhaW5lcl9tYXAtaGVhZGluZ19fTlMxSW1cIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWFwLCBJbmZvV2luZG93LCBNYXJrZXIsIEdvb2dsZUFwaVdyYXBwZXIgfSBmcm9tIFwiZ29vZ2xlLW1hcHMtcmVhY3RcIjtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIGhlaWdodDogXCI0MDBweFwiLFxyXG4gIHdpZHRoOiBcIjk2LjUlXCJcclxufTtcclxuXHJcbmNsYXNzIE1hcFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dpbmdJbmZvV2luZG93OiBmYWxzZSxcclxuICAgICAgYWN0aXZlTWFya2VyOiB7fSxcclxuICAgICAgc2VsZWN0ZWRQbGFjZToge30sXHJcbiAgICAgIG1hcExvYWRlZDogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVNYXBJZGxlID0gdGhpcy5oYW5kbGVNYXBJZGxlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm9uTWFya2VyQ2xpY2sgPSB0aGlzLm9uTWFya2VyQ2xpY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMub25DbG9zZSA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgb25NYXJrZXJDbGljayA9IChwcm9wcywgbWFya2VyLCBlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICBzZWxlY3RlZFBsYWNlOiBwcm9wcyxcclxuICAgICAgYWN0aXZlTWFya2VyOiBtYXJrZXIsXHJcbiAgICAgIHNob3dpbmdJbmZvV2luZG93OiB0cnVlXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgb25DbG9zZSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93KSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHNob3dpbmdJbmZvV2luZG93OiBmYWxzZSxcclxuICAgICAgICBhY3RpdmVNYXJrZXI6IG51bGxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25NYXJrZXJNb3VudGVkID0gZWxlbWVudCA9PiB7XHJcbiAgICB0aGlzLm9uTWFya2VyQ2xpY2soZWxlbWVudC5wcm9wcywgZWxlbWVudC5tYXJrZXIsIGVsZW1lbnQpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZU1hcElkbGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWFwTG9hZGVkOiB0cnVlXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TWFwXHJcbiAgICAgICAgZ29vZ2xlPXt0aGlzLnByb3BzLmdvb2dsZX1cclxuICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgaW5pdGlhbENlbnRlcj17e1xyXG4gICAgICAgICAgbGF0OiAtMjcuNTM0MTIsXHJcblx0XHRcdCAgICBsbmc6IDE1My4yNzA2M1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgem9vbT17dGhpcy5wcm9wcy56b29tfVxyXG4gICAgICAgIG9uSWRsZT17dGhpcy5oYW5kbGVNYXBJZGxlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3RoaXMuc3RhdGUubWFwTG9hZGVkICYmIChcclxuICAgICAgICAgIDxNYXJrZXIgcmVmPXt0aGlzLm9uTWFya2VyTW91bnRlZH0gb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEluZm9XaW5kb3dcclxuICAgICAgICAgIG1hcmtlcj17dGhpcy5zdGF0ZS5hY3RpdmVNYXJrZXJ9XHJcbiAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93fVxyXG4gICAgICAgICAgb25DbG9zZT17dGhpcy5vbkNsb3NlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+Q2xldmUtVG9vdGggRGVudHVyZSBDbGluaWM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj4xMDAgUHJpbmNlc3MgU3QsIENsZXZlbGFuZCBRTEQgNDE2MzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlBoOiAwNDMxIDc3MSAwODg8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvSW5mb1dpbmRvdz5cclxuICAgICAgPC9NYXA+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQXBpV3JhcHBlcih7XHJcbiAgYXBpS2V5OiAnQUl6YVN5RHloaExGaGFJN29LT29qU05KT2kyZTlsVmY4UGlZb1RrJ1xyXG59KShNYXBWaWV3KTtcclxuIiwiLy9SZWFjdCBzY3JvbGwgY2FuIHVzZSBlbGVtZW50IGlkIGFzIGEgcmVmZXJlbmNlIGZvciB3aGVyZSB0byBzY3JvbGwuXHJcbi8vSSBoYXZlIHB1dCB0aGVzZSBlaXRoZXIgaW4gdGhlIHRpdGxlIGVsZW1lbnRzIChoMSkgb3IgdGhlaXIgc3Vycm91bmRpbmcgZGl2c1xyXG5pbXBvcnQgeyBMaW5rLCBhbmltYXRlU2Nyb2xsIGFzIHNjcm9sbCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcblxyXG5pbXBvcnQgQnVyZ2VyIGZyb20gJy4vY29tcG9uZW50cy9idXJnZXJtZW51L0J1cmdlck1lbnUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2QmFyLm1vZHVsZS5zY3NzJztcclxuXHJcblxyXG5cclxuY2xhc3MgTmF2QmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR1c2VDaGVlemVidXJnZXI6IHRydWVcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy51cGRhdGVQcmVkaWNhdGUoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlUHJlZGljYXRlKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVQcmVkaWNhdGUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUHJlZGljYXRlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHVzZUNoZWV6ZWJ1cmdlcjogd2luZG93LmlubmVyV2lkdGggPCAxMDg1IH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdXNlQ2hlZXplYnVyZ2VyID0gdGhpcy5zdGF0ZS51c2VDaGVlemVidXJnZXI7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0ICBcclxuXHQgICAgPGRpdj5cclxuICAgICAgICAge3VzZUNoZWV6ZWJ1cmdlciA/IChcclxuICAgICAgICAgICA8ZGl2PiBcclxuICAgICAgICAgICBcdDxCdXJnZXIgLz5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgKSA6IChcclxuICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hbGx9ICR7c3R5bGVzLm5hdkNvbnRhY3RCYXJ9YH0+IFxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hbGx9ICR7c3R5bGVzLmNvbnRhY3RCYXJUZXh0fWB9PiBcclxuICAgICAgICAgICAgICAgUGg6IDA0MzEgNzcxIDA4OCB8IEUtbWFpbDogY2xldmVsYW5kLnRvb3RoQGdtYWlsLmNvbSB8IFByb3ZpZGVyIE51bWJlcjogNDA0MDM2MUggfCBBQk46IDY4IDA5OSA2NzEgOTY0XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8bmF2IHN0eWxlPXt7bWFyZ2luQm90dG9tOic0MHB4JywgbWFyZ2luVG9wOicyMHB4J319IGNsYXNzTmFtZT17YCR7c3R5bGVzLmFsbH0gJHtzdHlsZXMubmF2QmFyU3R5bGV9YH0+XHJcbiBcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWxpZ25OYXZJdGVtc31gfT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89XCJhYm91dHNlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj0gezcwMH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGkgaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gJHtzdHlsZXMuYWxsfSAke3N0eWxlcy50eXBlMX1gfT5BYm91dDwvbGk+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz1cInNlcnZpY2Vzc2VjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPSB7ODAwfVxyXG4gICAgICAgICAgICAgID5cclxuIFx0XHRcdFx0XHRcdFx0ICA8bGkgaWQ9XCJzZXJ2aWNlc1wiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmJ1dHRvbn0gJHtzdHlsZXMudHlwZTJ9YH0+PHNwYW4gY2xhc3NOYW1lPVwiYWxsIG5vLXVuZGVybGluZVwiPlNlcnZpY2VzPC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gXHRcdFx0XHRcdFx0XHQ8bGkgaWQ9XCJcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5hbGx9ICR7c3R5bGVzLmJ1dHRvbk1haW59ICR7c3R5bGVzLm5hdkJhckhlYWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYWxsfSAke3N0eWxlcy5uYXZMb2dvVGV4dH1gfT5DbGV2ZS1Ub290aDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7bWFyZ2luOicyMHB4J319IHNyYz1cIi9zdGF0aWMvbG9nbzNfb3B0LnBuZ1wiIGFsdD1cIlRvb3RoXCIgaGVpZ2h0PVwiOTBcIiB3aWR0aD1cIjkwXCIvPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17YCR7c3R5bGVzLmFsbH0gJHtzdHlsZXMubmF2TG9nb1RleHR9YH0+RGVudHVyZSBDbGluaWM8L2gxPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHRvPVwibG9jYXRpb25zZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTEwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249IHs4MDB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gXHRcdFx0XHRcdFx0XHQgIDxsaSBpZD1cImZhcVwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmFsbH0gJHtzdHlsZXMuYnV0dG9ufSAke3N0eWxlcy50eXBlM31gfT5Mb2NhdGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz1cImNvbnRhY3RzZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTM1fVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249IHsxMDAwfVxyXG4gICAgICAgICAgICAgID5cclxuIFx0XHRcdFx0XHRcdFx0ICA8bGkgaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke3N0eWxlcy5hbGx9ICR7c3R5bGVzLnR5cGUyfWB9PkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuIFx0XHRcdFx0XHRcdDwvdWw+XHJcbiBcdFx0XHRcdFx0PC9uYXY+XHJcbiAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgKX1cclxuICAgICAgIDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0gXHJcblx0XHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZCYXJTdHlsZVwiOiBcIk5hdkJhcl9uYXZCYXJTdHlsZV9fMnpBZkJcIixcblx0XCJuYXZCYXJIZWFkXCI6IFwiTmF2QmFyX25hdkJhckhlYWRfXzJpcmNkXCIsXG5cdFwibmF2YmFyQWN0aW9uXCI6IFwiTmF2QmFyX25hdmJhckFjdGlvbl9fb3NQTHNcIixcblx0XCJhbGlnbk5hdkl0ZW1zXCI6IFwiTmF2QmFyX2FsaWduTmF2SXRlbXNfXzFrck9UXCIsXG5cdFwibmF2SXRlbVN0eWxlXCI6IFwiTmF2QmFyX25hdkl0ZW1TdHlsZV9fdDNDeURcIixcblx0XCJuYXZJdGVtTWFpblwiOiBcIk5hdkJhcl9uYXZJdGVtTWFpbl9fM2RTZWRcIixcblx0XCJuYXZDb250YWN0QmFyXCI6IFwiTmF2QmFyX25hdkNvbnRhY3RCYXJfXzJvdzlqXCIsXG5cdFwiY29udGFjdEJhclRleHRcIjogXCJOYXZCYXJfY29udGFjdEJhclRleHRfXzNacmxaXCIsXG5cdFwiYWxsXCI6IFwiTmF2QmFyX2FsbF9fMUtYUEpcIixcblx0XCJidXR0b25cIjogXCJOYXZCYXJfYnV0dG9uX18xai1OS1wiLFxuXHRcInR5cGUxXCI6IFwiTmF2QmFyX3R5cGUxX18ybHNZZVwiLFxuXHRcInR5cGUyXCI6IFwiTmF2QmFyX3R5cGUyX18yd3BTQVwiLFxuXHRcInR5cGUzXCI6IFwiTmF2QmFyX3R5cGUzX19DTWtKTFwiLFxuXHRcIm5hdkxvZ29UZXh0XCI6IFwiTmF2QmFyX25hdkxvZ29UZXh0X18yYk5XcVwiXG59O1xuIiwiaW1wb3J0IHsgTGluaywgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgJy4vQnVyZ2VyTWVudS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5cclxuY2xhc3MgQnVyZ2VyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgbWVudU9wZW46ZmFsc2UsXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZU1lbnVDbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe21lbnVPcGVuOiF0aGlzLnN0YXRlLm1lbnVPcGVufSk7XHJcbiAgfVxyXG4gIFxyXG4gIGhhbmRsZUxpbmtDbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe21lbnVPcGVuOiBmYWxzZX0pO1xyXG4gIH1cclxuICBcclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IHN0eWxlcz0gXHJcbiAgICAgIHtcclxuICAgICAgICBjb250YWluZXI6e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICBsZWZ0OiAzMCxcclxuICAgICAgICAgIHpJbmRleDogJzk5JyxcclxuICAgICAgICAgIG9wYWNpdHk6IDAuOSxcclxuICAgICAgICAgIGRpc3BsYXk6J2ZsZXgnLFxyXG4gICAgICAgICAgYWxpZ25JdGVtczonY2VudGVyJyxcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICBmb250RmFtaWx5OidMb2JzdGVyJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ286IHtcclxuICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC00MHB4KScsXHJcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcxMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keToge1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgZmlsdGVyOiB0aGlzLnN0YXRlLm1lbnVPcGVuID8gJ2JsdXIoMnB4KSc6bnVsbCxcclxuICAgICAgICAgIHRyYW5zaXRpb246ICdmaWx0ZXIgMC41cyBlYXNlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICBjb25zdCBtZW51ID0gWydBYm91dCcsJ1NlcnZpY2VzJywnTG9jYXRpb24nLCdDb250YWN0J11cclxuICAgIGNvbnN0IG9uQ2xpY2tEZXN0aW5hdGlvbiA9IFsnYWJvdXRzZWN0aW9uJywnc2VydmljZXNzZWN0aW9uJywnbG9jYXRpb25zZWN0aW9uJywnY29udGFjdHNlY3Rpb24nXVxyXG4gICAgY29uc3QgbWVudUl0ZW1zID0gbWVudS5tYXAoKHZhbCxpbmRleCk9PntcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIHRvPXtvbkNsaWNrRGVzdGluYXRpb25baW5kZXhdfVxyXG4gICAgICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgICAgICBkdXJhdGlvbj0gezcwMH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVudUl0ZW0gXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9IFxyXG4gICAgICAgICAgICBkZWxheT17YCR7aW5kZXggKiAwLjF9c2B9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57dGhpcy5oYW5kbGVMaW5rQ2xpY2soKTt9fT57dmFsfVxyXG4gICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIClcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8TWVudUJ1dHRvbiBvcGVuPXt0aGlzLnN0YXRlLm1lbnVPcGVufSBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVNZW51Q2xpY2soKX0gY29sb3I9J2JsYWNrJy8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubG9nb30+PGltZyBzcmM9XCIvc3RhdGljL2xvZ28zX29wdC5wbmdcIiBhbHQ9XCJUb290aFwiIGhlaWdodD1cIjkwXCIgd2lkdGg9XCI5MFwiLz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TWVudSBvcGVuPXt0aGlzLnN0YXRlLm1lbnVPcGVufT5cclxuICAgICAgICAgIHttZW51SXRlbXN9XHJcbiAgICAgICAgPC9NZW51PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIE1lbnVJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGhvdmVyOmZhbHNlLFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBoYW5kbGVIb3Zlcigpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7aG92ZXI6IXRoaXMuc3RhdGUuaG92ZXJ9KTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCBzdHlsZXM9e1xyXG4gICAgICBjb250YWluZXI6IHtcclxuICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgIGFuaW1hdGlvbjogJzFzIGFwcGVhciBmb3J3YXJkcycsXHJcbiAgICAgICAgYW5pbWF0aW9uRGVsYXk6dGhpcy5wcm9wcy5kZWxheSxcclxuICAgICAgfSxcclxuICAgICAgbWVudUl0ZW06e1xyXG4gICAgICAgIGZvbnRGYW1pbHk6YCdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmYCxcclxuICAgICAgICBmb250U2l6ZTogJzEuMnJlbScsXHJcbiAgICAgICAgcGFkZGluZzogJzFyZW0gMCcsXHJcbiAgICAgICAgbWFyZ2luOiAnMCA1JScsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgY29sb3I6IHRoaXMuc3RhdGUuaG92ZXI/ICdncmF5JzonIzAwMDAwMCcsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2NvbG9yIDAuMnMgZWFzZS1pbi1vdXQnLFxyXG4gICAgICAgIGFuaW1hdGlvbjogJzAuNXMgc2xpZGVJbiBmb3J3YXJkcycsXHJcbiAgICAgICAgYW5pbWF0aW9uRGVsYXk6dGhpcy5wcm9wcy5kZWxheSxcclxuICAgICAgfSxcclxuICAgICAgbGluZToge1xyXG4gICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICBoZWlnaHQ6ICcxcHgnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICdncmF5JyxcclxuICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgIGFuaW1hdGlvbjogJzAuNXMgc2hyaW5rIGZvcndhcmRzJyxcclxuICAgICAgICBhbmltYXRpb25EZWxheTp0aGlzLnByb3BzLmRlbGF5LFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5tZW51SXRlbX0gXHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpPT57dGhpcy5oYW5kbGVIb3ZlcigpO319IFxyXG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKT0+e3RoaXMuaGFuZGxlSG92ZXIoKTt9fVxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufSAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5saW5lfS8+XHJcbiAgICA8L2Rpdj4gIFxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyogTWVudS5qc3ggKi9cclxuY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIG9wZW46IHRoaXMucHJvcHMub3Blbj8gdGhpcy5wcm9wcy5vcGVuOmZhbHNlLFxyXG4gICAgfVxyXG4gIH1cclxuICAgIFxyXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKXtcclxuICAgIGlmKG5leHRQcm9wcy5vcGVuICE9PSB0aGlzLnN0YXRlLm9wZW4pe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOm5leHRQcm9wcy5vcGVufSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3Qgc3R5bGVzPXtcclxuICAgICAgY29udGFpbmVyOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLm9wZW4/ICcxMDAlJzogMCxcclxuICAgICAgICB3aWR0aDogJzEwMHZ3JyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICBvcGFjaXR5OiAwLjk1LFxyXG4gICAgICAgIGNvbG9yOiAnI2ZhZmFmYScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2hlaWdodCAwLjNzIGVhc2UnLFxyXG4gICAgICAgIHpJbmRleDogMixcclxuICAgICAgfSxcclxuICAgICAgbWVudUxpc3Q6IHtcclxuICAgICAgICBwYWRkaW5nVG9wOiAnMTAwcHgnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUub3Blbj9cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLm1lbnVMaXN0fT5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+Om51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuLyogTWVudUJ1dHRvbi5qc3ggKi9cclxuY2xhc3MgTWVudUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgIG9wZW46IHRoaXMucHJvcHMub3Blbj8gdGhpcy5wcm9wcy5vcGVuOmZhbHNlLFxyXG4gICAgICBjb2xvcjogdGhpcy5wcm9wcy5jb2xvcj8gdGhpcy5wcm9wcy5jb2xvcjonYmxhY2snLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xyXG4gICAgaWYobmV4dFByb3BzLm9wZW4gIT09IHRoaXMuc3RhdGUub3Blbil7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46bmV4dFByb3BzLm9wZW59KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaGFuZGxlQ2xpY2soKXtcclxuICB0aGlzLnNldFN0YXRlKHtvcGVuOiF0aGlzLnN0YXRlLm9wZW59KTtcclxuICB9XHJcbiAgXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICAgIGhlaWdodDogJzMycHgnLFxyXG4gICAgICAgIHdpZHRoOiAnMzJweCcsXHJcbiAgICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIHBhZGRpbmc6ICc0cHgnLFxyXG4gICAgICB9LFxyXG4gICAgICBsaW5lOiB7XHJcbiAgICAgICAgaGVpZ2h0OiAnMnB4JyxcclxuICAgICAgICB3aWR0aDogJzIwcHgnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHRoaXMuc3RhdGUuY29sb3IsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UnLFxyXG4gICAgICB9LFxyXG4gICAgICBsaW5lVG9wOiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLnN0YXRlLm9wZW4gPyAncm90YXRlKDQ1ZGVnKSc6J25vbmUnLFxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBsZWZ0JyxcclxuICAgICAgICBtYXJnaW5Cb3R0b206ICc1cHgnLFxyXG4gICAgICB9LFxyXG4gICAgICBsaW5lTWlkZGxlOiB7XHJcbiAgICAgICAgb3BhY2l0eTogdGhpcy5zdGF0ZS5vcGVuID8gMDogMSxcclxuICAgICAgICB0cmFuc2Zvcm06IHRoaXMuc3RhdGUub3BlbiA/ICd0cmFuc2xhdGVYKC0xNnB4KSc6J25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgICBsaW5lQm90dG9tOiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0aGlzLnN0YXRlLm9wZW4gPyAndHJhbnNsYXRlWCgtMXB4KSByb3RhdGUoLTQ1ZGVnKSc6J25vbmUnLFxyXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBsZWZ0JyxcclxuICAgICAgICBtYXJnaW5Ub3A6ICc1cHgnLFxyXG4gICAgICB9LCAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gXHJcbiAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrID8gdGhpcy5wcm9wcy5vbkNsaWNrOiBcclxuICAgICAgICAgICgpPT4ge3RoaXMuaGFuZGxlQ2xpY2soKTt9fT5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7Li4uc3R5bGVzLmxpbmUsLi4uc3R5bGVzLmxpbmVUb3B9fS8+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17ey4uLnN0eWxlcy5saW5lLC4uLnN0eWxlcy5saW5lTWlkZGxlfX0vPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3suLi5zdHlsZXMubGluZSwuLi5zdHlsZXMubGluZUJvdHRvbX19Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG4vKiBNYWluLmpzeCAqL1xyXG5jbGFzcyBCdXJnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICBtYWluOiB7XHJcbiAgICAgICAgZGlzcGxheTonZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjonY29sdW1uJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBoZWlnaHQ6ICcxMTBweCcsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxCdXJnZXJDb21wb25lbnQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXJnZXI7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXBwZWFyXCI6IFwiQnVyZ2VyTWVudV9hcHBlYXJfXzMxdmh0XCIsXG5cdFwic2xpZGVJblwiOiBcIkJ1cmdlck1lbnVfc2xpZGVJbl9fMmdQV0FcIixcblx0XCJzaHJpbmtcIjogXCJCdXJnZXJNZW51X3Nocmlua19fdmJxMmlcIlxufTtcbiIsImltcG9ydCAnLi9TZXJ2aWNlc0NhcmQubW9kdWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xyXG5cclxuY29uc3QgU2VydmljZXNDYXJkID0gKCkgPT4gKFxyXG5cdDxkaXYgY2xhc3NOYW1lPVwicm93IHNlcnZpY2UtY2FyZC1jb250YWluZXJcIj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHNlcnZpY2UtaGVhZGluZy1jb250YWluZXJcIiA+XHJcblx0XHRcdDxoMSBpZD1cInNlcnZpY2Vzc2VjdGlvblwiIGNsYXNzTmFtZT1cInNlcnZpY2UtaGVhZGluZ1wiPk9VUiBTRVJWSUNFUzwvaDE+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdFx0PEZhZGUgbGVmdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS0xMiBzZXJ2aWNlLWFzc2V0LWNvbnRhaW5lclwiID5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlIGRlbnR1cmUtaW1nXCI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtYXNzZXQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxoMz5EZW50dXJlczwvaDM+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbWQtNiBjb2wtc20tMTIgc2VydmljZS1hc3NldC1jb250YWluZXJcIiA+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZSByZXBhaXJzLWltZ1wiPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHRcdFxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWFzc2V0LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8aDM+UmVwYWlyczwvaDM+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8RmFkZSByaWdodD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1tZC02IGNvbC1zbS0xMiBzZXJ2aWNlLWFzc2V0LWNvbnRhaW5lclwiID5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlIG1vdXRoZ3VhcmQtaW1nXCI+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cdFx0XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtYXNzZXQtY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxoMz5Nb3V0aGd1YXJkczwvaDM+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L0ZhZGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlc0NhcmQ7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VydmljZS1jYXJkLWNvbnRhaW5lclwiOiBcIlNlcnZpY2VzQ2FyZF9zZXJ2aWNlLWNhcmQtY29udGFpbmVyX18zc1FzalwiLFxuXHRcInNlcnZpY2UtaGVhZGluZy1jb250YWluZXJcIjogXCJTZXJ2aWNlc0NhcmRfc2VydmljZS1oZWFkaW5nLWNvbnRhaW5lcl9fMWRRcTJcIixcblx0XCJzZXJ2aWNlLWhlYWRpbmdcIjogXCJTZXJ2aWNlc0NhcmRfc2VydmljZS1oZWFkaW5nX18yckpoUFwiLFxuXHRcInNlcnZpY2UtYXNzZXQtY29udGFpbmVyXCI6IFwiU2VydmljZXNDYXJkX3NlcnZpY2UtYXNzZXQtY29udGFpbmVyX18zZXR1alwiLFxuXHRcImNpcmNsZVwiOiBcIlNlcnZpY2VzQ2FyZF9jaXJjbGVfXzFwMXhCXCIsXG5cdFwiZGVudHVyZS1pbWdcIjogXCJTZXJ2aWNlc0NhcmRfZGVudHVyZS1pbWdfXzZoZTB1XCIsXG5cdFwicmVwYWlycy1pbWdcIjogXCJTZXJ2aWNlc0NhcmRfcmVwYWlycy1pbWdfX2dteVQ5XCIsXG5cdFwibW91dGhndWFyZC1pbWdcIjogXCJTZXJ2aWNlc0NhcmRfbW91dGhndWFyZC1pbWdfXzFFWVZPXCJcbn07XG4iLCJpbXBvcnQgTmF2QmFyIGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvTmF2QmFyJztcclxuaW1wb3J0IExhbmRpbmdDYXJkIGZyb20gJy4vY29tcG9uZW50cy9sYW5kaW5nY2FyZC9MYW5kaW5nQ2FyZCc7XHJcbmltcG9ydCBBYm91dCBmcm9tICcuL2NvbXBvbmVudHMvYWJvdXQvQWJvdXQnO1xyXG5pbXBvcnQgU2VydmljZXNDYXJkIGZyb20gJy4vY29tcG9uZW50cy9zZXJ2aWNlc2NhcmQvU2VydmljZXNDYXJkJztcclxuaW1wb3J0IENvbnRhY3RDYXJkIGZyb20gJy4vY29tcG9uZW50cy9jb250YWN0Y2FyZC9Db250YWN0Q2FyZCc7XHJcbmltcG9ydCBCb29raW5nQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvYm9va2luZ2NhcmQvQm9va2luZ0NhcmQnO1xyXG5pbXBvcnQgTWFwQ29udGFpbmVyIGZyb20gJy4vY29tcG9uZW50cy9tYXB2aWV3L01hcENvbnRhaW5lcic7XHJcbmltcG9ydCBCYWNrVG9Ub3BCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL2JhY2t0b3RvcGJ1dHRvbi9CYWNrVG9Ub3BCdXR0b24nO1xyXG5cclxuaW1wb3J0IHsgTGluaywgRWxlbWVudCB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzJztcclxuXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IChcclxuXHQ8ZGl2IGNsYXNzTmFtZT1cImluZGV4LWRvY1wiPlxyXG5cdFx0PE5hdkJhciAvPlxyXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuXHRcdFx0PExhbmRpbmdDYXJkLz5cclxuXHRcdFx0PEFib3V0IC8+XHJcblx0XHRcdDxTZXJ2aWNlc0NhcmQgLz5cclxuXHRcdFx0PE1hcENvbnRhaW5lciAvPlxyXG5cdFx0XHQ8Qm9va2luZ0NhcmQgLz5cclxuXHRcdFx0PENvbnRhY3RDYXJkIC8+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxCYWNrVG9Ub3BCdXR0b24gLz5cclxuXHQ8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvY2F0aW9uLWhlYWRpbmdcIjogXCJzdHlsZXNfbG9jYXRpb24taGVhZGluZ19fMnN3eFlcIixcblx0XCJpbmRleC1kb2NcIjogXCJzdHlsZXNfaW5kZXgtZG9jX19IcEVQdFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlLW1hcHMtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbG9hZGluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXZlYWwvRmFkZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==