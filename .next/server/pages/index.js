module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/rob/repos/viewreal/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  static async getInitialProps() {\n    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(\"http://localhost:3001/getproperties\");\n    const data = await res.json();\n    return {\n      values: data\n    };\n  }\n\n  renderTableData() {\n    const abs = {\n      position: \"absolute\"\n    };\n    return this.props.values.map((entry, index) => {\n      const address = entry.address;\n      return __jsx(\"tr\", {\n        key: address.streetAddress,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }\n      }, __jsx(\"td\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 14\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 14\n        }\n      }, address.streetAddress), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 14\n        }\n      }, \" \", __jsx(\"a\", {\n        href: entry.url,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 20\n        }\n      }, __jsx(\"img\", {\n        src: entry.image,\n        width: \"300\",\n        height: \"300\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 40\n        }\n      })))));\n    });\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 8\n      }\n    }, __jsx(\"h1\", {\n      id: \"title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    }, \"React Dynamic Table\"), __jsx(\"table\", {\n      id: \"students\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }\n    }, __jsx(\"tbody\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 14\n      }\n    }, this.renderTableData())));\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJ2YWx1ZXMiLCJyZW5kZXJUYWJsZURhdGEiLCJhYnMiLCJwb3NpdGlvbiIsInByb3BzIiwibWFwIiwiZW50cnkiLCJpbmRleCIsImFkZHJlc3MiLCJzdHJlZXRBZGRyZXNzIiwidXJsIiwiaW1hZ2UiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsNkVBQWNBLCtDQUFkLENBQXdCO0FBQ3JDLGVBQWFDLGVBQWIsR0FBK0I7QUFDN0IsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLHlEQUFLLENBQUMscUNBQUQsQ0FBdkI7QUFDQSxVQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBQ0EsV0FBTztBQUNMQyxZQUFNLEVBQUVGO0FBREgsS0FBUDtBQUdEOztBQUVERyxpQkFBZSxHQUFHO0FBQ2hCLFVBQU1DLEdBQUcsR0FBRztBQUNWQyxjQUFRLEVBQUU7QUFEQSxLQUFaO0FBR0EsV0FBTyxLQUFLQyxLQUFMLENBQVdKLE1BQVgsQ0FBa0JLLEdBQWxCLENBQXNCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixLQUFrQjtBQUM3QyxZQUFNQyxPQUFPLEdBQUdGLEtBQUssQ0FBQ0UsT0FBdEI7QUFDQyxhQUNHO0FBQUksV0FBRyxFQUFFQSxPQUFPLENBQUNDLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFNRCxPQUFPLENBQUNDLGFBQWQsQ0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBTTtBQUFHLFlBQUksRUFBRUgsS0FBSyxDQUFDSSxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBb0I7QUFBSyxXQUFHLEVBQUVKLEtBQUssQ0FBQ0ssS0FBaEI7QUFBd0IsYUFBSyxFQUFDLEtBQTlCO0FBQW9DLGNBQU0sRUFBQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXBCLENBQU4sQ0FGQSxDQURILENBREg7QUFRRixLQVZNLENBQVA7QUFXRjs7QUFHQUMsUUFBTSxHQUFHO0FBQ1AsV0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0c7QUFBSSxRQUFFLEVBQUMsT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURILEVBRUc7QUFBTyxRQUFFLEVBQUMsVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLEtBQUtYLGVBQUwsRUFESixDQURILENBRkgsQ0FESDtBQVVGOztBQXRDcUMsQyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2dldHByb3BlcnRpZXNcIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlczogZGF0YSxcbiAgICB9XG4gIH1cblxuICByZW5kZXJUYWJsZURhdGEoKSB7XG4gICAgY29uc3QgYWJzID0ge1xuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIlxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wcm9wcy52YWx1ZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBlbnRyeS5hZGRyZXNzO1xuICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHRyIGtleT17YWRkcmVzcy5zdHJlZXRBZGRyZXNzfT5cbiAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgPGRpdj57YWRkcmVzcy5zdHJlZXRBZGRyZXNzfTwvZGl2PlxuICAgICAgICAgICAgIDxkaXY+IDxhIGhyZWY9e2VudHJ5LnVybH0+PGltZyBzcmM9e2VudHJ5LmltYWdlfSAgd2lkdGg9XCIzMDBcIiBoZWlnaHQ9XCIzMDBcIiAvPjwvYT48L2Rpdj5cbiAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgKVxuICAgIH0pXG4gfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgaWQ9J3RpdGxlJz5SZWFjdCBEeW5hbWljIFRhYmxlPC9oMT5cbiAgICAgICAgICA8dGFibGUgaWQ9J3N0dWRlbnRzJz5cbiAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVGFibGVEYXRhKCl9XG4gICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgIDwvZGl2PlxuICAgIClcbiB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });