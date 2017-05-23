/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    view : function () { return m("div", "1"); }
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    view : function () { return m("div", "2"); }
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: TypeError: after.after is not a function\n    at I:\\PROJECTS\\CODE\\userflow\\node_modules\\postcss-nested\\index.js:56:19\n    at Rule.each (I:\\PROJECTS\\CODE\\userflow\\node_modules\\postcss\\lib\\container.js:114:22)\n    at processRule (I:\\PROJECTS\\CODE\\userflow\\node_modules\\postcss-nested\\index.js:51:10)\n    at I:\\PROJECTS\\CODE\\userflow\\node_modules\\postcss-nested\\index.js:85:17\n    at Root.each (I:\\PROJECTS\\CODE\\userflow\\node_modules\\postcss\\lib\\container.js:114:22)\n    at process (I:\\PROJECTS\\CODE\\userflow\\node_modules\\postcss-nested\\index.js:83:14)\n    at LazyResult.run (I:\\PROJECTS\\CODE\\userflow\\node_modules\\postcss\\lib\\lazy-result.js:274:20)\n    at LazyResult.asyncTick (I:\\PROJECTS\\CODE\\userflow\\node_modules\\postcss\\lib\\lazy-result.js:189:32)\n    at processing.Promise.then._this2.processed (I:\\PROJECTS\\CODE\\userflow\\node_modules\\postcss\\lib\\lazy-result.js:228:20)\n    at LazyResult.async (I:\\PROJECTS\\CODE\\userflow\\node_modules\\postcss\\lib\\lazy-result.js:225:27)\n    at LazyResult.then (I:\\PROJECTS\\CODE\\userflow\\node_modules\\postcss\\lib\\lazy-result.js:131:21)\n    at Processor._walk (I:\\PROJECTS\\CODE\\userflow\\node_modules\\modular-css-core\\processor.js:287:10)\n    at Processor.string (I:\\PROJECTS\\CODE\\userflow\\node_modules\\modular-css-core\\processor.js:111:21)\n    at Object.module.exports (I:\\PROJECTS\\CODE\\userflow\\node_modules\\modular-css-webpack\\loader.js:21:22)");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var screens = [
        __webpack_require__(0),
        __webpack_require__(1)
    ],
    state = {},

    css = __webpack_require__(2);

m.mount(document.getElementById("mount"), {
    view : function () { return screens.map(function (screen, idx) { return m("div", {
                    class : state.screen === idx ? css.screenFocused : css.screen
                },
                m("div", {
                    onclick : function () {
                        state.screen = state.screen === idx ? false : idx;
                        console.log(state);
                    },
                    class : state.screen === idx ? css.shutterOpen : css.shutter
                }),
                m(screen)
            ); }
        ); }
});


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map