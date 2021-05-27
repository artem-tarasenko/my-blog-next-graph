webpackHotUpdate_N_E("pages/snippets",{

/***/ "./pages/snippets/index.js":
/*!*********************************!*\
  !*** ./pages/snippets/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout.jsx */ "./components/Layout.jsx");





var _jsxFileName = "C:\\Users\\tarasenko_ag\\Desktop\\blog\\MyBlog\\frontNextJs\\pages\\snippets\\index.js",
    _s = $RefreshSig$(),
    _this2 = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 //! REMOVE THIS LINE LATER

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; // ###############################################################
// ###############################################################

var ACTIONS = {
  ADD_FILTER: 'add',
  REMOVE_FILTER: 'remove',
  TEST: 'test',
  RESET: 'reset'
};

function reducer(content, action) {
  var initState = content.allSnippets; //all 8 items

  console.log("-- Reducer, CONTENT CURRENT --", content.snippets);

  switch (action.type) {
    case ACTIONS.ADD_FILTER:
      {
        console.log("-- Reducer, ADD --");
        var updatedFilter = content.filter.map(function (item) {
          return item.tag === action.payload.tag ? _objectSpread(_objectSpread({}, item), {}, {
            isSelected: true
          }) : _objectSpread({}, item);
        });
        var updatedSnippets = filterSnippets();
        return _objectSpread(_objectSpread({}, content), {}, {
          filter: updatedFilter,
          snippets: updatedSnippets
        });
      }

    case ACTIONS.REMOVE_FILTER:
      {
        console.log("-- Reducer, REMOVE --");

        var _updatedFilter = content.filter.map(function (item) {
          return item.tag === action.payload.tag ? _objectSpread(_objectSpread({}, item), {}, {
            isSelected: false
          }) : _objectSpread({}, item);
        });

        var _updatedSnippets = filterSnippets();

        return _objectSpread(_objectSpread({}, content), {}, {
          filter: _updatedFilter,
          snippets: _updatedSnippets
        });
      }

    case ACTIONS.TEST:
      {
        var temp = filterSnippets();
        return _objectSpread(_objectSpread({}, content), {}, {
          snippets: temp
        });
      }

    case ACTIONS.RESET:
      {
        return _objectSpread(_objectSpread({}, content), {}, {
          snippets: initState,
          filter: content.defaultFilter
        });
      }
  }

  function filterSnippets() {
    var activeTags = content.filter.reduce(function (arr, item) {
      return item.isSelected ? [].concat(Object(C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr), [item.tag]) : arr;
    }, []);
    var newSnippets = initState.reduce(function (arr, snippet) {
      activeTags.forEach(function (tag) {
        if (snippet.tags.includes(tag) && !arr.some(function (item) {
          return item.slug === snippet.slug;
        })) {
          arr.push(snippet);
        }
      });
      return arr;
    }, []);
    return newSnippets;
  }
} // ###############################################################npm
// ###############################################################
//! AllTags \ allSnippets - probably not needed...


function Index(_ref) {
  _s();

  var _this = this;

  var snippets = _ref.snippets,
      filter = _ref.filter,
      allTags = _ref.allTags,
      defaultFilter = _ref.defaultFilter;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, {
    snippets: snippets,
    filter: filter,
    allTags: allTags,
    defaultFilter: defaultFilter,
    allSnippets: Object(C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(snippets)
  }),
      content = _useReducer[0],
      dispatch = _useReducer[1];

  console.group('State');
  var snipTitles = content.snippets.map(function (item) {
    return item.title;
  });
  console.log("Snippets: ", content.snippets.length, snipTitles);
  console.log("Filter: ", content.filter);
  console.groupEnd();

  function handleFiltering(e) {
    if (e.target.classList.contains("selected")) {
      console.log("Disabling filter..");
      dispatch({
        type: ACTIONS.REMOVE_FILTER,
        payload: {
          tag: e.target.value
        }
      });
      return;
    } else {
      console.log("Adding new filter");
      dispatch({
        type: ACTIONS.ADD_FILTER,
        payload: {
          tag: e.target.value
        }
      });
      return;
    }

    ;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "flex flex-column mb-6 flex flex-col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "px-64",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Nay whatever way delicate passed of avoid might sing whatever all window concealed. Dissuade whole many age mistress late sentiments held doubt scarcely against invitation answer enable. Visited engage steepest shall beyond subject civilly performed concluded offence farther."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 29
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tags-filter flex flex-row mt-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "tag px-2 py-1 border mr-2",
                onClick: function onClick() {
                  return dispatch({
                    type: ACTIONS.RESET
                  });
                },
                children: "RESET"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "tag px-2 py-1 border",
                onClick: function onClick() {
                  return dispatch({
                    type: ACTIONS.TEST
                  });
                },
                children: "TEST"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mx-5",
                children: " --- "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 134,
                columnNumber: 33
              }, this), content.filter && content.filter.map(function (filter, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                  className: "tag px-2 py-1 border mr-2 ".concat(filter.isSelected ? 'selected' : ''),
                  disabled: !filter.isActive,
                  onClick: handleFiltering,
                  value: filter.tag,
                  children: filter.tag
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 94
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-8 flex flex-row flex-wrap items-stretch",
            children: content.snippets && content.snippets.map(function (snippet, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Snippet, {
                snippet: snippet,
                tags: snippet.tags
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 13
  }, this);
}

_s(Index, "AySTO3hrFnb8k/t2+qxelkHXsE4=");

_c = Index;

var Snippet = function Snippet(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-2 flex-shring-0 w-1/4 flex",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bg-gray-200 p-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "pb-2 text-lg leading-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "snippets/".concat(props.snippet.slug),
            children: props.snippet.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 56
          }, _this2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-sm leading-4",
          children: props.snippet.excerpt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 17
        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "snippet-tags flex flex-row pt-2 flex-wrap",
          children: props.tags.map(function (tag, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "snippet-tag text-sm flex-shrink-0",
              children: tag
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 53
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 17
        }, _this2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }, _this2)
  }, void 0, false);
};

_c2 = Snippet;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c, _c2;

$RefreshReg$(_c, "Index");
$RefreshReg$(_c2, "Snippet");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkFDVElPTlMiLCJBRERfRklMVEVSIiwiUkVNT1ZFX0ZJTFRFUiIsIlRFU1QiLCJSRVNFVCIsInJlZHVjZXIiLCJjb250ZW50IiwiYWN0aW9uIiwiaW5pdFN0YXRlIiwiYWxsU25pcHBldHMiLCJjb25zb2xlIiwibG9nIiwic25pcHBldHMiLCJ0eXBlIiwidXBkYXRlZEZpbHRlciIsImZpbHRlciIsIm1hcCIsIml0ZW0iLCJ0YWciLCJwYXlsb2FkIiwiaXNTZWxlY3RlZCIsInVwZGF0ZWRTbmlwcGV0cyIsImZpbHRlclNuaXBwZXRzIiwidGVtcCIsImRlZmF1bHRGaWx0ZXIiLCJhY3RpdmVUYWdzIiwicmVkdWNlIiwiYXJyIiwibmV3U25pcHBldHMiLCJzbmlwcGV0IiwiZm9yRWFjaCIsInRhZ3MiLCJpbmNsdWRlcyIsInNvbWUiLCJzbHVnIiwicHVzaCIsIkluZGV4IiwiYWxsVGFncyIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsImdyb3VwIiwic25pcFRpdGxlcyIsInRpdGxlIiwibGVuZ3RoIiwiZ3JvdXBFbmQiLCJoYW5kbGVGaWx0ZXJpbmciLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ2YWx1ZSIsImluZGV4IiwiaXNBY3RpdmUiLCJTbmlwcGV0IiwicHJvcHMiLCJleGNlcnB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBS0E7O0FBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaLElBQThDLENBQTlDLEMsQ0FFQTtBQUNBOztBQW1DQSxJQUFNQyxPQUFPLEdBQUc7QUFDWkMsWUFBVSxFQUFFLEtBREE7QUFFWkMsZUFBYSxFQUFFLFFBRkg7QUFHWkMsTUFBSSxFQUFFLE1BSE07QUFJWkMsT0FBSyxFQUFFO0FBSkssQ0FBaEI7O0FBT0EsU0FBU0MsT0FBVCxDQUFpQkMsT0FBakIsRUFBMEJDLE1BQTFCLEVBQWtDO0FBQzlCLE1BQU1DLFNBQVMsR0FBR0YsT0FBTyxDQUFDRyxXQUExQixDQUQ4QixDQUNTOztBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQVosRUFBOENMLE9BQU8sQ0FBQ00sUUFBdEQ7O0FBRUEsVUFBT0wsTUFBTSxDQUFDTSxJQUFkO0FBQ0ksU0FBS2IsT0FBTyxDQUFDQyxVQUFiO0FBQXlCO0FBQ3JCUyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBLFlBQU1HLGFBQWEsR0FBR1IsT0FBTyxDQUFDUyxNQUFSLENBQWVDLEdBQWYsQ0FBb0IsVUFBQUMsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUNDLEdBQUwsS0FBYVgsTUFBTSxDQUFDWSxPQUFQLENBQWVELEdBQTVCLG1DQUFzQ0QsSUFBdEM7QUFBNENHLHNCQUFVLEVBQUU7QUFBeEQsaUNBQW9FSCxJQUFwRSxDQUFKO0FBQUEsU0FBeEIsQ0FBdEI7QUFDQSxZQUFNSSxlQUFlLEdBQUdDLGNBQWMsRUFBdEM7QUFFQSwrQ0FBV2hCLE9BQVg7QUFBb0JTLGdCQUFNLEVBQUVELGFBQTVCO0FBQTJDRixrQkFBUSxFQUFFUztBQUFyRDtBQUNIOztBQUVELFNBQUtyQixPQUFPLENBQUNFLGFBQWI7QUFBNEI7QUFDeEJRLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaOztBQUNBLFlBQU1HLGNBQWEsR0FBR1IsT0FBTyxDQUFDUyxNQUFSLENBQWVDLEdBQWYsQ0FBb0IsVUFBQUMsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUNDLEdBQUwsS0FBYVgsTUFBTSxDQUFDWSxPQUFQLENBQWVELEdBQTVCLG1DQUFzQ0QsSUFBdEM7QUFBNENHLHNCQUFVLEVBQUU7QUFBeEQsaUNBQXFFSCxJQUFyRSxDQUFKO0FBQUEsU0FBeEIsQ0FBdEI7O0FBQ0EsWUFBTUksZ0JBQWUsR0FBR0MsY0FBYyxFQUF0Qzs7QUFFQSwrQ0FBV2hCLE9BQVg7QUFBb0JTLGdCQUFNLEVBQUVELGNBQTVCO0FBQTJDRixrQkFBUSxFQUFFUztBQUFyRDtBQUNIOztBQUVELFNBQUtyQixPQUFPLENBQUNHLElBQWI7QUFBbUI7QUFDZixZQUFNb0IsSUFBSSxHQUFHRCxjQUFjLEVBQTNCO0FBQ0EsK0NBQVdoQixPQUFYO0FBQW9CTSxrQkFBUSxFQUFFVztBQUE5QjtBQUNIOztBQUVELFNBQUt2QixPQUFPLENBQUNJLEtBQWI7QUFBb0I7QUFDaEIsK0NBQVdFLE9BQVg7QUFBb0JNLGtCQUFRLEVBQUVKLFNBQTlCO0FBQXlDTyxnQkFBTSxFQUFFVCxPQUFPLENBQUNrQjtBQUF6RDtBQUNIO0FBeEJMOztBQTJCQSxXQUFTRixjQUFULEdBQTBCO0FBQ3RCLFFBQU1HLFVBQVUsR0FBR25CLE9BQU8sQ0FBQ1MsTUFBUixDQUFlVyxNQUFmLENBQXVCLFVBQUNDLEdBQUQsRUFBTVYsSUFBTjtBQUFBLGFBQWVBLElBQUksQ0FBQ0csVUFBTCwyS0FBc0JPLEdBQXRCLElBQTJCVixJQUFJLENBQUNDLEdBQWhDLEtBQXVDUyxHQUF0RDtBQUFBLEtBQXZCLEVBQWtGLEVBQWxGLENBQW5CO0FBRUEsUUFBTUMsV0FBVyxHQUFHcEIsU0FBUyxDQUFDa0IsTUFBVixDQUFrQixVQUFDQyxHQUFELEVBQU1FLE9BQU4sRUFBa0I7QUFDcERKLGdCQUFVLENBQUNLLE9BQVgsQ0FBb0IsVUFBQVosR0FBRyxFQUFJO0FBQ3ZCLFlBQUdXLE9BQU8sQ0FBQ0UsSUFBUixDQUFhQyxRQUFiLENBQXNCZCxHQUF0QixLQUErQixDQUFDUyxHQUFHLENBQUNNLElBQUosQ0FBUyxVQUFBaEIsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUNpQixJQUFMLEtBQWNMLE9BQU8sQ0FBQ0ssSUFBMUI7QUFBQSxTQUFiLENBQW5DLEVBQWtGO0FBQzlFUCxhQUFHLENBQUNRLElBQUosQ0FBU04sT0FBVDtBQUNIO0FBQ0osT0FKRDtBQUtBLGFBQU9GLEdBQVA7QUFDSCxLQVBtQixFQU9qQixFQVBpQixDQUFwQjtBQVNBLFdBQU9DLFdBQVA7QUFDSDtBQUNKLEMsQ0FFRDtBQUNBO0FBQ0E7OztBQUVBLFNBQVNRLEtBQVQsT0FBNkQ7QUFBQTs7QUFBQTs7QUFBQSxNQUE1Q3hCLFFBQTRDLFFBQTVDQSxRQUE0QztBQUFBLE1BQWxDRyxNQUFrQyxRQUFsQ0EsTUFBa0M7QUFBQSxNQUExQnNCLE9BQTBCLFFBQTFCQSxPQUEwQjtBQUFBLE1BQWpCYixhQUFpQixRQUFqQkEsYUFBaUI7O0FBQUEsb0JBQzdCYyx3REFBVSxDQUFDakMsT0FBRCxFQUFVO0FBQUNPLFlBQVEsRUFBUkEsUUFBRDtBQUFXRyxVQUFNLEVBQU5BLE1BQVg7QUFBbUJzQixXQUFPLEVBQVBBLE9BQW5CO0FBQTRCYixpQkFBYSxFQUFiQSxhQUE1QjtBQUEyQ2YsZUFBVyxFQUFFLDhKQUFJRyxRQUFOO0FBQXRELEdBQVYsQ0FEbUI7QUFBQSxNQUNsRE4sT0FEa0Q7QUFBQSxNQUN6Q2lDLFFBRHlDOztBQUd6RDdCLFNBQU8sQ0FBQzhCLEtBQVIsQ0FBYyxPQUFkO0FBQ0EsTUFBTUMsVUFBVSxHQUFHbkMsT0FBTyxDQUFDTSxRQUFSLENBQWlCSSxHQUFqQixDQUFxQixVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDeUIsS0FBVDtBQUFBLEdBQXpCLENBQW5CO0FBQ0FoQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCTCxPQUFPLENBQUNNLFFBQVIsQ0FBaUIrQixNQUEzQyxFQUFtREYsVUFBbkQ7QUFDQS9CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JMLE9BQU8sQ0FBQ1MsTUFBaEM7QUFDQUwsU0FBTyxDQUFDa0MsUUFBUjs7QUFFQSxXQUFTQyxlQUFULENBQXlCQyxDQUF6QixFQUE0QjtBQUV4QixRQUFHQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsU0FBVCxDQUFtQkMsUUFBbkIsQ0FBNEIsVUFBNUIsQ0FBSCxFQUE0QztBQUN4Q3ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaO0FBQ0E0QixjQUFRLENBQUM7QUFBQzFCLFlBQUksRUFBRWIsT0FBTyxDQUFDRSxhQUFmO0FBQThCaUIsZUFBTyxFQUFFO0FBQUNELGFBQUcsRUFBRTRCLENBQUMsQ0FBQ0MsTUFBRixDQUFTRztBQUFmO0FBQXZDLE9BQUQsQ0FBUjtBQUNBO0FBQ0gsS0FKRCxNQUlPO0FBQ0h4QyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBNEIsY0FBUSxDQUFDO0FBQUMxQixZQUFJLEVBQUViLE9BQU8sQ0FBQ0MsVUFBZjtBQUEyQmtCLGVBQU8sRUFBRTtBQUFDRCxhQUFHLEVBQUU0QixDQUFDLENBQUNDLE1BQUYsQ0FBU0c7QUFBZjtBQUFwQyxPQUFELENBQVI7QUFDQTtBQUNIOztBQUFBO0FBQ0o7O0FBRUQsc0JBQVEscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBQ0kscUVBQUMsOERBQUQ7QUFBQSw2QkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwrQkFDQTtBQUFLLG1CQUFTLEVBQUMscUNBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBSyx1QkFBUyxFQUFDLGdDQUFmO0FBQUEsc0NBQ0k7QUFBUSx5QkFBUyxFQUFDLDJCQUFsQjtBQUE4Qyx1QkFBTyxFQUFHO0FBQUEseUJBQU1YLFFBQVEsQ0FBQztBQUFDMUIsd0JBQUksRUFBRWIsT0FBTyxDQUFDSTtBQUFmLG1CQUFELENBQWQ7QUFBQSxpQkFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFRLHlCQUFTLEVBQUMsc0JBQWxCO0FBQXlDLHVCQUFPLEVBQUc7QUFBQSx5QkFBTW1DLFFBQVEsQ0FBQztBQUFDMUIsd0JBQUksRUFBRWIsT0FBTyxDQUFDRztBQUFmLG1CQUFELENBQWQ7QUFBQSxpQkFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosZUFHSTtBQUFHLHlCQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISixFQU9RRyxPQUFPLENBQUNTLE1BQVIsSUFBa0JULE9BQU8sQ0FBQ1MsTUFBUixDQUFlQyxHQUFmLENBQW9CLFVBQUNELE1BQUQsRUFBU29DLEtBQVQ7QUFBQSxvQ0FBbUI7QUFBUSwyQkFBUyxzQ0FBK0JwQyxNQUFNLENBQUNLLFVBQVAsR0FBb0IsVUFBcEIsR0FBaUMsRUFBaEUsQ0FBakI7QUFDckQsMEJBQVEsRUFBRSxDQUFDTCxNQUFNLENBQUNxQyxRQURtQztBQUNiLHlCQUFPLEVBQUVQLGVBREk7QUFDYSx1QkFBSyxFQUFFOUIsTUFBTSxDQUFDRyxHQUQzQjtBQUFBLDRCQUVoREgsTUFBTSxDQUFDRztBQUZ5QyxtQkFDcEJpQyxLQURvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFuQjtBQUFBLGVBQXBCLENBUDFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUFrQkk7QUFBSyxxQkFBUyxFQUFDLDRDQUFmO0FBQUEsc0JBR1E3QyxPQUFPLENBQUNNLFFBQVIsSUFBb0JOLE9BQU8sQ0FBQ00sUUFBUixDQUFpQkksR0FBakIsQ0FBc0IsVUFBQ2EsT0FBRCxFQUFVc0IsS0FBVjtBQUFBLGtDQUN0QyxxRUFBQyxPQUFEO0FBQVMsdUJBQU8sRUFBRXRCLE9BQWxCO0FBQXVDLG9CQUFJLEVBQUVBLE9BQU8sQ0FBQ0U7QUFBckQsaUJBQWdDb0IsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEc0M7QUFBQSxhQUF0QjtBQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQWlDSDs7R0F2RFFmLEs7O0tBQUFBLEs7O0FBeURULElBQU1pQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDdkIsc0JBQU87QUFBQSwyQkFDSDtBQUFLLGVBQVMsRUFBQyw4QkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyx3QkFBZDtBQUFBLGlDQUF1QztBQUFHLGdCQUFJLHFCQUFjQSxLQUFLLENBQUN6QixPQUFOLENBQWNLLElBQTVCLENBQVA7QUFBQSxzQkFBNENvQixLQUFLLENBQUN6QixPQUFOLENBQWNhO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcsbUJBQVMsRUFBQyxtQkFBYjtBQUFBLG9CQUFrQ1ksS0FBSyxDQUFDekIsT0FBTixDQUFjMEI7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQU0sbUJBQVMsRUFBQywyQ0FBaEI7QUFBQSxvQkFDS0QsS0FBSyxDQUFDdkIsSUFBTixDQUFXZixHQUFYLENBQWUsVUFBQ0UsR0FBRCxFQUFNaUMsS0FBTjtBQUFBLGdDQUFnQjtBQUFlLHVCQUFTLEVBQUMsbUNBQXpCO0FBQUEsd0JBQThEakM7QUFBOUQsZUFBUWlDLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBaEI7QUFBQSxXQUFmO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsbUJBQVA7QUFXSCxDQVpEOztNQUFNRSxPOztBQWNTakIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc25pcHBldHMuMjhjY2I3NDkzNWIwNmNhMDhmZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzeCc7XHJcblxyXG5cclxuLy8hIFJFTU9WRSBUSElTIExJTkUgTEFURVJcclxucHJvY2Vzcy5lbnZbJ05PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQnXSA9IDA7XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgdXJpOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfR1JBUEhfQVBJLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxufSk7XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICAvL2Rlc3RydWN0dXJlIHJlc3BvbnNlIHRvIGRhdGEgb2JqXHJcbiAgICBjb25zdCB7IGRhdGE6IHtzbmlwcGV0c30gfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XHJcbiAgICAgICAgcXVlcnk6IGdxbGB7IFxyXG4gICAgICAgICAgICBzbmlwcGV0cyB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGFnc1xyXG4gICAgICAgICAgICAgICAgZXhjZXJwdFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICB9YFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jb2xsZWN0aW5nIGFsbCBwb3NzaWJsZSB0YWdzIGZvciBzbmlwcGV0cyB0byBwYXNzIHRoZW0gYXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgbGV0IHRhZ3NBcnJheSA9IFtdXHJcbiAgICBzbmlwcGV0cy5mb3JFYWNoKHNuaXBwZXQgPT4gc25pcHBldC50YWdzLmZvckVhY2godGFnID0+ICF0YWdzQXJyYXkuaW5jbHVkZXModGFnKSAmJiB0YWdzQXJyYXkucHVzaCh0YWcpKSk7XHJcblxyXG4gICAgbGV0IG5ld0FyciA9IFtdO1xyXG4gICAgdGFnc0FycmF5LmZvckVhY2goaXRlbSA9PiBuZXdBcnIucHVzaCh7dGFnOiBpdGVtLCBpc0FjdGl2ZTogdHJ1ZSwgaXNTZWxlY3RlZDogZmFsc2V9KSk7XHJcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9IHsgc25pcHBldHM6IHNuaXBwZXRzLCBmaWx0ZXI6IG5ld0FyciwgYWxsVGFnczogdGFnc0FycmF5LCBkZWZhdWx0RmlsdGVyOiBuZXdBcnIgfVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiBpbml0aWFsQ29udGVudH07XHJcbiAgfVxyXG5cclxuXHJcbmNvbnN0IEFDVElPTlMgPSB7XHJcbiAgICBBRERfRklMVEVSOiAnYWRkJyxcclxuICAgIFJFTU9WRV9GSUxURVI6ICdyZW1vdmUnLFxyXG4gICAgVEVTVDogJ3Rlc3QnLFxyXG4gICAgUkVTRVQ6ICdyZXNldCdcclxuICB9XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKGNvbnRlbnQsIGFjdGlvbikge1xyXG4gICAgY29uc3QgaW5pdFN0YXRlID0gY29udGVudC5hbGxTbmlwcGV0czsgLy9hbGwgOCBpdGVtc1xyXG4gICAgY29uc29sZS5sb2coXCItLSBSZWR1Y2VyLCBDT05URU5UIENVUlJFTlQgLS1cIiwgY29udGVudC5zbmlwcGV0cylcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9GSUxURVI6IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLSBSZWR1Y2VyLCBBREQgLS1cIilcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEZpbHRlciA9IGNvbnRlbnQuZmlsdGVyLm1hcCggaXRlbSA9PiBpdGVtLnRhZyA9PT0gYWN0aW9uLnBheWxvYWQudGFnID8gey4uLml0ZW0sIGlzU2VsZWN0ZWQ6IHRydWV9IDogey4uLml0ZW19KTtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFNuaXBwZXRzID0gZmlsdGVyU25pcHBldHMoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uY29udGVudCwgZmlsdGVyOiB1cGRhdGVkRmlsdGVyLCBzbmlwcGV0czogdXBkYXRlZFNuaXBwZXRzfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBBQ1RJT05TLlJFTU9WRV9GSUxURVI6IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLSBSZWR1Y2VyLCBSRU1PVkUgLS1cIilcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEZpbHRlciA9IGNvbnRlbnQuZmlsdGVyLm1hcCggaXRlbSA9PiBpdGVtLnRhZyA9PT0gYWN0aW9uLnBheWxvYWQudGFnID8gey4uLml0ZW0sIGlzU2VsZWN0ZWQ6IGZhbHNlfSA6IHsuLi5pdGVtfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRTbmlwcGV0cyA9IGZpbHRlclNuaXBwZXRzKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gey4uLmNvbnRlbnQsIGZpbHRlcjogdXBkYXRlZEZpbHRlciwgc25pcHBldHM6IHVwZGF0ZWRTbmlwcGV0c31cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgQUNUSU9OUy5URVNUOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBmaWx0ZXJTbmlwcGV0cygpO1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLmNvbnRlbnQsIHNuaXBwZXRzOiB0ZW1wfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBBQ1RJT05TLlJFU0VUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uY29udGVudCwgc25pcHBldHM6IGluaXRTdGF0ZSwgZmlsdGVyOiBjb250ZW50LmRlZmF1bHRGaWx0ZXJ9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbHRlclNuaXBwZXRzKCkge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhZ3MgPSBjb250ZW50LmZpbHRlci5yZWR1Y2UoIChhcnIsIGl0ZW0pID0+IGl0ZW0uaXNTZWxlY3RlZCA/IFsuLi5hcnIsIGl0ZW0udGFnXSA6IGFyciwgW10pXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1NuaXBwZXRzID0gaW5pdFN0YXRlLnJlZHVjZSggKGFyciwgc25pcHBldCkgPT4geyBcclxuICAgICAgICAgICAgYWN0aXZlVGFncy5mb3JFYWNoKCB0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoc25pcHBldC50YWdzLmluY2x1ZGVzKHRhZykgJiYgKCFhcnIuc29tZShpdGVtID0+IGl0ZW0uc2x1ZyA9PT0gc25pcHBldC5zbHVnKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChzbmlwcGV0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3U25pcHBldHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI25wbVxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8hIEFsbFRhZ3MgXFwgYWxsU25pcHBldHMgLSBwcm9iYWJseSBub3QgbmVlZGVkLi4uXHJcblxyXG5mdW5jdGlvbiBJbmRleCgge3NuaXBwZXRzLCBmaWx0ZXIsIGFsbFRhZ3MsIGRlZmF1bHRGaWx0ZXJ9ICkge1xyXG4gICAgY29uc3QgW2NvbnRlbnQsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge3NuaXBwZXRzLCBmaWx0ZXIsIGFsbFRhZ3MsIGRlZmF1bHRGaWx0ZXIsIGFsbFNuaXBwZXRzOiBbLi4uc25pcHBldHNdfSlcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwKCdTdGF0ZScpO1xyXG4gICAgY29uc3Qgc25pcFRpdGxlcyA9IGNvbnRlbnQuc25pcHBldHMubWFwKGl0ZW0gPT4gaXRlbS50aXRsZSlcclxuICAgIGNvbnNvbGUubG9nKFwiU25pcHBldHM6IFwiLCBjb250ZW50LnNuaXBwZXRzLmxlbmd0aCwgc25pcFRpdGxlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlcjogXCIsIGNvbnRlbnQuZmlsdGVyKTtcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVGaWx0ZXJpbmcoZSkge1xyXG5cclxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpc2FibGluZyBmaWx0ZXIuLlwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFDVElPTlMuUkVNT1ZFX0ZJTFRFUiwgcGF5bG9hZDoge3RhZzogZS50YXJnZXQudmFsdWV9fSk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIG5ldyBmaWx0ZXJcIilcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFDVElPTlMuQUREX0ZJTFRFUiwgcGF5bG9hZDoge3RhZzogZS50YXJnZXQudmFsdWV9fSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgXHJcbiAgICByZXR1cm4gIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW4gbWItNiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5heSB3aGF0ZXZlciB3YXkgZGVsaWNhdGUgcGFzc2VkIG9mIGF2b2lkIG1pZ2h0IHNpbmcgd2hhdGV2ZXIgYWxsIHdpbmRvdyBjb25jZWFsZWQuIERpc3N1YWRlIHdob2xlIG1hbnkgYWdlIG1pc3RyZXNzIGxhdGUgc2VudGltZW50cyBoZWxkIGRvdWJ0IHNjYXJjZWx5IGFnYWluc3QgaW52aXRhdGlvbiBhbnN3ZXIgZW5hYmxlLiBWaXNpdGVkIGVuZ2FnZSBzdGVlcGVzdCBzaGFsbCBiZXlvbmQgc3ViamVjdCBjaXZpbGx5IHBlcmZvcm1lZCBjb25jbHVkZWQgb2ZmZW5jZSBmYXJ0aGVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1maWx0ZXIgZmxleCBmbGV4LXJvdyBtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgb25DbGljaz17ICgpID0+IGRpc3BhdGNoKHt0eXBlOiBBQ1RJT05TLlJFU0VUfSl9ID5SRVNFVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXJcIiBvbkNsaWNrPXsgKCkgPT4gZGlzcGF0Y2goe3R5cGU6IEFDVElPTlMuVEVTVH0pfSA+VEVTVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTVcIj4gLS0tIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+RmlsdGVyczwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiIG9uQ2xpY2s9e3NvcnRTbmlwcGV0c30gdmFsdWU9e2ZpbHRlcltwcm9wXX0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5maWx0ZXIgJiYgY29udGVudC5maWx0ZXIubWFwKCAoZmlsdGVyLCBpbmRleCkgPT4gPGJ1dHRvbiBjbGFzc05hbWU9e2B0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yICR7ZmlsdGVyLmlzU2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZmlsdGVyLmlzQWN0aXZlfSBrZXk9e2luZGV4fSBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJpbmd9IHZhbHVlPXtmaWx0ZXIudGFnfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlci50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC04IGZsZXggZmxleC1yb3cgZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5TbmlwcGV0PC9wPjxwPlNuaXBwZXQ8L3A+PHA+U25pcHBldDwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zbmlwcGV0cyAmJiBjb250ZW50LnNuaXBwZXRzLm1hcCggKHNuaXBwZXQsIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNuaXBwZXQgc25pcHBldD17c25pcHBldH0ga2V5PXtpbmRleH0gdGFncz17c25pcHBldC50YWdzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5jb25zdCBTbmlwcGV0ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4LXNocmluZy0wIHctMS80IGZsZXhcIiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWxnIGxlYWRpbmctNVwiPjxhIGhyZWY9e2BzbmlwcGV0cy8ke3Byb3BzLnNuaXBwZXQuc2x1Z31gfT57cHJvcHMuc25pcHBldC50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3Byb3BzLnNuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZ3MgZmxleCBmbGV4LXJvdyBwdC0yIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy50YWdzLm1hcCgodGFnLCBpbmRleCkgPT4gPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic25pcHBldC10YWcgdGV4dC1zbSBmbGV4LXNocmluay0wXCI+e3RhZ308L3A+KX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==