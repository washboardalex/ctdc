module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BurgerMenu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _BurgerMenu_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_BurgerMenu_scss__WEBPACK_IMPORTED_MODULE_2__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var BurgerComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BurgerComponent, _React$Component);

  function BurgerComponent(props) {
    var _this;

    _classCallCheck(this, BurgerComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BurgerComponent).call(this, props));
    _this.state = {
      menuOpen: false
    };
    return _this;
  }

  _createClass(BurgerComponent, [{
    key: "handleMenuClick",
    value: function handleMenuClick() {
      this.setState({
        menuOpen: !this.state.menuOpen
      });
    }
  }, {
    key: "handleLinkClick",
    value: function handleLinkClick() {
      this.setState({
        menuOpen: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var styles = {
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
      var menu = ['About', 'Services', 'Location', 'Contact'];
      var onClickDestination = ['aboutsection', 'servicessection', 'locationsection', 'contactsection'];
      var menuItems = menu.map(function (val, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          activeClass: "active",
          key: index,
          to: onClickDestination[index],
          spy: true,
          smooth: true,
          offset: -70,
          duration: 700
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
          key: index,
          delay: "".concat(index * 0.1, "s"),
          onClick: function onClick() {
            _this2.handleLinkClick();
          }
        }, val));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.container
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuButton, {
        open: this.state.menuOpen,
        onClick: function onClick() {
          return _this2.handleMenuClick();
        },
        color: "black"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.logo
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/static/logo3_opt.png",
        alt: "Tooth",
        height: "90",
        width: "90"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
        open: this.state.menuOpen
      }, menuItems));
    }
  }]);

  return BurgerComponent;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var MenuItem =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(MenuItem, _React$Component2);

  function MenuItem(props) {
    var _this3;

    _classCallCheck(this, MenuItem);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MenuItem).call(this, props));
    _this3.state = {
      hover: false
    };
    return _this3;
  }

  _createClass(MenuItem, [{
    key: "handleHover",
    value: function handleHover() {
      this.setState({
        hover: !this.state.hover
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var styles = {
        container: {
          opacity: 0,
          animation: '1s appear forwards',
          animationDelay: this.props.delay
        },
        menuItem: {
          fontFamily: "'Open Sans', sans-serif",
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.container
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.menuItem,
        onMouseEnter: function onMouseEnter() {
          _this4.handleHover();
        },
        onMouseLeave: function onMouseLeave() {
          _this4.handleHover();
        },
        onClick: this.props.onClick
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.line
      }));
    }
  }]);

  return MenuItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* Menu.jsx */


var Menu =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Menu, _React$Component3);

  function Menu(props) {
    var _this5;

    _classCallCheck(this, Menu);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));
    _this5.state = {
      open: _this5.props.open ? _this5.props.open : false
    };
    return _this5;
  }

  _createClass(Menu, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.state.open) {
        this.setState({
          open: nextProps.open
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var styles = {
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.container
      }, this.state.open ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.menuList
      }, this.props.children) : null);
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* MenuButton.jsx */


var MenuButton =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(MenuButton, _React$Component4);

  function MenuButton(props) {
    var _this6;

    _classCallCheck(this, MenuButton);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(MenuButton).call(this, props));
    _this6.state = {
      open: _this6.props.open ? _this6.props.open : false,
      color: _this6.props.color ? _this6.props.color : 'black'
    };
    return _this6;
  }

  _createClass(MenuButton, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.state.open) {
        this.setState({
          open: nextProps.open
        });
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        open: !this.state.open
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var styles = {
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.container,
        onClick: this.props.onClick ? this.props.onClick : function () {
          _this7.handleClick();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _objectSpread({}, styles.line, styles.lineTop)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _objectSpread({}, styles.line, styles.lineMiddle)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: _objectSpread({}, styles.line, styles.lineBottom)
      }));
    }
  }]);

  return MenuButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* Main.jsx */


var Burger =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(Burger, _React$Component5);

  function Burger() {
    _classCallCheck(this, Burger);

    return _possibleConstructorReturn(this, _getPrototypeOf(Burger).apply(this, arguments));
  }

  _createClass(Burger, [{
    key: "render",
    value: function render() {
      var styles = {
        main: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '110px'
        }
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.main
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BurgerComponent, null));
    }
  }]);

  return Burger;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ })

/******/ });