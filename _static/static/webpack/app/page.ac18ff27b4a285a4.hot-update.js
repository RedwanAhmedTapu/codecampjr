"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Videofx.jsx":
/*!********************************!*\
  !*** ./components/Videofx.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import Introvideos from \"../video/circuit1.mp4\";\nconst Videofx = ()=>{\n    _s();\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    videoRef.current && videoRef.current.play();\n    const eventHandle = ()=>{\n    // if (typeof videoRef.current.play() !== undefined) videoRef.current.play();\n    // \n    };\n    // useEffect(() => {\n    //   window.addEventListener(\"scroll\", eventHandle);\n    // }, []);\n    // setTimeout(eventHandle, Infinity);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            autoPlay: true,\n            loop: true,\n            ref: videoRef,\n            src: \"/circuit1.mp4\",\n            className: \"bg_color\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\Videofx.jsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Videofx, \"0CLVWOVx+8g0ODBjgEMJWUwEryM=\");\n_c = Videofx;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videofx); // \"use client\";\n // import { React, useEffect, useRef } from \"react\";\n // // import Introvideos from \"../video/circuit1.mp4\";\n // const Videofx = () => {\n //   const videoRef = useRef();\n //   videoRef.current && videoRef.current.play();\n //   const eventHandle = () => {\n //     // if (typeof videoRef.current.play() !== undefined) videoRef.current.play();\n //     // \n //   };\n //   // useEffect(() => {\n //   //   window.addEventListener(\"scroll\", eventHandle);\n //   // }, []);\n //   // setTimeout(eventHandle, Infinity);\n //   return (\n //     <>\n //       <video\n //         autoPlay\n //         loop\n //         ref={videoRef}\n //         src=\"/circuit1.mp4\"\n //         controls=\"false\"\n //         className=\"bg_color\"\n //       ></video>\n //     </>\n //   );\n // };\n // export default Videofx;\nvar _c;\n$RefreshReg$(_c, \"Videofx\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVmlkZW9meC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2lEO0FBQ2pELG1EQUFtRDtBQUVuRCxNQUFNRyxVQUFVOztJQUNkLE1BQU1DLFdBQVdGLDZDQUFNQTtJQUNyQkUsU0FBU0MsT0FBTyxJQUFLRCxTQUFTQyxPQUFPLENBQUNDLElBQUk7SUFDNUMsTUFBTUMsY0FBYztJQUNsQiw2RUFBNkU7SUFDN0UsR0FBRztJQUNMO0lBQ0Esb0JBQW9CO0lBQ3BCLG9EQUFvRDtJQUNwRCxVQUFVO0lBQ1YscUNBQXFDO0lBQ3JDLHFCQUNFO2tCQUNFLDRFQUFDQztZQUNDQyxRQUFRO1lBQ1JDLElBQUk7WUFDSkMsS0FBS1A7WUFDTFEsS0FBSTtZQUNKQyxXQUFVOzs7Ozs7O0FBSWxCO0dBdEJNVjtLQUFBQTtBQXdCTiwrREFBZUEsT0FBT0EsRUFBQyxDQUV2QixnQkFBZ0I7Q0FDaEIsb0RBQW9EO0NBQ3BELHNEQUFzRDtDQUV0RCwwQkFBMEI7Q0FDMUIsK0JBQStCO0NBQy9CLGlEQUFpRDtDQUNqRCxnQ0FBZ0M7Q0FDaEMsb0ZBQW9GO0NBQ3BGLFVBQVU7Q0FDVixPQUFPO0NBQ1AseUJBQXlCO0NBQ3pCLHlEQUF5RDtDQUN6RCxlQUFlO0NBQ2YsMENBQTBDO0NBQzFDLGFBQWE7Q0FDYixTQUFTO0NBQ1QsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLDhCQUE4QjtDQUM5QiwyQkFBMkI7Q0FDM0IsK0JBQStCO0NBQy9CLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsT0FBTztDQUNQLEtBQUs7Q0FFTCwwQkFBMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb2Z4LmpzeD8wZTMyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBSZWFjdCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IEludHJvdmlkZW9zIGZyb20gXCIuLi92aWRlby9jaXJjdWl0MS5tcDRcIjtcclxuXHJcbmNvbnN0IFZpZGVvZnggPSAoKSA9PiB7XHJcbiAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYoKTtcclxuICAgIHZpZGVvUmVmLmN1cnJlbnQgJiYgIHZpZGVvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4gIGNvbnN0IGV2ZW50SGFuZGxlID0gKCkgPT4ge1xyXG4gICAgLy8gaWYgKHR5cGVvZiB2aWRlb1JlZi5jdXJyZW50LnBsYXkoKSAhPT0gdW5kZWZpbmVkKSB2aWRlb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuICAgIC8vIFxyXG4gIH07XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGV2ZW50SGFuZGxlKTtcclxuICAvLyB9LCBbXSk7XHJcbiAgLy8gc2V0VGltZW91dChldmVudEhhbmRsZSwgSW5maW5pdHkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8dmlkZW9cclxuICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgIGxvb3BcclxuICAgICAgICByZWY9e3ZpZGVvUmVmfVxyXG4gICAgICAgIHNyYz1cIi9jaXJjdWl0MS5tcDRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnX2NvbG9yXCJcclxuICAgICAgPjwvdmlkZW8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlkZW9meDtcclxuXHJcbi8vIFwidXNlIGNsaWVudFwiO1xyXG4vLyBpbXBvcnQgeyBSZWFjdCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gLy8gaW1wb3J0IEludHJvdmlkZW9zIGZyb20gXCIuLi92aWRlby9jaXJjdWl0MS5tcDRcIjtcclxuXHJcbi8vIGNvbnN0IFZpZGVvZnggPSAoKSA9PiB7XHJcbi8vICAgY29uc3QgdmlkZW9SZWYgPSB1c2VSZWYoKTtcclxuLy8gICB2aWRlb1JlZi5jdXJyZW50ICYmIHZpZGVvUmVmLmN1cnJlbnQucGxheSgpO1xyXG4vLyAgIGNvbnN0IGV2ZW50SGFuZGxlID0gKCkgPT4ge1xyXG4vLyAgICAgLy8gaWYgKHR5cGVvZiB2aWRlb1JlZi5jdXJyZW50LnBsYXkoKSAhPT0gdW5kZWZpbmVkKSB2aWRlb1JlZi5jdXJyZW50LnBsYXkoKTtcclxuLy8gICAgIC8vIFxyXG4vLyAgIH07XHJcbi8vICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAvLyAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGV2ZW50SGFuZGxlKTtcclxuLy8gICAvLyB9LCBbXSk7XHJcbi8vICAgLy8gc2V0VGltZW91dChldmVudEhhbmRsZSwgSW5maW5pdHkpO1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8PlxyXG4vLyAgICAgICA8dmlkZW9cclxuLy8gICAgICAgICBhdXRvUGxheVxyXG4vLyAgICAgICAgIGxvb3BcclxuLy8gICAgICAgICByZWY9e3ZpZGVvUmVmfVxyXG4vLyAgICAgICAgIHNyYz1cIi9jaXJjdWl0MS5tcDRcIlxyXG4vLyAgICAgICAgIGNvbnRyb2xzPVwiZmFsc2VcIlxyXG4vLyAgICAgICAgIGNsYXNzTmFtZT1cImJnX2NvbG9yXCJcclxuLy8gICAgICAgPjwvdmlkZW8+XHJcbi8vICAgICA8Lz5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgVmlkZW9meDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwiVmlkZW9meCIsInZpZGVvUmVmIiwiY3VycmVudCIsInBsYXkiLCJldmVudEhhbmRsZSIsInZpZGVvIiwiYXV0b1BsYXkiLCJsb29wIiwicmVmIiwic3JjIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Videofx.jsx\n"));

/***/ })

});