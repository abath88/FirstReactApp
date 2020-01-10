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
    className: "jsx-2877772888" + " " + "color",
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
      className: "jsx-2877772888" + " " + 'box',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    });
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2877772888",
    __self: this
  }, ".white.jsx-2877772888{background-color:white;}.black-19.jsx-2877772888{background-color:rgba(0,0,0,.19);}.black-39.jsx-2877772888{background-color:rgba(0,0,0,.39);}.black-59.jsx-2877772888{background-color:rgba(0,0,0,.59);}.black-79.jsx-2877772888{background-color:rgba(0,0,0,.79);}.black-100.jsx-2877772888{background-color:rgba(0,0,0,1);}.primary.jsx-2877772888{background-color:#6200ea;}.primary-light.jsx-2877772888{background-color:#9d46ff;}.primary-dark.jsx-2877772888{background-color:#0a00b6;}.color.jsx-2877772888{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:2em;}.box.jsx-2877772888{width:10em;height:10em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcR2l0SHViXFxGaXJzdFJlYWN0QXBwXFxDb21wb25lbnRzXFxDb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNd0IsQUFHNEIsQUFHVyxBQUVBLEFBRUEsQUFFQSxBQUVGLEFBR1AsQUFJQSxBQUlBLEFBSVosQUFJRixXQUNDLFlBOUJoQixBQStCQSxFQWpCQSxBQUlBLEFBSUEsTUFacUMsRUFSRSxBQUVBLEFBRUEsQUFFQSx5Q0FrQm5CLGdCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXEhQXFxEb2N1bWVudHNcXEdpdEh1YlxcRmlyc3RSZWFjdEFwcFxcQ29tcG9uZW50c1xcQ29sb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBDb2xvciAoe2NvbG9yc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvclwiPlxyXG4gICAgICAgICAgICB7Y29sb3JzLm1hcCgoaXRlbSwga2V5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPSdib3gnIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBpdGVtfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbi53aGl0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXHJcbn1cclxuLmJsYWNrLTE5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIC4xOSlcclxufVxyXG4uYmxhY2stMzkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgLjM5KVxyXG59XHJcbi5ibGFjay01OSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAuNTkpXHJcbn1cclxuLmJsYWNrLTc5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIC43OSlcclxufVxyXG4uYmxhY2stMTAwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDEpXHJcbn1cclxuXHJcbi5wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MjAwZWE7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZDQ2ZmY7XHJcbn1cclxuXHJcbi5wcmltYXJ5LWRhcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMDBiNjtcclxufVxyXG5cclxuLmNvbG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG59XHJcbi5ib3gge1xyXG4gICAgd2lkdGg6IDEwZW07XHJcbiAgICBoZWlnaHQ6IDEwZW07XHJcbn1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xvclxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Color.js */"));
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ "./Components/Section.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Color */ "./Components/Color.js");
/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Headers */ "./Components/Headers.js");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Paragraph */ "./Components/Paragraph.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Menu */ "./Components/Menu.js");

var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class Container extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "changeFont", () => {
      this.setState({
        font: this.state.font == 'serif' ? 'sans-serif' : 'serif'
      });
    });

    this.state = {
      font: 'sans-serif',
      color: ['rgba(255,0,0,.3', 'rgba(255,0,0,.8)', 'red']
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(e) {
    switch (e.target.value) {
      case 'red':
        this.setState({
          color: ['rgba(255,0,0,.3', 'rgba(255,0,0,.8)', 'red']
        });
        break;

      case 'green':
        this.setState({
          color: ['rgba(0,255,0,.3', 'rgba(0,255,0,.8)', 'green']
        });
        break;

      default:
        this.setState({
          color: ['rgba(255,0,0,.3', 'rgba(255,0,0,.8)', 'red']
        });
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {
      changeFont: this.changeFont,
      changeColor: this.changeColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "01. Typography",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx(_Headers__WEBPACK_IMPORTED_MODULE_4__["default"], {
      font: this.state.font,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), __jsx(_Paragraph__WEBPACK_IMPORTED_MODULE_5__["default"], {
      font: this.state.font,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), __jsx(_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "02. Color",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx(_Color__WEBPACK_IMPORTED_MODULE_3__["default"], {
      colors: ["white", "rgba(0,0,0, .19)", "rgba(0,0,0, .39)", "rgba(0,0,0, .59)", "rgba(0,0,0, .79)", "rgb(0,0,0)"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), __jsx(_Color__WEBPACK_IMPORTED_MODULE_3__["default"], {
      colors: this.state.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Menu extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("nav", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("button", {
      onClick: this.props.handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "Click ME"), __jsx("select", {
      name: "colors",
      onChange: this.props.changeColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("option", {
      value: "red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "red"), __jsx("option", {
      value: "green",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "green"), __jsx("option", {
      value: "blue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "blue"), __jsx("option", {
      value: "pink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "pink")))));
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