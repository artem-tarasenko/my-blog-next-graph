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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc25pcHBldHMvaW5kZXguanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQiLCJJbmRleCIsInNuaXBwZXRzIiwidGFncyIsInVzZVN0YXRlIiwic25pcHBldHNBcnJheSIsInNldFNuaXBwZXRzQXJyYXkiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJjb25zb2xlIiwibG9nIiwic29ydEJ5VGFnIiwiZSIsImdyb3VwIiwidGFyZ2V0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJncm91cEVuZCIsImZpbHRlclZhbHVlIiwiY29udGFpbnMiLCJyZW1vdmUiLCJsZW5ndGgiLCJwcmV2VmFsdWUiLCJ0YWciLCJhZGQiLCJzb3J0U25pcHBldHMiLCJ0YXJnZXRUYWdTdGF0dXMiLCJpdGVtIiwiaXNBY3RpdmUiLCJtYXAiLCJvYmoiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsNEJBQVosR0FBMkMsR0FBM0MsQyxDQUdBO0FBQ0E7O0FBd0NBO0FBQ0E7QUFDQSxTQUFTQyxLQUFULE9BQW1DO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQ0YsUUFBRCxDQURuQjtBQUFBLE1BQ3hCRyxhQUR3QjtBQUFBLE1BQ1RDLGdCQURTOztBQUFBLG1CQUVIRixzREFBUSxDQUFDRCxJQUFELENBRkw7QUFBQSxNQUV4QkksTUFGd0I7QUFBQSxNQUVoQkMsU0FGZ0Isa0JBRy9COzs7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0NILE1BQWxDLEVBSitCLENBSy9CO0FBQ0E7QUFDQTs7QUFDQSxXQUFTSSxTQUFULENBQW1CQyxDQUFuQixFQUFzQjtB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Q0MsS0FBUCxFQUFjO0FBQ1Ysc0NBQU87QUFBUyw2QkFBUyxFQUFDLDJCQUFuQjtBQUNTLDJCQUFPLEVBQUVOLFlBRGxCO0FBRVMseUJBQUssRUFBRUssR0FBRyxDQUFDUCxHQUZwQjtBQUFBLDhCQUdNTyxHQUFHLENBQUNQO0FBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBUDtBQUtILGlCQU5ELE1BTU87QUFDSCxzQ0FBTztBQUFTLDZCQUFTLEVBQUMsb0NBQW5CO0FBQ1MsMkJBQU8sRUFBRUUsWUFEbEI7QUFFUyx5QkFBSyxFQUFFSyxHQUFHLENBQUNQLEdBRnBCO0FBR1MsNEJBQVEsTUFIakI7QUFBQSw4QkFJTU8sR0FBRyxDQUFDUDtBQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQVA7QUFNSDtBQUNKLGVBZkQsQ0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBMEJJO0FBQUsscUJBQVMsRUFBQyw0Q0FBZjtBQUFBO0FBQUE7QUE0RFE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdkVSO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFSO0FBNEdIOztHQXRNUXRCLEs7O0tBQUFBLEs7O0FBd01NQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbmlwcGV0cy4xOWE4ZWY2ZTU2NjdkNjgwM2E5Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0LmpzeCc7XHJcbnByb2Nlc3MuZW52Lk5PREVfVExTX1JFSkVDVF9VTkFVVEhPUklaRUQgPSAnMCdcclxuXHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgdXJpOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfR1JBUEhfQVBJLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxufSk7XHJcblxyXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICAvL2Rlc3RydWN0dXJlIHJlc3BvbnNlIHRvIGRhdGEgb2JqXHJcbiAgICBjb25zdCB7IGRhdGE6IHtzbmlwcGV0c30gfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XHJcbiAgICAgICAgcXVlcnk6IGdxbGB7IFxyXG4gICAgICAgICAgICBzbmlwcGV0cyB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgdGFnc1xyXG4gICAgICAgICAgICAgICAgZXhjZXJwdFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICB9YFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jb2xsZWN0aW5nIGFsbCBwb3NzaWJsZSB0YWdzIGZvciBzbmlwcGV0cyB0byBwYXNzIHRoZW0gYXMgZGVmYXVsdCB2YWx1ZVxyXG4gICAgbGV0IHRhZ3NBcnJheSA9IFtdXHJcbiAgICBzbmlwcGV0cy5mb3JFYWNoKHNuaXBwZXQgPT4gc25pcHBldC50YWdzLmZvckVhY2godGFnID0+ICF0YWdzQXJyYXkuaW5jbHVkZXModGFnKSAmJiB0YWdzQXJyYXkucHVzaCh0YWcpKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkFSUlwiLCB0YWdzQXJyYXkubWFwKHRhZyA9PiB7IHJldHVybiB7dGFnOiB0YWcsIGlzQWN0aXZlOiB0cnVlfX0pKVxyXG5cclxuICAgIGxldCBuZXdBcnIgPSBbXTtcclxuICAgIHRhZ3NBcnJheS5mb3JFYWNoKGl0ZW0gPT4gbmV3QXJyLnB1c2goe3RhZzogaXRlbSwgc3RhdGU6IHRydWV9KSlcclxuICAgIG5ld0FyciA9IG5ld0Fyci5tYXAoaXRlbSA9PiBpdGVtLnRhZyA9PT0gXCJTYW5pdHlcIiA/IHsuLi5pdGVtLCBzdGF0ZTogZmFsc2V9IDogaXRlbSlcclxuXHJcbiAgICAvL2NvbnN0IG9iamVjdHMgPSB0YWdzQXJyYXkucmVkdWNlKChvYmosIGtleSkgPT4gKHsuLi5vYmosIFtrZXldOiB0cnVlfSksIHt9KVxyXG4gICAgLy9jb25zdCB0YWdzT2JqZWN0cyA9IHRhZ3NBcnJheS5mb3JFYWNoKCB0YWcgPT4geyByZXR1cm4ge1t0YWddOiB0cnVlfX0pXHJcbiAgICByZXR1cm4geyBwcm9wczoge3NuaXBwZXRzOiBzbmlwcGV0cywgdGFnczogbmV3QXJyfX07XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5mdW5jdGlvbiBJbmRleCgge3NuaXBwZXRzLCB0YWdzfSApIHtcclxuICAgIGNvbnN0IFtzbmlwcGV0c0FycmF5LCBzZXRTbmlwcGV0c0FycmF5XSA9IHVzZVN0YXRlKHNuaXBwZXRzKTtcclxuICAgIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSh0YWdzKVxyXG4gICAgLy8gY29uc29sZS5sb2coXCJTTklQUEVUUyBQUk9QUyBEQVRBID4gXCIsIHNuaXBwZXRzKTtcclxuICAgIGNvbnNvbGUubG9nKFwiVEFHUyBQUk9QUyBEQVRBID4gXCIsIGZpbHRlcik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZJTFRFUiBJTklUIERBVEEgPiBcIiwgdGFncyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwidGVzdCByZXN0XCIsIHJlc3QpO1xyXG4gICAgLy9Tb3J0IGVudHJlZXMgYnkgc2VsZWN0ZWQgdGFnXHJcbiAgICBmdW5jdGlvbiBzb3J0QnlUYWcoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXCIpO1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoJ0luaXQgc29ydGluZycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9uIENsaWNrICMgU25pcHBldHMgcHJlc3NlZFwiLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT24gQ2xpY2sgIyBTbmlwcGV0cyBhcnJcIiwgZS50YXJnZXQuY2xhc3NMaXN0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPbiBjbGljayAjIGV2ZW50XCIsIGUudGFyZ2V0KTtcclxuICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG4gICAgICAgIGxldCBmaWx0ZXJWYWx1ZSA9IFtdO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgIC8vREVBQ1RJVkFUSU5HIEZJTFRFUlxyXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdEZWFjdGl2YXRpbmcuLi4nKTtcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAvL3Rlc3Qgd2hldGhlciBmaWx0ZXIgaGFkIDEgdGFnIG9yIG1vcmVcclxuICAgICAgICAgICAgaWYoZmlsdGVyLmxlbmd0aCA9IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vcmVzZXR0aW5nIGZpbHRlciB0byBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdEZXNlbGVjdGluZyB0YWcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZpbmcgbGFzdCBmaWx0ZXIgKGZpbHRlciBsZW5ndGgpOlwiLCBmaWx0ZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHNldEZpbHRlcih0YWdzKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzZXR0aW5nIGRlZmF1bHQgZmlsdGVyIChsZW5ndGgpOlwiLCBmaWx0ZXIubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIHRhZyBmcm9tIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdCBsZWFzdCAyIGZpbHRlcnMsIHJlbW92aW5nIHNlbGVjdGVkIChpbml0IGZpbHRlcnNzLCByZW1vdmUgdGFnKTpcIiwgZmlsdGVyLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNldEZpbHRlcihwcmV2VmFsdWUgPT4gcHJldlZhbHVlLmZpbHRlciggdGFnICE9IGUudGFyZ2V0LnZhbHVlKSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IGZpbHRlciB2YWx1ZTpcIiwgZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2UgaWYoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkXCIpKSB7XHJcbiAgICAgICAgICAgIC8vQUNUSVZBVElORyBGSUxURVJcclxuICAgICAgICAgICAgY29uc29sZS5ncm91cCgnQWN0aXZhdGluZy4uLicpO1xyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcblxyXG4gICAgICAgICAgICAvL3Rlc3Qgd2hldGhlciBmaWx0ZXIgd2FzIGRlZmF1bHQgb3Igbm90XHJcbiAgICAgICAgICAgIGlmKGZpbHRlciA9PT0gdGFncykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWx0ZXJzIGFyZSBlcXVhbCAodGFncywgZmlsdGVyKTpcIiwgdGFncy5sZW5ndGgsIGZpbHRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgYWxsIGZpbHRlciBkYXRhIGlmIGZpbHRlcj10YWdzLCBhZGQgMSBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgLy9yZXJlbmRlciBzbmlwcGV0c1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBmaWx0ZXIsIHNob3VsZCBiZSAxIGl0ZW0gb25seVwiKTtcclxuICAgICAgICAgICAgICAgIHNldEZpbHRlcihbZS50YXJnZXQudmFsdWVdKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IGZpbHRlciB2YWx1ZTpcIiwgZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbHRlcnMgYXJlIE5PVCBlcXVhbCAodGFncywgZmlsdGVyKTpcIiwgdGFncy5sZW5ndGgsIGZpbHRlci5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXIocHJldlZhbHVlID0+IFsuLi5wcmV2VmFsdWUsIGUudGFyZ2V0LnZhbHVlXSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTmV3IGZpbHRlciB2YWx1ZTpcIiwgZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL3Jlc2V0IGZpbHRlciBpZiAxIG9ubHkgd2FzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgIC8vcmVtb3ZlIHNlbGVjdGVkIGlmIDIrIHdlcmUgc2VsZWN0ZWRcclxuICAgICAgICAgICAgLy9yZXJlbmRlciBzbmlwcGV0c1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBzbmlwcGV0c0FycmF5LmZpbHRlcihpdGVtID0+IGl0ZW0udGFncy5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiT24gY2xpY2sgIyBmaWx0ZXJlZCBhcnJheSBvZiBzbmlwcGV0czogXCIsIGZpbHRlcmVkQXJyYXkpO1xyXG4gICAgICAgIC8vIHNldFNuaXBwZXRzQXJyYXkoZmlsdGVyZWRBcnJheSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc29ydFNuaXBwZXRzKGUpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIiwgZS50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFRhZ1N0YXR1cyA9ICgoZmlsdGVyLmZpbHRlcihpdGVtID0+IGl0ZW0udGFnID09PSBlLnRhcmdldC52YWx1ZSkuaXNBY3RpdmUpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyghdGFyZ2V0VGFnU3RhdHVzKTtcclxuICAgICAgICBzZXRGaWx0ZXIocHJldlZhbHVlID0+IFsuLi5wcmV2VmFsdWUsIHt0YWc6IGUudGFyZ2V0LnZhbHVlLCBpc0FjdGl2ZTogIXRhcmdldFRhZ1N0YXR1cyB9XSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiU25pcHBldHMgIyMjIyNcIiwgc25pcHBldHNBcnJheSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkZpbHRlcnMgIyMjIyNcIiwgZmlsdGVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0ID5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbHVtbiBtYi02IGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5OYXkgd2hhdGV2ZXIgd2F5IGRlbGljYXRlIHBhc3NlZCBvZiBhdm9pZCBtaWdodCBzaW5nIHdoYXRldmVyIGFsbCB3aW5kb3cgY29uY2VhbGVkLiBEaXNzdWFkZSB3aG9sZSBtYW55IGFnZSBtaXN0cmVzcyBsYXRlIHNlbnRpbWVudHMgaGVsZCBkb3VidCBzY2FyY2VseSBhZ2FpbnN0IGludml0YXRpb24gYW5zd2VyIGVuYWJsZS4gVmlzaXRlZCBlbmdhZ2Ugc3RlZXBlc3Qgc2hhbGwgYmV5b25kIHN1YmplY3QgY2l2aWxseSBwZXJmb3JtZWQgY29uY2x1ZGVkIG9mZmVuY2UgZmFydGhlci48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzLWZpbHRlciBmbGV4IGZsZXgtcm93IG10LTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0YWcgcHgtMiBweS0xIGJvcmRlciBtci0yXCIgPlRFU1Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiIG9uQ2xpY2s9e3NvcnRTbmlwcGV0c30gdmFsdWU9e2ZpbHRlcltwcm9wXX0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIubWFwKCBvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9iai5zdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGJ1dHRvbiAgY2xhc3NOYW1lPVwidGFnIHB4LTIgcHktMSBib3JkZXIgbXItMlwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c29ydFNuaXBwZXRzfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvYmoudGFnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29iai50YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gIGNsYXNzTmFtZT1cInRhZyBweC0yIHB5LTEgYm9yZGVyIG1yLTIgZGlzYWJsZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NvcnRTbmlwcGV0c30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b2JqLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2JqLnRhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtOCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBpdGVtcy1zdHJldGNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtzbmlwcGV0c0FycmF5Lm1hcChzbmlwcGV0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJTbmlwcGV0IGluIE1BUFwiLCBzbmlwcGV0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB0YWcgb2Ygc25pcHBldC50YWdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJGT1IgTE9PUDogKHNuaXBwZXQsIHRhZylcIiwgc25pcHBldC50aXRsZSwgdGFnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZpbHRlci5pbmNsdWRlcyh0YWcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZCgnQUNUSVZBVElORyBTTklQUEVUJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aXRsZVwiLCBzbmlwcGV0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRhZ1wiLCB0YWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyIG9uIHRoZSBtb21lbnRcIiwgZmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRBR1MgREVGXCIsIHRhZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNBY3RpdmU/XCIsIGlzQWN0aXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzQWN0aXZlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPyAoIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgcC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWxnIGxlYWRpbmctNVwiPjxhIGhyZWY9e2BzbmlwcGV0cy8ke3NuaXBwZXQuc2x1Z31gfT57c25pcHBldC50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3NuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZ3MgZmxleCBmbGV4LXJvdyBwdC0yIGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtzbmlwcGV0LnRhZ3MubWFwKHRhZyA9PiA8cCBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZyB0ZXh0LXNtIGZsZXgtc2hyaW5rLTBcIj57dGFnfTwvcD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDwvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDogbnVsbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIGZsZXgtc2hyaW5nLTAgdy0xLzQgZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBwLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGItMiB0ZXh0LWxnIGxlYWRpbmctNVwiPjxhIGhyZWY9e2BzbmlwcGV0cy8ke3NuaXBwZXQuc2x1Z31gfT57c25pcHBldC50aXRsZX08L2E+PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctNFwiPntzbmlwcGV0LmV4Y2VycHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFncyBmbGV4IGZsZXgtcm93IHB0LTIgZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzbmlwcGV0LnRhZ3MubWFwKHRhZyA9PiA8cCBjbGFzc05hbWU9XCJzbmlwcGV0LXRhZyB0ZXh0LXNtIGZsZXgtc2hyaW5rLTBcIj57dGFnfTwvcD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfSAqL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJwLTIgZmxleC1zaHJpbmctMCB3LTEvNCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIHAtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYi0yIHRleHQtbGcgbGVhZGluZy01XCI+PGEgaHJlZj17YHNuaXBwZXRzLyR7c25pcHBldC5zbHVnfWB9PntzbmlwcGV0LnRpdGxlfTwvYT48L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy00XCI+e3NuaXBwZXQuZXhjZXJwdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic25pcHBldC10YWdzIGZsZXggZmxleC1yb3cgcHQtMiBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAge3NuaXBwZXQudGFncy5tYXAodGFnID0+IDxwIGNsYXNzTmFtZT1cInNuaXBwZXQtdGFnIHRleHQtc20gZmxleC1zaHJpbmstMFwiPnt0YWd9PC9wPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVtcCB0ZXh0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9