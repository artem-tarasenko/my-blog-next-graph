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
/* harmony import */ var C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout.jsx */ "./components/Layout.jsx");




var _jsxFileName = "C:\\Users\\tarasenko_ag\\Desktop\\blog\\MyBlog\\frontNextJs\\pages\\snippets\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // ###############################################################
// ###############################################################

// ###############################################################
// ###############################################################
function Index(_ref) {
  _s();

  var _this = this;

  var snippets = _ref.snippets,
      tags = _ref.tags;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(snippets),
      snippetsArray = _useState[0],
      setSnippetsArray = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      filter = _useState2[0],
      setFilter = _useState2[1]; // console.log("SNIPPETS PROPS DATA > ", snippets);


  console.log("TAGS PROPS DATA > ", filter); // console.log("FILTER INIT DATA > ", tags);
  //console.log("test rest", rest);
  //Sort entrees by selected tag

  function sortByTag(e) {
    console.log("###########################################################################");
    console.log("###########################################################################");
    console.group('Init sorting');
    console.log("On Click # Snippets pressed", e.target.value);
    console.log("On Click # Snippets arr", e.target.classList);
    console.log("On click # event", e.target);
    console.groupEnd();
    var filterValue = [];

    if (e.target.classList.contains("selected")) {
      //DEACTIVATING FILTER
      console.group('Deactivating...');
      e.target.classList.remove("selected"); //test whether filter had 1 tag or more

      if (filter.length = 1) {
        //resetting filter to default
        console.group('Deselecting tag');
        console.log("Removing last filter (filter length):", filter.length);
        setFilter(tags);
        console.log("Resetting default filter (length):", filter.length);
        console.groupEnd();
      } else {
        //remove tag from filter
        console.log("At least 2 filters, removing selected (init filterss, remove tag):", filter, e.target.value);
        setFilter(function (prevValue) {
          return prevValue.filter(tag != e.target.value);
        });
        console.log("New filter value:", filter);
        console.groupEnd();
      }
    } else if (!e.target.classList.contains("selected")) {
      //ACTIVATING FILTER
      console.group('Activating...');
      e.target.classList.add("selected"); //test whether filter was default or not

      if (filter === tags) {
        console.log("Filters are equal (tags, filter):", tags.length, filter.length); //remove all filter data if filter=tags, add 1 selected
        //rerender snippets

        console.log("Updating filter, should be 1 item only");
        setFilter([e.target.value]);
        console.log("New filter value:", filter);
        console.groupEnd();
      } else {
        console.log("Filters are NOT equal (tags, filter):", tags.length, filter.length);
        setFilter(function (prevValue) {
          return [].concat(Object(C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevValue), [e.target.value]);
        });
        console.log("New filter value:", filter);
        console.groupEnd();
      } //reset filter if 1 only was selected
      //remove selected if 2+ were selected
      //rerender snippets

    } // const filteredArray = snippetsArray.filter(item => item.tags.includes(e.target.value));
    // console.log("On click # filtered array of snippets: ", filteredArray);
    // setSnippetsArray(filteredArray);

  }

  function sortSnippets(e) {
    console.log("click", e.target);
    var targetTagStatus = filter.filter(function (item) {
      return item.tag === e.target.value;
    }).isActive;
    console.log(!targetTagStatus);
    setFilter(function (prevValue) {
      return [].concat(Object(C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(prevValue), [{
        tag: e.target.value,
        isActive: !targetTagStatus
      }]);
    });
  }

  setFilter(tags.map(function (item) {
    return item.tag === "Sanity" ? _objectSpread(_objectSpread({}, item), {}, {
      state: false
    }) : item;
  })); // console.log("Snippets #####", snippetsArray);
  // console.log("Filters #####", filter);

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
              lineNumber: 146,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tags-filter flex flex-row mt-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "tag px-2 py-1 border mr-2",
                children: "TEST"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 37
              }, this), filter.map(function (obj) {
                if (obj.status) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "tag px-2 py-1 border mr-2",
                    onClick: sortSnippets,
                    value: obj.tag,
                    children: obj.tag
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 56
                  }, _this);
                } else {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "tag px-2 py-1 border mr-2",
                    onClick: sortSnippets,
                    value: obj.tag,
                    disabled: true,
                    children: obj.tag
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 56
                  }, _this);
                }
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "pt-8 flex flex-row flex-wrap items-stretch",
            children:
            /*#__PURE__*/
            // <>
            // <div className="p-2 flex-shring-0 w-1/4 flex">
            //     <div className="bg-gray-200 p-3">
            //         <h2 className="pb-2 text-lg leading-5"><a href={`snippets/${snippet.slug}`}>{snippet.title}</a></h2>
            //         <p className="text-sm leading-4">{snippet.excerpt}</p>
            //         <span className="snippet-tags flex flex-row pt-2 flex-wrap">
            //             {snippet.tags.map(tag => <p className="snippet-tag text-sm flex-shrink-0">{tag}</p>)}
            //         </span>
            //     </div>
            // </div>
            // </>
            Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Temp text"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 13
  }, this);
}

_s(Index, "LZcrQztO0H6WhB4ZtVQPzetx4/g=");

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJJbmRleCIsInNuaXBwZXRzIiwidGFncyIsInVzZVN0YXRlIiwic25pcHBldHNBcnJheSIsInNldFNuaXBwZXRzQXJyYXkiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwic29ydEJ5VGFnIiwiZSIsImdyb3VwIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJncm91cEVuZCIsImZpbHRlclZhbHVlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJsZW5ndGgiLCJwcmV2VmFsdWUiLCJ0YWciLCJhZGQiLCJzb3J0U25pcHBldHMiLCJ0YXJnZXRUYWdTdGF0dXMiLCJpdGVtIiwiaXNBY3RpdmUiLCJtYXAiLCJzdGF0ZSIsIm9iaiIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsNEJBQVosR0FBMkMsR0FBM0MsQyxDQUdBO0FBQ0E7O0FBdUNBO0FBQ0E7QUFDQSxTQUFTQyxLQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQ0YsUUFBRCxDQURuQjtBQUFBLE1BQ3hCRyxhQUR3QjtBQUFBLE1BQ1RDLGdCQURTOztBQUFBLG1CQUVIRixzREFBUSxFQUZMO0FBQUEsTUFFeEJHLE1BRndCO0FBQUEsTUFFaEJDLFNBRmdCLGtCQUcvQjs7O0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDSCxNQUFsQyxFQUorQixDQUsvQjtBQUNBO0FBQ0E7O0FBQ0EsV0FBU0ksU0FBVCxDQUFtQkMsQ0FBbkIsRUFB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aWMvd2VicGFjay9wYWdlcy9zbmlwcGV0cy43ZjlmNzFhOWYxMWIzYzMxNjA1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzeCc7XHJcbnByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgPSAnMCdcclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgdXJpOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfR1JBUEhfQVBJLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxufSk7XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICAvL2Rlc3RydWN0dXJlIHJlc3BvbnNlIHRvIGRhdGEgb2JqXHJcbiAgICBjb25zdCB7IGRhdGE6IHtzbmlwcGV0c30gfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XHJcbiAgICAgICAgcXVlcnk6IGdxbGB7IFxyXG4gICAgICAgICAgICBzbmlwcGV0cyB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGFnc1xyXG4gICAgICAgICAgICAgICAgZXhjZXJwdFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICB9YFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jb2xsZWN0aW5nIGFsbCBwb3NzaWJsZSB0YWdzIGZvciBzbmlwcGV0cyB0byBwYXNzIHRoZW0gYXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgbGV0IHRhZ3NBcnJheSA9IFtdXHJcbiAgICBzbmlwcGV0cy5mb3JFYWNoKHNuaXBwZXQgPT4gc25pcHBldC50YWdzLmZvckVhY2godGFnID0+ICF0YWdzQXJyYXkuaW5jbHVkZXModGFnKSAmJiB0YWdzQXJyYXkucHVzaCh0YWcpKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFSUlwiLCB0YWdzQXJyYXkubWFwKHRhZyA9PiB7IHJldHVybiB7dGFnOiB0YWcsIGlzQWN0aXZlOiB0cnVlfX0pKVxyXG5cclxuICAgIGNvbnN0IG5ld0FyciA9IFtdO1xyXG4gICAgdGFnc0FycmF5LmZvckVhY2goaXRlbSA9PiBuZXdBcnIucHVzaCh7dGFnOiBpdGVtLCBzdGF0ZTogdHJ1ZX0pKVxyXG5cclxuICAgIC8vY29uc3Qgb2JqZWN0cyA9IHRhZ3NBcnJheS5yZWR1Y2UoKG9iaiwga2V5KSA9PiAoey4uLm9iaiwgW2tleV06IHRydWV9KSwge30pXHJcbiAgICAvL2NvbnN0IHRhZ3NPYmplY3RzID0gdGFnc0FycmF5LmZvckVhY2goIHRhZyA9PiB7IHJldHVybiB7W3RhZ106IHRydWV9fSlcclxuICAgIHJldHVybiB7IHByb3BzOiB7c25pcHBldHM6IHNuaXBwZXRzLCB0YWdzOiBuZXdBcnJ9fTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmZ1bmN0aW9uIEluZGV4KCB7c25pcHBldHMsIHRhZ3N9ICkge1xyXG4gICAgY29uc3QgW3NuaXBwZXRzQXJyYXksIHNldFNuaXBwZXRzQXJyYXldID0gdXNlU3RhdGUoc25pcHBldHMpO1xyXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKClcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiU05JUFBFVFMgUFJPUFMgREFUQSA+IFwiLCBzbmlwcGV0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRBR1MgUFJPUFMgREFUQSA+IFwiLCBmaWx0ZXIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJGSUxURVIgSU5JVCBEQVRBID4gXCIsIHRhZ3MpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInRlc3QgcmVzdFwiLCByZXN0KTtcclxuICAgIC8vU29ydCBlbnRyZWVzIGJ5IHNlbGVjdGVkIHRhZ1xyXG4gICAgZnVuY3Rpb24gc29ydEJ5VGFnKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICBjb25zb2xlLmdyb3VwKCdJbml0IHNvcnRpbmcnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbiBDbGljayAjIFNuaXBwZXRzIHByZXNzZWRcIiwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uIENsaWNrICMgU25pcHBldHMgYXJyXCIsIGUudGFyZ2V0LmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT24gY2xpY2sgIyBldmVudFwiLCBlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuICAgICAgICBsZXQgZmlsdGVyVmFsdWUgPSBbXTtcclxuXHJcblxyXG5cclxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAvL0RFQUNUSVZBVElORyBGSUxURVJcclxuICAgICAgICAgICAgY29uc29sZS5ncm91cCgnRGVhY3RpdmF0aW5nLi4uJyk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgLy90ZXN0IHdoZXRoZXIgZmlsdGVyIGhhZCAxIHRhZyBvciBtb3JlXHJcbiAgICAgICAgICAgIGlmKGZpbHRlci5sZW5ndGggPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL3Jlc2V0dGluZyBmaWx0ZXIgdG8gZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cCgnRGVzZWxlY3RpbmcgdGFnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbW92aW5nIGxhc3QgZmlsdGVyIChmaWx0ZXIgbGVuZ3RoKTpcIiwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIodGFncyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc2V0dGluZyBkZWZhdWx0IGZpbHRlciAobGVuZ3RoKTpcIiwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSB0YWcgZnJvbSBmaWx0ZXJcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXQgbGVhc3QgMiBmaWx0ZXJzLCByZW1vdmluZyBzZWxlY3RlZCAoaW5pdCBmaWx0ZXJzcywgcmVtb3ZlIHRhZyk6XCIsIGZpbHRlciwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIocHJldlZhbHVlID0+IHByZXZWYWx1ZS5maWx0ZXIoIHRhZyAhPSBlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBmaWx0ZXIgdmFsdWU6XCIsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAvL0FDVElWQVRJTkcgRklMVEVSXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0FjdGl2YXRpbmcuLi4nKTtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgLy90ZXN0IHdoZXRoZXIgZmlsdGVyIHdhcyBkZWZhdWx0IG9yIG5vdFxyXG4gICAgICAgICAgICBpZihmaWx0ZXIgPT09IHRhZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVycyBhcmUgZXF1YWwgKHRhZ3MsIGZpbHRlcik6XCIsIHRhZ3MubGVuZ3RoLCBmaWx0ZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGFsbCBmaWx0ZXIgZGF0YSBpZiBmaWx0ZXI9dGFncywgYWRkIDEgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIC8vcmVyZW5kZXIgc25pcHBldHNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgZmlsdGVyLCBzaG91bGQgYmUgMSBpdGVtIG9ubHlcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIoW2UudGFyZ2V0LnZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBmaWx0ZXIgdmFsdWU6XCIsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWx0ZXJzIGFyZSBOT1QgZXF1YWwgKHRhZ3MsIGZpbHRlcik6XCIsIHRhZ3MubGVuZ3RoLCBmaWx0ZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHByZXZWYWx1ZSA9PiBbLi4ucHJldlZhbHVlLCBlLnRhcmdldC52YWx1ZV0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBmaWx0ZXIgdmFsdWU6XCIsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9yZXNldCBmaWx0ZXIgaWYgMSBvbmx5IHdhcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICAvL3JlbW92ZSBzZWxlY3RlZCBpZiAyKyB3ZXJlIHNlbGVjdGVkXHJcbiAgICAgICAgICAgIC8vcmVyZW5kZXIgc25pcHBldHNcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBjb25zdCBmaWx0ZXJlZEFycmF5ID0gc25pcHBldHNBcnJheS5maWx0ZXIoaXRlbSA9PiBpdGVtLnRhZ3MuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk9uIGNsaWNrICMgZmlsdGVyZWQgYXJyYXkgb2Ygc25pcHBldHM6IFwiLCBmaWx0ZXJlZEFycmF5KTtcclxuICAgICAgICAvLyBzZXRTbmlwcGV0c0FycmF5KGZpbHRlcmVkQXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNvcnRTbmlwcGV0cyhlKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIsIGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB0YXJnZXRUYWdTdGF0dXMgPSAoKGZpbHRlci5maWx0ZXIoaXRlbSA9PiBpdGVtLnRhZyA9PT0gZS50YXJnZXQudmFsdWUpLmlzQWN0aXZlKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coIXRhcmdldFRhZ1N0YXR1cyk7XHJcbiAgICAgICAgc2V0RmlsdGVyKHByZXZWYWx1ZSA9PiBbLi4ucHJldlZhbHVlLCB7dGFnOiBlLnRhcmdldC52YWx1ZSwgaXNBY3RpdmU6ICF0YXJnZXRUYWdTdGF0dXMgfV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpbHRlcih0YWdzLm1hcChpdGVtID0+IGl0ZW0udGFnID09PSBcIlNhbml0eVwiID8gey4uLml0ZW0sIHN0YXRlOiBmYWxzZX0gOiBpdGVtKSlcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNuaXBwZXRzICMjIyMjXCIsIHNuaXBwZXRzQXJyYXkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJGaWx0ZXJzICMjIyMjXCIsIGZpbHRlcik7XHJcbiAgICBcclxuICAgIHJldHVybiAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPExheW91dCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW4gbWItNiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTY0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmF5IHdoYXRldmVyIHdheSBkZWxpY2F0ZSBwYXNzZWQgb2YgYXZvaWQgbWlnaHQgc2luZyB3aGF0ZXZlciBhbGwgd2luZG93IGNvbmNlYWxlZC4gRGlzc3VhZGUgd2hvbGUgbWFueSBhZ2UgbWlzdHJlc3MgbGF0ZSBzZW50aW1lbnRzIGhlbGQgZG91YnQgc2NhcmNlbHkgYWdhaW5zdCBpbnZpdGF0aW9uIGFuc3dlciBlbmFibGUuIFZpc2l0ZWQgZW5nYWdlIHN0ZWVwZXN0IHNoYWxsIGJleW9uZCBzdWJqZWN0IGNpdmlsbHkgcGVyZm9ybWVkIGNvbmNsdWRlZCBvZmZlbmNlIGZhcnRoZXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1maWx0ZXIgZmxleCBmbGV4LXJvdyBtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiID5URVNUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTJcIiBvbkNsaWNrPXtzb3J0U25pcHBldHN9IHZhbHVlPXtmaWx0ZXJbcHJvcF19PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5tYXAoIG9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiAgY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c29ydFNuaXBwZXRzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvYmoudGFnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29iai50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NvcnRTbmlwcGV0c30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b2JqLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2JqLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtzbmlwcGV0c0FycmF5Lm1hcChzbmlwcGV0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTbmlwcGV0IGluIE1BUFwiLCBzbmlwcGV0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB0YWcgb2Ygc25pcHBldC50YWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJGT1IgTE9PUDogKHNuaXBwZXQsIHRhZylcIiwgc25pcHBldC50aXRsZSwgdGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZpbHRlci5pbmNsdWRlcyh0YWcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnQUNUSVZBVElORyBTTklQUEVUJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aXRsZVwiLCBzbmlwcGV0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhZ1wiLCB0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyIG9uIHRoZSBtb21lbnRcIiwgZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRBR1MgREVGXCIsIHRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNBY3RpdmU/XCIsIGlzQWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzQWN0aXZlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPyAoIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWxnIGxlYWRpbmctNVwiPjxhIGhyZWY9e2BzbmlwcGV0cy8ke3NuaXBwZXQuc2x1Z31gfT57c25pcHBldC50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3NuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZ3MgZmxleCBmbGV4LXJvdyBwdC0yIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtzbmlwcGV0LnRhZ3MubWFwKHRhZyA9PiA8cCBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZyB0ZXh0LXNtIGZsZXgtc2hyaW5rLTBcIj57dGFnfTwvcD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDogbnVsbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXgtc2hyaW5nLTAgdy0xLzQgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWxnIGxlYWRpbmctNVwiPjxhIGhyZWY9e2BzbmlwcGV0cy8ke3NuaXBwZXQuc2x1Z31gfT57c25pcHBldC50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctNFwiPntzbmlwcGV0LmV4Y2VycHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFncyBmbGV4IGZsZXgtcm93IHB0LTIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzbmlwcGV0LnRhZ3MubWFwKHRhZyA9PiA8cCBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZyB0ZXh0LXNtIGZsZXgtc2hyaW5rLTBcIj57dGFnfTwvcD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfSAqL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0yIHRleHQtbGcgbGVhZGluZy01XCI+PGEgaHJlZj17YHNuaXBwZXRzLyR7c25pcHBldC5zbHVnfWB9PntzbmlwcGV0LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3NuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic25pcHBldC10YWdzIGZsZXggZmxleC1yb3cgcHQtMiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAge3NuaXBwZXQudGFncy5tYXAodGFnID0+IDxwIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFnIHRleHQtc20gZmxleC1zaHJpbmstMFwiPnt0YWd9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVtcCB0ZXh0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9