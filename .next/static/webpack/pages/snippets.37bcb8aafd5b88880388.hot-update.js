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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(tags),
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
    var targetTagStatus = filter.find(function (item) {
      return item.tag === e.target.value;
    }).state;
    var updatedFilter = filter.map(function (obj) {
      return _objectSpread(_objectSpread({}, obj), {}, {
        state: [!obj.state]
      });
    });
    console.log(updatedFilter); //setFilter(prevValue => [...prevValue, {tag: e.target.value, state: !targetTagStatus }]);
  } // console.log("Snippets #####", snippetsArray);
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
              lineNumber: 148,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tags-filter flex flex-row mt-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "tag px-2 py-1 border mr-2",
                children: "TEST"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
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
                    lineNumber: 155,
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
                    lineNumber: 161,
                    columnNumber: 56
                  }, _this);
                }
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
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
              lineNumber: 243,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 143,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJJbmRleCIsInNuaXBwZXRzIiwidGFncyIsInVzZVN0YXRlIiwic25pcHBldHNBcnJheSIsInNldFNuaXBwZXRzQXJyYXkiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwic29ydEJ5VGFnIiwiZSIsImdyb3VwIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJncm91cEVuZCIsImZpbHRlclZhbHVlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJsZW5ndGgiLCJwcmV2VmFsdWUiLCJ0YWciLCJhZGQiLCJzb3J0U25pcHBldHMiLCJ0YXJnZXRUYWdTdGF0dXMiLCJmaW5kIiwiaXRlbSIsInN0YXRlIiwidXBkYXRlZEZpbHRlciIsIm1hcCIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsNEJBQVosR0FBMkMsR0FBM0MsQyxDQUdBO0FBQ0E7O0FBd0NBO0FBQ0E7QUFDQSxTQUFTQyxLQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQ0YsUUFBRCxDQURuQjtBQUFBLE1BQ3hCRyxhQUR3QjtBQUFBLE1BQ1RDLGdCQURTOztBQUFBLG1CQUVIRixzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV4QkksTUFGd0I7QUFBQSxNQUVoQkMsU0FGZ0Isa0JBRy9COzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NILE1BQWxDLEVBSitCLENBSy9CO0FBQ0E7QUFDQTs7QUFDQSxXQUFTSSxTQUFULENB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ZixvQkFBR0EsR0FBRyxDQUFDSCxLQUFQLEVBQWM7QUFDVixzQ0FBTztBQUFTLDZCQUFTLEVBQUMsMkJBQW5CO0FBQ1MsMkJBQU8sRUFBRUosWUFEbEI7QUFFUyx5QkFBSyxFQUFFTyxHQUFHLENBQUNULEdBRnBCO0FBQUEsOEJBR01TLEdBQUcsQ0FBQ1Q7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBS0gsaUJBTkQsTUFNTztBQUNILHNDQUFPO0FBQVMsNkJBQVMsRUFBQyxvQ0FBbkI7QUFDUywyQkFBTyxFQUFFRSxZQURsQjtBQUVTLHlCQUFLLEVBQUVPLEdBQUcsQ0FBQ1QsR0FGcEI7QUFHUyw0QkFBUSxNQUhqQjtBQUFBLDhCQUlNUyxHQUFHLENBQUNUO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQU1IO0FBQ0osZUFmRCxDQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUEwQkk7QUFBSyxxQkFBUyxFQUFDLDRDQUFmO0FBQUE7QUFBQTtBQTREUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2RVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUE0R0g7O0dBeE1RdEIsSzs7S0FBQUEsSzs7QUEwTU1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NuaXBwZXRzLjM3YmNiOGFhZmQ1Yjg4ODgwMzg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQuanN4JztcclxucHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJ1xyXG5cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICB1cmk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9HUkFQSF9BUEksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG59KTtcclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIC8vZGVzdHJ1Y3R1cmUgcmVzcG9uc2UgdG8gZGF0YSBvYmpcclxuICAgIGNvbnN0IHsgZGF0YToge3NuaXBwZXRzfSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogZ3FsYHsgXHJcbiAgICAgICAgICAgIHNuaXBwZXRzIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0YWdzXHJcbiAgICAgICAgICAgICAgICBleGNlcnB0XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgIH1gXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbGxlY3RpbmcgYWxsIHBvc3NpYmxlIHRhZ3MgZm9yIHNuaXBwZXRzIHRvIHBhc3MgdGhlbSBhcyBkZWZhdWx0IHZhbHVlXHJcbiAgICBsZXQgdGFnc0FycmF5ID0gW11cclxuICAgIHNuaXBwZXRzLmZvckVhY2goc25pcHBldCA9PiBzbmlwcGV0LnRhZ3MuZm9yRWFjaCh0YWcgPT4gIXRhZ3NBcnJheS5pbmNsdWRlcyh0YWcpICYmIHRhZ3NBcnJheS5wdXNoKHRhZykpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiQVJSXCIsIHRhZ3NBcnJheS5tYXAodGFnID0+IHsgcmV0dXJuIHt0YWc6IHRhZywgaXNBY3RpdmU6IHRydWV9fSkpXHJcblxyXG4gICAgbGV0IG5ld0FyciA9IFtdO1xyXG4gICAgdGFnc0FycmF5LmZvckVhY2goaXRlbSA9PiBuZXdBcnIucHVzaCh7dGFnOiBpdGVtLCBzdGF0ZTogdHJ1ZX0pKVxyXG4gICAgbmV3QXJyID0gbmV3QXJyLm1hcChpdGVtID0+IGl0ZW0udGFnID09PSBcIlNhbml0eVwiID8gey4uLml0ZW0sIHN0YXRlOiBmYWxzZX0gOiBpdGVtKVxyXG5cclxuICAgIC8vY29uc3Qgb2JqZWN0cyA9IHRhZ3NBcnJheS5yZWR1Y2UoKG9iaiwga2V5KSA9PiAoey4uLm9iaiwgW2tleV06IHRydWV9KSwge30pXHJcbiAgICAvL2NvbnN0IHRhZ3NPYmplY3RzID0gdGFnc0FycmF5LmZvckVhY2goIHRhZyA9PiB7IHJldHVybiB7W3RhZ106IHRydWV9fSlcclxuICAgIHJldHVybiB7IHByb3BzOiB7c25pcHBldHM6IHNuaXBwZXRzLCB0YWdzOiBuZXdBcnJ9fTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmZ1bmN0aW9uIEluZGV4KCB7c25pcHBldHMsIHRhZ3N9ICkge1xyXG4gICAgY29uc3QgW3NuaXBwZXRzQXJyYXksIHNldFNuaXBwZXRzQXJyYXldID0gdXNlU3RhdGUoc25pcHBldHMpO1xyXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHRhZ3MpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNOSVBQRVRTIFBST1BTIERBVEEgPiBcIiwgc25pcHBldHMpO1xyXG4gICAgY29uc29sZS5sb2coXCJUQUdTIFBST1BTIERBVEEgPiBcIiwgZmlsdGVyKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRklMVEVSIElOSVQgREFUQSA+IFwiLCB0YWdzKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJ0ZXN0IHJlc3RcIiwgcmVzdCk7XHJcbiAgICAvL1NvcnQgZW50cmVlcyBieSBzZWxlY3RlZCB0YWdcclxuICAgIGZ1bmN0aW9uIHNvcnRCeVRhZyhlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgY29uc29sZS5ncm91cCgnSW5pdCBzb3J0aW5nJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT24gQ2xpY2sgIyBTbmlwcGV0cyBwcmVzc2VkXCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbiBDbGljayAjIFNuaXBwZXRzIGFyclwiLCBlLnRhcmdldC5jbGFzc0xpc3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uIGNsaWNrICMgZXZlbnRcIiwgZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpbHRlclZhbHVlID0gW107XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgLy9ERUFDVElWQVRJTkcgRklMVEVSXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0RlYWN0aXZhdGluZy4uLicpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIC8vdGVzdCB3aGV0aGVyIGZpbHRlciBoYWQgMSB0YWcgb3IgbW9yZVxyXG4gICAgICAgICAgICBpZihmaWx0ZXIubGVuZ3RoID0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy9yZXNldHRpbmcgZmlsdGVyIHRvIGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0Rlc2VsZWN0aW5nIHRhZycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmluZyBsYXN0IGZpbHRlciAoZmlsdGVyIGxlbmd0aCk6XCIsIGZpbHRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXNldHRpbmcgZGVmYXVsdCBmaWx0ZXIgKGxlbmd0aCk6XCIsIGZpbHRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgdGFnIGZyb20gZmlsdGVyXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF0IGxlYXN0IDIgZmlsdGVycywgcmVtb3Zpbmcgc2VsZWN0ZWQgKGluaXQgZmlsdGVyc3MsIHJlbW92ZSB0YWcpOlwiLCBmaWx0ZXIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHByZXZWYWx1ZSA9PiBwcmV2VmFsdWUuZmlsdGVyKCB0YWcgIT0gZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgLy9BQ1RJVkFUSU5HIEZJTFRFUlxyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdBY3RpdmF0aW5nLi4uJyk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vdGVzdCB3aGV0aGVyIGZpbHRlciB3YXMgZGVmYXVsdCBvciBub3RcclxuICAgICAgICAgICAgaWYoZmlsdGVyID09PSB0YWdzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbHRlcnMgYXJlIGVxdWFsICh0YWdzLCBmaWx0ZXIpOlwiLCB0YWdzLmxlbmd0aCwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSBhbGwgZmlsdGVyIGRhdGEgaWYgZmlsdGVyPXRhZ3MsIGFkZCAxIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAvL3JlcmVuZGVyIHNuaXBwZXRzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIGZpbHRlciwgc2hvdWxkIGJlIDEgaXRlbSBvbmx5XCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKFtlLnRhcmdldC52YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVycyBhcmUgTk9UIGVxdWFsICh0YWdzLCBmaWx0ZXIpOlwiLCB0YWdzLmxlbmd0aCwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEZpbHRlcihwcmV2VmFsdWUgPT4gWy4uLnByZXZWYWx1ZSwgZS50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vcmVzZXQgZmlsdGVyIGlmIDEgb25seSB3YXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgLy9yZW1vdmUgc2VsZWN0ZWQgaWYgMisgd2VyZSBzZWxlY3RlZFxyXG4gICAgICAgICAgICAvL3JlcmVuZGVyIHNuaXBwZXRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gY29uc3QgZmlsdGVyZWRBcnJheSA9IHNuaXBwZXRzQXJyYXkuZmlsdGVyKGl0ZW0gPT4gaXRlbS50YWdzLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJPbiBjbGljayAjIGZpbHRlcmVkIGFycmF5IG9mIHNuaXBwZXRzOiBcIiwgZmlsdGVyZWRBcnJheSk7XHJcbiAgICAgICAgLy8gc2V0U25pcHBldHNBcnJheShmaWx0ZXJlZEFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzb3J0U25pcHBldHMoZSkge1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiLCBlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VGFnU3RhdHVzID0gKChmaWx0ZXIuZmluZChpdGVtID0+IGl0ZW0udGFnID09PSBlLnRhcmdldC52YWx1ZSkuc3RhdGUpKTtcclxuICAgICAgICBjb25zdCB1cGRhdGVkRmlsdGVyID0gZmlsdGVyLm1hcCggb2JqID0+ICh7Li4ub2JqLCBzdGF0ZTogWyFvYmouc3RhdGVdfSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRGaWx0ZXIpO1xyXG5cclxuICAgICAgICAvL3NldEZpbHRlcihwcmV2VmFsdWUgPT4gWy4uLnByZXZWYWx1ZSwge3RhZzogZS50YXJnZXQudmFsdWUsIHN0YXRlOiAhdGFyZ2V0VGFnU3RhdHVzIH1dKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJTbmlwcGV0cyAjIyMjI1wiLCBzbmlwcGV0c0FycmF5KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRmlsdGVycyAjIyMjI1wiLCBmaWx0ZXIpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sdW1uIG1iLTYgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5heSB3aGF0ZXZlciB3YXkgZGVsaWNhdGUgcGFzc2VkIG9mIGF2b2lkIG1pZ2h0IHNpbmcgd2hhdGV2ZXIgYWxsIHdpbmRvdyBjb25jZWFsZWQuIERpc3N1YWRlIHdob2xlIG1hbnkgYWdlIG1pc3RyZXNzIGxhdGUgc2VudGltZW50cyBoZWxkIGRvdWJ0IHNjYXJjZWx5IGFnYWluc3QgaW52aXRhdGlvbiBhbnN3ZXIgZW5hYmxlLiBWaXNpdGVkIGVuZ2FnZSBzdGVlcGVzdCBzaGFsbCBiZXlvbmQgc3ViamVjdCBjaXZpbGx5IHBlcmZvcm1lZCBjb25jbHVkZWQgb2ZmZW5jZSBmYXJ0aGVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtZmlsdGVyIGZsZXggZmxleC1yb3cgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTJcIiA+VEVTVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgb25DbGljaz17c29ydFNuaXBwZXRzfSB2YWx1ZT17ZmlsdGVyW3Byb3BdfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5tYXAoIG9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uICBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzb3J0U25pcHBldHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29iai50YWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2JqLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiAgY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMiBkaXNhYmxlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c29ydFNuaXBwZXRzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvYmoudGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvYmoudGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC04IGZsZXggZmxleC1yb3cgZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3NuaXBwZXRzQXJyYXkubWFwKHNuaXBwZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNuaXBwZXQgaW4gTUFQXCIsIHNuaXBwZXQudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHRhZyBvZiBzbmlwcGV0LnRhZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkZPUiBMT09QOiAoc25pcHBldCwgdGFnKVwiLCBzbmlwcGV0LnRpdGxlLCB0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZmlsdGVyLmluY2x1ZGVzKHRhZykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdBQ1RJVkFUSU5HIFNOSVBQRVQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRpdGxlXCIsIHNuaXBwZXQudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFnXCIsIHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWx0ZXIgb24gdGhlIG1vbWVudFwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVEFHUyBERUZcIiwgdGFncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc0FjdGl2ZT9cIiwgaXNBY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNBY3RpdmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA/ICggPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4LXNocmluZy0wIHctMS80IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0yIHRleHQtbGcgbGVhZGluZy01XCI+PGEgaHJlZj17YHNuaXBwZXRzLyR7c25pcHBldC5zbHVnfWB9PntzbmlwcGV0LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTRcIj57c25pcHBldC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFncyBmbGV4IGZsZXgtcm93IHB0LTIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge3NuaXBwZXQudGFncy5tYXAodGFnID0+IDxwIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFnIHRleHQtc20gZmxleC1zaHJpbmstMFwiPnt0YWd9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgOiBudWxsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0yIHRleHQtbGcgbGVhZGluZy01XCI+PGEgaHJlZj17YHNuaXBwZXRzLyR7c25pcHBldC5zbHVnfWB9PntzbmlwcGV0LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3NuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic25pcHBldC10YWdzIGZsZXggZmxleC1yb3cgcHQtMiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NuaXBwZXQudGFncy5tYXAodGFnID0+IDxwIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFnIHRleHQtc20gZmxleC1zaHJpbmstMFwiPnt0YWd9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9ICovfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4LXNocmluZy0wIHctMS80IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTIgdGV4dC1sZyBsZWFkaW5nLTVcIj48YSBocmVmPXtgc25pcHBldHMvJHtzbmlwcGV0LnNsdWd9YH0+e3NuaXBwZXQudGl0bGV9PC9hPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTRcIj57c25pcHBldC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZ3MgZmxleCBmbGV4LXJvdyBwdC0yIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB7c25pcHBldC50YWdzLm1hcCh0YWcgPT4gPHAgY2xhc3NOYW1lPVwic25pcHBldC10YWcgdGV4dC1zbSBmbGV4LXNocmluay0wXCI+e3RhZ308L3A+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZW1wIHRleHQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=