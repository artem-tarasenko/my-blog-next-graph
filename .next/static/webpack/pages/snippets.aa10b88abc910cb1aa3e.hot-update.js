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
    var _filters$reduce;

    var activeTags = (_filters$reduce = filters.reduce(function (arr, item) {
      return item.isSelected ? [].concat(Object(C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr), [item.tag]) : arr;
    }, [])) !== null && _filters$reduce !== void 0 ? _filters$reduce : content.defaultFilter;
    console.log("filterSnippets -> tags", activeTags);
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
              lineNumber: 136,
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
                lineNumber: 138,
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
                lineNumber: 139,
                columnNumber: 33
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "mx-5",
                children: " --- "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
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
                  lineNumber: 144,
                  columnNumber: 94
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-8 flex flex-row flex-wrap items-stretch",
            children: content.snippets && content.snippets.map(function (snippet, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Snippet, {
                snippet: snippet,
                tags: snippet.tags
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 37
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 131,
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
            lineNumber: 170,
            columnNumber: 56
          }, _this2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 17
        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "text-sm leading-4",
          children: props.snippet.excerpt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 17
        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "snippet-tags flex flex-row pt-2 flex-wrap",
          children: props.tags.map(function (tag, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "snippet-tag text-sm flex-shrink-0",
              children: tag
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 53
            }, _this2);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }, _this2)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }, _this2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkFDVElPTlMiLCJBRERfRklMVEVSIiwiUkVNT1ZFX0ZJTFRFUiIsIlRFU1QiLCJSRVNFVCIsInJlZHVjZXIiLCJjb250ZW50IiwiYWN0aW9uIiwiaW5pdFN0YXRlIiwiYWxsU25pcHBldHMiLCJjb25zb2xlIiwibG9nIiwic25pcHBldHMiLCJ0eXBlIiwidXBkYXRlZEZpbHRlciIsImZpbHRlciIsIm1hcCIsIml0ZW0iLCJ0YWciLCJwYXlsb2FkIiwiaXNTZWxlY3RlZCIsInVwZGF0ZWRTbmlwcGV0cyIsImZpbHRlclNuaXBwZXRzIiwibGVuZ3RoIiwidGVtcCIsImRlZmF1bHRGaWx0ZXIiLCJmaWx0ZXJzIiwiYWN0aXZlVGFncyIsInJlZHVjZSIsImFyciIsIm5ld1NuaXBwZXRzIiwic25pcHBldCIsImZvckVhY2giLCJ0YWdzIiwiaW5jbHVkZXMiLCJzb21lIiwic2x1ZyIsInB1c2giLCJJbmRleCIsImFsbFRhZ3MiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJncm91cCIsInNuaXBUaXRsZXMiLCJ0aXRsZSIsImdyb3VwRW5kIiwiaGFuZGxlRmlsdGVyaW5nIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidmFsdWUiLCJpbmRleCIsImlzQWN0aXZlIiwiU25pcHBldCIsInByb3BzIiwiZXhjZXJwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUtBOztBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixJQUE4QyxDQUE5QyxDLENBRUE7QUFDQTs7QUFtQ0EsSUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFlBQVUsRUFBRSxLQURBO0FBRVpDLGVBQWEsRUFBRSxRQUZIO0FBR1pDLE1BQUksRUFBRSxNQUhNO0FBSVpDLE9BQUssRUFBRTtBQUpLLENBQWhCOztB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L3dlYnBhY2svcGFnZXMvc25pcHBldHMuYWExMGI4OGFiYzkxMGNiMWFhM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzeCc7XHJcblxyXG5cclxuLy8hIFJFTU9WRSBUSElTIExJTkUgTEFURVJcclxucHJvY2Vzcy5lbnZbJ05PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQnXSA9IDA7XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgdXJpOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfR1JBUEhfQVBJLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxufSk7XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICAvL2Rlc3RydWN0dXJlIHJlc3BvbnNlIHRvIGRhdGEgb2JqXHJcbiAgICBjb25zdCB7IGRhdGE6IHtzbmlwcGV0c30gfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XHJcbiAgICAgICAgcXVlcnk6IGdxbGB7IFxyXG4gICAgICAgICAgICBzbmlwcGV0cyB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGFnc1xyXG4gICAgICAgICAgICAgICAgZXhjZXJwdFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICB9YFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jb2xsZWN0aW5nIGFsbCBwb3NzaWJsZSB0YWdzIGZvciBzbmlwcGV0cyB0byBwYXNzIHRoZW0gYXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgbGV0IHRhZ3NBcnJheSA9IFtdXHJcbiAgICBzbmlwcGV0cy5mb3JFYWNoKHNuaXBwZXQgPT4gc25pcHBldC50YWdzLmZvckVhY2godGFnID0+ICF0YWdzQXJyYXkuaW5jbHVkZXModGFnKSAmJiB0YWdzQXJyYXkucHVzaCh0YWcpKSk7XHJcblxyXG4gICAgbGV0IG5ld0FyciA9IFtdO1xyXG4gICAgdGFnc0FycmF5LmZvckVhY2goaXRlbSA9PiBuZXdBcnIucHVzaCh7dGFnOiBpdGVtLCBpc0FjdGl2ZTogdHJ1ZSwgaXNTZWxlY3RlZDogZmFsc2V9KSk7XHJcbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9IHsgc25pcHBldHM6IHNuaXBwZXRzLCBmaWx0ZXI6IG5ld0FyciwgYWxsVGFnczogdGFnc0FycmF5LCBkZWZhdWx0RmlsdGVyOiBuZXdBcnIgfVxyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiBpbml0aWFsQ29udGVudH07XHJcbiAgfVxyXG5cclxuXHJcbmNvbnN0IEFDVElPTlMgPSB7XHJcbiAgICBBRERfRklMVEVSOiAnYWRkJyxcclxuICAgIFJFTU9WRV9GSUxURVI6ICdyZW1vdmUnLFxyXG4gICAgVEVTVDogJ3Rlc3QnLFxyXG4gICAgUkVTRVQ6ICdyZXNldCdcclxuICB9XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKGNvbnRlbnQsIGFjdGlvbikge1xyXG4gICAgY29uc3QgaW5pdFN0YXRlID0gY29udGVudC5hbGxTbmlwcGV0czsgLy9hbGwgOCBpdGVtc1xyXG4gICAgY29uc29sZS5sb2coXCItLSBSZWR1Y2VyLCBDT05URU5UIENVUlJFTlQgLS1cIiwgY29udGVudC5zbmlwcGV0cylcclxuICAgIFxyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBQ1RJT05TLkFERF9GSUxURVI6IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLSBSZWR1Y2VyLCBBREQgLS1cIilcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEZpbHRlciA9IGNvbnRlbnQuZmlsdGVyLm1hcCggaXRlbSA9PiBpdGVtLnRhZyA9PT0gYWN0aW9uLnBheWxvYWQudGFnID8gey4uLml0ZW0sIGlzU2VsZWN0ZWQ6IHRydWV9IDogey4uLml0ZW19KTtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFNuaXBwZXRzID0gZmlsdGVyU25pcHBldHModXBkYXRlZEZpbHRlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIHRvIGN1cnJlbnQgc3RhdGU6IFwiLCB1cGRhdGVkU25pcHBldHMubGVuZ3RoKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5jb250ZW50LCBmaWx0ZXI6IHVwZGF0ZWRGaWx0ZXIsIHNuaXBwZXRzOiB1cGRhdGVkU25pcHBldHN9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFDVElPTlMuUkVNT1ZFX0ZJTFRFUjoge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tIFJlZHVjZXIsIFJFTU9WRSAtLVwiKVxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRmlsdGVyID0gY29udGVudC5maWx0ZXIubWFwKCBpdGVtID0+IGl0ZW0udGFnID09PSBhY3Rpb24ucGF5bG9hZC50YWcgPyB7Li4uaXRlbSwgaXNTZWxlY3RlZDogZmFsc2V9IDogey4uLml0ZW19KTtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFNuaXBwZXRzID0gZmlsdGVyU25pcHBldHMoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uY29udGVudCwgZmlsdGVyOiB1cGRhdGVkRmlsdGVyLCBzbmlwcGV0czogdXBkYXRlZFNuaXBwZXRzfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBBQ1RJT05TLlRFU1Q6IHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IGZpbHRlclNuaXBwZXRzKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uY29udGVudCwgc25pcHBldHM6IHRlbXB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFDVElPTlMuUkVTRVQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHsuLi5jb250ZW50LCBzbmlwcGV0czogaW5pdFN0YXRlLCBmaWx0ZXI6IGNvbnRlbnQuZGVmYXVsdEZpbHRlcn1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsdGVyU25pcHBldHMoZmlsdGVycykge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVRhZ3MgPSBmaWx0ZXJzLnJlZHVjZSggKGFyciwgaXRlbSkgPT4gaXRlbS5pc1NlbGVjdGVkID8gWy4uLmFyciwgaXRlbS50YWddIDogYXJyLCBbXSkgPz8gY29udGVudC5kZWZhdWx0RmlsdGVyXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaWx0ZXJTbmlwcGV0cyAtPiB0YWdzXCIsIGFjdGl2ZVRhZ3MpXHJcblxyXG5cclxuICAgICAgICBjb25zdCBuZXdTbmlwcGV0cyA9IGluaXRTdGF0ZS5yZWR1Y2UoIChhcnIsIHNuaXBwZXQpID0+IHsgXHJcbiAgICAgICAgICAgIGFjdGl2ZVRhZ3MuZm9yRWFjaCggdGFnID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHNuaXBwZXQudGFncy5pbmNsdWRlcyh0YWcpICYmICghYXJyLnNvbWUoaXRlbSA9PiBpdGVtLnNsdWcgPT09IHNuaXBwZXQuc2x1ZykpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goc25pcHBldClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICB9LCBbXSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmaWx0ZXJTbmlwcGV0cyAtPiByZXMgYXJyXCIsIG5ld1NuaXBwZXRzKVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3U25pcHBldHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI25wbVxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8hIEFsbFRhZ3MgXFwgYWxsU25pcHBldHMgLSBwcm9iYWJseSBub3QgbmVlZGVkLi4uXHJcblxyXG5mdW5jdGlvbiBJbmRleCgge3NuaXBwZXRzLCBmaWx0ZXIsIGFsbFRhZ3MsIGRlZmF1bHRGaWx0ZXJ9ICkge1xyXG4gICAgY29uc3QgW2NvbnRlbnQsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge3NuaXBwZXRzLCBmaWx0ZXIsIGFsbFRhZ3MsIGRlZmF1bHRGaWx0ZXIsIGFsbFNuaXBwZXRzOiBbLi4uc25pcHBldHNdfSlcclxuXHJcbiAgICBjb25zb2xlLmdyb3VwKCdTdGF0ZScpO1xyXG4gICAgY29uc3Qgc25pcFRpdGxlcyA9IGNvbnRlbnQuc25pcHBldHMubWFwKGl0ZW0gPT4gaXRlbS50aXRsZSlcclxuICAgIGNvbnNvbGUubG9nKFwiU25pcHBldHM6IFwiLCBjb250ZW50LnNuaXBwZXRzLmxlbmd0aCwgc25pcFRpdGxlcyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZpbHRlcjogXCIsIGNvbnRlbnQuZmlsdGVyKTtcclxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVGaWx0ZXJpbmcoZSkge1xyXG5cclxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpc2FibGluZyBmaWx0ZXIuLlwiKTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFDVElPTlMuUkVNT1ZFX0ZJTFRFUiwgcGF5bG9hZDoge3RhZzogZS50YXJnZXQudmFsdWV9fSk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIG5ldyBmaWx0ZXJcIilcclxuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IEFDVElPTlMuQUREX0ZJTFRFUiwgcGF5bG9hZDoge3RhZzogZS50YXJnZXQudmFsdWV9fSlcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgXHJcbiAgICByZXR1cm4gIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW4gbWItNiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5heSB3aGF0ZXZlciB3YXkgZGVsaWNhdGUgcGFzc2VkIG9mIGF2b2lkIG1pZ2h0IHNpbmcgd2hhdGV2ZXIgYWxsIHdpbmRvdyBjb25jZWFsZWQuIERpc3N1YWRlIHdob2xlIG1hbnkgYWdlIG1pc3RyZXNzIGxhdGUgc2VudGltZW50cyBoZWxkIGRvdWJ0IHNjYXJjZWx5IGFnYWluc3QgaW52aXRhdGlvbiBhbnN3ZXIgZW5hYmxlLiBWaXNpdGVkIGVuZ2FnZSBzdGVlcGVzdCBzaGFsbCBiZXlvbmQgc3ViamVjdCBjaXZpbGx5IHBlcmZvcm1lZCBjb25jbHVkZWQgb2ZmZW5jZSBmYXJ0aGVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1maWx0ZXIgZmxleCBmbGV4LXJvdyBtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgb25DbGljaz17ICgpID0+IGRpc3BhdGNoKHt0eXBlOiBBQ1RJT05TLlJFU0VUfSl9ID5SRVNFVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXJcIiBvbkNsaWNrPXsgKCkgPT4gZGlzcGF0Y2goe3R5cGU6IEFDVElPTlMuVEVTVH0pfSA+VEVTVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm14LTVcIj4gLS0tIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+RmlsdGVyczwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiIG9uQ2xpY2s9e3NvcnRTbmlwcGV0c30gdmFsdWU9e2ZpbHRlcltwcm9wXX0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5maWx0ZXIgJiYgY29udGVudC5maWx0ZXIubWFwKCAoZmlsdGVyLCBpbmRleCkgPT4gPGJ1dHRvbiBjbGFzc05hbWU9e2B0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yICR7ZmlsdGVyLmlzU2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshZmlsdGVyLmlzQWN0aXZlfSBrZXk9e2luZGV4fSBvbkNsaWNrPXtoYW5kbGVGaWx0ZXJpbmd9IHZhbHVlPXtmaWx0ZXIudGFnfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZpbHRlci50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC04IGZsZXggZmxleC1yb3cgZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cD5TbmlwcGV0PC9wPjxwPlNuaXBwZXQ8L3A+PHA+U25pcHBldDwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zbmlwcGV0cyAmJiBjb250ZW50LnNuaXBwZXRzLm1hcCggKHNuaXBwZXQsIGluZGV4KSA9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNuaXBwZXQgc25pcHBldD17c25pcHBldH0ga2V5PXtpbmRleH0gdGFncz17c25pcHBldC50YWdzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5jb25zdCBTbmlwcGV0ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4LXNocmluZy0wIHctMS80IGZsZXhcIiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWxnIGxlYWRpbmctNVwiPjxhIGhyZWY9e2BzbmlwcGV0cy8ke3Byb3BzLnNuaXBwZXQuc2x1Z31gfT57cHJvcHMuc25pcHBldC50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3Byb3BzLnNuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZ3MgZmxleCBmbGV4LXJvdyBwdC0yIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy50YWdzLm1hcCgodGFnLCBpbmRleCkgPT4gPHAga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic25pcHBldC10YWcgdGV4dC1zbSBmbGV4LXNocmluay0wXCI+e3RhZ308L3A+KX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==