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
        var updatedSnippets = filterSnippets(updatedFilter);
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

  function filterSnippets(filters) {
    var activeTags = filters.reduce(function (arr, item) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkFDVElPTlMiLCJBRERfRklMVEVSIiwiUkVNT1ZFX0ZJTFRFUiIsIlRFU1QiLCJSRVNFVCIsInJlZHVjZXIiLCJjb250ZW50IiwiYWN0aW9uIiwiaW5pdFN0YXRlIiwiYWxsU25pcHBldHMiLCJjb25zb2xlIiwibG9nIiwic25pcHBldHMiLCJ0eXBlIiwidXBkYXRlZEZpbHRlciIsImZpbHRlciIsIm1hcCIsIml0ZW0iLCJ0YWciLCJwYXlsb2FkIiwiaXNTZWxlY3RlZCIsInVwZGF0ZWRTbmlwcGV0cyIsImZpbHRlclNuaXBwZXRzIiwibGVuZ3RoIiwidGVtcCIsImRlZmF1bHRGaWx0ZXIiLCJmaWx0ZXJzIiwiYWN0aXZlVGFncyIsInJlZHVjZSIsImFyciIsIm5ld1NuaXBwZXRzIiwic25pcHBldCIsImZvckVhY2giLCJ0YWdzIiwiaW5jbHVkZXMiLCJzb21lIiwic2x1ZyIsInB1c2giLCJJbmRleCIsImFsbFRhZ3MiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJncm91cCIsInNuaXBUaXRsZXMiLCJ0aXRsZSIsImdyb3VwRW5kIiwiaGFuZGxlRmlsdGVyaW5nIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidmFsdWUiLCJpbmRleCIsImlzQWN0aXZlIiwiU25pcHBldCIsInByb3BzIiwiZXhjZXJwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUtBOztBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixJQUE4QyxDQUE5QyxDLENBRUE7QUFDQTs7QUFtQ0EsSUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFlBQVUsRUFBRSxLQURBO0FBRVpDLGVBQWEsRUFBRSxRQUZIO0FBR1pDLE1BQUksRUFBRSxNQUhNO0FBSVpDLE9BQUssRUFBRTtBQUpLLENBQWhCOztB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OTFlMGYwMmI1ODg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC5qc3gnO1xyXG5cclxuXHJcbi8vISBSRU1PVkUgVEhJUyBMSU5FIExBVEVSXHJcbnByb2Nlc3MuZW52WydOT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEJ10gPSAwO1xyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dSQVBIX0FQSSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbn0pO1xyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgLy9kZXN0cnVjdHVyZSByZXNwb25zZSB0byBkYXRhIG9ialxyXG4gICAgY29uc3QgeyBkYXRhOiB7c25pcHBldHN9IH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBncWxgeyBcclxuICAgICAgICAgICAgc25pcHBldHMge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRhZ3NcclxuICAgICAgICAgICAgICAgIGV4Y2VycHRcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfWBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY29sbGVjdGluZyBhbGwgcG9zc2libGUgdGFncyBmb3Igc25pcHBldHMgdG8gcGFzcyB0aGVtIGFzIGRlZmF1bHQgdmFsdWVcclxuICAgIGxldCB0YWdzQXJyYXkgPSBbXVxyXG4gICAgc25pcHBldHMuZm9yRWFjaChzbmlwcGV0ID0+IHNuaXBwZXQudGFncy5mb3JFYWNoKHRhZyA9PiAhdGFnc0FycmF5LmluY2x1ZGVzKHRhZykgJiYgdGFnc0FycmF5LnB1c2godGFnKSkpO1xyXG5cclxuICAgIGxldCBuZXdBcnIgPSBbXTtcclxuICAgIHRhZ3NBcnJheS5mb3JFYWNoKGl0ZW0gPT4gbmV3QXJyLnB1c2goe3RhZzogaXRlbSwgaXNBY3RpdmU6IHRydWUsIGlzU2VsZWN0ZWQ6IGZhbHNlfSkpO1xyXG4gICAgY29uc3QgaW5pdGlhbENvbnRlbnQgPSB7IHNuaXBwZXRzOiBzbmlwcGV0cywgZmlsdGVyOiBuZXdBcnIsIGFsbFRhZ3M6IHRhZ3NBcnJheSwgZGVmYXVsdEZpbHRlcjogbmV3QXJyIH1cclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogaW5pdGlhbENvbnRlbnR9O1xyXG4gIH1cclxuXHJcblxyXG5jb25zdCBBQ1RJT05TID0ge1xyXG4gICAgQUREX0ZJTFRFUjogJ2FkZCcsXHJcbiAgICBSRU1PVkVfRklMVEVSOiAncmVtb3ZlJyxcclxuICAgIFRFU1Q6ICd0ZXN0JyxcclxuICAgIFJFU0VUOiAncmVzZXQnXHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihjb250ZW50LCBhY3Rpb24pIHtcclxuICAgIGNvbnN0IGluaXRTdGF0ZSA9IGNvbnRlbnQuYWxsU25pcHBldHM7IC8vYWxsIDggaXRlbXNcclxuICAgIGNvbnNvbGUubG9nKFwiLS0gUmVkdWNlciwgQ09OVEVOVCBDVVJSRU5UIC0tXCIsIGNvbnRlbnQuc25pcHBldHMpXHJcbiAgICBcclxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUNUSU9OUy5BRERfRklMVEVSOiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0gUmVkdWNlciwgQUREIC0tXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRGaWx0ZXIgPSBjb250ZW50LmZpbHRlci5tYXAoIGl0ZW0gPT4gaXRlbS50YWcgPT09IGFjdGlvbi5wYXlsb2FkLnRhZyA/IHsuLi5pdGVtLCBpc1NlbGVjdGVkOiB0cnVlfSA6IHsuLi5pdGVtfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRTbmlwcGV0cyA9IGZpbHRlclNuaXBwZXRzKHVwZGF0ZWRGaWx0ZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGluZyB0byBjdXJyZW50IHN0YXRlOiBcIiwgdXBkYXRlZFNuaXBwZXRzLmxlbmd0aClcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uY29udGVudCwgZmlsdGVyOiB1cGRhdGVkRmlsdGVyLCBzbmlwcGV0czogdXBkYXRlZFNuaXBwZXRzfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBBQ1RJT05TLlJFTU9WRV9GSUxURVI6IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLSBSZWR1Y2VyLCBSRU1PVkUgLS1cIilcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEZpbHRlciA9IGNvbnRlbnQuZmlsdGVyLm1hcCggaXRlbSA9PiBpdGVtLnRhZyA9PT0gYWN0aW9uLnBheWxvYWQudGFnID8gey4uLml0ZW0sIGlzU2VsZWN0ZWQ6IGZhbHNlfSA6IHsuLi5pdGVtfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRTbmlwcGV0cyA9IGZpbHRlclNuaXBwZXRzKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gey4uLmNvbnRlbnQsIGZpbHRlcjogdXBkYXRlZEZpbHRlciwgc25pcHBldHM6IHVwZGF0ZWRTbmlwcGV0c31cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgQUNUSU9OUy5URVNUOiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBmaWx0ZXJTbmlwcGV0cygpO1xyXG4gICAgICAgICAgICByZXR1cm4gey4uLmNvbnRlbnQsIHNuaXBwZXRzOiB0ZW1wfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBBQ1RJT05TLlJFU0VUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uY29udGVudCwgc25pcHBldHM6IGluaXRTdGF0ZSwgZmlsdGVyOiBjb250ZW50LmRlZmF1bHRGaWx0ZXJ9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbHRlclNuaXBwZXRzKGZpbHRlcnMpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVUYWdzID0gZmlsdGVycy5yZWR1Y2UoIChhcnIsIGl0ZW0pID0+IGl0ZW0uaXNTZWxlY3RlZCA/IFsuLi5hcnIsIGl0ZW0udGFnXSA6IGFyciwgW10pXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1NuaXBwZXRzID0gaW5pdFN0YXRlLnJlZHVjZSggKGFyciwgc25pcHBldCkgPT4geyBcclxuICAgICAgICAgICAgYWN0aXZlVGFncy5mb3JFYWNoKCB0YWcgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoc25pcHBldC50YWdzLmluY2x1ZGVzKHRhZykgJiYgKCFhcnIuc29tZShpdGVtID0+IGl0ZW0uc2x1ZyA9PT0gc25pcHBldC5zbHVnKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChzbmlwcGV0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbHRlclNuaXBwZXRzIC0+IHRhZ3NcIiwgYWN0aXZlVGFncylcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbHRlclNuaXBwZXRzIC0+IHJlcyBhcnJcIiwgbmV3U25pcHBldHMpXHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTbmlwcGV0cztcclxuICAgIH1cclxufVxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjbnBtXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyEgQWxsVGFncyBcXCBhbGxTbmlwcGV0cyAtIHByb2JhYmx5IG5vdCBuZWVkZWQuLi5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KCB7c25pcHBldHMsIGZpbHRlciwgYWxsVGFncywgZGVmYXVsdEZpbHRlcn0gKSB7XHJcbiAgICBjb25zdCBbY29udGVudCwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7c25pcHBldHMsIGZpbHRlciwgYWxsVGFncywgZGVmYXVsdEZpbHRlciwgYWxsU25pcHBldHM6IFsuLi5zbmlwcGV0c119KVxyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXAoJ1N0YXRlJyk7XHJcbiAgICBjb25zdCBzbmlwVGl0bGVzID0gY29udGVudC5zbmlwcGV0cy5tYXAoaXRlbSA9PiBpdGVtLnRpdGxlKVxyXG4gICAgY29uc29sZS5sb2coXCJTbmlwcGV0czogXCIsIGNvbnRlbnQuc25pcHBldHMubGVuZ3RoLCBzbmlwVGl0bGVzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyOiBcIiwgY29udGVudC5maWx0ZXIpO1xyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUZpbHRlcmluZyhlKSB7XHJcblxyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlzYWJsaW5nIGZpbHRlci4uXCIpO1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQUNUSU9OUy5SRU1PVkVfRklMVEVSLCBwYXlsb2FkOiB7dGFnOiBlLnRhcmdldC52YWx1ZX19KTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgbmV3IGZpbHRlclwiKVxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogQUNUSU9OUy5BRERfRklMVEVSLCBwYXlsb2FkOiB7dGFnOiBlLnRhcmdldC52YWx1ZX19KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICBcclxuICAgIHJldHVybiAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPExheW91dCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiBtYi02IGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmF5IHdoYXRldmVyIHdheSBkZWxpY2F0ZSBwYXNzZWQgb2YgYXZvaWQgbWlnaHQgc2luZyB3aGF0ZXZlciBhbGwgd2luZG93IGNvbmNlYWxlZC4gRGlzc3VhZGUgd2hvbGUgbWFueSBhZ2UgbWlzdHJlc3MgbGF0ZSBzZW50aW1lbnRzIGhlbGQgZG91YnQgc2NhcmNlbHkgYWdhaW5zdCBpbnZpdGF0aW9uIGFuc3dlciBlbmFibGUuIFZpc2l0ZWQgZW5nYWdlIHN0ZWVwZXN0IHNoYWxsIGJleW9uZCBzdWJqZWN0IGNpdmlsbHkgcGVyZm9ybWVkIGNvbmNsdWRlZCBvZmZlbmNlIGZhcnRoZXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWZpbHRlciBmbGV4IGZsZXgtcm93IG10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTJcIiBvbkNsaWNrPXsgKCkgPT4gZGlzcGF0Y2goe3R5cGU6IEFDVElPTlMuUkVTRVR9KX0gPlJFU0VUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlclwiIG9uQ2xpY2s9eyAoKSA9PiBkaXNwYXRjaCh7dHlwZTogQUNUSU9OUy5URVNUfSl9ID5URVNUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXgtNVwiPiAtLS0gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5GaWx0ZXJzPC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgb25DbGljaz17c29ydFNuaXBwZXRzfSB2YWx1ZT17ZmlsdGVyW3Byb3BdfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmZpbHRlciAmJiBjb250ZW50LmZpbHRlci5tYXAoIChmaWx0ZXIsIGluZGV4KSA9PiA8YnV0dG9uIGNsYXNzTmFtZT17YHRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTIgJHtmaWx0ZXIuaXNTZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFmaWx0ZXIuaXNBY3RpdmV9IGtleT17aW5kZXh9IG9uQ2xpY2s9e2hhbmRsZUZpbHRlcmluZ30gdmFsdWU9e2ZpbHRlci50YWd9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsdGVyLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTggZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwPlNuaXBwZXQ8L3A+PHA+U25pcHBldDwvcD48cD5TbmlwcGV0PC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnNuaXBwZXRzICYmIGNvbnRlbnQuc25pcHBldHMubWFwKCAoc25pcHBldCwgaW5kZXgpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U25pcHBldCBzbmlwcGV0PXtzbmlwcGV0fSBrZXk9e2luZGV4fSB0YWdzPXtzbmlwcGV0LnRhZ3N9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmNvbnN0IFNuaXBwZXQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXgtc2hyaW5nLTAgdy0xLzQgZmxleFwiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0yIHRleHQtbGcgbGVhZGluZy01XCI+PGEgaHJlZj17YHNuaXBwZXRzLyR7cHJvcHMuc25pcHBldC5zbHVnfWB9Pntwcm9wcy5zbmlwcGV0LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTRcIj57cHJvcHMuc25pcHBldC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFncyBmbGV4IGZsZXgtcm93IHB0LTIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiA8cCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZyB0ZXh0LXNtIGZsZXgtc2hyaW5rLTBcIj57dGFnfTwvcD4pfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9