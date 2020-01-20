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
  fonts: ["Times New Roman", "Arial", "Calibri", "Comic Sans MS", "Impact"]
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
      var _this2 = this;

      return __jsx("nav", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]) + " " + "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx("div", {
        onClick: this.handleClick,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]) + " " + "burger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]) + " " + (this.state.show && 'show' || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })), __jsx("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("select", {
        name: "colors",
        onChange: this.props.changeFont,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, obj.fonts.map(function (font) {
        return __jsx("option", {
          style: {
            fontFamily: font
          },
          value: font,
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, font);
      }))), __jsx("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx("select", {
        name: "colors",
        onChange: this.props.changeColor,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("option", {
        value: "red",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "red"), __jsx("option", {
        value: "green",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "green"), __jsx("option", {
        value: "blue",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "blue"), __jsx("option", {
        value: "pink",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["1508502665", [_this2.state.show ? 'block' : 'none']]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "pink")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1508502665",
        dynamic: [_this2.state.show ? 'block' : 'none'],
        __self: this
      }, ".menu.__jsx-style-dynamic-selector{position:fixed;right:0;background-color:white;border-top:2px solid black;border-left:2px solid black;border-bottom:2px solid black;}.menu.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector{list-style:none;display:".concat(this.state.show ? 'block' : 'none', ";}.menu.__jsx-style-dynamic-selector>ul.__jsx-style-dynamic-selector>li.__jsx-style-dynamic-selector{padding:30px;}.burger.__jsx-style-dynamic-selector{position:relative;width:52px;height:52px;cursor:pointer;}.burger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{position:absolute;top:25px;margin-left:12px;width:30px;height:2px;display:block;background-color:black;border-radius:100px;}.burger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{content:\"\";position:absolute;left:0px;top:-10px;width:30px;height:2px;background-color:black;border-radius:100px;}.burger.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:after{content:\"\";position:absolute;left:0;top:10px;width:30px;height:2px;background-color:black;border-radius:100px;}@-webkit-keyframes burder-top-__jsx-style-dynamic-selector{0%{top:-15px;}50%{top:0;}100%{top:0;}}@keyframes burder-top-__jsx-style-dynamic-selector{0%{top:-15px;}50%{top:0;}100%{top:0;}}@-webkit-keyframes burder-bottom-__jsx-style-dynamic-selector{0%{top:15px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}50%{top:0;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{top:0;}}@keyframes burder-bottom-__jsx-style-dynamic-selector{0%{top:15px;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}50%{top:0;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{top:0;}}.burger.__jsx-style-dynamic-selector span.show.__jsx-style-dynamic-selector{background-color:transparent;}.burger.__jsx-style-dynamic-selector span.show.__jsx-style-dynamic-selector:after{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:all 280ms ease-in-out 280ms;transition:all 280ms ease-in-out 280ms;top:0;-webkit-animation:560ms ease-in-out burder-bottom-__jsx-style-dynamic-selector;animation:560ms ease-in-out burder-bottom-__jsx-style-dynamic-selector;}.burger.__jsx-style-dynamic-selector span.show.__jsx-style-dynamic-selector:before{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:all 280ms ease-in-out 280ms;transition:all 280ms ease-in-out 280ms;top:0;-webkit-animation:560ms ease-in-out burder-top-__jsx-style-dynamic-selector;animation:560ms ease-in-out burder-top-__jsx-style-dynamic-selector;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFBcXERvY3VtZW50c1xcR2l0SHViXFxGaXJzdFJlYWN0QXBwXFxDb21wb25lbnRzXFxNZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ed0IsQUFHb0MsQUFVQyxBQUtILEFBSUssQUFRQSxBQVdSLEFBV0MsQUFZRyxBQUlKLEFBSUEsQUFNRyxBQUtILEFBS0EsQUFJbUIsQUFJTCxBQVFDLE1BbkN6QixBQUlBLEFBVzJCLEFBSzNCLEdBVjJCLENBZDNCLENBdkJrQixBQVdBLEVBbEN0QixFQWZZLENBVTZCLEVBUzFCLEFBUUYsS0ExQmMsSUEyQk4sRUFSTCxBQW1CSCxBQVdGLEFBdUNYLE9BdENhLEVBWEMsR0FsQkssR0FPSixDQXVCQSxDQWpEZ0IsRUFzQ2hCLEtBOUJmLEVBbUJlLENBUGYsQUE4QmUsR0FYQSxPQVhHLENBdUJTLEdBWEEsR0F2Q0ssT0E0QkwsSUE4RGdCLEdBYnZDLEFBb0J1QyxHQTlDbkIsQUFxQnBCLEdBaENvQixRQXZDVSxFQTRCVixPQXVCeEIsR0FYQSxVQVhBLFFBNUJBLHVDQXlGVSxHQU9BLEdBTm9DLEdBT0gsZ0pBQzNDLEdBUEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxIUFxcRG9jdW1lbnRzXFxHaXRIdWJcXEZpcnN0UmVhY3RBcHBcXENvbXBvbmVudHNcXE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vaHR0cHM6Ly9naXRodWIuY29tL2FiYXRoODgvRmlyc3RSZWFjdEFwcFxyXG5cclxudmFyIG9iaiA9IHtcclxuICAgIGZvbnRzOiBbXHJcbiAgICAgICAgXCJUaW1lcyBOZXcgUm9tYW5cIiwgXCJBcmlhbFwiLCBcIkNhbGlicmlcIiwgXCJDb21pYyBTYW5zIE1TXCIsIFwiSW1wYWN0XCJcclxuICAgIF0sXHJcbn1cclxuXHJcbmNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNob3c6ICF0aGlzLnN0YXRlLnNob3dcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVyZ2VyXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvdyAmJiAnc2hvdyd9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjb2xvcnNcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VGb250fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge29iai5mb250cy5tYXAoIGZvbnQgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udEZhbWlseTogZm9udH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb250fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb250fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+IFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJjb2xvcnNcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5jaGFuZ2VDb2xvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyZWRcIj5yZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdyZWVuXCI+Z3JlZW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJsdWVcIj5ibHVlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwaW5rXCI+cGluazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PiBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWVudSA+IHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5zdGF0ZS5zaG93ID8gJ2Jsb2NrJyA6ICdub25lJ307XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1lbnUgPiB1bCA+IGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5idXJnZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnVyZ2VyIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYnVyZ2VyIHNwYW46YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ1cmdlciBzcGFuOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgYnVyZGVyLXRvcHtcclxuICAgICAgICAgICAgICAgICAgICAwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGJ1cmRlci1ib3R0b217XHJcbiAgICAgICAgICAgICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7ICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnVyZ2VyIHNwYW4uc2hvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmJ1cmdlciBzcGFuLnNob3c6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjgwbXMgZWFzZS1pbi1vdXQgMjgwbXM7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDsgXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiA1NjBtcyBlYXNlLWluLW91dCBidXJkZXItYm90dG9tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5idXJnZXIgc3Bhbi5zaG93OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMjgwbXMgZWFzZS1pbi1vdXQgMjgwbXM7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDsgXHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiA1NjBtcyBlYXNlLWluLW91dCBidXJkZXItdG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51Il19 */\n/*@ sourceURL=C:\\Users\\HP\\Documents\\GitHub\\FirstReactApp\\Components\\Menu.js */")));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.89ab4924e5dec031f078.hot-update.js.map