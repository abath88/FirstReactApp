webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Components/Menu.js":
/*!****************************!*\
  !*** ./Components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;
 //https://github.com/abath88/FirstReactApp

var obj = {
  fonts: []
};

var Menu =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Menu, _React$Component);

  function Menu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Menu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Menu).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function () {
      _this.setState({
        show: !_this.state.show
      });
    });

    _this.state = {
      show: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Menu, [{
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]) + " " + "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("div", {
        onClick: this.handleClick,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]) + " " + "burger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]) + " " + (this.state.show && 'show' || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), __jsx("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("select", {
        name: "colors",
        onChange: this.props.changeFont,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("option", {
        style: {
          fontFamily: "Times New Roman"
        },
        value: "Times New Roman",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Times New Roman"), __jsx("option", {
        style: {
          fontFamily: "Arial"
        },
        value: "Arial",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Arial"), __jsx("option", {
        style: {
          fontFamily: "Calibri"
        },
        value: "Calibri",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Calibri"), __jsx("option", {
        style: {
          fontFamily: "Comic Sans MS"
        },
        value: "Comic Sans MS",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Comic Sans MS"))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("select", {
        name: "colors",
        onChange: this.props.changeColor,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("option", {
        value: "red",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "red"), __jsx("option", {
        value: "green",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "green"), __jsx("option", {
        value: "blue",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "blue"), __jsx("option", {
        value: "pink",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [this.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "pink")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1508502665",
        dynamic: [this.state.show ? 'block' : 'none'],
        __self: this
      }, ".menu.__jsx-style-dynamic-selector{position:fixed;right:0;background-color:white;border-top:2px solid black;border-left:2px solid black;border-bottom:2px solid black;}.menu.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector{list-style:none;display:".concat(this.state.show ? 'block' : 'none', ";}.menu.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector>li.__jsx-style-dynamic-selector{padding:30px;}.burger.__jsx-style-dynamic-selector{position:relative;width:52px;height:52px;cursor:pointer;}.burger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{position:absolute;top:25px;margin-left:12px;width:30px;height:2px;display:block;background-color:black;border-radius:100px;}.burger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{content:\"\";position:absolute;left:0px;top:-10px;width:30px;height:2px;background-color:black;border-radius:100px;}.burger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:after{content:\"\";position:absolute;left:0;top:10px;width:30px;height:2px;background-color:black;border-radius:100px;}@-webkit-keyframes burder-top-__jsx-style-dynamic-selector{0%{top:-15px;}50%{top:0;}100%{top:0;}}@keyframes burder-top-__jsx-style-dynamic-selector{0%{top:-15px;}50%{top:0;}100%{top:0;}}@-webkit-keyframes burder-bottom-__jsx-style-dynamic-selector{0%{top:15px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}50%{top:0;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{top:0;}}@keyframes burder-bottom-__jsx-style-dynamic-selector{0%{top:15px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}50%{top:0;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{top:0;}}.burger.__jsx-style-dynamic-selector span.show.__jsx-style-dynamic-selector{background-color:transparent;}.burger.__jsx-style-dynamic-selector span.show.__jsx-style-dynamic-selector:after{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:all 280ms ease-in-out 280ms;transition:all 280ms ease-in-out 280ms;top:0;-webkit-animation:560ms ease-in-out burder-bottom-__jsx-style-dynamic-selector;animation:560ms ease-in-out burder-bottom-__jsx-style-dynamic-selector;}.burger.__jsx-style-dynamic-selector span.show.__jsx-style-dynamic-selector:before{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:all 280ms ease-in-out 280ms;transition:all 280ms ease-in-out 280ms;top:0;-webkit-animation:560ms ease-in-out burder-top-__jsx-style-dynamic-selector;animation:560ms ease-in-out burder-top-__jsx-style-dynamic-selector;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcR2l0SHViXFxGaXJzdFJlYWN0QXBwXFxDb21wb25lbnRzXFxNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEd0IsQUFHb0MsQUFVQyxBQUtILEFBSUssQUFRQSxBQVdSLEFBV0MsQUFZRyxBQUlKLEFBSUEsQUFNRyxBQUtILEFBS0EsQUFJbUIsQUFJTCxBQVFDLE1BbkN6QixBQUlBLEFBVzJCLEFBSzNCLEdBVjJCLENBZDNCLENBdkJrQixBQVdBLEVBbEN0QixFQWZZLENBVTZCLEVBUzFCLEFBUUYsS0ExQmMsSUEyQk4sRUFSTCxBQW1CSCxBQVdGLEFBdUNYLE9BdENhLEVBWEMsR0FsQkssR0FPSixDQXVCQSxDQWpEZ0IsRUFzQ2hCLEtBOUJmLEVBbUJlLENBUGYsQUE4QmUsR0FYQSxPQVhHLENBdUJTLEdBWEEsR0F2Q0ssT0E0QkwsSUE4RGdCLEdBYnZDLEFBb0J1QyxHQTlDbkIsQUFxQnBCLEdBaENvQixRQXZDVSxFQTRCVixPQXVCeEIsR0FYQSxVQVhBLFFBNUJBLHVDQXlGVSxHQU9BLEdBTm9DLEdBT0gsZ0pBQzNDLEdBUEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxHaXRIdWJcXEZpcnN0UmVhY3RBcHBcXENvbXBvbmVudHNcXE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vaHR0cHM6Ly9naXRodWIuY29tL2FiYXRoODgvRmlyc3RSZWFjdEFwcFxyXG5cclxudmFyIG9iaiA9IHtcclxuICAgIGZvbnRzOiBbXHJcbiAgICAgICAgXHJcbiAgICBdXHJcbn1cclxuXHJcbmNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3c6ICF0aGlzLnN0YXRlLnNob3dcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVyZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvdyAmJiAnc2hvdyd9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjb2xvcnNcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VGb250fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzdHlsZT17e2ZvbnRGYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCJ9fSB2YWx1ZT1cIlRpbWVzIE5ldyBSb21hblwiPlRpbWVzIE5ldyBSb21hbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHN0eWxlPXt7Zm9udEZhbWlseTogXCJBcmlhbFwifX0gdmFsdWU9XCJBcmlhbFwiPkFyaWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gc3R5bGU9e3tmb250RmFtaWx5OiBcIkNhbGlicmlcIn19IHZhbHVlPVwiQ2FsaWJyaVwiPkNhbGlicmk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzdHlsZT17e2ZvbnRGYW1pbHk6IFwiQ29taWMgU2FucyBNU1wifX0gdmFsdWU9XCJDb21pYyBTYW5zIE1TXCI+Q29taWMgU2FucyBNUzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiY29sb3JzXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuY2hhbmdlQ29sb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVkXCI+cmVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJncmVlblwiPmdyZWVuPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJibHVlXCI+Ymx1ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGlua1wiPnBpbms8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4gXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1lbnUgPiB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMuc3RhdGUuc2hvdyA/ICdibG9jaycgOiAnbm9uZSd9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tZW51ID4gdWwgPiBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnVyZ2VyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ1cmdlciBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ1cmdlciBzcGFuOmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OlwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5idXJnZXIgc3BhbjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGJ1cmRlci10b3B7XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBidXJkZXItYm90dG9te1xyXG4gICAgICAgICAgICAgICAgICAgIDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwOyAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ1cmdlciBzcGFuLnNob3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5idXJnZXIgc3Bhbi5zaG93OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI4MG1zIGVhc2UtaW4tb3V0IDI4MG1zOyBcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogNTYwbXMgZWFzZS1pbi1vdXQgYnVyZGVyLWJvdHRvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnVyZ2VyIHNwYW4uc2hvdzpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI4MG1zIGVhc2UtaW4tb3V0IDI4MG1zOyBcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogNTYwbXMgZWFzZS1pbi1vdXQgYnVyZGVyLXRvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudSJdfQ== */\n/*@ sourceURL=C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Menu.js */")));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.70ee6624cb8ce6dbbf81.hot-update.js.map