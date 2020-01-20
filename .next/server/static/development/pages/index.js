module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Color.js":
/*!*****************************!*\
  !*** ./Components/Color.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Color.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Color({
  colors
}) {
  return __jsx("div", {
    className: "jsx-3976190880" + " " + "color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, colors.map((item, key) => {
    return __jsx("div", {
      key: key,
      style: {
        backgroundColor: item
      },
      className: "jsx-3976190880" + " " + 'box',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3976190880",
    __self: this
  }, ".color.jsx-3976190880{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:2em;}.box.jsx-3976190880{width:10em;height:10em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcR2l0SHViXFxGaXJzdFJlYWN0QXBwXFxDb21wb25lbnRzXFxDb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNd0IsQUFHa0MsQUFJRixXQUNDLFlBQ2hCLG1EQUxvQixnQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxHaXRIdWJcXEZpcnN0UmVhY3RBcHBcXENvbXBvbmVudHNcXENvbG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQ29sb3IgKHtjb2xvcnN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3JcIj5cclxuICAgICAgICAgICAge2NvbG9ycy5tYXAoKGl0ZW0sIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT0nYm94JyBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogaXRlbX19PjwvZGl2PlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbG9yIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTBlbTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sb3JcclxuIl19 */\n/*@ sourceURL=C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Color.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Color);

/***/ }),

/***/ "./Components/Container.js":
/*!*********************************!*\
  !*** ./Components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./Components/Section.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Color */ "./Components/Color.js");
/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Headers */ "./Components/Headers.js");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Paragraph */ "./Components/Paragraph.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Menu */ "./Components/Menu.js");


var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







class Container extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "changeFont", event => {
      this.setState({
        font: event.target[event.target.selectedIndex].value
      });
    });

    this.state = {
      font: 'sans-serif',
      color: ['rgba(255,0,0,.3', 'rgba(255,0,0,.8)', 'red']
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(e) {
    console.log(e.target.value);
    let col = [];

    for (let i = 1; i < e.target.value.length; i += 2) {
      let val1 = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value[i], 16);

      let val2 = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value[i + 1], 16);

      val1 = val1 * 16;
      col.push(val1 + val2);
    }

    console.log(col);
    this.setState({
      color: [`rgba(${col[0]}, ${col[1]}, ${col[2]},.3`, `rgba(${col[0]}, ${col[1]}, ${col[2]},.8)`, e.target.value]
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
      changeFont: this.changeFont,
      changeColor: this.changeColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "01. Typography",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx(_Headers__WEBPACK_IMPORTED_MODULE_5__["default"], {
      font: this.state.font,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx(_Paragraph__WEBPACK_IMPORTED_MODULE_6__["default"], {
      font: this.state.font,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })), __jsx(_Section__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "02. Color",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(_Color__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colors: ["white", "rgba(0,0,0, .19)", "rgba(0,0,0, .39)", "rgba(0,0,0, .59)", "rgba(0,0,0, .79)", "rgb(0,0,0)"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx(_Color__WEBPACK_IMPORTED_MODULE_4__["default"], {
      colors: this.state.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./Components/Headers.js":
/*!*******************************!*\
  !*** ./Components/Headers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Headers.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Headers extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1278617073", [this.props.font]]]) + " " + "headers",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h1", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1278617073", [this.props.font]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Heading 1"), __jsx("h2", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1278617073", [this.props.font]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Heading 2"), __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1278617073", [this.props.font]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Heading 3"), __jsx("h4", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1278617073", [this.props.font]]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Heading 4"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1278617073",
      dynamic: [this.props.font],
      __self: this
    }, `h1.__jsx-style-dynamic-selector,h2.__jsx-style-dynamic-selector,h3.__jsx-style-dynamic-selector,h4.__jsx-style-dynamic-selector,p.__jsx-style-dynamic-selector{font-family:${this.props.font};}.headers.__jsx-style-dynamic-selector{width:40em;margin:0 2em;}h1.__jsx-style-dynamic-selector{font-size:5.6em;line-height:1em;margin:0;}h2.__jsx-style-dynamic-selector{font-size:4.2em;line-height:1.2em;margin:0;}h3.__jsx-style-dynamic-selector{font-size:3.15em;line-height:1.3em;margin:0;}h4.__jsx-style-dynamic-selector{font-size:2.3625em;line-height:1.4em;margin:0;}p.__jsx-style-dynamic-selector{font-size:1.8em;margin-top:.5em;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcR2l0SHViXFxGaXJzdFJlYWN0QXBwXFxDb21wb25lbnRzXFxIZWFkZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWM0QixBQUdrRSxBQUc5QixBQUtLLEFBS0EsQUFLQyxBQUtFLEFBS0gsV0F4QkgsS0FLRyxBQUtFLEFBZUYsQ0FWRSxFQUtBLEtBbkJ0QixRQUthLEFBb0JiLEVBZmEsQ0FLQSxFQUtBLElBeEJiLEFBVUEsRUFLQSxDQUtBLEVBS0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxHaXRIdWJcXEZpcnN0UmVhY3RBcHBcXENvbXBvbmVudHNcXEhlYWRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIEhlYWRlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcnNcIj4gXHJcbiAgICAgICAgICAgICAgICA8aDE+SGVhZGluZyAxPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5IZWFkaW5nIDI8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPkhlYWRpbmcgMzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDQ+SGVhZGluZyA0PC9oND5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBoMSwgaDIsIGgzLCBoNCwgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoaXMucHJvcHMuZm9udH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNS42ZW07IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMWVtOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC4yZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMuMTVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4zNjI1ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcnMiXX0= */
/*@ sourceURL=C:\Users\HP\Documents\GitHub\FirstReactApp\Components\Headers.js */`));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Headers);

/***/ }),

/***/ "./Components/Hero.js":
/*!****************************!*\
  !*** ./Components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Hero.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Hero() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3726425827" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3726425827",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Style guide")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3726425827",
    __self: this
  }, ".hero.jsx-3726425827{margin:0;background-color:rgba(0,0,150,.2);height:15em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcR2l0SHViXFxGaXJzdFJlYWN0QXBwXFxDb21wb25lbnRzXFxIZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU13QixBQUc4QixTQUM0QixrQ0FDekIsWUFDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxHaXRIdWJcXEZpcnN0UmVhY3RBcHBcXENvbXBvbmVudHNcXEhlcm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBIZXJvKCkge1xyXG4gICAgcmV0dXJuICAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+U3R5bGUgZ3VpZGU8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmhlcm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDE1MCwgLjIpOyBcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybyJdfQ== */\n/*@ sourceURL=C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Hero.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./Components/Menu.js":
/*!****************************!*\
  !*** ./Components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 //https://github.com/abath88/FirstReactApp

var obj = {
  fonts: ["Times New Roman", "Arial", "Calibri", "Comic Sans MS", "Impact"]
};

class Menu extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleClick", () => {
      this.setState({
        show: !this.state.show
      });
    });

    this.state = {
      show: false
    };
  }

  render() {
    return __jsx("nav", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]) + " " + "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
      onClick: this.handleClick,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]) + " " + "burger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]) + " " + (this.state.show && 'show' || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    })), __jsx("ul", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("select", {
      name: "colors",
      onChange: this.props.changeFont,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, obj.fonts.map(font => __jsx("option", {
      style: {
        fontFamily: font
      },
      value: font,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, font)))), __jsx("li", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("input", {
      type: "color",
      onChange: this.props.changeColor,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1508502665",
      dynamic: [this.state.show ? 'block' : 'none'],
      __self: this
    }, `.menu.__jsx-style-dynamic-selector{position:fixed;right:0;background-color:white;border-top:2px solid black;border-left:2px solid black;border-bottom:2px solid black;}.menu.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector{list-style:none;display:${this.state.show ? 'block' : 'none'};}.menu.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector>li.__jsx-style-dynamic-selector{padding:30px;}.burger.__jsx-style-dynamic-selector{position:relative;width:52px;height:52px;cursor:pointer;}.burger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{position:absolute;top:25px;margin-left:12px;width:30px;height:2px;display:block;background-color:black;border-radius:100px;}.burger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{content:"";position:absolute;left:0px;top:-10px;width:30px;height:2px;background-color:black;border-radius:100px;}.burger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:after{content:"";position:absolute;left:0;top:10px;width:30px;height:2px;background-color:black;border-radius:100px;}@-webkit-keyframes burder-top-__jsx-style-dynamic-selector{0%{top:-15px;}50%{top:0;}100%{top:0;}}@keyframes burder-top-__jsx-style-dynamic-selector{0%{top:-15px;}50%{top:0;}100%{top:0;}}@-webkit-keyframes burder-bottom-__jsx-style-dynamic-selector{0%{top:15px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}50%{top:0;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{top:0;}}@keyframes burder-bottom-__jsx-style-dynamic-selector{0%{top:15px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}50%{top:0;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{top:0;}}.burger.__jsx-style-dynamic-selector span.show.__jsx-style-dynamic-selector{background-color:transparent;}.burger.__jsx-style-dynamic-selector span.show.__jsx-style-dynamic-selector:after{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:all 280ms ease-in-out 280ms;transition:all 280ms ease-in-out 280ms;top:0;-webkit-animation:560ms ease-in-out burder-bottom-__jsx-style-dynamic-selector;animation:560ms ease-in-out burder-bottom-__jsx-style-dynamic-selector;}.burger.__jsx-style-dynamic-selector span.show.__jsx-style-dynamic-selector:before{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:all 280ms ease-in-out 280ms;transition:all 280ms ease-in-out 280ms;top:0;-webkit-animation:560ms ease-in-out burder-top-__jsx-style-dynamic-selector;animation:560ms ease-in-out burder-top-__jsx-style-dynamic-selector;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcR2l0SHViXFxGaXJzdFJlYWN0QXBwXFxDb21wb25lbnRzXFxNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDd0IsQUFHb0MsQUFVQyxBQUtILEFBSUssQUFRQSxBQVdSLEFBV0MsQUFZRyxBQUlKLEFBSUEsQUFNRyxBQUtILEFBS0EsQUFJbUIsQUFJTCxBQVFDLE1BbkN6QixBQUlBLEFBVzJCLEFBSzNCLEdBVjJCLENBZDNCLENBdkJrQixBQVdBLEVBbEN0QixFQWZZLENBVTZCLEVBUzFCLEFBUUYsS0ExQmMsSUEyQk4sRUFSTCxBQW1CSCxBQVdGLEFBdUNYLE9BdENhLEVBWEMsR0FsQkssR0FPSixDQXVCQSxDQWpEZ0IsRUFzQ2hCLEtBOUJmLEVBbUJlLENBUGYsQUE4QmUsR0FYQSxPQVhHLENBdUJTLEdBWEEsR0F2Q0ssT0E0QkwsSUE4RGdCLEdBYnZDLEFBb0J1QyxHQTlDbkIsQUFxQnBCLEdBaENvQixRQXZDVSxFQTRCVixPQXVCeEIsR0FYQSxVQVhBLFFBNUJBLHVDQXlGVSxHQU9BLEdBTm9DLEdBT0gsZ0pBQzNDLEdBUEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxHaXRIdWJcXEZpcnN0UmVhY3RBcHBcXENvbXBvbmVudHNcXE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vaHR0cHM6Ly9naXRodWIuY29tL2FiYXRoODgvRmlyc3RSZWFjdEFwcFxyXG5cclxudmFyIG9iaiA9IHtcclxuICAgIGZvbnRzOiBbXHJcbiAgICAgICAgXCJUaW1lcyBOZXcgUm9tYW5cIiwgXCJBcmlhbFwiLCBcIkNhbGlicmlcIiwgXCJDb21pYyBTYW5zIE1TXCIsIFwiSW1wYWN0XCJcclxuICAgIF1cclxufVxyXG5cclxuY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2hvdzogIXRoaXMuc3RhdGUuc2hvd1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXJnZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zaG93ICYmICdzaG93J30vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImNvbG9yc1wiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmNoYW5nZUZvbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b2JqLmZvbnRzLm1hcCggZm9udCA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250RmFtaWx5OiBmb250fX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ZvbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX0gICBcclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xvcn0vPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tZW51ID4gdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJHt0aGlzLnN0YXRlLnNob3cgPyAnYmxvY2snIDogJ25vbmUnfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWVudSA+IHVsID4gbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ1cmdlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTJweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5idXJnZXIgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5idXJnZXIgc3BhbjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDpcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnVyZ2VyIHNwYW46YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBidXJkZXItdG9we1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYnVyZGVyLWJvdHRvbXtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDsgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idXJnZXIgc3Bhbi5zaG93IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnVyZ2VyIHNwYW4uc2hvdzphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyODBtcyBlYXNlLWluLW91dCAyODBtczsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwOyBcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDU2MG1zIGVhc2UtaW4tb3V0IGJ1cmRlci1ib3R0b207XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ1cmdlciBzcGFuLnNob3c6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyODBtcyBlYXNlLWluLW91dCAyODBtczsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwOyBcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDU2MG1zIGVhc2UtaW4tb3V0IGJ1cmRlci10b3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnUiXX0= */
/*@ sourceURL=C:\Users\HP\Documents\GitHub\FirstReactApp\Components\Menu.js */`));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./Components/Paragraph.js":
/*!*********************************!*\
  !*** ./Components/Paragraph.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Paragraph.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Paragraph(props) {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4207486306", [props.font]]]) + " " + "paragraph",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4207486306", [props.font]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4207486306",
    dynamic: [props.font],
    __self: this
  }, `.paragraph.__jsx-style-dynamic-selector{width:40em;font-size:1.6em;font-family:${props.font};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcR2l0SHViXFxGaXJzdFJlYWN0QXBwXFxDb21wb25lbnRzXFxQYXJhZ3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0J3QixBQUdnQyxXQUNLLGdCQUVyQix5Q0FBQyIsImZpbGUiOiJDOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXEdpdEh1YlxcRmlyc3RSZWFjdEFwcFxcQ29tcG9uZW50c1xcUGFyYWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gUGFyYWdyYXBoKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIFxyXG4gICAgICAgICAgICAgICAgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgXHJcbiAgICAgICAgICAgICAgICBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgXHJcbiAgICAgICAgICAgICAgICBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIFxyXG4gICAgICAgICAgICAgICAgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgXHJcbiAgICAgICAgICAgICAgICB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIFxyXG4gICAgICAgICAgICAgICAgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIFxyXG4gICAgICAgICAgICAgICAgdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBcclxuICAgICAgICAgICAgICAgIGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgXHJcbiAgICAgICAgICAgICAgICBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IFxyXG4gICAgICAgICAgICAgICAgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnBhcmFncmFwaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHtwcm9wcy5mb250fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaCJdfQ== */
/*@ sourceURL=C:\Users\HP\Documents\GitHub\FirstReactApp\Components\Paragraph.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (Paragraph);

/***/ }),

/***/ "./Components/Section.js":
/*!*******************************!*\
  !*** ./Components/Section.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Title */ "./Components/Title.js");
var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Section.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Section(props) {
  return __jsx("section", {
    className: "jsx-663849522" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: props.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-663849522" + " " + "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "663849522",
    __self: this
  }, ".container.jsx-663849522{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.content.jsx-663849522{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-top:4em;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcR2l0SHViXFxGaXJzdFJlYWN0QXBwXFxDb21wb25lbnRzXFxTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN3QixBQUdrQyxBQUtBLDBFQUpNLEFBS0EscUVBSnZCLEFBS29CLGdCQUNELHlEQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXEdpdEh1YlxcRmlyc3RSZWFjdEFwcFxcQ29tcG9uZW50c1xcU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZSBmcm9tIFwiLi9UaXRsZVwiXHJcblxyXG5mdW5jdGlvbiBTZWN0aW9uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8VGl0bGUgdGl0bGU9e3Byb3BzLnRpdGxlfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24iXX0= */\n/*@ sourceURL=C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Section.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./Components/Title.js":
/*!*****************************!*\
  !*** ./Components/Title.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Title.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Title(props) {
  /*
  font-size: 2em;
  font-family: "Courier New";
  font-weight: 300;
  text-align: center;
  padding-top: 2.6em;
  */
  let fontS = "4.2em";
  let header2 = {
    fontSize: "2em",
    fontFamily: "Courier New",
    fontWeight: "300",
    textAlign: "center",
    paddingTop: "2.6em"
  };
  return __jsx("div", {
    style: {
      width: "25em",
      backgroundColor: "rgba(0,0,150,.1)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h2", {
    style: header2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, props.title));
}

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Hero */ "./Components/Hero.js");
/* harmony import */ var _Components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Container */ "./Components/Container.js");
var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Components_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx(_Components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3835160573",
    __self: this
  }, "html{font-size:62.5%;font-family:\"Roboto\",sans-serif;}body{margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcR2l0SHViXFxGaXJzdFJlYWN0QXBwXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVStCLEFBR3FDLEFBS1AsU0FDYixPQUxxQyxnQ0FDckMiLCJmaWxlIjoiQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxHaXRIdWJcXEZpcnN0UmVhY3RBcHBcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvIGZyb20gXCIuLi9Db21wb25lbnRzL0hlcm9cIlxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9Db21wb25lbnRzL0NvbnRhaW5lclwiXHJcblxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlcm8gLz5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgaHRtbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2Mi41JTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm9keSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdfQ== */\n/*@ sourceURL=C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\pages\\index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Documents\GitHub\FirstReactApp\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map