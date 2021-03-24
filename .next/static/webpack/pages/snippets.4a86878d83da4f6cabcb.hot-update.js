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
        state: !obj.state
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJJbmRleCIsInNuaXBwZXRzIiwidGFncyIsInVzZVN0YXRlIiwic25pcHBldHNBcnJheSIsInNldFNuaXBwZXRzQXJyYXkiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwic29ydEJ5VGFnIiwiZSIsImdyb3VwIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJncm91cEVuZCIsImZpbHRlclZhbHVlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJsZW5ndGgiLCJwcmV2VmFsdWUiLCJ0YWciLCJhZGQiLCJzb3J0U25pcHBldHMiLCJ0YXJnZXRUYWdTdGF0dXMiLCJmaW5kIiwiaXRlbSIsInN0YXRlIiwidXBkYXRlZEZpbHRlciIsIm1hcCIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsNEJBQVosR0FBMkMsR0FBM0MsQyxDQUdBO0FBQ0E7O0FBd0NBO0FBQ0E7QUFDQSxTQUFTQyxLQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQ0YsUUFBRCxDQURuQjtBQUFBLE1BQ3hCRyxhQUR3QjtBQUFBLE1BQ1RDLGdCQURTOztBQUFBLG1CQUVIRixzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV4QkksTUFGd0I7QUFBQSxNQUVoQkMsU0FGZ0Isa0JBRy9COzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NILE1BQWxDLEVBSitCLENBSy9CO0FBQ0E7QUFDQTs7QUFDQSxXQUFTSSxTQUFULENB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QUFHLENBQUNILEtBQVAsRUFBYztBQUNWLHNDQUFPO0FBQVMsNkJBQVMsRUFBQywyQkFBbkI7QUFDUywyQkFBTyxFQUFFSixZQURsQjtBQUVTLHlCQUFLLEVBQUVPLEdBQUcsQ0FBQ1QsR0FGcEI7QUFBQSw4QkFHTVMsR0FBRyxDQUFDVDtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVA7QUFLSCxpQkFORCxNQU1PO0FBQ0gsc0NBQU87QUFBUyw2QkFBUyxFQUFDLG9DQUFuQjtBQUNTLDJCQUFPLEVBQUVFLFlBRGxCO0FBRVMseUJBQUssRUFBRU8sR0FBRyxDQUFDVCxHQUZwQjtBQUdTLDRCQUFRLE1BSGpCO0FBQUEsOEJBSU1TLEdBQUcsQ0FBQ1Q7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBTUg7QUFDSixlQWZELENBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQTBCSTtBQUFLLHFCQUFTLEVBQUMsNENBQWY7QUFBQTtBQUFBO0FBNERRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZFUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQTRHSDs7R0F4TVF0QixLOztLQUFBQSxLOztBQTBNTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc25pcHBldHMuNGE4Njg3OGQ4M2RhNGY2Y2FiY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC5qc3gnO1xyXG5wcm9jZXNzLmVudi5OT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEID0gJzAnXHJcblxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dSQVBIX0FQSSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbn0pO1xyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgLy9kZXN0cnVjdHVyZSByZXNwb25zZSB0byBkYXRhIG9ialxyXG4gICAgY29uc3QgeyBkYXRhOiB7c25pcHBldHN9IH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBncWxgeyBcclxuICAgICAgICAgICAgc25pcHBldHMge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRhZ3NcclxuICAgICAgICAgICAgICAgIGV4Y2VycHRcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfWBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY29sbGVjdGluZyBhbGwgcG9zc2libGUgdGFncyBmb3Igc25pcHBldHMgdG8gcGFzcyB0aGVtIGFzIGRlZmF1bHQgdmFsdWVcclxuICAgIGxldCB0YWdzQXJyYXkgPSBbXVxyXG4gICAgc25pcHBldHMuZm9yRWFjaChzbmlwcGV0ID0+IHNuaXBwZXQudGFncy5mb3JFYWNoKHRhZyA9PiAhdGFnc0FycmF5LmluY2x1ZGVzKHRhZykgJiYgdGFnc0FycmF5LnB1c2godGFnKSkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJBUlJcIiwgdGFnc0FycmF5Lm1hcCh0YWcgPT4geyByZXR1cm4ge3RhZzogdGFnLCBpc0FjdGl2ZTogdHJ1ZX19KSlcclxuXHJcbiAgICBsZXQgbmV3QXJyID0gW107XHJcbiAgICB0YWdzQXJyYXkuZm9yRWFjaChpdGVtID0+IG5ld0Fyci5wdXNoKHt0YWc6IGl0ZW0sIHN0YXRlOiB0cnVlfSkpXHJcbiAgICBuZXdBcnIgPSBuZXdBcnIubWFwKGl0ZW0gPT4gaXRlbS50YWcgPT09IFwiU2FuaXR5XCIgPyB7Li4uaXRlbSwgc3RhdGU6IGZhbHNlfSA6IGl0ZW0pXHJcblxyXG4gICAgLy9jb25zdCBvYmplY3RzID0gdGFnc0FycmF5LnJlZHVjZSgob2JqLCBrZXkpID0+ICh7Li4ub2JqLCBba2V5XTogdHJ1ZX0pLCB7fSlcclxuICAgIC8vY29uc3QgdGFnc09iamVjdHMgPSB0YWdzQXJyYXkuZm9yRWFjaCggdGFnID0+IHsgcmV0dXJuIHtbdGFnXTogdHJ1ZX19KVxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHtzbmlwcGV0czogc25pcHBldHMsIHRhZ3M6IG5ld0Fycn19O1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuZnVuY3Rpb24gSW5kZXgoIHtzbmlwcGV0cywgdGFnc30gKSB7XHJcbiAgICBjb25zdCBbc25pcHBldHNBcnJheSwgc2V0U25pcHBldHNBcnJheV0gPSB1c2VTdGF0ZShzbmlwcGV0cyk7XHJcbiAgICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUodGFncylcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiU05JUFBFVFMgUFJPUFMgREFUQSA+IFwiLCBzbmlwcGV0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRBR1MgUFJPUFMgREFUQSA+IFwiLCBmaWx0ZXIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJGSUxURVIgSU5JVCBEQVRBID4gXCIsIHRhZ3MpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInRlc3QgcmVzdFwiLCByZXN0KTtcclxuICAgIC8vU29ydCBlbnRyZWVzIGJ5IHNlbGVjdGVkIHRhZ1xyXG4gICAgZnVuY3Rpb24gc29ydEJ5VGFnKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICBjb25zb2xlLmdyb3VwKCdJbml0IHNvcnRpbmcnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbiBDbGljayAjIFNuaXBwZXRzIHByZXNzZWRcIiwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uIENsaWNrICMgU25pcHBldHMgYXJyXCIsIGUudGFyZ2V0LmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT24gY2xpY2sgIyBldmVudFwiLCBlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuICAgICAgICBsZXQgZmlsdGVyVmFsdWUgPSBbXTtcclxuXHJcblxyXG5cclxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAvL0RFQUNUSVZBVElORyBGSUxURVJcclxuICAgICAgICAgICAgY29uc29sZS5ncm91cCgnRGVhY3RpdmF0aW5nLi4uJyk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgLy90ZXN0IHdoZXRoZXIgZmlsdGVyIGhhZCAxIHRhZyBvciBtb3JlXHJcbiAgICAgICAgICAgIGlmKGZpbHRlci5sZW5ndGggPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL3Jlc2V0dGluZyBmaWx0ZXIgdG8gZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cCgnRGVzZWxlY3RpbmcgdGFnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbW92aW5nIGxhc3QgZmlsdGVyIChmaWx0ZXIgbGVuZ3RoKTpcIiwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIodGFncyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc2V0dGluZyBkZWZhdWx0IGZpbHRlciAobGVuZ3RoKTpcIiwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSB0YWcgZnJvbSBmaWx0ZXJcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXQgbGVhc3QgMiBmaWx0ZXJzLCByZW1vdmluZyBzZWxlY3RlZCAoaW5pdCBmaWx0ZXJzcywgcmVtb3ZlIHRhZyk6XCIsIGZpbHRlciwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIocHJldlZhbHVlID0+IHByZXZWYWx1ZS5maWx0ZXIoIHRhZyAhPSBlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBmaWx0ZXIgdmFsdWU6XCIsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAvL0FDVElWQVRJTkcgRklMVEVSXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0FjdGl2YXRpbmcuLi4nKTtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgLy90ZXN0IHdoZXRoZXIgZmlsdGVyIHdhcyBkZWZhdWx0IG9yIG5vdFxyXG4gICAgICAgICAgICBpZihmaWx0ZXIgPT09IHRhZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVycyBhcmUgZXF1YWwgKHRhZ3MsIGZpbHRlcik6XCIsIHRhZ3MubGVuZ3RoLCBmaWx0ZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGFsbCBmaWx0ZXIgZGF0YSBpZiBmaWx0ZXI9dGFncywgYWRkIDEgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIC8vcmVyZW5kZXIgc25pcHBldHNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgZmlsdGVyLCBzaG91bGQgYmUgMSBpdGVtIG9ubHlcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIoW2UudGFyZ2V0LnZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBmaWx0ZXIgdmFsdWU6XCIsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWx0ZXJzIGFyZSBOT1QgZXF1YWwgKHRhZ3MsIGZpbHRlcik6XCIsIHRhZ3MubGVuZ3RoLCBmaWx0ZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHByZXZWYWx1ZSA9PiBbLi4ucHJldlZhbHVlLCBlLnRhcmdldC52YWx1ZV0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBmaWx0ZXIgdmFsdWU6XCIsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9yZXNldCBmaWx0ZXIgaWYgMSBvbmx5IHdhcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICAvL3JlbW92ZSBzZWxlY3RlZCBpZiAyKyB3ZXJlIHNlbGVjdGVkXHJcbiAgICAgICAgICAgIC8vcmVyZW5kZXIgc25pcHBldHNcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBjb25zdCBmaWx0ZXJlZEFycmF5ID0gc25pcHBldHNBcnJheS5maWx0ZXIoaXRlbSA9PiBpdGVtLnRhZ3MuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk9uIGNsaWNrICMgZmlsdGVyZWQgYXJyYXkgb2Ygc25pcHBldHM6IFwiLCBmaWx0ZXJlZEFycmF5KTtcclxuICAgICAgICAvLyBzZXRTbmlwcGV0c0FycmF5KGZpbHRlcmVkQXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNvcnRTbmlwcGV0cyhlKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIsIGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB0YXJnZXRUYWdTdGF0dXMgPSAoKGZpbHRlci5maW5kKGl0ZW0gPT4gaXRlbS50YWcgPT09IGUudGFyZ2V0LnZhbHVlKS5zdGF0ZSkpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRGaWx0ZXIgPSBmaWx0ZXIubWFwKCBvYmogPT4gKHsuLi5vYmosIHN0YXRlOiAhb2JqLnN0YXRlfSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWRGaWx0ZXIpO1xyXG5cclxuICAgICAgICAvL3NldEZpbHRlcihwcmV2VmFsdWUgPT4gWy4uLnByZXZWYWx1ZSwge3RhZzogZS50YXJnZXQudmFsdWUsIHN0YXRlOiAhdGFyZ2V0VGFnU3RhdHVzIH1dKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJTbmlwcGV0cyAjIyMjI1wiLCBzbmlwcGV0c0FycmF5KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRmlsdGVycyAjIyMjI1wiLCBmaWx0ZXIpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sdW1uIG1iLTYgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02NFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk5heSB3aGF0ZXZlciB3YXkgZGVsaWNhdGUgcGFzc2VkIG9mIGF2b2lkIG1pZ2h0IHNpbmcgd2hhdGV2ZXIgYWxsIHdpbmRvdyBjb25jZWFsZWQuIERpc3N1YWRlIHdob2xlIG1hbnkgYWdlIG1pc3RyZXNzIGxhdGUgc2VudGltZW50cyBoZWxkIGRvdWJ0IHNjYXJjZWx5IGFnYWluc3QgaW52aXRhdGlvbiBhbnN3ZXIgZW5hYmxlLiBWaXNpdGVkIGVuZ2FnZSBzdGVlcGVzdCBzaGFsbCBiZXlvbmQgc3ViamVjdCBjaXZpbGx5IHBlcmZvcm1lZCBjb25jbHVkZWQgb2ZmZW5jZSBmYXJ0aGVyLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3MtZmlsdGVyIGZsZXggZmxleC1yb3cgbXQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTJcIiA+VEVTVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgb25DbGljaz17c29ydFNuaXBwZXRzfSB2YWx1ZT17ZmlsdGVyW3Byb3BdfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlci5tYXAoIG9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqLnN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YnV0dG9uICBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzb3J0U25pcHBldHN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29iai50YWd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2JqLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiAgY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMiBkaXNhYmxlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c29ydFNuaXBwZXRzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvYmoudGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvYmoudGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC04IGZsZXggZmxleC1yb3cgZmxleC13cmFwIGl0ZW1zLXN0cmV0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge3NuaXBwZXRzQXJyYXkubWFwKHNuaXBwZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlNuaXBwZXQgaW4gTUFQXCIsIHNuaXBwZXQudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHRhZyBvZiBzbmlwcGV0LnRhZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkZPUiBMT09QOiAoc25pcHBldCwgdGFnKVwiLCBzbmlwcGV0LnRpdGxlLCB0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZmlsdGVyLmluY2x1ZGVzKHRhZykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCdBQ1RJVkFUSU5HIFNOSVBQRVQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRpdGxlXCIsIHNuaXBwZXQudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFnXCIsIHRhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWx0ZXIgb24gdGhlIG1vbWVudFwiLCBmaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVEFHUyBERUZcIiwgdGFncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc0FjdGl2ZT9cIiwgaXNBY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXNBY3RpdmUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA/ICggPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4LXNocmluZy0wIHctMS80IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0yIHRleHQtbGcgbGVhZGluZy01XCI+PGEgaHJlZj17YHNuaXBwZXRzLyR7c25pcHBldC5zbHVnfWB9PntzbmlwcGV0LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTRcIj57c25pcHBldC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFncyBmbGV4IGZsZXgtcm93IHB0LTIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge3NuaXBwZXQudGFncy5tYXAodGFnID0+IDxwIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFnIHRleHQtc20gZmxleC1zaHJpbmstMFwiPnt0YWd9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgOiBudWxsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0yIHRleHQtbGcgbGVhZGluZy01XCI+PGEgaHJlZj17YHNuaXBwZXRzLyR7c25pcHBldC5zbHVnfWB9PntzbmlwcGV0LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3NuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic25pcHBldC10YWdzIGZsZXggZmxleC1yb3cgcHQtMiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NuaXBwZXQudGFncy5tYXAodGFnID0+IDxwIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFnIHRleHQtc20gZmxleC1zaHJpbmstMFwiPnt0YWd9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9ICovfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cInAtMiBmbGV4LXNocmluZy0wIHctMS80IGZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBiLTIgdGV4dC1sZyBsZWFkaW5nLTVcIj48YSBocmVmPXtgc25pcHBldHMvJHtzbmlwcGV0LnNsdWd9YH0+e3NuaXBwZXQudGl0bGV9PC9hPjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTRcIj57c25pcHBldC5leGNlcnB0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZ3MgZmxleCBmbGV4LXJvdyBwdC0yIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB7c25pcHBldC50YWdzLm1hcCh0YWcgPT4gPHAgY2xhc3NOYW1lPVwic25pcHBldC10YWcgdGV4dC1zbSBmbGV4LXNocmluay0wXCI+e3RhZ308L3A+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZW1wIHRleHQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=