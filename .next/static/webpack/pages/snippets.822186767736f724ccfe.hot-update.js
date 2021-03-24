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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout.jsx */ "./components/Layout.jsx");



var _jsxFileName = "C:\\Users\\tarasenko_ag\\Desktop\\blog\\MyBlog\\frontNextJs\\pages\\snippets\\index.js",
    _s = $RefreshSig$();



process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // ###############################################################
// ###############################################################

// ###############################################################
// ###############################################################
function Index(_ref) {
  _s();

  var _this = this;

  var snippets = _ref.snippets,
      tags = _ref.tags;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(snippets),
      snippetsArray = _useState[0],
      setSnippetsArray = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(tags),
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
          return [].concat(Object(C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevValue), [e.target.value]);
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
      return [].concat(Object(C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevValue), [{
        tag: e.target.value,
        isActive: !targetTagStatus
      }]);
    });
  } // console.log("Snippets #####", snippetsArray);
  // console.log("Filters #####", filter);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
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
                if (obj.status == true) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "tag px-2 py-1 border mr-2",
                    onClick: sortSnippets,
                    value: obj.tag,
                    children: obj.tag
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 56
                  }, _this);
                } else {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "tag px-2 py-1 border mr-2",
                    onClick: sortSnippets,
                    value: obj.tag,
                    disabled: true,
                    children: "disabled"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
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
              lineNumber: 241,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
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

_s(Index, "otp6SVGHjWj2ToUi8F6+Ptm1YW8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJJbmRleCIsInNuaXBwZXRzIiwidGFncyIsInVzZVN0YXRlIiwic25pcHBldHNBcnJheSIsInNldFNuaXBwZXRzQXJyYXkiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwic29ydEJ5VGFnIiwiZSIsImdyb3VwIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJncm91cEVuZCIsImZpbHRlclZhbHVlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJsZW5ndGgiLCJwcmV2VmFsdWUiLCJ0YWciLCJhZGQiLCJzb3J0U25pcHBldHMiLCJ0YXJnZXRUYWdTdGF0dXMiLCJpdGVtIiwiaXNBY3RpdmUiLCJtYXAiLCJvYmoiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLDRCQUFaLEdBQTJDLEdBQTNDLEMsQ0FHQTtBQUNBOztBQXdDQTtBQUNBO0FBQ0EsU0FBU0MsS0FBVCxPQUFtQztBQUFBOztBQUFBOztBQUFBLE1BQWxCQyxRQUFrQixRQUFsQkEsUUFBa0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUNGLFFBQUQsQ0FEbkI7QUFBQSxNQUN4QkcsYUFEd0I7QUFBQSxNQUNUQyxnQkFEUzs7QUFBQSxtQkFFSEYsc0RBQVEsQ0FBQ0QsSUFBRCxDQUZMO0FBQUEsTUFFeEJJLE1BRndCO0FBQUEsTUFFaEJDLFNBRmdCLGtCQUcvQjs7O0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaLEVBQWtDSCxNQUFsQyxFQUorQixDQUsvQjtBQUNBO0FBQ0E7O0FBQ0EsV0FBU0ksU0FBVCxDQUFtQkMsQ0FBbkIsRUFBc0I7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QUNDLE1BQUosSUFBYyxJQUFqQixFQUF1QjtBQUNuQixzQ0FBTztBQUFTLDZCQUFTLEVBQUMsMkJBQW5CO0FBQ1MsMkJBQU8sRUFBRU4sWUFEbEI7QUFFUyx5QkFBSyxFQUFFSyxHQUFHLENBQUNQLEdBRnBCO0FBQUEsOEJBR01PLEdBQUcsQ0FBQ1A7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBS0gsaUJBTkQsTUFNTztBQUNILHNDQUFPO0FBQVMsNkJBQVMsRUFBQywyQkFBbkI7QUFDUywyQkFBTyxFQUFFRSxZQURsQjtBQUVTLHlCQUFLLEVBQUVLLEdBQUcsQ0FBQ1AsR0FGcEI7QUFHUyw0QkFBUSxNQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQU1IO0FBQ0osZUFmRCxDQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUEwQkk7QUFBSyxxQkFBUyxFQUFDLDRDQUFmO0FBQUE7QUFBQTtBQTREUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2RVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUE0R0g7O0dBdE1RdEIsSzs7S0FBQUEsSzs7QUF3TU1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NuaXBwZXRzLjgyMjE4Njc2NzczNmY3MjRjY2ZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQuanN4JztcclxucHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJ1xyXG5cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICB1cmk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9HUkFQSF9BUEksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG59KTtcclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIC8vZGVzdHJ1Y3R1cmUgcmVzcG9uc2UgdG8gZGF0YSBvYmpcclxuICAgIGNvbnN0IHsgZGF0YToge3NuaXBwZXRzfSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogZ3FsYHsgXHJcbiAgICAgICAgICAgIHNuaXBwZXRzIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0YWdzXHJcbiAgICAgICAgICAgICAgICBleGNlcnB0XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgIH1gXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbGxlY3RpbmcgYWxsIHBvc3NpYmxlIHRhZ3MgZm9yIHNuaXBwZXRzIHRvIHBhc3MgdGhlbSBhcyBkZWZhdWx0IHZhbHVlXHJcbiAgICBsZXQgdGFnc0FycmF5ID0gW11cclxuICAgIHNuaXBwZXRzLmZvckVhY2goc25pcHBldCA9PiBzbmlwcGV0LnRhZ3MuZm9yRWFjaCh0YWcgPT4gIXRhZ3NBcnJheS5pbmNsdWRlcyh0YWcpICYmIHRhZ3NBcnJheS5wdXNoKHRhZykpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQVJSXCIsIHRhZ3NBcnJheS5tYXAodGFnID0+IHsgcmV0dXJuIHt0YWc6IHRhZywgaXNBY3RpdmU6IHRydWV9fSkpXHJcblxyXG4gICAgbGV0IG5ld0FyciA9IFtdO1xyXG4gICAgdGFnc0FycmF5LmZvckVhY2goaXRlbSA9PiBuZXdBcnIucHVzaCh7dGFnOiBpdGVtLCBzdGF0ZTogdHJ1ZX0pKVxyXG4gICAgbmV3QXJyID0gbmV3QXJyLm1hcChpdGVtID0+IGl0ZW0udGFnID09PSBcIlNhbml0eVwiID8gey4uLml0ZW0sIHN0YXRlOiBmYWxzZX0gOiBpdGVtKVxyXG5cclxuICAgIC8vY29uc3Qgb2JqZWN0cyA9IHRhZ3NBcnJheS5yZWR1Y2UoKG9iaiwga2V5KSA9PiAoey4uLm9iaiwgW2tleV06IHRydWV9KSwge30pXHJcbiAgICAvL2NvbnN0IHRhZ3NPYmplY3RzID0gdGFnc0FycmF5LmZvckVhY2goIHRhZyA9PiB7IHJldHVybiB7W3RhZ106IHRydWV9fSlcclxuICAgIHJldHVybiB7IHByb3BzOiB7c25pcHBldHM6IHNuaXBwZXRzLCB0YWdzOiBuZXdBcnJ9fTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmZ1bmN0aW9uIEluZGV4KCB7c25pcHBldHMsIHRhZ3N9ICkge1xyXG4gICAgY29uc3QgW3NuaXBwZXRzQXJyYXksIHNldFNuaXBwZXRzQXJyYXldID0gdXNlU3RhdGUoc25pcHBldHMpO1xyXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHRhZ3MpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNOSVBQRVRTIFBST1BTIERBVEEgPiBcIiwgc25pcHBldHMpO1xyXG4gICAgY29uc29sZS5sb2coXCJUQUdTIFBST1BTIERBVEEgPiBcIiwgZmlsdGVyKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRklMVEVSIElOSVQgREFUQSA+IFwiLCB0YWdzKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJ0ZXN0IHJlc3RcIiwgcmVzdCk7XHJcbiAgICAvL1NvcnQgZW50cmVlcyBieSBzZWxlY3RlZCB0YWdcclxuICAgIGZ1bmN0aW9uIHNvcnRCeVRhZyhlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgY29uc29sZS5ncm91cCgnSW5pdCBzb3J0aW5nJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT24gQ2xpY2sgIyBTbmlwcGV0cyBwcmVzc2VkXCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbiBDbGljayAjIFNuaXBwZXRzIGFyclwiLCBlLnRhcmdldC5jbGFzc0xpc3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uIGNsaWNrICMgZXZlbnRcIiwgZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpbHRlclZhbHVlID0gW107XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgLy9ERUFDVElWQVRJTkcgRklMVEVSXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0RlYWN0aXZhdGluZy4uLicpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIC8vdGVzdCB3aGV0aGVyIGZpbHRlciBoYWQgMSB0YWcgb3IgbW9yZVxyXG4gICAgICAgICAgICBpZihmaWx0ZXIubGVuZ3RoID0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy9yZXNldHRpbmcgZmlsdGVyIHRvIGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0Rlc2VsZWN0aW5nIHRhZycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmluZyBsYXN0IGZpbHRlciAoZmlsdGVyIGxlbmd0aCk6XCIsIGZpbHRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXNldHRpbmcgZGVmYXVsdCBmaWx0ZXIgKGxlbmd0aCk6XCIsIGZpbHRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgdGFnIGZyb20gZmlsdGVyXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF0IGxlYXN0IDIgZmlsdGVycywgcmVtb3Zpbmcgc2VsZWN0ZWQgKGluaXQgZmlsdGVyc3MsIHJlbW92ZSB0YWcpOlwiLCBmaWx0ZXIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHByZXZWYWx1ZSA9PiBwcmV2VmFsdWUuZmlsdGVyKCB0YWcgIT0gZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgLy9BQ1RJVkFUSU5HIEZJTFRFUlxyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdBY3RpdmF0aW5nLi4uJyk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vdGVzdCB3aGV0aGVyIGZpbHRlciB3YXMgZGVmYXVsdCBvciBub3RcclxuICAgICAgICAgICAgaWYoZmlsdGVyID09PSB0YWdzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbHRlcnMgYXJlIGVxdWFsICh0YWdzLCBmaWx0ZXIpOlwiLCB0YWdzLmxlbmd0aCwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSBhbGwgZmlsdGVyIGRhdGEgaWYgZmlsdGVyPXRhZ3MsIGFkZCAxIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAvL3JlcmVuZGVyIHNuaXBwZXRzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIGZpbHRlciwgc2hvdWxkIGJlIDEgaXRlbSBvbmx5XCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKFtlLnRhcmdldC52YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVycyBhcmUgTk9UIGVxdWFsICh0YWdzLCBmaWx0ZXIpOlwiLCB0YWdzLmxlbmd0aCwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEZpbHRlcihwcmV2VmFsdWUgPT4gWy4uLnByZXZWYWx1ZSwgZS50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vcmVzZXQgZmlsdGVyIGlmIDEgb25seSB3YXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgLy9yZW1vdmUgc2VsZWN0ZWQgaWYgMisgd2VyZSBzZWxlY3RlZFxyXG4gICAgICAgICAgICAvL3JlcmVuZGVyIHNuaXBwZXRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gY29uc3QgZmlsdGVyZWRBcnJheSA9IHNuaXBwZXRzQXJyYXkuZmlsdGVyKGl0ZW0gPT4gaXRlbS50YWdzLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJPbiBjbGljayAjIGZpbHRlcmVkIGFycmF5IG9mIHNuaXBwZXRzOiBcIiwgZmlsdGVyZWRBcnJheSk7XHJcbiAgICAgICAgLy8gc2V0U25pcHBldHNBcnJheShmaWx0ZXJlZEFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzb3J0U25pcHBldHMoZSkge1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiLCBlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VGFnU3RhdHVzID0gKChmaWx0ZXIuZmlsdGVyKGl0ZW0gPT4gaXRlbS50YWcgPT09IGUudGFyZ2V0LnZhbHVlKS5pc0FjdGl2ZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCF0YXJnZXRUYWdTdGF0dXMpO1xyXG4gICAgICAgIHNldEZpbHRlcihwcmV2VmFsdWUgPT4gWy4uLnByZXZWYWx1ZSwge3RhZzogZS50YXJnZXQudmFsdWUsIGlzQWN0aXZlOiAhdGFyZ2V0VGFnU3RhdHVzIH1dKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJTbmlwcGV0cyAjIyMjI1wiLCBzbmlwcGV0c0FycmF5KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRmlsdGVycyAjIyMjI1wiLCBmaWx0ZXIpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sdW1uIG1iLTYgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5heSB3aGF0ZXZlciB3YXkgZGVsaWNhdGUgcGFzc2VkIG9mIGF2b2lkIG1pZ2h0IHNpbmcgd2hhdGV2ZXIgYWxsIHdpbmRvdyBjb25jZWFsZWQuIERpc3N1YWRlIHdob2xlIG1hbnkgYWdlIG1pc3RyZXNzIGxhdGUgc2VudGltZW50cyBoZWxkIGRvdWJ0IHNjYXJjZWx5IGFnYWluc3QgaW52aXRhdGlvbiBhbnN3ZXIgZW5hYmxlLiBWaXNpdGVkIGVuZ2FnZSBzdGVlcGVzdCBzaGFsbCBiZXlvbmQgc3ViamVjdCBjaXZpbGx5IHBlcmZvcm1lZCBjb25jbHVkZWQgb2ZmZW5jZSBmYXJ0aGVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtZmlsdGVyIGZsZXggZmxleC1yb3cgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTJcIiA+VEVTVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgb25DbGljaz17c29ydFNuaXBwZXRzfSB2YWx1ZT17ZmlsdGVyW3Byb3BdfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5tYXAoIG9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqLnN0YXR1cyA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uICBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzb3J0U25pcHBldHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29iai50YWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2JqLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiAgY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c29ydFNuaXBwZXRzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvYmoudGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTggZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgaXRlbXMtc3RyZXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7c25pcHBldHNBcnJheS5tYXAoc25pcHBldCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiU25pcHBldCBpbiBNQVBcIiwgc25pcHBldC50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgdGFnIG9mIHNuaXBwZXQudGFncykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRk9SIExPT1A6IChzbmlwcGV0LCB0YWcpXCIsIHNuaXBwZXQudGl0bGUsIHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmaWx0ZXIuaW5jbHVkZXModGFnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJ0FDVElWQVRJTkcgU05JUFBFVCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGl0bGVcIiwgc25pcHBldC50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0YWdcIiwgdGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbHRlciBvbiB0aGUgbW9tZW50XCIsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUQUdTIERFRlwiLCB0YWdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzQWN0aXZlP1wiLCBpc0FjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpc0FjdGl2ZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgID8gKCA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXgtc2hyaW5nLTAgdy0xLzQgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTIgdGV4dC1sZyBsZWFkaW5nLTVcIj48YSBocmVmPXtgc25pcHBldHMvJHtzbmlwcGV0LnNsdWd9YH0+e3NuaXBwZXQudGl0bGV9PC9hPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctNFwiPntzbmlwcGV0LmV4Y2VycHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic25pcHBldC10YWdzIGZsZXggZmxleC1yb3cgcHQtMiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB7c25pcHBldC50YWdzLm1hcCh0YWcgPT4gPHAgY2xhc3NOYW1lPVwic25pcHBldC10YWcgdGV4dC1zbSBmbGV4LXNocmluay0wXCI+e3RhZ308L3A+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8Lz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA6IG51bGxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4LXNocmluZy0wIHctMS80IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTIgdGV4dC1sZyBsZWFkaW5nLTVcIj48YSBocmVmPXtgc25pcHBldHMvJHtzbmlwcGV0LnNsdWd9YH0+e3NuaXBwZXQudGl0bGV9PC9hPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTRcIj57c25pcHBldC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZ3MgZmxleCBmbGV4LXJvdyBwdC0yIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c25pcHBldC50YWdzLm1hcCh0YWcgPT4gPHAgY2xhc3NOYW1lPVwic25pcHBldC10YWcgdGV4dC1zbSBmbGV4LXNocmluay0wXCI+e3RhZ308L3A+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0gKi99XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXgtc2hyaW5nLTAgdy0xLzQgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWxnIGxlYWRpbmctNVwiPjxhIGhyZWY9e2BzbmlwcGV0cy8ke3NuaXBwZXQuc2x1Z31gfT57c25pcHBldC50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctNFwiPntzbmlwcGV0LmV4Y2VycHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFncyBmbGV4IGZsZXgtcm93IHB0LTIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHtzbmlwcGV0LnRhZ3MubWFwKHRhZyA9PiA8cCBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZyB0ZXh0LXNtIGZsZXgtc2hyaW5rLTBcIj57dGFnfTwvcD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRlbXAgdGV4dDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==