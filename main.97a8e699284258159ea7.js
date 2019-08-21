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
/*! exports provided: GET_HITS, GET_PRODUCTS, GET_DEFINITIONS, GET_PROFILE, getHits, getProducts, getDefinitions, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_HITS", function() { return GET_HITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS", function() { return GET_PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_DEFINITIONS", function() { return GET_DEFINITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHits", function() { return getHits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefinitions", function() { return getDefinitions; });
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
/*! exports provided: GET_HITS, GET_PRODUCTS, GET_DEFINITIONS, GET_PROFILE, getHits, getProducts, getDefinitions, getProfile, GET_CART, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_ITEMS_FROM_CART, CLEAR_CART, LOAD_CART, addToCart, removeFromCart, removeAllItemsFromCart, loadCart, clearCart, START, ERR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ACgetData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ACgetData */ "./src/AC/ACgetData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_HITS", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["GET_HITS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PRODUCTS", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["GET_PRODUCTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_DEFINITIONS", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["GET_DEFINITIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["GET_PROFILE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getHits", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["getHits"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["getProducts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefinitions", function() { return _ACgetData__WEBPACK_IMPORTED_MODULE_0__["getDefinitions"]; });

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
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-sticky */ "./node_modules/react-sticky/lib/index.js");
/* harmony import */ var react_sticky__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_sticky__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _MainContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MainContent */ "./src/components/MainContent.js");
/* harmony import */ var _Modals_AuthModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Modals/AuthModal */ "./src/components/Modals/AuthModal.js");
/* harmony import */ var _Pages_PersonalArea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Pages/PersonalArea */ "./src/components/Pages/PersonalArea/index.js");
/* harmony import */ var _Pages_SalesArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Pages/SalesArea */ "./src/components/Pages/SalesArea.js");
/* harmony import */ var _Pages_Legal_Legal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Pages/Legal/Legal */ "./src/components/Pages/Legal/Legal.js");
/* harmony import */ var _Pages_About_About__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Pages/About/About */ "./src/components/Pages/About/About.js");
/* harmony import */ var _Pages_Restaurants_Restaurants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Pages/Restaurants/Restaurants */ "./src/components/Pages/Restaurants/Restaurants.js");
/* harmony import */ var _Pages_BasketArea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Pages/BasketArea */ "./src/components/Pages/BasketArea/index.js");
/* harmony import */ var _Pages_PaymentArea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Pages/PaymentArea */ "./src/components/Pages/PaymentArea/index.js");
/* harmony import */ var _Pages_StatusArea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Pages/StatusArea */ "./src/components/Pages/StatusArea.js");
/* harmony import */ var _Pages_Constructor_Constructor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Pages/Constructor/Constructor */ "./src/components/Pages/Constructor/Constructor.js");
/* harmony import */ var _Pages_MobileAuthArea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Pages/MobileAuthArea */ "./src/components/Pages/MobileAuthArea.js");
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ProductCard */ "./src/components/ProductCard/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















class App extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onHashChange", () => {
      const hash = window.location.hash;

      if (!this.state.authorization.authorized) {
        if (hash === "#/cabinet" || hash === "#/payment") {
          window.location.hash = "#/";
          return;
        }
      }

      if (this.state.showMobileAuth) {
        this.setState({
          showMobileAuth: false
        });
      }

      if (hash[2] !== "#") {
        window.scrollTo(0, 0);
      }
    });

    _defineProperty(this, "getUserProfile", async () => {
      const token = Object(_helpers__WEBPACK_IMPORTED_MODULE_19__["getCookie"])("authToken");
      let profile = {};

      if (token) {
        await Object(_helpers__WEBPACK_IMPORTED_MODULE_19__["getRequest"])("/profile?addresses=true&orders=true&cards=true").then(res => {
          if (res && res.data && res.data.success === true) {
            profile = res.data.result;
          }
        });
      }

      return profile;
    });

    _defineProperty(this, "logout", () => {
      Object(_helpers__WEBPACK_IMPORTED_MODULE_19__["deleteCookie"])("authToken");
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
      authorization.authorized = Object(_helpers__WEBPACK_IMPORTED_MODULE_19__["getCookie"])("authToken");
      authorization.show = false;
      this.setState({
        authorization,
        navigateRequest: ""
      });
    });

    _defineProperty(this, "doAuth", data => {
      if (data && !!data.token) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_19__["setCookie"])("authToken", data.token, {
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
        authorized: Object(_helpers__WEBPACK_IMPORTED_MODULE_19__["getCookie"])("authToken")
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
    const {
      products,
      definitions,
      getProducts,
      getDefinitions
    } = this.props;
    if (!definitions.length) getDefinitions();
    if (!products.length) getProducts();
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
    return React.createElement(_Pages_MobileAuthArea__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onShowUserProfile: this.showUserProfile,
      profile: this.state.profile
    });
  }

  render() {
    const {
      products,
      definitions
    } = this.props;
    const {
      authorization,
      showMobileAuth,
      category,
      profile
    } = this.state;
    const categories = products.map(item => item.category);
    return React.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_2__["StickyContainer"], null, React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["HashRouter"], null, React.createElement(react_sticky__WEBPACK_IMPORTED_MODULE_2__["Sticky"], null, ({
      style,
      isSticky
    }) => React.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        "sticky-header": isSticky
      }),
      style: {
        zIndex: "11000",
        backgroundColor: "#fff",
        ...style
      }
    }, React.createElement(_Modals_AuthModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      modalTitle: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F",
      modalText: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D, \u043A\u0443\u0434\u0430 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0421\u041C\u0421 \u0441 \u043A\u043E\u0434\u043E\u043C \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u0438",
      modalDescription: "\u0422\u0443\u0434\u0430 \u0436\u0435 \u0431\u0443\u0434\u0443\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u044B \u043F\u043E\u0431\u043E\u043D\u0443\u0441\u044B",
      requestAuthCodeApi: "/auth/login-or-register",
      confirmAuthCodeApi: "/auth/dual-confirm",
      isOpen: authorization.show && !authorization.authorized,
      onClose: this.closeAuth,
      onSuccess: this.doAuth
    }), React.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      categories: categories,
      profile: profile,
      category: category,
      setShowMobileMenu: this.setShowMobileMenu,
      showMobileAuth: showMobileAuth,
      onShowUserProfile: this.showUserProfile,
      authorized: this.state.authorization.authorized
    }))), showMobileAuth ? this.mobileAuth : "", React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], null, products.map(product => product.items.map(item => React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: `/${item.alias}`,
      key: item.id,
      exact: true,
      component: () => React.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_18__["default"], {
        product: item,
        urlAdd: item.alias,
        showMobileAuth: showMobileAuth
      })
    }))), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/",
      exact: true,
      component: () => React.createElement(_MainContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        slides: definitions.layout.frontpage_slider,
        mobileSlides: definitions.layout.mobile_slider,
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/cabinet",
      component: () => React.createElement(_Pages_PersonalArea__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      component: () => React.createElement(_Pages_SalesArea__WEBPACK_IMPORTED_MODULE_9__["default"], {
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/legal",
      component: () => React.createElement(_Pages_Legal_Legal__WEBPACK_IMPORTED_MODULE_10__["default"], {
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/about",
      component: () => React.createElement(_Pages_About_About__WEBPACK_IMPORTED_MODULE_11__["default"], {
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/restaurants",
      component: () => React.createElement(_Pages_Restaurants_Restaurants__WEBPACK_IMPORTED_MODULE_12__["default"], {
        restaurants: definitions.layout.restaurants,
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/basket",
      component: () => React.createElement(_Pages_BasketArea__WEBPACK_IMPORTED_MODULE_13__["default"], {
        pageTitle: "Pobo - \u041A\u043E\u0440\u0437\u0438\u043D\u0430",
        min_amount_for_delivery: definitions.orders.min_amount_for_delivery,
        showMobileAuth: showMobileAuth,
        onNavigateRequest: this.onNavigateRequest
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/payment",
      component: () => React.createElement(_Pages_PaymentArea__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      component: () => React.createElement(_Pages_Constructor_Constructor__WEBPACK_IMPORTED_MODULE_16__["default"], {
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/status/:id",
      component: () => React.createElement(_Pages_StatusArea__WEBPACK_IMPORTED_MODULE_15__["default"], {
        profile: profile,
        showMobileAuth: showMobileAuth
      })
    }), React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], {
      path: "/status/",
      component: () => React.createElement(_Pages_StatusArea__WEBPACK_IMPORTED_MODULE_15__["default"], {
        profile: profile,
        showMobileAuth: showMobileAuth
      })
    })), React.createElement(_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      showMobileAuth: showMobileAuth,
      companyPhone: definitions.layout.company_phone,
      socialLinks: definitions.layout.social_links,
      authorized: authorization.authorized
    })));
  }

}

App.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
  definitions: PropTypes.instanceOf(Object).isRequired,
  profile: PropTypes.instanceOf(Object).isRequired,
  getProfile: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
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
    profile: state.profile
  };
}

const mapDispatchToProps = {
  getProducts: _AC__WEBPACK_IMPORTED_MODULE_2__["getProducts"],
  getDefinitions: _AC__WEBPACK_IMPORTED_MODULE_2__["getDefinitions"],
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

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
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
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-facebook-pixel */ "./node_modules/react-facebook-pixel/dist/fb-pixel.js");
/* harmony import */ var react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_facebook_pixel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Menu */ "./src/components/Menu.js");
/* harmony import */ var _icons_InstagramIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/InstagramIcon */ "./src/components/icons/InstagramIcon.js");
/* harmony import */ var _icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/FacebookIcon */ "./src/components/icons/FacebookIcon.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.js");
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
    const order = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getCookie"])("lastOrder");
    const menuItems = [{
      title: "О нас",
      link: "/about"
    }, {
      title: "Акции",
      link: "/sales"
    }, {
      title: "Рестораны",
      link: "/restaurants"
    }];

    if (!this.props.showMobileAuth) {
      menuItems.push({
        link: "/legal",
        title: "Правовая информация"
      });
    } else {
      menuItems.unshift({
        title: "Меню",
        link: "/"
      });

      if (order) {
        menuItems.unshift({
          title: "Статус заказа",
          link: `/status/${order}`
        });
      }
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
        webvisor: true,
        accurateTrackBounce: true
      },
      version: "2"
    }));
  }

}

Footer.propTypes = {
  showMobileAuth: PropTypes.bool.isRequired,
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
      profile: this.props.profile
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
      if (!this.props.authorized) return null;
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
      menuItems: menuItems
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
      menuItems: categories
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
  setShowMobileMenu: PropTypes.func.isRequired,
  authorized: PropTypes.string
};
Header.defaultProps = {
  authorized: ""
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

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAzOCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0yNS45NDczIDEzLjg3OTRDMjUuOTQ3MyAxNS41ODA2IDI3LjMzIDE2Ljk3MDYgMjkuMDM4NSAxNi45NzA2QzMwLjczOTggMTYuOTcwNiAzMi4xMjk4IDE1LjU4NzkgMzIuMTI5OCAxMy44Nzk0QzMyLjEyOTggMTIuMTc4MSAzMC43NDcxIDEwLjc4ODEgMjkuMDM4NSAxMC43ODgxQzI3LjMzIDEwLjc4ODEgMjUuOTQ3MyAxMi4xNzA4IDI1Ljk0NzMgMTMuODc5NFpNMjcuMTg1MiAxMy44Nzk0QzI3LjE4NTIgMTIuODU4NiAyOC4wMTc4IDEyLjAyNiAyOS4wMzg1IDEyLjAyNkMzMC4wNTkzIDEyLjAyNiAzMC44OTE5IDEyLjg1ODYgMzAuODkxOSAxMy44Nzk0QzMwLjg5MTkgMTQuOTAwMSAzMC4wNTkzIDE1LjczMjcgMjkuMDM4NSAxNS43MzI3QzI4LjAxMDUgMTUuNzMyNyAyNy4xODUyIDE0LjkwMDEgMjcuMTg1MiAxMy44Nzk0WiIgZmlsbD0iYmxhY2siLz4NCjxwYXRoIGQ9Ik0wIDExLjQwNFYxMy44NzI3QzAgMTQuMjEyOSAwLjI3NTEwMSAxNC40ODggMC42MTUzNTggMTQuNDg4SDMuMDg0MDNDMy40NTMyNSAxNC40ODggMy43NDI4MyAxNC4yNDE5IDMuNjk5MzkgMTMuODcyN0MzLjY5OTM5IDExLjQ4MzYgNS42MzIzNCA5LjU1MDY5IDguMDIxMzggOS41NTA2OUMxMC40MDMyIDkuNTUwNjkgMTIuMzM2MSAxMS40NzY0IDEyLjM0MzQgMTMuODU4MkMxMi4zNDM0IDEzLjg2NTQgMTIuMzQzNCAxMy44NjU0IDEyLjM0MzQgMTMuODY1NEMxMi4zNDM0IDE0LjIwNTcgMTIuNjE4NSAxNC40ODggMTIuOTU4NyAxNC40ODhIMjQuMDc4NkMyNC40NDc4IDE0LjQ4OCAyNC43Mzc0IDE0LjI0MTkgMjQuNjk0IDEzLjg3MjdDMjQuNjk0IDExLjQ4MzYgMjYuNjI2OSA5LjU1MDY5IDI5LjAxNiA5LjU1MDY5QzMxLjM5NzggOS41NTA2OSAzMy4zMzA3IDExLjQ3NjQgMzMuMzM3OSAxMy44NTgyQzMzLjMzNzkgMTMuODY1NCAzMy4zMzc5IDEzLjg2NTQgMzMuMzM3OSAxMy44NjU0QzMzLjMzNzkgMTQuMjA1NyAzMy42MTMgMTQuNDg4IDMzLjk1MzMgMTQuNDg4SDM2LjQyMkMzNi43NjIyIDE0LjQ4OCAzNy4wMzczIDE0LjIxMjkgMzcuMDM3MyAxMy44NzI3VjExLjQwNEMzNy4wMzczIDExLjA2MzggMzYuNzYyMiAxMC43ODg2IDM2LjQyMiAxMC43ODg2TDM2LjM0OTYgOS4yNTM4N0MzNi4zMDYxIDguMjc2NTQgMzUuODEzOSA3LjM2NDM2IDM0Ljk5NTggNi44MzU4OEMzMy40MTAzIDUuODIyMzQgMzAuNzEgNS4yNjQ5IDI4LjA2NzYgNS4yMjg3QzI0LjU0OTIgMC45MzU2NzYgMTkuMDE4MiAtMC43Mjk0MTEgMTEuNjU1NiAwLjI5MTM2QzExLjY0ODQgMC4yOTEzNiAxMS42NDExIDAuMjkxMzYgMTEuNjMzOSAwLjI5ODU5OUM3LjY0NDkyIDEuMDAwODMgNS44NDIyOCAzLjExNDc3IDQuNTMxOTMgNS4zMzczTDEuMDQyNDkgNi40OTU2MkMwLjc4OTEwNyA2LjU4MjQ5IDAuNjIyNTk4IDYuODE0MTYgMC42MjI1OTggNy4wODIwMlYxMC43ODg2QzAuMjc1MTAxIDEwLjc4ODYgMCAxMS4wNjM4IDAgMTEuNDA0Wk0xNy4yOTUyIDEuNjMwNjdDMTcuMjk1MiAxLjQ0OTY4IDE3LjQ1NDUgMS4zMDQ4OSAxNy42MzU0IDEuMzE5MzdDMjAuOTk0NiAxLjYxNjE5IDIzLjcyMzkgMi43MzEwNyAyNS44NjY4IDQuNjg1NzRDMjYuMDc2NyA0Ljg4MTIxIDI1Ljk0NjQgNS4yMjg3IDI1LjY2NDEgNS4yMjg3SDE3LjYwNjVDMTcuNDMyNyA1LjIyODcgMTcuMjk1MiA1LjA5MTE1IDE3LjI5NTIgNC45MTc0MVYxLjYzMDY3Wk05Ljg1Mjk3IDIuMjgyMjJDOS44NTI5NyAyLjE1MTkxIDkuOTMyNjEgMi4wMjg4NCAxMC4wNTU3IDEuOTg1NEMxMC41OTE0IDEuNzg5OTQgMTEuMTc3OCAxLjYzMDY3IDExLjgzNjYgMS41MTQ4NEMxMy4yMTkzIDEuMzI2NjEgMTQuNTIyNSAxLjIzMjUgMTUuNzYwNCAxLjIzMjVDMTUuOTM0MiAxLjIzMjUgMTYuMDY0NSAxLjM3MDA1IDE2LjA2NDUgMS41NDM3OVY0LjkxNzQxQzE2LjA2NDUgNS4wOTExNSAxNS45MjY5IDUuMjI4NyAxNS43NTMyIDUuMjI4N0gxMC4xODZDMTAuMDE5NSA1LjIyODcgOS44ODE5MyA1LjA5MTE1IDkuODc0NjkgNC45MjQ2NUw5Ljg1Mjk3IDIuMjgyMjJaTTYuNDA2OTcgNC43MjkxOEM2Ljg5OTI1IDQuMDcwMzggNy40NTY3IDMuNDkxMjIgOC4xMjI3MyAyLjk5ODk0QzguMzI1NDQgMi44NDY5MSA4LjYyMjI2IDIuOTg0NDYgOC42MjIyNiAzLjI0NTA4TDguNjM2NzQgNC45MTc0MUM4LjYzNjc0IDUuMDkxMTUgOC40OTkxOCA1LjIyODcgOC4zMjU0NCA1LjIyODdINi42NTMxMUM2LjM5MjQ5IDUuMjI4NyA2LjI1NDk0IDQuOTMxODkgNi40MDY5NyA0LjcyOTE4WiIgZmlsbD0iYmxhY2siLz4NCjxwYXRoIGQ9Ik00Ljk0MzM2IDEzLjg3OTRDNC45NDMzNiAxNS41ODA2IDYuMzI2MTEgMTYuOTcwNiA4LjAzNDYzIDE2Ljk3MDZDOS43MzU5MSAxNi45NzA2IDExLjEyNTkgMTUuNTg3OSAxMS4xMjU5IDEzLjg3OTRDMTEuMTI1OSAxMi4xNzgxIDkuNzQzMTUgMTAuNzg4MSA4LjAzNDYzIDEwLjc4ODFDNi4zMjYxMSAxMC43ODgxIDQuOTQzMzYgMTIuMTcwOCA0Ljk0MzM2IDEzLjg3OTRaTTYuMTc0MDggMTMuODc5NEM2LjE3NDA4IDEyLjg1ODYgNy4wMDY2MiAxMi4wMjYgOC4wMjczOSAxMi4wMjZDOS4wNDgxNiAxMi4wMjYgOS44ODA3IDEyLjg1ODYgOS44ODA3IDEzLjg3OTRDOS44ODA3IDE0LjkwMDEgOS4wNDgxNiAxNS43MzI3IDguMDI3MzkgMTUuNzMyN0M3LjAwNjYyIDE1LjczMjcgNi4xNzQwOCAxNC45MDAxIDYuMTc0MDggMTMuODc5NFoiIGZpbGw9ImJsYWNrIi8+DQo8L3N2Zz4NCg=="

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

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyNSAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNi44MzU5IDkuMDA4MkMxNi44MzU5IDEwLjExMjMgMTcuNzMzMyAxMS4wMTQ0IDE4Ljg0MjIgMTEuMDE0NEMxOS45NDYzIDExLjAxNDQgMjAuODQ4NCAxMC4xMTcgMjAuODQ4NCA5LjAwODJDMjAuODQ4NCA3LjkwNDA2IDE5Ljk1MSA3LjAwMTk1IDE4Ljg0MjIgNy4wMDE5NUMxNy43MzMzIDcuMDAxOTUgMTYuODM1OSA3Ljg5OTM2IDE2LjgzNTkgOS4wMDgyWk0xNy42Mzk0IDkuMDA4MkMxNy42Mzk0IDguMzQ1NzEgMTguMTc5NyA3LjgwNTM5IDE4Ljg0MjIgNy44MDUzOUMxOS41MDQ3IDcuODA1MzkgMjAuMDQ1IDguMzQ1NzEgMjAuMDQ1IDkuMDA4MkMyMC4wNDUgOS42NzA2OCAxOS41MDQ3IDEwLjIxMSAxOC44NDIyIDEwLjIxMUMxOC4xNzUgMTAuMjExIDE3LjYzOTQgOS42NzA2OCAxNy42Mzk0IDkuMDA4MloiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMCA3LjQwMTIzVjkuMDAzNDFDMCA5LjIyNDI0IDAuMTc4NTQyIDkuNDAyNzggMC4zOTkzNjkgOS40MDI3OEgyLjAwMTU0QzIuMjQxMTcgOS40MDI3OCAyLjQyOTEgOS4yNDMwMyAyLjQwMDkxIDkuMDAzNDFDMi40MDA5MSA3LjQ1MjkyIDMuNjU1NCA2LjE5ODQzIDUuMjA1OSA2LjE5ODQzQzYuNzUxNjkgNi4xOTg0MyA4LjAwNjE4IDcuNDQ4MjIgOC4wMTA4OCA4Ljk5NDAxQzguMDEwODggOC45OTg3MSA4LjAxMDg4IDguOTk4NzEgOC4wMTA4OCA4Ljk5ODcxQzguMDEwODggOS4yMTk1NCA4LjE4OTQyIDkuNDAyNzggOC40MTAyNSA5LjQwMjc4SDE1LjYyNzFDMTUuODY2NyA5LjQwMjc4IDE2LjA1NDYgOS4yNDMwMyAxNi4wMjY1IDkuMDAzNDFDMTYuMDI2NSA3LjQ1MjkyIDE3LjI4MDkgNi4xOTg0MyAxOC44MzE0IDYuMTk4NDNDMjAuMzc3MiA2LjE5ODQzIDIxLjYzMTcgNy40NDgyMiAyMS42MzY0IDguOTk0MDFDMjEuNjM2NCA4Ljk5ODcxIDIxLjYzNjQgOC45OTg3MSAyMS42MzY0IDguOTk4NzFDMjEuNjM2NCA5LjIxOTU0IDIxLjgxNSA5LjQwMjc4IDIyLjAzNTggOS40MDI3OEgyMy42MzhDMjMuODU4OCA5LjQwMjc4IDI0LjAzNzMgOS4yMjQyNCAyNC4wMzczIDkuMDAzNDFWNy40MDEyM0MyNC4wMzczIDcuMTgwNDEgMjMuODU4OCA3LjAwMTg2IDIzLjYzOCA3LjAwMTg2TDIzLjU5MSA2LjAwNTc5QzIzLjU2MjggNS4zNzE1IDIzLjI0MzMgNC43Nzk0OSAyMi43MTI0IDQuNDM2NUMyMS42ODM0IDMuNzc4NzIgMTkuOTMwOSAzLjQxNjk0IDE4LjIxNTkgMy4zOTM0NEMxNS45MzI1IDAuNjA3MjU2IDEyLjM0MjkgLTAuNDczMzkgNy41NjQ1MiAwLjE4OTA5M0M3LjU1OTgzIDAuMTg5MDkzIDcuNTU1MTMgMC4xODkwOTMgNy41NTA0MyAwLjE5Mzc5MkM0Ljk2MTU4IDAuNjQ5NTQzIDMuNzkxNjYgMi4wMjE0OSAyLjk0MTI0IDMuNDYzOTJMMC42NzY1NzkgNC4yMTU2OEMwLjUxMjEzMiA0LjI3MjA2IDAuNDA0MDY4IDQuNDIyNDEgMC40MDQwNjggNC41OTYyNVY3LjAwMTg2QzAuMTc4NTQyIDcuMDAxODYgMCA3LjE4MDQxIDAgNy40MDEyM1pNMTEuMjI0NiAxLjA1ODMxQzExLjIyNDYgMC45NDA4NDcgMTEuMzI4IDAuODQ2ODc4IDExLjQ0NTUgMC44NTYyNzVDMTMuNjI1NSAxLjA0ODkxIDE1LjM5NjkgMS43NzI0NyAxNi43ODc2IDMuMDQxMDZDMTYuOTIzOSAzLjE2NzkyIDE2LjgzOTMgMy4zOTM0NCAxNi42NTYgMy4zOTM0NEgxMS40MjY3QzExLjMxMzkgMy4zOTM0NCAxMS4yMjQ2IDMuMzA0MTcgMTEuMjI0NiAzLjE5MTQxVjEuMDU4MzFWMS4wNTgzMVpNNi4zOTQ2MSAxLjQ4MTE3QzYuMzk0NjEgMS4zOTY2IDYuNDQ2MjkgMS4zMTY3MiA2LjUyNjE2IDEuMjg4NTNDNi44NzM4NSAxLjE2MTY3IDcuMjU0NDMgMS4wNTgzMSA3LjY4MTk5IDAuOTgzMTMzQzguNTc5MzkgMC44NjA5NzMgOS40MjUxMiAwLjc5OTg5MyAxMC4yMjg2IDAuNzk5ODkzQzEwLjM0MTMgMC43OTk4OTMgMTAuNDI1OSAwLjg4OTE2NCAxMC40MjU5IDEuMDAxOTNWMy4xOTE0MUMxMC40MjU5IDMuMzA0MTcgMTAuMzM2NiAzLjM5MzQ0IDEwLjIyMzkgMy4zOTM0NEg2LjYxMDc0QzYuNTAyNjcgMy4zOTM0NCA2LjQxMzQgMy4zMDQxNyA2LjQwODcgMy4xOTYxMUw2LjM5NDYxIDEuNDgxMTdaTTQuMTU4MTQgMy4wNjkyNUM0LjQ3NzYzIDIuNjQxNjkgNC44Mzk0MiAyLjI2NTgxIDUuMjcxNjcgMS45NDYzMkM1LjQwMzIzIDEuODQ3NjUgNS41OTU4NyAxLjkzNjkyIDUuNTk1ODcgMi4xMDYwN0w1LjYwNTI3IDMuMTkxNDFDNS42MDUyNyAzLjMwNDE3IDUuNTE1OTkgMy4zOTM0NCA1LjQwMzIzIDMuMzkzNDRINC4zMTc4OUM0LjE0ODc0IDMuMzkzNDQgNC4wNTk0NyAzLjIwMDgxIDQuMTU4MTQgMy4wNjkyNVoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMy4yMDcwMyA5LjAwODJDMy4yMDcwMyAxMC4xMTIzIDQuMTA0NDQgMTEuMDE0NCA1LjIxMzI3IDExLjAxNDRDNi4zMTc0MSAxMS4wMTQ0IDcuMjE5NTIgMTAuMTE3IDcuMjE5NTIgOS4wMDgyQzcuMjE5NTIgNy45MDQwNiA2LjMyMjExIDcuMDAxOTUgNS4yMTMyNyA3LjAwMTk1QzQuMTA0NDQgNy4wMDE5NSAzLjIwNzAzIDcuODk5MzYgMy4yMDcwMyA5LjAwODJaTTQuMDA1NzcgOS4wMDgyQzQuMDA1NzcgOC4zNDU3MSA0LjU0NjA5IDcuODA1MzkgNS4yMDg1OCA3LjgwNTM5QzUuODcxMDYgNy44MDUzOSA2LjQxMTM4IDguMzQ1NzEgNi40MTEzOCA5LjAwODJDNi40MTEzOCA5LjY3MDY4IDUuODcxMDYgMTAuMjExIDUuMjA4NTggMTAuMjExQzQuNTQ2MDkgMTAuMjExIDQuMDA1NzcgOS42NzA2OCA0LjAwNTc3IDkuMDA4MloiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg=="

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
      id: 0,
      alias: "hits",
      title: title,
      items: hits,
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
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Market__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  }

}

MainContent.propTypes = {
  showMobileAuth: PropTypes.bool.isRequired,
  slides: PropTypes.instanceOf(Array).isRequired,
  mobileSlides: PropTypes.instanceOf(Array).isRequired
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
/* harmony import */ var _BasketMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BasketMobile */ "./src/components/BasketMobile/index.js");
/* harmony import */ var _MarketSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MarketSection */ "./src/components/MarketSection/index.js");
/* harmony import */ var _Hits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Hits */ "./src/components/Hits/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Market extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    const {
      products
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BasketMobile__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "market-sections"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hits__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "\u0425\u0438\u0442\u044B"
    }), products.map(product => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketSection__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: product.category.id,
      id: product.category.id,
      title: product.category.title,
      alias: product.category.alias,
      items: product.items
    }))));
  }

}

Market.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Market__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Market */ "./src/components/Market/Market.js");



function mapStateToProps(state) {
  return {
    products: state.products
  };
}

const ConnectedComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps)(_Market__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ConnectedComponent);

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
  items,
  withScroll,
  alias,
  title,
  id
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "market-section",
    id: alias,
    name: alias
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "market-section__title-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "market-section__title"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "market-section__title help-element"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      "swipe-container": id === 0
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("market-section__items", {
      "scroll-container": id === 0
    })
  }, items.map(product => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarketItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: product.id,
    product: product,
    categoryID: id,
    withScroll: withScroll
  })))));
}

MarketSection.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-hash-link */ "./node_modules/react-router-hash-link/lib/index.js");
/* harmony import */ var react_router_hash_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__);
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

    _defineProperty(this, "renderMenuItem", (item, i, active) => React.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_2__["NavHashLink"], {
      key: i,
      to: `/#${item.alias}`,
      className: `menu__item ${active && "menu__item_active"}`,
      scroll: el => {
        const elName = el.getAttribute("name");
        react_scroll__WEBPACK_IMPORTED_MODULE_0__["scroller"].scrollTo(elName, scrollOpt);
      }
    }, item.title));

    _defineProperty(this, "renderLink", item => React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      key: item.link,
      to: item.link,
      className: "menu__item"
    }, item.title));
  }

  render() {
    const {
      menuItems,
      location
    } = this.props;
    if (!menuItems.length) return null;
    return React.createElement("nav", {
      className: "menu"
    }, menuItems.map((item, i) => {
      const active = location.hash === `#${item.alias}`;
      return item.link ? this.renderLink(item, i) : this.renderMenuItem(item, i, active);
    }));
  }

}

Menu.propTypes = {
  menuItems: PropTypes.instanceOf(Array),
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired
  }).isRequired
};
Menu.defaultProps = {
  menuItems: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Menu));
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
    this.setState(state => {
      const editedAddresses = { ...state.editedAddresses
      };
      editedAddresses[id].address = value;
      editedAddresses[id].geo_lat = lat;
      editedAddresses[id].geo_lon = lon;
      editedAddresses[id].street = street;
      editedAddresses[id].street_type_full = street_type_full;
      editedAddresses[id].house = house;
      return {
        editedAddresses
      };
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

/***/ "./src/components/Pages/PaymentArea/PaymentArea.js":
/*!*********************************************************!*\
  !*** ./src/components/Pages/PaymentArea/PaymentArea.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: X:\\JOB\\pobo-frontend\\src\\components\\Pages\\PaymentArea\\PaymentArea.js: Unexpected token (456:20)\n\n\u001b[0m \u001b[90m 454 | \u001b[39m                        {\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mcommentBlockContent}\u001b[0m\n\u001b[0m \u001b[90m 455 | \u001b[39m                        \u001b[33m<\u001b[39m\u001b[33mEmail\u001b[39m \u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 456 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 457 | \u001b[39m                    \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"payment__block-row payment__block payment__block--white\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 458 | \u001b[39m                            {\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mbottomBlockContent}\u001b[0m\n\u001b[0m \u001b[90m 459 | \u001b[39m                        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Object.raise (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:6325:17)\n    at Object.unexpected (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:7642:16)\n    at Object.jsxParseIdentifier (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3379:12)\n    at Object.jsxParseNamespacedName (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3389:23)\n    at Object.jsxParseAttribute (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3469:22)\n    at Object.jsxParseOpeningElementAfterName (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3490:28)\n    at Object.jsxParseOpeningElementAt (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3483:17)\n    at Object.jsxParseElementAt (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3515:33)\n    at Object.jsxParseElementAt (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3531:32)\n    at Object.jsxParseElementAt (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3531:32)\n    at Object.jsxParseElementAt (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3531:32)\n    at Object.jsxParseElement (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3589:17)\n    at Object.parseExprAtom (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3596:19)\n    at Object.parseExprSubscripts (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8412:23)\n    at Object.parseMaybeUnary (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8392:21)\n    at Object.parseExprOps (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8267:23)\n    at Object.parseMaybeConditional (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8240:23)\n    at Object.parseMaybeAssign (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8187:21)\n    at Object.parseParenAndDistinguishExpression (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8978:28)\n    at Object.parseExprAtom (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8762:21)\n    at Object.parseExprAtom (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:3601:20)\n    at Object.parseExprSubscripts (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8412:23)\n    at Object.parseMaybeUnary (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8392:21)\n    at Object.parseExprOps (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8267:23)\n    at Object.parseMaybeConditional (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8240:23)\n    at Object.parseMaybeAssign (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8187:21)\n    at Object.parseExpression (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:8135:23)\n    at Object.parseReturnStatement (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10198:28)\n    at Object.parseStatementContent (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9877:21)\n    at Object.parseStatement (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9829:17)\n    at Object.parseBlockOrModuleBlockBody (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10405:25)\n    at Object.parseBlockBody (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10392:10)\n    at Object.parseBlock (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10376:10)\n    at Object.parseFunctionBody (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9424:24)\n    at Object.parseFunctionBodyAndFinish (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9394:10)\n    at Object.parseMethod (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9348:10)\n    at Object.pushClassMethod (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10804:30)\n    at Object.parseClassMemberWithIsStatic (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10761:14)\n    at Object.parseClassMember (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10668:10)\n    at X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10623:14\n    at Object.withTopicForbiddingContext (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:9702:14)\n    at Object.parseClassBody (X:\\JOB\\pobo-frontend\\node_modules\\@babel\\core\\node_modules\\@babel\\parser\\lib\\index.js:10600:10)");

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
/* harmony import */ var _ProductCard_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductCard.scss */ "./src/components/ProductCard/ProductCard.scss");
/* harmony import */ var _ProductCard_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ProductCard_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Hits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Hits */ "./src/components/Hits/index.js");
/* harmony import */ var _product_crumbs_vector_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-crumbs-vector.svg */ "./src/components/ProductCard/product-crumbs-vector.svg");
/* harmony import */ var _product_crumbs_vector_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_product_crumbs_vector_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _product_crumbs_mobile_vector_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-crumbs-mobile-vector.svg */ "./src/components/ProductCard/product-crumbs-mobile-vector.svg");
/* harmony import */ var _product_crumbs_mobile_vector_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_product_crumbs_mobile_vector_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ItemControls__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ItemControls */ "./src/components/ItemControls/index.js");
/* harmony import */ var _BasketMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../BasketMobile */ "./src/components/BasketMobile/index.js");











function ProductCard({
  showMobileAuth,
  product
}) {
  const {
    title,
    image,
    item_image,
    measure,
    description,
    specifications: spec,
    price,
    categories,
    meta_title,
    meta_description,
    meta_keywords
  } = product;
  return React.createElement(React.Fragment, null, React.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, React.createElement("title", null, meta_title), React.createElement("meta", {
    name: "keywords",
    content: meta_keywords
  }), React.createElement("meta", {
    name: "description",
    content: meta_description
  })), React.createElement("div", {
    className: `product ${showMobileAuth && "hide-element"}`
  }, React.createElement("div", {
    className: "container"
  }, React.createElement(_BasketMobile__WEBPACK_IMPORTED_MODULE_9__["default"], null), React.createElement("div", {
    className: "product-crumbs"
  }, React.createElement("span", {
    className: "product-crumbs__home"
  }, React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/",
    className: "product-crumbs__link"
  }, "Pobo"), React.createElement("img", {
    className: "product-crumbs__vector",
    src: _product_crumbs_vector_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: ""
  })), React.createElement("span", {
    className: "product-crumbs__categories-title"
  }, React.createElement("img", {
    className: "product-crumbs__mobile-vector",
    src: _product_crumbs_mobile_vector_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: ""
  }), React.createElement(react_router_hash_link__WEBPACK_IMPORTED_MODULE_1__["HashLink"], {
    to: `/#${categories[0].alias}`,
    scroll: el => {
      const elName = el.getAttribute("name");
      react_scroll__WEBPACK_IMPORTED_MODULE_0__["scroller"].scrollTo(elName, {
        offset: -80
      });
    },
    className: "product-crumbs__link"
  }, categories[0].title)), React.createElement("span", {
    className: "product-crumbs__title"
  }, React.createElement("img", {
    className: "product-crumbs__vector",
    src: _product_crumbs_vector_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: ""
  }), title)), React.createElement("div", {
    className: "product-card"
  }, React.createElement("div", {
    className: "product-card__img",
    style: {
      backgroundImage: `url(${item_image || image})`
    },
    alt: ""
  }), React.createElement("div", {
    className: "product-card__desc"
  }, React.createElement("div", {
    className: "product-card__title-container"
  }, React.createElement("h1", {
    className: "product-card__title"
  }, title, React.createElement("span", {
    className: "product-card__title-comma"
  }, ",")), React.createElement("div", {
    className: "product-card__weight"
  }, measure.value, " ", measure.unit)), React.createElement("h2", {
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
  }, spec[3].value, " ", spec[3].title)), React.createElement(_ItemControls__WEBPACK_IMPORTED_MODULE_8__["default"], {
    product: product
  }))), React.createElement(_Hits__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\u0425\u0438\u0442\u044B"
  }))));
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  showMobileAuth: PropTypes.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ProductCard);
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

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNC41NTc1MSA5LjQ5MjU5TDQuNTU3NTIgOS40OTI2MUM0LjYxNzQyIDkuNTYzNTcgNC42OTk1NyA5LjYwMzkxIDQuNzg2NDYgOS42MDM5MUM0Ljg3MzMxIDkuNjAzOTEgNC45NTUyIDkuNTYzNTggNS4wMTQyOSA5LjQ5MjE3QzUuMTI5MDYgOS4zNTU3NSA1LjEyNzk2IDkuMTQyMyA1LjAxNDY2IDkuMDA0ODlMNS4wMTQ2NiA5LjAwNDg4TDUuMDEzOTIgOS4wMDRMMS42NDc4MyA1LjAxNjQ4TDUuMDEzOTEgMS4wMjg5N0M1LjEyOTA2IDAuODkyNTcgNS4xMjgwOCAwLjY3ODgxIDUuMDE0NjYgMC41NDEyNDRMNS4wMTQ2NiAwLjU0MTI0TDUuMDEzOTEgMC41NDAzNTVDNC45NTUyNSAwLjQ3MDg1NSA0Ljg3MjcgMC40Mjk2NDggNC43ODY3MSAwLjQyOTY0OEM0LjcwMzI2IDAuNDI5NjQ4IDQuNjE5NDUgMC40NjY1MTkgNC41NTg4NSAwLjU0MTEzMkwwLjk4NjE5NiA0Ljc3MzM1QzAuODcxOTM3IDQuOTA4NyAwLjg3MDc3NiA1LjEyNTYzIDAuOTg2NTUzIDUuMjYwMDRDMC45ODY2OTIgNS4yNjAyIDAuOTg2ODMgNS4yNjAzNiAwLjk4Njk2OSA1LjI2MDUyTDQuNTU3NTEgOS40OTI1OVoiIGZpbGw9IiM4MDgwODAiIHN0cm9rZT0iIzgwODA4MCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/components/ProductCard/product-crumbs-vector.svg":
/*!**************************************************************!*\
  !*** ./src/components/ProductCard/product-crumbs-vector.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgNiA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZD0iTTQuMzQxNjIgNC4zNjQyNkwwLjk5MTc4OCA3LjcxNDA5QzAuODY4OTUxIDcuODM2OTMgMC44NzAxMzMgOC4wMzQ1MyAwLjk5MDk2MSA4LjE1ODI0TDAuOTkwOTU2IDguMTU4MjRMMC45OTE3ODggOC4xNTkwN0MxLjA1MjI3IDguMjE5NTYgMS4xMzMyOSA4LjI1MTg1IDEuMjEzMjkgOC4yNTE4NUMxLjI5MDc3IDguMjUxODUgMS4zNzMwOSA4LjIyMzIgMS40MzU1MyA4LjE1ODMzTDUuMDA4MSA0LjU4NTc2QzUuMTI5ODQgNC40NjQwMiA1LjEzMTI0IDQuMjYzNTEgNS4wMDc3NSA0LjE0MjQxTDEuNDM2NzkgMC41Njk0NjdMMS40MzY3NyAwLjU2OTQ0OEMxLjMxMzAxIDAuNDQ1Njg0IDEuMTE0NDIgMC40NDQzMzggMC45OTEzNzIgMC41Njk4NjRDMC44Njg5NTQgMC42OTI3MyAwLjg3MDI2OSAwLjg5MDAzIDAuOTkwOTYxIDEuMDEzNkwwLjk5MDk1NiAxLjAxMzZMMC45OTE3ODggMS4wMTQ0M0w0LjM0MTYyIDQuMzY0MjZaIiBmaWxsPSIjODA4MDgwIiBzdHJva2U9IiM4MDgwODAiIHN0cm9rZS13aWR0aD0iMC4yIi8+DQo8L3N2Zz4NCg=="

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
/* WEBPACK VAR INJECTION */(function(React) {const BurgerMobile = ({
  open
}) => {
  if (open) {
    return React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "15",
      height: "15",
      viewBox: "0 0 15 15",
      fill: "none"
    }, React.createElement("rect", {
      y: "13",
      width: "18",
      height: "2.61417",
      rx: "1",
      transform: "rotate(-45 0 13)",
      fill: "#FDFDFD"
    }), React.createElement("rect", {
      x: "2",
      width: "18",
      height: "2.61417",
      rx: "1",
      transform: "rotate(45 2 0)",
      fill: "#FDFDFD"
    }));
  }

  return React.createElement("svg", {
    width: "18",
    height: "15",
    viewBox: "0 0 18 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("rect", {
    width: "18",
    height: "2.61417",
    rx: "1",
    fill: "white"
  }), React.createElement("rect", {
    y: "12.1992",
    width: "18",
    height: "2.61417",
    rx: "1",
    fill: "white"
  }), React.createElement("rect", {
    y: "6.09961",
    width: "18",
    height: "2.61418",
    rx: "1",
    fill: "white"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BurgerMobile);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! react */ "./node_modules/react/index.js")))

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
/* harmony import */ var _profileReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profileReducer */ "./src/reducers/profileReducer.js");
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cartReducer */ "./src/reducers/cartReducer.js");






const reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  hits: _hitsReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  products: _productsReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  definitions: _definitionsReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  profile: _profileReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  cart: _cartReducer__WEBPACK_IMPORTED_MODULE_5__["default"]
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
        const cats = [];
        data.result.items.forEach(item => {
          const index = cats.findIndex(cat => cat.category.id === item.categories[0].id);

          if (index > -1) {
            cats[index].items.push(item);
          } else {
            cats.push({
              category: item.categories[0],
              items: [item]
            });
          }
        });
        cats.sort((a, b) => a.category.id - b.category.id);
        return cats;
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
//# sourceMappingURL=main.97a8e699284258159ea7.js.map