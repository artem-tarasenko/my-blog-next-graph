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
    }).state;
    console.log(targetTagStatus);
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
                if (obj.state) {
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
                    className: "tag px-2 py-1 border mr-2 disabled",
                    onClick: sortSnippets,
                    value: obj.tag,
                    disabled: true,
                    children: obj.tag
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJJbmRleCIsInNuaXBwZXRzIiwidGFncyIsInVzZVN0YXRlIiwic25pcHBldHNBcnJheSIsInNldFNuaXBwZXRzQXJyYXkiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwic29ydEJ5VGFnIiwiZSIsImdyb3VwIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJncm91cEVuZCIsImZpbHRlclZhbHVlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJsZW5ndGgiLCJwcmV2VmFsdWUiLCJ0YWciLCJhZGQiLCJzb3J0U25pcHBldHMiLCJ0YXJnZXRUYWdTdGF0dXMiLCJpdGVtIiwic3RhdGUiLCJpc0FjdGl2ZSIsIm1hcCIsIm9iaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsNEJBQVosR0FBMkMsR0FBM0MsQyxDQUdBO0FBQ0E7O0FBd0NBO0FBQ0E7QUFDQSxTQUFTQyxLQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQ0YsUUFBRCxDQURuQjtBQUFBLE1BQ3hCRyxhQUR3QjtBQUFBLE1BQ1RDLGdCQURTOztBQUFBLG1CQUVIRixzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV4QkksTUFGd0I7QUFBQSxNQUVoQkMsU0FGZ0Isa0JBRy9COzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NILE1BQWxDLEVBSitCLENBSy9CO0FBQ0E7QUFDQTs7QUFDQSxXQUFTSSxTQUFULENBQW1CQyxDQUFuQixFQUFzQjtBQUNsQkgsV0FBTyxDQUFDQyxHQUFSLENBQVksNkVBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVksNkVBQVo7QUFDQUQsV0FBTyxDQUFDSSxLQUFSLENBQWMsY0FBZDtBQUNJSixXQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ0UsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQXBEO0FBQ0FOLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDRSxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsU0FBaEQ7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NFLENBQUMsQ0FBQ0UsTUFBbEM7QUFDSkwsV0FBTyxDQUFDUSxRQUFSO0FBRUEsUUFBSUMsV0FBVyxHQUFHLEVBQWxCOztBQUlBLFFBQUdOLENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxTQUFULENBQW1CRyxRQUFuQixDQUE0QixVQUE1QixDQUFILEVBQTRDO0FBQ3hDO0FBQ0FWLGFBQU8sQ0FBQ0ksS0FBUixDQUFjLGlCQUFkO0FBQ0FELE9BQUMsQ0FBQ0UsTUFBRixDQUFTRSxTQUFULENBQW1CSSxNQUFuQixDQUEwQixVQUExQixFQUh3QyxDQUl4Qzs7QUFDQSxVQUFHYixNQUFNLENBQUNjLE1BQVAsR0FBZ0IsQ0FBbkIsRUFBc0I7QUFDbEI7QUFDQVosZUFBTyxDQUFDSSxLQUFSLENBQWMsaUJBQWQ7QUFDQUosZUFBTyxDQUFDQyxHQUFSLENBQVksdUNBQVosRUFBcURILE1BQU0sQ0FBQ2MsTUFBNUQ7QUFDQWIsaUJBQVMsQ0FBQ0wsSUFBRCxDQUFUO0FBQ0FNLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG9DQUFaLEVBQWtESCxNQUFNLENBQUNjLE1BQXpEO0FBQ0FaLGVBQU8sQ0FBQ1EsUUFBUjtBQUNILE9BUEQsTUFPTztBQUNIO0FBQ0FSLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG9FQUFaLEVBQWtGSCxNQUFsRixFQUEwRkssQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQW5HO0FBRUFQLGlCQUFTLENBQUMsVUFBQWMsU0FBUztBQUFBLGlCQUFJQSxTQUFTLENBQUNmLE1BQVYsQ0FBa0JnQixHQUFHLElBQUlYLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFsQyxDQUFKO0FBQUEsU0FBVixDQUFUO0FBQ0FOLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDSCxNQUFqQztBQUNBRSxlQUFPLENBQUNRLFFBQVI7QUFDSDtBQUVKLEtBckJELE1BcUJPLElBQUcsQ0FBQ0wsQ0FBQyxDQUFDRSxNQUFGLENBQVNFLFNBQVQsQ0FBbUJHLFFBQW5CLENBQTRCLFVBQTVCLENBQUosRUFBNkM7QUFDaEQ7QUFDQVYsYUFBTyxDQUFDSSxLQUFSLENBQWMsZUFBZDtBQUNBRCxPQUFDLENBQUNFLE1BQUYsQ0FBU0UsU0FBVCxDQUFtQlEsR0FBbkIsQ0FBdUIsVUFBdkIsRUFIZ0QsQ0FLaEQ7O0FBQ0EsVUFBR2pCLE1BQU0sS0FBS0osSUFBZCxFQUFvQjtBQUNoQk0sZUFBTyxDQUFDQyxHQUFSLENBQVksbUNBQVosRUFBaURQLElBQUksQ0FBQ2tCLE1BQXRELEVBQThEZCxNQUFNLENBQUNjLE1BQXJFLEVBRGdCLENBRWhCO0FBQ0E7O0FBQ0FaLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHdDQUFaO0FBQ0FGLGlCQUFTLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBRCxDQUFUO0FBQ0FOLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDSCxNQUFqQztBQUNBRSxlQUFPLENBQUNRLFFBQVI7QUFFSCxPQVRELE1BU087QUFDSFIsZUFBTyxDQUFDQyxHQUFSLENBQVksdUNBQVosRUFBcURQLElBQUksQ0FBQ2tCLE1BQTFELEVBQWtFZCxNQUFNLENBQUNjLE1BQXpFO0FBRUFiLGlCQUFTLENBQUMsVUFBQWMsU0FBUztBQUFBLHlMQUFRQSxTQUFSLElBQW1CVixDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBNUI7QUFBQSxTQUFWLENBQVQ7QUFDQU4sZUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNILE1BQWpDO0FBQ0FFLGVBQU8sQ0FBQ1EsUUFBUjtBQUNILE9BckIrQyxDQXNCaEQ7QUFDQTtBQUNBOztBQUNILEtBM0RpQixDQWdFbEI7QUFDQTtBQUNBOztBQUNIOztBQUVELFdBQVNRLFlBQVQsQ0FBc0JiLENBQXRCLEVBQXlCO0FBR3JCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRSxDQUFDLENBQUNFLE1BQXZCO0FBQ0EsUUFBTVksZUFBZSxHQUFLbkIsTUFBTSxDQUFDQSxNQUFQLENBQWMsVUFBQW9CLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNKLEdBQUwsS0FBYVgsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQTFCO0FBQUEsS0FBbEIsRUFBbURhLEtBQTdFO0FBQ0FuQixXQUFPLENBQUNDLEdBQVIsQ0FBWWdCLGVBQVo7QUFDQWxCLGFBQVMsQ0FBQyxVQUFBYyxTQUFTO0FBQUEscUxBQVFBLFNBQVIsSUFBbUI7QUFBQ0MsV0FBRyxFQUFFWCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBZjtBQUFzQmMsZ0JBQVEsRUFBRSxDQUFDSDtBQUFqQyxPQUFuQjtBQUFBLEtBQVYsQ0FBVDtBQUNILEdBcEY4QixDQXVGL0I7QUFDQTs7O0FBRUEsc0JBQVEscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsMkJBQ0kscUVBQUMsOERBQUQ7QUFBQSw2QkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMscUNBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBSyx1QkFBUyxFQUFDLGdDQUFmO0FBQUEsc0NBQ0k7QUFBUSx5QkFBUyxFQUFDLDJCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQUlRbkIsTUFBTSxDQUFDdUIsR0FBUCxDQUFZLFVBQUFDLEdBQUcsRUFBSTtBQUNmLG9CQUFHQSxHQUFHLENBQUNILEtBQVAsRUFBYztBQUNWLHNDQUFPO0FBQVMsNkJBQVMsRUFBQywyQkFBbkI7QUFDUywyQkFBTyxFQUFFSCxZQURsQjtBQUVTLHlCQUFLLEVBQUVNLEdBQUcsQ0FBQ1IsR0FGcEI7QUFBQSw4QkFHTVEsR0FBRyxDQUFDUjtBQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVA7QUFLSCxpQkFORCxNQU1PO0FBQ0gsc0NBQU87QUFBUyw2QkFBUyxFQUFDLG9DQUFuQjtBQUNTLDJCQUFPLEVBQUVFLFlBRGxCO0FBRVMseUJBQUssRUFBRU0sR0FBRyxDQUFDUixHQUZwQjtBQUdTLDRCQUFRLE1BSGpCO0FBQUEsOEJBSU1RLEdBQUcsQ0FBQ1I7QUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFQO0FBTUg7QUFDSixlQWZELENBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQTBCSTtBQUFLLHFCQUFTLEVBQUMsNENBQWY7QUFBQTtBQUFBO0FBNERRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZFUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTFCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUjtBQTRHSDs7R0F0TVF0QixLOztLQUFBQSxLOztBQXdNTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc25pcHBldHMuZjAwOTUxOWUyMjM5MjA1ZTMwYmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dC5qc3gnO1xyXG5wcm9jZXNzLmVudi5OT0RFX1RMU19SRUpFQ1RfVU5BVVRIT1JJWkVEID0gJzAnXHJcblxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5jb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0dSQVBIX0FQSSxcclxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbn0pO1xyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyBUaGlzIGZ1bmN0aW9uIGdldHMgY2FsbGVkIGF0IGJ1aWxkIHRpbWVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgLy9kZXN0cnVjdHVyZSByZXNwb25zZSB0byBkYXRhIG9ialxyXG4gICAgY29uc3QgeyBkYXRhOiB7c25pcHBldHN9IH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xyXG4gICAgICAgIHF1ZXJ5OiBncWxgeyBcclxuICAgICAgICAgICAgc25pcHBldHMge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgIHRhZ3NcclxuICAgICAgICAgICAgICAgIGV4Y2VycHRcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRBdFxyXG4gICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfWBcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY29sbGVjdGluZyBhbGwgcG9zc2libGUgdGFncyBmb3Igc25pcHBldHMgdG8gcGFzcyB0aGVtIGFzIGRlZmF1bHQgdmFsdWVcclxuICAgIGxldCB0YWdzQXJyYXkgPSBbXVxyXG4gICAgc25pcHBldHMuZm9yRWFjaChzbmlwcGV0ID0+IHNuaXBwZXQudGFncy5mb3JFYWNoKHRhZyA9PiAhdGFnc0FycmF5LmluY2x1ZGVzKHRhZykgJiYgdGFnc0FycmF5LnB1c2godGFnKSkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJBUlJcIiwgdGFnc0FycmF5Lm1hcCh0YWcgPT4geyByZXR1cm4ge3RhZzogdGFnLCBpc0FjdGl2ZTogdHJ1ZX19KSlcclxuXHJcbiAgICBsZXQgbmV3QXJyID0gW107XHJcbiAgICB0YWdzQXJyYXkuZm9yRWFjaChpdGVtID0+IG5ld0Fyci5wdXNoKHt0YWc6IGl0ZW0sIHN0YXRlOiB0cnVlfSkpXHJcbiAgICBuZXdBcnIgPSBuZXdBcnIubWFwKGl0ZW0gPT4gaXRlbS50YWcgPT09IFwiU2FuaXR5XCIgPyB7Li4uaXRlbSwgc3RhdGU6IGZhbHNlfSA6IGl0ZW0pXHJcblxyXG4gICAgLy9jb25zdCBvYmplY3RzID0gdGFnc0FycmF5LnJlZHVjZSgob2JqLCBrZXkpID0+ICh7Li4ub2JqLCBba2V5XTogdHJ1ZX0pLCB7fSlcclxuICAgIC8vY29uc3QgdGFnc09iamVjdHMgPSB0YWdzQXJyYXkuZm9yRWFjaCggdGFnID0+IHsgcmV0dXJuIHtbdGFnXTogdHJ1ZX19KVxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHtzbmlwcGV0czogc25pcHBldHMsIHRhZ3M6IG5ld0Fycn19O1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuZnVuY3Rpb24gSW5kZXgoIHtzbmlwcGV0cywgdGFnc30gKSB7XHJcbiAgICBjb25zdCBbc25pcHBldHNBcnJheSwgc2V0U25pcHBldHNBcnJheV0gPSB1c2VTdGF0ZShzbmlwcGV0cyk7XHJcbiAgICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUodGFncylcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiU05JUFBFVFMgUFJPUFMgREFUQSA+IFwiLCBzbmlwcGV0cyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRBR1MgUFJPUFMgREFUQSA+IFwiLCBmaWx0ZXIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJGSUxURVIgSU5JVCBEQVRBID4gXCIsIHRhZ3MpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcInRlc3QgcmVzdFwiLCByZXN0KTtcclxuICAgIC8vU29ydCBlbnRyZWVzIGJ5IHNlbGVjdGVkIHRhZ1xyXG4gICAgZnVuY3Rpb24gc29ydEJ5VGFnKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1wiKTtcclxuICAgICAgICBjb25zb2xlLmdyb3VwKCdJbml0IHNvcnRpbmcnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbiBDbGljayAjIFNuaXBwZXRzIHByZXNzZWRcIiwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uIENsaWNrICMgU25pcHBldHMgYXJyXCIsIGUudGFyZ2V0LmNsYXNzTGlzdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT24gY2xpY2sgIyBldmVudFwiLCBlLnRhcmdldCk7XHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuICAgICAgICBsZXQgZmlsdGVyVmFsdWUgPSBbXTtcclxuXHJcblxyXG5cclxuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAvL0RFQUNUSVZBVElORyBGSUxURVJcclxuICAgICAgICAgICAgY29uc29sZS5ncm91cCgnRGVhY3RpdmF0aW5nLi4uJyk7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgLy90ZXN0IHdoZXRoZXIgZmlsdGVyIGhhZCAxIHRhZyBvciBtb3JlXHJcbiAgICAgICAgICAgIGlmKGZpbHRlci5sZW5ndGggPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL3Jlc2V0dGluZyBmaWx0ZXIgdG8gZGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cCgnRGVzZWxlY3RpbmcgdGFnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbW92aW5nIGxhc3QgZmlsdGVyIChmaWx0ZXIgbGVuZ3RoKTpcIiwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIodGFncyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc2V0dGluZyBkZWZhdWx0IGZpbHRlciAobGVuZ3RoKTpcIiwgZmlsdGVyLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL3JlbW92ZSB0YWcgZnJvbSBmaWx0ZXJcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXQgbGVhc3QgMiBmaWx0ZXJzLCByZW1vdmluZyBzZWxlY3RlZCAoaW5pdCBmaWx0ZXJzcywgcmVtb3ZlIHRhZyk6XCIsIGZpbHRlciwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIocHJldlZhbHVlID0+IHByZXZWYWx1ZS5maWx0ZXIoIHRhZyAhPSBlLnRhcmdldC52YWx1ZSkpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBmaWx0ZXIgdmFsdWU6XCIsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIGlmKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZFwiKSkge1xyXG4gICAgICAgICAgICAvL0FDVElWQVRJTkcgRklMVEVSXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0FjdGl2YXRpbmcuLi4nKTtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgLy90ZXN0IHdoZXRoZXIgZmlsdGVyIHdhcyBkZWZhdWx0IG9yIG5vdFxyXG4gICAgICAgICAgICBpZihmaWx0ZXIgPT09IHRhZ3MpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVycyBhcmUgZXF1YWwgKHRhZ3MsIGZpbHRlcik6XCIsIHRhZ3MubGVuZ3RoLCBmaWx0ZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGFsbCBmaWx0ZXIgZGF0YSBpZiBmaWx0ZXI9dGFncywgYWRkIDEgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIC8vcmVyZW5kZXIgc25pcHBldHNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRpbmcgZmlsdGVyLCBzaG91bGQgYmUgMSBpdGVtIG9ubHlcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIoW2UudGFyZ2V0LnZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBmaWx0ZXIgdmFsdWU6XCIsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWx0ZXJzIGFyZSBOT1QgZXF1YWwgKHRhZ3MsIGZpbHRlcik6XCIsIHRhZ3MubGVuZ3RoLCBmaWx0ZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVyKHByZXZWYWx1ZSA9PiBbLi4ucHJldlZhbHVlLCBlLnRhcmdldC52YWx1ZV0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldyBmaWx0ZXIgdmFsdWU6XCIsIGZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9yZXNldCBmaWx0ZXIgaWYgMSBvbmx5IHdhcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICAvL3JlbW92ZSBzZWxlY3RlZCBpZiAyKyB3ZXJlIHNlbGVjdGVkXHJcbiAgICAgICAgICAgIC8vcmVyZW5kZXIgc25pcHBldHNcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBjb25zdCBmaWx0ZXJlZEFycmF5ID0gc25pcHBldHNBcnJheS5maWx0ZXIoaXRlbSA9PiBpdGVtLnRhZ3MuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIk9uIGNsaWNrICMgZmlsdGVyZWQgYXJyYXkgb2Ygc25pcHBldHM6IFwiLCBmaWx0ZXJlZEFycmF5KTtcclxuICAgICAgICAvLyBzZXRTbmlwcGV0c0FycmF5KGZpbHRlcmVkQXJyYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNvcnRTbmlwcGV0cyhlKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIsIGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCB0YXJnZXRUYWdTdGF0dXMgPSAoKGZpbHRlci5maWx0ZXIoaXRlbSA9PiBpdGVtLnRhZyA9PT0gZS50YXJnZXQudmFsdWUpLnN0YXRlKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGFyZ2V0VGFnU3RhdHVzKTtcclxuICAgICAgICBzZXRGaWx0ZXIocHJldlZhbHVlID0+IFsuLi5wcmV2VmFsdWUsIHt0YWc6IGUudGFyZ2V0LnZhbHVlLCBpc0FjdGl2ZTogIXRhcmdldFRhZ1N0YXR1cyB9XSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiU25pcHBldHMgIyMjIyNcIiwgc25pcHBldHNBcnJheSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZpbHRlcnMgIyMjIyNcIiwgZmlsdGVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0ID5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiBtYi02IGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OYXkgd2hhdGV2ZXIgd2F5IGRlbGljYXRlIHBhc3NlZCBvZiBhdm9pZCBtaWdodCBzaW5nIHdoYXRldmVyIGFsbCB3aW5kb3cgY29uY2VhbGVkLiBEaXNzdWFkZSB3aG9sZSBtYW55IGFnZSBtaXN0cmVzcyBsYXRlIHNlbnRpbWVudHMgaGVsZCBkb3VidCBzY2FyY2VseSBhZ2FpbnN0IGludml0YXRpb24gYW5zd2VyIGVuYWJsZS4gVmlzaXRlZCBlbmdhZ2Ugc3RlZXBlc3Qgc2hhbGwgYmV5b25kIHN1YmplY3QgY2l2aWxseSBwZXJmb3JtZWQgY29uY2x1ZGVkIG9mZmVuY2UgZmFydGhlci48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWZpbHRlciBmbGV4IGZsZXgtcm93IG10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgPlRFU1Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiIG9uQ2xpY2s9e3NvcnRTbmlwcGV0c30gdmFsdWU9e2ZpbHRlcltwcm9wXX0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubWFwKCBvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9iai5zdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiAgY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c29ydFNuaXBwZXRzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvYmoudGFnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29iai50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTIgZGlzYWJsZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NvcnRTbmlwcGV0c30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b2JqLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2JqLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtzbmlwcGV0c0FycmF5Lm1hcChzbmlwcGV0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTbmlwcGV0IGluIE1BUFwiLCBzbmlwcGV0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB0YWcgb2Ygc25pcHBldC50YWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJGT1IgTE9PUDogKHNuaXBwZXQsIHRhZylcIiwgc25pcHBldC50aXRsZSwgdGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZpbHRlci5pbmNsdWRlcyh0YWcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnQUNUSVZBVElORyBTTklQUEVUJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aXRsZVwiLCBzbmlwcGV0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhZ1wiLCB0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyIG9uIHRoZSBtb21lbnRcIiwgZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRBR1MgREVGXCIsIHRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNBY3RpdmU/XCIsIGlzQWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzQWN0aXZlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPyAoIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWxnIGxlYWRpbmctNVwiPjxhIGhyZWY9e2BzbmlwcGV0cy8ke3NuaXBwZXQuc2x1Z31gfT57c25pcHBldC50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3NuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZ3MgZmxleCBmbGV4LXJvdyBwdC0yIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtzbmlwcGV0LnRhZ3MubWFwKHRhZyA9PiA8cCBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZyB0ZXh0LXNtIGZsZXgtc2hyaW5rLTBcIj57dGFnfTwvcD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDogbnVsbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXgtc2hyaW5nLTAgdy0xLzQgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWxnIGxlYWRpbmctNVwiPjxhIGhyZWY9e2BzbmlwcGV0cy8ke3NuaXBwZXQuc2x1Z31gfT57c25pcHBldC50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctNFwiPntzbmlwcGV0LmV4Y2VycHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFncyBmbGV4IGZsZXgtcm93IHB0LTIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzbmlwcGV0LnRhZ3MubWFwKHRhZyA9PiA8cCBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZyB0ZXh0LXNtIGZsZXgtc2hyaW5rLTBcIj57dGFnfTwvcD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfSAqL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0yIHRleHQtbGcgbGVhZGluZy01XCI+PGEgaHJlZj17YHNuaXBwZXRzLyR7c25pcHBldC5zbHVnfWB9PntzbmlwcGV0LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3NuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic25pcHBldC10YWdzIGZsZXggZmxleC1yb3cgcHQtMiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAge3NuaXBwZXQudGFncy5tYXAodGFnID0+IDxwIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFnIHRleHQtc20gZmxleC1zaHJpbmstMFwiPnt0YWd9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVtcCB0ZXh0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9