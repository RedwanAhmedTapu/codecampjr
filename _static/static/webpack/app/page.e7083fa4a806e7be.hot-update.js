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

/***/ "(app-pages-browser)/./components/SlidingComponent.jsx":
/*!*****************************************!*\
  !*** ./components/SlidingComponent.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ \"(app-pages-browser)/./node_modules/swiper/modules/index.mjs\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/navigation */ \"(app-pages-browser)/./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/pagination */ \"(app-pages-browser)/./node_modules/swiper/modules/pagination.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/scrollbar */ \"(app-pages-browser)/./node_modules/swiper/modules/scrollbar.css\");\n/* harmony import */ var swiper_css_bundle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/css/bundle */ \"(app-pages-browser)/./node_modules/swiper/swiper-bundle.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// import { useSwiper } from 'swiper/react';\n// Import Swiper styles\n\n\n\n\n\nconst SlidingComponent = ()=>{\n    _s();\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const swiper = useSwiper();\n    const handlePrev = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === 0 ? images.length - 1 : prevIndex - 1);\n    };\n    const handleNext = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === images.length - 1 ? 0 : prevIndex + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-[20rem] bg-gradient-to-bl from-slate-800 to-slate-50  box-border   flex justify-center items-center shadow-3xl p-44\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-full bg-gradient-to-bl from-slate-800 to-slate-50  flex justify-center items-center  gap-4 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {\n                    modules: [\n                        swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Navigation,\n                        swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Pagination,\n                        swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Scrollbar,\n                        swiper_modules__WEBPACK_IMPORTED_MODULE_2__.A11y\n                    ],\n                    spaceBetween: 10,\n                    slidesPerView: 4,\n                    navigation: true,\n                    scrollbar: {\n                        draggable: true\n                    },\n                    onSwiper: (swiper)=>console.log(swiper),\n                    // onSlideChange={() => console.log('slide change')}\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"w-96 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-[900px]:w-[15rem] min-[900px]:h-[15rem] w-[8rem] h-[8rem] px-3 flex flex-col justify-evenly items-center  rounded-md bg-slate-300 shadow-3xl shadow-slate-400\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillHtml5, {\n                                        className: \"w-28 h-48 text-orange-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text- opacity-90\",\n                                        children: \"Html\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"w-96 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-[900px]:w-[15rem] min-[900px]:h-[15rem] w-[8rem] h-[8rem] px-3 flex flex-col justify-evenly items-center  rounded-md bg-slate-300 shadow-3xl shadow-slate-400\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillHtml5, {\n                                        className: \"w-28 h-48 text-orange-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text- opacity-90\",\n                                        children: \"Html\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"w-96 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-[900px]:w-[15rem] min-[900px]:h-[15rem] w-[8rem] h-[8rem] px-3 flex flex-col justify-evenly items-center  rounded-md bg-slate-300 shadow-3xl shadow-slate-400\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillHtml5, {\n                                        className: \"w-28 h-48 text-orange-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text- opacity-90\",\n                                        children: \"Html\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"w-96 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-[900px]:w-[15rem] min-[900px]:h-[15rem] w-[8rem] h-[8rem] px-3 flex flex-col justify-evenly items-center  rounded-md bg-slate-300 shadow-3xl shadow-slate-400\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillHtml5, {\n                                        className: \"w-28 h-48 text-orange-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text- opacity-90\",\n                                        children: \"Html\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"w-96 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-[900px]:w-[15rem] min-[900px]:h-[15rem] w-[8rem] h-[8rem] px-3 flex flex-col justify-evenly items-center  rounded-md bg-slate-300 shadow-3xl shadow-slate-400\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillHtml5, {\n                                        className: \"w-28 h-48 text-orange-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text- opacity-90\",\n                                        children: \"Html\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"w-96 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-[900px]:w-[15rem] min-[900px]:h-[15rem] w-[8rem] h-[8rem] px-3 flex flex-col justify-evenly items-center  rounded-md bg-slate-300 shadow-3xl shadow-slate-400\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillHtml5, {\n                                        className: \"w-28 h-48 text-orange-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text- opacity-90\",\n                                        children: \"Html\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"w-96 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-[900px]:w-[15rem] min-[900px]:h-[15rem] w-[8rem] h-[8rem] px-3 flex flex-col justify-evenly items-center  rounded-md bg-slate-300 shadow-3xl shadow-slate-400\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillHtml5, {\n                                        className: \"w-28 h-48 text-orange-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text- opacity-90\",\n                                        children: \"Html\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {\n                            className: \"w-96 flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"min-[900px]:w-[15rem] min-[900px]:h-[15rem] w-[8rem] h-[8rem] px-3 flex flex-col justify-evenly items-center  rounded-md bg-slate-300 shadow-3xl shadow-slate-400\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillHtml5, {\n                                        className: \"w-28 h-48 text-orange-600\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xl font-semibold text- opacity-90\",\n                                        children: \"Html\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\redwa\\\\nextjs\\\\components\\\\SlidingComponent.jsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(SlidingComponent, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n_c = SlidingComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SlidingComponent);\nvar _c;\n$RefreshReg$(_c, \"SlidingComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2xpZGluZ0NvbXBvbmVudC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFd0M7QUFDSztBQUM0QjtBQUV0QjtBQUNuRCw0Q0FBNEM7QUFDNUMsdUJBQXVCO0FBQ0g7QUFDVztBQUNBO0FBQ0Q7QUFDSDtBQUMzQixNQUFNUyxtQkFBbUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pELDhCQUE4QjtJQUU5QixNQUFNVyxhQUFhO1FBQ2pCRCxnQkFBZ0IsQ0FBQ0UsWUFDZkEsY0FBYyxJQUFJQyxPQUFPQyxNQUFNLEdBQUcsSUFBSUYsWUFBWTtJQUV0RDtJQUVBLE1BQU1HLGFBQWE7UUFDakJMLGdCQUFnQixDQUFDRSxZQUNmQSxjQUFjQyxPQUFPQyxNQUFNLEdBQUcsSUFBSSxJQUFJRixZQUFZO0lBRXREO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNJO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDWCxnREFBTUE7b0JBQ0xZLFNBQVM7d0JBQUNoQixzREFBVUE7d0JBQUVDLHNEQUFVQTt3QkFBRUMscURBQVNBO3dCQUFFQyxnREFBSUE7cUJBQUM7b0JBQ2xEYyxjQUFjO29CQUNkQyxlQUFlO29CQUNmQyxVQUFVO29CQUNWQyxXQUFXO3dCQUFFQyxXQUFXO29CQUFLO29CQUM3QkMsVUFBVSxDQUFDQyxTQUFXQyxRQUFRQyxHQUFHLENBQUNGO29CQUNsQyxvREFBb0Q7b0JBQ3BEUixXQUFVOztzQ0FFViw4REFBQ1YscURBQVdBOzRCQUFDVSxXQUFVO3NDQUNyQiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDaEIsdURBQVdBO3dDQUFDZ0IsV0FBVTs7Ozs7O2tEQUN2Qiw4REFBQ1c7d0NBQUVYLFdBQVU7a0RBQXlDOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHMUQsOERBQUNWLHFEQUFXQTs0QkFBQ1UsV0FBVTtzQ0FDckIsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2hCLHVEQUFXQTt3Q0FBQ2dCLFdBQVU7Ozs7OztrREFDdkIsOERBQUNXO3dDQUFFWCxXQUFVO2tEQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRzFELDhEQUFDVixxREFBV0E7NEJBQUNVLFdBQVU7c0NBQ3JCLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNoQix1REFBV0E7d0NBQUNnQixXQUFVOzs7Ozs7a0RBQ3ZCLDhEQUFDVzt3Q0FBRVgsV0FBVTtrREFBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUcxRCw4REFBQ1YscURBQVdBOzRCQUFDVSxXQUFVO3NDQUNyQiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDaEIsdURBQVdBO3dDQUFDZ0IsV0FBVTs7Ozs7O2tEQUN2Qiw4REFBQ1c7d0NBQUVYLFdBQVU7a0RBQXlDOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHMUQsOERBQUNWLHFEQUFXQTs0QkFBQ1UsV0FBVTtzQ0FDckIsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2hCLHVEQUFXQTt3Q0FBQ2dCLFdBQVU7Ozs7OztrREFDdkIsOERBQUNXO3dDQUFFWCxXQUFVO2tEQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBRzFELDhEQUFDVixxREFBV0E7NEJBQUNVLFdBQVU7c0NBQ3JCLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNoQix1REFBV0E7d0NBQUNnQixXQUFVOzs7Ozs7a0RBQ3ZCLDhEQUFDVzt3Q0FBRVgsV0FBVTtrREFBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUcxRCw4REFBQ1YscURBQVdBOzRCQUFDVSxXQUFVO3NDQUNyQiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDaEIsdURBQVdBO3dDQUFDZ0IsV0FBVTs7Ozs7O2tEQUN2Qiw4REFBQ1c7d0NBQUVYLFdBQVU7a0RBQXlDOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHMUQsOERBQUNWLHFEQUFXQTs0QkFBQ1UsV0FBVTtzQ0FDckIsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2hCLHVEQUFXQTt3Q0FBQ2dCLFdBQVU7Ozs7OztrREFDdkIsOERBQUNXO3dDQUFFWCxXQUFVO2tEQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF0RTtHQW5GTVQ7S0FBQUE7QUFxRk4sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NsaWRpbmdDb21wb25lbnQuanN4PzczYWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQWlGaWxsSHRtbDUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5IH0gZnJvbSBcInN3aXBlci9tb2R1bGVzXCI7XHJcblxyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyB1c2VTd2lwZXIgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3BhZ2luYXRpb25cIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9zY3JvbGxiYXJcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9idW5kbGVcIjtcclxuY29uc3QgU2xpZGluZ0NvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgLy8gY29uc3Qgc3dpcGVyID0gdXNlU3dpcGVyKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT5cclxuICAgICAgcHJldkluZGV4ID09PSAwID8gaW1hZ2VzLmxlbmd0aCAtIDEgOiBwcmV2SW5kZXggLSAxXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT5cclxuICAgICAgcHJldkluZGV4ID09PSBpbWFnZXMubGVuZ3RoIC0gMSA/IDAgOiBwcmV2SW5kZXggKyAxXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLVsyMHJlbV0gYmctZ3JhZGllbnQtdG8tYmwgZnJvbS1zbGF0ZS04MDAgdG8tc2xhdGUtNTAgIGJveC1ib3JkZXIgICBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzaGFkb3ctM3hsIHAtNDRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctZ3JhZGllbnQtdG8tYmwgZnJvbS1zbGF0ZS04MDAgdG8tc2xhdGUtNTAgIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBnYXAtNCBcIj5cclxuICAgICAgICAgIDxTd2lwZXJcclxuICAgICAgICAgICAgbW9kdWxlcz17W05hdmlnYXRpb24sIFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeV19XHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2Vlbj17MTB9XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc9ezR9XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgc2Nyb2xsYmFyPXt7IGRyYWdnYWJsZTogdHJ1ZSB9fVxyXG4gICAgICAgICAgICBvblN3aXBlcj17KHN3aXBlcikgPT4gY29uc29sZS5sb2coc3dpcGVyKX1cclxuICAgICAgICAgICAgLy8gb25TbGlkZUNoYW5nZT17KCkgPT4gY29uc29sZS5sb2coJ3NsaWRlIGNoYW5nZScpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwidy05NiBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tWzkwMHB4XTp3LVsxNXJlbV0gbWluLVs5MDBweF06aC1bMTVyZW1dIHctWzhyZW1dIGgtWzhyZW1dIHB4LTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgIHJvdW5kZWQtbWQgYmctc2xhdGUtMzAwIHNoYWRvdy0zeGwgc2hhZG93LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbEh0bWw1IGNsYXNzTmFtZT1cInctMjggaC00OCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtIG9wYWNpdHktOTBcIj5IdG1sPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwidy05NiBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tWzkwMHB4XTp3LVsxNXJlbV0gbWluLVs5MDBweF06aC1bMTVyZW1dIHctWzhyZW1dIGgtWzhyZW1dIHB4LTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgIHJvdW5kZWQtbWQgYmctc2xhdGUtMzAwIHNoYWRvdy0zeGwgc2hhZG93LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbEh0bWw1IGNsYXNzTmFtZT1cInctMjggaC00OCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtIG9wYWNpdHktOTBcIj5IdG1sPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwidy05NiBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tWzkwMHB4XTp3LVsxNXJlbV0gbWluLVs5MDBweF06aC1bMTVyZW1dIHctWzhyZW1dIGgtWzhyZW1dIHB4LTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgIHJvdW5kZWQtbWQgYmctc2xhdGUtMzAwIHNoYWRvdy0zeGwgc2hhZG93LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbEh0bWw1IGNsYXNzTmFtZT1cInctMjggaC00OCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtIG9wYWNpdHktOTBcIj5IdG1sPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwidy05NiBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tWzkwMHB4XTp3LVsxNXJlbV0gbWluLVs5MDBweF06aC1bMTVyZW1dIHctWzhyZW1dIGgtWzhyZW1dIHB4LTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgIHJvdW5kZWQtbWQgYmctc2xhdGUtMzAwIHNoYWRvdy0zeGwgc2hhZG93LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbEh0bWw1IGNsYXNzTmFtZT1cInctMjggaC00OCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtIG9wYWNpdHktOTBcIj5IdG1sPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwidy05NiBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tWzkwMHB4XTp3LVsxNXJlbV0gbWluLVs5MDBweF06aC1bMTVyZW1dIHctWzhyZW1dIGgtWzhyZW1dIHB4LTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgIHJvdW5kZWQtbWQgYmctc2xhdGUtMzAwIHNoYWRvdy0zeGwgc2hhZG93LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbEh0bWw1IGNsYXNzTmFtZT1cInctMjggaC00OCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtIG9wYWNpdHktOTBcIj5IdG1sPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwidy05NiBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tWzkwMHB4XTp3LVsxNXJlbV0gbWluLVs5MDBweF06aC1bMTVyZW1dIHctWzhyZW1dIGgtWzhyZW1dIHB4LTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgIHJvdW5kZWQtbWQgYmctc2xhdGUtMzAwIHNoYWRvdy0zeGwgc2hhZG93LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbEh0bWw1IGNsYXNzTmFtZT1cInctMjggaC00OCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtIG9wYWNpdHktOTBcIj5IdG1sPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwidy05NiBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tWzkwMHB4XTp3LVsxNXJlbV0gbWluLVs5MDBweF06aC1bMTVyZW1dIHctWzhyZW1dIGgtWzhyZW1dIHB4LTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgIHJvdW5kZWQtbWQgYmctc2xhdGUtMzAwIHNoYWRvdy0zeGwgc2hhZG93LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbEh0bWw1IGNsYXNzTmFtZT1cInctMjggaC00OCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtIG9wYWNpdHktOTBcIj5IdG1sPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwidy05NiBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4tWzkwMHB4XTp3LVsxNXJlbV0gbWluLVs5MDBweF06aC1bMTVyZW1dIHctWzhyZW1dIGgtWzhyZW1dIHB4LTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgIHJvdW5kZWQtbWQgYmctc2xhdGUtMzAwIHNoYWRvdy0zeGwgc2hhZG93LXNsYXRlLTQwMFwiPlxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbEh0bWw1IGNsYXNzTmFtZT1cInctMjggaC00OCB0ZXh0LW9yYW5nZS02MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtIG9wYWNpdHktOTBcIj5IdG1sPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRpbmdDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQWlGaWxsSHRtbDUiLCJOYXZpZ2F0aW9uIiwiUGFnaW5hdGlvbiIsIlNjcm9sbGJhciIsIkExMXkiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlNsaWRpbmdDb21wb25lbnQiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJoYW5kbGVQcmV2IiwicHJldkluZGV4IiwiaW1hZ2VzIiwibGVuZ3RoIiwiaGFuZGxlTmV4dCIsImRpdiIsImNsYXNzTmFtZSIsIm1vZHVsZXMiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwibmF2aWdhdGlvbiIsInNjcm9sbGJhciIsImRyYWdnYWJsZSIsIm9uU3dpcGVyIiwic3dpcGVyIiwiY29uc29sZSIsImxvZyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/SlidingComponent.jsx\n"));

/***/ })

});