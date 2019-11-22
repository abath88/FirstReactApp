webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Components/Color.js":
/*!*****************************!*\
  !*** ./Components/Color.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Color.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Color(props) {
  var tab = props.colors;
  return __jsx("div", {
    className: "color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, tab.forEach(function (item) {
    return __jsx("div", {
      className: "box ".concat(item),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Color);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Hero */ "./Components/Hero.js");
/* harmony import */ var _Components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Section */ "./Components/Section.js");
/* harmony import */ var _Components_Headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Headers */ "./Components/Headers.js");
/* harmony import */ var _Components_Paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Paragraph */ "./Components/Paragraph.js");
/* harmony import */ var _Components_Color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Color */ "./Components/Color.js");
var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Home() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_Components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "01. Typography",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_Components_Headers__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_Components_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx(_Components_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "02. Color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_Components_Color__WEBPACK_IMPORTED_MODULE_5__["default"], {
    colors: ["white", "black-19", "black-39", "black-59", "black-79", "black-100"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("div", {
    "class": "color",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    "class": "box primary-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("div", {
    "class": "box primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    "class": "box primary-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.201d034607002d475fd0.hot-update.js.map