webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/LayoutMain.js":
/*!*******************************!*\
  !*** ./layouts/LayoutMain.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/colors */ "./theme/colors.js");
var _jsxFileName = "/Users/callan/projects/colors/layouts/LayoutMain.js";





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "LayoutMain__Wrapper",
  componentId: "pccbax-0"
})(["height:100%;", ""], function (props) {
  return "\n    background-color: ".concat(_theme_colors__WEBPACK_IMPORTED_MODULE_4__["default"].backgrounds[props.backgroundColor] || props.backgroundColor, ";\n  ");
});

function LayoutMain(_ref) {
  var _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? 'white' : _ref$backgroundColor,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Title' : _ref$title,
      description = _ref.description,
      _ref$keywords = _ref.keywords,
      keywords = _ref$keywords === void 0 ? 'hex,color,code,to,name' : _ref$keywords,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    backgroundColor: backgroundColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "keywords",
    content: keywords,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), children);
}

LayoutMain.propTypes = {
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  keywords: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__["node"]
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutMain);

/***/ })

})
//# sourceMappingURL=index.js.27258e0d696e84cb9cef.hot-update.js.map