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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./three */ \"./src/three.js\");\n/*import { funcion1 } from './one';\r\nimport { funcion2 } from './two';*/\n\nvar variable1 = [1, 4, 23, -4, 'one', 6, 0, 1.1, 3.1415];\nvar variable2 = {\n  \"name\": \"John\",\n  \"age\": 30,\n  \"car\": null\n}; //funcion1(variable1);\n//funcion2(variable2);\n\nObject(_three__WEBPACK_IMPORTED_MODULE_0__[\"funcion3\"])(variable1, variable2);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/one.js":
/*!********************!*\
  !*** ./src/one.js ***!
  \********************/
/*! exports provided: funcion1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"funcion1\", function() { return funcion1; });\nvar funcion1 = function funcion1(array) {\n  var resultado = [];\n  array.forEach(function (element) {\n    if (!isNaN(element)) {\n      resultado.push(element * 4);\n    }\n  });\n  resultado = resultado.filter(function (elementos) {\n    if (elementos > 8) {\n      return elementos;\n    }\n  });\n  return resultado;\n};\n\n\n\n//# sourceURL=webpack:///./src/one.js?");

/***/ }),

/***/ "./src/three.js":
/*!**********************!*\
  !*** ./src/three.js ***!
  \**********************/
/*! exports provided: funcion3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"funcion3\", function() { return funcion3; });\n/* harmony import */ var _one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./one */ \"./src/one.js\");\n/* harmony import */ var _two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./two */ \"./src/two.js\");\n\n\n\nvar funcion3 = function funcion3(var1, var2) {\n  var retorno1 = Object(_one__WEBPACK_IMPORTED_MODULE_0__[\"funcion1\"])(var1);\n  var retorno2 = Object(_two__WEBPACK_IMPORTED_MODULE_1__[\"funcion2\"])(var2);\n  var objetoFinal = new Object();\n  objetoFinal.status = \"OK\";\n  objetoFinal.one = retorno1;\n  objetoFinal.two = retorno2;\n  console.log(objetoFinal);\n};\n\n\n\n//# sourceURL=webpack:///./src/three.js?");

/***/ }),

/***/ "./src/two.js":
/*!********************!*\
  !*** ./src/two.js ***!
  \********************/
/*! exports provided: funcion2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"funcion2\", function() { return funcion2; });\nvar funcion2 = function funcion2(objeto) {\n  var objString = JSON.stringify(objeto);\n  return objString;\n};\n\n\n\n//# sourceURL=webpack:///./src/two.js?");

/***/ })

/******/ });