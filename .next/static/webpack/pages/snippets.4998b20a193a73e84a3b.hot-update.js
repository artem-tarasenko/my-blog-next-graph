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
    var targetTagStatus = filter.find(function (item) {
      return item.tag === e.target.value;
    }).state;
    console.log(targetTagStatus);
    setFilter(function (prevValue) {
      return [].concat(Object(C_Users_tarasenko_ag_Desktop_blog_MyBlog_frontNextJs_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(prevValue), [{
        tag: e.target.value,
        state: !targetTagStatus
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
              lineNumber: 147,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tags-filter flex flex-row mt-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "tag px-2 py-1 border mr-2",
                children: "TEST"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 37
              }, this), filter.map(function (obj) {
                if (obj.state) {
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
                    className: "tag px-2 py-1 border mr-2 disabled",
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
              lineNumber: 148,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 146,
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
          lineNumber: 145,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 142,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJJbmRleCIsInNuaXBwZXRzIiwidGFncyIsInVzZVN0YXRlIiwic25pcHBldHNBcnJheSIsInNldFNuaXBwZXRzQXJyYXkiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwic29ydEJ5VGFnIiwiZSIsImdyb3VwIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJncm91cEVuZCIsImZpbHRlclZhbHVlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJsZW5ndGgiLCJwcmV2VmFsdWUiLCJ0YWciLCJhZGQiLCJzb3J0U25pcHBldHMiLCJ0YXJnZXRUYWdTdGF0dXMiLCJmaW5kIiwiaXRlbSIsInN0YXRlIiwibWFwIiwib2JqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyw0QkFBWixHQUEyQyxHQUEzQyxDLENBR0E7QUFDQTs7QUF3Q0E7QUFDQTtBQUNBLFNBQVNDLEtBQVQsT0FBbUM7QUFBQTs7QUFBQTs7QUFBQSxNQUFsQkMsUUFBa0IsUUFBbEJBLFFBQWtCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFROztBQUFBLGtCQUNXQyxzREFBUSxDQUFDRixRQUFELENBRG5CO0FBQUEsTUFDeEJHLGFBRHdCO0FBQUEsTUFDVEMsZ0JBRFM7O0FBQUEsbUJBRUhGLHNEQUFRLENBQUNELElBQUQsQ0FGTDtBQUFBLE1BRXhCSSxNQUZ3QjtBQUFBLE1BRWhCQyxTQUZnQixrQkFHL0I7OztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ0gsTUFBbEMsRUFKK0IsQ0FLL0I7QUFDQTtBQUNBOztBQUNBLFdBQVNJLFNBQVQsQ0FBbUJDLENBQW5CLEVBQXNCO0FBQ2xC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QWM7QUFDVixzQ0FBTztBQUFTLDZCQUFTLEVBQUMsMkJBQW5CO0FBQ1MsMkJBQU8sRUFBRUosWUFEbEI7QUFFUyx5QkFBSyxFQUFFTSxHQUFHLENBQUNSLEdBRnBCO0FBQUEsOEJBR01RLEdBQUcsQ0FBQ1I7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBS0gsaUJBTkQsTUFNTztBQUNILHNDQUFPO0FBQVMsNkJBQVMsRUFBQyxvQ0FBbkI7QUFDUywyQkFBTyxFQUFFRSxZQURsQjtBQUVTLHlCQUFLLEVBQUVNLEdBQUcsQ0FBQ1IsR0FGcEI7QUFHUyw0QkFBUSxNQUhqQjtBQUFBLDhCQUlNUSxHQUFHLENBQUNSO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQU1IO0FBQ0osZUFmRCxDQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUEwQkk7QUFBSyxxQkFBUyxFQUFDLDRDQUFmO0FBQUE7QUFBQTtBQTREUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2RVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUE0R0g7O0dBdk1RdEIsSzs7S0FBQUEsSzs7QUF5TU1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NuaXBwZXRzLjQ5OThiMjBhMTkzYTczZTg0YTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQuanN4JztcclxucHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJ1xyXG5cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICB1cmk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9HUkFQSF9BUEksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG59KTtcclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIC8vZGVzdHJ1Y3R1cmUgcmVzcG9uc2UgdG8gZGF0YSBvYmpcclxuICAgIGNvbnN0IHsgZGF0YToge3NuaXBwZXRzfSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogZ3FsYHsgXHJcbiAgICAgICAgICAgIHNuaXBwZXRzIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0YWdzXHJcbiAgICAgICAgICAgICAgICBleGNlcnB0XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgIH1gXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbGxlY3RpbmcgYWxsIHBvc3NpYmxlIHRhZ3MgZm9yIHNuaXBwZXRzIHRvIHBhc3MgdGhlbSBhcyBkZWZhdWx0IHZhbHVlXHJcbiAgICBsZXQgdGFnc0FycmF5ID0gW11cclxuICAgIHNuaXBwZXRzLmZvckVhY2goc25pcHBldCA9PiBzbmlwcGV0LnRhZ3MuZm9yRWFjaCh0YWcgPT4gIXRhZ3NBcnJheS5pbmNsdWRlcyh0YWcpICYmIHRhZ3NBcnJheS5wdXNoKHRhZykpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQVJSXCIsIHRhZ3NBcnJheS5tYXAodGFnID0+IHsgcmV0dXJuIHt0YWc6IHRhZywgaXNBY3RpdmU6IHRydWV9fSkpXHJcblxyXG4gICAgbGV0IG5ld0FyciA9IFtdO1xyXG4gICAgdGFnc0FycmF5LmZvckVhY2goaXRlbSA9PiBuZXdBcnIucHVzaCh7dGFnOiBpdGVtLCBzdGF0ZTogdHJ1ZX0pKVxyXG4gICAgbmV3QXJyID0gbmV3QXJyLm1hcChpdGVtID0+IGl0ZW0udGFnID09PSBcIlNhbml0eVwiID8gey4uLml0ZW0sIHN0YXRlOiBmYWxzZX0gOiBpdGVtKVxyXG5cclxuICAgIC8vY29uc3Qgb2JqZWN0cyA9IHRhZ3NBcnJheS5yZWR1Y2UoKG9iaiwga2V5KSA9PiAoey4uLm9iaiwgW2tleV06IHRydWV9KSwge30pXHJcbiAgICAvL2NvbnN0IHRhZ3NPYmplY3RzID0gdGFnc0FycmF5LmZvckVhY2goIHRhZyA9PiB7IHJldHVybiB7W3RhZ106IHRydWV9fSlcclxuICAgIHJldHVybiB7IHByb3BzOiB7c25pcHBldHM6IHNuaXBwZXRzLCB0YWdzOiBuZXdBcnJ9fTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmZ1bmN0aW9uIEluZGV4KCB7c25pcHBldHMsIHRhZ3N9ICkge1xyXG4gICAgY29uc3QgW3NuaXBwZXRzQXJyYXksIHNldFNuaXBwZXRzQXJyYXldID0gdXNlU3RhdGUoc25pcHBldHMpO1xyXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHRhZ3MpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNOSVBQRVRTIFBST1BTIERBVEEgPiBcIiwgc25pcHBldHMpO1xyXG4gICAgY29uc29sZS5sb2coXCJUQUdTIFBST1BTIERBVEEgPiBcIiwgZmlsdGVyKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRklMVEVSIElOSVQgREFUQSA+IFwiLCB0YWdzKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJ0ZXN0IHJlc3RcIiwgcmVzdCk7XHJcbiAgICAvL1NvcnQgZW50cmVlcyBieSBzZWxlY3RlZCB0YWdcclxuICAgIGZ1bmN0aW9uIHNvcnRCeVRhZyhlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgY29uc29sZS5ncm91cCgnSW5pdCBzb3J0aW5nJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT24gQ2xpY2sgIyBTbmlwcGV0cyBwcmVzc2VkXCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbiBDbGljayAjIFNuaXBwZXRzIGFyclwiLCBlLnRhcmdldC5jbGFzc0xpc3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uIGNsaWNrICMgZXZlbnRcIiwgZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpbHRlclZhbHVlID0gW107XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgLy9ERUFDVElWQVRJTkcgRklMVEVSXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0RlYWN0aXZhdGluZy4uLicpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIC8vdGVzdCB3aGV0aGVyIGZpbHRlciBoYWQgMSB0YWcgb3IgbW9yZVxyXG4gICAgICAgICAgICBpZihmaWx0ZXIubGVuZ3RoID0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy9yZXNldHRpbmcgZmlsdGVyIHRvIGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0Rlc2VsZWN0aW5nIHRhZycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmluZyBsYXN0IGZpbHRlciAoZmlsdGVyIGxlbmd0aCk6XCIsIGZpbHRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXNldHRpbmcgZGVmYXVsdCBmaWx0ZXIgKGxlbmd0aCk6XCIsIGZpbHRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgdGFnIGZyb20gZmlsdGVyXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF0IGxlYXN0IDIgZmlsdGVycywgcmVtb3Zpbmcgc2VsZWN0ZWQgKGluaXQgZmlsdGVyc3MsIHJlbW92ZSB0YWcpOlwiLCBmaWx0ZXIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHByZXZWYWx1ZSA9PiBwcmV2VmFsdWUuZmlsdGVyKCB0YWcgIT0gZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgLy9BQ1RJVkFUSU5HIEZJTFRFUlxyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdBY3RpdmF0aW5nLi4uJyk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vdGVzdCB3aGV0aGVyIGZpbHRlciB3YXMgZGVmYXVsdCBvciBub3RcclxuICAgICAgICAgICAgaWYoZmlsdGVyID09PSB0YWdzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbHRlcnMgYXJlIGVxdWFsICh0YWdzLCBmaWx0ZXIpOlwiLCB0YWdzLmxlbmd0aCwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSBhbGwgZmlsdGVyIGRhdGEgaWYgZmlsdGVyPXRhZ3MsIGFkZCAxIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAvL3JlcmVuZGVyIHNuaXBwZXRzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIGZpbHRlciwgc2hvdWxkIGJlIDEgaXRlbSBvbmx5XCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKFtlLnRhcmdldC52YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVycyBhcmUgTk9UIGVxdWFsICh0YWdzLCBmaWx0ZXIpOlwiLCB0YWdzLmxlbmd0aCwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEZpbHRlcihwcmV2VmFsdWUgPT4gWy4uLnByZXZWYWx1ZSwgZS50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vcmVzZXQgZmlsdGVyIGlmIDEgb25seSB3YXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgLy9yZW1vdmUgc2VsZWN0ZWQgaWYgMisgd2VyZSBzZWxlY3RlZFxyXG4gICAgICAgICAgICAvL3JlcmVuZGVyIHNuaXBwZXRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gY29uc3QgZmlsdGVyZWRBcnJheSA9IHNuaXBwZXRzQXJyYXkuZmlsdGVyKGl0ZW0gPT4gaXRlbS50YWdzLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJPbiBjbGljayAjIGZpbHRlcmVkIGFycmF5IG9mIHNuaXBwZXRzOiBcIiwgZmlsdGVyZWRBcnJheSk7XHJcbiAgICAgICAgLy8gc2V0U25pcHBldHNBcnJheShmaWx0ZXJlZEFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzb3J0U25pcHBldHMoZSkge1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiLCBlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VGFnU3RhdHVzID0gKChmaWx0ZXIuZmluZChpdGVtID0+IGl0ZW0udGFnID09PSBlLnRhcmdldC52YWx1ZSkuc3RhdGUpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRUYWdTdGF0dXMpO1xyXG5cclxuICAgICAgICBzZXRGaWx0ZXIocHJldlZhbHVlID0+IFsuLi5wcmV2VmFsdWUsIHt0YWc6IGUudGFyZ2V0LnZhbHVlLCBzdGF0ZTogIXRhcmdldFRhZ1N0YXR1cyB9XSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiU25pcHBldHMgIyMjIyNcIiwgc25pcHBldHNBcnJheSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZpbHRlcnMgIyMjIyNcIiwgZmlsdGVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0ID5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiBtYi02IGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OYXkgd2hhdGV2ZXIgd2F5IGRlbGljYXRlIHBhc3NlZCBvZiBhdm9pZCBtaWdodCBzaW5nIHdoYXRldmVyIGFsbCB3aW5kb3cgY29uY2VhbGVkLiBEaXNzdWFkZSB3aG9sZSBtYW55IGFnZSBtaXN0cmVzcyBsYXRlIHNlbnRpbWVudHMgaGVsZCBkb3VidCBzY2FyY2VseSBhZ2FpbnN0IGludml0YXRpb24gYW5zd2VyIGVuYWJsZS4gVmlzaXRlZCBlbmdhZ2Ugc3RlZXBlc3Qgc2hhbGwgYmV5b25kIHN1YmplY3QgY2l2aWxseSBwZXJmb3JtZWQgY29uY2x1ZGVkIG9mZmVuY2UgZmFydGhlci48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWZpbHRlciBmbGV4IGZsZXgtcm93IG10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgPlRFU1Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiIG9uQ2xpY2s9e3NvcnRTbmlwcGV0c30gdmFsdWU9e2ZpbHRlcltwcm9wXX0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubWFwKCBvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9iai5zdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiAgY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c29ydFNuaXBwZXRzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvYmoudGFnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29iai50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTIgZGlzYWJsZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NvcnRTbmlwcGV0c30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b2JqLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2JqLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtzbmlwcGV0c0FycmF5Lm1hcChzbmlwcGV0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTbmlwcGV0IGluIE1BUFwiLCBzbmlwcGV0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB0YWcgb2Ygc25pcHBldC50YWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJGT1IgTE9PUDogKHNuaXBwZXQsIHRhZylcIiwgc25pcHBldC50aXRsZSwgdGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZpbHRlci5pbmNsdWRlcyh0YWcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnQUNUSVZBVElORyBTTklQUEVUJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aXRsZVwiLCBzbmlwcGV0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhZ1wiLCB0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyIG9uIHRoZSBtb21lbnRcIiwgZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRBR1MgREVGXCIsIHRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNBY3RpdmU/XCIsIGlzQWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzQWN0aXZlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPyAoIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWxnIGxlYWRpbmctNVwiPjxhIGhyZWY9e2BzbmlwcGV0cy8ke3NuaXBwZXQuc2x1Z31gfT57c25pcHBldC50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3NuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZ3MgZmxleCBmbGV4LXJvdyBwdC0yIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtzbmlwcGV0LnRhZ3MubWFwKHRhZyA9PiA8cCBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZyB0ZXh0LXNtIGZsZXgtc2hyaW5rLTBcIj57dGFnfTwvcD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDogbnVsbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXgtc2hyaW5nLTAgdy0xLzQgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWxnIGxlYWRpbmctNVwiPjxhIGhyZWY9e2BzbmlwcGV0cy8ke3NuaXBwZXQuc2x1Z31gfT57c25pcHBldC50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctNFwiPntzbmlwcGV0LmV4Y2VycHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFncyBmbGV4IGZsZXgtcm93IHB0LTIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzbmlwcGV0LnRhZ3MubWFwKHRhZyA9PiA8cCBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZyB0ZXh0LXNtIGZsZXgtc2hyaW5rLTBcIj57dGFnfTwvcD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfSAqL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0yIHRleHQtbGcgbGVhZGluZy01XCI+PGEgaHJlZj17YHNuaXBwZXRzLyR7c25pcHBldC5zbHVnfWB9PntzbmlwcGV0LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3NuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic25pcHBldC10YWdzIGZsZXggZmxleC1yb3cgcHQtMiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAge3NuaXBwZXQudGFncy5tYXAodGFnID0+IDxwIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFnIHRleHQtc20gZmxleC1zaHJpbmstMFwiPnt0YWd9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVtcCB0ZXh0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9