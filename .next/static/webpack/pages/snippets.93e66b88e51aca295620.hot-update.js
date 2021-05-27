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
        console.log("Adding to current state: ", updatedSnippets.length);
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
    console.log("filterSnippets -> tags", activeTags);
    console.log("filterSnippets -> res arr", newSnippets);
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
              lineNumber: 134,
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
                lineNumber: 136,
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
                lineNumber: 137,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mx-5",
                children: " --- "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
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
                  lineNumber: 142,
                  columnNumber: 94
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-8 flex flex-row flex-wrap items-stretch",
            children: content.snippets && content.snippets.map(function (snippet, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Snippet, {
                snippet: snippet,
                tags: snippet.tags
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 154,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 129,
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
            lineNumber: 168,
            columnNumber: 56
          }, _this2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 17
        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-sm leading-4",
          children: props.snippet.excerpt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 17
        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "snippet-tags flex flex-row pt-2 flex-wrap",
          children: props.tags.map(function (tag, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "snippet-tag text-sm flex-shrink-0",
              children: tag
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 53
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 17
        }, _this2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkFDVElPTlMiLCJBRERfRklMVEVSIiwiUkVNT1ZFX0ZJTFRFUiIsIlRFU1QiLCJSRVNFVCIsInJlZHVjZXIiLCJjb250ZW50IiwiYWN0aW9uIiwiaW5pdFN0YXRlIiwiYWxsU25pcHBldHMiLCJjb25zb2xlIiwibG9nIiwic25pcHBldHMiLCJ0eXBlIiwidXBkYXRlZEZpbHRlciIsImZpbHRlciIsIm1hcCIsIml0ZW0iLCJ0YWciLCJwYXlsb2FkIiwiaXNTZWxlY3RlZCIsInVwZGF0ZWRTbmlwcGV0cyIsImZpbHRlclNuaXBwZXRzIiwibGVuZ3RoIiwidGVtcCIsImRlZmF1bHRGaWx0ZXIiLCJhY3RpdmVUYWdzIiwicmVkdWNlIiwiYXJyIiwibmV3U25pcHBldHMiLCJzbmlwcGV0IiwiZm9yRWFjaCIsInRhZ3MiLCJpbmNsdWRlcyIsInNvbWUiLCJzbHVnIiwicHVzaCIsIkluZGV4IiwiYWxsVGFncyIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsImdyb3VwIiwic25pcFRpdGxlcyIsInRpdGxlIiwiZ3JvdXBFbmQiLCJoYW5kbGVGaWx0ZXJpbmciLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ2YWx1ZSIsImluZGV4IiwiaXNBY3RpdmUiLCJTbmlwcGV0IiwicHJvcHMiLCJleGNlcnB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBS0E7O0FBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaLElBQThDLENBQTlDLEMsQ0FFQTtBQUNBOztBQW1DQSxJQUFNQyxPQUFPLEdBQUc7QUFDWkMsWUFBVSxFQUFFLEtBREE7QUFFWkMsZUFBYSxFQUFFLFFBRkg7QUFHWkMsTUFBSSxFQUFFLE1BSE07QUFJWkMsT0FBSyxFQUFFO0FBSkssQ0FBaEI7O0FBT0EsU0FBU0Ms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QTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQWlDSDs7R0F2RFFkLEs7O0tBQUFBLEs7O0FBeURULElBQU1nQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDdkIsc0JBQU87QUFBQSwyQkFDSDtBQUFLLGVBQVMsRUFBQyw4QkFBZjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNJO0FBQUksbUJBQVMsRUFBQyx3QkFBZDtBQUFBLGlDQUF1QztBQUFHLGdCQUFJLHFCQUFjQSxLQUFLLENBQUN4QixPQUFOLENBQWNLLElBQTVCLENBQVA7QUFBQSxzQkFBNENtQixLQUFLLENBQUN4QixPQUFOLENBQWNhO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUcsbUJBQVMsRUFBQyxtQkFBYjtBQUFBLG9CQUFrQ1csS0FBSyxDQUFDeEIsT0FBTixDQUFjeUI7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQUdJO0FBQU0sbUJBQVMsRUFBQywyQ0FBaEI7QUFBQSxvQkFDS0QsS0FBSyxDQUFDdEIsSUFBTixDQUFXaEIsR0FBWCxDQUFlLFVBQUNFLEdBQUQsRUFBTWlDLEtBQU47QUFBQSxnQ0FBZ0I7QUFBZSx1QkFBUyxFQUFDLG1DQUF6QjtBQUFBLHdCQUE4RGpDO0FBQTlELGVBQVFpQyxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQWhCO0FBQUEsV0FBZjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHLG1CQUFQO0FBV0gsQ0FaRDs7TUFBTUUsTzs7QUFjU2hCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NuaXBwZXRzLjkzZTY2Yjg4ZTUxYWNhMjk1NjIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC5qc3gnO1xyXG5cclxuXHJcbi8vISBSRU1PVkUgVEhJUyBMSU5FIExBVEVSXHJcbnByb2Nlc3MuZW52WydOT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEJ10gPSAwO1xyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dSQVBIX0FQSSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbn0pO1xyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgLy9kZXN0cnVjdHVyZSByZXNwb25zZSB0byBkYXRhIG9ialxyXG4gICAgY29uc3QgeyBkYXRhOiB7c25pcHBldHN9IH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBncWxgeyBcclxuICAgICAgICAgICAgc25pcHBldHMge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRhZ3NcclxuICAgICAgICAgICAgICAgIGV4Y2VycHRcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfWBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY29sbGVjdGluZyBhbGwgcG9zc2libGUgdGFncyBmb3Igc25pcHBldHMgdG8gcGFzcyB0aGVtIGFzIGRlZmF1bHQgdmFsdWVcclxuICAgIGxldCB0YWdzQXJyYXkgPSBbXVxyXG4gICAgc25pcHBldHMuZm9yRWFjaChzbmlwcGV0ID0+IHNuaXBwZXQudGFncy5mb3JFYWNoKHRhZyA9PiAhdGFnc0FycmF5LmluY2x1ZGVzKHRhZykgJiYgdGFnc0FycmF5LnB1c2godGFnKSkpO1xyXG5cclxuICAgIGxldCBuZXdBcnIgPSBbXTtcclxuICAgIHRhZ3NBcnJheS5mb3JFYWNoKGl0ZW0gPT4gbmV3QXJyLnB1c2goe3RhZzogaXRlbSwgaXNBY3RpdmU6IHRydWUsIGlzU2VsZWN0ZWQ6IGZhbHNlfSkpO1xyXG4gICAgY29uc3QgaW5pdGlhbENvbnRlbnQgPSB7IHNuaXBwZXRzOiBzbmlwcGV0cywgZmlsdGVyOiBuZXdBcnIsIGFsbFRhZ3M6IHRhZ3NBcnJheSwgZGVmYXVsdEZpbHRlcjogbmV3QXJyIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogaW5pdGlhbENvbnRlbnR9O1xyXG4gIH1cclxuXHJcblxyXG5jb25zdCBBQ1RJT05TID0ge1xyXG4gICAgQUREX0ZJTFRFUjogJ2FkZCcsXHJcbiAgICBSRU1PVkVfRklMVEVSOiAncmVtb3ZlJyxcclxuICAgIFRFU1Q6ICd0ZXN0JyxcclxuICAgIFJFU0VUOiAncmVzZXQnXHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihjb250ZW50LCBhY3Rpb24pIHtcclxuICAgIGNvbnN0IGluaXRTdGF0ZSA9IGNvbnRlbnQuYWxsU25pcHBldHM7IC8vYWxsIDggaXRlbXNcclxuICAgIGNvbnNvbGUubG9nKFwiLS0gUmVkdWNlciwgQ09OVEVOVCBDVVJSRU5UIC0tXCIsIGNvbnRlbnQuc25pcHBldHMpXHJcbiAgICBcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfRklMVEVSOiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0gUmVkdWNlciwgQUREIC0tXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRGaWx0ZXIgPSBjb250ZW50LmZpbHRlci5tYXAoIGl0ZW0gPT4gaXRlbS50YWcgPT09IGFjdGlvbi5wYXlsb2FkLnRhZyA/IHsuLi5pdGVtLCBpc1NlbGVjdGVkOiB0cnVlfSA6IHsuLi5pdGVtfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRTbmlwcGV0cyA9IGZpbHRlclNuaXBwZXRzKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIHRvIGN1cnJlbnQgc3RhdGU6IFwiLCB1cGRhdGVkU25pcHBldHMubGVuZ3RoKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5jb250ZW50LCBmaWx0ZXI6IHVwZGF0ZWRGaWx0ZXIsIHNuaXBwZXRzOiB1cGRhdGVkU25pcHBldHN9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFDVElPTlMuUkVNT1ZFX0ZJTFRFUjoge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tIFJlZHVjZXIsIFJFTU9WRSAtLVwiKVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRmlsdGVyID0gY29udGVudC5maWx0ZXIubWFwKCBpdGVtID0+IGl0ZW0udGFnID09PSBhY3Rpb24ucGF5bG9hZC50YWcgPyB7Li4uaXRlbSwgaXNTZWxlY3RlZDogZmFsc2V9IDogey4uLml0ZW19KTtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFNuaXBwZXRzID0gZmlsdGVyU25pcHBldHMoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uY29udGVudCwgZmlsdGVyOiB1cGRhdGVkRmlsdGVyLCBzbmlwcGV0czogdXBkYXRlZFNuaXBwZXRzfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBBQ1RJT05TLlRFU1Q6IHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IGZpbHRlclNuaXBwZXRzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uY29udGVudCwgc25pcHBldHM6IHRlbXB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFDVElPTlMuUkVTRVQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5jb250ZW50LCBzbmlwcGV0czogaW5pdFN0YXRlLCBmaWx0ZXI6IGNvbnRlbnQuZGVmYXVsdEZpbHRlcn1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsdGVyU25pcHBldHMoKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVGFncyA9IGNvbnRlbnQuZmlsdGVyLnJlZHVjZSggKGFyciwgaXRlbSkgPT4gaXRlbS5pc1NlbGVjdGVkID8gWy4uLmFyciwgaXRlbS50YWddIDogYXJyLCBbXSlcclxuXHJcbiAgICAgICAgY29uc3QgbmV3U25pcHBldHMgPSBpbml0U3RhdGUucmVkdWNlKCAoYXJyLCBzbmlwcGV0KSA9PiB7IFxyXG4gICAgICAgICAgICBhY3RpdmVUYWdzLmZvckVhY2goIHRhZyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihzbmlwcGV0LnRhZ3MuaW5jbHVkZXModGFnKSAmJiAoIWFyci5zb21lKGl0ZW0gPT4gaXRlbS5zbHVnID09PSBzbmlwcGV0LnNsdWcpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHNuaXBwZXQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBhcnI7XHJcbiAgICAgICAgfSwgW10pXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyU25pcHBldHMgLT4gdGFnc1wiLCBhY3RpdmVUYWdzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyU25pcHBldHMgLT4gcmVzIGFyclwiLCBuZXdTbmlwcGV0cylcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NuaXBwZXRzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNucG1cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vISBBbGxUYWdzIFxcIGFsbFNuaXBwZXRzIC0gcHJvYmFibHkgbm90IG5lZWRlZC4uLlxyXG5cclxuZnVuY3Rpb24gSW5kZXgoIHtzbmlwcGV0cywgZmlsdGVyLCBhbGxUYWdzLCBkZWZhdWx0RmlsdGVyfSApIHtcclxuICAgIGNvbnN0IFtjb250ZW50LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHtzbmlwcGV0cywgZmlsdGVyLCBhbGxUYWdzLCBkZWZhdWx0RmlsdGVyLCBhbGxTbmlwcGV0czogWy4uLnNuaXBwZXRzXX0pXHJcblxyXG4gICAgY29uc29sZS5ncm91cCgnU3RhdGUnKTtcclxuICAgIGNvbnN0IHNuaXBUaXRsZXMgPSBjb250ZW50LnNuaXBwZXRzLm1hcChpdGVtID0+IGl0ZW0udGl0bGUpXHJcbiAgICBjb25zb2xlLmxvZyhcIlNuaXBwZXRzOiBcIiwgY29udGVudC5zbmlwcGV0cy5sZW5ndGgsIHNuaXBUaXRsZXMpO1xyXG4gICAgY29uc29sZS5sb2coXCJGaWx0ZXI6IFwiLCBjb250ZW50LmZpbHRlcik7XHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRmlsdGVyaW5nKGUpIHtcclxuXHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEaXNhYmxpbmcgZmlsdGVyLi5cIik7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBBQ1RJT05TLlJFTU9WRV9GSUxURVIsIHBheWxvYWQ6IHt0YWc6IGUudGFyZ2V0LnZhbHVlfX0pO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGluZyBuZXcgZmlsdGVyXCIpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBBQ1RJT05TLkFERF9GSUxURVIsIHBheWxvYWQ6IHt0YWc6IGUudGFyZ2V0LnZhbHVlfX0pXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcmV0dXJuICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0ID5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sdW1uIG1iLTYgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTY0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OYXkgd2hhdGV2ZXIgd2F5IGRlbGljYXRlIHBhc3NlZCBvZiBhdm9pZCBtaWdodCBzaW5nIHdoYXRldmVyIGFsbCB3aW5kb3cgY29uY2VhbGVkLiBEaXNzdWFkZSB3aG9sZSBtYW55IGFnZSBtaXN0cmVzcyBsYXRlIHNlbnRpbWVudHMgaGVsZCBkb3VidCBzY2FyY2VseSBhZ2FpbnN0IGludml0YXRpb24gYW5zd2VyIGVuYWJsZS4gVmlzaXRlZCBlbmdhZ2Ugc3RlZXBlc3Qgc2hhbGwgYmV5b25kIHN1YmplY3QgY2l2aWxseSBwZXJmb3JtZWQgY29uY2x1ZGVkIG9mZmVuY2UgZmFydGhlci48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtZmlsdGVyIGZsZXggZmxleC1yb3cgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiIG9uQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogQUNUSU9OUy5SRVNFVH0pfSA+UkVTRVQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyXCIgb25DbGljaz17ICgpID0+IGRpc3BhdGNoKHt0eXBlOiBBQ1RJT05TLlRFU1R9KX0gPlRFU1Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteC01XCI+IC0tLSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPkZpbHRlcnM8L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTJcIiBvbkNsaWNrPXtzb3J0U25pcHBldHN9IHZhbHVlPXtmaWx0ZXJbcHJvcF19PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuZmlsdGVyICYmIGNvbnRlbnQuZmlsdGVyLm1hcCggKGZpbHRlciwgaW5kZXgpID0+IDxidXR0b24gY2xhc3NOYW1lPXtgdGFnIHB4LTIgcHktMSBib3JkZXIgbXItMiAke2ZpbHRlci5pc1NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWZpbHRlci5pc0FjdGl2ZX0ga2V5PXtpbmRleH0gb25DbGljaz17aGFuZGxlRmlsdGVyaW5nfSB2YWx1ZT17ZmlsdGVyLnRhZ30gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXIudGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+U25pcHBldDwvcD48cD5TbmlwcGV0PC9wPjxwPlNuaXBwZXQ8L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc25pcHBldHMgJiYgY29udGVudC5zbmlwcGV0cy5tYXAoIChzbmlwcGV0LCBpbmRleCkgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbmlwcGV0IHNuaXBwZXQ9e3NuaXBwZXR9IGtleT17aW5kZXh9IHRhZ3M9e3NuaXBwZXQudGFnc30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuY29uc3QgU25pcHBldCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCIgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTIgdGV4dC1sZyBsZWFkaW5nLTVcIj48YSBocmVmPXtgc25pcHBldHMvJHtwcm9wcy5zbmlwcGV0LnNsdWd9YH0+e3Byb3BzLnNuaXBwZXQudGl0bGV9PC9hPjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctNFwiPntwcm9wcy5zbmlwcGV0LmV4Y2VycHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic25pcHBldC10YWdzIGZsZXggZmxleC1yb3cgcHQtMiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMudGFncy5tYXAoKHRhZywgaW5kZXgpID0+IDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNuaXBwZXQtdGFnIHRleHQtc20gZmxleC1zaHJpbmstMFwiPnt0YWd9PC9wPil9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=