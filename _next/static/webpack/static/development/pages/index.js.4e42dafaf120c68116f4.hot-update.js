webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/home/Home.js":
/*!****************************!*\
  !*** ./pages/home/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color */ "./node_modules/color/index.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hex_color_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hex-color-regex */ "./node_modules/hex-color-regex/index.js");
/* harmony import */ var hex_color_regex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hex_color_regex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! use-debounce */ "./node_modules/use-debounce/lib/index.js");
/* harmony import */ var use_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(use_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_ink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-ink */ "./node_modules/react-ink/dist/ink.js");
/* harmony import */ var react_ink__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_ink__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layouts_LayoutMain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layouts/LayoutMain */ "./layouts/LayoutMain.js");
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Text */ "./components/Text.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Input */ "./components/Input.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Spinner */ "./components/Spinner.js");

var _jsxFileName = "/Users/callan/projects/colors/pages/home/Home.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Home__Wrapper",
  componentId: "sc-1sbsg8u-0"
})(["padding:20px;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;"]);
var InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Home__InputWrapper",
  componentId: "sc-1sbsg8u-1"
})(["margin-bottom:20px;display:flex;"]);
var StyledInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_Input__WEBPACK_IMPORTED_MODULE_11__["default"]).withConfig({
  displayName: "Home__StyledInput",
  componentId: "sc-1sbsg8u-2"
})(["max-width:170px;width:100%;margin:0 auto;"]);
var StyledChromePicker = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_color__WEBPACK_IMPORTED_MODULE_7__["ChromePicker"]).withConfig({
  displayName: "Home__StyledChromePicker",
  componentId: "sc-1sbsg8u-3"
})(["position:relative;z-index:10;"]);
var ColorName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Home__ColorName",
  componentId: "sc-1sbsg8u-4"
})(["padding:10px 20px;min-height:50px;border-radius:25px;box-shadow:0 5px 20px rgba(0,0,0,0.15);max-width:240px;width:100%;display:flex;align-items:center;justify-content:center;margin-bottom:20px;border:0;cursor:pointer;transition:200ms ease transform;position:relative;:hover,:focus,:active{outline:0;transform:scale(1.05);}", ""], function (props) {
  return "\n    background-color: ".concat(props.backgroundColor, ";\n  ");
});
var InputColor = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "Home__InputColor",
  componentId: "sc-1sbsg8u-5"
})(["height:50px;width:50px;border-radius:50%;margin-left:20px;box-shadow:0 5px 20px rgba(0,0,0,0.15);cursor:pointer;transition:200ms ease transform;border:0;position:relative;:hover,:focus,:active{outline:0;transform:scale(1.1);}", ""], function (props) {
  return "\n    background-color: ".concat(props.backgroundColor, ";\n    color: ").concat(props.color, ";\n  ");
});
var Picker = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Home__Picker",
  componentId: "sc-1sbsg8u-6"
})(["position:absolute;zIndex:10;"]);
var PickerBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Home__PickerBackdrop",
  componentId: "sc-1sbsg8u-7"
})(["position:fixed;top:0;left:0;right:0;bottom:0;"]);

function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isFetching = _useState2[0],
      setFetching = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      colorName = _useState6[0],
      setColorName = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      alternateColorName = _useState8[0],
      setAlternateColorName = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      value = _useState10[0],
      setValue = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isPickerOpen = _useState12[0],
      setPickerOpen = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isShowingAlternateColorName = _useState14[0],
      setShowingAlternateColorName = _useState14[1];

  var debouncedValue = Object(use_debounce__WEBPACK_IMPORTED_MODULE_5__["useDebounce"])(value, 300);
  var isValidHex = value.length === 6 && hex_color_regex__WEBPACK_IMPORTED_MODULE_4___default()().test("#".concat(value));
  var colorValue = isValidHex && color__WEBPACK_IMPORTED_MODULE_3___default()("#".concat(value));
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (debouncedValue.length === 6) {
      getColorName(debouncedValue);
    }
  }, [debouncedValue]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (false) {}
    var initialValue = randomcolor__WEBPACK_IMPORTED_MODULE_6___default()().slice(1);
    setValue(initialValue);
  }, [true]);

  function handleChangeValue(event) {
    handleChange(event.target.value);
  }

  function handleChangeColor(color) {
    handleChange(color.hex);
  }

  function handleChange(value) {
    var val = value;
    if (val.startsWith('#')) val = value.slice(1); // Remove the first letter

    if (val.length > 6) return; // Set a max character limit

    if (!new RegExp(/^\w*$/).test(val)) return; // Remove symbols etc.

    setValue(val);
    if (val.length < 6) setColorName(null); // Reset the color name
  }

  function getColorName(_x) {
    return _getColorName.apply(this, arguments);
  }

  function _getColorName() {
    _getColorName = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(hex) {
      var _alternateColorName, response, _ref, colors, _error;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setFetching(true);
              setColorName(null);
              setError(null);

              if (window.ntc) {
                _alternateColorName = window.ntc.name("#".concat(hex))[1];
                setAlternateColorName(_alternateColorName);
              }

              _context.prev = 4;
              _context.next = 7;
              return fetch("https://api.color.pizza/v1/".concat(hex));

            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.json();

            case 10:
              _ref = _context.sent;
              colors = _ref.colors;
              _error = _ref.error;
              if (_error) setError(_error.message);else setColorName(colors[0].name);
              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](4);
              // eslint-disable-next-line no-console
              console.warn(_context.t0);
              setError(_context.t0.toString());

            case 20:
              _context.prev = 20;
              setFetching(false);
              return _context.finish(20);

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[4, 16, 20, 23]]);
    }));
    return _getColorName.apply(this, arguments);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_LayoutMain__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledInput, {
    type: "text",
    name: "hex",
    onChange: handleChangeValue,
    autoComplete: "off",
    icon: "hashtag",
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InputColor, {
    onClick: function onClick() {
      return setPickerOpen(true);
    },
    backgroundColor: "#".concat(isValidHex ? value : 'ffffff'),
    color: colorValue && colorValue.isDark() && 'white' || 'black',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_ink__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  })), isPickerOpen && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Picker, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PickerBackdrop, {
    onClick: function onClick() {
      return setPickerOpen(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledChromePicker, {
    color: "#".concat(isValidHex ? value : 'ffffff'),
    onChange: handleChangeColor,
    disableAlpha: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColorName, {
    backgroundColor: error ? 'red' : colorValue ? colorValue.hex() : 'white',
    onClick: function onClick() {
      return setShowingAlternateColorName(!isShowingAlternateColorName);
    },
    as: alternateColorName === colorName ? 'div' : 'button',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_ink__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }), isFetching ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_12__["default"], {
    color: colorValue && colorValue.isDark() && 'white' || 'black',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }) : error ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "white",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, String(error)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: colorValue && colorValue.isDark() && 'white' || 'black',
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, isShowingAlternateColorName && alternateColorName || colorName || 'No color')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Text__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "#787c84",
    size: "xxs",
    align: "center",
    opacity: alternateColorName === colorName ? 0 : 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "Click the color name to view an alternate")));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/home/Home")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.4e42dafaf120c68116f4.hot-update.js.map