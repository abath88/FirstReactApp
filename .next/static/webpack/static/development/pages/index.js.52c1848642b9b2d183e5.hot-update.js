webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Section */ "./Components/Section.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Color */ "./Components/Color.js");
/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Headers */ "./Components/Headers.js");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Paragraph */ "./Components/Paragraph.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Menu */ "./Components/Menu.js");








var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Container.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;







var Container =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Container, _Component);

  function Container(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Container);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Container).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "changeFont", function (event) {
      _this.setState({
        font: event.target[event.target.selectedIndex].value
      });
    });

    _this.state = {
      font: 'sans-serif',
      color: ['rgba(255,0,0,.3', 'rgba(255,0,0,.8)', 'red']
    };
    _this.changeColor = _this.changeColor.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Container, [{
    key: "changeColor",
    value: function changeColor(e) {
      var color = [];

      for (var i = 1; i < e.target.value.length; i += 2) {
        var val1 = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value[i]);

        var val2 = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.value[i + 1]);

        if (isNaN(val1)) {
          switch (val1) {
            case "a":
              val1 = 10;
              break;

            case "b":
              val1 = 11;
              break;

            case "c":
              val1 = 12;
              break;

            case "d":
              val1 = 13;
              break;

            case "e":
              val1 = 14;
              break;

            case "f":
              val1 = 15;
              break;
          }

          val1 = val1 * 16;
        }

        if (isNaN(val2)) {
          switch (val2) {
            case "a":
              val2 = 10;
              break;

            case "b":
              val2 = 11;
              break;

            case "c":
              val2 = 12;
              break;

            case "d":
              val2 = 13;
              break;

            case "e":
              val2 = 14;
              break;

            case "f":
              val2 = 15;
              break;
          }
        }

        color.push(val1 + val2);
      }

      this.setState({
        color: ["rgba(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ",.3"), "rgba(".concat(color[0], ", ").concat(color[1], ", ").concat(color[2], ",.8)"), e.target.value]
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_13__["default"], {
        changeFont: this.changeFont,
        changeColor: this.changeColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), __jsx(_Section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "01. Typography",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(_Headers__WEBPACK_IMPORTED_MODULE_11__["default"], {
        font: this.state.font,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx(_Paragraph__WEBPACK_IMPORTED_MODULE_12__["default"], {
        font: this.state.font,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), __jsx(_Section__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: "02. Color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(_Color__WEBPACK_IMPORTED_MODULE_10__["default"], {
        colors: ["white", "rgba(0,0,0, .19)", "rgba(0,0,0, .39)", "rgba(0,0,0, .59)", "rgba(0,0,0, .79)", "rgb(0,0,0)"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx(_Color__WEBPACK_IMPORTED_MODULE_10__["default"], {
        colors: this.state.color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      })));
    }
  }]);

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ })

})
//# sourceMappingURL=index.js.52c1848642b9b2d183e5.hot-update.js.map