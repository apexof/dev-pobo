/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.jsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/config.js":
/*!**************************!*\
  !*** ./common/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const NODE_ENV = "development" || false;

const IS_DEV = NODE_ENV === "development";

const PORT = IS_DEV ? 8080 : process.env.PORT;
const requestUri = IS_DEV ? "https://dev.pobo.ru/api" : "https://pobo.ru/api";

module.exports = {
    IS_DEV,
    PORT,
    requestUri,
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/AC/ACcart.js":
/*!**************************!*\
  !*** ./src/AC/ACcart.js ***!
  \**************************/
/*! exports provided: GET_CART, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_ITEMS_FROM_CART, CLEAR_CART, LOAD_CART, addToCart, removeFromCart, removeAllItemsFromCart, loadCart, clearCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CART", function() { return GET_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART", function() { return REMOVE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_ITEMS_FROM_CART", function() { return REMOVE_ALL_ITEMS_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CART", function() { return CLEAR_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART", function() { return LOAD_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllItemsFromCart", function() { return removeAllItemsFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCart", function() { return loadCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
const GET_CART = "GET_CART";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const REMOVE_ALL_ITEMS_FROM_CART = "REMOVE_ALL_ITEMS_FROM_CART";
const CLEAR_CART = "CLEAR_CART";
const LOAD_CART = "LOAD_CART";
function addToCart(item) {
  return {
    type: ADD_TO_CART,
    item
  };
}
function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    id
  };
}
function removeAllItemsFromCart(id) {
  return {
    type: REMOVE_ALL_ITEMS_FROM_CART,
    id
  };
}
function loadCart(items) {
  return {
    type: LOAD_CART,
    items
  };
}
function clearCart() {
  return {
    type: CLEAR_CART
  };
}

/***/ }),

/***/ "./src/AC/ACcommon.js":
/*!****************************!*\
  !*** ./src/AC/ACcommon.js ***!
  \****************************/
/*! exports provided: START, ERR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START", function() { return START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR", function() { return ERR; });
const START = "_START";
const ERR = "_ERR";

/***/ }),

/***/ "./src/AC/ACgetData.js":
/*!*****************************!*\
  !*** ./src/AC/ACgetData.js ***!
  \*****************************/
/*! exports provided: GET_HITS, GET_PRODUCTS, GET_DEFINITIONS, GET_CATEGORIES, GET_PROFILE, getHits, getProducts, getDefinitions, getCategories, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HITS", function() { return GET_HITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS", function() { return GET_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DEFINITIONS", function() { return GET_DEFINITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES", function() { return GET_CATEGORIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHits", function() { return getHits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefinitions", function() { return getDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-api-middleware */ "./node_modules/redux-api-middleware/lib/index.umd.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ACcommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ACcommon */ "./src/AC/ACcommon.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/config */ "./common/config.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");




const GET_HITS = "GET_HITS";
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_DEFINITIONS = "GET_DEFINITIONS";
const GET_CATEGORIES = "GET_CATEGORIES";
const GET_PROFILE = "GET_PROFILE";
function getHits() {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], GET_HITS, GET_HITS + _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "GET",
      endpoint: `${_common_config__WEBPACK_IMPORTED_MODULE_2__["requestUri"]}/products/featured`,
      headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getRequestHeaders"])()
    }
  };
}
function getProducts() {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], GET_PRODUCTS, GET_PRODUCTS + _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "GET",
      endpoint: `${_common_config__WEBPACK_IMPORTED_MODULE_2__["requestUri"]}/products`,
      headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getRequestHeaders"])()
    }
  };
}
function getDefinitions() {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], GET_DEFINITIONS, GET_DEFINITIONS + _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "GET",
      endpoint: `${_common_config__WEBPACK_IMPORTED_MODULE_2__["requestUri"]}/definitions`,
      headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getRequestHeaders"])()
    }
  };
}
function getCategories() {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], GET_CATEGORIES, GET_CATEGORIES + _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "GET",
      endpoint: `${_common_config__WEBPACK_IMPORTED_MODULE_2__["requestUri"]}/product-categories`,
      headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getRequestHeaders"])()
    }
  };
}
function getProfile() {
  return {
    [redux_api_middleware__WEBPACK_IMPORTED_MODULE_0__["RSAA"]]: {
      types: [_ACcommon__WEBPACK_IMPORTED_MODULE_1__["START"], GET_PROFILE, GET_PROFILE + _ACcommon__WEBPACK_IMPORTED_MODULE_1__["ERR"]],
      method: "GET",
      endpoint: `${_common_config__WEBPACK_IMPORTED_MODULE_2__["requestUri"]}/profile?addresses=true&orders=true&cards=true`,
      headers: Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getRequestHeaders"])()
    }
  };
}

/***/ }),

/***/ "./src/AC/index.js":
/*!*************************!*\
  !*** ./src/AC/index.js ***!
  \*************************/
/*! exports provided: GET_HITS, GET_PRODUCTS, GET_DEFINITIONS, GET_CATEGORIES, GET_PROFILE, getHits, getProducts, getDefinitions, getCategories, getProfile, GET_CART, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_ITEMS_FROM_CART, CLEAR_CART, LOAD_CART, addToCart, removeFromCart, removeAllItemsFromCart, loadCart, clearCart, START, ERR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ACgetData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ACgetData */ "./src/AC/ACgetData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_HITS", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["GET_HITS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_DEFINITIONS", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["GET_DEFINITIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHits", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["getHits"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["getProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefinitions", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["getDefinitions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["getCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["getProfile"]; });

/* harmony import */ var _ACcart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ACcart */ "./src/AC/ACcart.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CART", function() { return _ACcart__WEBPACK_IMPORTED_MODULE_1__["GET_CART"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return _ACcart__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART", function() { return _ACcart__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_CART"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALL_ITEMS_FROM_CART", function() { return _ACcart__WEBPACK_IMPORTED_MODULE_1__["REMOVE_ALL_ITEMS_FROM_CART"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CART", function() { return _ACcart__WEBPACK_IMPORTED_MODULE_1__["CLEAR_CART"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_CART", function() { return _ACcart__WEBPACK_IMPORTED_MODULE_1__["LOAD_CART"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return _ACcart__WEBPACK_IMPORTED_MODULE_1__["addToCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return _ACcart__WEBPACK_IMPORTED_MODULE_1__["removeFromCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAllItemsFromCart", function() { return _ACcart__WEBPACK_IMPORTED_MODULE_1__["removeAllItemsFromCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadCart", function() { return _ACcart__WEBPACK_IMPORTED_MODULE_1__["loadCart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return _ACcart__WEBPACK_IMPORTED_MODULE_1__["clearCart"]; });

/* harmony import */ var _ACcommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ACcommon */ "./src/AC/ACcommon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "START", function() { return _ACcommon__WEBPACK_IMPORTED_MODULE_2__["START"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERR", function() { return _ACcommon__WEBPACK_IMPORTED_MODULE_2__["ERR"]; });





/***/ }),

/***/ "./src/HOC/withFetch.jsx":
/*!*******************************!*\
  !*** ./src/HOC/withFetch.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
/* harmony import */ var _components_Elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Elements/Loader/Loader */ "./src/components/Elements/Loader/Loader.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const withFetch = (url, Comp) => {
  class SubComponent extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        data: null,
        isLoading: true
      });

      _defineProperty(this, "mounted", true);
    }

    componentDidMount() {
      const urlAdd = this.props.urlAdd;
      Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getRequest"])(url + urlAdd).then(result => {
        if (this.mounted) {
          this.setState({
            data: result.data,
            isLoading: false
          });
        }
      }).catch(error => {
        console.log("error.request", error.request);
        console.log("error.message", error.message);

        if (this.mounted) {
          this.setState({
            isLoading: false
          });
        }
      });
    }

    componentWillUnmount() {
      this.mounted = false;
    }

    render() {
      if (this.state.isLoading) {
        return React.createElement(_components_Elements_Loader_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], null);
      }

      if (!this.state.data && !this.state.isLoading) {
        return React.createElement("p", null, "No data");
      }

      return React.createElement(Comp, _extends({}, this.props, {
        data: this.state.data
      }));
    }

  }

  SubComponent.propTypes = {
    urlAdd: PropTypes.string
  };
  SubComponent.defaultProps = {
    urlAdd: ""
  };
  return SubComponent;
};

/* harmony default export */ __webpack_exports__["default"] = (withFetch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/App/App.js":
/*!***********************************!*\
  !*** ./src/components/App/App.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/scss/main.scss */ "./src/assets/scss/main.scss");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sticky */ "./node_modules/react-sticky/lib/index.js");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer.js");
/* harmony import */ var _MainContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MainContent */ "./src/components/MainContent.js");
/* harmony import */ var _Modals_AuthModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Modals/AuthModal */ "./src/components/Modals/AuthModal.js");
/* harmony import */ var _Pages_PersonalArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Pages/PersonalArea */ "./src/components/Pages/PersonalArea/index.js");
/* harmony import */ var _Pages_SalesArea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Pages/SalesArea */ "./src/components/Pages/SalesArea.js");
/* harmony import */ var _Pages_Legal_Legal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Pages/Legal/Legal */ "./src/components/Pages/Legal/Legal.js");
/* harmony import */ var _Pages_About_About__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Pages/About/About */ "./src/components/Pages/About/About.js");
/* harmony import */ var _Pages_Restaurants_Restaurants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Pages/Restaurants/Restaurants */ "./src/components/Pages/Restaurants/Restaurants.js");
/* harmony import */ var _Pages_BasketArea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Pages/BasketArea */ "./src/components/Pages/BasketArea/index.js");
/* harmony import */ var _Pages_PaymentArea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Pages/PaymentArea */ "./src/components/Pages/PaymentArea/index.js");
/* harmony import */ var _Pages_StatusArea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Pages/StatusArea */ "./src/components/Pages/StatusArea.js");
/* harmony import */ var _Pages_Constructor_Constructor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Pages/Constructor/Constructor */ "./src/components/Pages/Constructor/Constructor.js");
/* harmony import */ var _Pages_MobileAuthArea__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Pages/MobileAuthArea */ "./src/components/Pages/MobileAuthArea.js");
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ProductCard */ "./src/components/ProductCard/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























class App extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onHashChange", () => {
      if (!this.state.authorization.authorized) {
        const hash = window.location.hash;

        if (hash === "#/cabinet" || hash === "#/payment") {
          window.location.hash = "#/";
          return;
        }
      }

      if (this.state.showMobileAuth) {
        this.setState({
          showMobileAuth: false
        });
      } // setTimeout(() => {
      //     scroll.scrollToTop();
      // }, 100);

    });

    _defineProperty(this, "getUserProfile", async () => {
      const token = Object(_helpers__WEBPACK_IMPORTED_MODULE_20__["getCookie"])("authToken");
      let profile = {};

      if (token) {
        await Object(_helpers__WEBPACK_IMPORTED_MODULE_20__["getRequest"])("/profile?addresses=true&orders=true&cards=true").then(res => {
          if (res && res.data && res.data.success === true) {
            profile = res.data.result;
          }
        });
      }

      return profile;
    });

    _defineProperty(this, "logout", () => {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_20__["deleteCookie"])("authToken");
      this.setState({
        profile: {}
      }, () => {
        window.location.hash = "#/";
      });
    });

    _defineProperty(this, "openAuth", () => {
      const authorization = Object.assign({}, this.state.authorization);
      authorization.authorized = "";
      authorization.show = true;
      this.setState({
        authorization
      });
    });

    _defineProperty(this, "closeAuth", () => {
      const authorization = Object.assign({}, this.state.authorization);
      authorization.authorized = Object(_helpers__WEBPACK_IMPORTED_MODULE_20__["getCookie"])("authToken");
      authorization.show = false;
      this.setState({
        authorization,
        navigateRequest: ""
      });
    });

    _defineProperty(this, "doAuth", data => {
      if (data && !!data.token) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_20__["setCookie"])("authToken", data.token, {
          path: window.location.pathname,
          expires: 2550259188
        });
        const authorization = Object.assign({}, this.state.authorization);
        authorization.authorized = data.token;
        authorization.show = false;

        if (authorization.authorized && this.state.navigateRequest) {
          this.doNavigate(this.state.navigateRequest);
        }

        this.setState({
          authorization,
          navigateRequest: ""
        }, async () => {
          const profile = await this.getUserProfile();
          this.setUserProfile(profile);
        });
      }
    });

    _defineProperty(this, "setUserProfile", profile => {
      this.setState({
        profile
      });
    });

    _defineProperty(this, "setProfileBonuses", bonuses => {
      const profile = Object.assign({}, this.state.profile);
      profile.bonuses = bonuses;
      this.setState({
        profile
      });
    });

    _defineProperty(this, "showUserProfile", () => {
      this.onNavigateRequest("#/cabinet");
    });

    _defineProperty(this, "onNavigateRequest", (requestLink, unauthorized) => {
      if (this.state.profile.phone || unauthorized === true) {
        this.doNavigate(requestLink);
      } else {
        this.setState({
          navigateRequest: requestLink
        });
        this.openAuth();
      }
    });

    _defineProperty(this, "setShowMobileMenu", () => {
      this.setState({
        showMobileAuth: !this.state.showMobileAuth
      });
    });

    _defineProperty(this, "setAddresses", addresses => {
      const profile = Object.assign({}, this.state.profile);
      profile.addresses = addresses;
      this.setState({
        profile
      });
    });

    _defineProperty(this, "setProfileEmail", (email, email_confirmed, email_subscribed) => {
      const profile = Object.assign({}, this.state.profile);
      profile.email = email;
      profile.email_confirmed = email_confirmed;
      profile.email_subscribed = email_subscribed;
      this.setState({
        profile
      });
    });

    this.state = {
      authorization: {
        show: false,
        authorized: Object(_helpers__WEBPACK_IMPORTED_MODULE_20__["getCookie"])("authToken")
      },
      profile: {},
      showMobileAuth: false,
      navigateRequest: ""
    };
  }

  async componentWillMount() {
    const self = this;
    const state = {};
    window.addEventListener("hashchange", this.onHashChange, false);

    if (self.state.authorization.authorized) {
      state.profile = await self.getUserProfile();
    } else {
      self.onHashChange();
    }

    await this.setState(state);
  }

  componentDidMount() {
    this.props.getCategories();
    this.props.getDefinitions();
    this.props.getProducts();
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.onHashChange, false);
  }

  doNavigate(link) {
    if (this.state.showMobileAuth) {
      this.setState({
        showMobileAuth: !this.state.showMobileAuth
      });
    }

    window.location.href = link;
  }

  get mobileAuth() {
    return React.createElement(_Pages_MobileAuthArea__WEBPACK_IMPORTED_MODULE_18__["default"], {
      onShowUserProfile: this.showUserProfile,
      profile: this.state.profile
    });
  }

  render() {
    const {
      products,
      definitions,
      categories
    } = this.props;
    const {
      authorization,
      showMobileAuth,
      category,
      profile
    } = this.state;
    return React.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_3__["StickyContainer"], null, React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["HashRouter"], null, React.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_3__["Sticky"], null, ({
      style,
      isSticky
    }) => React.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        "sticky-header": isSticky
      }),
      style: {
        zIndex: "11000",
        backgroundColor: "#fff",
        ...style
      }
    }, React.createElement(_Modals_AuthModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      modalTitle: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F",
      modalText: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u043A\u0443\u0434\u0430 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0421\u041C\u0421 \u0441 \u043A\u043E\u0434\u043E\u043C \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438",
      modalDescription: "\u0422\u0443\u0434\u0430 \u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u044B \u043F\u043E\u0431\u043E\u043D\u0443\u0441\u044B",
      requestAuthCodeApi: "/auth/login-or-register",
      confirmAuthCodeApi: "/auth/dual-confirm",
      isOpen: authorization.show && !authorization.authorized,
      onClose: this.closeAuth,
      onSuccess: this.doAuth
    }), React.createElement(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
      categories: categories,
      profile: profile,
      category: category,
      setShowMobileMenu: this.setShowMobileMenu,
      showMobileAuth: showMobileAuth,
      onShowUserProfile: this.showUserProfile
    }))), showMobileAuth ? this.mobileAuth : "", React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], null, products.map(product => React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: `/${product.alias}`,
      key: product.id,
      exact: true,
      component: () => React.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_19__["default"], {
        product: product,
        urlAdd: product.alias,
        showMobileAuth: showMobileAuth
      })
    })), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/",
      exact: true,
      component: () => React.createElement(_MainContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
        slides: definitions.layout.frontpage_slider,
        mobileSlides: definitions.layout.mobile_slider,
        showMobileAuth: showMobileAuth,
        categories: categories
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/cabinet",
      component: () => React.createElement(_Pages_PersonalArea__WEBPACK_IMPORTED_MODULE_9__["default"], {
        profile: profile,
        showMobileAuth: showMobileAuth,
        logout: this.logout,
        setProfileEmail: this.setProfileEmail,
        setAddresses: this.setAddresses,
        getUserProfile: this.getUserProfile,
        setUserProfile: this.setUserProfile,
        dadataToken: definitions.dadataToken
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/sales",
      component: () => React.createElement(_Pages_SalesArea__WEBPACK_IMPORTED_MODULE_10__["default"], {
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/legal",
      component: () => React.createElement(_Pages_Legal_Legal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/about",
      component: () => React.createElement(_Pages_About_About__WEBPACK_IMPORTED_MODULE_12__["default"], {
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/restaurants",
      component: () => React.createElement(_Pages_Restaurants_Restaurants__WEBPACK_IMPORTED_MODULE_13__["default"], {
        restaurants: definitions.layout.restaurants,
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/basket",
      component: () => React.createElement(_Pages_BasketArea__WEBPACK_IMPORTED_MODULE_14__["default"], {
        pageTitle: "Pobo - \u041A\u043E\u0440\u0437\u0438\u043D\u0430",
        min_amount_for_delivery: definitions.orders.min_amount_for_delivery,
        showMobileAuth: showMobileAuth,
        onNavigateRequest: this.onNavigateRequest
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/payment",
      component: () => React.createElement(_Pages_PaymentArea__WEBPACK_IMPORTED_MODULE_15__["default"], {
        showMobileAuth: showMobileAuth,
        bonus_accrual_percent: definitions.orders.bonus_accrual_percent,
        restaurants: definitions.layout.restaurants,
        profile: profile,
        isAuthorized: authorization.authorized,
        setUserProfile: this.setUserProfile,
        setAddresses: this.setAddresses,
        setProfileBonuses: this.setProfileBonuses,
        doAuth: this.doAuth,
        cloudpaymentsPublicId: definitions.cloudpaymentsPublicId,
        dadataToken: definitions.dadataToken
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/constructor",
      component: () => React.createElement(_Pages_Constructor_Constructor__WEBPACK_IMPORTED_MODULE_17__["default"], {
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/status/:id",
      component: () => React.createElement(_Pages_StatusArea__WEBPACK_IMPORTED_MODULE_16__["default"], {
        profile: profile,
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/status/",
      component: () => React.createElement(_Pages_StatusArea__WEBPACK_IMPORTED_MODULE_16__["default"], {
        profile: profile,
        showMobileAuth: showMobileAuth
      })
    })), React.createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      showMobileAuth: showMobileAuth,
      companyPhone: definitions.layout.company_phone,
      socialLinks: definitions.layout.social_links,
      authorized: authorization.authorized,
      onNavigateRequest: this.onNavigateRequest
    })));
  }

}

App.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  categories: PropTypes.instanceOf(Array).isRequired,
  definitions: PropTypes.instanceOf(Object).isRequired,
  profile: PropTypes.instanceOf(Object).isRequired,
  getProfile: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getDefinitions: PropTypes.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/components/App/App.js");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AC */ "./src/AC/index.js");




function mapStateToProps(state) {
  return {
    products: state.products,
    definitions: state.definitions,
    categories: state.categories,
    profile: state.profile
  };
}

const mapDispatchToProps = {
  getProducts: _AC__WEBPACK_IMPORTED_MODULE_2__["getProducts"],
  getDefinitions: _AC__WEBPACK_IMPORTED_MODULE_2__["getDefinitions"],
  getCategories: _AC__WEBPACK_IMPORTED_MODULE_2__["getCategories"],
  getProfile: _AC__WEBPACK_IMPORTED_MODULE_2__["getProfile"]
};
const ConnectedApp = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_App__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedApp);

/***/ }),

/***/ "./src/components/BasketMobile/BasketMobile.jsx":
/*!******************************************************!*\
  !*** ./src/components/BasketMobile/BasketMobile.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _icons_mobile_BasketMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/mobile/BasketMobile */ "./src/components/icons/mobile/BasketMobile.js");




function BasketMobile({
  cart
}) {
  const cartCount = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getTotalCount"])(cart);

  if (cartCount > 0) {
    return React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"], {
      to: "/basket",
      className: "mobile-basket-float"
    }, React.createElement(_icons_mobile_BasketMobile__WEBPACK_IMPORTED_MODULE_2__["default"], null), React.createElement("span", {
      className: "basket__counter"
    }, cartCount));
  }

  return null;
}

BasketMobile.propTypes = {
  cart: PropTypes.instanceOf(Array).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BasketMobile);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/BasketMobile/index.js":
/*!**********************************************!*\
  !*** ./src/components/BasketMobile/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _BasketMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasketMobile */ "./src/components/BasketMobile/BasketMobile.jsx");



function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const ConnectedComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_BasketMobile__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedComponent);

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(PropTypes) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Button(props) {
  const {
    onClickMethod,
    onClickSubmit,
    buttonType,
    buttonClass,
    buttonTitle
  } = props;

  if (onClickSubmit) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: `button button-${buttonType} ${buttonClass}`,
      onClick: onClickMethod
    }, buttonTitle);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `button button-${buttonType} ${buttonClass}`,
    onClick: onClickMethod
  }, buttonTitle);
}

Button.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
  onClickMethod: PropTypes.func,
  onClickSubmit: PropTypes.bool
};
Button.defaultProps = {
  onClickMethod: () => {},
  onClickSubmit: null,
  buttonClass: ""
};
/* harmony default export */ __webpack_exports__["default"] = (Button);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/ContentButton.js":
/*!*****************************************!*\
  !*** ./src/components/ContentButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {function ContentButton(props) {
  const {
    onClickMethod,
    onClickSubmit,
    buttonType,
    buttonClass,
    buttonTitle,
    children
  } = props;

  if (onClickSubmit) {
    return React.createElement("button", {
      type: "button",
      className: `button button-${buttonType} ${buttonClass}`,
      onClick: onClickMethod
    }, children || buttonTitle);
  }

  return React.createElement("div", {
    className: `button button-${buttonType} ${buttonClass}`,
    onClick: onClickMethod
  }, children || buttonTitle);
}

ContentButton.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonClass: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Array)]),
  onClickMethod: PropTypes.func,
  onClickSubmit: PropTypes.bool
};
ContentButton.defaultProps = {
  onClickMethod: () => {},
  onClickSubmit: null,
  children: null,
  buttonClass: ""
};
/* harmony default export */ __webpack_exports__["default"] = (ContentButton);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/Elements/Checkbox/Checkbox.scss":
/*!********************************************************!*\
  !*** ./src/components/Elements/Checkbox/Checkbox.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Elements/Checkbox/index.js":
/*!***************************************************!*\
  !*** ./src/components/Elements/Checkbox/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.scss */ "./src/components/Elements/Checkbox/Checkbox.scss");
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_scss__WEBPACK_IMPORTED_MODULE_1__);



function Checkbox({
  children,
  id,
  onChange
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "fake-checkbox"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    className: "fake-checkbox__input",
    id: id,
    onChange: onChange
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "fake-checkbox__label",
    htmlFor: id
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ }),

/***/ "./src/components/Elements/Loader/Loader.jsx":
/*!***************************************************!*\
  !*** ./src/components/Elements/Loader/Loader.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loader_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.gif */ "./src/components/Elements/Loader/loader.gif");
/* harmony import */ var _loader_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loader_gif__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.scss */ "./src/components/Elements/Loader/Loader.scss");
/* harmony import */ var _Loader_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Loader_scss__WEBPACK_IMPORTED_MODULE_2__);



function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "loader",
    src: _loader_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
  });
}

/***/ }),

/***/ "./src/components/Elements/Loader/Loader.scss":
/*!****************************************************!*\
  !*** ./src/components/Elements/Loader/Loader.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Elements/Loader/loader.gif":
/*!***************************************************!*\
  !*** ./src/components/Elements/Loader/loader.gif ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhHwAfAPUAAP///2lqdfHx8uTk5tfX2s/P0sjIzOrq69TV2MPDyO7u7+fn6czN0MbHy9DQ0+Dg4/n5+cvLz+Xl5+/w8YiJkn+AiZeYoNvc3qqrsb6/w5uco/v7+6amrZKSmt3d3/r6+pOTm4aHjwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAHwAfAAAG/0CAcEgUDAgFA4BiwSQexKh0eEAkrldAZbvlOD5TqYKALWu5XIwnPFwwymY0GsRgAxrwuJwbCi8aAHlYZ3sVdwtRCm8JgVgODwoQAAIXGRpojQwKRGSDCRESYRsGHYZlBFR5AJt2a3kHQlZlERN2QxMRcAiTeaG2QxJ5RnAOv1EOcEdwUMZDD3BIcKzNq3BJcJLUABBwStrNBtjf3GUGBdLfCtadWMzUz6cDxN/IZQMCvdTBcAIAsli0jOHSJeSAqmlhNr0awo7RJ19TJORqdAXVEEVZyjyKtE3Bg3oZE2iK8oeiKkFZGiCaggelSTiA2LhxiZLBSjZjBL2siNBOFQ84LxHA+mYEiRJzBO7ZCQIAIfkECQoAAAAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfju9jf82YAIQxRCm14Ww4PChAAEAoPDlsAFRUgHkRiZAkREmoSEXiVlRgfQgeBaXRpo6MOQlZbERN0Qx4drRUcAAJmnrVDBrkVDwNjr8BDGxq5Z2MPyUQZuRgFY6rRABe5FgZjjdm8uRTh2d5b4NkQY0zX5QpjTc/lD2NOx+WSW0++2RJmUGJhmZVsQqgtCE6lqpXGjBchmt50+hQKEAEiht5gUcTIESR9GhlgE9IH0BiTkxrMmWIHDkose9SwcQlHDsOIk9ygiVbl5JgMLuV4HUmypMkTOkEAACH5BAkKAAAALAAAAAAfAB8AAAb/QIBwSBQMCAUDwFAgDATEqHR4QCSuVwD2ijhMpwrCFqsdJwiK73DBMGfdCcZCDWjAE2V347vY3/NmdXNECm14Ww4PChAAEAoPDltlDGlDYmQJERJqEhGHWARUgZVqaWZeAFZbERN0QxOeWwgAAmabrkMSZkZjDrhRkVtHYw+/RA9jSGOkxgpjSWOMxkIQY0rT0wbR2LQV3t4UBcvcF9/eFpdYxdgZ5hUYA73YGxruCbVjt78G7hXFqlhY/fLQwR0HIQdGuUrTz5eQdIc0cfIEwByGD0MKvcGSaFGjR8GyeAPhIUofQGNQSgrB4IsdOCqx7FHDBiYcOQshYjKDxliVDpRjunCjdSTJkiZP6AQBACH5BAkKAAAALAAAAAAfAB8AAAb/QIBwSBQMCAUDwFAgDATEqHR4QCSuVwD2ijhMpwrCFqsdJwiK73DBMGfdCcZCDWjAE2V347vY3/NmdXNECm14Ww4PChAAEAoPDltlDGlDYmQJERJqEhGHWARUgZVqaWZeAFZbERN0QxOeWwgAAmabrkMSZkZjDrhRkVtHYw+/RA9jSGOkxgpjSWOMxkIQY0rT0wbR2I3WBcvczltNxNzIW0693MFYT7bTumNQqlisv7BjswAHo64egFdQAbj0RtOXDQY6VAAUakihN1gSLaJ1IYOGChgXXqEUpQ9ASRlDYhT0xQ4cACJDhqDD5mRKjCAYuArjBmVKDP9+VRljMyMHDwcfuBlBooSCBQwJiqkJAgAh+QQJCgAAACwAAAAAHwAfAAAG/0CAcEgUDAgFA8BQIAwExKh0eEAkrlcA9oo4TKcKwharHScIiu9wwTBn3QnGQg1owBNld+O72N/zZnVzRApteFsODwoQABAKDw5bZQxpQ2JkCRESahIRh1gEVIGVamlmXgBWWxETdEMTnlsIAAJmm65DEmZGYw64UZFbR2MPv0QPY0hjpMYKY0ljjMZCEGNK09MG0diN1gXL3M5bTcTcyFtOvdzBWE+207pjUKpYrL+wY7MAB4EerqZjUAG4lKVCBwMbvnT6dCXUkEIFK0jUkOECFEeQJF2hFKUPAIkgQwIaI+hLiJAoR27Zo4YBCJQgVW4cpMYDBpgVZKL59cEBhw+U+QROQ4bBAoUlTZ7QCQIAIfkECQoAAAAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfju9jf82Z1c0QKbXhbDg8KEAAQCg8OW2UMaUNiZAkREmoSEYdYBFSBlWppZl4AVlsRE3RDE55bCAACZpuuQxJmRmMOuFGRW0djD79ED2NIY6TGCmNJY4zGQhBjStPTFBXb21DY1VsGFtzbF9gAzlsFGOQVGefIW2LtGhvYwVgDD+0V17+6Y6BwaNfBwy9YY2YBcMAPnStTY1B9YMdNiyZOngCFGuIBxDZAiRY1eoTvE6UoDEIAGrNSUoNBUuzAaYlljxo2M+HIeXiJpRsRNMaq+JSFCpsRJEqYOPH2JQgAIfkECQoAAAAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfjywjlzX9jdXNEHiAVFX8ODwoQABAKDw5bZQxpQh8YiIhaERJqEhF4WwRDDpubAJdqaWZeAByoFR0edEMTolsIAA+yFUq2QxJmAgmyGhvBRJNbA5qoGcpED2MEFrIX0kMKYwUUslDaj2PA4soGY47iEOQFY6vS3FtNYw/m1KQDYw7mzFhPZj5JGzYGipUtESYowzVmF4ADgOCBCZTgFQAxZBJ4AiXqT6ltbUZhWdToUSR/Ii1FWbDnDkUyDQhJsQPn5ZU9atjUhCPHVhgTNy/RSKsiqKFFbUaQKGHiJNyXIAAh+QQJCgAAACwAAAAAHwAfAAAG/0CAcEh8JDAWCsBQIAwExKhU+HFwKlgsIMHlIg7TqQeTLW+7XYIiPGSAymY0mrFgA0LwuLzbCC/6eVlnewkADXVECgxcAGUaGRdQEAoPDmhnDGtDBJcVHQYbYRIRhWgEQwd7AB52AGt7YAAIchETrUITpGgIAAJ7ErdDEnsCA3IOwUSWaAOcaA/JQ0amBXKa0QpyBQZyENFCEHIG39HcaN7f4WhM1uTZaE1y0N/TacZoyN/LXU+/0cNyoMxCUytYLjm8AKSS46rVKzmxADhjlCACMFGkBiU4NUQRxS4OHijwNqnSJS6ZovzRyJAQo0NhGrgs5bIPmwWLCLHsQsfhxBWTe9QkOzCwC8sv5Ho127akyRM7QQAAOwAAAAAAAAAAAA=="

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(PropTypes) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-yandex-metrika */ "./node_modules/react-yandex-metrika/lib/index.js");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-facebook-pixel */ "./node_modules/react-facebook-pixel/dist/fb-pixel.js");
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./src/components/Menu.js");
/* harmony import */ var _icons_InstagramIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/InstagramIcon */ "./src/components/icons/InstagramIcon.js");
/* harmony import */ var _icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/FacebookIcon */ "./src/components/icons/FacebookIcon.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "sendPixel", () => {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["fbPixel"])("micro");
    });
  }

  componentDidMount() {
    const options = {
      autoConfig: true // debug: true,

    };
    react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3___default.a.init("320228355308484", null, options);
  }

  render() {
    const menuItems = [{
      title: "О нас",
      onClick: () => this.props.onNavigateRequest("#/about", true)
    }, {
      title: "Акции",
      onClick: () => this.props.onNavigateRequest("#/sales", true)
    }, {
      title: "Рестораны",
      onClick: () => this.props.onNavigateRequest("#/restaurants", true)
    }];

    if (!this.props.showMobileAuth) {
      menuItems.push({
        link: "#/legal",
        title: "Правовая информация"
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("footer", {
        "mobile-page": this.props.showMobileAuth
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "footer__content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "top-level"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      menuItems: menuItems
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "right-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contact-number"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: `tel:${this.props.companyPhone}`,
      onClick: this.sendPixel
    }, this.props.companyPhone)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bottom-level"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-description copyright"
    }, "2019 pobo. \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "right-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "social-icons"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: this.props.socialLinks.instagram,
      className: "social-icons__item",
      rel: "noopener noreferrer",
      target: "_blank",
      onClick: this.sendPixel
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_InstagramIcon__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: this.props.socialLinks.facebook,
      className: "social-icons__item",
      rel: "noopener noreferrer",
      target: "_blank",
      onClick: this.sendPixel
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "tag"
    }, "#", this.props.socialLinks.hashtag))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_2__["YMInitializer"], {
      accounts: [54294081],
      options: {
        webvisor: true
      },
      version: "2"
    }));
  }

}

Footer.propTypes = {
  showMobileAuth: PropTypes.bool.isRequired,
  onNavigateRequest: PropTypes.func.isRequired,
  companyPhone: PropTypes.string.isRequired,
  socialLinks: PropTypes.shape({
    hashtag: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(PropTypes) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-yandex-metrika */ "./node_modules/react-yandex-metrika/lib/index.js");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _icons_LogoIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/LogoIcon */ "./src/components/icons/LogoIcon.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Menu */ "./src/components/Menu.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ "./src/components/Button.js");
/* harmony import */ var _icons_mobile_Burger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/mobile/Burger */ "./src/components/icons/mobile/Burger.js");
/* harmony import */ var _basket_icon_desctop_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basket-icon-desctop.svg */ "./src/components/Header/basket-icon-desctop.svg");
/* harmony import */ var _basket_icon_desctop_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_basket_icon_desctop_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mobile_basket_icon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mobile-basket-icon.svg */ "./src/components/Header/mobile-basket-icon.svg");
/* harmony import */ var _mobile_basket_icon_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mobile_basket_icon_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _icons_mobile_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icons/mobile/Logo */ "./src/components/icons/mobile/Logo.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _icons_BonusIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icons/BonusIcon */ "./src/components/icons/BonusIcon.js");
/* harmony import */ var _ContentButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ContentButton */ "./src/components/ContentButton.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      unfinishedOrder: Object(_helpers__WEBPACK_IMPORTED_MODULE_11__["getCookie"])("lastOrder"),
      mobileMenu: false,
      profile: this.props.profile,
      category: this.props.category
    });

    _defineProperty(this, "cartPrice", () => Object(_helpers__WEBPACK_IMPORTED_MODULE_11__["formatCurrency"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_11__["getPrice1"])(this.props.cart)));

    _defineProperty(this, "listenToScroll", () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = winScroll / height;
      this.setState({
        mobileMenu: scrolled > 0.03
      });
    });

    _defineProperty(this, "renderBasketIcon", ({
      mobile
    }) => {
      const basketIconClass = mobile ? "mobile-basket-icon" : "desctop-basket-icon";
      const basketIconSrc = mobile ? _mobile_basket_icon_svg__WEBPACK_IMPORTED_MODULE_9___default.a : _basket_icon_desctop_svg__WEBPACK_IMPORTED_MODULE_8___default.a;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(basketIconClass, {
          "hide-element": !!this.state.unfinishedOrder === false
        }),
        onClick: () => {
          window.location.hash = "#/status/" + this.state.unfinishedOrder;
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: basketIconSrc,
        alt: "\u0418\u043A\u043E\u043D\u043A\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430 \u0437\u0430\u043A\u0430\u0437\u0430"
      }));
    });

    _defineProperty(this, "openCart", () => {
      console.log("cart");
      react_yandex_metrika__WEBPACK_IMPORTED_MODULE_2___default()("reachGoal", "mobile_basket_click", {
        awesomeParameter: 42
      });
      window.location.href = "#/basket";
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.profile && nextProps.profile.phone !== this.state.profile.phone || nextProps.profile && nextProps.profile.bonuses !== this.state.profile.bonuses) {
      this.setState({
        profile: nextProps.profile
      });
      return true;
    }

    if (nextProps.categories !== this.state.categories) {
      this.setState({
        categories: nextProps.categories
      });
      return true;
    }

    if (nextState.mobileMenu !== this.state.mobileMenu) {
      this.setState({
        mobileMenu: nextState.mobileMenu
      });
      return true;
    }

    if (nextProps.category !== this.state.category) {
      this.setState({
        category: nextProps.category
      });
      return true;
    }

    if (nextProps.showMobileAuth !== this.props.showMobileAuth) {
      return true;
    }

    if (nextProps.cart !== this.props.cart) {
      return true;
    }

    return false;
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  renderProfileButton() {
    if (this.state.profile.phone === undefined) {
      const title = "Войти";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
        buttonType: "default",
        buttonTitle: title,
        buttonClass: "profile-button",
        type: "button",
        onClickMethod: () => {
          this.props.onShowUserProfile();
          Object(_helpers__WEBPACK_IMPORTED_MODULE_11__["fbPixel"])("micro");
        }
      }, title);
    }

    const title = `${this.state.profile.firstname || this.state.profile.phone} ${this.state.profile.bonuses}`;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ContentButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
      buttonType: "default",
      buttonTitle: title,
      buttonClass: "profile-button",
      onClickMethod: this.props.onShowUserProfile
    }, title, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_BonusIcon__WEBPACK_IMPORTED_MODULE_12__["default"], null));
  }

  render() {
    const {
      categories,
      showMobileAuth,
      setShowMobileMenu
    } = this.props;
    const menuItems = [...categories];

    if (menuItems.length) {
      menuItems.unshift({
        id: 0,
        alias: "hits",
        title: "Хиты"
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("header", {
        "header-mobile": this.state.mobileMenu
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "top-level"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_LogoIcon__WEBPACK_IMPORTED_MODULE_4__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "right-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
      menuItems: [{
        link: "/",
        title: "Меню"
      }, {
        link: "/about",
        title: "О нас"
      }, {
        link: "/sales",
        title: "Акции"
      }, {
        link: "/restaurants",
        title: "Рестораны"
      }]
    }), this.renderBasketIcon({
      mobile: false
    }), this.renderProfileButton())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "bottom-level"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
      menuItems: menuItems,
      category: this.state.category
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "right-bar"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "price-container",
      id: "cart-price"
    }, this.cartPrice()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      buttonType: "basket",
      buttonTitle: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
      onClickMethod: () => {
        window.location.href = "#/basket";
      }
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mobile-section"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        "hide-element": this.state.mobileMenu
      }),
      onClick: setShowMobileMenu
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_mobile_Burger__WEBPACK_IMPORTED_MODULE_7__["default"], {
      open: showMobileAuth,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        "hide-element": this.state.mobileMenu
      })
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("boul-button__container", {
        "hide-element": !this.state.mobileMenu
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
      menuItems: categories,
      category: this.state.category
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        "hide-element": this.state.mobileMenu
      }),
      href: "/"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_mobile_Logo__WEBPACK_IMPORTED_MODULE_10__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("right-bar", {
        "hide-element": this.state.mobileMenu
      })
    }, this.renderBasketIcon({
      mobile: true
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        "hide-element": this.state.mobileMenu
      }),
      buttonType: "basket",
      buttonTitle: this.cartPrice(),
      buttonClass: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mobile-basket-button", {
        "hide-element": this.state.mobileMenu
      }),
      onClickMethod: this.openCart
    })))));
  }

}

Header.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
  cart: PropTypes.instanceOf(Array).isRequired,
  onShowUserProfile: PropTypes.func.isRequired,
  showMobileAuth: PropTypes.bool.isRequired,
  setShowMobileMenu: PropTypes.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Header);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/Header/basket-icon-desctop.svg":
/*!*******************************************************!*\
  !*** ./src/components/Header/basket-icon-desctop.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMzLjI5ODYgMzIuMzk1NUg2LjMxMDg5QzUuODEzMTUgMzIuMzk1NSA1LjQwODIgMzIuODAwNSA1LjQwODIgMzMuMjk4MlYzNS45MjE5QzUuNDA4MiAzNi45MDA1IDUuNzg3ODQgMzcuODI4NSA2LjQ3OTYxIDM4LjUyMDNDNy4xNzEzOSAzOS4yMTIgOC4wOTkzOCAzOS42MDAxIDkuMDc4IDM5LjYwMDFIMzAuNTMxNUMzMi41NTYyIDM5LjYwMDEgMzQuMjAxMyAzNy45NTUgMzQuMjAxMyAzNS45MzAzVjMzLjMwNjZDMzQuMTkyOSAzMi44MDA0IDMzLjc5NjQgMzIuMzk1NSAzMy4yOTg2IDMyLjM5NTVaIiBmaWxsPSIjNDc0QTUxIi8+CjxwYXRoIGQ9Ik0yOS42OTU4IDMuNjAyM0MyOS4xNDc0IDMuNjAyMyAyOC41ODIyIDMuNjYxMzYgMjcuOTgzMiAzLjc3MTAzQzI1LjkyNDggMS4zNjY2OCAyMi45NzIxIDAgMTkuOCAwQzEzLjg0NCAwIDkuMDAxNTMgNC44NDI0NCA5LjAwMTUzIDEwLjc5ODVDOS4wMDE1MyAxMS4yOTYyIDguNTk2NTkgMTEuNzAxMiA4LjA5ODg1IDExLjcwMTJDNy42MDExMSAxMS43MDEyIDcuMTk2MTcgMTEuMjk2MiA3LjE5NjE3IDEwLjc5ODVDNy4xOTYxNyA4Ljg0OTY4IDcuNjQzMjkgNi45NjgzOSA4LjUyOTEgNS4xOTY3NkM4LjY4OTM5IDQuODg0NjIgOC42NDcyMSA0LjUwNDk5IDguNDI3ODcgNC4yMzUwMkM4LjIwODUyIDMuOTY1MDYgNy44NDU3NiAzLjgzODUyIDcuNTA4MzEgMy45MjI4OEMzLjA4NzY5IDUuMDE5NiAwIDguOTU5MzUgMCAxMy40OTgxQzAgMTcuMjM1NCAyLjEwOTA4IDIwLjYzNTIgNS40MjQ1NCAyMi4zMjI1TDUuNDA3NjcgMjkuNjk1OEM1LjQwNzY3IDI5LjkzMiA1LjUwMDQ3IDMwLjE1OTggNS42NjkyIDMwLjMzNjlDNS44Mzc5MiAzMC41MDU3IDYuMDY1NyAzMC41OTg1IDYuMzEwMzUgMzAuNTk4NUgzMy4yOTgxQzMzLjc5NTggMzAuNTk4NSAzNC4yMDA4IDMwLjE5MzUgMzQuMjAwOCAyOS42OTU4VjIyLjMwNTZDMzcuNDk5NCAyMC42MTgzIDM5LjYgMTcuMjI2OSAzOS42IDEzLjQ5ODFDMzkuNTkxNiA4LjAzOTggMzUuMTU0MSAzLjYwMjMgMjkuNjk1OCAzLjYwMjNaTTEzLjE2OTEgMjQuOTk2OEMxMy4wMDAzIDI1LjEzMTcgMTIuNzk3OSAyNS4xOTkyIDEyLjU5NTQgMjUuMTk5MkMxMi4zMzM5IDI1LjE5OTIgMTIuMDgwOCAyNS4wODk2IDExLjg5NTIgMjQuODcwMkMxMS41OTk5IDI0LjUwNzUgOC45OTMxIDIxLjI1OTUgOC45OTMxIDE4Ljg5NzNDOC45OTMxIDE4LjM5OTYgOS4zOTgwNCAxNy45OTQ2IDkuODk1NzggMTcuOTk0NkMxMC4zOTM1IDE3Ljk5NDYgMTAuNzk4NSAxOC4zOTk2IDEwLjc5ODUgMTguODk3M0MxMC43OTg1IDIwLjE5NjUgMTIuMzI1NCAyMi41NTAyIDEzLjI5NTYgMjMuNzIyOUMxMy42MDc4IDI0LjExMSAxMy41NTcxIDI0LjY3NjIgMTMuMTY5MSAyNC45OTY4Wk0yMC42OTQzIDI0LjI5NjZDMjAuNjk0MyAyNC43OTQzIDIwLjI4OTMgMjUuMTk5MiAxOS43OTE2IDI1LjE5OTJDMTkuMjkzOCAyNS4xOTkyIDE4Ljg5NzMgMjQuNzk0MyAxOC44OTczIDI0LjI5NjZWMTguODk3M0MxOC44OTczIDE4LjM5OTYgMTkuMzAyMyAxNy45OTQ2IDE5LjggMTcuOTk0NkMyMC4yOTc3IDE3Ljk5NDYgMjAuNzAyNyAxOC4zOTk2IDIwLjcwMjcgMTguODk3M0wyMC42OTQzIDI0LjI5NjZaTTI3LjY5NjQgMjQuODcwMkMyNy41MTkyIDI1LjA4OTYgMjcuMjU3NyAyNS4xOTkyIDI2Ljk5NjIgMjUuMTk5MkMyNi43OTM3IDI1LjE5OTIgMjYuNTkxMiAyNS4xMzE3IDI2LjQyMjUgMjQuOTk2OEMyNi4wMzQ0IDI0LjY4NDYgMjUuOTgzOCAyNC4xMTEgMjYuMjk2IDIzLjczMTNDMjcuMjU3NyAyMi41NTAyIDI4Ljc5MzEgMjAuMTk2NSAyOC43OTMxIDE4LjkwNThDMjguNzkzMSAxOC40MDggMjkuMTk4IDE4LjAwMzEgMjkuNjk1OCAxOC4wMDMxQzMwLjE5MzUgMTguMDAzMSAzMC41OTg1IDE4LjQwOCAzMC41OTg1IDE4LjkwNThDMzAuNTk4NSAyMS4yNTk1IDI3Ljk5MTcgMjQuNTA3NSAyNy42OTY0IDI0Ljg3MDJaIiBmaWxsPSIjNDc0QTUxIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./src/components/Header/Header.js");



function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const mapDispatchToProps = {};
const ConnectedHeader = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_Header__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedHeader);

/***/ }),

/***/ "./src/components/Header/mobile-basket-icon.svg":
/*!******************************************************!*\
  !*** ./src/components/Header/mobile-basket-icon.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjMyMTIgMTYuODUxNkgzLjI4MjA4QzMuMDIzMTUgMTYuODUxNiAyLjgxMjUgMTcuMDYyMiAyLjgxMjUgMTcuMzIxMVYxOC42ODZDMi44MTI1IDE5LjE5NTEgMy4wMDk5OSAxOS42Nzc4IDMuMzY5ODUgMjAuMDM3N0MzLjcyOTcyIDIwLjM5NzYgNC4yMTI0NyAyMC41OTk0IDQuNzIxNTUgMjAuNTk5NEgxNS44ODE4QzE2LjkzNTEgMjAuNTk5NCAxNy43OTA4IDE5Ljc0MzcgMTcuNzkwOCAxOC42OTA0VjE3LjMyNTVDMTcuNzg2NCAxNy4wNjIyIDE3LjU4MDIgMTYuODUxNiAxNy4zMjEyIDE2Ljg1MTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTUuNDQ3OSAxLjg3Mzk0QzE1LjE2MjcgMS44NzM5NCAxNC44Njg2IDEuOTA0NjYgMTQuNTU3IDEuOTYxNzFDMTMuNDg2MiAwLjcxMDk1NSAxMS45NTAyIDAgMTAuMzAwMSAwQzcuMjAxNzEgMCA0LjY4MjY1IDIuNTE5MDYgNC42ODI2NSA1LjYxNzQyQzQuNjgyNjUgNS44NzYzNSA0LjQ3MTk5IDYuMDg3IDQuMjEzMDcgNi4wODdDMy45NTQxNCA2LjA4NyAzLjc0MzQ5IDUuODc2MzUgMy43NDM0OSA1LjYxNzQyQzMuNzQzNDkgNC42MDM2NSAzLjk3NjA4IDMuNjI0OTkgNC40MzY4OSAyLjcwMzM4QzQuNTIwMjcgMi41NDEwMSA0LjQ5ODMzIDIuMzQzNTIgNC4zODQyMiAyLjIwMzA4QzQuMjcwMTIgMi4wNjI2NSA0LjA4MTQxIDEuOTk2ODIgMy45MDU4NiAyLjA0MDdDMS42MDYyMyAyLjYxMTIyIDAgNC42NjA3IDAgNy4wMjE3OEMwIDguOTY1OTMgMS4wOTcxNSAxMC43MzQ1IDIuODIxODggMTEuNjEyM0wyLjgxMzEgMTUuNDQ3OUMyLjgxMzEgMTUuNTcwOCAyLjg2MTM3IDE1LjY4OTMgMi45NDkxNSAxNS43ODE0QzMuMDM2OTIgMTUuODY5MiAzLjE1NTQxIDE1LjkxNzUgMy4yODI2OCAxNS45MTc1SDE3LjMyMThDMTcuNTgwOCAxNS45MTc1IDE3Ljc5MTQgMTUuNzA2OCAxNy43OTE0IDE1LjQ0NzlWMTEuNjAzNUMxOS41MDc0IDEwLjcyNTggMjAuNjAwMSA4Ljk2MTU0IDIwLjYwMDEgNy4wMjE3OEMyMC41OTU4IDQuMTgyMzUgMTguMjg3MyAxLjg3Mzk0IDE1LjQ0NzkgMS44NzM5NFpNNi44NTA2MiAxMy4wMDM1QzYuNzYyODUgMTMuMDczNyA2LjY1NzUyIDEzLjEwODggNi41NTIyIDEzLjEwODhDNi40MTYxNSAxMy4xMDg4IDYuMjg0NDkgMTMuMDUxNyA2LjE4Nzk0IDEyLjkzNzZDNi4wMzQzNCAxMi43NDg5IDQuNjc4MjYgMTEuMDU5MyA0LjY3ODI2IDkuODMwNDlDNC42NzgyNiA5LjU3MTU2IDQuODg4OTEgOS4zNjA5MSA1LjE0Nzg0IDkuMzYwOTFDNS40MDY3NyA5LjM2MDkxIDUuNjE3NDIgOS41NzE1NiA1LjYxNzQyIDkuODMwNDlDNS42MTc0MiAxMC41MDYzIDYuNDExNzYgMTEuNzMwOCA2LjkxNjQ1IDEyLjM0MDhDNy4wNzg4MyAxMi41NDI3IDcuMDUyNSAxMi44MzY3IDYuODUwNjIgMTMuMDAzNVpNMTAuNzY1MyAxMi42MzkyQzEwLjc2NTMgMTIuODk4MSAxMC41NTQ2IDEzLjEwODggMTAuMjk1NyAxMy4xMDg4QzEwLjAzNjggMTMuMTA4OCA5LjgzMDQ5IDEyLjg5ODEgOS44MzA0OSAxMi42MzkyVjkuODMwNDlDOS44MzA0OSA5LjU3MTU2IDEwLjA0MTEgOS4zNjA5MSAxMC4zMDAxIDkuMzYwOTFDMTAuNTU5IDkuMzYwOTEgMTAuNzY5NyA5LjU3MTU2IDEwLjc2OTcgOS44MzA0OUwxMC43NjUzIDEyLjYzOTJaTTE0LjQwNzggMTIuOTM3NkMxNC4zMTU2IDEzLjA1MTcgMTQuMTc5NiAxMy4xMDg4IDE0LjA0MzYgMTMuMTA4OEMxMy45MzgyIDEzLjEwODggMTMuODMyOSAxMy4wNzM3IDEzLjc0NTEgMTMuMDAzNUMxMy41NDMzIDEyLjg0MTEgMTMuNTE2OSAxMi41NDI2IDEzLjY3OTMgMTIuMzQ1MkMxNC4xNzk2IDExLjczMDggMTQuOTc4MyAxMC41MDYzIDE0Ljk3ODMgOS44MzQ4OEMxNC45NzgzIDkuNTc1OTUgMTUuMTg5IDkuMzY1MjkgMTUuNDQ3OSA5LjM2NTI5QzE1LjcwNjggOS4zNjUyOSAxNS45MTc1IDkuNTc1OTUgMTUuOTE3NSA5LjgzNDg4QzE1LjkxNzUgMTEuMDU5MyAxNC41NjE0IDEyLjc0ODkgMTQuNDA3OCAxMi45Mzc2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/components/Hits/Hits.js":
/*!*************************************!*\
  !*** ./src/components/Hits/Hits.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {/* harmony import */ var _MarketSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MarketSection */ "./src/components/MarketSection/index.js");


class Hits extends React.Component {
  componentDidMount() {
    this.props.getHits();
  }

  render() {
    const {
      hits,
      title,
      withScroll
    } = this.props;
    return React.createElement("div", {
      className: "basket"
    }, React.createElement(_MarketSection__WEBPACK_IMPORTED_MODULE_0__["default"], {
      category: {
        id: 0,
        title,
        alias: "hits",
        products: hits
      },
      withScroll: withScroll
    }));
  }

}

Hits.propTypes = {
  hits: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  withScroll: PropTypes.bool,
  getHits: PropTypes.func.isRequired
};
Hits.defaultProps = {
  withScroll: false
};
/* harmony default export */ __webpack_exports__["default"] = (Hits);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/Hits/index.js":
/*!**************************************!*\
  !*** ./src/components/Hits/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Hits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hits */ "./src/components/Hits/Hits.js");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AC */ "./src/AC/index.js");




function mapStateToProps(state) {
  return {
    hits: state.hits
  };
}

const mapDispatchToProps = {
  getHits: _AC__WEBPACK_IMPORTED_MODULE_2__["getHits"],
  reduxAddToCart: _AC__WEBPACK_IMPORTED_MODULE_2__["addToCart"],
  reduxRemoveFromCart: _AC__WEBPACK_IMPORTED_MODULE_2__["removeFromCart"]
};
const ConnectedHits = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_Hits__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedHits);

/***/ }),

/***/ "./src/components/ItemControls/ItemControls.jsx":
/*!******************************************************!*\
  !*** ./src/components/ItemControls/ItemControls.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _icons_AddItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/AddItem */ "./src/components/icons/AddItem.js");
/* harmony import */ var _icons_RemoveItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/RemoveItem */ "./src/components/icons/RemoveItem.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./src/components/Button.js");
/* harmony import */ var _ItemControls_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ItemControls.scss */ "./src/components/ItemControls/ItemControls.scss");
/* harmony import */ var _ItemControls_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ItemControls_scss__WEBPACK_IMPORTED_MODULE_5__);






const scroll = react_scroll__WEBPACK_IMPORTED_MODULE_0___default.a.animateScroll;
const scrollOpt = {
  isDynamic: true,
  spy: true,
  smooth: true,
  duration: 500
};

function ItemControls({
  cart,
  addToCart,
  removeFromCart,
  product,
  withScroll,
  buttonTitle
}) {
  const elemsInCart = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["elsInCart"])(cart, product.id);

  if (elemsInCart === 0) {
    return React.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      buttonType: "default",
      buttonTitle: buttonTitle,
      buttonClass: "buy-item",
      onClickMethod: () => {
        if (withScroll) scroll.scrollToTop(scrollOpt);
        addToCart(product);
      },
      dataObject: product
    });
  }

  return React.createElement("div", {
    className: "item-controls-cart"
  }, React.createElement("div", {
    className: "remove-item-icon",
    onClick: () => removeFromCart(product.id)
  }, React.createElement(_icons_RemoveItem__WEBPACK_IMPORTED_MODULE_3__["default"], null)), elemsInCart, React.createElement("div", {
    className: "add-item-icon",
    onClick: () => addToCart(product)
  }, React.createElement(_icons_AddItem__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

ItemControls.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  cart: PropTypes.instanceOf(Array).isRequired,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  withScroll: PropTypes.bool,
  buttonTitle: PropTypes.string
};
ItemControls.defaultProps = {
  withScroll: false,
  buttonTitle: "В корзину"
};
/* harmony default export */ __webpack_exports__["default"] = (ItemControls);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/ItemControls/ItemControls.scss":
/*!*******************************************************!*\
  !*** ./src/components/ItemControls/ItemControls.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/ItemControls/index.js":
/*!**********************************************!*\
  !*** ./src/components/ItemControls/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ItemControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemControls */ "./src/components/ItemControls/ItemControls.jsx");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AC */ "./src/AC/index.js");




function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const mapDispatchToProps = {
  addToCart: _AC__WEBPACK_IMPORTED_MODULE_2__["addToCart"],
  removeFromCart: _AC__WEBPACK_IMPORTED_MODULE_2__["removeFromCart"]
};
const ConnectedComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_ItemControls__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedComponent);

/***/ }),

/***/ "./src/components/MainContent.js":
/*!***************************************!*\
  !*** ./src/components/MainContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(PropTypes) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");
/* harmony import */ var _Market__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Market */ "./src/components/Market/index.js");
/* harmony import */ var _MarketSlides_MarketSlides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarketSlides/MarketSlides */ "./src/components/MarketSlides/MarketSlides.js");






class MainContent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    window.onscroll = function () {
      const scrolled = window.pageYOffset || document.documentElement.scrollTop;
      const visibleWindow = document.documentElement.clientHeight;
      const windowHeight = document.body.scrollHeight;

      if (windowHeight * 0.75 < scrolled + visibleWindow) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["fbPixel"])("micro");
        window.onscroll = null;
      }
    };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.showMobileAuth !== this.props.showMobileAuth) {
      return true;
    }

    if (nextProps.categories && nextProps.categories !== this.props.categories) {
      return true;
    }

    return false;
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        "hide-element": this.props.showMobileAuth
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketSlides_MarketSlides__WEBPACK_IMPORTED_MODULE_4__["default"], {
      slides: this.props.slides,
      moreCssClass: "desktop-only"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketSlides_MarketSlides__WEBPACK_IMPORTED_MODULE_4__["default"], {
      slides: this.props.mobileSlides,
      moreCssClass: "mobile-only"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Market__WEBPACK_IMPORTED_MODULE_3__["default"], {
      categories: this.props.categories
    }));
  }

}

MainContent.propTypes = {
  showMobileAuth: PropTypes.bool.isRequired,
  slides: PropTypes.instanceOf(Array).isRequired,
  mobileSlides: PropTypes.instanceOf(Array).isRequired,
  categories: PropTypes.instanceOf(Array).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MainContent);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/Market/Market.js":
/*!*****************************************!*\
  !*** ./src/components/Market/Market.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(PropTypes) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _BasketMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasketMobile */ "./src/components/BasketMobile/index.js");
/* harmony import */ var _MarketSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MarketSection */ "./src/components/MarketSection/index.js");
/* harmony import */ var _Hits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Hits */ "./src/components/Hits/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Market extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      categoriesData: []
    });
  }

  componentDidMount() {
    this.processingCategories();
  }

  async processingCategories() {
    const categoriesProcess = [];
    const {
      categories
    } = this.props;

    if (categories) {
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].published === 1) {
          let productsProcess = [];
          await Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getRequest"])(`/products/category?category_id=${categories[i].id}&page=1`).then(res => {
            productsProcess = res.data.result.items.slice();
          });
          categoriesProcess.push({
            id: categories[i].id,
            title: categories[i].title,
            alias: categories[i].alias,
            active: false,
            products: productsProcess
          });
        }
      }

      this.setState({
        categoriesData: categoriesProcess
      });
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BasketMobile__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "market-sections"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hits__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "\u0425\u0438\u0442\u044B"
    }), this.state.categoriesData.map(category => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: category.id,
      category: category
    }))));
  }

}

Market.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Market);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/Market/index.js":
/*!****************************************!*\
  !*** ./src/components/Market/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Market__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Market */ "./src/components/Market/Market.js");

/* harmony default export */ __webpack_exports__["default"] = (_Market__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/MarketItem/MarketItem.js":
/*!*************************************************!*\
  !*** ./src/components/MarketItem/MarketItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(PropTypes) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _ItemControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ItemControls */ "./src/components/ItemControls/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _market_item_circle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./market-item-circle.svg */ "./src/components/MarketItem/market-item-circle.svg");
/* harmony import */ var _market_item_circle_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_market_item_circle_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _market_item_fire_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market-item-fire.svg */ "./src/components/MarketItem/market-item-fire.svg");
/* harmony import */ var _market_item_fire_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_market_item_fire_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _market_item_leaf_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./market-item-leaf.svg */ "./src/components/MarketItem/market-item-leaf.svg");
/* harmony import */ var _market_item_leaf_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_market_item_leaf_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MarketItem_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MarketItem.scss */ "./src/components/MarketItem/MarketItem.scss");
/* harmony import */ var _MarketItem_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_MarketItem_scss__WEBPACK_IMPORTED_MODULE_7__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class MarketItem extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderItemLabel", label => {
      switch (label.icon) {
        case "circle":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            key: label.icon,
            src: _market_item_circle_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
            alt: ""
          });

        case "fire":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            key: label.icon,
            src: _market_item_fire_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
            alt: ""
          });

        case "leaf":
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            key: label.icon,
            src: _market_item_leaf_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
            alt: ""
          });

        default:
          return "";
      }
    });
  }

  render() {
    const {
      withScroll,
      product
    } = this.props;
    const {
      id,
      alias,
      title,
      description,
      image,
      labels,
      price,
      measure
    } = product;
    let itemLabelText = "";
    let itemLabelIcons = "";

    if (labels && labels.length) {
      itemLabelText = labels.map(label => label.title).join(", ");
      itemLabelIcons = labels.map(label => this.renderItemLabel(label));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: `product${id}`,
      className: "item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: alias,
      className: "item__content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-img-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "item-img-container__img",
      src: image,
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-title__title"
    }, title, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-title__icon",
      title: itemLabelText
    }, itemLabelIcons))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-desc"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item-desc__description text-description"
    }, description))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item__footer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item__footer-weight"
    }, measure.value, " ", measure.unit), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemControls__WEBPACK_IMPORTED_MODULE_2__["default"], {
      withScroll: withScroll,
      product: product
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "price-container"
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(price))));
  }

}

MarketItem.propTypes = {
  product: PropTypes.shape({
    alias: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    labels: PropTypes.instanceOf(Object).isRequired,
    measure: PropTypes.instanceOf(Object).isRequired,
    specifications: PropTypes.instanceOf(Object).isRequired
  }).isRequired,
  withScroll: PropTypes.bool
};
MarketItem.defaultProps = {
  withScroll: false
};
/* harmony default export */ __webpack_exports__["default"] = (MarketItem);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/MarketItem/MarketItem.scss":
/*!***************************************************!*\
  !*** ./src/components/MarketItem/MarketItem.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/MarketItem/index.js":
/*!********************************************!*\
  !*** ./src/components/MarketItem/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MarketItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarketItem */ "./src/components/MarketItem/MarketItem.js");

/* harmony default export */ __webpack_exports__["default"] = (_MarketItem__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/MarketItem/market-item-circle.svg":
/*!**********************************************************!*\
  !*** ./src/components/MarketItem/market-item-circle.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYuMzgiIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNOCAwLjVDMy42NTcxNCAwLjUgMCA0LjE1NzE0IDAgOC41QzAgMTIuODQyOSAzLjY1NzE0IDE2LjUgOCAxNi41QzEyLjM0MjkgMTYuNSAxNiAxMi44NDI5IDE2IDguNUMxNiA0LjE1NzE0IDEyLjM0MjkgMC41IDggMC41Wk04IDE1LjEyODZDNC4zNDI4NiAxNS4xMjg2IDEuMzcxNDMgMTIuMTU3MSAxLjM3MTQzIDguNUMxLjM3MTQzIDQuODQyODYgNC4zNDI4NiAxLjg3MTQzIDggMS44NzE0M0MxMS42NTcxIDEuODcxNDMgMTQuNjI4NiA0Ljg0Mjg2IDE0LjYyODYgOC41QzE0LjYyODYgMTIuMTU3MSAxMS42NTcxIDE1LjEyODYgOCAxNS4xMjg2WiIgZmlsbD0iIzhERDE2MSIgLz4NCjwvc3ZnPg=="

/***/ }),

/***/ "./src/components/MarketItem/market-item-fire.svg":
/*!********************************************************!*\
  !*** ./src/components/MarketItem/market-item-fire.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYuMzgiIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMTAuMjg5NyAxNi43ODM4QzEwLjA2MTMgMTYuNzgzOCA5LjgzMjkyIDE2Ljc4MzggOS44MzI5MiAxNi41NTU1QzkuODMyOTIgMTYuMzI3MyA5LjgzMjkyIDE2LjA5OSA5LjgzMjkyIDE1Ljg3MDdDMTAuNTE4MiAxNS4xODYgMTAuNzQ2NiAxNC4yNzI5IDEwLjUxODIgMTMuMzU5OUMxMC41MTgyIDEyLjY3NTEgMTAuMDYxMyAxMS43NjIxIDkuMzc2MSAxMS4wNzczTDguMDA1NjQgOS43MDc3N0w2LjYzNTE4IDExLjA3NzNDNS45NDk5NSAxMS43NjIxIDUuNDkzMTMgMTIuNjc1MSA1LjI2NDcyIDEzLjM1OTlDNS4wMzYzMSAxNC4yNzI5IDUuMjY0NzIgMTUuMTg2IDUuOTQ5OTUgMTUuODcwN0M2LjE3ODM2IDE2LjA5OSA2LjE3ODM2IDE2LjMyNzMgNS45NDk5NSAxNi41NTU1QzUuOTQ5OTUgMTYuNzgzOCA1LjQ5MzEzIDE2Ljc4MzggNS4yNjQ3MiAxNi43ODM4QzEuODM4NTYgMTUuMTg2IDAuMDExMjc5NSAxMi45MDM0IDAuMDExMjc5NSAxMC4xNjQzQzAuMDExMjc5NSA5LjkzNjAzIC0wLjIxNzEzMSA3Ljg4MTcxIDEuMzgxNzQgNi4wNTU2NEMyLjc1MjIgNC40NTc4MyA1LjAzNjMxIDIuNDAzNTEgNS4wMzYzMSAyLjQwMzUxQzUuMjY0NzIgMi4xNzUyNSA1LjcyMTU0IDIuMTc1MjUgNS45NDk5NSAyLjQwMzUxTDguNDYyNDYgNC45MTQzNUM4LjY5MDg3IDUuMTQyNjEgOC42OTA4NyA1LjU5OTEyIDguNDYyNDYgNS44MjczOEM4LjIzNDA1IDYuMDU1NjQgNy43NzcyMyA2LjA1NTY0IDcuNTQ4ODIgNS44MjczOEw1LjQ5MzEzIDMuNTQ0OEM0LjgwNzkgNC4yMjk1NyAzLjIwOTAyIDUuODI3MzggMi4yOTUzOCA2Ljc0MDQxQzEuMTUzMzMgOC4zMzgyMiAxLjE1MzMzIDkuOTM2MDMgMS4xNTMzMyA5LjkzNjAzQzEuMTUzMzMgMTEuOTkwNCAyLjUyMzc5IDEzLjU4ODIgMy44OTQyNSAxNC41MDEyQzMuNjY1ODQgMTQuMDQ0NyAzLjY2NTg0IDEzLjM1OTkgMy44OTQyNSAxMi45MDM0QzQuMTIyNjYgMTEuOTkwNCA0LjU3OTQ5IDExLjA3NzMgNS40OTMxMyAxMC4xNjQzTDcuMzIwNDEgOC4zMzgyMkM3LjU0ODgyIDguMTA5OTYgNy41NDg4MiA4LjEwOTk2IDcuNzc3MjMgOC4xMDk5NkM4LjAwNTY0IDguMTA5OTYgOC4wMDU2NCA4LjEwOTk2IDguMjM0MDUgOC4zMzgyMkwxMC4wNjEzIDEwLjE2NDNDMTAuOTc1IDExLjA3NzMgMTEuNDMxOCAxMS45OTA0IDExLjY2MDIgMTIuOTAzNEMxMS42NjAyIDEzLjU4ODIgMTEuNjYwMiAxNC4wNDQ3IDExLjY2MDIgMTQuNTAxMkMxMy4yNTkxIDEzLjU4ODIgMTQuNDAxMSAxMS45OTA0IDE0LjQwMTEgOS45MzYwM0MxNC40MDExIDkuOTM2MDMgMTQuNjI5NSA4LjMzODIyIDEzLjI1OTEgNi43NDA0MUMxMi4zNDU0IDUuMzcwODYgOC4yMzQwNSAxLjQ5MDQ4IDguMjM0MDUgMS40OTA0OEM4LjAwNTY0IDEuMjYyMjIgOC4wMDU2NCAwLjgwNTcwMiA4LjIzNDA1IDAuNTc3NDQ0QzguNDYyNDYgMC4zNDkxODUgOC42OTA4NyAwLjM0OTE4NSA4LjkxOTI4IDAuNTc3NDQ0QzkuMTQ3NjkgMC41Nzc0NDQgMTMuMjU5MSA0LjQ1NzgzIDE0LjYyOTUgNi4wNTU2NEMxNiA3Ljg4MTcxIDE2IDkuNzA3NzcgMTYgMTAuMTY0M0MxNiAxMi45MDM0IDE0LjE3MjcgMTUuMTg2IDEwLjc0NjYgMTYuNzgzOEMxMC41MTgyIDE2Ljc4MzggMTAuNTE4MiAxNi43ODM4IDEwLjI4OTcgMTYuNzgzOFoiIGZpbGw9IiNGODgxOUMiIC8+DQo8L3N2Zz4="

/***/ }),

/***/ "./src/components/MarketItem/market-item-leaf.svg":
/*!********************************************************!*\
  !*** ./src/components/MarketItem/market-item-leaf.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYuMzgiIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNMTMuNjYyOSAxMy4zNDg1QzE0Ljg2MTQgMTEuODkzOSAxNS41ODA1IDEwLjE5NyAxNS41ODA1IDguMjU3NThDMTUuNTgwNSAzLjg5Mzk0IDEyLjIyNDcgMC41IDcuOTEwMTIgMC41SDAuNzE5MTA5QzAuNDc5NDA4IDAuNSAwIDAuNzQyNDI0IDAgMS4yMjcyN1Y4LjVDMCAxMi4zNzg4IDMuMzU1OCAxNi4wMTUyIDcuNjcwNDEgMTYuMDE1MkM5LjU4ODAxIDE2LjAxNTIgMTEuMjY1OSAxNS4yODc5IDEyLjcwNDEgMTQuMDc1OEwxNC44NjE0IDE2LjI1NzZDMTUuMTAxMSAxNi41IDE1LjEwMTEgMTYuNSAxNS4zNDA4IDE2LjVDMTUuNTgwNSAxNi41IDE1LjU4MDUgMTYuNSAxNS44MjAyIDE2LjI1NzZDMTYuMDU5OSAxNi4wMTUyIDE2LjA1OTkgMTUuNTMwMyAxNS44MjAyIDE1LjI4NzlMMTMuNjYyOSAxMy4zNDg1Wk03LjY3MDQxIDE0LjgwM0M0LjA3NDkgMTQuODAzIDEuMTk4NSAxMS44OTM5IDEuMTk4NSA4LjI1NzU4VjEuNzEyMTJINy42NzA0MUMxMS4yNjU5IDEuNzEyMTIgMTQuMTQyMyA0LjYyMTIxIDE0LjE0MjMgOC4yNTc1OEMxNC4xNDIzIDkuNzEyMTIgMTMuNjYyOSAxMS4xNjY3IDEyLjcwNDEgMTIuMzc4OEw1LjUxMzEyIDUuMTA2MDZDNS4yNzM0MiA0Ljg2MzY0IDQuNzk0MDEgNC44NjM2NCA0LjU1NDMxIDUuMTA2MDZDNC4zMTQ2MSA1LjM0ODQ4IDQuMzE0NjEgNS44MzMzMyA0LjU1NDMxIDYuMDc1NzZMMTEuNzQ1MyAxMy4zNDg1QzEwLjU0NjggMTQuMDc1OCA5LjEwODYxIDE0LjgwMyA3LjY3MDQxIDE0LjgwM1oiIGZpbGw9IiM4REQxNjEiIC8+DQo8L3N2Zz4="

/***/ }),

/***/ "./src/components/MarketSection/MarketSection.js":
/*!*******************************************************!*\
  !*** ./src/components/MarketSection/MarketSection.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(PropTypes) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MarketItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MarketItem */ "./src/components/MarketItem/index.js");




function MarketSection({
  category,
  withScroll
}) {
  const items = category.products.map(product => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: product.id,
    product: product,
    categoryID: category.id,
    withScroll: withScroll
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "market-section",
    id: category.alias,
    name: category.alias
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "market-section__title-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "market-section__title"
  }, category.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "market-section__title help-element"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      "swipe-container": category.id === 0
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("market-section__items", {
      "scroll-container": category.id === 0
    })
  }, items)));
}

MarketSection.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    alias: PropTypes.string.isRequired,
    products: PropTypes.instanceOf(Object).isRequired
  }).isRequired,
  withScroll: PropTypes.bool
};
MarketSection.defaultProps = {
  withScroll: false
};
/* harmony default export */ __webpack_exports__["default"] = (MarketSection);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/MarketSection/index.js":
/*!***********************************************!*\
  !*** ./src/components/MarketSection/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MarketSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarketSection */ "./src/components/MarketSection/MarketSection.js");

/* harmony default export */ __webpack_exports__["default"] = (_MarketSection__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/components/MarketSlides/MarketSlides.js":
/*!*****************************************************!*\
  !*** ./src/components/MarketSlides/MarketSlides.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-id-swiper */ "./node_modules/react-id-swiper/lib/index.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MarketSlides_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarketSlides.scss */ "./src/components/MarketSlides/MarketSlides.scss");
/* harmony import */ var _MarketSlides_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MarketSlides_scss__WEBPACK_IMPORTED_MODULE_1__);



class MarketSlides extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.slides !== this.props.slides) {
      return true;
    }

    return false;
  }

  render() {
    const {
      slides,
      activeSlideIndex,
      moreCssClass
    } = this.props;
    const items = slides.map(item => React.createElement("img", {
      key: item.image,
      src: item.image,
      alt: ""
    }));
    const params = {
      slidesPerView: 1,
      spaceBetween: 0,
      activeSlideKey: activeSlideIndex,
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };
    return React.createElement("div", {
      className: `slide-container ${moreCssClass}`
    }, React.createElement(react_id_swiper__WEBPACK_IMPORTED_MODULE_0___default.a, params, items));
  }

}

MarketSlides.propTypes = {
  moreCssClass: PropTypes.string,
  activeSlideIndex: PropTypes.number,
  slides: PropTypes.instanceOf(Array)
};
MarketSlides.defaultProps = {
  moreCssClass: "",
  activeSlideIndex: null,
  slides: []
};
/* harmony default export */ __webpack_exports__["default"] = (MarketSlides);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/MarketSlides/MarketSlides.scss":
/*!*******************************************************!*\
  !*** ./src/components/MarketSlides/MarketSlides.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-hash-link */ "./node_modules/react-router-hash-link/lib/index.js");
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_hash_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const scrollOpt = {
  isDynamic: true,
  offset: -80,
  spy: true,
  smooth: true,
  duration: 500
};

class Menu extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderMenuItem", (item, i) => React.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_1__["NavHashLink"], {
      key: i,
      to: `/#${item.alias}` // smooth
      ,
      activeClassName: "menu__item_active",
      className: `menu__item ${item.cssClass}` // scroll={el => el.scrollIntoView({ behavior: "smooth", block: "start", })}
      ,
      scroll: el => {
        const elName = el.getAttribute("name");
        react_scroll__WEBPACK_IMPORTED_MODULE_0__["scroller"].scrollTo(elName, scrollOpt);
      }
    }, item.title) // <Link
    //     key={i}
    //     onClick={() => {
    //         if (item.onClick) {
    //             item.onClick();
    //         } else {
    //             this.props.menuItemClick(item.alias);
    //             // scroller.scrollTo(`section-${item.alias}`);
    //         }
    //     }}
    //     activeClass="menu__item_active"
    //     className={"menu__item" + (item.cssClass ? (" " + item.cssClass) : "")}
    //     to={`section-${item.alias}`}
    //     isDynamic
    //     offset={-80}
    //     spy
    //     smooth
    //     duration={500}
    // >
    //     {item.title}
    // </Link>
    // <a
    //     // href={`/#section-${item.alias}`}
    //     href="/"
    //     key={i}
    //     className={"menu__item" + (item.cssClass ? (" " + item.cssClass) : "")}
    // >{item.title}
    // </a>
    );

    _defineProperty(this, "renderLink", item => React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      key: item.link,
      to: item.link,
      className: "menu__item"
    }, item.title));
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.menuItems.length !== this.props.menuItems.length) {
      return true;
    }

    return false;
  }

  render() {
    const {
      menuItems
    } = this.props;
    if (!menuItems.length) return null;
    return React.createElement("nav", {
      className: "menu"
    }, menuItems.map((item, i) => item.link ? this.renderLink(item, i) : this.renderMenuItem(item, i, menuItems[i].active)));
  }

}

Menu.propTypes = {
  menuItems: PropTypes.instanceOf(Array)
};
Menu.defaultProps = {
  menuItems: []
};
/* harmony default export */ __webpack_exports__["default"] = (Menu);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/Modals/AuthModal.js":
/*!********************************************!*\
  !*** ./src/components/Modals/AuthModal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(PropTypes) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/scss/main.scss */ "./src/assets/scss/main.scss");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./src/components/Button.js");
/* harmony import */ var _icons_ModalHide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/ModalHide */ "./src/components/icons/ModalHide.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _Pages_ValidationResult__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Pages/ValidationResult */ "./src/components/Pages/ValidationResult.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class AuthModal extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "updateCode", e => {
      this.setState({
        code: e.target.value
      });
    });

    this.state = {
      phoneNumber: this.props.phoneNumber,
      authStep: 1,
      timeout: 59,
      code: "",
      profile: {},
      modalText: this.props.modalText,
      modalDescription: this.props.modalDescription,
      modalError: ""
    };
  }

  componentDidMount() {
    this.showAuthStep(1);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.showAuthStep(1);
      return true;
    }

    if (nextProps.phoneNumber && nextProps.phoneNumber !== this.props.phoneNumber) {
      this.setState({
        phoneNumber: nextProps.phoneNumber
      });
      return true;
    }

    if (nextProps.modalText !== this.state.modalText) {
      this.setState({
        modalText: nextProps.modalText
      });
      return true;
    }

    if (nextState.phoneNumber !== this.state.phoneNumber) {
      // ISSUE: blocks editting of phoneNumber
      this.setState({
        phoneNumber: nextState.phoneNumber
      });
      return true;
    }

    if (nextState.modalText !== this.state.modalText) {
      this.setState({
        modalText: nextState.modalText,
        ...nextState
      });
      return true;
    }

    if (nextState.modalDescription !== this.state.modalDescription) {
      this.setState({
        modalDescription: nextState.modalDescription,
        ...nextState
      });
      return true;
    }

    if (nextState.modalError !== this.state.modalError) {
      this.setState({
        modalError: nextState.modalError,
        ...nextState
      });
      return true;
    }

    if (nextState.authStep !== this.state.authStep) {
      this.setState({
        authStep: nextState.authStep,
        ...nextState
      });
      return true;
    }

    if (nextState.code !== this.state.code) {
      return true;
    }

    if (nextState.timeout !== this.state.timeout) {
      this.setState({
        timeout: nextState.timeout,
        ...nextState
      });
      return true;
    }

    if (nextState.profile.phone !== this.state.profile.phone) {
      this.setState({
        profile: nextState.profile
      });
      return true;
    }

    return false;
  }

  confirmAuthCode(code) {
    const self = this;
    Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["postRequest"])(this.props.confirmAuthCodeApi, {
      phone: this.state.phoneNumber,
      code
    }).then(res => {
      if (res && res.data && res.data.success === true) {
        if (typeof this.props.onSuccess === "function") {
          this.props.onSuccess(res.data);
        }

        self.props.onClose();
        Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["fbPixel"])("macro");
      } else {
        self.showAuthError(res.data);
      }
    });
  }

  requestAuthCode(phoneNumber) {
    const self = this;

    if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phoneNumber)) {
      this.setState({
        modalError: "Неверный номер телефона"
      });
      document.getElementById("phone-number-input").focus();
      return;
    }

    this.setState({
      phoneNumber,
      modalError: ""
    });
    Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["postRequest"])(this.props.requestAuthCodeApi, {
      phone: this.state.phoneNumber
    }).then(res => {
      if (res && res.data && res.data.success === true) {
        self.showAuthStep(2);
      } else {
        self.showAuthError(res.data);
      }
    });
  }

  updatePhone(value) {
    this.setState({
      phoneNumber: value
    });
  }

  showAuthStep(value, props = {}) {
    if (this.timer) {
      clearInterval(this.timer);
    }

    if (value === 2 && this.state.phoneNumber) {
      this.setState({
        authStep: 2,
        modalText: `Мы отправили СМС с кодом на номер ${this.state.phoneNumber}`,
        modalDescription: `Получить код ещё раз можно будет через ${this.state.timeout} секунд`,
        modalError: "",
        timeout: 59
      }, () => {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["focusInputById"])("sms-code-input");
        this.timer = setInterval(() => {
          const timeout = this.state.timeout - 1;
          this.setState({
            timeout,
            modalDescription: `Получить код ещё раз можно будет через ${timeout} секунд`
          });

          if (timeout === 0) {
            this.setState({
              modalDescription: this.renderModalDescription()
            });
          }
        }, 1000);
      });
    } else {
      this.setState({
        authStep: 1,
        phoneNumber: "",
        modalText: this.props.modalText,
        modalDescription: this.props.modalDescription,
        modalError: "",
        ...props
      }, () => {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["focusInputById"])("phone-number-input");
      });
    }
  }

  formSubmit(event) {
    let formData = "";
    event.preventDefault();
    formData = new FormData(event.target);
    event.target.reset();

    switch (this.state.authStep) {
      case 1:
        this.requestAuthCode(formData.get("phoneNumber"));
        break;

      case 2:
        this.confirmAuthCode(formData.get("smsCode"));
        break;

      default:
        break;
    }
  }

  showAuthError(response) {
    let errorMessage = "";

    if (response.errors && response.errors.length) {
      response.errors.map(item => {
        errorMessage += item.message;
      });
    } else if (response.message) {
      errorMessage = response.message;
    }

    if (errorMessage === "") {
      errorMessage = "В настоящее время сервис недоступен. Попробуйте обновить страницу и отправить запрос заново.";
    }

    this.setState({
      modalError: errorMessage
    });
  }

  renderModalText() {
    if (this.state.authStep === 1) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-title__label"
      }, this.state.modalText);
    }

    if (this.state.authStep === 2 && !this.state.modalError) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-title__label"
      }, "\u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0421\u041C\u0421 \u0441 \u043A\u043E\u0434\u043E\u043C \u043D\u0430 \u043D\u043E\u043C\u0435\u0440 ", this.state.phoneNumber, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-link",
        onClick: () => {
          this.showAuthStep(1);
        }
      }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-title__label"
    }, this.state.modalError || this.state.modalText);
  }

  renderModalDescription() {
    if (this.state.authStep === 1 || this.state.timeout > 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "modal-description"
      }, this.state.modalDescription);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "modal-description"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-link",
      onClick: () => {
        this.requestAuthCode(this.state.phoneNumber);
      }
    }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0432\u0442\u043E\u0440\u043D\u043E"));
  }

  renderModalValidationResult() {
    return this.state.authStep === 1 && this.state.modalError ? this.state.modalError : "";
  }

  renderForm() {
    const modalText = this.renderModalText();
    const modalDescription = this.renderModalDescription();

    if (this.state.authStep === 1) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-form-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-hide",
        onClick: this.props.onClose
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_ModalHide__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "modal-title"
      }, this.props.modalTitle), modalText, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "auth-form-modal",
        onSubmit: event => {
          this.formSubmit(event);
          Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["fbPixel"])("macro");
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-top-level"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-bottom-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-input"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: "phone-number-input",
        className: "modal-input__input",
        name: "phoneNumber",
        mask: "+7 (999) 999-99-99",
        value: this.state.phoneNumber,
        onChange: e => {
          this.updatePhone(e.target.value);
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_ValidationResult__WEBPACK_IMPORTED_MODULE_7__["default"], {
        error: this.state.authStep === 1 && this.state.modalError ? this.state.modalError : ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        buttonType: "default",
        buttonTitle: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
        buttonClass: "modal-button",
        onClickSubmit: true
      })), modalDescription));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-form-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-hide",
      onClick: this.props.onClose
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_ModalHide__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "modal-title"
    }, this.props.modalTitle), modalText, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "auth-form-modal",
      onSubmit: event => {
        this.formSubmit(event);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-top-level"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-bottom-level"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "modal-input"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "sms-code-input",
      className: "modal-input__input modal-input__input--sms-code",
      name: "smsCode",
      autoComplete: "off",
      mask: "9999",
      value: this.state.code,
      onChange: this.updateCode
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      buttonType: "default",
      buttonTitle: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      buttonClass: "modal-button",
      onClickSubmit: true
    })), modalDescription));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
      isOpen: this.props.isOpen,
      onRequestClose: this.props.onClose,
      contentLabel: "Example Modal",
      className: "auth-modal-container",
      overlayClassName: "auth-modal-container__overlay",
      appElement: document.getElementById("app")
    }, this.renderForm());
  }

}

AuthModal.propTypes = {
  phoneNumber: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  modalTitle: PropTypes.string.isRequired,
  modalText: PropTypes.string.isRequired,
  modalDescription: PropTypes.string.isRequired,
  requestAuthCodeApi: PropTypes.string.isRequired,
  confirmAuthCodeApi: PropTypes.string.isRequired
};
AuthModal.defaultProps = {
  phoneNumber: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (AuthModal);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/Pages/About/About.js":
/*!*********************************************!*\
  !*** ./src/components/Pages/About/About.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AboutItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutItem */ "./src/components/Pages/About/AboutItem.js");
/* harmony import */ var _SLiderItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SLiderItem */ "./src/components/Pages/About/SLiderItem.js");
/* harmony import */ var _HOC_withFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../HOC/withFetch */ "./src/HOC/withFetch.jsx");
/* harmony import */ var _About_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./About.scss */ "./src/components/Pages/About/About.scss");
/* harmony import */ var _About_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_About_scss__WEBPACK_IMPORTED_MODULE_6__);








function About({
  showMobileAuth,
  data
}) {
  const items = data.result.filter(item => item.img);
  const slides = data.result.filter(item => !item.img);
  const renderSlider = slides.map(slide => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SLiderItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: slide.id,
    text: slide.text
  }));
  const renderItems = items.map((item, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AboutItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: item.id,
    title: item.title,
    text: item.text,
    img: item.img,
    reverse: (i + 1) % 2 === 0
  }));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("page container", {
      "hide-element": showMobileAuth
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about__list-container"
  }, renderItems, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-container"
  }, renderSlider))));
}

About.propTypes = {
  showMobileAuth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    result: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withFetch__WEBPACK_IMPORTED_MODULE_5__["default"])("/pages/about", About));

/***/ }),

/***/ "./src/components/Pages/About/About.scss":
/*!***********************************************!*\
  !*** ./src/components/Pages/About/About.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/About/AboutItem.js":
/*!*************************************************!*\
  !*** ./src/components/Pages/About/AboutItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AboutItem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutItem.scss */ "./src/components/Pages/About/AboutItem.scss");
/* harmony import */ var _AboutItem_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AboutItem_scss__WEBPACK_IMPORTED_MODULE_2__);




function AboutItem({
  title,
  text,
  img,
  reverse
}) {
  const newText = text.replace(/<<(.*?)>>/g, "<span class='about-item__text_red'>$1</span>");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `about-item ${reverse && "row-reverse"}`
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: img,
    className: "about-item__img",
    alt: "\u0424\u043E\u0442\u043E \u0441\u0435\u043A\u0446\u0438\u0438"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-item__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "about-item__title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: title
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "about-item__text",
    dangerouslySetInnerHTML: {
      __html: newText
    }
  })));
}

AboutItem.propTypes = {
  img: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
AboutItem.defaultProps = {
  reverse: false
};
/* harmony default export */ __webpack_exports__["default"] = (AboutItem);

/***/ }),

/***/ "./src/components/Pages/About/AboutItem.scss":
/*!***************************************************!*\
  !*** ./src/components/Pages/About/AboutItem.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/About/SLiderItem.js":
/*!**************************************************!*\
  !*** ./src/components/Pages/About/SLiderItem.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SliderItem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderItem.scss */ "./src/components/Pages/About/SliderItem.scss");
/* harmony import */ var _SliderItem_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SliderItem_scss__WEBPACK_IMPORTED_MODULE_2__);




function SliderItem({
  text
}) {
  const newText = text.replace(/<<(.*?)>>/g, "<span class='slider-item__text_red'>$1</span>");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slider-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "slider-item__text",
    dangerouslySetInnerHTML: {
      __html: newText
    }
  }));
}

SliderItem.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SliderItem);

/***/ }),

/***/ "./src/components/Pages/About/SliderItem.scss":
/*!****************************************************!*\
  !*** ./src/components/Pages/About/SliderItem.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/Addresses.js":
/*!*******************************************!*\
  !*** ./src/components/Pages/Addresses.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dadata_suggestions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dadata-suggestions */ "./node_modules/react-dadata-suggestions/dist/index.js");
/* harmony import */ var react_dadata_suggestions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dadata_suggestions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Button */ "./src/components/Button.js");
/* harmony import */ var _icons_EditItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/EditItem */ "./src/components/icons/EditItem.js");
/* harmony import */ var _ValidationResult__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValidationResult */ "./src/components/Pages/ValidationResult.js");










class Addresses extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: this.props.addresses ? JSON.parse(JSON.stringify(this.props.addresses)) : [],
      addNewAddress: this.props.addresses && !this.props.addresses.length,
      // Если нет ни одного адреса сразу показываем форму
      newAddress: {},
      editedAddresses: {},
      errors: {}
    };
  }

  onEditToggle(i, value) {
    const addresses = JSON.parse(JSON.stringify(this.state.addresses));
    const id = addresses[i].id;
    const editedAddresses = Object.assign({}, this.state.editedAddresses);

    if (!editedAddresses[id]) {
      editedAddresses[id] = Object.assign({}, addresses[i]);
    }

    this.setState({
      editedAddresses
    }, () => {
      addresses[i].edit = value;
      this.setState({
        addresses
      });
    });
  }

  onAddToggle(value) {
    this.setState({
      addNewAddress: value
    });
  }

  checkHouse(adress, index) {
    if (!adress.house) {
      this.setState({
        errors: { ...this.state.errors,
          [index]: "Необходимо указать улицу и номер дома"
        }
      });
      return false;
    }

    return true;
  }

  onSave(index) {
    if (!this.checkHouse(this.state.addresses[index], index)) return;
    const self = this;
    const id = this.state.addresses[index].id;
    Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["postRequest"])("/addresses/update?id=" + id, this.state.editedAddresses[id]).then(res => {
      const errors = Object.assign({}, self.state.errors);
      const addresses = self.state.addresses.slice();
      let position = -1;
      addresses.map((item, i) => {
        if (item.id === id) {
          position = i;
        }
      });

      if (res.data.success) {
        const editedAddresses = Object.assign({}, self.state.editedAddresses);
        delete editedAddresses[id];
        errors[index] = "";
        addresses[position] = res.data.result;
        self.setState({
          addresses,
          editedAddresses
        });
        self.props.setAddresses(addresses);
      } else if (res.data.errors) {
        errors[index] = res.data.errors.map(it => it.message).join(" ");
        self.setState({
          errors
        });
      }
    });
  }

  onSaveNew() {
    const self = this;
    if (!this.checkHouse(this.state.newAddress, "new")) return;
    Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["postRequest"])("/addresses/add", this.state.newAddress).then(res => {
      const errors = Object.assign({}, self.state.errors);

      if (res.data.success) {
        errors.new = "";
        const addresses = self.state.addresses.slice();
        addresses.push(res.data.result);
        self.setState({
          addresses,
          addNewAddress: false,
          newAddress: {},
          errors
        });
        if (addresses.length === 1) this.setAddress(addresses[0]);
      } else if (res.data.errors) {
        errors.new = res.data.errors.map(it => it.message).join(" ");
        self.setState({
          errors
        });
      }
    });
  }

  onSetField(event, field, i) {
    return i === undefined ? this.onChangeNewField(event, field) : this.onChangeField(event, field, i);
  }

  onSaveAddress(i) {
    return i === undefined ? this.onSaveNew() : this.onSave(i);
  }

  onCancelEdit(i) {
    const errors = Object.assign({}, this.state.errors);
    errors[i === undefined ? "new" : i] = "";
    this.setState({
      errors
    });
    return i === undefined ? this.onAddToggle(false) : this.onEditToggle(i, false);
  }

  onChangeField(event, field, i) {
    const addresses = this.state.addresses.slice();
    const address = addresses.length ? Object.assign({}, addresses[i]) : {};
    const id = address.id;
    const editedAddresses = Object.assign({}, this.state.editedAddresses);
    editedAddresses[id][field] = event.currentTarget.value;
    this.setState({
      editedAddresses
    });
  }

  onChangeNewField(event, field) {
    const address = Object.assign({}, this.state.newAddress);
    address[field] = event.currentTarget.value;
    this.setState({
      newAddress: address
    });
  }

  setAddressValue(value, lat, lon, street, street_type_full, house, i) {
    return i === undefined ? this.setNewAddressValue(value, lat, lon, street, street_type_full, house) : this.changeAddressValue(value, lat, lon, street, street_type_full, house, i);
  }

  setNewAddressValue(value, lat, lon, street, street_type_full, house) {
    const address = Object.assign({}, this.state.newAddress);
    address.address = value;
    address.geo_lat = lat;
    address.geo_lon = lon;
    address.street = street;
    address.street_type_full = street_type_full;
    address.house = house;
    this.setState({
      newAddress: address
    });
  }

  changeAddressValue(value, lat, lon, street, street_type_full, house, i) {
    const addresses = this.state.addresses.slice();
    const address = addresses.length ? Object.assign({}, addresses[i]) : {};
    const id = address.id;
    const editedAddresses = Object.assign({}, this.state.editedAddresses);
    editedAddresses[id].address = value;
    editedAddresses[id].geo_lat = lat;
    editedAddresses[id].geo_lon = lon;
    editedAddresses[id].street = street;
    editedAddresses[id].street_type_full = street_type_full;
    editedAddresses[id].house = house;
    this.setState({
      editedAddresses
    });
  }

  sendCoordinatesRequest(unrestricted_value, value, street, street_type_full, house, i) {
    let lat = null;
    let lon = null;
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
      query: unrestricted_value,
      count: 1,
      restrict_value: true,
      locations: {
        kladr_id: "7800000000000"
      }
    }, {
      headers: {
        Authorization: "Token " + this.props.dadataToken
      }
    }).then(res => {
      if (res.data.suggestions && res.data.suggestions[0].data !== undefined) {
        if (res.data.suggestions[0].data.geo_lat !== null && res.data.suggestions[0].data.geo_lon !== null) {
          lat = res.data.suggestions[0].data.geo_lat;
          lon = res.data.suggestions[0].data.geo_lon;
        }
      }

      this.setAddressValue(value, lat, lon, street, street_type_full, house, i);
    });
  }

  renderEdit(i) {
    let address = {};
    let editAddressTitle;

    if (i !== undefined && this.state.editedAddresses[this.state.addresses[i].id]) {
      address = this.state.editedAddresses[this.state.addresses[i].id];
      editAddressTitle = "Редактирование адреса";
    } else {
      address = this.state.newAddress;
      editAddressTitle = "Новый адрес";
    }

    const dadataRequestOptions = {
      locations: {
        kladr_id: "7800000000000"
      },
      locations_boost: [{
        kladr_id: "7800000000000"
      }],
      restrict_value: true
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "edit-address-title"
    }, editAddressTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "adress-inputs-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "address-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label address-title"
    }, "\u0410\u0434\u0440\u0435\u0441"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dadata_suggestions__WEBPACK_IMPORTED_MODULE_3___default.a, {
      name: "address",
      autoComplete: "off",
      placeholder: "\u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043B\u0438\u0446\u0443, \u0434\u043E\u043C",
      query: address.address,
      token: this.props.dadataToken,
      geolocation: false,
      specialRequestOptions: dadataRequestOptions,
      onSelect: suggestion => {
        let value = "";
        let lat = null;
        let lon = null;
        let street = null;
        let street_type_full = null;
        let house = null;

        if (suggestion.data.street !== undefined && suggestion.data.street !== null) {
          value = suggestion.data.street_type_full + " " + suggestion.data.street;
          street = suggestion.data.street;
          street_type_full = suggestion.data.street_type_full;

          if (suggestion.data.house !== undefined && suggestion.data.house !== null) {
            value = value + ", " + suggestion.data.house_type + " " + suggestion.data.house;
            house = suggestion.data.house_type + " " + suggestion.data.house;
          }

          if (suggestion.data.block !== undefined && suggestion.data.block !== null) {
            value = value + ", " + suggestion.data.block_type + " " + suggestion.data.block;
            house = house + ", " + suggestion.data.block_type + " " + suggestion.data.block;
          }
        }

        if (suggestion.data.geo_lat !== undefined && suggestion.data.geo_lon !== undefined) {
          lat = suggestion.data.geo_lat;
          lon = suggestion.data.geo_lon;
        }

        address.address = value;

        if ((lat === null || lon === null) && suggestion.unrestricted_value !== undefined) {
          this.sendCoordinatesRequest(suggestion.unrestricted_value, value, street, street_type_full, house, i);
        } else {
          this.setAddressValue(value, lat, lon, street, street_type_full, house, i);
        }

        this.setState({
          query: value
        });
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "address-container address-container-half"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label address-title"
    }, "\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u0430/\u041E\u0444\u0438\u0441"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "personal-input",
      name: "flat",
      autoComplete: "off",
      value: address.flat,
      onChange: event => {
        this.onSetField(event, "flat", i);
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "address-container address-container-half"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label address-title"
    }, "\u041F\u0430\u0440\u0430\u0434\u043D\u0430\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "personal-input",
      name: "entrance",
      autoComplete: "off",
      value: address.entrance,
      onChange: event => {
        this.onSetField(event, "entrance", i);
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "address-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label address-title"
    }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0430\u0434\u0440\u0435\u0441\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "personal-input",
      name: "title",
      autoComplete: "off",
      value: address.title,
      onChange: event => {
        this.onSetField(event, "title", i);
      }
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValidationResult__WEBPACK_IMPORTED_MODULE_8__["default"], {
      error: this.state.errors[i === undefined ? "new" : i]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "address-buttons-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      buttonType: "default",
      buttonTitle: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
      buttonClass: "personal-button",
      onClickSubmit: true,
      onClickMethod: () => {
        this.onSaveAddress(i);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      buttonType: "default",
      buttonTitle: "\u041E\u0442\u043C\u0435\u043D\u0430",
      buttonClass: "personal-button_light",
      onClickSubmit: true,
      onClickMethod: () => {
        this.onCancelEdit(i);
      }
    })));
  }

  setAddress(item) {
    this.props.setAddress(item);
  }

  renderChoose(item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label address-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: "address" + item.id,
      name: "address",
      value: item.id,
      defaultChecked: i === 0,
      onChange: () => {
        this.setAddress(item);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "address" + item.id
    }, item.title));
  }

  renderLabel(title) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label address-title"
    }, title);
  }

  renderAddress(i) {
    const address = Object.assign({}, this.state.addresses[i]);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "addresses__container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "address-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-address-title"
    }, this.props.mode === "payment" ? this.renderChoose(address, i) : this.renderLabel(address.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "hide-element": address.edit
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: this.onEditToggle.bind(this, i, true)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_EditItem__WEBPACK_IMPORTED_MODULE_7__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label address-value"
    }, `${address.address}, ${address.flat}, ${address.entrance}`))));
  }

  renderAddButton() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      buttonType: "default",
      buttonTitle: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441",
      buttonClass: "address-button_save",
      onClickSubmit: true,
      onClickMethod: () => {
        this.onAddToggle(true);
      }
    });
  }

  renderAddresses() {
    const renderItems = [];
    const addresses = this.state.addresses.slice();
    addresses.forEach((item, i) => {
      renderItems.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: "address-" + i
      }, this.state.addresses[i].edit ? this.renderEdit(i) : this.renderAddress(i)));
    });
    return renderItems;
  }

  render() {
    const addresses = this.renderAddresses();
    let title = "Мои адреса";
    if (this.props.mode === "payment") title = "Адрес доставки";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block my-addresses"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "inf-block__title "
    }, title), addresses, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "address-buttons": !this.state.addNewAddress
      })
    }, this.state.addNewAddress ? this.renderEdit() : this.renderAddButton()));
  }

}

Addresses.propTypes = {
  dadataToken: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Addresses.defaultProps = {
  dadataToken: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Addresses);

/***/ }),

/***/ "./src/components/Pages/BasketArea/BasketArea.js":
/*!*******************************************************!*\
  !*** ./src/components/Pages/BasketArea/BasketArea.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(PropTypes) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.js");
/* harmony import */ var _icons_AddItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/AddItem */ "./src/components/icons/AddItem.js");
/* harmony import */ var _icons_RemoveItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../icons/RemoveItem */ "./src/components/icons/RemoveItem.js");
/* harmony import */ var _icons_RemoveItemButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/RemoveItemButton */ "./src/components/icons/RemoveItemButton.js");
/* harmony import */ var _icons_EmptyBasketIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/EmptyBasketIcon */ "./src/components/icons/EmptyBasketIcon.js");
/* harmony import */ var _Hits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Hits */ "./src/components/Hits/index.js");
/* harmony import */ var _warning_icon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./warning-icon.svg */ "./src/components/Pages/BasketArea/warning-icon.svg");
/* harmony import */ var _warning_icon_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_warning_icon_svg__WEBPACK_IMPORTED_MODULE_9__);











class BasketArea extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  get isDeliveryAvailable() {
    const {
      min_amount_for_delivery,
      cart
    } = this.props;
    const cartPrice = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getPrice1"])(cart);
    return cartPrice === 0 || min_amount_for_delivery === 0 || cartPrice >= min_amount_for_delivery;
  }

  get basketItems() {
    const {
      cart,
      removeAllItemsFromCart,
      removeFromCart,
      addToCart
    } = this.props; // console.log(cart);

    return cart.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: item.itemData.title,
      className: "basket__item basket-pos js-basket-pos"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-pos__header"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-pos__title"
    }, item.itemData.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-pos__price"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      "data-price": item.itemData.price
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(item.itemData.price || item.itemData.amount))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-pos__consist"
    }, item.itemData.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-pos__specifications"
    }, item.itemData.specifications && item.itemData.specifications.map(prop => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: prop.title,
      className: "basket-pos__prop"
    }, `${prop.value} ${prop.title}`)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-pos__footer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-pos__delete",
      onClick: () => {
        removeAllItemsFromCart(item.itemData.id);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_RemoveItemButton__WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-pos__amount amount-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: () => {
        removeFromCart(item.itemData.id);
      },
      className: "amount-item__dec"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_RemoveItem__WEBPACK_IMPORTED_MODULE_5__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "amount-item__field"
    }, item.numberItems), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: () => {
        addToCart(item.itemData);
      },
      className: "amount-item__inc"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_AddItem__WEBPACK_IMPORTED_MODULE_4__["default"], null))))));
  }

  get basket() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-total__prices"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "basket-total__title"
    }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "basket-total__cost"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "js-total-cost"
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getPrice1"])(this.props.cart)))));
  }

  get buttons() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-total__buttons"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "basket-total__btn_dark btn-transparent",
      onClick: () => {
        this.redirectToPayment(1);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["fbPixel"])("micro");
      },
      type: "button"
    }, "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "basket-total__btn_light btn-primary",
      disabled: !this.isDeliveryAvailable,
      onClick: () => {
        this.redirectToPayment(2);
        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["fbPixel"])("micro");
      },
      type: "button"
    }, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"));
  }

  get items() {
    if (this.props.cart.length) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "basket__list"
      }, this.basketItems);
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-empty"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-empty__icon"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_EmptyBasketIcon__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-empty__text"
    }, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435 \u043F\u043E\u043A\u0430 \u0435\u0449\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435\u0442"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket-empty__button"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "basket-total__btn_dark btn-transparent",
      onClick: () => {
        window.location.hash = "";
      }
    }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0432 \u043C\u0435\u043D\u044E")));
  }

  redirectToPayment(type) {
    Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["setDeliveryMethod"])(type);
    this.props.onNavigateRequest("#/payment");
  }

  render() {
    const {
      showMobileAuth,
      pageTitle,
      min_amount_for_delivery
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("page basket-page", {
        "hide-element": showMobileAuth
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, pageTitle)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "page__container container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "page__title"
    }, "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("basket-warning", {
        "hide-element": this.isDeliveryAvailable
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "basket-warning__icon"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _warning_icon_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "basket-warning__text"
    }, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 ", Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(min_amount_for_delivery), ". \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0441\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437 \u0438\u043B\u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket"
    }, this.items)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hits__WEBPACK_IMPORTED_MODULE_8__["default"], {
      title: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C",
      withScroll: true
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "basket__total-block basket-total"
    }, this.props.cart.length ? this.basket : "", this.props.cart.length ? this.buttons : "")));
  }

}

BasketArea.propTypes = {
  showMobileAuth: PropTypes.bool.isRequired,
  pageTitle: PropTypes.string.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  onNavigateRequest: PropTypes.func.isRequired,
  cart: PropTypes.instanceOf(Array).isRequired,
  min_amount_for_delivery: PropTypes.number.isRequired,
  removeAllItemsFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BasketArea);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/Pages/BasketArea/index.js":
/*!**************************************************!*\
  !*** ./src/components/Pages/BasketArea/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _BasketArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasketArea */ "./src/components/Pages/BasketArea/BasketArea.js");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AC */ "./src/AC/index.js");




function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const mapDispatchToProps = {
  addToCart: _AC__WEBPACK_IMPORTED_MODULE_2__["addToCart"],
  removeFromCart: _AC__WEBPACK_IMPORTED_MODULE_2__["removeFromCart"],
  removeAllItemsFromCart: _AC__WEBPACK_IMPORTED_MODULE_2__["removeAllItemsFromCart"]
};
const ConnectedComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_BasketArea__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedComponent);

/***/ }),

/***/ "./src/components/Pages/BasketArea/warning-icon.svg":
/*!**********************************************************!*\
  !*** ./src/components/Pages/BasketArea/warning-icon.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAxMSAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8Y2lyY2xlIGN4PSI1LjUiIGN5PSI2LjUiIHI9IjUuMSIgc3Ryb2tlPSIjRkQ3MDY1IiBzdHJva2VXaWR0aD0iMC44IiAvPg0KICAgIDxwYXRoIGQ9Ik01Ljk1MDQ3IDcuNzc0NDVMNi4xMzA0NyAzLjEzOTQ1SDUuMDUwNDdMNS4yMzA0NyA3Ljc3NDQ1SDUuOTUwNDdaTTUuMDA1NDcgOC45NDQ0NUM1LjAwNTQ3IDkuMjU5NDUgNS4yNzU0NyA5LjUyOTQ1IDUuNTkwNDcgOS41Mjk0NUM1LjkwNTQ3IDkuNTI5NDUgNi4xNzU0NyA5LjI1OTQ1IDYuMTc1NDcgOC45NDQ0NUM2LjE3NTQ3IDguNjI5NDUgNS45MDU0NyA4LjM1OTQ1IDUuNTkwNDcgOC4zNTk0NUM1LjI3NTQ3IDguMzU5NDUgNS4wMDU0NyA4LjYyOTQ1IDUuMDA1NDcgOC45NDQ0NVoiIGZpbGw9IiNGRDcwNjUiIC8+DQo8L3N2Zz4="

/***/ }),

/***/ "./src/components/Pages/Constructor/ChooseHint.js":
/*!********************************************************!*\
  !*** ./src/components/Pages/Constructor/ChooseHint.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChooseHint_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChooseHint.scss */ "./src/components/Pages/Constructor/ChooseHint.scss");
/* harmony import */ var _ChooseHint_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ChooseHint_scss__WEBPACK_IMPORTED_MODULE_2__);




function ChooseHint({
  rules,
  items,
  classes
}) {
  let selectedPaid = 0;
  let selectedFree = 0;
  let hintText;
  items.forEach(item => {
    if (item.paid > 0) selectedPaid += item.paid;
    if (item.free > 0) selectedFree += item.free;
  });
  const maxItemsFree = rules.min_items;
  const maxItemsPaid = rules.max_items - maxItemsFree;
  const aviableFree = maxItemsFree - selectedFree;
  const aviablePaid = maxItemsPaid - selectedPaid;
  const chooseFreeText = `Выберите ${aviableFree}`;
  const choosePaidText = `Дополнительно ${aviablePaid}`;
  hintText = aviableFree && aviablePaid;

  if (aviableFree > 0 || aviableFree === 0 && aviablePaid === 0 && !rules.extra_item) {
    hintText = chooseFreeText;
  } else {
    hintText = choosePaidText;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `constructor__count-hint ${classes}`
  }, hintText);
}

ChooseHint.propTypes = {
  rules: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    min_items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    max_items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired,
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ChooseHint);

/***/ }),

/***/ "./src/components/Pages/Constructor/ChooseHint.scss":
/*!**********************************************************!*\
  !*** ./src/components/Pages/Constructor/ChooseHint.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/Constructor/Constructor.js":
/*!*********************************************************!*\
  !*** ./src/components/Pages/Constructor/Constructor.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.js");
/* harmony import */ var _icons_RubleIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../icons/RubleIcon */ "./src/components/icons/RubleIcon.js");
/* harmony import */ var _ChooseHint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChooseHint */ "./src/components/Pages/Constructor/ChooseHint.js");






class ConstructorArea extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      activeTab: 0,
      amount: 0,
      defaultAmount: 0
    };
    this.aliases = {};
  }

  componentWillMount() {
    const self = this;
    Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getRequest"])("/ingredients").then(res => {
      const state = {
        groups: res.data.result.groups,
        amount: parseInt(res.data.result.set_fixed_price, 10),
        defaultAmount: parseInt(res.data.result.set_fixed_price, 10)
      };
      res.data.result.groups.map((item, i) => {
        this.aliases[item.alias] = i;
        state[item.alias] = [];
      });
      self.setState(state);
    });
  }

  renderGroupsSelections() {
    return this.state.groups.map((group, i) => {
      const haveElems = this.state[group.alias].length > 0;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block",
        key: group.alias + i
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: `block__title ${!haveElems && "block__title--disabled"}`
      }, i + 1, ". ", group.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "block__list"
      }, haveElems ? this.renderGroupSelections(group.alias) : this.renderEmptySelections(group)));
    });
  }

  renderEmptySelections(group) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "block__list-item block__list-item--disable",
      key: "empty" + group.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E"));
  }

  renderGroupSelections(group) {
    return this.state[group].map(item => {
      const itemSumm = (item.paid && item.price) * (item.count - item.free);
      const itemSummText = itemSumm ? `${itemSumm} ₽` : false;
      const weightText = `${item.measure.value * item.count} г`;
      const xCount = item.count > 1 ? `x${item.count}` : false;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "block__list-item",
        key: "product" + item.id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block__list-item__title--text"
      }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "block__list-item__count"
      }, xCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "block__list-item__weight"
      }, weightText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block__list-item__price"
      }, itemSummText), this.getGroup(group).rules.required ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "trash"
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "trash",
        onClick: () => {
          this.deleteItem(item, group);
        }
      }, this.trashButton(true)));
    });
  }

  deleteItem(item, group) {
    const state = {};
    const groupState = this.state[group].slice();
    const index = this.getIndexInCart(group, item.id);
    groupState.splice(index, 1);
    state[group] = groupState;
    this.setState({ ...state
    }, () => {
      this.setNewSelection(group, this.state.groups[this.aliases[group]].rules);
      this.setState({
        amount: this.amount
      });
    });
  }

  renderGroupsSelectionsMobile() {
    return this.state.groups.filter(group => this.state[group.alias].length).map((group, i) => this.renderGroupSelectionsMobile(group.alias));
  }

  renderGroupSelectionsMobile(group) {
    return this.state[group].map((item, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "block__list-item",
      key: "product" + item.id
    }, this.getGroup(group).rules.required ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "trash--disabled"
    }, this.trashButton(false)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "trash",
      onClick: () => {
        this.deleteItem(item, group);
      }
    }, this.trashButton(true)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title"
    }, item.title, " ", item.count > 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "count"
    }, "x", item.count) : "")));
  }

  renderTotalMobile() {
    const activeClass = this.state.base && this.state.base.length ? "" : "btn--grey-inverse";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__total mobile-only"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "constructor__total-header"
    }, "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0438\u043D\u0433\u0440\u0435\u0434\u0438\u0435\u043D\u0442\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__total-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "block__list"
    }, this.renderGroupsSelectionsMobile())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__total-footer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "cost"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "cost__label"
    }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "cost__amount"
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["formatCurrency"])(this.state.amount))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: `btn ${activeClass}`,
      onClick: () => {
        if (this.state.base && this.state.base.length) {
          this.addToCart();
          window.location.href = "#/basket";
        }
      }
    }, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")));
  }

  render() {
    const activeClass = this.state.base && this.state.base.length ? "" : "btn--grey-inverse";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("page constructor-page", {
        "hide-element": this.props.showMobileAuth
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "page__container container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "page__title container market-section market-section__title constructor-section constructor-section__title"
    }, "\u0421\u043E\u0431\u0435\u0440\u0438 \u0441\u0432\u043E\u0439 \u0431\u043E\u0443\u043B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "constructor-page__text text-gray"
    }, "\u0411\u043E\u0443\u043B \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u043E\u0441\u043D\u043E\u0432\u044B \u2014 \u044D\u0442\u043E \u0441\u043B\u043E\u0436\u043D\u044B\u0439 \u0443\u0433\u043B\u0435\u0432\u043E\u0434, \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0449\u0438\u0439 \u043E\u0441\u0442\u0430\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u044B\u0442\u044B\u043C \u0434\u043E\u043B\u0433\u043E\u0435 \u0432\u0440\u0435\u043C\u044F, \u0441\u043E\u0443\u0441\u0430, \u043F\u0440\u0438\u0434\u0430\u044E\u0449\u0435\u0433\u043E \u0431\u043B\u044E\u0434\u0443 \u043F\u0438\u043A\u0430\u043D\u0442\u043D\u044B\u0439 \u0432\u043A\u0443\u0441, \u0440\u044B\u0431\u044B, \u043C\u043E\u0440\u0435\u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432 \u0438\u043B\u0438 \u0430\u043B\u044C\u0442\u0435\u0440\u0430\u043D\u0442\u0438\u0432\u043D\u044B\u0445 \u0432\u0438\u0434\u043E\u0432 \u0431\u0435\u043B\u043A\u0430 \u0434\u043B\u044F \u0432\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043D\u0446\u0435\u0432 \u0438 \u043E\u0432\u043E\u0449\u043D\u043E\u0433\u043E \u0442\u043E\u043F\u043F\u0438\u043D\u0433\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0434\u043E\u0431\u0430\u0432\u0438\u0442 \u0432\u0438\u0442\u0430\u043C\u0438\u043D\u043E\u0432 \u043A \u0432\u0430\u0448\u0435\u043C\u0443 \u0431\u043E\u0443\u043B\u0443.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__section"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__wizard"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__header"
    }, this.renderTabsHeaders), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__content"
    }, this.renderTabsContents)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__total"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "constructor__total-header"
    }, "\u0421\u043E\u0441\u0442\u0430\u0432 \u0432\u0430\u0448\u0435\u0433\u043E \u0431\u043E\u0443\u043B\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__total-content"
    }, this.renderGroupsSelections()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__total-footer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "cost"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "cost__label"
    }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "cost__amount"
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["formatCurrency"])(this.state.amount))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: `btn ${activeClass}`,
      onClick: () => {
        if (this.state.base && this.state.base.length) {
          this.addToCart();
          window.location.href = "#/basket";
        }
      }
    }, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")))), this.renderTotalMobile()));
  }

  addToCart() {
    const config = {
      amount: this.state.amount,
      title: "Свой поке",
      type: "set",
      id: Date.now(),
      groups: []
    };
    this.state.groups.map((item, i) => {
      config.groups.push({
        id: item.id,
        title: item.title,
        ingredients: this.state[item.alias]
      });
    });
    this.props.addToCart(config);
  }

  nextStep() {
    this.setState({
      activeTab: this.state.activeTab + 1
    });
  }

  selectStep(i) {
    this.setState({
      activeTab: i
    });
  }

  prevStep() {
    this.setState({
      activeTab: this.state.activeTab - 1
    });
  }

  getGroup(alias) {
    return this.state.groups[this.aliases[alias]];
  }

  get renderTabsHeaders() {
    const activeTab = this.state.activeTab;
    const groupsLen = this.state.groups.length;

    if (groupsLen) {
      const alias = this.state.groups[activeTab].alias;
      const items = this.state[alias];
      const rules = this.state.groups[activeTab].rules;
      return this.state.groups.map((item, index) => {
        const isActive = activeTab === index;
        const lastIndex = groupsLen === index + 1;
        const classes = lastIndex ? "right-0" : "";
        const className = "constructor__title" + (activeTab > index ? " constructor__title--passed" : "") + (isActive ? " constructor__title--active" : "");
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: className,
          key: item.id,
          onClick: () => {
            this.selectStep(index);
          }
        }, item.title, isActive && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChooseHint__WEBPACK_IMPORTED_MODULE_4__["default"], {
          rules: rules,
          items: items,
          classes: classes
        }));
      });
    }
  }

  get renderTabsContents() {
    return this.state.groups.map((group, index) => {
      const alias = group.alias;
      const items = this.state[alias];
      const rules = group.rules;
      const classes = "constructor__count-hint-mobile";
      const className = "constructor__content-tab" + (this.state.activeTab !== index ? " constructor__content-tab--hidden" : "");
      const listItems = group.items.map(item => this.renderTabListItem(item, group.alias, group.title));
      return (// constructor__content--hidden
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: className,
          key: group.alias
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChooseHint__WEBPACK_IMPORTED_MODULE_4__["default"], {
          rules: rules,
          items: items,
          classes: classes
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: "constructor-list__title mobile-only"
        }, group.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "constructor__list"
        }, listItems, group.rules.required ? "" : this.renderSkipItem(group.cancel_label, group.alias)), index === 0 ? "" : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "btn",
          onClick: () => this.prevStep()
        }, "\u041D\u0430\u0437\u0430\u0434"), index === this.state.groups.length - 1 ? this.getButtonToCart() : this.getButtonNext(index))
      );
    });
  }

  getButtonNext(i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn",
      onClick: () => this.nextStep()
    }, this.state.groups[i + 1].select_label ? this.state.groups[i + 1].select_label : "Выбрать");
  }

  getButtonToCart() {
    const activeClass = this.state.base && this.state.base.length ? "" : "btn--grey-inverse";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: `btn ${activeClass}`,
      onClick: () => {
        if (this.state.base && this.state.base.length) {
          this.addToCart();
          window.location.href = "#/basket";
        }
      }
    }, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443");
  }

  getCount(group, element) {
    let count = [];

    if (this.state[group] && Object.keys(this.state[group]).length) {
      this.state[group].map(item => {
        if (item.id === element.id) {
          if (item.free && item.paid) {
            count.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: "constructor__count-container--free"
            }, item.free, " +"), this.getIcons(item.paid)));
          } else if (item.paid && !item.free && item.price) {
            count = this.getIcons(item.paid);
          } else if (item.free && !item.paid && item.count > 1) {
            count.push("x" + item.count);
          }
        }
      });
    }

    return count;
  }

  getIcons(count) {
    const icons = [];

    for (let i = 0; i < count; i++) {
      icons.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "constructor__crown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_RubleIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
    }

    return icons;
  }

  showPrice(group) {
    let count = 0;
    this.state[group] && this.state[group].map((item, i) => {
      count += item.count;
    });
    return this.state.groups.length && this.state.groups[this.aliases[group]].rules.min_items <= count && !this.state["empty" + group];
  }

  renderTabListItem(item, group) {
    const price = !!item.price && item.paid || !!item.price && this.showPrice(group) || item.only_paid ? "+" + Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["formatCurrency"])(item.price) : "";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "constructor__item " + this.getActiveClass(item, group),
      key: "boulItems" + item.id,
      onClick: () => {
        this.onSelectItem(item, group);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "constructor__count"
    }, this.getCount(group, item)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__img-wrapp"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "constructor__img",
      src: item.image,
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__text"
    }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__price"
    }, price));
  }

  renderSkipItem(label, group) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "constructor__item " + (this.state["empty" + group] ? "constructor__item--active" : ""),
      onClick: () => {
        this.onSkipSelectionItems(group);
      },
      key: "without" + group
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__img-wrapp"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__img--skip"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "56",
      height: "56",
      viewBox: "0 0 56 56",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
      cx: "28",
      cy: "28",
      r: "28",
      fill: "white",
      fillOpacity: "0.8"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      width: "28",
      height: "4",
      rx: "1",
      transform: "matrix(1 0 0.0155768 0.999879 14 26)",
      fill: "#8DD161"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "constructor__img",
      src: "",
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "constructor__text"
    }, label || "Без ингредиента"));
  }

  onSkipSelectionItems(group) {
    const state = {};
    this.state[group].map(item => {
      item.free = 0;
      item.paid = 0;
    });
    state[group] = [];
    state["empty" + group] = !this.state["empty" + group];
    this.setState(state, () => {
      this.setState({
        amount: this.amount
      });
    });
  }
  /*
  item : {
      id: 34
      image: "https://dev-static.pobo.ru/products/85d8c6be-e35f-4d86-815f-46d6dd1b3192.jpg"
      measure: {unit_type: "Вес", unit: "г", value: 150}
      only_paid: false
      price: 0
      specifications: []
      subtype: 1 - шаг конструктора, раздел
  }
  group - protein, vitamin группы продуктов
   */


  onSelectItem(item, group) {
    const state = {};
    const rules = this.getGroup(group).rules;
    let groupState = this.state[group].slice(); // Выбранные элементы не учитывает повторы

    let groupCount = 0;
    let itemCount = 0;
    const itemCopy = Object.assign({}, item);
    let index = this.getIndexInCart(group, itemCopy.id);
    groupState.map(elem => {
      groupCount += elem.count;

      if (elem.id === itemCopy.id) {
        itemCount = elem.count;
      }
    });

    if (itemCount === 2) {
      groupState.splice(index, 1);
    } else if (groupCount === rules.max_items) {
      if (groupState[0].id !== itemCopy.id) {
        if (groupState[0].count === 1) {
          groupState = groupState.slice(1);
          index -= 1;
        } else {
          groupState[0].count -= 1;
        }

        if (index > -1) {
          groupState[index].count += 1;
        } else {
          itemCopy.count = 1;
          groupState.push(itemCopy);
        }
      } else if (groupState.length > 1) {
        groupState[0].count += 1;

        if (groupState[1].count === 1) {
          groupState.splice(1, 1);
        } else {
          groupState[1].count -= 1;
        }
      } else {
        groupState = [];
      }
    } else if (index === -1) {
      itemCopy.count = 1;
      groupState.push(itemCopy);
    } else {
      groupState[index].count += 1;
    }

    state[group] = groupState;
    state["empty" + group] = !groupState.length;
    this.setState(state, () => {
      this.setNewSelection(group, rules);
      this.setState({
        amount: this.amount
      });
    });
  }

  setNewSelection(group, rules) {
    const result = [];
    const selected = this.state[group].slice();
    let maxFree = rules.min_items;
    this.state[group].map(item => {
      item.free = 0;
      item.paid = 0;
    });
    selected.map((item, i) => {
      if (item.only_paid) {
        item.paid = item.count;
        item.free = 0;
      } else if (maxFree > 0) {
        if (item.count >= maxFree) {
          item.free = maxFree;
          item.paid = item.count - maxFree;
          maxFree = 0;
        } else {
          item.free = item.count;
          item.paid = 0;
          maxFree -= item.count;
        }
      } else {
        item.paid = item.count;
        item.free = 0;
      }

      result.push(item);
    });
    const groupState = {};
    groupState[group] = result;
    this.setState(groupState);
    return result;
  }

  get amount() {
    let overPaid = 0;
    Object.keys(this.aliases).map(i => {
      this.state[i].map(item => {
        overPaid += item.paid * item.price;
      });
    });
    return this.state.defaultAmount + overPaid;
  }

  getIndexInCart(group, id) {
    let index = -1;
    this.state[group].map((item, i) => {
      if (item.id === id) {
        index = i;
      }
    });
    return index;
  }

  getActiveClass(item, group) {
    return this.getIndexInCart(group, item.id) !== -1 ? "constructor__item--active" : "";
  }

  trashButton(enabled) {
    const fillColor = enabled ? "#8DD161" : "#CCCCCC";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "13",
      height: "16",
      viewBox: "0 0 13 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M12.9612 3.55728L12.6099 2.50315C12.4762 2.10203 12.1 1.83461 11.6772 1.83461H8.72386V0.870662C8.72386 0.388688 8.33214 0 7.85338 0H5.1487C4.66683 0 4.27823 0.391798 4.27823 0.870662V1.83461H1.32484C0.902034 1.83461 0.528974 2.10514 0.395295 2.50626L0.0408876 3.55728C-0.039942 3.79671 0.000472799 4.06413 0.149697 4.26935C0.298921 4.47458 0.535192 4.59585 0.790116 4.59585H1.15696L1.96526 14.596C2.02432 15.3392 2.65542 15.9207 3.39843 15.9207H9.76843C10.5114 15.9207 11.1425 15.3392 11.2016 14.596L12.0099 4.59585H12.212C12.4638 4.59585 12.7032 4.47458 12.8524 4.26935C12.9985 4.06413 13.0389 3.79982 12.9612 3.55728ZM5.21088 0.932852H7.79432V1.83461H5.21088V0.932852ZM10.2721 14.5214C10.2503 14.7826 10.0296 14.9878 9.76843 14.9878H3.39843C3.13728 14.9878 2.91656 14.7826 2.8948 14.5214L2.09272 4.59585H11.0741L10.2721 14.5214ZM0.989082 3.663L1.2782 2.79856C1.28442 2.7799 1.30307 2.76435 1.32484 2.76435H11.6804C11.7021 2.76435 11.7208 2.77679 11.727 2.79856L12.0161 3.663H0.989082Z",
      fill: fillColor
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M9.27283 5.14774C9.2635 5.14774 9.25728 5.14774 9.24796 5.14774C9.00236 5.14774 8.79407 5.34053 8.78163 5.58929L8.34329 13.9974C8.33085 14.2555 8.52671 14.4731 8.78474 14.4887C9.04277 14.5011 9.26039 14.3052 9.27594 14.0471L9.71428 5.63904C9.72672 5.38095 9.53086 5.16328 9.27283 5.14774Z",
      fill: fillColor
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M4.21902 5.58929C4.20658 5.34053 3.99829 5.14774 3.75269 5.14774C3.74337 5.14774 3.73404 5.14774 3.72782 5.14774C3.46979 5.16017 3.27393 5.38095 3.28637 5.63904L3.74648 14.0471C3.75891 14.3052 3.97964 14.5011 4.23767 14.4887C4.49571 14.4763 4.69156 14.2555 4.67913 13.9974L4.21902 5.58929Z",
      fill: fillColor
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M6.51024 5.15318C6.2522 5.15318 6.04391 5.36152 6.04391 5.61961L6.04391 14.0277C6.04391 14.2858 6.2522 14.4941 6.51024 14.4941C6.76827 14.4941 6.97656 14.2858 6.97656 14.0277L6.97656 5.61961C6.97656 5.36152 6.76827 5.15318 6.51024 5.15318Z",
      fill: fillColor
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ConstructorArea);

/***/ }),

/***/ "./src/components/Pages/Email.js":
/*!***************************************!*\
  !*** ./src/components/Pages/Email.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./src/components/Button.js");
/* harmony import */ var _icons_EditItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/EditItem */ "./src/components/icons/EditItem.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _ValidationResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ValidationResult */ "./src/components/Pages/ValidationResult.js");







class Email extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      error: "",
      edit: false
    };
  }

  onChange(e) {
    this.setState({
      email: e.currentTarget.value,
      error: ""
    });
  }

  onEditToggle(value) {
    this.setState({
      edit: value,
      error: ""
    }, () => {
      if (this.state.edit) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["focusInputById"])("email");
      }
    });
  }

  onSave(e) {
    e.preventDefault();
    const self = this;
    Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["postRequest"])("/profile/email", {
      email: this.state.email
    }).then(res => {
      if (res.data.success === true) {
        self.props.setEmail(this.state.email);
        self.props.setProfileEmail(res.data.result.email, res.data.result.email_confirmed, res.data.result.email_subscribed);
        self.onEditToggle(false);
      } else if (res.data.errors) {
        const error = res.data.errors.map(it => it.message).join(" ");
        self.setState({
          edit: true,
          error
        }, () => {
          if (this.state.edit) {
            Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["focusInputById"])("email");
          }
        });
      }
    });
  }

  get chooseElement() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      id: 'address',
      name: "address",
      className: "as-radio",
      onChange: e => {
        this.props.setEmail(e.currentTarget.checked ? this.state.email : '');
      }
    });
  }

  get header() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label"
    }, "E-mail");
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "input-stroke"
    }, this.props.mode === 'payment' ? this.chooseElement : this.header, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'input-stroke__container': this.state.edit
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'personal-input': this.state.edit
      }, {
        'personal-input_hidden': !this.state.edit
      }),
      id: "email",
      name: "email",
      readOnly: !this.state.edit,
      autoComplete: "off",
      value: this.state.email,
      onChange: event => {
        this.onChange(event);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValidationResult__WEBPACK_IMPORTED_MODULE_5__["default"], {
      error: this.state.error
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'hide-element': !this.state.edit,
        'input-stroke__container': this.state.edit
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'fade': this.state.edit
      }),
      buttonType: "default",
      buttonTitle: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
      buttonClass: "personal-button",
      onClickSubmit: true,
      onClickMethod: this.onSave.bind(this)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('edit-icon', {
        'hide-element': this.state.edit
      }),
      onClick: () => {
        this.onEditToggle('email');
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_EditItem__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Email);

/***/ }),

/***/ "./src/components/Pages/Legal/Legal.js":
/*!*********************************************!*\
  !*** ./src/components/Pages/Legal/Legal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {/* harmony import */ var _HOC_withFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../HOC/withFetch */ "./src/HOC/withFetch.jsx");
/* harmony import */ var _Legal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Legal.scss */ "./src/components/Pages/Legal/Legal.scss");
/* harmony import */ var _Legal_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Legal_scss__WEBPACK_IMPORTED_MODULE_1__);



function Legal({
  showMobileAuth,
  data
}) {
  const page = data.result.description;
  return React.createElement("main", {
    className: `page container ${showMobileAuth && "hide-element"} `
  }, React.createElement("div", {
    className: "page__container"
  }, React.createElement("div", {
    className: "legal_agreement_container"
  }, React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: page
    }
  }))));
}

Legal.propTypes = {
  showMobileAuth: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    result: PropTypes.instanceOf(Object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withFetch__WEBPACK_IMPORTED_MODULE_0__["default"])("/pages/item?id=6", Legal));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/Pages/Legal/Legal.scss":
/*!***********************************************!*\
  !*** ./src/components/Pages/Legal/Legal.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/MobileAuthArea.js":
/*!************************************************!*\
  !*** ./src/components/Pages/MobileAuthArea.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(PropTypes) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./src/components/Button.js");
/* harmony import */ var _icons_BonusIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/BonusIcon */ "./src/components/icons/BonusIcon.js");





class MobileAuthArea extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  get enterButton() {
    const title = "Войдите в свой аккаунт";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      buttonType: "default",
      buttonTitle: title,
      buttonClass: "btn mobile-auth-btn",
      type: "button",
      onClickMethod: () => {
        this.props.onShowUserProfile();
        Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["fbPixel"])("micro");
      }
    }, title);
  }

  get profileInfo() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "inf-block-link",
      href: "#/cabinet",
      onClick: this.props.onShowUserProfile
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mobile-inf"
    }, this.props.profile.firstname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mobile-inf"
    }, "+", this.props.profile.phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mobile-inf mobile-bonuses"
    }, "\u041F\u043E\u0431\u043E-\u0431\u043E\u043D\u0443\u0441\u043E\u0432", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mobile-inf mobile-bonuses-count"
    }, this.props.profile.bonuses), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_BonusIcon__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: "page mobile-page"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, this.props.profile.phone ? this.profileInfo : this.enterButton));
  }

}

MobileAuthArea.propTypes = {
  onShowUserProfile: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    phone: PropTypes.string,
    firstname: PropTypes.string,
    bonuses: PropTypes.number
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MobileAuthArea);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/Pages/MyOrders.js":
/*!******************************************!*\
  !*** ./src/components/Pages/MyOrders.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
/* harmony import */ var _PreviousOrder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PreviousOrder */ "./src/components/Pages/PreviousOrder.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button */ "./src/components/Button.js");





class MyOrders extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: this.props.orders,
      ordersPage: 1
    };
  }

  loadMoreOrders() {
    const self = this;
    Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getRequest"])("/order/list/?page=" + (this.state.ordersPage + 1)).then(res => {
      if (res.data.success) {
        const orders = this.state.orders.slice();
        self.setState({
          ordersPage: this.state.ordersPage + 1,
          orders: orders.concat(res.data.result.items)
        });
      }
    });
  }

  get button() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      buttonType: "default",
      buttonTitle: "\u0415\u0449\u0451 \u0437\u0430\u043A\u0430\u0437\u044B",
      buttonClass: "personal-button_light load-more-button",
      onClickMethod: () => {
        this.loadMoreOrders();
      },
      onClickSubmit: true
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.orders && this.state.orders.map((item, i) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PreviousOrder__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: 'order' + item.order_number,
        isExpand: i === 0,
        item: item,
        repeateOrder: this.props.repeateOrder.bind(this)
      });
    }), this.state.orders ? this.button : '');
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyOrders);

/***/ }),

/***/ "./src/components/Pages/Order/Order.js":
/*!*********************************************!*\
  !*** ./src/components/Pages/Order/Order.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_BonusIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/BonusIcon */ "./src/components/icons/BonusIcon.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.js");
/* harmony import */ var _Order_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Order.scss */ "./src/components/Pages/Order/Order.scss");
/* harmony import */ var _Order_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Order_scss__WEBPACK_IMPORTED_MODULE_4__);






class Order extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  get bonuses() {
    let bonuses = 0;

    if (this.props.bonusesAccrued) {
      bonuses = parseInt(this.props.bonusesAccrued, 10);
    } else if (this.props.bonusAccrualPercent) {
      bonuses = Math.ceil(this.props.total_due * this.props.bonusAccrualPercent);
    }

    return bonuses;
  }

  render() {
    const {
      order,
      total_due,
      total
    } = this.props;
    const discount = total - total_due;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-orders__title"
    }, "\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-orders__list"
    }, order.map(product => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order__order-item",
      key: product.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order__item-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order__item-title"
    }, product.title, "\u00A0", product.quantity > 1 ? "x" + product.quantity : ""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order__item-price"
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(parseInt(product.price, 10) || product.amount))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order__description"
    }, product.description ? product.description : Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getBoulTitle"])(product.groups))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-orders__result"
    }, discount > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-orders__discount"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-orders__discount-title"
    }, "\u0421\u043A\u0438\u0434\u043A\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-orders__discount-amount"
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(discount))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-orders__title history-orders__total"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "\u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-orders__total"
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(total_due))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-orders__bonuses"
    }, "\u0411\u0443\u0434\u0435\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E ", this.bonuses, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_BonusIcon__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
  }

}

Order.propTypes = {
  bonusAccrualPercent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  bonusesAccrued: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  total_due: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired
};
Order.defaultProps = {
  bonusesAccrued: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Order);

/***/ }),

/***/ "./src/components/Pages/Order/Order.scss":
/*!***********************************************!*\
  !*** ./src/components/Pages/Order/Order.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/PaymentArea/AsapField.js":
/*!*******************************************************!*\
  !*** ./src/components/Pages/PaymentArea/AsapField.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



class AsapField extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.slots !== this.props.slots;
  }

  render() {
    const {
      setAsap,
      slots,
      schedule
    } = this.props;
    if (!slots) return null; // Если нет данных "заказть ко времени" значит ресторан закрыт

    const openHour = schedule.slice(0, 2);
    const openMin = schedule.slice(3, 5);
    const openTime = new Date();
    openTime.setHours(openHour, openMin, 0);
    const now = new Date();
    if (now.valueOf() < openTime.valueOf()) return null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: "delivery-asap",
      name: "delivery",
      value: "asap",
      onChange: setAsap
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "delivery-asap"
    }, "\u041A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0441\u043A\u043E\u0440\u0435\u0435"));
  }

}

AsapField.propTypes = {
  setAsap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  slots: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  schedule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
AsapField.defaultProps = {
  slots: 0
};
/* harmony default export */ __webpack_exports__["default"] = (AsapField);

/***/ }),

/***/ "./src/components/Pages/PaymentArea/ChooseStock/Bonus/Bonus.js":
/*!*********************************************************************!*\
  !*** ./src/components/Pages/PaymentArea/ChooseStock/Bonus/Bonus.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bonus_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bonus-icon.svg */ "./src/components/Pages/PaymentArea/ChooseStock/Bonus/bonus-icon.svg");
/* harmony import */ var _bonus_icon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bonus_icon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bonus_icon_mobile_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bonus-icon-mobile.svg */ "./src/components/Pages/PaymentArea/ChooseStock/Bonus/bonus-icon-mobile.svg");
/* harmony import */ var _bonus_icon_mobile_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bonus_icon_mobile_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Elements_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Elements/Checkbox */ "./src/components/Elements/Checkbox/index.js");
/* harmony import */ var _Bonus_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Bonus.scss */ "./src/components/Pages/PaymentArea/ChooseStock/Bonus/Bonus.scss");
/* harmony import */ var _Bonus_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Bonus_scss__WEBPACK_IMPORTED_MODULE_5__);







function Bonus({
  setDueBonus,
  bonuses
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spend-points__title-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Elements_Checkbox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "spend-points",
    onChange: setDueBonus
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spend-points__title"
  }, "\u041F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u044C \u0431\u0430\u043B\u043B\u044B", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "spend-points-bonuses-mobile"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "spend-points-bonuses-mobile__amount"
  }, bonuses), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _bonus_icon_mobile_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: ""
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spend-points-bonuses"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spend-points-bonuses__desctop"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "spend-points-bonuses__amount"
  }, bonuses), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _bonus_icon_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: ""
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "spend-points-bonuses__hint"
  }, "\u041F\u043E\u0431\u043E-\u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438 \u043C\u043E\u0436\u043D\u043E \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C 50%\xA0\u043E\u0442\xA0\u0441\u0443\u043C\u043C\u044B \u0437\u0430\u043A\u0430\u0437\u0430")));
}

Bonus.propTypes = {
  setDueBonus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  bonuses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
Bonus.defaultProps = {
  bonuses: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (Bonus);

/***/ }),

/***/ "./src/components/Pages/PaymentArea/ChooseStock/Bonus/Bonus.scss":
/*!***********************************************************************!*\
  !*** ./src/components/Pages/PaymentArea/ChooseStock/Bonus/Bonus.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/PaymentArea/ChooseStock/Bonus/bonus-icon-mobile.svg":
/*!**********************************************************************************!*\
  !*** ./src/components/Pages/PaymentArea/ChooseStock/Bonus/bonus-icon-mobile.svg ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMCA1LjczMDQ3SDEuODYwNDdWMTEuMjgwMkgwVjUuNzMwNDdaIiBmaWxsPSIjM0QzQjNCIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQgMy43Mzg5OEM1LjE4MTYzIDMuNzM4OTggNi4xMzk1MyA0LjY3MDc0IDYuMTM5NTMgNS44MjAxMkM2LjEzOTUzIDYuOTY5NSA1LjE4MTYzIDcuOTAxMjUgNCA3LjkwMTI1QzIuODE4MzcgNy45MDEyNSAxLjg2MDQ3IDYuOTY5NSAxLjg2MDQ3IDUuODIwMTJDMS44NjA0NyA0LjY3MDc0IDIuODE4MzcgMy43Mzg5OCA0IDMuNzM4OThaTTQgMS45MjkzQzYuMjA5MTQgMS45MjkzIDggMy42NzEyOCA4IDUuODIwMTJDOCA3Ljk2ODk2IDYuMjA5MTQgOS43MTA5NCA0IDkuNzEwOTRDMS43OTA4NiA5LjcxMDk0IDAgNy45Njg5NiAwIDUuODIwMTJDMCAzLjY3MTI4IDEuNzkwODYgMS45MjkzIDQgMS45MjkzWiIgZmlsbD0iIzNEM0IzQiIvPg0KPHBhdGggZD0iTTAgNS45MTAxNkgxLjg2MDQ3VjAuMzYwNDYxSDBWNS45MTAxNloiIGZpbGw9IiMzRDNCM0IiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/components/Pages/PaymentArea/ChooseStock/Bonus/bonus-icon.svg":
/*!***************************************************************************!*\
  !*** ./src/components/Pages/PaymentArea/ChooseStock/Bonus/bonus-icon.svg ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxMiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wIDguNTk0NzNIMi43OTA3VjE2LjkxOTNIMFY4LjU5NDczWiIgZmlsbD0iIzNEM0IzQiIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDUuNjA4NDhDNy43NzI0NSA1LjYwODQ4IDkuMjA5MyA3LjAwNjExIDkuMjA5MyA4LjczMDE4QzkuMjA5MyAxMC40NTQyIDcuNzcyNDUgMTEuODUxOSA2IDExLjg1MTlDNC4yMjc1NSAxMS44NTE5IDIuNzkwNyAxMC40NTQyIDIuNzkwNyA4LjczMDE4QzIuNzkwNyA3LjAwNjExIDQuMjI3NTUgNS42MDg0OCA2IDUuNjA4NDhaTTYgMi44OTM5NUM5LjMxMzcxIDIuODkzOTUgMTIgNS41MDY5MiAxMiA4LjczMDE4QzEyIDExLjk1MzQgOS4zMTM3MSAxNC41NjY0IDYgMTQuNTY2NEMyLjY4NjI5IDE0LjU2NjQgMCAxMS45NTM0IDAgOC43MzAxOEMwIDUuNTA2OTIgMi42ODYyOSAyLjg5Mzk1IDYgMi44OTM5NVoiIGZpbGw9IiMzRDNCM0IiLz4NCjxwYXRoIGQ9Ik0wIDguODY1MjNIMi43OTA3VjAuNTQwNjkxSDBWOC44NjUyM1oiIGZpbGw9IiMzRDNCM0IiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/components/Pages/PaymentArea/ChooseStock/ChooseStock.js":
/*!*********************************************************************!*\
  !*** ./src/components/Pages/PaymentArea/ChooseStock/ChooseStock.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Bonus_Bonus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bonus/Bonus */ "./src/components/Pages/PaymentArea/ChooseStock/Bonus/Bonus.js");
/* harmony import */ var _Promo_Promo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Promo/Promo */ "./src/components/Pages/PaymentArea/ChooseStock/Promo/Promo.js");
/* harmony import */ var _ChooseStock_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChooseStock.scss */ "./src/components/Pages/PaymentArea/ChooseStock/ChooseStock.scss");
/* harmony import */ var _ChooseStock_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ChooseStock_scss__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ChooseStock extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      type: "promo"
    });

    _defineProperty(this, "choosePromo", () => {
      this.setState({
        type: "promo"
      });
      this.props.setDueBonus(false);
    });

    _defineProperty(this, "chooseBonus", () => {
      this.setState({
        type: "bonus"
      });
      this.props.setDuePromo(false);
      this.props.setPromocode(null);
    });
  }

  render() {
    const {
      setDuePromo,
      setDueBonus,
      bonuses,
      paramsForOrder,
      setPromocode
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "spend-points"
    }, this.state.type === "bonus" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Bonus_Bonus__WEBPACK_IMPORTED_MODULE_2__["default"], {
      setDueBonus: setDueBonus,
      bonuses: bonuses
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "spend-points__set-type",
      onClick: this.choosePromo
    }, "\u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434")), this.state.type === "promo" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Promo_Promo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      paramsForOrder: paramsForOrder,
      setDuePromo: setDuePromo,
      setPromocode: setPromocode
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "spend-points__set-type bonus",
      onClick: this.chooseBonus
    }, "\u041F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u044C \u0431\u0430\u043B\u043B\u044B")));
  }

}

ChooseStock.propTypes = {
  setDueBonus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setDuePromo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setPromocode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  bonuses: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  paramsForOrder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
ChooseStock.defaultProps = {
  bonuses: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (ChooseStock);

/***/ }),

/***/ "./src/components/Pages/PaymentArea/ChooseStock/ChooseStock.scss":
/*!***********************************************************************!*\
  !*** ./src/components/Pages/PaymentArea/ChooseStock/ChooseStock.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/PaymentArea/ChooseStock/Promo/Promo.js":
/*!*********************************************************************!*\
  !*** ./src/components/Pages/PaymentArea/ChooseStock/Promo/Promo.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../helpers */ "./src/helpers.js");
/* harmony import */ var _Promo_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Promo.scss */ "./src/components/Pages/PaymentArea/ChooseStock/Promo/Promo.scss");
/* harmony import */ var _Promo_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Promo_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ValidationResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ValidationResult */ "./src/components/Pages/ValidationResult.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Promo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      processing: false,
      errors: null,
      discount: null,
      hint: null,
      code: null
    });

    _defineProperty(this, "code", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(this, "sendCode", () => {
      const code = this.code.current.value;

      if (!code) {
        this.setState({
          errors: [{
            message: "Поле не должно быть пустым"
          }],
          hint: "err"
        });
        return null;
      }

      if (code === this.state.code) {
        return null;
      }

      const params = this.props.paramsForOrder();
      params.promocode = code;
      this.setState({
        processing: true
      });
      Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["postRequest"])("/order/validate-promocode", params).then(res => {
        if (res.data.success) {
          const {
            total_due,
            total
          } = res.data.result.order;
          this.props.setDuePromo(total_due);
          this.props.setPromocode(code);
          this.setState({
            hint: "discount",
            discount: (total - total_due) / total * 100
          });
        } else {
          this.setState({
            errors: res.data.errors,
            hint: "err"
          });
          this.props.setDuePromo(false);
          this.props.setPromocode(null);
        }

        this.setState({
          processing: false,
          code
        });
      });
    });
  }

  render() {
    const loading = this.state.processing === true;
    const {
      hint,
      discount,
      errors
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "promo"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "promo__mobile-title"
    }, "\u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      className: "spend-points__title"
    }, "E\u0441\u0442\u044C \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `promo__container ${!hint && "own-margin"}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: `
                            ${hint === "err" && "error"} 
                            ${hint === "discount" && "success"} 
                            ${!hint && "own-margin"}
                        `,
      ref: this.code,
      type: "text",
      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0440\u043E\u043C\u043E-\u043A\u043E\u0434"
    }), hint === "err" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "promo__errors"
    }, errors.map(err => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValidationResult__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: err.message,
      error: err.message
    }))), hint === "discount" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "promo__discount"
    }, "-", Math.round(discount * 10) / 10, "% \u043D\u0430 \u0432\u0435\u0441\u044C \u0437\u0430\u043A\u0430\u0437"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: `btn ${loading && "loading"} `,
      type: "button",
      onClick: this.sendCode
    }, "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043A\u043E\u0434")));
  }

}

Promo.propTypes = {
  setPromocode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  paramsForOrder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setDuePromo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Promo);

/***/ }),

/***/ "./src/components/Pages/PaymentArea/ChooseStock/Promo/Promo.scss":
/*!***********************************************************************!*\
  !*** ./src/components/Pages/PaymentArea/ChooseStock/Promo/Promo.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/PaymentArea/PaymentArea.js":
/*!*********************************************************!*\
  !*** ./src/components/Pages/PaymentArea/PaymentArea.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_payment_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-payment-icons */ "./node_modules/react-payment-icons/build/index.js");
/* harmony import */ var react_payment_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_payment_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Addresses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Addresses */ "./src/components/Pages/Addresses.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.js");
/* harmony import */ var _Order_Order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Order/Order */ "./src/components/Pages/Order/Order.js");
/* harmony import */ var _icons_BonusIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/BonusIcon */ "./src/components/icons/BonusIcon.js");
/* harmony import */ var _Modals_AuthModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Modals/AuthModal */ "./src/components/Modals/AuthModal.js");
/* harmony import */ var _ValidationResult__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ValidationResult */ "./src/components/Pages/ValidationResult.js");
/* harmony import */ var _AsapField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AsapField */ "./src/components/Pages/PaymentArea/AsapField.js");
/* harmony import */ var _PersonCount_PersonCount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PersonCount/PersonCount */ "./src/components/Pages/PaymentArea/PersonCount/PersonCount.js");
/* harmony import */ var _ChooseStock_ChooseStock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ChooseStock/ChooseStock */ "./src/components/Pages/PaymentArea/ChooseStock/ChooseStock.js");
/* harmony import */ var _apple_icon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apple-icon.png */ "./src/components/Pages/PaymentArea/apple-icon.png");
/* harmony import */ var _apple_icon_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_apple_icon_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _google_icon_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./google-icon.png */ "./src/components/Pages/PaymentArea/google-icon.png");
/* harmony import */ var _google_icon_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_google_icon_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _pay_icons_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pay-icons.scss */ "./src/components/Pages/PaymentArea/pay-icons.scss");
/* harmony import */ var _pay_icons_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_pay_icons_scss__WEBPACK_IMPORTED_MODULE_15__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















class PaymentArea extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getCartItems", () => this.props.cart.map(item => {
      const product = Object.assign({}, item.itemData);
      product.quantity = item.numberItems;
      return product;
    }));

    _defineProperty(this, "getParamsForOrder", () => ({
      bonuses_applied: this.state.bonuses_applied,
      cuttlery_quantity: this.state.cuttlery_quantity,
      definitions: this.state.definitions,
      delivery_details: this.state.delivery_details,
      delivery_method: this.state.delivery_method,
      extra: this.state.extra,
      items: this.state.items,
      paymentType: this.state.paymentType,
      payment_details: this.state.payment_details,
      payment_method: this.state.payment_method,
      total: this.state.total,
      total_due: this.state.total_due,
      promocode: this.state.promocode
    }));

    _defineProperty(this, "setDuePromo", amount => {
      this.setState(state => ({
        total_due: amount || state.total
      }));
    });

    _defineProperty(this, "setPromocode", promocode => {
      this.setState({
        promocode
      });
    });

    _defineProperty(this, "setDueBonus", e => {
      const checked = e ? e.currentTarget.checked : false;
      this.setState(state => {
        let totalDue = state.total;
        let bonusesApplied = 0;
        const halfTotal = Math.round(state.total / 2);

        if (checked) {
          if (state.bonuses > halfTotal) {
            totalDue -= halfTotal;
            bonusesApplied = halfTotal;
          } else {
            totalDue -= state.bonuses;
            bonusesApplied = state.bonuses;
          }
        }

        return {
          total_due: totalDue,
          bonuses_applied: bonusesApplied
        };
      });
    });

    _defineProperty(this, "changePersonCount", e => {
      this.setState({
        cuttlery_quantity: +e.target.value
      });
    });

    this.mounted = true;
    const deliveryMethod = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getDeliveryMethod"])();
    this.state = {
      promocode: null,
      definitions: this.props.definitions,
      restaurants: this.props.restaurants,
      bonusAccrualPercent: this.props.bonus_accrual_percent / 100,
      total: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getPrice1"])(this.props.cart),
      isAuthorized: this.props.isAuthorized,
      showModal: !this.props.isAuthorized,
      total_due: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getPrice1"])(this.props.cart),
      bonuses_applied: 0,
      items: this.getCartItems(),
      addresses: this.props.profile.addresses,
      bonuses: this.props.profile.bonuses,
      invoiceSend: false,
      invoiceEmail: this.props.profile.email,
      delivery_method: deliveryMethod ? deliveryMethod.delivery : 1,
      delivery_details: {
        comments: "",
        address: {}
      },
      extra: {
        personal_agreement: false,
        subscribe_news: false
      },
      payment_method: -1,
      payment_details: {
        save_card: false,
        card: false,
        invoice_email: this.props.profile.email
      },
      cards: [],
      errors: [],
      slots: {
        today: {
          date: "",
          slots: []
        },
        tomorrow: {
          date: "",
          slots: []
        }
      },
      card: "",
      showAllSlots: false,
      id: null,
      processing: false,
      cuttlery_quantity: 1
    };

    if (!this.getCartItems().length) {
      window.location.hash = "#/";
    }
  }

  componentDidMount() {
    this.getCheckoutTimeAvailable();
    this.getCards();
    this.setDefaultAddress();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  setDefaultAddress() {
    if (this.state.delivery_method === 1 && this.state.restaurants) {
      const addresses = this.state.restaurants.slice();
      this.setAddress(addresses[0]);
    }

    if (this.state.delivery_method === 2 && this.state.addresses) {
      const addresses = this.state.addresses.slice();
      this.setAddress(addresses[0]);
    }
  }

  getCards() {
    if (this.mounted) {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getRequest"])("/cards").then(res => {
        this.setState({
          cards: res.data.result
        });
      });
    }
  }

  setCard(e) {
    this.setState({
      card: e.currentTarget.value
    });
  }

  setSaveCard(e) {
    const details = Object.assign({}, this.state.payment_details);
    details.save_card = e.currentTarget.checked;
    this.setState({
      payment_details: details
    });
  }

  setPayment(e) {
    const value = e.currentTarget.value;
    const isCard = value === "card";
    this.setState({
      payment_method: isCard ? 3 : 1,
      paymentType: value
    }, () => {
      const details = Object.assign({}, this.state.payment_details);
      details.card = isCard;
      this.setState({
        payment_details: details
      });
    });
  }

  setInvoiceSend(value) {
    const details = Object.assign({}, this.state.payment_details);

    if (value && this.state.invoiceEmail) {
      details.invoice_email = this.state.invoiceEmail;
    } else {
      details.invoice_email = "";
    }

    this.setState({
      invoiceSend: value,
      payment_details: details
    });
  }

  setInvoiceEmail(value) {
    const details = Object.assign({}, this.state.payment_details);
    details.invoice_email = this.state.invoiceSend ? value : "";
    this.setState({
      invoiceEmail: value,
      payment_details: details
    });
  }

  setExtra(e, type) {
    const details = Object.assign({}, this.state.extra);
    details[type] = e.currentTarget.checked;
    this.setState({
      extra: details
    });
  }

  setComments(e) {
    const details = Object.assign({}, this.state.delivery_details);
    details.comments = e.currentTarget.value;
    this.setState({
      delivery_details: details
    });
  }

  setTimeslot(date, time) {
    const details = Object.assign({}, this.state.delivery_details);
    details.date = date;
    details.time = time;
    this.setState({
      delivery_details: details
    });
  }

  setAsap(e) {
    const details = Object.assign({}, this.state.delivery_details);
    details.asap = e.currentTarget.value === "asap";
    this.setState({
      delivery_details: details
    });
  }

  getCheckoutTimeAvailable() {
    const self = this;

    if (this.mounted) {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getRequest"])("/checkout/time-available", {}).then(res => {
        let slots = {};
        res.data.result.map(item => {
          if (self.state.delivery_method === item.type) {
            slots = item;
          }
        });
        self.setState({
          slots
        });
      });
    }
  }

  checkAndCreateOrder() {
    if (this.checkOrder()) {
      this.createOrder();
    }
  }

  checkOrder() {
    let result = false;

    if (!this.state.extra.personal_agreement) {
      this.setState({
        errors: [{
          message: "Для оформления заказа необходимо согласие на обработку персональных данных. Мы запомним ваше имя, номер телефона и адреса доставки, чтобы не указывать их при следующих заказах. Все ваши данные надёжно защищены"
        }]
      });
    } else if (this.state.payment_method === -1) {
      this.setState({
        errors: [{
          message: "Выберите способ оплаты для оформления заказа"
        }]
      });
    } else if (!this.state.delivery_details.asap && !this.state.delivery_details.time) {
      this.setState({
        errors: [{
          message: "Выберите время доставки для оформления заказа"
        }]
      });
    } else if (!this.isProcessing) {
      result = true;
    }

    return result;
  }

  createOrder() {
    const params = this.getParamsForOrder();
    const actionId = this.state.id === null ? "create" : "update";
    this.setState({
      processing: true
    });

    if (this.mounted) {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["postRequest"])("/order/" + actionId, params).then(res => {
        if (res.data.success) {
          const data = res.data.result;
          const bonusesApplied = parseInt(res.data.result.order.bonuses_applied, 10);
          this.setState({
            id: data.order.id
          });

          if (this.state.payment_details.card && this.state.payment_method === 3) {
            if (this.state.card === "") {
              this.showPayment(data, bonusesApplied);
            } else {
              this.createPayment(data.order.id, data.order.total_due, data.customer, bonusesApplied);
            }
          } else {
            this.setCartEmpty(bonusesApplied);
            this.setState({
              processing: false
            });
            window.location.href = "#/status/" + data.order.id;
          }

          Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["fbPixel"])("macro");
        } else {
          this.setState({
            errors: res.data.errors
          });
          this.setState({
            processing: false
          });
        }
      });
    }
  }

  showPayment(params, bonusesApplied) {
    const widget = new cp.CloudPayments();
    const self = this;
    widget.charge({
      publicId: this.props.cloudpaymentsPublicId,
      description: "Заказ N " + params.order.order_number + " от " + params.order.order_date,
      amount: parseInt(params.order.total_due, 10),
      currency: "RUB",
      invoiceId: params.order.id,
      accountId: params.customer.id,
      email: params.customer.email,
      requireEmail: true,
      data: {
        order_number: params.order.order_number,
        order_date: params.order.order_date
      }
    }, () => {
      self.setCartEmpty(bonusesApplied);
      self.setState({
        processing: false
      });
      window.location.href = "#/status/" + params.order.id;
    }, () => {
      self.setState({
        processing: false
      }); // window.location.href = '#/payment/';
    });
  }

  createPayment(orderId, total, customer, bonusesApplied) {
    const params = {
      cardId: this.state.card,
      invoiceId: orderId,
      accountId: customer.id,
      amount: parseInt(total, 10),
      email: customer.email
    };

    if (this.mounted) {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["postRequest"])("/order/pay-one-click", params).then(res => {
        if (res.data.success) {
          this.setCartEmpty(bonusesApplied);
          this.setState({
            processing: false
          });
          window.location.href = "#/status/" + orderId;
        } else {
          this.setState({
            errors: res.data.errors
          });
          this.setState({
            processing: false
          });
        }
      });
    }
  }

  setCartEmpty(bonusesApplied) {
    this.props.clearCart();
    this.props.setProfileBonuses(this.props.profile.bonuses - bonusesApplied);
  }

  setAddress(address) {
    const delivery = Object.assign(this.state.delivery_details);
    delivery.address = address;
    this.setState({
      delivery_details: delivery
    });
  }

  setShowAllSlots(type) {
    this.setState({
      showAllSlots: true
    });
  }

  onAuth(data) {
    if (data && data.success === true) {
      this.props.doAuth(data);
      this.onCloseAuth();
    }
  }

  onCloseAuth() {
    this.setState({
      showModal: false
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("page payment", {
        "hide-element": this.props.showMobileAuth
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modals_AuthModal__WEBPACK_IMPORTED_MODULE_8__["default"], {
      modalTitle: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
      modalText: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u043A\u0443\u0434\u0430 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0421\u041C\u0421 \u0441 \u043A\u043E\u0434\u043E\u043C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F",
      modalDescription: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043B\u044F \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430",
      requestAuthCodeApi: "/auth/login-or-register",
      confirmAuthCodeApi: "/auth/dual-confirm",
      isOpen: !this.state.isAuthorized && this.state.showModal,
      onSuccess: this.onAuth.bind(this),
      onClose: this.onCloseAuth.bind(this)
    }), this.state.isAuthorized ? this.content : this.register);
  }

  get register() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "page__container container"
    }, "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043B\u044F \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430.");
  }

  get content() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "page__container container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__blocks-wrapper left"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block"
    }, this.addressesBlockContent), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PersonCount_PersonCount__WEBPACK_IMPORTED_MODULE_11__["default"], {
      cuttlery_quantity: this.state.cuttlery_quantity,
      changePersonCount: this.changePersonCount
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChooseStock_ChooseStock__WEBPACK_IMPORTED_MODULE_12__["default"], {
      bonuses: this.state.bonuses,
      setDueBonus: this.setDueBonus,
      setDuePromo: this.setDuePromo,
      paramsForOrder: this.getParamsForOrder,
      setPromocode: this.setPromocode
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-row payment__block"
    }, this.deliveryBlockContent, this.paymentBlockContent), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-row payment__block"
    }, this.commentBlockContent, this.checkBlockContent), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-row payment__block payment__block--white"
    }, this.bottomBlockContent)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__blocks-wrapper right"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block"
    }, this.basket)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mobile-only"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "page__title"
    }, "\u041E\u043F\u043B\u0430\u0442\u0430")));
  }

  get paymentBlockContent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col col-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-pay-icons"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-title"
    }, "\u041E\u043F\u043B\u0430\u0442\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _google_icon_png__WEBPACK_IMPORTED_MODULE_14___default.a,
      alt: ""
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _apple_icon_png__WEBPACK_IMPORTED_MODULE_13___default.a,
      alt: ""
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-content payment-method"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.state.delivery_method === 1 ? this.pickupPay : "", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: "payment-card",
      name: "payment-method",
      value: "card",
      onClick: this.setPayment.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "payment-card"
    }, "\u041A\u0430\u0440\u0442\u043E\u0439 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435")), this.state.paymentType === "card" ? this.cards : ""), this.state.paymentType === "card" ? this.saveCard : ""));
  }

  get saveCard() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__save"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      name: "save-card",
      id: "save-card",
      className: "checkbox",
      onChange: this.setSaveCard.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "save-card",
      className: "payment__save-card"
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0443 \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435 \u0434\u043B\u044F \u0431\u044B\u0441\u0442\u0440\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0437\u0430\u043A\u0430\u0437\u0430"));
  }

  get pickupPay() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: "on-pickup",
      name: "payment-method",
      value: "on-pickup",
      onClick: this.setPayment.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "on-pickup"
    }, "\u0412 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0435"));
  }

  get deliveryBlockContent() {
    const deliveryText = this.state.delivery_method === 1 ? "Время самовывоза" : "Время доставки";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col col-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-title"
    }, deliveryText), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-content delivery-method"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.props.restaurants.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AsapField__WEBPACK_IMPORTED_MODULE_10__["default"], {
      schedule: this.props.restaurants[0].schedule,
      slots: this.state.slots.today.slots.length,
      setAsap: this.setAsap.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: "delivery-to-time",
      name: "delivery",
      value: "to-time",
      onChange: this.setAsap.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "delivery-to-time"
    }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u043A\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438"))), this.state.delivery_details.asap === false ? this.timeAvailable : ""));
  }

  get commentBlockContent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col col-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-title"
    }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "comment"
    }, "\u0412\u0430\u0448\u0438 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      id: "comment",
      name: "comment",
      value: this.state.delivery_details.comments,
      onChange: this.setComments.bind(this)
    })));
  }

  get errors() {
    return this.state.errors.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block1"
    }, this.state.errors.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValidationResult__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: `error_${index}`,
      error: item.message
    }))) : "";
  }

  get checkBlockContent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col col-2"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-title"
    }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0447\u0435\u043A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__block-content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email"
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      id: "address",
      name: "address",
      className: "as-radio",
      onChange: e => {
        this.setInvoiceSend(e.currentTarget.checked);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "payment__block-email",
      id: "email",
      name: "email",
      value: this.state.invoiceEmail,
      onChange: event => {
        this.setInvoiceEmail(event.currentTarget.value);
      }
    }))));
  }

  get bottomBlockContent() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "payment__accept"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "payment__accept_item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      id: "accept",
      className: "checkbox",
      onChange: e => {
        this.setExtra(e, "personal_agreement");
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "accept"
    }, "\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043D\u0430 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#/legal"
    }, "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "payment__accept"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      className: "checkbox",
      id: "subscribe",
      onChange: e => {
        this.setExtra(e, "subscribe_news");
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "subscribe"
    }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0430\u043A\u0446\u0438\u0438"))), this.errors, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.checkAndCreateOrder.bind(this),
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("btn", {
        "payment__button--disable": this.isButtonCreateOrderDisabled
      }, {
        loading: this.isProcessing
      })
    }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u043D\u0430 ", Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(this.state.total_due)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__order_bonuses"
    }, "\u0411\u0443\u0434\u0435\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E ", Math.ceil(this.state.total_due * this.state.bonusAccrualPercent), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_BonusIcon__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
  }

  get isButtonCreateOrderDisabled() {
    return !this.state.extra.personal_agreement || this.state.payment_method === -1 || !this.state.delivery_details.asap && !this.state.delivery_details.time;
  }

  get isProcessing() {
    return this.state.processing === true;
  }

  get basket() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Order_Order__WEBPACK_IMPORTED_MODULE_6__["default"], {
      bonusAccrualPercent: this.state.bonusAccrualPercent,
      order: this.state.items,
      total: this.state.total,
      total_due: this.state.total_due
    });
  }

  get addressesBlockContent() {
    return this.state.delivery_method === 1 ? this.restaurants : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Addresses__WEBPACK_IMPORTED_MODULE_4__["default"], {
      mode: "payment",
      addresses: this.state.addresses,
      setAddresses: this.props.setAddresses.bind(this),
      setAddress: this.setAddress.bind(this),
      dadataToken: this.props.dadataToken
    });
  }

  get cards() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.cards.map((item, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: `card_${index}`,
      className: "payment__card"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: item.id,
      name: "cards",
      value: item.id,
      onClick: this.setCard.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: item.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_payment_icons__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: item.brand,
      style: {
        margin: 5,
        width: 30
      },
      className: "payment__card_icon"
    }), " **** ", item.number))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__card"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: "new-card",
      name: "cards",
      value: "",
      onClick: this.setCard.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "new-card"
    }, "\u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0440\u0442\u0430")));
  }

  get restaurants() {
    const addresses = this.state.restaurants ? this.state.restaurants.slice() : [];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__restaurants"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "inf-block__title"
    }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u0435"), addresses.map((address, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke",
      key: `address_${index}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "address-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-address-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label address-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      id: "address" + address.id,
      name: "address",
      value: address.id,
      checked: index === 0,
      onChange: () => {
        this.setAddress(address);
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "address" + address.id
    }, address.address))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label address-value"
    }, address.metro), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label address-value"
    }, address.phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label address-value"
    }, address.schedule)))));
  }

  get timeAvailable() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__times"
    }, this.renderTimeSlots("today"), this.state.slots.today.length < 12 || this.state.showAllSlots ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__timeslot-label"
    }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u043E\u0442\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0439 \u0437\u0430\u043A\u0430\u0437 \u043D\u0430 \u0437\u0430\u0432\u0442\u0440\u0430") : "", this.renderTimeSlots("tomorrow"));
  }

  renderTimeSlots(type) {
    const slots = this.state.slots[type].slots;
    const todaySlotsLength = this.state.slots.today.slots.length;
    const tomorrowClass = this.state.delivery_method === 1 ? "" : " payment__timeslot--delivery";
    let visibleSlots = 0;
    const isToday = type === "today";
    const showButtonMore = isToday && todaySlotsLength > 12 || !isToday && todaySlotsLength < 12;

    if (this.state.showAllSlots) {
      visibleSlots = slots.length;
    } else if (isToday) {
      if (todaySlotsLength > 12) {
        visibleSlots = 12;
      } else {
        visibleSlots = todaySlotsLength;
      }
    } else if (todaySlotsLength) {
      visibleSlots = 0;
    } else {
      visibleSlots = 12;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "payment__timeslot-container"
    }, slots && slots.slice(0, visibleSlots).map((item, index) => {
      const isSelected = this.state.delivery_details.time === item && this.state.delivery_details.date === this.state.slots[type].date;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: `timeslot_${index}`,
        className: "payment__timeslot" + tomorrowClass + (isSelected ? " payment__timeslot--selected" : ""),
        onClick: () => {
          this.setTimeslot(this.state.slots[type].date, item);
        }
      }, item);
    }), showButtonMore && !this.state.showAllSlots ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "show-more-slots",
      onClick: () => {
        this.setShowAllSlots(type);
      }
    }, "E\u0449\u0435 \u0432\u0440\u0435\u043C\u044F >") : ""));
  }

}

PaymentArea.propTypes = {
  dadataToken: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  cloudpaymentsPublicId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  clearCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  restaurants: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired,
  cart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired
};
PaymentArea.defaultProps = {
  dadataToken: undefined,
  cloudpaymentsPublicId: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (PaymentArea);

/***/ }),

/***/ "./src/components/Pages/PaymentArea/PersonCount/PersonCount.js":
/*!*********************************************************************!*\
  !*** ./src/components/Pages/PaymentArea/PersonCount/PersonCount.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PersonCount_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PersonCount.scss */ "./src/components/Pages/PaymentArea/PersonCount/PersonCount.scss");
/* harmony import */ var _PersonCount_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PersonCount_scss__WEBPACK_IMPORTED_MODULE_2__);




function PersonCount({
  changePersonCount,
  cuttlery_quantity
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "payment__block payment__block--half"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "payment__block-person-count-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "payment__block-title"
  }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0435\u0440\u0441\u043E\u043D"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "payment__block-input",
    type: "number",
    defaultValue: cuttlery_quantity,
    onChange: changePersonCount
  })));
}

PersonCount.propTypes = {
  changePersonCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  cuttlery_quantity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PersonCount);

/***/ }),

/***/ "./src/components/Pages/PaymentArea/PersonCount/PersonCount.scss":
/*!***********************************************************************!*\
  !*** ./src/components/Pages/PaymentArea/PersonCount/PersonCount.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/PaymentArea/apple-icon.png":
/*!*********************************************************!*\
  !*** ./src/components/Pages/PaymentArea/apple-icon.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA9CAQAAACqopnRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDoAABSCAABFVgAADqXAAAXb9daH5AAAAK4SURBVHjatNhPSBRRHMDx746ZsOWfTIOkVAwrKbS08i9J5aFL4aFOHYIyOpRQ1EGI6OChW0XQobwZRCHYH8iwyyIS1sH+qFSb6XqoCEXIhEU33ddhd915M+OusvN7v9PCm/3Me/Peb37zIPVWxHXeMk83Yq2ERyygUCieyRAeLhOMEgrFAwlkLY9NhELR6j6SxlMLotjlPnPThgy7j9SyaGPOuc+8syF+0t1GDtuQBQ66P5ZOG3NNYrdMW5DbEvulWCPmuSSz92tMiI9yqSy2H4UiQAcNq5lp55ZONdVsJw+DSUbwMbK0//P5S3Cpp0ENTeyjhCzmmGac9/QxiEpG7+Ce7TErxmin1NKzkjv8tPVUKMZpI2t5YiMdS4ndHmHe0EoZmVTQxtCy/SIxxRlnpJFfSS5dbXSxzoqcIuQyolD069CJBJOVWrzAMKJIBZ2kCW2B9WTH3oTDQiMJ005sKFwRQ87HB+VlUojRMneLEPJKzzF9IkiQIjOSK7SQ7+rL7ZjQlJWZEYO9InvFzxedKRVhBvSfBgUizKiVyRZh/liZdBFmjZVZEGHyrcysCLPTykyKMPV6ojGYEGE2U6czfqGX2UX95wGhZLNIlZnJYE4I+kiGGeoXYhQPYwshDdjCIaHnU04BPbEyt1JsNArFazbF1O+i0BQtkdosj0a58xa8HPdEv8DG4tWURIv8+QQ9kgjh+LeA5NN5Ll1GRaI2zjSIIS/1GXwigvyznkxtZUaAuWVfEWddR0bxOi29bpcnrM55hecSkPrw0FuVdkyaSvQkziwnHc7+Vh+fyUmWHC4QThEJULiSM5vT3NdfsQCE8NHLEL8Jkck26mim2OHqQZr5sbJ0t4cB7f6+ctVaSwIemujSqokZbthv0JPwdKqeoxQS5Bs+PiTomcMRdrOBWT7R61TH/h8AOTE+LUF77ccAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/components/Pages/PaymentArea/google-icon.png":
/*!**********************************************************!*\
  !*** ./src/components/Pages/PaymentArea/google-icon.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/google-icon.png";

/***/ }),

/***/ "./src/components/Pages/PaymentArea/index.js":
/*!***************************************************!*\
  !*** ./src/components/Pages/PaymentArea/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PaymentArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentArea */ "./src/components/Pages/PaymentArea/PaymentArea.js");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AC */ "./src/AC/index.js");




function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const mapDispatchToProps = {
  clearCart: _AC__WEBPACK_IMPORTED_MODULE_2__["clearCart"]
};
const ConnectedComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_PaymentArea__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedComponent);

/***/ }),

/***/ "./src/components/Pages/PaymentArea/pay-icons.scss":
/*!*********************************************************!*\
  !*** ./src/components/Pages/PaymentArea/pay-icons.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/PersonalArea/BirthbayField.js":
/*!************************************************************!*\
  !*** ./src/components/Pages/PersonalArea/BirthbayField.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Button */ "./src/components/Button.js");
/* harmony import */ var _ValidationResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ValidationResult */ "./src/components/Pages/ValidationResult.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class BirthbayField extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      birthday: this.props.birthday === null ? "" : this.props.birthday
    });

    _defineProperty(this, "updateBirthday", e => {
      this.setState({
        birthday: e.target.value
      });
    });

    _defineProperty(this, "onSaveBirthday", e => {
      e.preventDefault();
      Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["postRequest"])("/profile/birthday", {
        birthday: this.state.birthday
      }).then(res => {
        if (res && res.data && res.data.success) {
          this.props.setUserProfile(res.data.result);
        } else if (res.data.errors) {
          const error = res.data.errors.map(it => it.message).join(" ");
          this.setState({
            edit: true,
            error
          }, () => {
            if (this.state.edit) {
              Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["focusInputById"])("birthday");
            }
          });
        }
      });
    });
  }

  isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "input-stroke"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label"
    }, "\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"), this.props.birthday !== null // TODO: не должно быть
    && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "personal-input_hidden",
      id: "birthday_static",
      name: "birthday_static",
      autoComplete: "off",
      onChange: () => {},
      value: this.props.birthday
    }), this.props.birthday === null
    /*  TODO: должно быть  */
    && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__container "
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_3___default.a, {
      mask: "99.99.9999",
      value: this.state.birthday,
      onChange: this.updateBirthday,
      alwaysShowMask: true,
      className: "personal-input",
      id: "birthday"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValidationResult__WEBPACK_IMPORTED_MODULE_5__["default"], {
      error: this.state.error
    })), this.props.birthday === null
    /*  TODO: должно быть  */
    && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      buttonType: "default",
      buttonTitle: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
      buttonClass: "personal-button",
      onClickSubmit: true,
      onClickMethod: this.onSaveBirthday
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label_desc"
    }, "\u0412 \u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u044B \u0434\u0430\u0440\u0438\u043C \u0441\u043A\u0438\u0434\u043A\u0438 \u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u0438. \u0414\u0430\u0442\u0430 \u0432\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u0431\u0435\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C."));
  }

}

BirthbayField.propTypes = {
  setUserProfile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  birthday: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
BirthbayField.defaultProps = {
  birthday: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (BirthbayField);

/***/ }),

/***/ "./src/components/Pages/PersonalArea/PersonalArea.js":
/*!***********************************************************!*\
  !*** ./src/components/Pages/PersonalArea/PersonalArea.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_payment_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-payment-icons */ "./node_modules/react-payment-icons/build/index.js");
/* harmony import */ var react_payment_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_payment_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_EditItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/EditItem */ "./src/components/icons/EditItem.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.js");
/* harmony import */ var _icons_BonusIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../icons/BonusIcon */ "./src/components/icons/BonusIcon.js");
/* harmony import */ var _icons_RemoveItemButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/RemoveItemButton */ "./src/components/icons/RemoveItemButton.js");
/* harmony import */ var _icons_mobile_Logout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../icons/mobile/Logout */ "./src/components/icons/mobile/Logout.js");
/* harmony import */ var _Addresses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Addresses */ "./src/components/Pages/Addresses.js");
/* harmony import */ var _Modals_AuthModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Modals/AuthModal */ "./src/components/Modals/AuthModal.js");
/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Email */ "./src/components/Pages/Email.js");
/* harmony import */ var _MyOrders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../MyOrders */ "./src/components/Pages/MyOrders.js");
/* harmony import */ var _BirthbayField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BirthbayField */ "./src/components/Pages/PersonalArea/BirthbayField.js");
/* harmony import */ var _ValidationResult__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ValidationResult */ "./src/components/Pages/ValidationResult.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Button */ "./src/components/Button.js");

















class PersonalArea extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  /**
   * @constructor
   * Method for initialising data
   */
  constructor(props) {
    super(props);
    this.state = {
      birthday: this.props.profile.birthday ? this.stringToDate(this.props.profile.birthday) : "",
      phone: {
        edit: false,
        value: this.props.profile.phone
      },
      name: {
        edit: false,
        value: this.props.profile.firstname,
        error: ""
      },
      cards: this.props.profile.cards ? this.props.profile.cards : [],
      email: this.props.profile.email,
      emailConfirmed: this.props.profile.email_confirmed,
      emailSubscribed: this.props.profile.email_subscribed,
      bonuses: this.props.profile.bonuses,
      orders: this.props.profile.orders ? this.props.profile.orders : [],
      profile: this.props.profile
    };
  }

  componentWillMount() {
    this.setState({
      phoneNumber: this.props.phoneNumber
    });
  }

  repeateOrder(id) {
    const self = this;
    Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["getRequest"])("/order/get?id=" + id).then(res => {
      this.props.loadCart(res.data.result.order.items);
      window.location.href = "#/basket";
    });
  }

  renderOrders() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyOrders__WEBPACK_IMPORTED_MODULE_12__["default"], {
      orders: this.state.orders.items ? this.state.orders.items : [],
      repeateOrder: this.repeateOrder.bind(this)
    });
  }

  async getUserProfile() {
    let profile = {};

    if (typeof this.props.getUserProfile === "function") {
      profile = await this.props.getUserProfile();
      this.props.setUserProfile(Object.assign(true, this.state.profile, profile));
    }
  }

  setUserProfile(profile) {
    if (typeof this.props.setUserProfile === "function") {
      this.props.setUserProfile(Object.assign(true, this.state.profile, profile));
    }
  }

  onSavePhoneEdit(data) {
    if (data && data.success === true) {
      this.setUserProfile(data.result);
    }
  }

  onCancelPhoneEdit() {
    const phone = Object.assign({}, this.state.phone);
    phone.edit = false;
    this.setState({
      phone
    });
  }

  onSaveName(e) {
    e.preventDefault();
    const self = this;
    Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["postRequest"])("/profile/username", {
      firstname: this.state.name.value
    }).then(res => {
      self.onEditFinish("name");

      if (res && res.data) {
        if (res.data.success === true) {
          self.setUserProfile(res.data.result);
        } else if (res.data.errors) {
          const error = res.data.errors.map(it => it.message).join(" ");
          this.onEditError("name", error);
        }
      }
    });
  }

  onSaveEmail(value) {
    this.setState({
      email: value
    });
  }

  saveEmailSubscribe(e) {
    Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["postRequest"])("/profile/subscribe", {
      email_subscribed: e.currentTarget.checked
    }).then(res => {
      if (res && res.data && res.data.success) {
        this.setUserProfile(res.data.result);
      }
    });
  }

  stringToDate(strDate) {
    let result = new Date();

    if (strDate) {
      const parts = strDate.split(".");

      if (parts && parts.length) {
        const year = parseInt(parts[2], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[0]);
        result = new Date(year, month, day);
      }
    }

    return result;
  }

  onEditStart(name) {
    const param = Object.assign({}, this.state[name]);
    const state = {};
    param.edit = true;
    param.error = "";
    state[name] = param;
    this.setState(Object.assign({}, state));
    Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["focusInputById"])(name);
  }

  onEditError(name, error) {
    const param = Object.assign({}, this.state[name]);
    const state = {};
    param.edit = true;
    param.error = error;
    state[name] = param;
    this.setState(Object.assign({}, state));
    Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["focusInputById"])(name);
  }

  onEditFinish(name) {
    const param = Object.assign({}, this.state[name]);
    const state = {};
    param.edit = false;
    param.error = "";
    state[name] = param;
    this.setState(Object.assign({}, state));
  }

  changeField(event, field) {
    const dataFields = Object.assign({}, this.state);
    dataFields[field].value = event.target.value;
    this.setState(dataFields);
  }

  logout() {
    this.props.logout();
  }

  removeCard(id) {
    const self = this;
    Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["postRequest"])("/cards/revoke", {
      id
    }).then(res => {
      if (res.data.success) {
        const cards = this.state.cards.slice();
        let index = -1;
        cards.map((item, i) => {
          if (item.id === id) {
            index = i;
          }
        });
        cards.splice(index, 1);
        self.setState({
          cards
        });
      }
    });
  }

  renderCards() {
    if (this.state.cards && this.state.cards.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "inf-block my-cards"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "inf-block__title"
      }, "\u041C\u043E\u0438 \u043A\u0430\u0440\u0442\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "personal__cards"
      }, this.state.cards.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: "card" + item.id,
        className: "personal__card"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "personal__card-remove",
        onClick: () => {
          this.removeCard(item.id);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_RemoveItemButton__WEBPACK_IMPORTED_MODULE_7__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_payment_icons__WEBPACK_IMPORTED_MODULE_3___default.a, {
        id: item.brand,
        style: {
          width: 80
        },
        className: "personal__card-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "personal__card-title"
      }, "**** ", item.number)))));
    }

    return "";
  }

  renderBonuses() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bonuses"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block-bonuses"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block-bonuses__title"
    }, "\u041F\u043E\u0431\u043E-\u0431\u043E\u043D\u0443\u0441\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bonuses__container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bonuses__value"
    }, this.state.bonuses, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_BonusIcon__WEBPACK_IMPORTED_MODULE_6__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bonuses-desc"
    }, "\u041F\u043E\u0431\u043E-\u0431\u043E\u043D\u0443\u0441\u0430\u043C\u0438 \u043C\u043E\u0436\u043D\u043E \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C 50% \u0437\u0430\u043A\u0430\u0437\u0430. \u0411\u043E\u043D\u0443\u0441\u044B \u0441\u0433\u043E\u0440\u0430\u044E\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u043B\u0433\u043E\u0434\u0430 \u0431\u0435\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.")));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "hide-element": this.props.showMobileAuth
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Modals_AuthModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      modalTitle: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043D\u043E\u043C\u0435\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
      modalText: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u043A\u0443\u0434\u0430 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0421\u041C\u0421 \u0441 \u043A\u043E\u0434\u043E\u043C \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F",
      modalDescription: "",
      requestAuthCodeApi: "/profile/phone",
      confirmAuthCodeApi: "/profile/phone-confirm",
      isOpen: this.state.phone.edit,
      phoneNumber: this.state.phone.value,
      onSuccess: this.onSavePhoneEdit.bind(this),
      onClose: this.onCancelPhoneEdit.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mobile-only"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "page__title"
    }, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "logout-button",
      onClick: this.logout.bind(this)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_mobile_Logout__WEBPACK_IMPORTED_MODULE_8__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "personal-area"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "main"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "mobile-only"
    }, this.renderBonuses()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "inf-block__title"
    }, "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "logout-button",
      onClick: this.logout.bind(this)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_mobile_Logout__WEBPACK_IMPORTED_MODULE_8__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "input-stroke"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label"
    }, "\u0418\u043C\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "input-stroke__container": this.state.name.edit
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "personal-input": this.state.name.edit
      }, {
        "personal-input_hidden": !this.state.name.edit
      }),
      id: "name",
      name: "name",
      autoComplete: "off",
      readOnly: !this.state.name.edit,
      value: this.state.name.value,
      onChange: event => {
        this.changeField(event, "name");
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ValidationResult__WEBPACK_IMPORTED_MODULE_14__["default"], {
      error: this.state.name.error
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "hide-element": !this.state.name.edit,
        "input-stroke__container": this.state.name.edit
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
      buttonType: "default",
      buttonTitle: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
      buttonClass: "personal-button",
      onClickSubmit: true,
      onClickMethod: this.onSaveName.bind(this)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "edit-icon",
      onClick: () => {
        this.onEditStart("name");
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        "hide-element": this.state.name.edit
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_EditItem__WEBPACK_IMPORTED_MODULE_4__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "input-stroke"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label"
    }, "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "personal-input_hidden",
      id: "phone",
      name: "phone",
      readOnly: !this.state.phone.edit,
      autoComplete: "off",
      value: this.state.phone.value,
      onChange: event => {
        this.changeField(event, "phone");
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("edit-icon", {
        "hide-element": this.state.phone.edit
      }),
      onClick: () => {
        this.onEditStart("phone");
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_EditItem__WEBPACK_IMPORTED_MODULE_4__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Email__WEBPACK_IMPORTED_MODULE_11__["default"], {
      setProfileEmail: this.props.setProfileEmail.bind(this),
      setEmail: this.onSaveEmail.bind(this),
      email: this.state.email,
      mode: "cabinet"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BirthbayField__WEBPACK_IMPORTED_MODULE_13__["default"], {
      setUserProfile: this.setUserProfile.bind(this),
      birthday: this.props.profile.birthday
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "input-stroke"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "input-stroke__label input-stroke__label_mailing"
    }, "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "checkbox",
      id: "cbx",
      type: "checkbox",
      disabled: !this.state.emailConfirmed,
      checked: this.state.emailSubscribed,
      onChange: this.saveEmailSubscribe.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: "cbx",
      htmlFor: "cbx"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "input-stroke__label"
    }, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0430\u043A\u0446\u0438\u0438")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Addresses__WEBPACK_IMPORTED_MODULE_9__["default"], {
      mode: "cabinet",
      setAddresses: this.props.setAddresses.bind(this),
      addresses: this.state.profile.addresses,
      dadataToken: this.props.dadataToken
    }), this.renderCards()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sidebar"
    }, this.renderBonuses(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-orders"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "history-orders__title"
    }, "\u041C\u043E\u0438 \u0437\u0430\u043A\u0430\u0437\u044B"), this.renderOrders())))));
  }

}

PersonalArea.propTypes = {
  dadataToken: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  loadCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
PersonalArea.defaultProps = {
  dadataToken: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (PersonalArea);

/***/ }),

/***/ "./src/components/Pages/PersonalArea/index.js":
/*!****************************************************!*\
  !*** ./src/components/Pages/PersonalArea/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PersonalArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonalArea */ "./src/components/Pages/PersonalArea/PersonalArea.js");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../AC */ "./src/AC/index.js");




function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const mapDispatchToProps = {
  loadCart: _AC__WEBPACK_IMPORTED_MODULE_2__["loadCart"]
};
const ConnectedComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_PersonalArea__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedComponent);

/***/ }),

/***/ "./src/components/Pages/PreviousOrder.js":
/*!***********************************************!*\
  !*** ./src/components/Pages/PreviousOrder.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_Burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/Burger */ "./src/components/icons/Burger.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./src/components/Button.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");





class PreviousOrder extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isExpand
    };
  }

  toggleSection() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  get button() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
      buttonType: "default",
      buttonTitle: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437",
      buttonClass: "personal-button order-button",
      onClickMethod: () => {
        this.props.repeateOrder(this.props.item.id);
      },
      onClickSubmit: true
    }));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "previous-order"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "previous-order__inf"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "previous-order__date"
    }, this.props.item.order_date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "previous-order__number"
    }, "\u2116", this.props.item.order_number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "previous-order__price"
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(parseInt(this.props.item.total, 10)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "previous-order__controls"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "burger-wrapper",
      onClick: this.toggleSection.bind(this)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_Burger__WEBPACK_IMPORTED_MODULE_1__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "description"
    }, this.props.item.items.length, " \u043F\u043E\u0437\u0438\u0446\u0438\u0439")), this.state.isOpen && this.props.item.items.map((product, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: 'orderItem' + product.id,
      className: "order__order-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order__item-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order__item-title"
    }, product.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order__item-desc"
    }, product.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order__price"
    }, Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["formatCurrency"])(parseInt(product.price, 10) || product.amount)))), this.state.isOpen && this.button);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PreviousOrder);

/***/ }),

/***/ "./src/components/Pages/Restaurants/RestMap.js":
/*!*****************************************************!*\
  !*** ./src/components/Pages/Restaurants/RestMap.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-yandex-maps */ "./node_modules/react-yandex-maps/dist/react-yandex-maps.umd.production.min.js");
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class RestMap extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      windowSize: screen.width
    });

    _defineProperty(this, "disableDrag", (ref, windowSize) => {
      if (windowSize < 768 && ref) {
        ref.behaviors.disable("drag");
        ref.behaviors.disable("scrollZoom");
      } else if (windowSize > 768 && ref) {
        ref.behaviors.enable("drag");
        ref.behaviors.enable("scrollZoom");
      }
    });
  }

  componentDidMount() {
    window.onresize = () => {
      if (Math.abs(this.state.windowSize - screen.width) > 20) {
        this.setState({
          windowSize: screen.width
        });
      }
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ymap-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__["YMaps"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__["Map"], {
      width: "100%",
      height: "100%",
      instanceRef: ref => this.disableDrag(ref, this.state.windowSize),
      defaultState: {
        center: [59.964199, 30.286271],
        zoom: 12
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__["Polygon"], {
      geometry: [[[59.98095273758984, 30.237067208434553], [59.98176996467162, 30.245993600036076], [59.98207104323072, 30.250971779967752], [59.9822000760582, 30.25629328265322], [59.982286097662815, 30.260327325011414], [59.98224308688845, 30.264962182189425], [59.981812976063146, 30.26899622454782], [59.980995750046574, 30.272944436217667], [59.98060863592076, 30.276635155822245], [59.98086671250898, 30.27843760027993], [59.981425871525516, 30.282385811950206], [59.98176996467162, 30.286076531554787], [59.98203605872816, 30.293681447214436], [59.98184250833623, 30.297672574228542], [59.98165970969197, 30.30050498694836], [59.98126185034675, 30.302908246225662], [59.98054554718461, 30.306120183591588], [59.978712625800014, 30.31801265317377], [59.977572697886814, 30.321660457434266], [59.97555084208789, 30.32547992307135], [59.97258236127084, 30.328998981298856], [59.9681721685699, 30.33243220883776], [59.96539667206764, 30.334663806738345], [59.96118686478915, 30.335110639488175], [59.95821709203058, 30.335368131553697], [59.95615100562895, 30.336655591880795], [59.954429168223065, 30.338157628929178], [59.954084789970246, 30.337985967552104], [59.95113590417692, 30.325154279624822], [59.95290096233952, 30.32197854415131], [59.952857913262065, 30.31584164992527], [59.95145878771878, 30.31120679274731], [59.94749786484798, 30.304726575767553], [59.950533179788394, 30.295971845542823], [59.948036061595815, 30.292667364036554], [59.94991847471461, 30.28635604772391], [59.95252307466168, 30.28953178319747], [59.955493359461556, 30.28142078313647], [59.95329795731782, 30.276914671991573], [59.957194897899434, 30.26580401762643], [59.959196357792926, 30.257907594286586], [59.96057363607796, 30.248208726488702], [59.963564714486196, 30.237651551806316], [59.96853441518721, 30.232808308607424], [59.970023497630415, 30.214968082202255], [59.97383114373223, 30.2125648229248], [59.97686404052915, 30.21441018272761], [59.98095273758984, 30.237067208434553]]],
      options: {
        fillColor: "#00FF00",
        strokeColor: "#0000FF",
        opacity: 0.3,
        strokeWidth: 2,
        strokeStyle: "shortdash"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__["Placemark"], {
      onClick: () => window.open("https://yandex.ru/maps/-/CCarJ-LN", "_blank"),
      geometry: [59.96410237451418, 30.28578632820699],
      properties: {
        hintContent: "Pobo"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__["ZoomControl"], {
      options: {
        size: "small",
        zoomDuration: 1000,
        position: {
          top: 40,
          right: 3
        }
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_yandex_maps__WEBPACK_IMPORTED_MODULE_1__["GeolocationControl"], {
      options: {
        float: "left"
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RestMap);

/***/ }),

/***/ "./src/components/Pages/Restaurants/Restaurants.js":
/*!*********************************************************!*\
  !*** ./src/components/Pages/Restaurants/Restaurants.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _RestMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RestMap */ "./src/components/Pages/Restaurants/RestMap.js");
/* harmony import */ var _rest1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rest1.jpg */ "./src/components/Pages/Restaurants/rest1.jpg");
/* harmony import */ var _rest1_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_rest1_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _restorants_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restorants.scss */ "./src/components/Pages/Restaurants/restorants.scss");
/* harmony import */ var _restorants_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_restorants_scss__WEBPACK_IMPORTED_MODULE_5__);







function RestaurantsArea({
  showMobileAuth,
  restaurants
}) {
  const restaurantsContent = () => restaurants.map(restaurant => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "restourans-item",
    key: restaurant.id
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "restourans-item__photo",
    src: _rest1_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "\u0424\u043E\u0442\u043E \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0430"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "restourant-item__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "restourant-item__title"
  }, restaurant.address), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "restourant-item__metro"
  }, restaurant.metro), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "restourant-item__phone",
    href: `tel:${restaurant.phone}`
  }, restaurant.phone), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "restourant-item__time"
  }, restaurant.schedule))));

  const touchHandl = e => {
    console.log("qwe");
    if (e.touches.length === 1) e.preventDefault;
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("page container", {
      "hide-element": showMobileAuth
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page__container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "restourants__flex-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "restourants__section restourants__list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "restourants__section-title"
  }, "\u0420\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u044B"), restaurantsContent()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "restourants__section restourants__map"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "restourants__section-title"
  }, "\u0417\u043E\u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RestMap__WEBPACK_IMPORTED_MODULE_3__["default"], {
    restaurant: restaurants[0]
  })))));
}

RestaurantsArea.propTypes = {
  showMobileAuth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  restaurants: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Array).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RestaurantsArea);

/***/ }),

/***/ "./src/components/Pages/Restaurants/rest1.jpg":
/*!****************************************************!*\
  !*** ./src/components/Pages/Restaurants/rest1.jpg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/rest1.jpg";

/***/ }),

/***/ "./src/components/Pages/Restaurants/restorants.scss":
/*!**********************************************************!*\
  !*** ./src/components/Pages/Restaurants/restorants.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Pages/SalesArea.js":
/*!*******************************************!*\
  !*** ./src/components/Pages/SalesArea.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SalesArea extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "loadMore", async () => {
      const categoryId = 1;
      const pageSize = 2;
      const currentPage = this.state.page;
      const pagesUrl = `/pages/category?category_id=${categoryId}&page=${currentPage}&page_size=${pageSize}`;
      const response = await Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getRequest"])(pagesUrl);
      this.setState({
        articles: [...this.state.articles, ...response.data.result.items],
        total: response.data.result.total,
        page: currentPage + 1
      });
    });

    this.state = {
      articles: [],
      page: 1,
      total: 0
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('page container', {
        'hide-element': this.props.showMobileAuth
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "page__container market-section"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "page__title container market-section market-section__title"
    }, "\u0410\u043A\u0446\u0438\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1___default.a, {
      pageStart: 1,
      loadMore: this.loadMore,
      hasMore: this.hasMore,
      loader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loader",
        key: 0
      }, "Loading ...")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sales__list"
    }, this.articlesContent))));
  }

  renderArticle(article) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      className: "sales__item sale",
      key: article.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "sale__link",
      href: "#"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "sale__img",
      src: article.image,
      alt: ""
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sale__content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sale__title"
    }, article.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "sale__text"
    }, article.introtext))));
  }

  get articlesContent() {
    return this.state.articles.map(article => this.renderArticle(article));
  }

  get hasMore() {
    return !this.state.total || this.state.total > this.state.articles.length;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SalesArea);

/***/ }),

/***/ "./src/components/Pages/StatusArea.js":
/*!********************************************!*\
  !*** ./src/components/Pages/StatusArea.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Order_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Order/Order */ "./src/components/Pages/Order/Order.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");





class StatusArea extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    const hash = window.location.hash.split("/");

    if (hash.length < 3 || hash.length > 2 && hash[2] === "") {
      if (window.location.hash.indexOf("#/status") !== -1) {
        window.location.hash = "#/";
      }
    }

    this.state = {
      id: hash[hash.length - 1],
      status: {},
      customer: {},
      order: {
        items: [],
        delivery_details: {
          address: {}
        },
        total_due: 0,
        bonuses_accrued: 0
      },
      profile: this.props.profile
    };
  }

  async componentDidMount() {
    const self = this;
    const state = {};

    if (this.state.profile.phone) {
      await Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["postRequest"])("/order/status", {
        id: this.state.id
      }).then(res => {
        if (res && res.data && res.data.success === true) {
          state.status = res.data.result;

          if (res.data.result.current_status && res.data.result.finished !== true) {
            Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["setCookie"])("lastOrder", self.state.id, {
              path: window.location.pathname,
              expires: 86400
            });
          } else {
            Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["deleteCookie"])("lastOrder");
          }
        }
      });
      await Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["getRequest"])("/order/get?id=" + this.state.id).then(res => {
        state.customer = res.data.result.customer;
        state.order = res.data.result.order;
      });
      this.setState(state);
    }
  }

  createNewOrder() {
    window.location.href = "#/";
  }

  get order() {
    let payment = "";
    let address = "";

    if (this.state.order) {
      payment = this.state.order.payment_method === 3 ? "Картой на сайте" : "Оплата в ресторане";

      if (this.state.order.delivery_details.address.address) {
        if (this.state.order.delivery_details.address.address) {
          address += this.state.order.delivery_details.address.address;
        }

        if (this.state.order.delivery_details.address.entrance) {
          address = address + ", парадная " + this.state.order.delivery_details.address.entrance;
        }

        if (this.state.order.delivery_details.address.flat) {
          address = address + ", квартира " + this.state.order.delivery_details.address.flat;
        }
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "inf-block__title"
    }, "\u041B\u0438\u0447\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), this.state.customer.firstname ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.customer.firstname) : "", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block__content"
    }, this.state.customer.phone ? "+" + this.state.customer.phone : "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "inf-block__title"
    }, "\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block__content"
    }, address || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "inf-block__title"
    }, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block__content"
    }, payment || "")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "inf-block"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Order_Order__WEBPACK_IMPORTED_MODULE_2__["default"], {
      order: this.state.order.items,
      total_due: +this.state.order.total_due,
      total: +this.state.order.total,
      bonusAccrualPercent: +this.state.bonusAccrualPercent,
      bonusesAccrued: +this.state.order.bonuses_accrued
    })));
  }

  get estimate() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order-status__timeline order-timeline"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "order-timeline__icon"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      width: "25",
      height: "25",
      viewBox: "0 0 25 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M12.5 0.75C6.03693 0.75 0.75 6.03693 0.75 12.5C0.75 18.9631 6.03693 24.25 12.5 24.25C18.9631 24.25 24.25 18.9631 24.25 12.5C24.25 6.03693 18.9631 0.75 12.5 0.75ZM12.5 22.9833C6.6964 22.9833 2.01667 18.3036 2.01667 12.5C2.01667 6.6964 6.6964 2.01667 12.5 2.01667C18.3036 2.01667 22.9833 6.6964 22.9833 12.5C22.9833 18.3036 18.3036 22.9833 12.5 22.9833Z",
      fill: "#8DD161",
      stroke: "#8DD161",
      strokeWidth: "0.5"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
      d: "M12.501 3.05078C12.3239 3.05078 12.1677 3.13683 12.0607 3.2438C11.9538 3.35076 11.8677 3.50697 11.8677 3.68411V12.2508H6.36771C6.19057 12.2508 6.03435 12.3368 5.92739 12.4438C5.82043 12.5508 5.73438 12.707 5.73438 12.8841C5.73438 13.0613 5.82043 13.2175 5.92739 13.3244C6.03435 13.4314 6.19057 13.5174 6.36771 13.5174H12.501C12.6782 13.5174 12.8344 13.4314 12.9414 13.3244C13.0483 13.2175 13.1344 13.0613 13.1344 12.8841V3.68411C13.1344 3.50697 13.0483 3.35076 12.9414 3.2438C12.8344 3.13683 12.6782 3.05078 12.501 3.05078Z",
      fill: "#8DD161",
      stroke: "#8DD161",
      strokeWidth: "0.5"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "order-timeline__text"
    }, "\u0414\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u043D\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0435"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "order-timeline__time"
    }, this.state.status.estimated_delivery_time));
  }

  get timeline() {
    return this.state.status.status_history && this.state.status.status_history.map((item, index) => {
      const statusClass = item.time ? "complete" : "process";
      const lastClass = item.last ? " last-step" : "";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-steps__row " + statusClass + lastClass,
        key: `step_row${index}`
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-steps__icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "svg svg-check "
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        href: "#check"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-steps__time"
      }, item.time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-steps__name"
      }, item.title));
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      key: "status",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("page order-status", {
        "hide-element": this.props.showMobileAuth
      })
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "page__container container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "status__left-column"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "page__title"
    }, "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order-status__name"
    }, "\u0417\u0430\u043A\u0430\u0437 \u2116 ", this.state.order ? this.state.order.order_number : 0), this.state.status.estimated_delivery_time ? this.estimate : "", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order-status__steps order-steps"
    }, this.timeline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "order-status__btn btn-transparent"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-order-status",
      onClick: this.createNewOrder.bind(this)
    }, "\u041D\u043E\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "status__right-column"
    }, this.order)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StatusArea);

/***/ }),

/***/ "./src/components/Pages/ValidationResult.js":
/*!**************************************************!*\
  !*** ./src/components/Pages/ValidationResult.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class ValidationResult extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    if (this.props.error) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "validation-result"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "validation-result__icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 11 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
        cx: "5.5",
        cy: "6.5",
        r: "5.1",
        stroke: "#FD7065",
        strokeWidth: "0.8"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M5.95047 7.77445L6.13047 3.13945H5.05047L5.23047 7.77445H5.95047ZM5.00547 8.94445C5.00547 9.25945 5.27547 9.52945 5.59047 9.52945C5.90547 9.52945 6.17547 9.25945 6.17547 8.94445C6.17547 8.62945 5.90547 8.35945 5.59047 8.35945C5.27547 8.35945 5.00547 8.62945 5.00547 8.94445Z",
        fill: "#FD7065"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "validation-result__error"
      }, this.props.error));
    }

    return "";
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ValidationResult);

/***/ }),

/***/ "./src/components/ProductCard/ProductCard.jsx":
/*!****************************************************!*\
  !*** ./src/components/ProductCard/ProductCard.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-hash-link */ "./node_modules/react-router-hash-link/lib/index.js");
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_hash_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _HOC_withFetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../HOC/withFetch */ "./src/HOC/withFetch.jsx");
/* harmony import */ var _ProductCard_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductCard.scss */ "./src/components/ProductCard/ProductCard.scss");
/* harmony import */ var _ProductCard_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Hits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Hits */ "./src/components/Hits/index.js");
/* harmony import */ var _product_crumbs_vector_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-crumbs-vector.svg */ "./src/components/ProductCard/product-crumbs-vector.svg");
/* harmony import */ var _product_crumbs_vector_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_product_crumbs_vector_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _product_crumbs_mobile_vector_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-crumbs-mobile-vector.svg */ "./src/components/ProductCard/product-crumbs-mobile-vector.svg");
/* harmony import */ var _product_crumbs_mobile_vector_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_product_crumbs_mobile_vector_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ItemControls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ItemControls */ "./src/components/ItemControls/index.js");
/* harmony import */ var _BasketMobile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../BasketMobile */ "./src/components/BasketMobile/index.js");











const scrollOpt = {
  isDynamic: true,
  offset: -80,
  spy: true
};

function ProductCard({
  showMobileAuth,
  data
}) {
  const product = data.result;
  const {
    title,
    image,
    measure,
    description,
    specifications: spec,
    price,
    categories
  } = product;
  return React.createElement(React.Fragment, null, React.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, React.createElement("title", null, title)), React.createElement("div", {
    className: `product ${showMobileAuth && "hide-element"}`
  }, React.createElement("div", {
    className: "container"
  }, React.createElement(_BasketMobile__WEBPACK_IMPORTED_MODULE_10__["default"], null), React.createElement("div", {
    className: "product-crumbs"
  }, React.createElement("span", {
    className: "product-crumbs__home"
  }, React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/",
    className: "product-crumbs__link"
  }, "Pobo"), React.createElement("img", {
    className: "product-crumbs__vector",
    src: _product_crumbs_vector_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: ""
  })), React.createElement("span", {
    className: "product-crumbs__categories-title"
  }, React.createElement("img", {
    className: "product-crumbs__mobile-vector",
    src: _product_crumbs_mobile_vector_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: ""
  }), React.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_1__["HashLink"], {
    to: `/#${categories[0].alias}` // smooth
    ,
    scroll: el => {
      const elName = el.getAttribute("name");
      react_scroll__WEBPACK_IMPORTED_MODULE_0__["scroller"].scrollTo(elName, scrollOpt);
    },
    className: "product-crumbs__link"
  }, categories[0].title)), React.createElement("span", {
    className: "product-crumbs__title"
  }, React.createElement("img", {
    className: "product-crumbs__vector",
    src: _product_crumbs_vector_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: ""
  }), title)), React.createElement("div", {
    className: "product-card"
  }, React.createElement("div", {
    className: "product-card__img",
    style: {
      backgroundImage: `url(${image})`
    },
    alt: ""
  }), React.createElement("div", {
    className: "product-card__desc"
  }, React.createElement("div", {
    className: "product-card__title-container"
  }, React.createElement("h1", {
    className: "product-card__title"
  }, title), React.createElement("div", {
    className: "product-card__weight"
  }, measure.value, " ", measure.unit), React.createElement("div", {
    className: "product-card__mobile-price"
  }, `${price} ₽`)), React.createElement("h2", {
    className: "product-card__price"
  }, `${price} ₽`), React.createElement("h3", {
    className: "product-card__composition"
  }, "\u0421\u043E\u0441\u0442\u0430\u0432"), React.createElement("div", {
    className: "product-card__composition-text"
  }, description), spec[0] && React.createElement("div", {
    className: "product-card__specs"
  }, React.createElement("span", {
    className: "product-card__spec"
  }, spec[0].value, " ", spec[0].title), React.createElement("span", {
    className: "product-card__spec"
  }, spec[1].value, " ", spec[1].title), React.createElement("span", {
    className: "product-card__spec"
  }, spec[2].value, " ", spec[2].title), React.createElement("span", {
    className: "product-card__spec"
  }, spec[3].value, " ", spec[3].title)), React.createElement(_ItemControls__WEBPACK_IMPORTED_MODULE_9__["default"], {
    product: product
  }))), React.createElement(_Hits__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "\u0425\u0438\u0442\u044B"
  }))));
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    result: PropTypes.instanceOf(Object)
  }).isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  showMobileAuth: PropTypes.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_HOC_withFetch__WEBPACK_IMPORTED_MODULE_4__["default"])("/products/item?alias=", ProductCard));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")))

/***/ }),

/***/ "./src/components/ProductCard/ProductCard.scss":
/*!*****************************************************!*\
  !*** ./src/components/ProductCard/ProductCard.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/ProductCard/index.js":
/*!*********************************************!*\
  !*** ./src/components/ProductCard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard */ "./src/components/ProductCard/ProductCard.jsx");
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AC */ "./src/AC/index.js");



const mapDispatchToProps = {
  addToCart: _AC__WEBPACK_IMPORTED_MODULE_2__["addToCart"],
  removeFromCart: _AC__WEBPACK_IMPORTED_MODULE_2__["removeFromCart"]
};
const ConnectedProductCard = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, mapDispatchToProps)(_ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedProductCard);

/***/ }),

/***/ "./src/components/ProductCard/product-crumbs-mobile-vector.svg":
/*!*********************************************************************!*\
  !*** ./src/components/ProductCard/product-crumbs-mobile-vector.svg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00LjU1NzUxIDkuNDkyNTlMNC41NTc1MiA5LjQ5MjYxQzQuNjE3NDIgOS41NjM1NyA0LjY5OTU3IDkuNjAzOTEgNC43ODY0NiA5LjYwMzkxQzQuODczMzEgOS42MDM5MSA0Ljk1NTIgOS41NjM1OCA1LjAxNDI5IDkuNDkyMTdDNS4xMjkwNiA5LjM1NTc1IDUuMTI3OTYgOS4xNDIzIDUuMDE0NjYgOS4wMDQ4OUw1LjAxNDY2IDkuMDA0ODhMNS4wMTM5MiA5LjAwNEwxLjY0NzgzIDUuMDE2NDhMNS4wMTM5MSAxLjAyODk3QzUuMTI5MDYgMC44OTI1NyA1LjEyODA4IDAuNjc4ODEgNS4wMTQ2NiAwLjU0MTI0NEw1LjAxNDY2IDAuNTQxMjRMNS4wMTM5MSAwLjU0MDM1NUM0Ljk1NTI1IDAuNDcwODU1IDQuODcyNyAwLjQyOTY0OCA0Ljc4NjcxIDAuNDI5NjQ4QzQuNzAzMjYgMC40Mjk2NDggNC42MTk0NSAwLjQ2NjUxOSA0LjU1ODg1IDAuNTQxMTMyTDAuOTg2MTk2IDQuNzczMzVDMC44NzE5MzcgNC45MDg3IDAuODcwNzc2IDUuMTI1NjMgMC45ODY1NTMgNS4yNjAwNEMwLjk4NjY5MiA1LjI2MDIgMC45ODY4MyA1LjI2MDM2IDAuOTg2OTY5IDUuMjYwNTJMNC41NTc1MSA5LjQ5MjU5WiIgZmlsbD0iIzgwODA4MCIgc3Ryb2tlPSIjODA4MDgwIiBzdHJva2Utd2lkdGg9IjAuMiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/components/ProductCard/product-crumbs-vector.svg":
/*!**************************************************************!*\
  !*** ./src/components/ProductCard/product-crumbs-vector.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgNiA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNC4zNDE2MiA0LjM2NDI2TDAuOTkxNzg4IDcuNzE0MDlDMC44Njg5NTEgNy44MzY5MyAwLjg3MDEzMyA4LjAzNDUzIDAuOTkwOTYxIDguMTU4MjRMMC45OTA5NTYgOC4xNTgyNEwwLjk5MTc4OCA4LjE1OTA3QzEuMDUyMjcgOC4yMTk1NiAxLjEzMzI5IDguMjUxODUgMS4yMTMyOSA4LjI1MTg1QzEuMjkwNzcgOC4yNTE4NSAxLjM3MzA5IDguMjIzMiAxLjQzNTUzIDguMTU4MzNMNS4wMDgxIDQuNTg1NzZDNS4xMjk4NCA0LjQ2NDAyIDUuMTMxMjQgNC4yNjM1MSA1LjAwNzc1IDQuMTQyNDFMMS40MzY3OSAwLjU2OTQ2N0wxLjQzNjc3IDAuNTY5NDQ4QzEuMzEzMDEgMC40NDU2ODQgMS4xMTQ0MiAwLjQ0NDMzOCAwLjk5MTM3MiAwLjU2OTg2NEMwLjg2ODk1NCAwLjY5MjczIDAuODcwMjY5IDAuODkwMDMgMC45OTA5NjEgMS4wMTM2TDAuOTkwOTU2IDEuMDEzNkwwLjk5MTc4OCAxLjAxNDQzTDQuMzQxNjIgNC4zNjQyNloiIGZpbGw9IiM4MDgwODAiIHN0cm9rZT0iIzgwODA4MCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/components/icons/AddItem.js":
/*!*****************************************!*\
  !*** ./src/components/icons/AddItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const AddItem = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 14 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "fill-icon",
  d: "M0 6H14V8H0V6Z",
  fill: "#F8819C"
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "fill-icon",
  d: "M8 0L8 14L6 14L6 -8.74228e-08L8 0Z",
  fill: "#F8819C"
}));

/* harmony default export */ __webpack_exports__["default"] = (AddItem);

/***/ }),

/***/ "./src/components/icons/BonusIcon.js":
/*!*******************************************!*\
  !*** ./src/components/icons/BonusIcon.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const BonusIcon = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "19",
    height: "26",
    viewBox: "0 0 19 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 12.2949H4.25987V25.0019H0V12.2949Z",
    fill: "#F8819C"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.15871 7.73533C11.8643 7.73533 14.0576 9.86875 14.0576 12.5005C14.0576 15.1322 11.8643 17.2656 9.15871 17.2656C6.45315 17.2656 4.25987 15.1322 4.25987 12.5005C4.25987 9.86875 6.45315 7.73533 9.15871 7.73533ZM9.15871 3.59174C14.2169 3.59174 18.3174 7.58031 18.3174 12.5005C18.3174 17.4206 14.2169 21.4092 9.15871 21.4092C4.10049 21.4092 0 17.4206 0 12.5005C0 7.58031 4.10049 3.59174 9.15871 3.59174Z",
    fill: "#F8819C"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 12.709H4.25987V0.00196934H0V12.709Z",
    fill: "#F8819C"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BonusIcon);

/***/ }),

/***/ "./src/components/icons/Burger.js":
/*!****************************************!*\
  !*** ./src/components/icons/Burger.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Burger = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "25",
    height: "14",
    viewBox: "0 0 25 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    y: "10.7539",
    width: "24.2",
    height: "2.68889",
    rx: "1",
    fill: "#3D3B3B"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    y: "5.37695",
    width: "24.2",
    height: "2.68889",
    rx: "1",
    fill: "#3D3B3B"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "24.2",
    height: "2.68889",
    rx: "1",
    fill: "#3D3B3B"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Burger);

/***/ }),

/***/ "./src/components/icons/EditItem.js":
/*!******************************************!*\
  !*** ./src/components/icons/EditItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {const EditItem = () => React.createElement("svg", {
  width: "23",
  height: "23",
  viewBox: "0 0 23 23",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, React.createElement("circle", {
  cx: "11.5",
  cy: "11.5",
  r: "11",
  stroke: "#8DD161"
}), React.createElement("path", {
  d: "M17.2554 6.74634C16.8465 6.33753 16.2934 6.12109 15.7163 6.12109C15.1391 6.12109 14.586 6.33753 14.1772 6.74634L7.70827 13.2153C7.66017 13.2634 7.63612 13.2874 7.61208 13.3596L6.14514 17.3997C6.09705 17.5199 6.12109 17.6882 6.21729 17.7844C6.28943 17.8566 6.38562 17.9047 6.48182 17.9047C6.50586 17.9047 6.55396 17.9047 6.57801 17.8806L10.2333 16.7504C10.2814 16.7263 10.3536 16.7023 10.3776 16.6542L17.2313 9.80045C17.6401 9.39163 17.8566 8.83853 17.8566 8.26137C17.8806 7.70827 17.6642 7.15516 17.2554 6.74634ZM9.8245 16.1011L8.45376 16.5339C8.38161 16.2934 8.26137 16.1011 8.06899 15.9327C7.9247 15.7884 7.75636 15.6682 7.56398 15.572L8.18923 13.8405H9.03091V14.586C9.03091 14.8025 9.19925 14.9467 9.39163 14.9467H10.089L9.8245 16.1011ZM15.2353 10.7864L10.7624 15.2594L10.8826 14.6582C10.9067 14.5379 10.8826 14.4417 10.8105 14.3455C10.7383 14.2494 10.6421 14.2013 10.5219 14.2013H9.7764V13.4558C9.7764 13.2634 9.60807 13.095 9.41568 13.095H8.83853L13.2153 8.76638L14.3696 7.63612L14.7063 7.29945C14.9708 7.03492 15.3315 6.89063 15.7163 6.89063C16.1011 6.89063 16.4618 7.03492 16.7263 7.29945C16.9908 7.56398 17.1351 7.9247 17.1351 8.30947C17.1351 8.69424 16.9908 9.05496 16.7263 9.31949L16.3896 9.65616L15.2353 10.7864Z",
  fill: "#8DD161"
}));

/* harmony default export */ __webpack_exports__["default"] = (EditItem);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/components/icons/EmptyBasketIcon.js":
/*!*************************************************!*\
  !*** ./src/components/icons/EmptyBasketIcon.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const EmptyBasketIcon = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "53",
    height: "46",
    viewBox: "0 0 53 46",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.8456 30.6664H44.6152C45.2992 30.6664 45.9016 30.2166 46.0854 29.5522L52.211 8.08571C52.3437 7.62571 52.2519 7.12483 51.966 6.73639C51.6801 6.34795 51.2207 6.12306 50.7409 6.12306H13.3131L12.2207 1.18577C12.0573 0.500885 11.4346 0 10.7199 0H1.53141C0.684032 0 0 0.684883 0 1.53332C0 2.38176 0.684032 3.06664 1.53141 3.06664H9.49477C9.68875 3.94574 14.7322 26.6695 15.0283 27.978C13.405 28.6833 12.2615 30.3086 12.2615 32.1997C12.2615 34.7348 14.3238 36.7997 16.8558 36.7997H44.6254C45.4728 36.7997 46.1568 36.1148 46.1568 35.2664C46.1568 34.4179 45.4728 33.733 44.6254 33.733H16.8456C15.9982 33.733 15.3141 33.0482 15.3141 32.1997C15.3141 31.3513 15.9982 30.6664 16.8456 30.6664ZM48.7092 9.19992L43.4615 27.5998H18.0707L13.9869 9.19992H48.7092Z",
    fill: "#474A51"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.3125 41.4007C15.3125 43.9358 17.3748 46.0007 19.9067 46.0007C22.4387 46.0007 24.501 43.9358 24.501 41.4007C24.501 38.8657 22.4387 36.8008 19.9067 36.8008C17.3748 36.8008 15.3125 38.8657 15.3125 41.4007ZM19.9067 39.8674C20.7541 39.8674 21.4382 40.5523 21.4382 41.4007C21.4382 42.2492 20.7541 42.9341 19.9067 42.9341C19.0594 42.9341 18.3753 42.2492 18.3753 41.4007C18.3753 40.5523 19.0594 39.8674 19.9067 39.8674Z",
    fill: "#474A51"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36.957 41.4007C36.957 43.9358 39.0193 46.0007 41.5513 46.0007C44.0832 46.0007 46.1455 43.9358 46.1455 41.4007C46.1455 38.8657 44.0832 36.8008 41.5513 36.8008C39.0193 36.8008 36.957 38.8657 36.957 41.4007ZM41.5513 39.8674C42.3987 39.8674 43.0827 40.5523 43.0827 41.4007C43.0827 42.2492 42.3987 42.9341 41.5513 42.9341C40.7039 42.9341 40.0199 42.2492 40.0199 41.4007C40.0199 40.5523 40.7039 39.8674 41.5513 39.8674Z",
    fill: "#474A51"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EmptyBasketIcon);

/***/ }),

/***/ "./src/components/icons/FacebookIcon.js":
/*!**********************************************!*\
  !*** ./src/components/icons/FacebookIcon.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Facebook = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "25",
    height: "25",
    viewBox: "0 0 25 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.7364 0H4.06977C1.74419 0 0 1.74419 0 4.06977V20.9302C0 23.062 1.74419 25 4.06977 25H20.9302C23.062 25 25 23.2558 25 20.9302V4.06977C24.8062 1.74419 23.062 0 20.7364 0ZM22.093 20.7364C22.093 21.5116 21.5116 22.093 20.7364 22.093H12.5969V16.2791H15.5039V13.7597H12.5969V11.4341C12.5969 9.30233 14.3411 7.55814 16.4729 7.55814V5.03876C12.9845 5.03876 10.0775 7.94574 10.0775 11.4341V13.7597H7.17054V16.2791H10.0775V22.093H4.06977C3.29457 22.093 2.71318 21.5116 2.71318 20.7364V4.06977C2.71318 3.29457 3.29457 2.71318 4.06977 2.71318H20.9302C21.7054 2.71318 22.2868 3.29457 22.2868 4.06977V20.7364H22.093Z",
    fill: "#F8819C"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Facebook);

/***/ }),

/***/ "./src/components/icons/InstagramIcon.js":
/*!***********************************************!*\
  !*** ./src/components/icons/InstagramIcon.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Instagram = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "26",
    height: "25",
    viewBox: "0 0 26 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12.4825 7.28125C9.16748 7.28125 6.4375 9.9636 6.4375 13.2207C6.4375 16.4779 9.16748 19.1602 12.4825 19.1602C15.7974 19.1602 18.5274 16.4779 18.5274 13.2207C18.5274 9.9636 15.7974 7.28125 12.4825 7.28125ZM12.4825 16.8611C10.5325 16.8611 8.77749 15.3283 8.77749 13.2207C8.77749 11.3048 10.3375 9.58041 12.4825 9.58041C14.4325 9.58041 16.1874 11.1132 16.1874 13.2207C16.1874 15.1367 14.4325 16.8611 12.4825 16.8611Z",
    fill: "#F8819C"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M20.8649 0H4.09497C1.75499 0 0 1.72432 0 4.02342V20.6919C0 22.7994 1.75499 24.7153 4.09497 24.7153H21.0599C23.2048 24.7153 25.1548 22.991 25.1548 20.6919V4.02342C24.9598 1.72432 23.2048 0 20.8649 0ZM22.2298 20.5003C22.2298 21.2667 21.6448 21.8414 20.8649 21.8414H4.09497C3.31498 21.8414 2.72998 21.2667 2.72998 20.5003V4.02342C2.72998 3.25705 3.31498 2.68228 4.09497 2.68228H16.7699V5.74774H19.4999V2.68228H20.8649C21.6448 2.68228 22.2298 3.25705 22.2298 4.02342V20.5003Z",
    fill: "#F8819C"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Instagram);

/***/ }),

/***/ "./src/components/icons/LogoIcon.js":
/*!******************************************!*\
  !*** ./src/components/icons/LogoIcon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Logo = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "159",
    height: "51",
    viewBox: "0 0 159 51",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M58.4915 34.9645C63.6633 34.9645 67.8558 30.6794 67.8558 25.3935C67.8558 20.1076 63.6633 15.8226 58.4915 15.8226C53.3198 15.8226 49.1272 20.1076 49.1272 25.3935C49.1272 30.6794 53.3198 34.9645 58.4915 34.9645ZM58.4915 43.2871C68.1604 43.2871 75.9987 35.2759 75.9987 25.3935C75.9987 15.5112 68.1604 7.5 58.4915 7.5C48.8226 7.5 40.9844 15.5112 40.9844 25.3935C40.9844 35.2759 48.8226 43.2871 58.4915 43.2871Z",
    fill: "black"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.5071 34.9645C22.6789 34.9645 26.8714 30.6794 26.8714 25.3935C26.8714 20.1076 22.6789 15.8226 17.5071 15.8226C12.3354 15.8226 8.14286 20.1076 8.14286 25.3935C8.14286 30.6794 12.3354 34.9645 17.5071 34.9645ZM17.5071 43.2871C27.1761 43.2871 35.0143 35.2759 35.0143 25.3935C35.0143 15.5112 27.1761 7.5 17.5071 7.5C7.83821 7.5 0 15.5112 0 25.3935C0 35.2759 7.83821 43.2871 17.5071 43.2871Z",
    fill: "black"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 24.9785H8.14286V50.5011H0V24.9785Z",
    fill: "black"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M141.492 16.0355C146.663 16.0355 150.856 20.3206 150.856 25.6065C150.856 30.8924 146.663 35.1774 141.492 35.1774C136.32 35.1774 132.127 30.8924 132.127 25.6065C132.127 20.3206 136.32 16.0355 141.492 16.0355ZM141.492 7.71291C151.16 7.71291 158.999 15.7241 158.999 25.6065C158.999 35.4888 151.16 43.5 141.492 43.5C131.823 43.5 123.984 35.4888 123.984 25.6065C123.984 15.7241 131.823 7.71291 141.492 7.71291Z",
    fill: "black"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M100.507 16.0355C105.679 16.0355 109.871 20.3206 109.871 25.6065C109.871 30.8924 105.679 35.1774 100.507 35.1774C95.3354 35.1774 91.1429 30.8924 91.1429 25.6065C91.1429 20.3206 95.3354 16.0355 100.507 16.0355ZM100.507 7.71291C110.176 7.71291 118.014 15.7241 118.014 25.6065C118.014 35.4888 110.176 43.5 100.507 43.5C90.8382 43.5 83 35.4888 83 25.6065C83 15.7241 90.8382 7.71291 100.507 7.71291Z",
    fill: "black"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M83 26.0215H91.1429V0.498905H83V26.0215Z",
    fill: "black"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/icons/ModalHide.js":
/*!*******************************************!*\
  !*** ./src/components/icons/ModalHide.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const ModalHide = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "18.5208",
    height: "2.6916",
    rx: "1",
    transform: "matrix(0.707096 0.707118 -0.707096 0.707118 1.90625 0)",
    fill: "#3D3B3B"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "18.5207",
    height: "2.69159",
    rx: "1",
    transform: "matrix(0.707098 -0.707115 0.707098 0.707115 0 13.0967)",
    fill: "#3D3B3B"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ModalHide);

/***/ }),

/***/ "./src/components/icons/RemoveItem.js":
/*!********************************************!*\
  !*** ./src/components/icons/RemoveItem.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const RemoveItem = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
  width: "13",
  height: "2",
  viewBox: "0 0 13 2",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  className: "fill-icon",
  d: "M0 0H13V2H0V0Z",
  fill: "#F8819C"
}));

/* harmony default export */ __webpack_exports__["default"] = (RemoveItem);

/***/ }),

/***/ "./src/components/icons/RemoveItemButton.js":
/*!**************************************************!*\
  !*** ./src/components/icons/RemoveItemButton.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {const RemoveItemButton = () => React.createElement("svg", {
  width: "23",
  height: "23",
  viewBox: "0 0 23 23",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, React.createElement("circle", {
  cx: "11.5",
  cy: "11.5",
  r: "11",
  stroke: "#8DD161"
}), React.createElement("rect", {
  width: "12.9209",
  height: "1.87778",
  rx: "0.938891",
  transform: "matrix(0.708013 0.706199 -0.708013 0.706199 7.32812 6)",
  fill: "#8DD161"
}), React.createElement("rect", {
  width: "12.9209",
  height: "1.87778",
  rx: "0.938889",
  transform: "matrix(0.708016 -0.706196 0.708016 0.706196 6 15.125)",
  fill: "#8DD161"
}));

/* harmony default export */ __webpack_exports__["default"] = (RemoveItemButton);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/components/icons/RubleIcon.js":
/*!*******************************************!*\
  !*** ./src/components/icons/RubleIcon.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const RubleIcon = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "9",
    fill: "#8DD161"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.4016 6.83155C14.4016 6.35224 14.3148 5.91325 14.1414 5.52578C13.9704 5.14503 13.7126 4.80011 13.3706 4.50222C13.0286 4.20434 12.6296 3.97812 12.1885 3.82806C11.7425 3.67576 11.2344 3.59961 10.6793 3.59961H5.89885V8.65021V8.7398V8.96377H5.65103H5.55191H3.60156V10.0657H5.55439H5.65351H5.90133V10.2897V10.3793V11.3379V11.4275V11.6515H5.65351H5.55439H3.60156V12.5809H5.55439H5.65351H5.90133V12.8049V12.8945V14.3996H7.28169V12.8945V12.8049V12.5809H7.52951H7.62864H12.1018V11.6492H7.62616H7.52703H7.27921V11.4252V11.3357V10.377V10.2875V10.0635H7.52703H7.62616H10.6793C11.2344 10.0635 11.7425 9.98733 12.1885 9.83503C12.6296 9.68497 13.0286 9.45875 13.3706 9.16087C13.7126 8.86299 13.9704 8.51807 14.1414 8.13507C14.3123 7.74984 14.4016 7.31085 14.4016 6.83155ZM12.2753 8.37472C11.8218 8.76668 11.2245 8.96377 10.5009 8.96377H7.62616H7.52703H7.27921V8.7398V8.65021V5.01512V4.92553V4.70156H7.52703H7.62616H10.4984C11.222 4.70156 11.8193 4.9009 12.2728 5.29061C12.7313 5.68704 12.9642 6.20442 12.9642 6.83155C12.9667 7.46091 12.7337 7.97829 12.2753 8.37472Z",
    fill: "white"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RubleIcon);

/***/ }),

/***/ "./src/components/icons/mobile/BasketMobile.js":
/*!*****************************************************!*\
  !*** ./src/components/icons/mobile/BasketMobile.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(React) {const BasketMobile = () => React.createElement("svg", {
  width: "80",
  height: "80",
  viewBox: "0 0 80 80",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, React.createElement("g", {
  filter: "url(#filter0_d)"
}, React.createElement("rect", {
  x: "10",
  y: "4",
  width: "60",
  height: "60",
  rx: "30",
  fill: "#8DD161"
})), React.createElement("path", {
  d: "M28 28H52V41C52 42.6569 50.6569 44 49 44H31C29.3431 44 28 42.6569 28 41V28Z",
  stroke: "white",
  strokeWidth: "2"
}), React.createElement("path", {
  d: "M34 23C34 21.8954 34.8954 21 36 21H44C45.1046 21 46 21.8954 46 23V28H34V23Z",
  stroke: "white",
  strokeWidth: "2"
}), React.createElement("defs", null, React.createElement("filter", {
  id: "filter0_d",
  x: "0",
  y: "0",
  width: "80",
  height: "80",
  filterUnits: "userSpaceOnUse",
  colorInterpolationFilters: "sRGB"
}, React.createElement("feFlood", {
  floodOpacity: "0",
  result: "BackgroundImageFix"
}), React.createElement("feColorMatrix", {
  in: "SourceAlpha",
  type: "matrix",
  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
}), React.createElement("feOffset", {
  dy: "6"
}), React.createElement("feGaussianBlur", {
  stdDeviation: "5"
}), React.createElement("feColorMatrix", {
  type: "matrix",
  values: "0 0 0 0 0.232128 0 0 0 0 0.41048 0 0 0 0 0.1178 0 0 0 0.4 0"
}), React.createElement("feBlend", {
  mode: "normal",
  in2: "BackgroundImageFix",
  result: "effect1_dropShadow"
}), React.createElement("feBlend", {
  mode: "normal",
  in: "SourceGraphic",
  in2: "effect1_dropShadow",
  result: "shape"
}))));

/* harmony default export */ __webpack_exports__["default"] = (BasketMobile);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/components/icons/mobile/Burger.js":
/*!***********************************************!*\
  !*** ./src/components/icons/mobile/Burger.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const BurgerMobile = ({
  open
}) => {
  if (open) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      y: "13",
      width: "18",
      height: "2.61417",
      rx: "1",
      transform: "rotate(-45 0 13)",
      fill: "#FDFDFD"
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      x: "2",
      width: "18",
      height: "2.61417",
      rx: "1",
      transform: "rotate(45 2 0)",
      fill: "#FDFDFD"
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "18",
    height: "15",
    viewBox: "0 0 18 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "18",
    height: "2.61417",
    rx: "1",
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    y: "12.1992",
    width: "18",
    height: "2.61417",
    rx: "1",
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    y: "6.09961",
    width: "18",
    height: "2.61418",
    rx: "1",
    fill: "white"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BurgerMobile);

/***/ }),

/***/ "./src/components/icons/mobile/Logo.js":
/*!*********************************************!*\
  !*** ./src/components/icons/mobile/Logo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const LogoMobile = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "68",
    height: "22",
    viewBox: "0 0 68 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.7962 15.3707C26.9885 15.3707 28.7657 13.5542 28.7657 11.3135C28.7657 9.07287 26.9885 7.25644 24.7962 7.25644C22.6039 7.25644 20.8267 9.07287 20.8267 11.3135C20.8267 13.5542 22.6039 15.3707 24.7962 15.3707ZM24.7962 18.8986C28.8949 18.8986 32.2175 15.5026 32.2175 11.3135C32.2175 7.12445 28.8949 3.72852 24.7962 3.72852C20.6976 3.72852 17.375 7.12445 17.375 11.3135C17.375 15.5026 20.6976 18.8986 24.7962 18.8986Z",
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.42124 15.3707C9.61353 15.3707 11.3907 13.5542 11.3907 11.3135C11.3907 9.07287 9.61353 7.25644 7.42124 7.25644C5.22894 7.25644 3.45174 9.07287 3.45174 11.3135C3.45174 13.5542 5.22894 15.3707 7.42124 15.3707ZM7.42124 18.8986C11.5199 18.8986 14.8425 15.5026 14.8425 11.3135C14.8425 7.12445 11.5199 3.72852 7.42124 3.72852C3.3226 3.72852 0 7.12445 0 11.3135C0 15.5026 3.3226 18.8986 7.42124 18.8986Z",
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 11.1367H3.45174V21.9557H0V11.1367Z",
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M59.9798 7.34809C62.1721 7.34809 63.9493 9.16452 63.9493 11.4052C63.9493 13.6459 62.1721 15.4623 59.9798 15.4623C57.7875 15.4623 56.0103 13.6459 56.0103 11.4052C56.0103 9.16452 57.7875 7.34809 59.9798 7.34809ZM59.9798 3.82017C64.0785 3.82017 67.4011 7.2161 67.4011 11.4052C67.4011 15.5943 64.0785 18.9902 59.9798 18.9902C55.8812 18.9902 52.5586 15.5943 52.5586 11.4052C52.5586 7.2161 55.8812 3.82017 59.9798 3.82017Z",
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M42.6048 7.34809C44.7971 7.34809 46.5743 9.16452 46.5743 11.4052C46.5743 13.6459 44.7971 15.4623 42.6048 15.4623C40.4125 15.4623 38.6353 13.6459 38.6353 11.4052C38.6353 9.16452 40.4125 7.34809 42.6048 7.34809ZM42.6048 3.82017C46.7035 3.82017 50.0261 7.2161 50.0261 11.4052C50.0261 15.5943 46.7035 18.9902 42.6048 18.9902C38.5062 18.9902 35.1836 15.5943 35.1836 11.4052C35.1836 7.2161 38.5062 3.82017 42.6048 3.82017Z",
    fill: "white"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M35.1836 11.582H38.6353V0.763069H35.1836V11.582Z",
    fill: "white"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LogoMobile);

/***/ }),

/***/ "./src/components/icons/mobile/Logout.js":
/*!***********************************************!*\
  !*** ./src/components/icons/mobile/Logout.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Logout = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 19 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.50176 18.2578C8.50176 18.666 8.16777 19 7.75957 19H0.742188C0.333984 19 0 18.666 0 18.2578V0.742188C0 0.333984 0.333984 0 0.742188 0H7.75957C8.16777 0 8.50176 0.333984 8.50176 0.742188C8.50176 1.15039 8.16777 1.48438 7.75957 1.48438H1.48438V17.5156H7.75957C8.17148 17.5156 8.50176 17.8496 8.50176 18.2578Z",
    fill: "#8DD161"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M18.7848 8.97646L14.584 4.77568C14.2945 4.48623 13.8232 4.48623 13.5338 4.77568C13.2443 5.06514 13.2443 5.53643 13.5338 5.82588L16.4654 8.75752H3.5625C3.1543 8.75752 2.82031 9.0915 2.82031 9.49971C2.82031 9.90791 3.1543 10.2419 3.5625 10.2419H16.4654L13.5338 13.1735C13.2443 13.463 13.2443 13.9343 13.5338 14.2237C13.8232 14.5132 14.2945 14.5132 14.584 14.2237L18.7811 10.0267C18.8813 9.92647 18.9555 9.79287 18.9852 9.64814C19.0334 9.41064 18.9629 9.15459 18.7848 8.97646Z",
    fill: "#8DD161"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Logout);

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: elsInCart, checkItemInCart2, getPrice1, getTotalCount, setCartPrice, isEmpty, getTotalPrice, getCart, addItemToCart, removeAllItemsFromCart, getCookie, setCookie, deleteCookie, loadCart, focusInputById, formatCurrency, formatBonus, getRequest, postRequest, setDeliveryMethod, getDeliveryMethod, getBoulTitle, fbPixel, checkItemInCart, getRequestHeaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elsInCart", function() { return elsInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkItemInCart2", function() { return checkItemInCart2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrice1", function() { return getPrice1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalCount", function() { return getTotalCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCartPrice", function() { return setCartPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalPrice", function() { return getTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemToCart", function() { return addItemToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllItemsFromCart", function() { return removeAllItemsFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCookie", function() { return deleteCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCart", function() { return loadCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusInputById", function() { return focusInputById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatBonus", function() { return formatBonus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequest", function() { return getRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRequest", function() { return postRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeliveryMethod", function() { return setDeliveryMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeliveryMethod", function() { return getDeliveryMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoulTitle", function() { return getBoulTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fbPixel", function() { return fbPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkItemInCart", function() { return checkItemInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestHeaders", function() { return getRequestHeaders; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactjs-localstorage */ "./node_modules/reactjs-localstorage/react-localstorage.js");
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-facebook-pixel */ "./node_modules/react-facebook-pixel/dist/fb-pixel.js");
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_facebook_pixel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/config */ "./common/config.js");
/* harmony import */ var _common_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_config__WEBPACK_IMPORTED_MODULE_3__);





function getCart() {
  const cart = reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].getObject("cart");
  return cart.items ? cart.items : [];
}

function getRequest(requestApi) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_common_config__WEBPACK_IMPORTED_MODULE_3__["requestUri"] + requestApi, getRequestHeaders());
}

function fbPixel(content_name) {
  react_facebook_pixel__WEBPACK_IMPORTED_MODULE_2___default.a.track("Lead", {
    content_name
  });
}

function postRequest(requestApi, requestParams) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(_common_config__WEBPACK_IMPORTED_MODULE_3__["requestUri"] + requestApi, requestParams, getRequestHeaders());
}

function getRequestHeaders() {
  const token = getCookie("authToken");
  const headers = token ? {
    headers: {
      Authorization: "Bearer " + token
    }
  } : undefined;
  return headers;
}

function findIndexItem(cartItems, product) {
  let elementId = -1;
  cartItems.forEach((element, index) => {
    if (element.itemData.id === product.id) {
      elementId = index;
    }
  });
  return elementId;
}

function elsInCart(cart, id) {
  let itemsInCart = 0;
  cart.forEach(element => {
    const elementId = element.itemData ? element.itemData.id : element.id;

    if (elementId === id) {
      itemsInCart = element.numberItems;
    }
  });
  return itemsInCart;
}

function setDeliveryMethod(type) {
  reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].setObject("delivery", {
    delivery: type
  });
}

function getDeliveryMethod() {
  return reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].getObject("delivery");
}

function getCartItem(item, count) {
  if (item.type !== "set") {
    item.type = "product";
  }

  return {
    inCart: true,
    numberItems: count,
    itemData: item
  };
}

function removeAllItemsFromCart(product) {
  const cartItems = getCart();
  const elementId = findIndexItem(cartItems, product);

  if (elementId > -1) {
    cartItems.splice(elementId, 1);
  }

  reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].setObject("cart", {
    items: cartItems
  });
  return cartItems;
}

function loadCart(items) {
  const products = [];
  items.map((item, i) => {
    products.push(getCartItem(item, item.quantity ? item.quantity : 1));
  });
  reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].setObject("cart", {
    items: products
  });
  return products;
}

function checkItemInCart(id) {
  const cart = getCart();
  const item = cart.filter(product => product.itemData.id === id);
  return !!item[0];
}

function checkItemInCart2(cart, id) {
  const item = cart.filter(product => product.itemData.id === id);
  return !!item[0];
}

function addItemToCart(product) {
  const cartItems = getCart();
  const elementId = findIndexItem(cartItems, product);

  if (elementId > -1) {
    cartItems[elementId].numberItems += 1;
  } else {
    cartItems.push(getCartItem(product, 1));
  }

  reactjs_localstorage__WEBPACK_IMPORTED_MODULE_1__["reactLocalStorage"].setObject("cart", {
    items: cartItems
  });
  return cartItems;
}

function getTotalPrice() {
  const cart = getCart();
  let cartPrice = 0;
  cart.forEach(element => {
    cartPrice += parseInt(element.itemData.price ? element.itemData.price : element.itemData.amount, 10) * element.numberItems;
  });
  return cartPrice;
}

function getPrice1(cart) {
  let cartPrice = 0;
  cart.forEach(el => {
    cartPrice += parseInt(el.itemData.price ? el.itemData.price : el.itemData.amount, 10) * el.numberItems;
  });
  return cartPrice;
}
function getTotalCount(cart) {
  let count = 0;
  cart.forEach(element => {
    if (element.numberItems) {
      count += parseInt(element.numberItems, 10);
    }
  });
  return count;
}

function getCookie(name) {
  const matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
  options = options || {};
  let expires = options.expires;
  const date = new Date();
  let propName;
  let propValue;
  let updatedCookie;

  if (typeof expires === "number" && expires) {
    date.setTime(date.getTime() + expires * 1000);
    expires = options.expires = date;
  }

  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);
  updatedCookie = name + "=" + value;

  for (propName in options) {
    updatedCookie += "; " + propName;
    propValue = options[propName];

    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  setCookie(name, "", {
    expires: -1
  });
}

function getBoulTitle(groups) {
  let title = "";
  groups.map((item, i) => {
    item.ingredients && item.ingredients.map((ingredient, index) => {
      if (i > 0) {
        title += ingredient.title.toLowerCase() + ", ";
      } else {
        title += ingredient.title + ", ";
      }
    });
  });
  title = title.substr(0, title.length - 2);
  return title;
}

function focusInputById(id) {
  setTimeout(() => {
    const input = document.getElementById(id);

    if (input) {
      input.focus();
    }
  }, 0);
}

function formatCurrency(value) {
  return value !== null && value !== undefined ? `${value} ₽` : "";
}

function formatBonus(value) {
  return value;
}

function setCartPrice() {// const price = formatCurrency(getTotalPrice());
  // document.getElementById("cart-price").innerHTML = price;
  // document.getElementsByClassName("mobile-basket-button")[0].innerHTML = price;
}
function isEmpty(obj) {
  return Object.keys(obj).length < 1;
}


/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(ReactDOM, React) {/* harmony import */ var core_js_modules_esnext_aggregate_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/esnext.aggregate-error */ "./node_modules/core-js/modules/esnext.aggregate-error.js");
/* harmony import */ var core_js_modules_esnext_aggregate_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_aggregate_error__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_array_last_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.array.last-index */ "./node_modules/core-js/modules/esnext.array.last-index.js");
/* harmony import */ var core_js_modules_esnext_array_last_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_array_last_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_array_last_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/esnext.array.last-item */ "./node_modules/core-js/modules/esnext.array.last-item.js");
/* harmony import */ var core_js_modules_esnext_array_last_item__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_array_last_item__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_composite_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.composite-key */ "./node_modules/core-js/modules/esnext.composite-key.js");
/* harmony import */ var core_js_modules_esnext_composite_key__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_composite_key__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_composite_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.composite-symbol */ "./node_modules/core-js/modules/esnext.composite-symbol.js");
/* harmony import */ var core_js_modules_esnext_composite_symbol__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_composite_symbol__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_delete_all__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.map.delete-all */ "./node_modules/core-js/modules/esnext.map.delete-all.js");
/* harmony import */ var core_js_modules_esnext_map_delete_all__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_every__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.map.every */ "./node_modules/core-js/modules/esnext.map.every.js");
/* harmony import */ var core_js_modules_esnext_map_every__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/esnext.map.filter */ "./node_modules/core-js/modules/esnext.map.filter.js");
/* harmony import */ var core_js_modules_esnext_map_filter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_find__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/esnext.map.find */ "./node_modules/core-js/modules/esnext.map.find.js");
/* harmony import */ var core_js_modules_esnext_map_find__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_find_key__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/esnext.map.find-key */ "./node_modules/core-js/modules/esnext.map.find-key.js");
/* harmony import */ var core_js_modules_esnext_map_find_key__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_from__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/esnext.map.from */ "./node_modules/core-js/modules/esnext.map.from.js");
/* harmony import */ var core_js_modules_esnext_map_from__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_from__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_group_by__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/esnext.map.group-by */ "./node_modules/core-js/modules/esnext.map.group-by.js");
/* harmony import */ var core_js_modules_esnext_map_group_by__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_group_by__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_includes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/esnext.map.includes */ "./node_modules/core-js/modules/esnext.map.includes.js");
/* harmony import */ var core_js_modules_esnext_map_includes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_esnext_map_key_by__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/esnext.map.key-by */ "./node_modules/core-js/modules/esnext.map.key-by.js");
/* harmony import */ var core_js_modules_esnext_map_key_by__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_by__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_esnext_map_key_of__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/esnext.map.key-of */ "./node_modules/core-js/modules/esnext.map.key-of.js");
/* harmony import */ var core_js_modules_esnext_map_key_of__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_map_map_keys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/esnext.map.map-keys */ "./node_modules/core-js/modules/esnext.map.map-keys.js");
/* harmony import */ var core_js_modules_esnext_map_map_keys__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_map_map_values__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/esnext.map.map-values */ "./node_modules/core-js/modules/esnext.map.map-values.js");
/* harmony import */ var core_js_modules_esnext_map_map_values__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_map_merge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/esnext.map.merge */ "./node_modules/core-js/modules/esnext.map.merge.js");
/* harmony import */ var core_js_modules_esnext_map_merge__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_map_of__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/esnext.map.of */ "./node_modules/core-js/modules/esnext.map.of.js");
/* harmony import */ var core_js_modules_esnext_map_of__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_of__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_map_reduce__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/esnext.map.reduce */ "./node_modules/core-js/modules/esnext.map.reduce.js");
/* harmony import */ var core_js_modules_esnext_map_reduce__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_esnext_map_some__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/esnext.map.some */ "./node_modules/core-js/modules/esnext.map.some.js");
/* harmony import */ var core_js_modules_esnext_map_some__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_map_update__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.map.update */ "./node_modules/core-js/modules/esnext.map.update.js");
/* harmony import */ var core_js_modules_esnext_map_update__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_math_clamp__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.math.clamp */ "./node_modules/core-js/modules/esnext.math.clamp.js");
/* harmony import */ var core_js_modules_esnext_math_clamp__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_clamp__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_math_deg_per_rad__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.math.deg-per-rad */ "./node_modules/core-js/modules/esnext.math.deg-per-rad.js");
/* harmony import */ var core_js_modules_esnext_math_deg_per_rad__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_deg_per_rad__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_math_degrees__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.math.degrees */ "./node_modules/core-js/modules/esnext.math.degrees.js");
/* harmony import */ var core_js_modules_esnext_math_degrees__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_degrees__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_math_fscale__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/esnext.math.fscale */ "./node_modules/core-js/modules/esnext.math.fscale.js");
/* harmony import */ var core_js_modules_esnext_math_fscale__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_fscale__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_math_iaddh__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/esnext.math.iaddh */ "./node_modules/core-js/modules/esnext.math.iaddh.js");
/* harmony import */ var core_js_modules_esnext_math_iaddh__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_iaddh__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_math_imulh__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.math.imulh */ "./node_modules/core-js/modules/esnext.math.imulh.js");
/* harmony import */ var core_js_modules_esnext_math_imulh__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_imulh__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_math_isubh__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.math.isubh */ "./node_modules/core-js/modules/esnext.math.isubh.js");
/* harmony import */ var core_js_modules_esnext_math_isubh__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_isubh__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_math_rad_per_deg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/esnext.math.rad-per-deg */ "./node_modules/core-js/modules/esnext.math.rad-per-deg.js");
/* harmony import */ var core_js_modules_esnext_math_rad_per_deg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_rad_per_deg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_esnext_math_radians__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/esnext.math.radians */ "./node_modules/core-js/modules/esnext.math.radians.js");
/* harmony import */ var core_js_modules_esnext_math_radians__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_radians__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_esnext_math_scale__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/esnext.math.scale */ "./node_modules/core-js/modules/esnext.math.scale.js");
/* harmony import */ var core_js_modules_esnext_math_scale__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_scale__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_esnext_math_seeded_prng__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/esnext.math.seeded-prng */ "./node_modules/core-js/modules/esnext.math.seeded-prng.js");
/* harmony import */ var core_js_modules_esnext_math_seeded_prng__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_seeded_prng__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_esnext_math_signbit__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/esnext.math.signbit */ "./node_modules/core-js/modules/esnext.math.signbit.js");
/* harmony import */ var core_js_modules_esnext_math_signbit__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_signbit__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_esnext_math_umulh__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/esnext.math.umulh */ "./node_modules/core-js/modules/esnext.math.umulh.js");
/* harmony import */ var core_js_modules_esnext_math_umulh__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_umulh__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_esnext_number_from_string__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/esnext.number.from-string */ "./node_modules/core-js/modules/esnext.number.from-string.js");
/* harmony import */ var core_js_modules_esnext_number_from_string__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_number_from_string__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_esnext_observable__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/esnext.observable */ "./node_modules/core-js/modules/esnext.observable.js");
/* harmony import */ var core_js_modules_esnext_observable__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_observable__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_esnext_promise_all_settled__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/esnext.promise.all-settled */ "./node_modules/core-js/modules/esnext.promise.all-settled.js");
/* harmony import */ var core_js_modules_esnext_promise_all_settled__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_promise_all_settled__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_esnext_promise_any__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/esnext.promise.any */ "./node_modules/core-js/modules/esnext.promise.any.js");
/* harmony import */ var core_js_modules_esnext_promise_any__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_promise_any__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_esnext_promise_try__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/esnext.promise.try */ "./node_modules/core-js/modules/esnext.promise.try.js");
/* harmony import */ var core_js_modules_esnext_promise_try__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_promise_try__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_esnext_reflect_define_metadata__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/esnext.reflect.define-metadata */ "./node_modules/core-js/modules/esnext.reflect.define-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_define_metadata__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_define_metadata__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_esnext_reflect_delete_metadata__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/esnext.reflect.delete-metadata */ "./node_modules/core-js/modules/esnext.reflect.delete-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_delete_metadata__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_delete_metadata__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_esnext_reflect_get_metadata__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/esnext.reflect.get-metadata */ "./node_modules/core-js/modules/esnext.reflect.get-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_get_metadata__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_get_metadata__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_esnext_reflect_get_metadata_keys__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/esnext.reflect.get-metadata-keys */ "./node_modules/core-js/modules/esnext.reflect.get-metadata-keys.js");
/* harmony import */ var core_js_modules_esnext_reflect_get_metadata_keys__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_get_metadata_keys__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_esnext_reflect_get_own_metadata__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/esnext.reflect.get-own-metadata */ "./node_modules/core-js/modules/esnext.reflect.get-own-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_get_own_metadata__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_get_own_metadata__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_esnext_reflect_get_own_metadata_keys__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/esnext.reflect.get-own-metadata-keys */ "./node_modules/core-js/modules/esnext.reflect.get-own-metadata-keys.js");
/* harmony import */ var core_js_modules_esnext_reflect_get_own_metadata_keys__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_get_own_metadata_keys__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_esnext_reflect_has_metadata__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/esnext.reflect.has-metadata */ "./node_modules/core-js/modules/esnext.reflect.has-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_has_metadata__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_has_metadata__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_esnext_reflect_has_own_metadata__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/esnext.reflect.has-own-metadata */ "./node_modules/core-js/modules/esnext.reflect.has-own-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_has_own_metadata__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_has_own_metadata__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_esnext_reflect_metadata__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/esnext.reflect.metadata */ "./node_modules/core-js/modules/esnext.reflect.metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_metadata__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_metadata__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_esnext_set_add_all__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/esnext.set.add-all */ "./node_modules/core-js/modules/esnext.set.add-all.js");
/* harmony import */ var core_js_modules_esnext_set_add_all__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_add_all__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_esnext_set_delete_all__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/esnext.set.delete-all */ "./node_modules/core-js/modules/esnext.set.delete-all.js");
/* harmony import */ var core_js_modules_esnext_set_delete_all__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_delete_all__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_esnext_set_difference__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/esnext.set.difference */ "./node_modules/core-js/modules/esnext.set.difference.js");
/* harmony import */ var core_js_modules_esnext_set_difference__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_difference__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_esnext_set_every__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/esnext.set.every */ "./node_modules/core-js/modules/esnext.set.every.js");
/* harmony import */ var core_js_modules_esnext_set_every__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_every__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_esnext_set_filter__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/esnext.set.filter */ "./node_modules/core-js/modules/esnext.set.filter.js");
/* harmony import */ var core_js_modules_esnext_set_filter__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_filter__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_esnext_set_find__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/esnext.set.find */ "./node_modules/core-js/modules/esnext.set.find.js");
/* harmony import */ var core_js_modules_esnext_set_find__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_find__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_esnext_set_from__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/esnext.set.from */ "./node_modules/core-js/modules/esnext.set.from.js");
/* harmony import */ var core_js_modules_esnext_set_from__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_from__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_esnext_set_intersection__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/esnext.set.intersection */ "./node_modules/core-js/modules/esnext.set.intersection.js");
/* harmony import */ var core_js_modules_esnext_set_intersection__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_intersection__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/esnext.set.is-disjoint-from */ "./node_modules/core-js/modules/esnext.set.is-disjoint-from.js");
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_disjoint_from__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var core_js_modules_esnext_set_is_subset_of__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/esnext.set.is-subset-of */ "./node_modules/core-js/modules/esnext.set.is-subset-of.js");
/* harmony import */ var core_js_modules_esnext_set_is_subset_of__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_subset_of__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var core_js_modules_esnext_set_is_superset_of__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/esnext.set.is-superset-of */ "./node_modules/core-js/modules/esnext.set.is-superset-of.js");
/* harmony import */ var core_js_modules_esnext_set_is_superset_of__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_superset_of__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var core_js_modules_esnext_set_join__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/esnext.set.join */ "./node_modules/core-js/modules/esnext.set.join.js");
/* harmony import */ var core_js_modules_esnext_set_join__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_join__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var core_js_modules_esnext_set_map__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/esnext.set.map */ "./node_modules/core-js/modules/esnext.set.map.js");
/* harmony import */ var core_js_modules_esnext_set_map__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_map__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var core_js_modules_esnext_set_of__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/esnext.set.of */ "./node_modules/core-js/modules/esnext.set.of.js");
/* harmony import */ var core_js_modules_esnext_set_of__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_of__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var core_js_modules_esnext_set_reduce__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/esnext.set.reduce */ "./node_modules/core-js/modules/esnext.set.reduce.js");
/* harmony import */ var core_js_modules_esnext_set_reduce__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_reduce__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var core_js_modules_esnext_set_some__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/esnext.set.some */ "./node_modules/core-js/modules/esnext.set.some.js");
/* harmony import */ var core_js_modules_esnext_set_some__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_some__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/esnext.set.symmetric-difference */ "./node_modules/core-js/modules/esnext.set.symmetric-difference.js");
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_symmetric_difference__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var core_js_modules_esnext_set_union__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/esnext.set.union */ "./node_modules/core-js/modules/esnext.set.union.js");
/* harmony import */ var core_js_modules_esnext_set_union__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_union__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var core_js_modules_esnext_string_at__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! core-js/modules/esnext.string.at */ "./node_modules/core-js/modules/esnext.string.at.js");
/* harmony import */ var core_js_modules_esnext_string_at__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_at__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var core_js_modules_esnext_string_code_points__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! core-js/modules/esnext.string.code-points */ "./node_modules/core-js/modules/esnext.string.code-points.js");
/* harmony import */ var core_js_modules_esnext_string_code_points__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_code_points__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var core_js_modules_esnext_string_replace_all__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! core-js/modules/esnext.string.replace-all */ "./node_modules/core-js/modules/esnext.string.replace-all.js");
/* harmony import */ var core_js_modules_esnext_string_replace_all__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_replace_all__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var core_js_modules_esnext_symbol_dispose__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! core-js/modules/esnext.symbol.dispose */ "./node_modules/core-js/modules/esnext.symbol.dispose.js");
/* harmony import */ var core_js_modules_esnext_symbol_dispose__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_symbol_dispose__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var core_js_modules_esnext_symbol_observable__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! core-js/modules/esnext.symbol.observable */ "./node_modules/core-js/modules/esnext.symbol.observable.js");
/* harmony import */ var core_js_modules_esnext_symbol_observable__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_symbol_observable__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var core_js_modules_esnext_symbol_pattern_match__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! core-js/modules/esnext.symbol.pattern-match */ "./node_modules/core-js/modules/esnext.symbol.pattern-match.js");
/* harmony import */ var core_js_modules_esnext_symbol_pattern_match__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_symbol_pattern_match__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var core_js_modules_esnext_weak_map_delete_all__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! core-js/modules/esnext.weak-map.delete-all */ "./node_modules/core-js/modules/esnext.weak-map.delete-all.js");
/* harmony import */ var core_js_modules_esnext_weak_map_delete_all__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_map_delete_all__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var core_js_modules_esnext_weak_map_from__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! core-js/modules/esnext.weak-map.from */ "./node_modules/core-js/modules/esnext.weak-map.from.js");
/* harmony import */ var core_js_modules_esnext_weak_map_from__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_map_from__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var core_js_modules_esnext_weak_map_of__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! core-js/modules/esnext.weak-map.of */ "./node_modules/core-js/modules/esnext.weak-map.of.js");
/* harmony import */ var core_js_modules_esnext_weak_map_of__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_map_of__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var core_js_modules_esnext_weak_set_add_all__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! core-js/modules/esnext.weak-set.add-all */ "./node_modules/core-js/modules/esnext.weak-set.add-all.js");
/* harmony import */ var core_js_modules_esnext_weak_set_add_all__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_set_add_all__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var core_js_modules_esnext_weak_set_delete_all__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! core-js/modules/esnext.weak-set.delete-all */ "./node_modules/core-js/modules/esnext.weak-set.delete-all.js");
/* harmony import */ var core_js_modules_esnext_weak_set_delete_all__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_set_delete_all__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var core_js_modules_esnext_weak_set_from__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! core-js/modules/esnext.weak-set.from */ "./node_modules/core-js/modules/esnext.weak-set.from.js");
/* harmony import */ var core_js_modules_esnext_weak_set_from__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_set_from__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var core_js_modules_esnext_weak_set_of__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! core-js/modules/esnext.weak-set.of */ "./node_modules/core-js/modules/esnext.weak-set.of.js");
/* harmony import */ var core_js_modules_esnext_weak_set_of__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_set_of__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! core-js/modules/web.immediate */ "./node_modules/core-js/modules/web.immediate.js");
/* harmony import */ var core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_immediate__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./components/App */ "./src/components/App/index.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./store/store */ "./src/store/store.js");




















































































ReactDOM.render(React.createElement(react_redux__WEBPACK_IMPORTED_MODULE_81__["Provider"], {
  store: _store_store__WEBPACK_IMPORTED_MODULE_83__["default"]
}, React.createElement(_components_App__WEBPACK_IMPORTED_MODULE_82__["default"], null)), document.getElementById("app"));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"), __webpack_require__(/*! react */ "./node_modules/react/index.js")))

/***/ }),

/***/ "./src/reducers/cartReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/cartReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactjs-localstorage */ "./node_modules/reactjs-localstorage/react-localstorage.js");
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AC */ "./src/AC/index.js");
/* harmony import */ var _store_initState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/initState */ "./src/store/initState.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers.js");





function cartReducer(cart = _store_initState__WEBPACK_IMPORTED_MODULE_2__["default"].cart, {
  type,
  item,
  items,
  id
}) {
  switch (type) {
    case _AC__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART"]:
      {
        const newCart = [...cart];
        const findId = newCart.findIndex(cartItem => cartItem.itemData.id === item.id);

        if (findId > -1) {
          newCart[findId].numberItems += 1;
        } else {
          newCart.push({
            inCart: true,
            itemData: { ...item,
              type: "product"
            },
            numberItems: 1
          });
        }

        Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["fbPixel"])("micro");
        reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0__["reactLocalStorage"].setObject("cart", {
          items: newCart
        });
        return newCart;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FROM_CART"]:
      {
        const newCart = [...cart];
        const findId = newCart.findIndex(cartItem => cartItem.itemData.id === id);

        if (newCart[findId].numberItems > 1) {
          newCart[findId].numberItems -= 1;
        } else {
          newCart.splice(findId, 1);
        }

        reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0__["reactLocalStorage"].setObject("cart", {
          items: newCart
        });
        return newCart;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_1__["REMOVE_ALL_ITEMS_FROM_CART"]:
      {
        const newCart = [...cart];
        const findId = newCart.findIndex(cartItem => cartItem.itemData.id === id);
        newCart.splice(findId, 1);
        reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0__["reactLocalStorage"].setObject("cart", {
          items: newCart
        });
        return newCart;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_1__["LOAD_CART"]:
      {
        const newCart = items.map(el => getCartItem(el));
        reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0__["reactLocalStorage"].setObject("cart", {
          items: newCart
        });
        return newCart;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_1__["CLEAR_CART"]:
      {
        reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0__["reactLocalStorage"].setObject("cart", {
          items: []
        });
        return [];
      }

    default:
      {
        return cart;
      }
  }
}

function getCartItem(item) {
  return {
    inCart: true,
    numberItems: item.quantity ? item.quantity : 1,
    itemData: { ...item,
      type: "product"
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (cartReducer);

/***/ }),

/***/ "./src/reducers/categoriesReducer.js":
/*!*******************************************!*\
  !*** ./src/reducers/categoriesReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./src/AC/index.js");
/* harmony import */ var _store_initState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/initState */ "./src/store/initState.js");



function categoriesReducer(categories = _store_initState__WEBPACK_IMPORTED_MODULE_1__["default"].categories, {
  type,
  payload: data
}) {
  switch (type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES"]:
      {
        return data.result.items;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_CATEGORIES"] + _AC__WEBPACK_IMPORTED_MODULE_0__["ERR"]:
      {
        console.log(data);
        return categories;
      }

    default:
      {
        return categories;
      }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (categoriesReducer);

/***/ }),

/***/ "./src/reducers/definitionsReducer.js":
/*!********************************************!*\
  !*** ./src/reducers/definitionsReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./src/AC/index.js");
/* harmony import */ var _store_initState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/initState */ "./src/store/initState.js");



function definitionsReducer(definitions = _store_initState__WEBPACK_IMPORTED_MODULE_1__["default"].definitions, {
  type,
  payload: data
}) {
  switch (type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_DEFINITIONS"]:
      {
        return data.result;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_DEFINITIONS"] + _AC__WEBPACK_IMPORTED_MODULE_0__["ERR"]:
      {
        console.log(data);
        return definitions;
      }

    default:
      {
        return definitions;
      }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (definitionsReducer);

/***/ }),

/***/ "./src/reducers/hitsReducer.js":
/*!*************************************!*\
  !*** ./src/reducers/hitsReducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./src/AC/index.js");
/* harmony import */ var _store_initState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/initState */ "./src/store/initState.js");



function hitsReducer(hits = _store_initState__WEBPACK_IMPORTED_MODULE_1__["default"].hits, {
  type,
  payload: data
}) {
  switch (type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_HITS"]:
      {
        return data.result.items;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_HITS"] + _AC__WEBPACK_IMPORTED_MODULE_0__["ERR"]:
      {
        console.log(data);
        return hits;
      }

    default:
      {
        return hits;
      }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hitsReducer);

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _hitsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hitsReducer */ "./src/reducers/hitsReducer.js");
/* harmony import */ var _productsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productsReducer */ "./src/reducers/productsReducer.js");
/* harmony import */ var _definitionsReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./definitionsReducer */ "./src/reducers/definitionsReducer.js");
/* harmony import */ var _categoriesReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoriesReducer */ "./src/reducers/categoriesReducer.js");
/* harmony import */ var _profileReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profileReducer */ "./src/reducers/profileReducer.js");
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartReducer */ "./src/reducers/cartReducer.js");







const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  hits: _hitsReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  products: _productsReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  definitions: _definitionsReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  categories: _categoriesReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  profile: _profileReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  cart: _cartReducer__WEBPACK_IMPORTED_MODULE_6__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/reducers/productsReducer.js":
/*!*****************************************!*\
  !*** ./src/reducers/productsReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./src/AC/index.js");
/* harmony import */ var _store_initState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/initState */ "./src/store/initState.js");



function productsReducer(products = _store_initState__WEBPACK_IMPORTED_MODULE_1__["default"].products, {
  type,
  payload: data
}) {
  switch (type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS"]:
      {
        return data.result.items;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS"] + _AC__WEBPACK_IMPORTED_MODULE_0__["ERR"]:
      {
        console.log(data);
        return products;
      }

    default:
      {
        return products;
      }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (productsReducer);

/***/ }),

/***/ "./src/reducers/profileReducer.js":
/*!****************************************!*\
  !*** ./src/reducers/profileReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AC */ "./src/AC/index.js");
/* harmony import */ var _store_initState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/initState */ "./src/store/initState.js");



function definitionsReducer(profile = _store_initState__WEBPACK_IMPORTED_MODULE_1__["default"].profile, {
  type,
  payload: data
}) {
  switch (type) {
    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE"]:
      {
        return data.result;
      }

    case _AC__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE"] + _AC__WEBPACK_IMPORTED_MODULE_0__["ERR"]:
      {
        console.log(data);
        return profile;
      }

    default:
      {
        return profile;
      }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (definitionsReducer);

/***/ }),

/***/ "./src/store/initState.js":
/*!********************************!*\
  !*** ./src/store/initState.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactjs-localstorage */ "./node_modules/reactjs-localstorage/react-localstorage.js");
/* harmony import */ var reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0__);

const initState = {
  hits: [],
  cart: reactjs_localstorage__WEBPACK_IMPORTED_MODULE_0__["reactLocalStorage"].getObject("cart").items || [],
  products: [],
  categories: [],
  profile: {},
  definitions: {
    layout: {
      company_phone: "",
      restaurants: [],
      social_links: {},
      frontpage_slider: [],
      mobile_slider: []
    },
    orders: {
      min_amount_for_delivery: 0,
      bonus_accrual_percent: 0
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (initState);

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-api-middleware */ "./node_modules/redux-api-middleware/lib/index.umd.js");
/* harmony import */ var redux_api_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/reducers/index.js");
/* harmony import */ var _initState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initState */ "./src/store/initState.js");




const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], _initState__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_api_middleware__WEBPACK_IMPORTED_MODULE_1__["apiMiddleware"]));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ })

/******/ });
//# sourceMappingURL=main.5a856620f3419a73caab.js.map