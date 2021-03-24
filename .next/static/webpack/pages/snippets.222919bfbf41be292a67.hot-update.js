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
      allTags = _ref.allTags;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(snippets),
      snippetsArray = _useState[0],
      setSnippetsArray = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(allTags),
      filter = _useState2[0],
      setFilter = _useState2[1];

  console.log("SNIPPETS PROPS DATA > ", snippets);
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

  function initTags() {
    //collecting all possible tags for CURRENT snippets to pass them as default value
    //allTags - all possible from SSR stage
    var sortedTags = [];
    snippetsArray.forEach(function (snippet) {
      return snippet.tags.forEach(function (tag) {
        return !sortedTags.includes(tag) && sortedTags.push(tag);
      });
    }); // console.log("ARR", tagsArray.map(tag => { return {tag: tag, isActive: true}}))

    var newSortedArr = [];
    sortedTags.forEach(function (item) {
      return newSortedArr.push({
        tag: item,
        state: true
      });
    });
    setFilter(newSortedArr);
  }

  function sortSnippets(e) {
    console.log("click", e.target); //const targetTagStatus = ((filter.find(item => item.tag === e.target.value).state));

    var updatedFilter = filter.map(function (obj) {
      return obj.tag === e.target.value ? _objectSpread(_objectSpread({}, obj), {}, {
        state: !obj.state
      }) : obj;
    });
    console.log(updatedFilter);
    initTags();
    setFilter(updatedFilter);
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
              lineNumber: 158,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "tags-filter flex flex-row mt-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "tag px-2 py-1 border mr-2",
                children: "TEST"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 160,
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
                    lineNumber: 165,
                    columnNumber: 56
                  }, _this);
                } else {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                    className: "tag px-2 py-1 border mr-2 selected",
                    onClick: sortSnippets,
                    value: obj.tag,
                    children: obj.tag
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 56
                  }, _this);
                }
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 157,
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
              lineNumber: 253,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 17
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 153,
    columnNumber: 13
  }, this);
}

_s(Index, "8lbHPORIaHzxQFfl5OugYhwT2cg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJJbmRleCIsInNuaXBwZXRzIiwiYWxsVGFncyIsInVzZVN0YXRlIiwic25pcHBldHNBcnJheSIsInNldFNuaXBwZXRzQXJyYXkiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwic29ydEJ5VGFnIiwiZSIsImdyb3VwIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJncm91cEVuZCIsImZpbHRlclZhbHVlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJsZW5ndGgiLCJ0YWdzIiwicHJldlZhbHVlIiwidGFnIiwiYWRkIiwiaW5pdFRhZ3MiLCJzb3J0ZWRUYWdzIiwiZm9yRWFjaCIsInNuaXBwZXQiLCJpbmNsdWRlcyIsInB1c2giLCJuZXdTb3J0ZWRBcnIiLCJpdGVtIiwic3RhdGUiLCJzb3J0U25pcHBldHMiLCJ1cGRhdGVkRmlsdGVyIiwibWFwIiwib2JqIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0FBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyw0QkFBWixHQUEyQyxHQUEzQyxDLENBR0E7QUFDQTs7QUFvQ0E7QUFDQTtBQUNBLFNBQVNDLEtBQVQsT0FBc0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDRixRQUFELENBRGhCO0FBQUEsTUFDM0JHLGFBRDJCO0FBQUEsTUFDWkMsZ0JBRFk7O0FBQUEsbUJBRU5GLHNEQUFRLENBQUNELE9BQUQsQ0FGRjtBQUFBLE1BRTNCSSxNQUYyQjtBQUFBLE1BRW5CQyxTQUZtQjs7QUFHbENDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUFa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ZUFmRCxDQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosZUEwQkk7QUFBSyxxQkFBUyxFQUFDLDRDQUFmO0FBQUE7QUFBQTtBQTREUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2RVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkExQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUE0R0g7O0dBdE5RdkIsSzs7S0FBQUEsSzs7QUF3Tk1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NuaXBwZXRzLjIyMjkxOWJmYmY0MWJlMjkyYTY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQuanN4JztcclxucHJvY2Vzcy5lbnYuTk9ERV9UTFNfUkVKRUNUX1VOQVVUSE9SSVpFRCA9ICcwJ1xyXG5cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICB1cmk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9HUkFQSF9BUEksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG59KTtcclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gVGhpcyBmdW5jdGlvbiBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIC8vZGVzdHJ1Y3R1cmUgcmVzcG9uc2UgdG8gZGF0YSBvYmpcclxuICAgIGNvbnN0IHsgZGF0YToge3NuaXBwZXRzfSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogZ3FsYHsgXHJcbiAgICAgICAgICAgIHNuaXBwZXRzIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICB0YWdzXHJcbiAgICAgICAgICAgICAgICBleGNlcnB0XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVkQXRcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgIH1gXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NvbGxlY3RpbmcgYWxsIHBvc3NpYmxlIHRhZ3MgZm9yIHNuaXBwZXRzIHRvIHBhc3MgdGhlbSBhcyBkZWZhdWx0IHZhbHVlXHJcbiAgICBsZXQgdGFnc0FycmF5ID0gW11cclxuICAgIHNuaXBwZXRzLmZvckVhY2goc25pcHBldCA9PiBzbmlwcGV0LnRhZ3MuZm9yRWFjaCh0YWcgPT4gIXRhZ3NBcnJheS5pbmNsdWRlcyh0YWcpICYmIHRhZ3NBcnJheS5wdXNoKHRhZykpKTtcclxuXHJcbiAgICBsZXQgbmV3QXJyID0gW107XHJcbiAgICB0YWdzQXJyYXkuZm9yRWFjaChpdGVtID0+IG5ld0Fyci5wdXNoKHt0YWc6IGl0ZW0sIHN0YXRlOiB0cnVlfSkpO1xyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7c25pcHBldHM6IHNuaXBwZXRzLCBhbGxUYWdzOiBuZXdBcnJ9fTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmZ1bmN0aW9uIEluZGV4KCB7c25pcHBldHMsIGFsbFRhZ3N9ICkge1xyXG4gICAgY29uc3QgW3NuaXBwZXRzQXJyYXksIHNldFNuaXBwZXRzQXJyYXldID0gdXNlU3RhdGUoc25pcHBldHMpO1xyXG4gICAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKGFsbFRhZ3MpXHJcbiAgICBjb25zb2xlLmxvZyhcIlNOSVBQRVRTIFBST1BTIERBVEEgPiBcIiwgc25pcHBldHMpO1xyXG4gICAgY29uc29sZS5sb2coXCJUQUdTIFBST1BTIERBVEEgPiBcIiwgZmlsdGVyKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRklMVEVSIElOSVQgREFUQSA+IFwiLCB0YWdzKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJ0ZXN0IHJlc3RcIiwgcmVzdCk7XHJcbiAgICAvL1NvcnQgZW50cmVlcyBieSBzZWxlY3RlZCB0YWdcclxuICAgIGZ1bmN0aW9uIHNvcnRCeVRhZyhlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcIik7XHJcbiAgICAgICAgY29uc29sZS5ncm91cCgnSW5pdCBzb3J0aW5nJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT24gQ2xpY2sgIyBTbmlwcGV0cyBwcmVzc2VkXCIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbiBDbGljayAjIFNuaXBwZXRzIGFyclwiLCBlLnRhcmdldC5jbGFzc0xpc3QpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uIGNsaWNrICMgZXZlbnRcIiwgZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpbHRlclZhbHVlID0gW107XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgLy9ERUFDVElWQVRJTkcgRklMVEVSXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0RlYWN0aXZhdGluZy4uLicpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIC8vdGVzdCB3aGV0aGVyIGZpbHRlciBoYWQgMSB0YWcgb3IgbW9yZVxyXG4gICAgICAgICAgICBpZihmaWx0ZXIubGVuZ3RoID0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy9yZXNldHRpbmcgZmlsdGVyIHRvIGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0Rlc2VsZWN0aW5nIHRhZycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmluZyBsYXN0IGZpbHRlciAoZmlsdGVyIGxlbmd0aCk6XCIsIGZpbHRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXNldHRpbmcgZGVmYXVsdCBmaWx0ZXIgKGxlbmd0aCk6XCIsIGZpbHRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgdGFnIGZyb20gZmlsdGVyXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF0IGxlYXN0IDIgZmlsdGVycywgcmVtb3Zpbmcgc2VsZWN0ZWQgKGluaXQgZmlsdGVyc3MsIHJlbW92ZSB0YWcpOlwiLCBmaWx0ZXIsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHByZXZWYWx1ZSA9PiBwcmV2VmFsdWUuZmlsdGVyKCB0YWcgIT0gZS50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcclxuICAgICAgICAgICAgLy9BQ1RJVkFUSU5HIEZJTFRFUlxyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdBY3RpdmF0aW5nLi4uJyk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vdGVzdCB3aGV0aGVyIGZpbHRlciB3YXMgZGVmYXVsdCBvciBub3RcclxuICAgICAgICAgICAgaWYoZmlsdGVyID09PSB0YWdzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbHRlcnMgYXJlIGVxdWFsICh0YWdzLCBmaWx0ZXIpOlwiLCB0YWdzLmxlbmd0aCwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSBhbGwgZmlsdGVyIGRhdGEgaWYgZmlsdGVyPXRhZ3MsIGFkZCAxIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAvL3JlcmVuZGVyIHNuaXBwZXRzXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIGZpbHRlciwgc2hvdWxkIGJlIDEgaXRlbSBvbmx5XCIpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKFtlLnRhcmdldC52YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVycyBhcmUgTk9UIGVxdWFsICh0YWdzLCBmaWx0ZXIpOlwiLCB0YWdzLmxlbmd0aCwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEZpbHRlcihwcmV2VmFsdWUgPT4gWy4uLnByZXZWYWx1ZSwgZS50YXJnZXQudmFsdWVdKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOZXcgZmlsdGVyIHZhbHVlOlwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vcmVzZXQgZmlsdGVyIGlmIDEgb25seSB3YXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgLy9yZW1vdmUgc2VsZWN0ZWQgaWYgMisgd2VyZSBzZWxlY3RlZFxyXG4gICAgICAgICAgICAvL3JlcmVuZGVyIHNuaXBwZXRzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gY29uc3QgZmlsdGVyZWRBcnJheSA9IHNuaXBwZXRzQXJyYXkuZmlsdGVyKGl0ZW0gPT4gaXRlbS50YWdzLmluY2x1ZGVzKGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJPbiBjbGljayAjIGZpbHRlcmVkIGFycmF5IG9mIHNuaXBwZXRzOiBcIiwgZmlsdGVyZWRBcnJheSk7XHJcbiAgICAgICAgLy8gc2V0U25pcHBldHNBcnJheShmaWx0ZXJlZEFycmF5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0VGFncygpIHtcclxuICAgICAgICAvL2NvbGxlY3RpbmcgYWxsIHBvc3NpYmxlIHRhZ3MgZm9yIENVUlJFTlQgc25pcHBldHMgdG8gcGFzcyB0aGVtIGFzIGRlZmF1bHQgdmFsdWVcclxuICAgICAgICAvL2FsbFRhZ3MgLSBhbGwgcG9zc2libGUgZnJvbSBTU1Igc3RhZ2VcclxuICAgICAgICBsZXQgc29ydGVkVGFncyA9IFtdXHJcbiAgICAgICAgc25pcHBldHNBcnJheS5mb3JFYWNoKHNuaXBwZXQgPT4gc25pcHBldC50YWdzLmZvckVhY2godGFnID0+ICFzb3J0ZWRUYWdzLmluY2x1ZGVzKHRhZykgJiYgc29ydGVkVGFncy5wdXNoKHRhZykpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFSUlwiLCB0YWdzQXJyYXkubWFwKHRhZyA9PiB7IHJldHVybiB7dGFnOiB0YWcsIGlzQWN0aXZlOiB0cnVlfX0pKVxyXG5cclxuICAgICAgICBsZXQgbmV3U29ydGVkQXJyID0gW107XHJcbiAgICAgICAgc29ydGVkVGFncy5mb3JFYWNoKCBpdGVtID0+IG5ld1NvcnRlZEFyci5wdXNoKHt0YWc6IGl0ZW0sIHN0YXRlOiB0cnVlfSkpXHJcbiAgICAgICAgc2V0RmlsdGVyKG5ld1NvcnRlZEFycilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzb3J0U25pcHBldHMoZSkge1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiLCBlLnRhcmdldCk7XHJcbiAgICAgICAgLy9jb25zdCB0YXJnZXRUYWdTdGF0dXMgPSAoKGZpbHRlci5maW5kKGl0ZW0gPT4gaXRlbS50YWcgPT09IGUudGFyZ2V0LnZhbHVlKS5zdGF0ZSkpO1xyXG5cclxuICAgICAgICBjb25zdCB1cGRhdGVkRmlsdGVyID0gZmlsdGVyLm1hcCggb2JqID0+IG9iai50YWcgPT09IGUudGFyZ2V0LnZhbHVlID8gKHsuLi5vYmosIHN0YXRlOiAhb2JqLnN0YXRlfSkgOiBvYmopO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRGaWx0ZXIpO1xyXG4gICAgICAgIGluaXRUYWdzKCk7XHJcbiAgICAgICAgc2V0RmlsdGVyKHVwZGF0ZWRGaWx0ZXIpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlNuaXBwZXRzICMjIyMjXCIsIHNuaXBwZXRzQXJyYXkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJGaWx0ZXJzICMjIyMjXCIsIGZpbHRlcik7XHJcbiAgICBcclxuICAgIHJldHVybiAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPExheW91dCA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2x1bW4gbWItNiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTY0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TmF5IHdoYXRldmVyIHdheSBkZWxpY2F0ZSBwYXNzZWQgb2YgYXZvaWQgbWlnaHQgc2luZyB3aGF0ZXZlciBhbGwgd2luZG93IGNvbmNlYWxlZC4gRGlzc3VhZGUgd2hvbGUgbWFueSBhZ2UgbWlzdHJlc3MgbGF0ZSBzZW50aW1lbnRzIGhlbGQgZG91YnQgc2NhcmNlbHkgYWdhaW5zdCBpbnZpdGF0aW9uIGFuc3dlciBlbmFibGUuIFZpc2l0ZWQgZW5nYWdlIHN0ZWVwZXN0IHNoYWxsIGJleW9uZCBzdWJqZWN0IGNpdmlsbHkgcGVyZm9ybWVkIGNvbmNsdWRlZCBvZmZlbmNlIGZhcnRoZXIuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFncy1maWx0ZXIgZmxleCBmbGV4LXJvdyBtdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiID5URVNUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTJcIiBvbkNsaWNrPXtzb3J0U25pcHBldHN9IHZhbHVlPXtmaWx0ZXJbcHJvcF19PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyLm1hcCggb2JqID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvYmouc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NvcnRTbmlwcGV0c30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b2JqLnRhZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvYmoudGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uICBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yIHNlbGVjdGVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzb3J0U25pcHBldHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29iai50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvYmoudGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC04IGZsZXggZmxleC1yb3cgZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3NuaXBwZXRzQXJyYXkubWFwKHNuaXBwZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNuaXBwZXQgaW4gTUFQXCIsIHNuaXBwZXQudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHRhZyBvZiBzbmlwcGV0LnRhZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkZPUiBMT09QOiAoc25pcHBldCwgdGFnKVwiLCBzbmlwcGV0LnRpdGxlLCB0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZmlsdGVyLmluY2x1ZGVzKHRhZykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdBQ1RJVkFUSU5HIFNOSVBQRVQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRpdGxlXCIsIHNuaXBwZXQudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFnXCIsIHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWx0ZXIgb24gdGhlIG1vbWVudFwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVEFHUyBERUZcIiwgdGFncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc0FjdGl2ZT9cIiwgaXNBY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNBY3RpdmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA/ICggPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4LXNocmluZy0wIHctMS80IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0yIHRleHQtbGcgbGVhZGluZy01XCI+PGEgaHJlZj17YHNuaXBwZXRzLyR7c25pcHBldC5zbHVnfWB9PntzbmlwcGV0LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTRcIj57c25pcHBldC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFncyBmbGV4IGZsZXgtcm93IHB0LTIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge3NuaXBwZXQudGFncy5tYXAodGFnID0+IDxwIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFnIHRleHQtc20gZmxleC1zaHJpbmstMFwiPnt0YWd9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgOiBudWxsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0yIHRleHQtbGcgbGVhZGluZy01XCI+PGEgaHJlZj17YHNuaXBwZXRzLyR7c25pcHBldC5zbHVnfWB9PntzbmlwcGV0LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3NuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic25pcHBldC10YWdzIGZsZXggZmxleC1yb3cgcHQtMiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NuaXBwZXQudGFncy5tYXAodGFnID0+IDxwIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFnIHRleHQtc20gZmxleC1zaHJpbmstMFwiPnt0YWd9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9ICovfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4LXNocmluZy0wIHctMS80IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTIgdGV4dC1sZyBsZWFkaW5nLTVcIj48YSBocmVmPXtgc25pcHBldHMvJHtzbmlwcGV0LnNsdWd9YH0+e3NuaXBwZXQudGl0bGV9PC9hPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTRcIj57c25pcHBldC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZ3MgZmxleCBmbGV4LXJvdyBwdC0yIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB7c25pcHBldC50YWdzLm1hcCh0YWcgPT4gPHAgY2xhc3NOYW1lPVwic25pcHBldC10YWcgdGV4dC1zbSBmbGV4LXNocmluay0wXCI+e3RhZ308L3A+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZW1wIHRleHQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=