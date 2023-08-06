(() => {
var exports = {};
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 9066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   headerHooks: () => (/* binding */ headerHooks),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   serverHooks: () => (/* binding */ serverHooks),
/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2394);
/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9692);
/* harmony import */ var next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_redwa_nextjs_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4723);
/* harmony import */ var C_Users_redwa_nextjs_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_redwa_nextjs_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_2__);

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/[...nextauth]/route","pathname":"/api/auth/[...nextauth]","filename":"route","bundlePath":"app/api/auth/[...nextauth]/route"},"resolvedPagePath":"C:\\Users\\redwa\\nextjs\\app\\api\\auth\\[...nextauth]\\route.js","nextConfigOutput":""}
    const routeModule = new (next_dist_server_future_route_modules_app_route_module__WEBPACK_IMPORTED_MODULE_1___default())({
      ...options,
      userland: C_Users_redwa_nextjs_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_2__,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/auth/[...nextauth]/route"

    

/***/ }),

/***/ 4723:
/***/ (() => {

// import NextAuth from "next-auth/next";
// import GoogleProvider from "next-auth/providers/google";
// const handler=NextAuth({
//     providers:[
//         GoogleProvider({
//             clientId:"",
//             clientSecret:""
//         })
//     ],
//     async session({session}){
//     },
//     async signIn({profile}){
//     }
// })
// export {handler as GET,handler as POST};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [212,501], () => (__webpack_exec__(9066)));
module.exports = __webpack_exports__;

})();