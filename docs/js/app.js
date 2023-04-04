/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _demo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.js */ \"./src/js/demo.js\");\n/* harmony import */ var _demo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_demo_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* Your JS Code goes here */\nvar modal = document.querySelector('.modal');\nvar overlay = document.querySelector('.overlay');\nvar btnsCloseModal = document.querySelector('.close-modal');\nvar btnsOpenModal = document.querySelectorAll('.show-modal');\n\n// add pop-up window\nvar openModal = function openModal() {\n  modal.classList.remove('hidden');\n  overlay.classList.remove('hidden');\n};\n\n// remove pop-up window\nvar closeModal = function closeModal() {\n  modal.classList.add('hidden');\n  overlay.classList.add('hidden');\n};\n\n// add pop-up window when clicking on button\nfor (var i = 0; i < btnsOpenModal.length; i++) {\n  btnsOpenModal[i].addEventListener('click', openModal);\n}\n;\n\n// remove pop-up window by clicking on cross\nbtnsCloseModal.addEventListener('click', closeModal);\n\n// remove pop-up window by clicking outside\noverlay.addEventListener('click', closeModal);\n\n// remove pop-up window by hitting escape\ndocument.addEventListener('keydown', function (e) {\n  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {\n    closeModal();\n  }\n});\n\n/* Demo JS */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBMEI7O0FBRTFCO0FBQ0EsSUFBTUEsS0FBSyxHQUFJQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxRQUFRLENBQUM7QUFDL0MsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxVQUFVLENBQUM7QUFDbEQsSUFBTUUsY0FBYyxHQUFJSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFDOUQsSUFBTUcsYUFBYSxHQUFJSixRQUFRLENBQUNLLGdCQUFnQixDQUFDLGFBQWEsQ0FBQzs7QUFFL0Q7QUFDQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBUyxHQUFlO0VBQzVCUCxLQUFLLENBQUNRLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztFQUNoQ04sT0FBTyxDQUFDSyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQUM7QUFDcEMsQ0FBQzs7QUFFRDtBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQWU7RUFDN0JWLEtBQUssQ0FBQ1EsU0FBUyxDQUFDRyxHQUFHLENBQUMsUUFBUSxDQUFDO0VBQzdCUixPQUFPLENBQUNLLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNqQyxDQUFDOztBQUVEO0FBQ0EsS0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdQLGFBQWEsQ0FBQ1EsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtFQUM1Q1AsYUFBYSxDQUFDTyxDQUFDLENBQUMsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFUCxTQUFTLENBQUM7QUFDdkQ7QUFBQzs7QUFFRDtBQUNBSCxjQUFjLENBQUNVLGdCQUFnQixDQUFDLE9BQU8sRUFBRUosVUFBVSxDQUFDOztBQUVwRDtBQUNBUCxPQUFPLENBQUNXLGdCQUFnQixDQUFDLE9BQU8sRUFBRUosVUFBVSxDQUFDOztBQUU3QztBQUNBVCxRQUFRLENBQUNhLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVQyxDQUFDLEVBQUU7RUFDaEQsSUFBSUEsQ0FBQyxDQUFDQyxHQUFHLEtBQU0sUUFBUSxJQUFJLENBQUNoQixLQUFLLENBQUNRLFNBQVMsQ0FBQ1MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQzlEUCxVQUFVLEVBQUU7RUFDZDtBQUNGLENBQUMsQ0FBQzs7QUFFRiIsInNvdXJjZXMiOlsid2VicGFjazovL0B3ZWFyZWF0aGxvbi9mcm9udGVuZC13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2pzL2FwcC5qcz85MGU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9hcHAuc2Nzcyc7XG5cbi8qIFlvdXIgSlMgQ29kZSBnb2VzIGhlcmUgKi9cbmNvbnN0IG1vZGFsID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVybGF5Jyk7XG5jb25zdCBidG5zQ2xvc2VNb2RhbCA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGJ0bnNPcGVuTW9kYWwgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctbW9kYWwnKTtcblxuLy8gYWRkIHBvcC11cCB3aW5kb3dcbmNvbnN0IG9wZW5Nb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59O1xuXG4vLyByZW1vdmUgcG9wLXVwIHdpbmRvd1xuY29uc3QgY2xvc2VNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59O1xuXG4vLyBhZGQgcG9wLXVwIHdpbmRvdyB3aGVuIGNsaWNraW5nIG9uIGJ1dHRvblxuZm9yKGxldCBpID0gMDsgaSA8IGJ0bnNPcGVuTW9kYWwubGVuZ3RoOyBpKyspIHtcbiAgYnRuc09wZW5Nb2RhbFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XG59O1xuXG4vLyByZW1vdmUgcG9wLXVwIHdpbmRvdyBieSBjbGlja2luZyBvbiBjcm9zc1xuYnRuc0Nsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcblxuLy8gcmVtb3ZlIHBvcC11cCB3aW5kb3cgYnkgY2xpY2tpbmcgb3V0c2lkZVxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuXG4vLyByZW1vdmUgcG9wLXVwIHdpbmRvdyBieSBoaXR0aW5nIGVzY2FwZVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gIGlmIChlLmtleSA9PT0gICdFc2NhcGUnICYmICFtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgY2xvc2VNb2RhbCgpO1xuICB9XG59KTtcblxuLyogRGVtbyBKUyAqL1xuaW1wb3J0ICcuL2RlbW8uanMnO1xuIl0sIm5hbWVzIjpbIm1vZGFsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib3ZlcmxheSIsImJ0bnNDbG9zZU1vZGFsIiwiYnRuc09wZW5Nb2RhbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcGVuTW9kYWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJjbG9zZU1vZGFsIiwiYWRkIiwiaSIsImxlbmd0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwiY29udGFpbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/demo.js":
/*!************************!*\
  !*** ./src/js/demo.js ***!
  \************************/
/***/ (() => {

eval("var demo = function demo() {\n  return \"Webpack Boilerplate v5.15.0 - SASS/PostCSS, ES6/7, browser sync, source code listing and more.\";\n};\n\n// swiper\nvar sliderParameters = {\n  loop: true,\n  slidesPerView: 4,\n  spaceBetween: 30\n};\nvar swiper = new Swiper(\"#features-slider\", sliderParameters);\n\n// eslint-disable-next-line no-console\nconsole.log(demo());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZGVtby5qcy5qcyIsIm5hbWVzIjpbImRlbW8iLCJzbGlkZXJQYXJhbWV0ZXJzIiwibG9vcCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJzd2lwZXIiLCJTd2lwZXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9kZW1vLmpzP2MzNDgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVtbyA9ICgpID0+XG4gIFwiV2VicGFjayBCb2lsZXJwbGF0ZSB2NS4xNS4wIC0gU0FTUy9Qb3N0Q1NTLCBFUzYvNywgYnJvd3NlciBzeW5jLCBzb3VyY2UgY29kZSBsaXN0aW5nIGFuZCBtb3JlLlwiO1xuXG4vLyBzd2lwZXJcbmNvbnN0IHNsaWRlclBhcmFtZXRlcnMgPSB7XG4gIGxvb3A6IHRydWUsXG4gIHNsaWRlc1BlclZpZXc6IDQsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG59O1xuXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiI2ZlYXR1cmVzLXNsaWRlclwiLCBzbGlkZXJQYXJhbWV0ZXJzKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbmNvbnNvbGUubG9nKGRlbW8oKSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFJO0VBQUEsT0FDUixnR0FBZ0c7QUFBQTs7QUFFbEc7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRztFQUN2QkMsSUFBSSxFQUFFLElBQUk7RUFDVkMsYUFBYSxFQUFFLENBQUM7RUFDaEJDLFlBQVksRUFBRTtBQUNoQixDQUFDO0FBRUQsSUFBTUMsTUFBTSxHQUFHLElBQUlDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRUwsZ0JBQWdCLENBQUM7O0FBRS9EO0FBQ0FNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixJQUFJLEVBQUUsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/js/demo.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;