module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/NativeAudioRecorder.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}module.exports=_arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}module.exports=_arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray=__webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");function _arrayWithoutHoles(arr){if(Array.isArray(arr))return arrayLikeToArray(arr);}module.exports=_arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}module.exports=_assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}module.exports=_classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}module.exports=_createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}module.exports=_defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends(){module.exports=_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}module.exports=_extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o){module.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}module.exports=_getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf=__webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)setPrototypeOf(subClass,superClass);}module.exports=_inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}module.exports=_interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof=__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function _getRequireWildcardCache(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{"default":obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj["default"]=obj;if(cache){cache.set(obj,newObj);}return newObj;}module.exports=_interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(iter))return Array.from(iter);}module.exports=_iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}module.exports=_iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}module.exports=_nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}module.exports=_nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose=__webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}module.exports=_objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}module.exports=_objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof=__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");var assertThisInitialized=__webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return assertThisInitialized(self);}module.exports=_possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o,p){module.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}module.exports=_setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles=__webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");var iterableToArrayLimit=__webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");var unsupportedIterableToArray=__webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");var nonIterableRest=__webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");function _slicedToArray(arr,i){return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||unsupportedIterableToArray(arr,i)||nonIterableRest();}module.exports=_slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles=__webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");var iterableToArray=__webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");var unsupportedIterableToArray=__webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");var nonIterableSpread=__webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");function _toConsumableArray(arr){return arrayWithoutHoles(arr)||iterableToArray(arr)||unsupportedIterableToArray(arr)||nonIterableSpread();}module.exports=_toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){module.exports=_typeof=function _typeof(obj){return typeof obj;};}else{module.exports=_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}module.exports=_typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray=__webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return arrayLikeToArray(o,minLen);}module.exports=_unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");

/***/ }),

/***/ "./node_modules/@mendix/pluggable-widgets-tools/dist/common.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@mendix/pluggable-widgets-tools/dist/common.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.ensure=void 0;function ensure(arg){if(arg==null){throw new Error("Did not expect an argument to be undefined");}return arg;}exports.ensure=ensure;

/***/ }),

/***/ "./node_modules/@mendix/pluggable-widgets-tools/dist/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mendix/pluggable-widgets-tools/dist/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){if(k2===undefined)k2=k;Object.defineProperty(o,k2,{enumerable:true,get:function get(){return m[k];}});}:function(o,m,k,k2){if(k2===undefined)k2=k;o[k2]=m[k];});var __exportStar=this&&this.__exportStar||function(m,exports){for(var p in m){if(p!=="default"&&!exports.hasOwnProperty(p))__createBinding(exports,m,p);}};Object.defineProperty(exports,"__esModule",{value:true});__exportStar(__webpack_require__(/*! ./common */ "./node_modules/@mendix/pluggable-widgets-tools/dist/common.js"),exports);__exportStar(__webpack_require__(/*! ./native/common */ "./node_modules/@mendix/pluggable-widgets-tools/dist/native/common.js"),exports);__exportStar(__webpack_require__(/*! ./web/common */ "./node_modules/@mendix/pluggable-widgets-tools/dist/web/common.js"),exports);

/***/ }),

/***/ "./node_modules/@mendix/pluggable-widgets-tools/dist/native/common.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@mendix/pluggable-widgets-tools/dist/native/common.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _slicedToArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));var _defineProperty2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));var _extends3=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _toConsumableArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));Object.defineProperty(exports,"__esModule",{value:true});exports.extractStyles=exports.mergeNativeStyles=void 0;function mergeNativeStyles(defaultStyle,overrideStyles){var styles=[defaultStyle].concat((0,_toConsumableArray2.default)(overrideStyles.filter(function(object){return object!==undefined;})));return Object.keys(defaultStyle).reduce(function(flattened,currentKey){var styleItems=styles.map(function(object){return object[currentKey];});return(0,_extends3.default)((0,_extends3.default)({},flattened),(0,_defineProperty2.default)({},currentKey,flattenObjects(styleItems)));},{});}exports.mergeNativeStyles=mergeNativeStyles;function flattenObjects(objects){return objects.reduce(function(merged,object){return(0,_extends3.default)((0,_extends3.default)({},merged),object);},{});}function extractStyles(source,extractionKeys){if(!source){return[{},{}];}return Object.entries(source).reduce(function(_ref,_ref2){var _ref3=(0,_slicedToArray2.default)(_ref,2),extracted=_ref3[0],rest=_ref3[1];var _ref4=(0,_slicedToArray2.default)(_ref2,2),key=_ref4[0],value=_ref4[1];if(extractionKeys.includes(key)){extracted[key]=value;}else{rest[key]=value;}return[extracted,rest];},[{},{}]);}exports.extractStyles=extractStyles;

/***/ }),

/***/ "./node_modules/@mendix/pluggable-widgets-tools/dist/web/common.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@mendix/pluggable-widgets-tools/dist/web/common.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.parseInlineStyle=void 0;function parseInlineStyle(){var style=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";try{return style.split(";").reduce(function(styleObject,line){var pair=line.split(":");if(pair.length===2){var name=pair[0].trim().replace(/(-.)/g,function(match){return match[1].toUpperCase();});styleObject[name]=pair[1].trim();}return styleObject;},{});}catch(_){return{};}}exports.parseInlineStyle=parseInlineStyle;

/***/ }),

/***/ "./node_modules/lodash.isstring/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isstring/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var stringTag='[object String]';var objectProto=Object.prototype;var objectToString=objectProto.toString;var isArray=Array.isArray;function isObjectLike(value){return!!value&&typeof value=='object';}function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&objectToString.call(value)==stringTag;}module.exports=isString;

/***/ }),

/***/ "./node_modules/lodash.omit/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.omit/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var LARGE_ARRAY_SIZE=200;var HASH_UNDEFINED='__lodash_hash_undefined__';var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991;var argsTag='[object Arguments]',funcTag='[object Function]',genTag='[object GeneratorFunction]',symbolTag='[object Symbol]';var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;var reIsHostCtor=/^\[object .+?Constructor\]$/;var reIsUint=/^(?:0|[1-9]\d*)$/;var freeGlobal=typeof global=='object'&&global&&global.Object===Object&&global;var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;var root=freeGlobal||freeSelf||Function('return this')();function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}function arrayIncludes(array,value){var length=array?array.length:0;return!!length&&baseIndexOf(array,value,0)>-1;}function arrayIncludesWith(array,value,comparator){var index=-1,length=array?array.length:0;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}function arrayMap(array,iteratee){var index=-1,length=array?array.length:0,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}function baseIndexOf(array,value,fromIndex){if(value!==value){return baseFindIndex(array,baseIsNaN,fromIndex);}var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}function baseIsNaN(value){return value!==value;}function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}function baseUnary(func){return function(value){return func(value);};}function cacheHas(cache,key){return cache.has(key);}function getValue(object,key){return object==null?undefined:object[key];}function isHostObject(value){var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}function overArg(func,transform){return function(arg){return func(transform(arg));};}var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;var coreJsData=root['__core-js_shared__'];var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();var funcToString=funcProto.toString;var hasOwnProperty=objectProto.hasOwnProperty;var objectToString=objectProto.toString;var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');var Symbol=root.Symbol,getPrototype=overArg(Object.getPrototypeOf,Object),propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=Symbol?Symbol.isConcatSpreadable:undefined;var nativeGetSymbols=Object.getOwnPropertySymbols,nativeMax=Math.max;var Map=getNative(root,'Map'),nativeCreate=getNative(Object,'create');function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}function hashDelete(key){return this.has(key)&&delete this.__data__[key];}function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}function listCacheClear(){this.__data__=[];}function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}function mapCacheGet(key){return getMapData(this,key).get(key);}function mapCacheHas(key){return getMapData(this,key).has(key);}function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;function SetCache(values){var index=-1,length=values?values.length:0;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}function setCacheHas(value){return this.__data__.has(value);}SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;function arrayLikeKeys(value,inherited){var result=isArray(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}return result;}function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}function basePick(object,props){object=Object(object);return basePickBy(object,props,function(value,key){return key in object;});}function basePickBy(object,props,predicate){var index=-1,length=props.length,result={};while(++index<length){var key=props[index],value=object[key];if(predicate(value,key)){result[key]=value;}}return result;}function baseRest(func,start){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=array;return apply(func,this,otherArgs);};}function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}function isKeyable(value){var type=typeof value;return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}function eq(value,other){return value===other||value!==value&&other!==other;}function isArguments(value){return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}var isArray=Array.isArray;function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}function isFunction(value){var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}function isObject(value){var type=typeof value;return!!value&&(type=='object'||type=='function');}function isObjectLike(value){return!!value&&typeof value=='object';}function isSymbol(value){return typeof value=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}var omit=baseRest(function(object,props){if(object==null){return{};}props=arrayMap(baseFlatten(props,1),toKey);return basePick(object,baseDifference(getAllKeysIn(object),props));});function stubArray(){return[];}module.exports=omit;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.pick/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.pick/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991;var argsTag='[object Arguments]',funcTag='[object Function]',genTag='[object GeneratorFunction]',symbolTag='[object Symbol]';var freeGlobal=typeof global=='object'&&global&&global.Object===Object&&global;var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;var root=freeGlobal||freeSelf||Function('return this')();function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}function arrayMap(array,iteratee){var index=-1,length=array?array.length:0,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}var objectProto=Object.prototype;var hasOwnProperty=objectProto.hasOwnProperty;var objectToString=objectProto.toString;var Symbol=root.Symbol,propertyIsEnumerable=objectProto.propertyIsEnumerable,spreadableSymbol=Symbol?Symbol.isConcatSpreadable:undefined;var nativeMax=Math.max;function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}function basePick(object,props){object=Object(object);return basePickBy(object,props,function(value,key){return key in object;});}function basePickBy(object,props,predicate){var index=-1,length=props.length,result={};while(++index<length){var key=props[index],value=object[key];if(predicate(value,key)){result[key]=value;}}return result;}function baseRest(func,start){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=array;return apply(func,this,otherArgs);};}function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}function isArguments(value){return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}var isArray=Array.isArray;function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}function isFunction(value){var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}function isObject(value){var type=typeof value;return!!value&&(type=='object'||type=='function');}function isObjectLike(value){return!!value&&typeof value=='object';}function isSymbol(value){return typeof value=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}var pick=baseRest(function(object,props){return object==null?{}:basePick(object,arrayMap(baseFlatten(props,1),toKey));});module.exports=pick;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var getOwnPropertySymbols=Object.getOwnPropertySymbols;var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}var test1=new String('abc');test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys((0,_extends2.default)({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(err){return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(getOwnPropertySymbols){symbols=getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var printWarning=function printWarning(){};if(true){var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");var loggedTypeFailures={};var has=Function.call.bind(Object.prototype.hasOwnProperty);printWarning=function printWarning(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{throw new Error(message);}catch(x){}};}function checkPropTypes(typeSpecs,values,location,componentName,getStack){if(true){for(var typeSpecName in typeSpecs){if(has(typeSpecs,typeSpecName)){var error;try{if(typeof typeSpecs[typeSpecName]!=='function'){var err=Error((componentName||'React class')+': '+location+' type `'+typeSpecName+'` is invalid; '+'it must be a function, usually from the `prop-types` package, but received `'+typeof typeSpecs[typeSpecName]+'`.');err.name='Invariant Violation';throw err;}error=typeSpecs[typeSpecName](values,typeSpecName,componentName,location,null,ReactPropTypesSecret);}catch(ex){error=ex;}if(error&&!(error instanceof Error)){printWarning((componentName||'React class')+': type specification of '+location+' `'+typeSpecName+'` is invalid; the type checker '+'function must return `null` or an `Error` but returned a '+typeof error+'. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).');}if(error instanceof Error&&!(error.message in loggedTypeFailures)){loggedTypeFailures[error.message]=true;var stack=getStack?getStack():'';printWarning('Failed '+location+' type: '+error.message+(stack!=null?stack:''));}}}}}checkPropTypes.resetWarningCache=function(){if(true){loggedTypeFailures={};}};module.exports=checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var ReactIs=__webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");var assign=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");var checkPropTypes=__webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");var has=Function.call.bind(Object.prototype.hasOwnProperty);var printWarning=function printWarning(){};if(true){printWarning=function printWarning(text){var message='Warning: '+text;if(typeof console!=='undefined'){console.error(message);}try{throw new Error(message);}catch(x){}};}function emptyFunctionThatReturnsNull(){return null;}module.exports=function(isValidElement,throwOnDirectAccess){var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator';function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}var ANONYMOUS='<<anonymous>>';var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),symbol:createPrimitiveTypeChecker('symbol'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),elementType:createElementTypeTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker,exact:createStrictShapeTypeChecker};function is(x,y){if(x===y){return x!==0||1/x===1/y;}else{return x!==x&&y!==y;}}function PropTypeError(message){this.message=message;this.stack='';}PropTypeError.prototype=Error.prototype;function createChainableTypeChecker(validate){if(true){var manualPropTypeCallCache={};var manualPropTypeWarningCount=0;}function checkType(isRequired,props,propName,componentName,location,propFullName,secret){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(secret!==ReactPropTypesSecret){if(throwOnDirectAccess){var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use `PropTypes.checkPropTypes()` to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;}else if( true&&typeof console!=='undefined'){var cacheKey=componentName+':'+propName;if(!manualPropTypeCallCache[cacheKey]&&manualPropTypeWarningCount<3){printWarning('You are manually calling a React.PropTypes validation '+'function for the `'+propFullName+'` prop on `'+componentName+'`. This is deprecated '+'and will throw in the standalone `prop-types` package. '+'You may be seeing this warning due to a third-party PropTypes '+'library. See https://fb.me/react-warning-dont-call-proptypes '+'for details.');manualPropTypeCallCache[cacheKey]=true;manualPropTypeWarningCount++;}}}if(props[propName]==null){if(isRequired){if(props[propName]===null){return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required '+('in `'+componentName+'`, but its value is `null`.'));}return new PropTypeError('The '+location+' `'+propFullName+'` is marked as required in '+('`'+componentName+'`, but its value is `undefined`.'));}return null;}else{return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName,secret){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){var preciseType=getPreciseType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunctionThatReturnsNull);}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}var propValue=props[propName];if(!Array.isArray(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']',ReactPropTypesSecret);if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!isValidElement(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createElementTypeTypeChecker(){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];if(!ReactIs.isValidElementType(propValue)){var propType=getPropType(propValue);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected a single ReactElement type.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName]instanceof expectedClass)){var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){if(true){if(arguments.length>1){printWarning('Invalid arguments supplied to oneOf, expected an array, got '+arguments.length+' arguments. '+'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');}else{printWarning('Invalid argument supplied to oneOf, expected an array.');}}return emptyFunctionThatReturnsNull;}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}var valuesString=JSON.stringify(expectedValues,function replacer(key,value){var type=getPreciseType(value);if(type==='symbol'){return String(value);}return value;});return new PropTypeError('Invalid '+location+' `'+propFullName+'` of value `'+String(propValue)+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new PropTypeError('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(has(propValue,key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){ true?printWarning('Invalid argument supplied to oneOfType, expected an instance of array.'):undefined;return emptyFunctionThatReturnsNull;}for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(typeof checker!=='function'){printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but '+'received '+getPostfixForTypeWarning(checker)+' at index '+i+'.');return emptyFunctionThatReturnsNull;}}function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location,propFullName,ReactPropTypesSecret)==null){return null;}}return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){return new PropTypeError('Invalid '+location+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function createStrictShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){return new PropTypeError('Invalid '+location+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}var allKeys=assign({},props[propName],shapeTypes);for(var key in allKeys){var checker=shapeTypes[key];if(!checker){return new PropTypeError('Invalid '+location+' `'+propFullName+'` key `'+key+'` supplied to `'+componentName+'`.'+'\nBad object: '+JSON.stringify(props[propName],null,'  ')+'\nValid keys: '+JSON.stringify(Object.keys(shapeTypes),null,'  '));}var error=checker(propValue,key,componentName,location,propFullName+'.'+key,ReactPropTypesSecret);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue){case'number':case'string':case'undefined':return true;case'boolean':return!propValue;case'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else{while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else{return false;}return true;default:return false;}}function isSymbol(propType,propValue){if(propType==='symbol'){return true;}if(!propValue){return false;}if(propValue['@@toStringTag']==='Symbol'){return true;}if(typeof Symbol==='function'&&propValue instanceof Symbol){return true;}return false;}function getPropType(propValue){var propType=typeof propValue;if(Array.isArray(propValue)){return'array';}if(propValue instanceof RegExp){return'object';}if(isSymbol(propType,propValue)){return'symbol';}return propType;}function getPreciseType(propValue){if(typeof propValue==='undefined'||propValue===null){return''+propValue;}var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return'date';}else if(propValue instanceof RegExp){return'regexp';}}return propType;}function getPostfixForTypeWarning(value){var type=getPreciseType(value);switch(type){case'array':case'object':return'an '+type;case'boolean':case'date':case'regexp':return'a '+type;default:return type;}}function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}return propValue.constructor.name;}ReactPropTypes.checkPropTypes=checkPropTypes;ReactPropTypes.resetWarningCache=checkPropTypes.resetWarningCache;ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if(true){var ReactIs=__webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");var throwOnDirectAccess=true;module.exports=__webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement,throwOnDirectAccess);}else{}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if(true){(function(){'use strict';var hasSymbol=typeof Symbol==='function'&&Symbol.for;var REACT_ELEMENT_TYPE=hasSymbol?Symbol.for('react.element'):0xeac7;var REACT_PORTAL_TYPE=hasSymbol?Symbol.for('react.portal'):0xeaca;var REACT_FRAGMENT_TYPE=hasSymbol?Symbol.for('react.fragment'):0xeacb;var REACT_STRICT_MODE_TYPE=hasSymbol?Symbol.for('react.strict_mode'):0xeacc;var REACT_PROFILER_TYPE=hasSymbol?Symbol.for('react.profiler'):0xead2;var REACT_PROVIDER_TYPE=hasSymbol?Symbol.for('react.provider'):0xeacd;var REACT_CONTEXT_TYPE=hasSymbol?Symbol.for('react.context'):0xeace;var REACT_ASYNC_MODE_TYPE=hasSymbol?Symbol.for('react.async_mode'):0xeacf;var REACT_CONCURRENT_MODE_TYPE=hasSymbol?Symbol.for('react.concurrent_mode'):0xeacf;var REACT_FORWARD_REF_TYPE=hasSymbol?Symbol.for('react.forward_ref'):0xead0;var REACT_SUSPENSE_TYPE=hasSymbol?Symbol.for('react.suspense'):0xead1;var REACT_SUSPENSE_LIST_TYPE=hasSymbol?Symbol.for('react.suspense_list'):0xead8;var REACT_MEMO_TYPE=hasSymbol?Symbol.for('react.memo'):0xead3;var REACT_LAZY_TYPE=hasSymbol?Symbol.for('react.lazy'):0xead4;var REACT_BLOCK_TYPE=hasSymbol?Symbol.for('react.block'):0xead9;var REACT_FUNDAMENTAL_TYPE=hasSymbol?Symbol.for('react.fundamental'):0xead5;var REACT_RESPONDER_TYPE=hasSymbol?Symbol.for('react.responder'):0xead6;var REACT_SCOPE_TYPE=hasSymbol?Symbol.for('react.scope'):0xead7;function isValidElementType(type){return typeof type==='string'||typeof type==='function'||type===REACT_FRAGMENT_TYPE||type===REACT_CONCURRENT_MODE_TYPE||type===REACT_PROFILER_TYPE||type===REACT_STRICT_MODE_TYPE||type===REACT_SUSPENSE_TYPE||type===REACT_SUSPENSE_LIST_TYPE||typeof type==='object'&&type!==null&&(type.$$typeof===REACT_LAZY_TYPE||type.$$typeof===REACT_MEMO_TYPE||type.$$typeof===REACT_PROVIDER_TYPE||type.$$typeof===REACT_CONTEXT_TYPE||type.$$typeof===REACT_FORWARD_REF_TYPE||type.$$typeof===REACT_FUNDAMENTAL_TYPE||type.$$typeof===REACT_RESPONDER_TYPE||type.$$typeof===REACT_SCOPE_TYPE||type.$$typeof===REACT_BLOCK_TYPE);}function typeOf(object){if(typeof object==='object'&&object!==null){var $$typeof=object.$$typeof;switch($$typeof){case REACT_ELEMENT_TYPE:var type=object.type;switch(type){case REACT_ASYNC_MODE_TYPE:case REACT_CONCURRENT_MODE_TYPE:case REACT_FRAGMENT_TYPE:case REACT_PROFILER_TYPE:case REACT_STRICT_MODE_TYPE:case REACT_SUSPENSE_TYPE:return type;default:var $$typeofType=type&&type.$$typeof;switch($$typeofType){case REACT_CONTEXT_TYPE:case REACT_FORWARD_REF_TYPE:case REACT_LAZY_TYPE:case REACT_MEMO_TYPE:case REACT_PROVIDER_TYPE:return $$typeofType;default:return $$typeof;}}case REACT_PORTAL_TYPE:return $$typeof;}}return undefined;}var AsyncMode=REACT_ASYNC_MODE_TYPE;var ConcurrentMode=REACT_CONCURRENT_MODE_TYPE;var ContextConsumer=REACT_CONTEXT_TYPE;var ContextProvider=REACT_PROVIDER_TYPE;var Element=REACT_ELEMENT_TYPE;var ForwardRef=REACT_FORWARD_REF_TYPE;var Fragment=REACT_FRAGMENT_TYPE;var Lazy=REACT_LAZY_TYPE;var Memo=REACT_MEMO_TYPE;var Portal=REACT_PORTAL_TYPE;var Profiler=REACT_PROFILER_TYPE;var StrictMode=REACT_STRICT_MODE_TYPE;var Suspense=REACT_SUSPENSE_TYPE;var hasWarnedAboutDeprecatedIsAsyncMode=false;function isAsyncMode(object){{if(!hasWarnedAboutDeprecatedIsAsyncMode){hasWarnedAboutDeprecatedIsAsyncMode=true;console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, '+'and will be removed in React 17+. Update your code to use '+'ReactIs.isConcurrentMode() instead. It has the exact same API.');}}return isConcurrentMode(object)||typeOf(object)===REACT_ASYNC_MODE_TYPE;}function isConcurrentMode(object){return typeOf(object)===REACT_CONCURRENT_MODE_TYPE;}function isContextConsumer(object){return typeOf(object)===REACT_CONTEXT_TYPE;}function isContextProvider(object){return typeOf(object)===REACT_PROVIDER_TYPE;}function isElement(object){return typeof object==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;}function isForwardRef(object){return typeOf(object)===REACT_FORWARD_REF_TYPE;}function isFragment(object){return typeOf(object)===REACT_FRAGMENT_TYPE;}function isLazy(object){return typeOf(object)===REACT_LAZY_TYPE;}function isMemo(object){return typeOf(object)===REACT_MEMO_TYPE;}function isPortal(object){return typeOf(object)===REACT_PORTAL_TYPE;}function isProfiler(object){return typeOf(object)===REACT_PROFILER_TYPE;}function isStrictMode(object){return typeOf(object)===REACT_STRICT_MODE_TYPE;}function isSuspense(object){return typeOf(object)===REACT_SUSPENSE_TYPE;}exports.AsyncMode=AsyncMode;exports.ConcurrentMode=ConcurrentMode;exports.ContextConsumer=ContextConsumer;exports.ContextProvider=ContextProvider;exports.Element=Element;exports.ForwardRef=ForwardRef;exports.Fragment=Fragment;exports.Lazy=Lazy;exports.Memo=Memo;exports.Portal=Portal;exports.Profiler=Profiler;exports.StrictMode=StrictMode;exports.Suspense=Suspense;exports.isAsyncMode=isAsyncMode;exports.isConcurrentMode=isConcurrentMode;exports.isContextConsumer=isContextConsumer;exports.isContextProvider=isContextProvider;exports.isElement=isElement;exports.isForwardRef=isForwardRef;exports.isFragment=isFragment;exports.isLazy=isLazy;exports.isMemo=isMemo;exports.isPortal=isPortal;exports.isProfiler=isProfiler;exports.isStrictMode=isStrictMode;exports.isSuspense=isSuspense;exports.isValidElementType=isValidElementType;exports.typeOf=typeOf;})();}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
if(false){}else{module.exports=__webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");}

/***/ }),

/***/ "./node_modules/react-native-audio-recorder-player/index.ts":
/*!******************************************************************!*\
  !*** ./node_modules/react-native-audio-recorder-player/index.ts ***!
  \******************************************************************/
/*! exports provided: AudioSourceAndroidType, OutputFormatAndroidType, AudioEncoderAndroidType, AVEncodingOption, AVEncoderAudioQualityIOSType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioSourceAndroidType", function() { return AudioSourceAndroidType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputFormatAndroidType", function() { return OutputFormatAndroidType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioEncoderAndroidType", function() { return AudioEncoderAndroidType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVEncodingOption", function() { return AVEncodingOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVEncoderAudioQualityIOSType", function() { return AVEncoderAudioQualityIOSType; });
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-native */ "react-native");
/* harmony import */ var react_native__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var RNAudioRecorderPlayer = react_native__WEBPACK_IMPORTED_MODULE_0__["NativeModules"].RNAudioRecorderPlayer;
var AudioSourceAndroidType;
(function (AudioSourceAndroidType) {
    AudioSourceAndroidType[AudioSourceAndroidType["DEFAULT"] = 0] = "DEFAULT";
    AudioSourceAndroidType[AudioSourceAndroidType["MIC"] = 1] = "MIC";
    AudioSourceAndroidType[AudioSourceAndroidType["VOICE_UPLINK"] = 2] = "VOICE_UPLINK";
    AudioSourceAndroidType[AudioSourceAndroidType["VOICE_DOWNLINK"] = 3] = "VOICE_DOWNLINK";
    AudioSourceAndroidType[AudioSourceAndroidType["VOICE_CALL"] = 4] = "VOICE_CALL";
    AudioSourceAndroidType[AudioSourceAndroidType["CAMCORDER"] = 5] = "CAMCORDER";
    AudioSourceAndroidType[AudioSourceAndroidType["VOICE_RECOGNITION"] = 6] = "VOICE_RECOGNITION";
    AudioSourceAndroidType[AudioSourceAndroidType["VOICE_COMMUNICATION"] = 7] = "VOICE_COMMUNICATION";
    AudioSourceAndroidType[AudioSourceAndroidType["REMOTE_SUBMIX"] = 8] = "REMOTE_SUBMIX";
    AudioSourceAndroidType[AudioSourceAndroidType["UNPROCESSED"] = 9] = "UNPROCESSED";
    AudioSourceAndroidType[AudioSourceAndroidType["RADIO_TUNER"] = 1998] = "RADIO_TUNER";
    AudioSourceAndroidType[AudioSourceAndroidType["HOTWORD"] = 1999] = "HOTWORD";
})(AudioSourceAndroidType || (AudioSourceAndroidType = {}));
var OutputFormatAndroidType;
(function (OutputFormatAndroidType) {
    OutputFormatAndroidType[OutputFormatAndroidType["DEFAULT"] = 0] = "DEFAULT";
    OutputFormatAndroidType[OutputFormatAndroidType["THREE_GPP"] = 1] = "THREE_GPP";
    OutputFormatAndroidType[OutputFormatAndroidType["MPEG_4"] = 2] = "MPEG_4";
    OutputFormatAndroidType[OutputFormatAndroidType["AMR_NB"] = 3] = "AMR_NB";
    OutputFormatAndroidType[OutputFormatAndroidType["AMR_WB"] = 4] = "AMR_WB";
    OutputFormatAndroidType[OutputFormatAndroidType["AAC_ADIF"] = 5] = "AAC_ADIF";
    OutputFormatAndroidType[OutputFormatAndroidType["AAC_ADTS"] = 6] = "AAC_ADTS";
    OutputFormatAndroidType[OutputFormatAndroidType["OUTPUT_FORMAT_RTP_AVP"] = 7] = "OUTPUT_FORMAT_RTP_AVP";
    OutputFormatAndroidType[OutputFormatAndroidType["MPEG_2_TS"] = 8] = "MPEG_2_TS";
    OutputFormatAndroidType[OutputFormatAndroidType["WEBM"] = 9] = "WEBM";
})(OutputFormatAndroidType || (OutputFormatAndroidType = {}));
var AudioEncoderAndroidType;
(function (AudioEncoderAndroidType) {
    AudioEncoderAndroidType[AudioEncoderAndroidType["DEFAULT"] = 0] = "DEFAULT";
    AudioEncoderAndroidType[AudioEncoderAndroidType["AMR_NB"] = 1] = "AMR_NB";
    AudioEncoderAndroidType[AudioEncoderAndroidType["AMR_WB"] = 2] = "AMR_WB";
    AudioEncoderAndroidType[AudioEncoderAndroidType["AAC"] = 3] = "AAC";
    AudioEncoderAndroidType[AudioEncoderAndroidType["HE_AAC"] = 4] = "HE_AAC";
    AudioEncoderAndroidType[AudioEncoderAndroidType["AAC_ELD"] = 5] = "AAC_ELD";
    AudioEncoderAndroidType[AudioEncoderAndroidType["VORBIS"] = 6] = "VORBIS";
})(AudioEncoderAndroidType || (AudioEncoderAndroidType = {}));
var AVEncodingOption;
(function (AVEncodingOption) {
    AVEncodingOption["lpcm"] = "lpcm";
    AVEncodingOption["ima4"] = "ima4";
    AVEncodingOption["aac"] = "aac";
    AVEncodingOption["MAC3"] = "MAC3";
    AVEncodingOption["MAC6"] = "MAC6";
    AVEncodingOption["ulaw"] = "ulaw";
    AVEncodingOption["alaw"] = "alaw";
    AVEncodingOption["mp1"] = "mp1";
    AVEncodingOption["mp2"] = "mp2";
    AVEncodingOption["alac"] = "alac";
    AVEncodingOption["amr"] = "amr";
    AVEncodingOption["flac"] = "flac";
    AVEncodingOption["opus"] = "opus";
})(AVEncodingOption || (AVEncodingOption = {}));
var AVEncoderAudioQualityIOSType;
(function (AVEncoderAudioQualityIOSType) {
    AVEncoderAudioQualityIOSType[AVEncoderAudioQualityIOSType["min"] = 0] = "min";
    AVEncoderAudioQualityIOSType[AVEncoderAudioQualityIOSType["low"] = 32] = "low";
    AVEncoderAudioQualityIOSType[AVEncoderAudioQualityIOSType["medium"] = 64] = "medium";
    AVEncoderAudioQualityIOSType[AVEncoderAudioQualityIOSType["high"] = 96] = "high";
    AVEncoderAudioQualityIOSType[AVEncoderAudioQualityIOSType["max"] = 127] = "max";
})(AVEncoderAudioQualityIOSType || (AVEncoderAudioQualityIOSType = {}));
var pad = function (num) {
    return ('0' + num).slice(-2);
};
var AudioRecorderPlayer = /** @class */ (function () {
    function AudioRecorderPlayer() {
        var _this = this;
        this.mmss = function (secs) {
            var minutes = Math.floor(secs / 60);
            secs = secs % 60;
            minutes = minutes % 60;
            // minutes = ('0' + minutes).slice(-2);
            // secs = ('0' + secs).slice(-2);
            return pad(minutes) + ':' + pad(secs);
        };
        this.mmssss = function (milisecs) {
            var secs = Math.floor(milisecs / 1000);
            var minutes = Math.floor(secs / 60);
            var seconds = secs % 60;
            var miliseconds = Math.floor((milisecs % 1000) / 10);
            return pad(minutes) + ':' + pad(seconds) + ':' + pad(miliseconds);
        };
        /**
         * set listerner from native module for recorder.
         * @returns {callBack(e: any)}
         */
        this.addRecordBackListener = function (e) {
            if (react_native__WEBPACK_IMPORTED_MODULE_0__["Platform"].OS === 'android') {
                _this._recorderSubscription = react_native__WEBPACK_IMPORTED_MODULE_0__["DeviceEventEmitter"].addListener('rn-recordback', e);
            }
            else {
                var myModuleEvt = new react_native__WEBPACK_IMPORTED_MODULE_0__["NativeEventEmitter"](RNAudioRecorderPlayer);
                _this._recorderSubscription = myModuleEvt.addListener('rn-recordback', e);
            }
        };
        /**
         * remove listener for recorder.
         * @returns {void}
         */
        this.removeRecordBackListener = function () {
            if (_this._recorderSubscription) {
                _this._recorderSubscription.remove();
                _this._recorderSubscription = null;
            }
        };
        /**
         * set listener from native module for player.
         * @returns {callBack(e: Event)}
         */
        this.addPlayBackListener = function (e) {
            if (react_native__WEBPACK_IMPORTED_MODULE_0__["Platform"].OS === 'android') {
                _this._playerSubscription = react_native__WEBPACK_IMPORTED_MODULE_0__["DeviceEventEmitter"].addListener('rn-playback', e);
            }
            else {
                var myModuleEvt = new react_native__WEBPACK_IMPORTED_MODULE_0__["NativeEventEmitter"](RNAudioRecorderPlayer);
                _this._playerSubscription = myModuleEvt.addListener('rn-playback', e);
            }
        };
        /**
         * remove listener for player.
         * @returns {void}
         */
        this.removePlayBackListener = function () {
            if (_this._playerSubscription) {
                _this._playerSubscription.remove();
                _this._playerSubscription = null;
            }
        };
        /**
         * start recording with param.
         * @param {string} uri audio uri.
         * @returns {Promise<string>}
         */
        this.startRecorder = function (uri, audioSets, meteringEnabled) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._isRecording) {
                    this._isRecording = true;
                    return [2 /*return*/, RNAudioRecorderPlayer.startRecorder(uri !== null && uri !== void 0 ? uri : 'DEFAULT', meteringEnabled !== null && meteringEnabled !== void 0 ? meteringEnabled : false, audioSets)];
                }
                return [2 /*return*/, 'Already recording'];
            });
        }); };
        /**
         * stop recording.
         * @returns {Promise<string>}
         */
        this.stopRecorder = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._isRecording) {
                    this._isRecording = false;
                    return [2 /*return*/, RNAudioRecorderPlayer.stopRecorder()];
                }
                return [2 /*return*/, 'Already stopped'];
            });
        }); };
        /**
         * resume playing.
         * @returns {Promise<string>}
         */
        this.resumePlayer = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._isPlaying)
                    return [2 /*return*/, 'No audio playing'];
                if (this._hasPaused) {
                    this._hasPaused = false;
                    return [2 /*return*/, RNAudioRecorderPlayer.resumePlayer()];
                }
                return [2 /*return*/, 'Already playing'];
            });
        }); };
        /**
         * start playing with param.
         * @param {string} uri audio uri.
         * @param {Record<string, string>} httpHeaders Set of http headers.
         * @returns {Promise<string>}
         */
        this.startPlayer = function (uri, httpHeaders) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!uri) {
                    uri = 'DEFAULT';
                }
                if (!this._isPlaying || this._hasPaused) {
                    this._isPlaying = true;
                    this._hasPaused = false;
                    if (react_native__WEBPACK_IMPORTED_MODULE_0__["Platform"].OS === 'android') {
                        return [2 /*return*/, RNAudioRecorderPlayer.startPlayer(uri, httpHeaders)];
                    }
                    return [2 /*return*/, RNAudioRecorderPlayer.startPlayer(uri)];
                }
                return [2 /*return*/];
            });
        }); };
        /**
         * stop playing.
         * @returns {Promise<string>}
         */
        this.stopPlayer = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._isPlaying) {
                    this._isPlaying = false;
                    this._hasPaused = false;
                    return [2 /*return*/, RNAudioRecorderPlayer.stopPlayer()];
                }
                return [2 /*return*/, 'Already stopped playing'];
            });
        }); };
        /**
         * pause playing.
         * @returns {Promise<string>}
         */
        this.pausePlayer = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this._isPlaying)
                    return [2 /*return*/, 'No audio playing'];
                if (!this._hasPaused) {
                    this._hasPaused = true;
                    return [2 /*return*/, RNAudioRecorderPlayer.pausePlayer()];
                }
                return [2 /*return*/];
            });
        }); };
        /**
         * seek to.
         * @param {number} time position seek to in second.
         * @returns {Promise<string>}
         */
        this.seekToPlayer = function (time) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (react_native__WEBPACK_IMPORTED_MODULE_0__["Platform"].OS === 'ios') {
                    time = time / 1000;
                }
                return [2 /*return*/, RNAudioRecorderPlayer.seekToPlayer(time)];
            });
        }); };
        /**
         * set volume.
         * @param {number} setVolume set volume.
         * @returns {Promise<string>}
         */
        this.setVolume = function (volume) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (volume < 0 || volume > 1) {
                    throw new Error('Value of volume should be between 0.0 to 1.0');
                }
                return [2 /*return*/, RNAudioRecorderPlayer.setVolume(volume)];
            });
        }); };
        /**
         * set subscription duration.
         * @param {number} sec subscription callback duration in seconds.
         * @returns {Promise<string>}
         */
        this.setSubscriptionDuration = function (sec) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, RNAudioRecorderPlayer.setSubscriptionDuration(sec)];
            });
        }); };
    }
    return AudioRecorderPlayer;
}());
/* harmony default export */ __webpack_exports__["default"] = (AudioRecorderPlayer);


/***/ }),

/***/ "./node_modules/react-native-button/Button.js":
/*!****************************************************!*\
  !*** ./node_modules/react-native-button/Button.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _coalesceNonElementChildren=_interopRequireDefault(__webpack_require__(/*! ./coalesceNonElementChildren */ "./node_modules/react-native-button/coalesceNonElementChildren.js"));var _jsxFileName="C:\\Users\\NathanRuth\\Documents\\Dev\\nativeAudioRecorder\\node_modules\\react-native-button\\Button.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var systemButtonOpacity=0.2;var Button=function(_Component){(0,_inherits2.default)(Button,_Component);var _super=_createSuper(Button);function Button(){(0,_classCallCheck2.default)(this,Button);return _super.apply(this,arguments);}(0,_createClass2.default)(Button,[{key:"render",value:function render(){var touchableProps={activeOpacity:this._computeActiveOpacity()};var containerStyle=[this.props.containerStyle,this.props.disabled?this.props.disabledContainerStyle:null];if(!this.props.disabled){touchableProps.onPress=this.props.onPress;touchableProps.onPressIn=this.props.onPressIn;touchableProps.onPressOut=this.props.onPressOut;touchableProps.onLongPress=this.props.onLongPress;touchableProps.delayPressIn=this.props.delayPressIn;touchableProps.delayPressOut=this.props.delayPressOut;touchableProps.delayLongPress=this.props.delayLongPress;}if(_reactNative.Platform.OS==='ios'){return _react.default.createElement(_reactNative.TouchableOpacity,(0,_extends2.default)({},touchableProps,{testID:this.props.testID,style:containerStyle,accessibilityLabel:this.props.accessibilityLabel,accessibilityRole:"button",__self:this,__source:{fileName:_jsxFileName,lineNumber:52,columnNumber:9}}),this._renderGroupedChildren());}else{var background=this.props.androidBackground?this.props.androidBackground:_reactNative.TouchableNativeFeedback.SelectableBackground();var padding=0;if(containerStyle[0]&&containerStyle[0].padding){padding=containerStyle[0].padding;var fixedStyle=(0,_extends2.default)({},containerStyle[0],{padding:0});containerStyle[0]=fixedStyle;}return _react.default.createElement(_reactNative.View,{style:containerStyle,__self:this,__source:{fileName:_jsxFileName,lineNumber:74,columnNumber:9}},_react.default.createElement(_reactNative.TouchableNativeFeedback,(0,_extends2.default)({},touchableProps,{style:{flex:1},testID:this.props.testID,accessibilityLabel:this.props.accessibilityLabel,accessibilityRole:"button",background:background,__self:this,__source:{fileName:_jsxFileName,lineNumber:75,columnNumber:11}}),_react.default.createElement(_reactNative.View,{style:{padding:padding},__self:this,__source:{fileName:_jsxFileName,lineNumber:82,columnNumber:13}},this._renderGroupedChildren())));}}},{key:"_renderGroupedChildren",value:function _renderGroupedChildren(){var _this=this;var disabled=this.props.disabled;var style=[styles.text,disabled?styles.disabledText:null,this.props.style,disabled?this.props.styleDisabled:null];var childGroupStyle=[styles.group,this.props.childGroupStyle];var children=(0,_coalesceNonElementChildren.default)(this.props.children,function(children,index){return _react.default.createElement(_reactNative.Text,{key:index,style:style,allowFontScaling:_this.props.allowFontScaling,__self:_this,__source:{fileName:_jsxFileName,lineNumber:106,columnNumber:9}},children);});switch(children.length){case 0:return null;case 1:return children[0];default:return _react.default.createElement(_reactNative.View,{style:childGroupStyle,__self:this,__source:{fileName:_jsxFileName,lineNumber:118,columnNumber:16}},children);}}},{key:"_computeActiveOpacity",value:function _computeActiveOpacity(){if(this.props.disabled){return 1;}return this.props.activeOpacity!=null?this.props.activeOpacity:systemButtonOpacity;}}]);return Button;}(_react.Component);exports.default=Button;Button.propTypes=(0,_extends2.default)({},_reactNative.TouchableOpacity.propTypes,{accessibilityLabel:_propTypes.default.string,allowFontScaling:_reactNative.Text.propTypes.allowFontScaling,containerStyle:_reactNative.ViewPropTypes.style,disabledContainerStyle:_reactNative.ViewPropTypes.style,disabled:_propTypes.default.bool,style:_reactNative.Text.propTypes.style,styleDisabled:_reactNative.Text.propTypes.style,childGroupStyle:_reactNative.ViewPropTypes.style,androidBackground:_propTypes.default.object});;var styles=_reactNative.StyleSheet.create({text:{color:'#007aff',fontSize:17,fontWeight:'500',textAlign:'center'},disabledText:{color:'#dcdcdc'},group:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}});

/***/ }),

/***/ "./node_modules/react-native-button/coalesceNonElementChildren.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-native-button/coalesceNonElementChildren.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=coalesceNonElementChildren;var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));function coalesceNonElementChildren(children,coalesceNodes){var coalescedChildren=[];var contiguousNonElements=[];_react.Children.forEach(children,function(child){if(!_react.default.isValidElement(child)){contiguousNonElements.push(child);return;}if(contiguousNonElements.length){coalescedChildren.push(coalesceNodes(contiguousNonElements,coalescedChildren.length));contiguousNonElements=[];}coalescedChildren.push(child);});if(contiguousNonElements.length){coalescedChildren.push(coalesceNodes(contiguousNonElements,coalescedChildren.length));}return coalescedChildren;}

/***/ }),

/***/ "./node_modules/react-native-permissions/lib/module/constants.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-native-permissions/lib/module/constants.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});exports.RESULTS=exports.PERMISSIONS=exports.IOS=exports.ANDROID=void 0;var ANDROID=Object.freeze({ACCEPT_HANDOVER:'android.permission.ACCEPT_HANDOVER',ACCESS_BACKGROUND_LOCATION:'android.permission.ACCESS_BACKGROUND_LOCATION',ACCESS_COARSE_LOCATION:'android.permission.ACCESS_COARSE_LOCATION',ACCESS_FINE_LOCATION:'android.permission.ACCESS_FINE_LOCATION',ACTIVITY_RECOGNITION:'android.permission.ACTIVITY_RECOGNITION',ADD_VOICEMAIL:'com.android.voicemail.permission.ADD_VOICEMAIL',ANSWER_PHONE_CALLS:'android.permission.ANSWER_PHONE_CALLS',BODY_SENSORS:'android.permission.BODY_SENSORS',CALL_PHONE:'android.permission.CALL_PHONE',CAMERA:'android.permission.CAMERA',GET_ACCOUNTS:'android.permission.GET_ACCOUNTS',PROCESS_OUTGOING_CALLS:'android.permission.PROCESS_OUTGOING_CALLS',READ_CALENDAR:'android.permission.READ_CALENDAR',READ_CALL_LOG:'android.permission.READ_CALL_LOG',READ_CONTACTS:'android.permission.READ_CONTACTS',READ_EXTERNAL_STORAGE:'android.permission.READ_EXTERNAL_STORAGE',READ_PHONE_NUMBERS:'android.permission.READ_PHONE_NUMBERS',READ_PHONE_STATE:'android.permission.READ_PHONE_STATE',READ_SMS:'android.permission.READ_SMS',RECEIVE_MMS:'android.permission.RECEIVE_MMS',RECEIVE_SMS:'android.permission.RECEIVE_SMS',RECEIVE_WAP_PUSH:'android.permission.RECEIVE_WAP_PUSH',RECORD_AUDIO:'android.permission.RECORD_AUDIO',SEND_SMS:'android.permission.SEND_SMS',USE_SIP:'android.permission.USE_SIP',WRITE_CALENDAR:'android.permission.WRITE_CALENDAR',WRITE_CALL_LOG:'android.permission.WRITE_CALL_LOG',WRITE_CONTACTS:'android.permission.WRITE_CONTACTS',WRITE_EXTERNAL_STORAGE:'android.permission.WRITE_EXTERNAL_STORAGE'});exports.ANDROID=ANDROID;var IOS=Object.freeze({APP_TRACKING_TRANSPARENCY:'ios.permission.APP_TRACKING_TRANSPARENCY',BLUETOOTH_PERIPHERAL:'ios.permission.BLUETOOTH_PERIPHERAL',CALENDARS:'ios.permission.CALENDARS',CAMERA:'ios.permission.CAMERA',CONTACTS:'ios.permission.CONTACTS',FACE_ID:'ios.permission.FACE_ID',LOCATION_ALWAYS:'ios.permission.LOCATION_ALWAYS',LOCATION_WHEN_IN_USE:'ios.permission.LOCATION_WHEN_IN_USE',MEDIA_LIBRARY:'ios.permission.MEDIA_LIBRARY',MICROPHONE:'ios.permission.MICROPHONE',MOTION:'ios.permission.MOTION',PHOTO_LIBRARY:'ios.permission.PHOTO_LIBRARY',REMINDERS:'ios.permission.REMINDERS',SIRI:'ios.permission.SIRI',SPEECH_RECOGNITION:'ios.permission.SPEECH_RECOGNITION',STOREKIT:'ios.permission.STOREKIT'});exports.IOS=IOS;var PERMISSIONS=Object.freeze({ANDROID:ANDROID,IOS:IOS});exports.PERMISSIONS=PERMISSIONS;var RESULTS=Object.freeze({UNAVAILABLE:'unavailable',DENIED:'denied',BLOCKED:'blocked',GRANTED:'granted'});exports.RESULTS=RESULTS;

/***/ }),

/***/ "./node_modules/react-native-permissions/lib/module/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-native-permissions/lib/module/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _exportNames={openSettings:true,check:true,request:true,checkNotifications:true,requestNotifications:true,checkMultiple:true,requestMultiple:true,PERMISSIONS:true,RESULTS:true};Object.defineProperty(exports,"PERMISSIONS",{enumerable:true,get:function get(){return _constants.PERMISSIONS;}});Object.defineProperty(exports,"RESULTS",{enumerable:true,get:function get(){return _constants.RESULTS;}});exports.default=exports.requestMultiple=exports.checkMultiple=exports.requestNotifications=exports.checkNotifications=exports.request=exports.check=exports.openSettings=void 0;var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _constants=__webpack_require__(/*! ./constants */ "./node_modules/react-native-permissions/lib/module/constants.js");var _module2=__webpack_require__(/*! ./module */ "./node_modules/react-native-permissions/lib/module/module.js");var _types=__webpack_require__(/*! ./types */ "./node_modules/react-native-permissions/lib/module/types.js");Object.keys(_types).forEach(function(key){if(key==="default"||key==="__esModule")return;if(Object.prototype.hasOwnProperty.call(_exportNames,key))return;if(key in exports&&exports[key]===_types[key])return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _types[key];}});});if(_reactNative.NativeModules.RNPermissions==null){throw new Error("react-native-permissions: NativeModule.RNPermissions is null. To fix this issue try these steps:\n  \u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then clean, rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n  \u2022 If you are getting this error while unit testing you need to mock the native module. You can use this to get started: https://github.com/react-native-community/react-native-permissions/blob/master/mock.js\n  If none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-community/react-native-permissions");}var openSettings=_module2.module.openSettings;exports.openSettings=openSettings;var check=_module2.module.check;exports.check=check;var request=_module2.module.request;exports.request=request;var checkNotifications=_module2.module.checkNotifications;exports.checkNotifications=checkNotifications;var requestNotifications=_module2.module.requestNotifications;exports.requestNotifications=requestNotifications;var checkMultiple=_module2.module.checkMultiple;exports.checkMultiple=checkMultiple;var requestMultiple=_module2.module.requestMultiple;exports.requestMultiple=requestMultiple;var _default={PERMISSIONS:_constants.PERMISSIONS,RESULTS:_constants.RESULTS,openSettings:openSettings,check:check,request:request,checkNotifications:checkNotifications,requestNotifications:requestNotifications,checkMultiple:checkMultiple,requestMultiple:requestMultiple};exports.default=_default;

/***/ }),

/***/ "./node_modules/react-native-permissions/lib/module/module.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-native-permissions/lib/module/module.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.module=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));var _constants=__webpack_require__(/*! ./constants */ "./node_modules/react-native-permissions/lib/module/constants.js");function check(){return _regenerator.default.async(function check$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",_constants.RESULTS.UNAVAILABLE);case 1:case"end":return _context.stop();}}},null,null,null,Promise);}function checkNotifications(){return _regenerator.default.async(function checkNotifications$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",{status:_constants.RESULTS.UNAVAILABLE,settings:{}});case 1:case"end":return _context2.stop();}}},null,null,null,Promise);}function checkMultiple(permissions){return _regenerator.default.async(function checkMultiple$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:return _context3.abrupt("return",permissions.reduce(function(acc,permission){acc[permission]=_constants.RESULTS.UNAVAILABLE;return acc;},{}));case 1:case"end":return _context3.stop();}}},null,null,null,Promise);}var _module={openSettings:Promise.reject,check:check,request:check,checkNotifications:checkNotifications,requestNotifications:checkNotifications,checkMultiple:checkMultiple,requestMultiple:checkMultiple};exports.module=_module;

/***/ }),

/***/ "./node_modules/react-native-permissions/lib/module/types.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-native-permissions/lib/module/types.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"Rationale",{enumerable:true,get:function get(){return _reactNative.Rationale;}});var _reactNative=__webpack_require__(/*! react-native */ "react-native");

/***/ }),

/***/ "./node_modules/react-native-vector-icons/MaterialIcons.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-native-vector-icons/MaterialIcons.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.getImageSourceSync=exports.getImageSource=exports.Button=exports.default=void 0;var _createIconSet=_interopRequireDefault(__webpack_require__(/*! ./lib/create-icon-set */ "./node_modules/react-native-vector-icons/lib/create-icon-set.js"));var _MaterialIcons=_interopRequireDefault(__webpack_require__(/*! ./glyphmaps/MaterialIcons.json */ "./node_modules/react-native-vector-icons/glyphmaps/MaterialIcons.json"));var iconSet=(0,_createIconSet.default)(_MaterialIcons.default,'Material Icons','MaterialIcons.ttf');var _default=iconSet;exports.default=_default;var Button=iconSet.Button,getImageSource=iconSet.getImageSource,getImageSourceSync=iconSet.getImageSourceSync;exports.getImageSourceSync=getImageSourceSync;exports.getImageSource=getImageSource;exports.Button=Button;

/***/ }),

/***/ "./node_modules/react-native-vector-icons/glyphmaps/MaterialIcons.json":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-native-vector-icons/glyphmaps/MaterialIcons.json ***!
  \*****************************************************************************/
/*! exports provided: 360, 10k, 10mp, 11mp, 12mp, 13mp, 14mp, 15mp, 16mp, 17mp, 18mp, 19mp, 1k, 1k-plus, 20mp, 21mp, 22mp, 23mp, 24mp, 2k, 2k-plus, 2mp, 3d-rotation, 3k, 3k-plus, 3mp, 4k, 4k-plus, 4mp, 5g, 5k, 5k-plus, 5mp, 6-ft-apart, 6k, 6k-plus, 6mp, 7k, 7k-plus, 7mp, 8k, 8k-plus, 8mp, 9k, 9k-plus, 9mp, ac-unit, access-alarm, access-alarms, access-time, accessibility, accessibility-new, accessible, accessible-forward, account-balance, account-balance-wallet, account-box, account-circle, account-tree, ad-units, adb, add, add-a-photo, add-alarm, add-alert, add-box, add-business, add-call, add-chart, add-circle, add-circle-outline, add-comment, add-ic-call, add-link, add-location, add-location-alt, add-moderator, add-photo-alternate, add-road, add-shopping-cart, add-task, add-to-drive, add-to-home-screen, add-to-photos, add-to-queue, addchart, adjust, admin-panel-settings, agriculture, airline-seat-flat, airline-seat-flat-angled, airline-seat-individual-suite, airline-seat-legroom-extra, airline-seat-legroom-normal, airline-seat-legroom-reduced, airline-seat-recline-extra, airline-seat-recline-normal, airplanemode-active, airplanemode-inactive, airplanemode-off, airplanemode-on, airplay, airport-shuttle, alarm, alarm-add, alarm-off, alarm-on, album, align-horizontal-center, align-horizontal-left, align-horizontal-right, align-vertical-bottom, align-vertical-center, align-vertical-top, all-inbox, all-inclusive, all-out, alt-route, alternate-email, amp-stories, analytics, anchor, android, animation, announcement, apartment, api, app-blocking, app-registration, app-settings-alt, approval, apps, architecture, archive, arrow-back, arrow-back-ios, arrow-circle-down, arrow-circle-up, arrow-downward, arrow-drop-down, arrow-drop-down-circle, arrow-drop-up, arrow-forward, arrow-forward-ios, arrow-left, arrow-right, arrow-right-alt, arrow-upward, art-track, article, aspect-ratio, assessment, assignment, assignment-ind, assignment-late, assignment-return, assignment-returned, assignment-turned-in, assistant, assistant-direction, assistant-navigation, assistant-photo, atm, attach-email, attach-file, attach-money, attachment, attractions, audiotrack, auto-awesome, auto-awesome-mosaic, auto-awesome-motion, auto-delete, auto-fix-high, auto-fix-normal, auto-fix-off, auto-stories, autorenew, av-timer, baby-changing-station, backpack, backspace, backup, backup-table, badge, bakery-dining, ballot, bar-chart, batch-prediction, bathtub, battery-alert, battery-charging-full, battery-full, battery-std, battery-unknown, beach-access, bedtime, beenhere, bento, bike-scooter, biotech, block, block-flipped, bluetooth, bluetooth-audio, bluetooth-connected, bluetooth-disabled, bluetooth-searching, blur-circular, blur-linear, blur-off, blur-on, bolt, book, book-online, bookmark, bookmark-border, bookmark-outline, bookmarks, border-all, border-bottom, border-clear, border-color, border-horizontal, border-inner, border-left, border-outer, border-right, border-style, border-top, border-vertical, branding-watermark, breakfast-dining, brightness-1, brightness-2, brightness-3, brightness-4, brightness-5, brightness-6, brightness-7, brightness-auto, brightness-high, brightness-low, brightness-medium, broken-image, browser-not-supported, brunch-dining, brush, bubble-chart, bug-report, build, build-circle, burst-mode, bus-alert, business, business-center, cached, cake, calculate, calendar-today, calendar-view-day, call, call-end, call-made, call-merge, call-missed, call-missed-outgoing, call-received, call-split, call-to-action, camera, camera-alt, camera-enhance, camera-front, camera-rear, camera-roll, campaign, cancel, cancel-presentation, cancel-schedule-send, car-rental, car-repair, card-giftcard, card-membership, card-travel, carpenter, cases, casino, cast, cast-connected, cast-for-education, category, celebration, cell-wifi, center-focus-strong, center-focus-weak, change-history, charging-station, chat, chat-bubble, chat-bubble-outline, check, check-box, check-box-outline-blank, check-circle, check-circle-outline, checkroom, chevron-left, chevron-right, child-care, child-friendly, chrome-reader-mode, circle, circle-notifications, class, clean-hands, cleaning-services, clear, clear-all, close, close-fullscreen, closed-caption, closed-caption-disabled, closed-caption-off, cloud, cloud-circle, cloud-done, cloud-download, cloud-off, cloud-queue, cloud-upload, code, collections, collections-bookmark, color-lens, colorize, comment, comment-bank, commute, compare, compare-arrows, compass-calibration, compress, computer, confirmation-num, confirmation-number, connect-without-contact, connected-tv, construction, contact-mail, contact-page, contact-phone, contact-support, contactless, contacts, content-copy, content-cut, content-paste, control-camera, control-point, control-point-duplicate, copyright, coronavirus, corporate-fare, countertops, create, create-new-folder, credit-card, crop, crop-16-9, crop-3-2, crop-5-4, crop-7-5, crop-din, crop-free, crop-landscape, crop-original, crop-portrait, crop-rotate, crop-square, dangerous, dashboard, dashboard-customize, data-usage, date-range, deck, dehaze, delete, delete-forever, delete-outline, delete-sweep, delivery-dining, departure-board, description, design-services, desktop-access-disabled, desktop-mac, desktop-windows, details, developer-board, developer-mode, device-hub, device-thermostat, device-unknown, devices, devices-other, dialer-sip, dialpad, dinner-dining, directions, directions-bike, directions-boat, directions-bus, directions-car, directions-ferry, directions-off, directions-railway, directions-run, directions-subway, directions-train, directions-transit, directions-walk, dirty-lens, disabled-by-default, disc-full, dnd-forwardslash, dns, do-not-disturb, do-not-disturb-alt, do-not-disturb-off, do-not-disturb-on, do-not-step, do-not-touch, dock, domain, domain-disabled, domain-verification, done, done-all, done-outline, donut-large, donut-small, double-arrow, drafts, drag-handle, drag-indicator, drive-eta, drive-file-move, drive-file-move-outline, drive-file-rename-outline, drive-folder-upload, dry, dry-cleaning, duo, dvr, dynamic-feed, dynamic-form, east, eco, edit, edit-attributes, edit-location, edit-off, edit-road, eject, elderly, electric-bike, electric-car, electric-moped, electric-rickshaw, electric-scooter, electrical-services, elevator, email, emoji-emotions, emoji-events, emoji-flags, emoji-food-beverage, emoji-nature, emoji-objects, emoji-people, emoji-symbols, emoji-transportation, engineering, enhance-photo-translate, enhanced-encryption, equalizer, error, error-outline, escalator, escalator-warning, euro, euro-symbol, ev-station, event, event-available, event-busy, event-note, event-seat, exit-to-app, expand, expand-less, expand-more, explicit, explore, explore-off, exposure, exposure-minus-1, exposure-minus-2, exposure-neg-1, exposure-neg-2, exposure-plus-1, exposure-plus-2, exposure-zero, extension, face, face-retouching-natural, facebook, fact-check, family-restroom, fast-forward, fast-rewind, fastfood, favorite, favorite-border, favorite-outline, featured-play-list, featured-video, feedback, fence, festival, fiber-dvr, fiber-manual-record, fiber-new, fiber-pin, fiber-smart-record, file-copy, file-download, file-download-done, file-present, file-upload, filter, filter-1, filter-2, filter-3, filter-4, filter-5, filter-6, filter-7, filter-8, filter-9, filter-9-plus, filter-alt, filter-b-and-w, filter-center-focus, filter-drama, filter-frames, filter-hdr, filter-list, filter-list-alt, filter-none, filter-tilt-shift, filter-vintage, find-in-page, find-replace, fingerprint, fire-extinguisher, fire-hydrant, fireplace, first-page, fit-screen, fitness-center, flag, flaky, flare, flash-auto, flash-off, flash-on, flight, flight-land, flight-takeoff, flip, flip-camera-android, flip-camera-ios, flip-to-back, flip-to-front, folder, folder-open, folder-shared, folder-special, follow-the-signs, font-download, food-bank, format-align-center, format-align-justify, format-align-left, format-align-right, format-bold, format-clear, format-color-fill, format-color-reset, format-color-text, format-indent-decrease, format-indent-increase, format-italic, format-line-spacing, format-list-bulleted, format-list-numbered, format-list-numbered-rtl, format-paint, format-quote, format-shapes, format-size, format-strikethrough, format-textdirection-l-to-r, format-textdirection-r-to-l, format-underline, format-underlined, forum, forward, forward-10, forward-30, forward-5, forward-to-inbox, foundation, free-breakfast, fullscreen, fullscreen-exit, functions, g-translate, gamepad, games, gavel, gesture, get-app, gif, goat, golf-course, gps-fixed, gps-not-fixed, gps-off, grade, gradient, grading, grain, graphic-eq, grass, grid-off, grid-on, grid-view, group, group-add, group-work, groups, hail, handyman, hardware, hd, hdr-enhanced-select, hdr-off, hdr-on, hdr-strong, hdr-weak, headset, headset-mic, headset-off, healing, hearing, hearing-disabled, height, help, help-center, help-outline, high-quality, highlight, highlight-alt, highlight-off, highlight-remove, history, history-edu, history-toggle-off, home, home-filled, home-repair-service, home-work, horizontal-distribute, horizontal-rule, horizontal-split, hot-tub, hotel, hourglass-bottom, hourglass-disabled, hourglass-empty, hourglass-full, hourglass-top, house, house-siding, how-to-reg, how-to-vote, http, https, hvac, icecream, image, image-aspect-ratio, image-not-supported, image-search, imagesearch-roller, import-contacts, import-export, important-devices, inbox, indeterminate-check-box, info, info-outline, input, insert-chart, insert-chart-outlined, insert-comment, insert-drive-file, insert-emoticon, insert-invitation, insert-link, insert-photo, insights, integration-instructions, inventory, invert-colors, invert-colors-off, invert-colors-on, ios-share, iso, keyboard, keyboard-arrow-down, keyboard-arrow-left, keyboard-arrow-right, keyboard-arrow-up, keyboard-backspace, keyboard-capslock, keyboard-control, keyboard-hide, keyboard-return, keyboard-tab, keyboard-voice, king-bed, kitchen, label, label-important, label-important-outline, label-off, label-outline, landscape, language, laptop, laptop-chromebook, laptop-mac, laptop-windows, last-page, launch, layers, layers-clear, leaderboard, leak-add, leak-remove, leave-bags-at-home, legend-toggle, lens, library-add, library-add-check, library-books, library-music, lightbulb, lightbulb-outline, line-style, line-weight, linear-scale, link, link-off, linked-camera, liquor, list, list-alt, live-help, live-tv, local-activity, local-airport, local-atm, local-attraction, local-bar, local-cafe, local-car-wash, local-convenience-store, local-dining, local-drink, local-fire-department, local-florist, local-gas-station, local-grocery-store, local-hospital, local-hotel, local-laundry-service, local-library, local-mall, local-movies, local-offer, local-parking, local-pharmacy, local-phone, local-pizza, local-play, local-police, local-post-office, local-print-shop, local-printshop, local-restaurant, local-see, local-shipping, local-taxi, location-city, location-disabled, location-history, location-off, location-on, location-pin, location-searching, lock, lock-clock, lock-open, lock-outline, login, logout, looks, looks-3, looks-4, looks-5, looks-6, looks-one, looks-two, loop, loupe, low-priority, loyalty, luggage, lunch-dining, mail, mail-outline, map, maps-ugc, margin, mark-as-unread, mark-chat-read, mark-chat-unread, mark-email-read, mark-email-unread, markunread, markunread-mailbox, masks, maximize, mediation, medical-services, meeting-room, memory, menu, menu-book, menu-open, merge-type, message, messenger, messenger-outline, mic, mic-external-off, mic-external-on, mic-none, mic-off, microwave, military-tech, minimize, miscellaneous-services, missed-video-call, mms, mobile-friendly, mobile-off, mobile-screen-share, mode-comment, mode-edit, model-training, monetization-on, money, money-off, monitor, monochrome-photos, mood, mood-bad, moped, more, more-horiz, more-time, more-vert, motion-photos-off, motion-photos-on, motion-photos-pause, motion-photos-paused, motorcycle, mouse, move-to-inbox, movie, movie-creation, movie-filter, mp, multiline-chart, multiple-stop, multitrack-audio, museum, music-note, music-off, music-video, my-library-add, my-library-books, my-library-music, my-location, nat, nature, nature-people, navigate-before, navigate-next, navigation, near-me, near-me-disabled, network-cell, network-check, network-locked, network-wifi, new-releases, next-plan, next-week, nfc, night-shelter, nightlife, nightlight-round, nights-stay, no-backpack, no-cell, no-drinks, no-encryption, no-flash, no-food, no-luggage, no-meals, no-meals-ouline, no-meeting-room, no-photography, no-sim, no-stroller, no-transfer, north, north-east, north-west, not-accessible, not-interested, not-listed-location, not-started, note, note-add, notes, notification-important, notifications, notifications-active, notifications-none, notifications-off, notifications-on, notifications-paused, now-wallpaper, now-widgets, offline-bolt, offline-pin, offline-share, ondemand-video, online-prediction, opacity, open-in-browser, open-in-full, open-in-new, open-with, outbond, outbox, outdoor-grill, outgoing-mail, outlet, outlined-flag, padding, pages, pageview, palette, pan-tool, panorama, panorama-fish-eye, panorama-fisheye, panorama-horizontal, panorama-horizontal-select, panorama-photosphere, panorama-photosphere-select, panorama-vertical, panorama-vertical-select, panorama-wide-angle, panorama-wide-angle-select, park, party-mode, pause, pause-circle-filled, pause-circle-outline, pause-presentation, payment, payments, pedal-bike, pending, pending-actions, people, people-alt, people-outline, perm-camera-mic, perm-contact-cal, perm-contact-calendar, perm-data-setting, perm-device-info, perm-device-information, perm-identity, perm-media, perm-phone-msg, perm-scan-wifi, person, person-add, person-add-alt, person-add-alt-1, person-add-disabled, person-outline, person-pin, person-pin-circle, person-remove, person-remove-alt-1, person-search, personal-video, pest-control, pest-control-rodent, pets, phone, phone-android, phone-bluetooth-speaker, phone-callback, phone-disabled, phone-enabled, phone-forwarded, phone-in-talk, phone-iphone, phone-locked, phone-missed, phone-paused, phonelink, phonelink-erase, phonelink-lock, phonelink-off, phonelink-ring, phonelink-setup, photo, photo-album, photo-camera, photo-camera-back, photo-camera-front, photo-filter, photo-library, photo-size-select-actual, photo-size-select-large, photo-size-select-small, picture-as-pdf, picture-in-picture, picture-in-picture-alt, pie-chart, pie-chart-outlined, pin-drop, pivot-table-chart, place, plagiarism, play-arrow, play-circle-fill, play-circle-filled, play-circle-outline, play-disabled, play-for-work, playlist-add, playlist-add-check, playlist-play, plumbing, plus-one, point-of-sale, policy, poll, polymer, pool, portable-wifi-off, portrait, post-add, power, power-input, power-off, power-settings-new, pregnant-woman, present-to-all, preview, print, print-disabled, priority-high, privacy-tip, psychology, public, public-off, publish, published-with-changes, push-pin, qr-code, qr-code-2, qr-code-scanner, query-builder, question-answer, queue, queue-music, queue-play-next, quick-contacts-dialer, quick-contacts-mail, quickreply, radio, radio-button-checked, radio-button-off, radio-button-on, radio-button-unchecked, railway-alert, ramen-dining, rate-review, read-more, receipt, receipt-long, recent-actors, recommend, record-voice-over, redeem, redo, reduce-capacity, refresh, remove, remove-circle, remove-circle-outline, remove-done, remove-from-queue, remove-moderator, remove-red-eye, remove-shopping-cart, reorder, repeat, repeat-on, repeat-one, repeat-one-on, replay, replay-10, replay-30, replay-5, replay-circle-filled, reply, reply-all, report, report-off, report-problem, request-page, request-quote, reset-tv, restaurant, restaurant-menu, restore, restore-from-trash, restore-page, rice-bowl, ring-volume, roofing, room, room-preferences, room-service, rotate-90-degrees-ccw, rotate-left, rotate-right, rounded-corner, router, rowing, rss-feed, rtt, rule, rule-folder, run-circle, rv-hookup, sanitizer, satellite, save, save-alt, saved-search, scanner, scatter-plot, schedule, schedule-send, school, science, score, screen-lock-landscape, screen-lock-portrait, screen-lock-rotation, screen-rotation, screen-search-desktop, screen-share, sd, sd-card, sd-storage, search, search-off, security, segment, select-all, self-improvement, send, send-and-archive, send-to-mobile, sensor-door, sensor-window, sentiment-dissatisfied, sentiment-neutral, sentiment-satisfied, sentiment-satisfied-alt, sentiment-very-dissatisfied, sentiment-very-satisfied, set-meal, settings, settings-applications, settings-backup-restore, settings-bluetooth, settings-brightness, settings-cell, settings-display, settings-ethernet, settings-input-antenna, settings-input-component, settings-input-composite, settings-input-hdmi, settings-input-svideo, settings-overscan, settings-phone, settings-power, settings-remote, settings-system-daydream, settings-voice, share, shield, shop, shop-two, shopping-bag, shopping-basket, shopping-cart, short-text, show-chart, shuffle, shuffle-on, shutter-speed, sick, signal-cellular-0-bar, signal-cellular-4-bar, signal-cellular-alt, signal-cellular-connected-no-internet-4-bar, signal-cellular-no-sim, signal-cellular-null, signal-cellular-off, signal-wifi-0-bar, signal-wifi-4-bar, signal-wifi-4-bar-lock, signal-wifi-off, sim-card, sim-card-alert, single-bed, skip-next, skip-previous, slideshow, slow-motion-video, smart-button, smartphone, smoke-free, smoking-rooms, sms, sms-failed, snippet-folder, snooze, soap, sort, sort-by-alpha, source, south, south-east, south-west, spa, space-bar, speaker, speaker-group, speaker-notes, speaker-notes-off, speaker-phone, speed, spellcheck, sports, sports-bar, sports-baseball, sports-basketball, sports-cricket, sports-esports, sports-football, sports-golf, sports-handball, sports-hockey, sports-kabaddi, sports-mma, sports-motorsports, sports-rugby, sports-soccer, sports-tennis, sports-volleyball, square-foot, stacked-bar-chart, stacked-line-chart, stairs, star, star-border, star-half, star-outline, star-rate, stars, stay-current-landscape, stay-current-portrait, stay-primary-landscape, stay-primary-portrait, sticky-note-2, stop, stop-circle, stop-screen-share, storage, store, store-mall-directory, storefront, straighten, stream, streetview, strikethrough-s, stroller, style, subdirectory-arrow-left, subdirectory-arrow-right, subject, subscript, subscriptions, subtitles, subtitles-off, subway, superscript, supervised-user-circle, supervisor-account, support, support-agent, surround-sound, swap-calls, swap-horiz, swap-horizontal-circle, swap-vert, swap-vert-circle, swap-vertical-circle, swipe, switch-account, switch-camera, switch-left, switch-right, switch-video, sync, sync-alt, sync-disabled, sync-problem, system-update, system-update-alt, system-update-tv, tab, tab-unselected, table-chart, table-rows, table-view, tablet, tablet-android, tablet-mac, tag, tag-faces, takeout-dining, tap-and-play, tapas, taxi-alert, terrain, text-fields, text-format, text-rotate-up, text-rotate-vertical, text-rotation-angledown, text-rotation-angleup, text-rotation-down, text-rotation-none, text-snippet, textsms, texture, theater-comedy, theaters, thumb-down, thumb-down-alt, thumb-down-off-alt, thumb-up, thumb-up-alt, thumb-up-off-alt, thumbs-up-down, time-to-leave, timelapse, timeline, timer, timer-10, timer-3, timer-off, title, toc, today, toggle-off, toggle-on, toll, tonality, topic, touch-app, tour, toys, track-changes, traffic, train, tram, transfer-within-a-station, transform, transit-enterexit, translate, trending-down, trending-flat, trending-neutral, trending-up, trip-origin, tty, tune, turned-in, turned-in-not, tv, tv-off, two-wheeler, umbrella, unarchive, undo, unfold-less, unfold-more, unpublished, unsubscribe, update, update-disabled, upgrade, upload-file, usb, verified, verified-user, vertical-align-bottom, vertical-align-center, vertical-align-top, vertical-distribute, vertical-split, vibration, video-call, video-collection, video-label, video-library, video-settings, videocam, videocam-off, videogame-asset, view-agenda, view-array, view-carousel, view-column, view-comfortable, view-comfy, view-compact, view-day, view-headline, view-in-ar, view-list, view-module, view-quilt, view-sidebar, view-stream, view-week, vignette, visibility, visibility-off, voice-chat, voice-over-off, voicemail, volume-down, volume-mute, volume-off, volume-up, volunteer-activism, vpn-key, vpn-lock, wallet-giftcard, wallet-membership, wallet-travel, wallpaper, warning, wash, watch, watch-later, water-damage, waterfall-chart, waves, wb-auto, wb-cloudy, wb-incandescent, wb-iridescent, wb-shade, wb-sunny, wb-twighlight, wc, web, web-asset, weekend, west, whatshot, wheelchair-pickup, where-to-vote, widgets, wifi, wifi-calling, wifi-lock, wifi-off, wifi-protected-setup, wifi-tethering, wine-bar, work, work-off, work-outline, workspaces-filled, workspaces-outline, wrap-text, wrong-location, wysiwyg, youtube-searched-for, zoom-in, zoom-out, zoom-out-map, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"360\":58743,\"10k\":59729,\"10mp\":59730,\"11mp\":59731,\"12mp\":59732,\"13mp\":59733,\"14mp\":59734,\"15mp\":59735,\"16mp\":59736,\"17mp\":59737,\"18mp\":59738,\"19mp\":59739,\"1k\":59740,\"1k-plus\":59741,\"20mp\":59742,\"21mp\":59743,\"22mp\":59744,\"23mp\":59745,\"24mp\":59746,\"2k\":59747,\"2k-plus\":59748,\"2mp\":59749,\"3d-rotation\":59469,\"3k\":59750,\"3k-plus\":59751,\"3mp\":59752,\"4k\":57458,\"4k-plus\":59753,\"4mp\":59754,\"5g\":61240,\"5k\":59755,\"5k-plus\":59756,\"5mp\":59757,\"6-ft-apart\":61982,\"6k\":59758,\"6k-plus\":59759,\"6mp\":59760,\"7k\":59761,\"7k-plus\":59762,\"7mp\":59763,\"8k\":59764,\"8k-plus\":59765,\"8mp\":59766,\"9k\":59767,\"9k-plus\":59768,\"9mp\":59769,\"ac-unit\":60219,\"access-alarm\":57744,\"access-alarms\":57745,\"access-time\":57746,\"accessibility\":59470,\"accessibility-new\":59692,\"accessible\":59668,\"accessible-forward\":59700,\"account-balance\":59471,\"account-balance-wallet\":59472,\"account-box\":59473,\"account-circle\":59475,\"account-tree\":59770,\"ad-units\":61241,\"adb\":58894,\"add\":57669,\"add-a-photo\":58425,\"add-alarm\":57747,\"add-alert\":57347,\"add-box\":57670,\"add-business\":59177,\"add-call\":57576,\"add-chart\":59771,\"add-circle\":57671,\"add-circle-outline\":57672,\"add-comment\":57958,\"add-ic-call\":59772,\"add-link\":57720,\"add-location\":58727,\"add-location-alt\":61242,\"add-moderator\":59773,\"add-photo-alternate\":58430,\"add-road\":61243,\"add-shopping-cart\":59476,\"add-task\":62010,\"add-to-drive\":58972,\"add-to-home-screen\":57854,\"add-to-photos\":58269,\"add-to-queue\":57436,\"addchart\":61244,\"adjust\":58270,\"admin-panel-settings\":61245,\"agriculture\":60025,\"airline-seat-flat\":58928,\"airline-seat-flat-angled\":58929,\"airline-seat-individual-suite\":58930,\"airline-seat-legroom-extra\":58931,\"airline-seat-legroom-normal\":58932,\"airline-seat-legroom-reduced\":58933,\"airline-seat-recline-extra\":58934,\"airline-seat-recline-normal\":58935,\"airplanemode-active\":57749,\"airplanemode-inactive\":57748,\"airplanemode-off\":57748,\"airplanemode-on\":57749,\"airplay\":57429,\"airport-shuttle\":60220,\"alarm\":59477,\"alarm-add\":59478,\"alarm-off\":59479,\"alarm-on\":59480,\"album\":57369,\"align-horizontal-center\":57359,\"align-horizontal-left\":57357,\"align-horizontal-right\":57360,\"align-vertical-bottom\":57365,\"align-vertical-center\":57361,\"align-vertical-top\":57356,\"all-inbox\":59775,\"all-inclusive\":60221,\"all-out\":59659,\"alt-route\":61828,\"alternate-email\":57574,\"amp-stories\":59923,\"analytics\":61246,\"anchor\":61901,\"android\":59481,\"animation\":59164,\"announcement\":59482,\"apartment\":59968,\"api\":61879,\"app-blocking\":61247,\"app-registration\":61248,\"app-settings-alt\":61249,\"approval\":59778,\"apps\":58819,\"architecture\":59963,\"archive\":57673,\"arrow-back\":58820,\"arrow-back-ios\":58848,\"arrow-circle-down\":61825,\"arrow-circle-up\":61826,\"arrow-downward\":58843,\"arrow-drop-down\":58821,\"arrow-drop-down-circle\":58822,\"arrow-drop-up\":58823,\"arrow-forward\":58824,\"arrow-forward-ios\":58849,\"arrow-left\":58846,\"arrow-right\":58847,\"arrow-right-alt\":59713,\"arrow-upward\":58840,\"art-track\":57440,\"article\":61250,\"aspect-ratio\":59483,\"assessment\":59484,\"assignment\":59485,\"assignment-ind\":59486,\"assignment-late\":59487,\"assignment-return\":59488,\"assignment-returned\":59489,\"assignment-turned-in\":59490,\"assistant\":58271,\"assistant-direction\":59784,\"assistant-navigation\":59785,\"assistant-photo\":58272,\"atm\":58739,\"attach-email\":59998,\"attach-file\":57894,\"attach-money\":57895,\"attachment\":58044,\"attractions\":59986,\"audiotrack\":58273,\"auto-awesome\":58975,\"auto-awesome-mosaic\":58976,\"auto-awesome-motion\":58977,\"auto-delete\":59980,\"auto-fix-high\":58979,\"auto-fix-normal\":58980,\"auto-fix-off\":58981,\"auto-stories\":58982,\"autorenew\":59491,\"av-timer\":57371,\"baby-changing-station\":61851,\"backpack\":61852,\"backspace\":57674,\"backup\":59492,\"backup-table\":61251,\"badge\":60007,\"bakery-dining\":59987,\"ballot\":57714,\"bar-chart\":57963,\"batch-prediction\":61685,\"bathtub\":59969,\"battery-alert\":57756,\"battery-charging-full\":57763,\"battery-full\":57764,\"battery-std\":57765,\"battery-unknown\":57766,\"beach-access\":60222,\"bedtime\":61252,\"beenhere\":58669,\"bento\":61940,\"bike-scooter\":61253,\"biotech\":59962,\"block\":57675,\"block-flipped\":61254,\"bluetooth\":57767,\"bluetooth-audio\":58895,\"bluetooth-connected\":57768,\"bluetooth-disabled\":57769,\"bluetooth-searching\":57770,\"blur-circular\":58274,\"blur-linear\":58275,\"blur-off\":58276,\"blur-on\":58277,\"bolt\":59915,\"book\":59493,\"book-online\":61975,\"bookmark\":59494,\"bookmark-border\":59495,\"bookmark-outline\":59495,\"bookmarks\":59787,\"border-all\":57896,\"border-bottom\":57897,\"border-clear\":57898,\"border-color\":57899,\"border-horizontal\":57900,\"border-inner\":57901,\"border-left\":57902,\"border-outer\":57903,\"border-right\":57904,\"border-style\":57905,\"border-top\":57906,\"border-vertical\":57907,\"branding-watermark\":57451,\"breakfast-dining\":59988,\"brightness-1\":58278,\"brightness-2\":58279,\"brightness-3\":58280,\"brightness-4\":58281,\"brightness-5\":58282,\"brightness-6\":58283,\"brightness-7\":58284,\"brightness-auto\":57771,\"brightness-high\":57772,\"brightness-low\":57773,\"brightness-medium\":57774,\"broken-image\":58285,\"browser-not-supported\":61255,\"brunch-dining\":60019,\"brush\":58286,\"bubble-chart\":59101,\"bug-report\":59496,\"build\":59497,\"build-circle\":61256,\"burst-mode\":58428,\"bus-alert\":59791,\"business\":57519,\"business-center\":60223,\"cached\":59498,\"cake\":59369,\"calculate\":59999,\"calendar-today\":59701,\"calendar-view-day\":59702,\"call\":57520,\"call-end\":57521,\"call-made\":57522,\"call-merge\":57523,\"call-missed\":57524,\"call-missed-outgoing\":57572,\"call-received\":57525,\"call-split\":57526,\"call-to-action\":57452,\"camera\":58287,\"camera-alt\":58288,\"camera-enhance\":59644,\"camera-front\":58289,\"camera-rear\":58290,\"camera-roll\":58291,\"campaign\":61257,\"cancel\":58825,\"cancel-presentation\":57577,\"cancel-schedule-send\":59961,\"car-rental\":59989,\"car-repair\":59990,\"card-giftcard\":59638,\"card-membership\":59639,\"card-travel\":59640,\"carpenter\":61944,\"cases\":59794,\"casino\":60224,\"cast\":58119,\"cast-connected\":58120,\"cast-for-education\":61420,\"category\":58740,\"celebration\":60005,\"cell-wifi\":57580,\"center-focus-strong\":58292,\"center-focus-weak\":58293,\"change-history\":59499,\"charging-station\":61853,\"chat\":57527,\"chat-bubble\":57546,\"chat-bubble-outline\":57547,\"check\":58826,\"check-box\":59444,\"check-box-outline-blank\":59445,\"check-circle\":59500,\"check-circle-outline\":59693,\"checkroom\":61854,\"chevron-left\":58827,\"chevron-right\":58828,\"child-care\":60225,\"child-friendly\":60226,\"chrome-reader-mode\":59501,\"circle\":61258,\"circle-notifications\":59796,\"class\":59502,\"clean-hands\":61983,\"cleaning-services\":61695,\"clear\":57676,\"clear-all\":57528,\"close\":58829,\"close-fullscreen\":61903,\"closed-caption\":57372,\"closed-caption-disabled\":61916,\"closed-caption-off\":59798,\"cloud\":58045,\"cloud-circle\":58046,\"cloud-done\":58047,\"cloud-download\":58048,\"cloud-off\":58049,\"cloud-queue\":58050,\"cloud-upload\":58051,\"code\":59503,\"collections\":58294,\"collections-bookmark\":58417,\"color-lens\":58295,\"colorize\":58296,\"comment\":57529,\"comment-bank\":59982,\"commute\":59712,\"compare\":58297,\"compare-arrows\":59669,\"compass-calibration\":58748,\"compress\":59725,\"computer\":58122,\"confirmation-num\":58936,\"confirmation-number\":58936,\"connect-without-contact\":61987,\"connected-tv\":59800,\"construction\":59964,\"contact-mail\":57552,\"contact-page\":61998,\"contact-phone\":57551,\"contact-support\":59724,\"contactless\":60017,\"contacts\":57530,\"content-copy\":57677,\"content-cut\":57678,\"content-paste\":57679,\"control-camera\":57460,\"control-point\":58298,\"control-point-duplicate\":58299,\"copyright\":59660,\"coronavirus\":61985,\"corporate-fare\":61904,\"countertops\":61943,\"create\":57680,\"create-new-folder\":58060,\"credit-card\":59504,\"crop\":58302,\"crop-16-9\":58300,\"crop-3-2\":58301,\"crop-5-4\":58303,\"crop-7-5\":58304,\"crop-din\":58305,\"crop-free\":58306,\"crop-landscape\":58307,\"crop-original\":58308,\"crop-portrait\":58309,\"crop-rotate\":58423,\"crop-square\":58310,\"dangerous\":59802,\"dashboard\":59505,\"dashboard-customize\":59803,\"data-usage\":57775,\"date-range\":59670,\"deck\":59970,\"dehaze\":58311,\"delete\":59506,\"delete-forever\":59691,\"delete-outline\":59694,\"delete-sweep\":57708,\"delivery-dining\":60018,\"departure-board\":58742,\"description\":59507,\"design-services\":61706,\"desktop-access-disabled\":59805,\"desktop-mac\":58123,\"desktop-windows\":58124,\"details\":58312,\"developer-board\":58125,\"developer-mode\":57776,\"device-hub\":58165,\"device-thermostat\":57855,\"device-unknown\":58169,\"devices\":57777,\"devices-other\":58167,\"dialer-sip\":57531,\"dialpad\":57532,\"dinner-dining\":59991,\"directions\":58670,\"directions-bike\":58671,\"directions-boat\":58674,\"directions-bus\":58672,\"directions-car\":58673,\"directions-ferry\":58674,\"directions-off\":61711,\"directions-railway\":58676,\"directions-run\":58726,\"directions-subway\":58675,\"directions-train\":58676,\"directions-transit\":58677,\"directions-walk\":58678,\"dirty-lens\":61259,\"disabled-by-default\":62000,\"disc-full\":58896,\"dnd-forwardslash\":58897,\"dns\":59509,\"do-not-disturb\":58898,\"do-not-disturb-alt\":58897,\"do-not-disturb-off\":58947,\"do-not-disturb-on\":58948,\"do-not-step\":61855,\"do-not-touch\":61872,\"dock\":58126,\"domain\":59374,\"domain-disabled\":57583,\"domain-verification\":61260,\"done\":59510,\"done-all\":59511,\"done-outline\":59695,\"donut-large\":59671,\"donut-small\":59672,\"double-arrow\":59984,\"drafts\":57681,\"drag-handle\":57949,\"drag-indicator\":59717,\"drive-eta\":58899,\"drive-file-move\":58997,\"drive-file-move-outline\":59809,\"drive-file-rename-outline\":59810,\"drive-folder-upload\":59811,\"dry\":61875,\"dry-cleaning\":59992,\"duo\":59813,\"dvr\":57778,\"dynamic-feed\":59924,\"dynamic-form\":61887,\"east\":61919,\"eco\":59957,\"edit\":58313,\"edit-attributes\":58744,\"edit-location\":58728,\"edit-off\":59728,\"edit-road\":61261,\"eject\":59643,\"elderly\":61978,\"electric-bike\":60187,\"electric-car\":60188,\"electric-moped\":60189,\"electric-rickshaw\":60190,\"electric-scooter\":60191,\"electrical-services\":61698,\"elevator\":61856,\"email\":57534,\"emoji-emotions\":59938,\"emoji-events\":59939,\"emoji-flags\":59930,\"emoji-food-beverage\":59931,\"emoji-nature\":59932,\"emoji-objects\":59940,\"emoji-people\":59933,\"emoji-symbols\":59934,\"emoji-transportation\":59935,\"engineering\":59965,\"enhance-photo-translate\":59644,\"enhanced-encryption\":58943,\"equalizer\":57373,\"error\":57344,\"error-outline\":57345,\"escalator\":61857,\"escalator-warning\":61868,\"euro\":59925,\"euro-symbol\":59686,\"ev-station\":58733,\"event\":59512,\"event-available\":58900,\"event-busy\":58901,\"event-note\":58902,\"event-seat\":59651,\"exit-to-app\":59513,\"expand\":59727,\"expand-less\":58830,\"expand-more\":58831,\"explicit\":57374,\"explore\":59514,\"explore-off\":59816,\"exposure\":58314,\"exposure-minus-1\":58315,\"exposure-minus-2\":58316,\"exposure-neg-1\":58315,\"exposure-neg-2\":58316,\"exposure-plus-1\":58317,\"exposure-plus-2\":58318,\"exposure-zero\":58319,\"extension\":59515,\"face\":59516,\"face-retouching-natural\":61262,\"facebook\":62004,\"fact-check\":61637,\"family-restroom\":61858,\"fast-forward\":57375,\"fast-rewind\":57376,\"fastfood\":58746,\"favorite\":59517,\"favorite-border\":59518,\"favorite-outline\":59518,\"featured-play-list\":57453,\"featured-video\":57454,\"feedback\":59519,\"fence\":61942,\"festival\":60008,\"fiber-dvr\":57437,\"fiber-manual-record\":57441,\"fiber-new\":57438,\"fiber-pin\":57450,\"fiber-smart-record\":57442,\"file-copy\":57715,\"file-download\":58052,\"file-download-done\":59818,\"file-present\":59918,\"file-upload\":58054,\"filter\":58323,\"filter-1\":58320,\"filter-2\":58321,\"filter-3\":58322,\"filter-4\":58324,\"filter-5\":58325,\"filter-6\":58326,\"filter-7\":58327,\"filter-8\":58328,\"filter-9\":58329,\"filter-9-plus\":58330,\"filter-alt\":61263,\"filter-b-and-w\":58331,\"filter-center-focus\":58332,\"filter-drama\":58333,\"filter-frames\":58334,\"filter-hdr\":58335,\"filter-list\":57682,\"filter-list-alt\":59726,\"filter-none\":58336,\"filter-tilt-shift\":58338,\"filter-vintage\":58339,\"find-in-page\":59520,\"find-replace\":59521,\"fingerprint\":59661,\"fire-extinguisher\":61912,\"fire-hydrant\":61859,\"fireplace\":59971,\"first-page\":58844,\"fit-screen\":59920,\"fitness-center\":60227,\"flag\":57683,\"flaky\":61264,\"flare\":58340,\"flash-auto\":58341,\"flash-off\":58342,\"flash-on\":58343,\"flight\":58681,\"flight-land\":59652,\"flight-takeoff\":59653,\"flip\":58344,\"flip-camera-android\":59959,\"flip-camera-ios\":59960,\"flip-to-back\":59522,\"flip-to-front\":59523,\"folder\":58055,\"folder-open\":58056,\"folder-shared\":58057,\"folder-special\":58903,\"follow-the-signs\":61986,\"font-download\":57703,\"food-bank\":61938,\"format-align-center\":57908,\"format-align-justify\":57909,\"format-align-left\":57910,\"format-align-right\":57911,\"format-bold\":57912,\"format-clear\":57913,\"format-color-fill\":57914,\"format-color-reset\":57915,\"format-color-text\":57916,\"format-indent-decrease\":57917,\"format-indent-increase\":57918,\"format-italic\":57919,\"format-line-spacing\":57920,\"format-list-bulleted\":57921,\"format-list-numbered\":57922,\"format-list-numbered-rtl\":57959,\"format-paint\":57923,\"format-quote\":57924,\"format-shapes\":57950,\"format-size\":57925,\"format-strikethrough\":57926,\"format-textdirection-l-to-r\":57927,\"format-textdirection-r-to-l\":57928,\"format-underline\":57929,\"format-underlined\":57929,\"forum\":57535,\"forward\":57684,\"forward-10\":57430,\"forward-30\":57431,\"forward-5\":57432,\"forward-to-inbox\":61831,\"foundation\":61952,\"free-breakfast\":60228,\"fullscreen\":58832,\"fullscreen-exit\":58833,\"functions\":57930,\"g-translate\":59687,\"gamepad\":58127,\"games\":57377,\"gavel\":59662,\"gesture\":57685,\"get-app\":59524,\"gif\":59656,\"goat\":1114109,\"golf-course\":60229,\"gps-fixed\":57779,\"gps-not-fixed\":57780,\"gps-off\":57781,\"grade\":59525,\"gradient\":58345,\"grading\":59983,\"grain\":58346,\"graphic-eq\":57784,\"grass\":61957,\"grid-off\":58347,\"grid-on\":58348,\"grid-view\":59824,\"group\":59375,\"group-add\":59376,\"group-work\":59526,\"groups\":62003,\"hail\":59825,\"handyman\":61707,\"hardware\":59993,\"hd\":57426,\"hdr-enhanced-select\":61265,\"hdr-off\":58349,\"hdr-on\":58350,\"hdr-strong\":58353,\"hdr-weak\":58354,\"headset\":58128,\"headset-mic\":58129,\"headset-off\":58170,\"healing\":58355,\"hearing\":57379,\"hearing-disabled\":61700,\"height\":59926,\"help\":59527,\"help-center\":61888,\"help-outline\":59645,\"high-quality\":57380,\"highlight\":57951,\"highlight-alt\":61266,\"highlight-off\":59528,\"highlight-remove\":59528,\"history\":59529,\"history-edu\":59966,\"history-toggle-off\":61821,\"home\":59530,\"home-filled\":59826,\"home-repair-service\":61696,\"home-work\":59913,\"horizontal-distribute\":57364,\"horizontal-rule\":61704,\"horizontal-split\":59719,\"hot-tub\":60230,\"hotel\":58682,\"hourglass-bottom\":59996,\"hourglass-disabled\":61267,\"hourglass-empty\":59531,\"hourglass-full\":59532,\"hourglass-top\":59995,\"house\":59972,\"house-siding\":61954,\"how-to-reg\":57716,\"how-to-vote\":57717,\"http\":59650,\"https\":59533,\"hvac\":61710,\"icecream\":60009,\"image\":58356,\"image-aspect-ratio\":58357,\"image-not-supported\":61718,\"image-search\":58431,\"imagesearch-roller\":59828,\"import-contacts\":57568,\"import-export\":57539,\"important-devices\":59666,\"inbox\":57686,\"indeterminate-check-box\":59657,\"info\":59534,\"info-outline\":59535,\"input\":59536,\"insert-chart\":57931,\"insert-chart-outlined\":57962,\"insert-comment\":57932,\"insert-drive-file\":57933,\"insert-emoticon\":57934,\"insert-invitation\":57935,\"insert-link\":57936,\"insert-photo\":57937,\"insights\":61586,\"integration-instructions\":61268,\"inventory\":57721,\"invert-colors\":59537,\"invert-colors-off\":57540,\"invert-colors-on\":59537,\"ios-share\":59064,\"iso\":58358,\"keyboard\":58130,\"keyboard-arrow-down\":58131,\"keyboard-arrow-left\":58132,\"keyboard-arrow-right\":58133,\"keyboard-arrow-up\":58134,\"keyboard-backspace\":58135,\"keyboard-capslock\":58136,\"keyboard-control\":58835,\"keyboard-hide\":58138,\"keyboard-return\":58139,\"keyboard-tab\":58140,\"keyboard-voice\":58141,\"king-bed\":59973,\"kitchen\":60231,\"label\":59538,\"label-important\":59703,\"label-important-outline\":59720,\"label-off\":59830,\"label-outline\":59539,\"landscape\":58359,\"language\":59540,\"laptop\":58142,\"laptop-chromebook\":58143,\"laptop-mac\":58144,\"laptop-windows\":58145,\"last-page\":58845,\"launch\":59541,\"layers\":58683,\"layers-clear\":58684,\"leaderboard\":61964,\"leak-add\":58360,\"leak-remove\":58361,\"leave-bags-at-home\":61979,\"legend-toggle\":61723,\"lens\":58362,\"library-add\":57390,\"library-add-check\":59831,\"library-books\":57391,\"library-music\":57392,\"lightbulb\":57584,\"lightbulb-outline\":59663,\"line-style\":59673,\"line-weight\":59674,\"linear-scale\":57952,\"link\":57687,\"link-off\":57711,\"linked-camera\":58424,\"liquor\":60000,\"list\":59542,\"list-alt\":57582,\"live-help\":57542,\"live-tv\":58937,\"local-activity\":58687,\"local-airport\":58685,\"local-atm\":58686,\"local-attraction\":58687,\"local-bar\":58688,\"local-cafe\":58689,\"local-car-wash\":58690,\"local-convenience-store\":58691,\"local-dining\":58710,\"local-drink\":58692,\"local-fire-department\":61269,\"local-florist\":58693,\"local-gas-station\":58694,\"local-grocery-store\":58695,\"local-hospital\":58696,\"local-hotel\":58697,\"local-laundry-service\":58698,\"local-library\":58699,\"local-mall\":58700,\"local-movies\":58701,\"local-offer\":58702,\"local-parking\":58703,\"local-pharmacy\":58704,\"local-phone\":58705,\"local-pizza\":58706,\"local-play\":58707,\"local-police\":61270,\"local-post-office\":58708,\"local-print-shop\":58709,\"local-printshop\":58709,\"local-restaurant\":58710,\"local-see\":58711,\"local-shipping\":58712,\"local-taxi\":58713,\"location-city\":59377,\"location-disabled\":57782,\"location-history\":58714,\"location-off\":57543,\"location-on\":57544,\"location-pin\":61915,\"location-searching\":57783,\"lock\":59543,\"lock-clock\":61271,\"lock-open\":59544,\"lock-outline\":59545,\"login\":60023,\"logout\":59834,\"looks\":58364,\"looks-3\":58363,\"looks-4\":58365,\"looks-5\":58366,\"looks-6\":58367,\"looks-one\":58368,\"looks-two\":58369,\"loop\":57384,\"loupe\":58370,\"low-priority\":57709,\"loyalty\":59546,\"luggage\":62005,\"lunch-dining\":60001,\"mail\":57688,\"mail-outline\":57569,\"map\":58715,\"maps-ugc\":61272,\"margin\":59835,\"mark-as-unread\":59836,\"mark-chat-read\":61835,\"mark-chat-unread\":61833,\"mark-email-read\":61836,\"mark-email-unread\":61834,\"markunread\":57689,\"markunread-mailbox\":59547,\"masks\":61976,\"maximize\":59696,\"mediation\":61351,\"medical-services\":61705,\"meeting-room\":60239,\"memory\":58146,\"menu\":58834,\"menu-book\":59929,\"menu-open\":59837,\"merge-type\":57938,\"message\":57545,\"messenger\":57546,\"messenger-outline\":57547,\"mic\":57385,\"mic-external-off\":61273,\"mic-external-on\":61274,\"mic-none\":57386,\"mic-off\":57387,\"microwave\":61956,\"military-tech\":59967,\"minimize\":59697,\"miscellaneous-services\":61708,\"missed-video-call\":57459,\"mms\":58904,\"mobile-friendly\":57856,\"mobile-off\":57857,\"mobile-screen-share\":57575,\"mode-comment\":57939,\"mode-edit\":57940,\"model-training\":61647,\"monetization-on\":57955,\"money\":58749,\"money-off\":57948,\"monitor\":61275,\"monochrome-photos\":58371,\"mood\":59378,\"mood-bad\":59379,\"moped\":60200,\"more\":58905,\"more-horiz\":58835,\"more-time\":59997,\"more-vert\":58836,\"motion-photos-off\":59840,\"motion-photos-on\":59841,\"motion-photos-pause\":61991,\"motion-photos-paused\":59842,\"motorcycle\":59675,\"mouse\":58147,\"move-to-inbox\":57704,\"movie\":57388,\"movie-creation\":58372,\"movie-filter\":58426,\"mp\":59843,\"multiline-chart\":59103,\"multiple-stop\":61881,\"multitrack-audio\":57784,\"museum\":59958,\"music-note\":58373,\"music-off\":58432,\"music-video\":57443,\"my-library-add\":57390,\"my-library-books\":57391,\"my-library-music\":57392,\"my-location\":58716,\"nat\":61276,\"nature\":58374,\"nature-people\":58375,\"navigate-before\":58376,\"navigate-next\":58377,\"navigation\":58717,\"near-me\":58729,\"near-me-disabled\":61935,\"network-cell\":57785,\"network-check\":58944,\"network-locked\":58906,\"network-wifi\":57786,\"new-releases\":57393,\"next-plan\":61277,\"next-week\":57706,\"nfc\":57787,\"night-shelter\":61937,\"nightlife\":60002,\"nightlight-round\":61278,\"nights-stay\":59974,\"no-backpack\":62007,\"no-cell\":61860,\"no-drinks\":61861,\"no-encryption\":58945,\"no-flash\":61862,\"no-food\":61863,\"no-luggage\":62011,\"no-meals\":61910,\"no-meals-ouline\":61993,\"no-meeting-room\":60238,\"no-photography\":61864,\"no-sim\":57548,\"no-stroller\":61871,\"no-transfer\":61909,\"north\":61920,\"north-east\":61921,\"north-west\":61922,\"not-accessible\":61694,\"not-interested\":57395,\"not-listed-location\":58741,\"not-started\":61649,\"note\":57455,\"note-add\":59548,\"notes\":57964,\"notification-important\":57348,\"notifications\":59380,\"notifications-active\":59383,\"notifications-none\":59381,\"notifications-off\":59382,\"notifications-on\":59383,\"notifications-paused\":59384,\"now-wallpaper\":57788,\"now-widgets\":57789,\"offline-bolt\":59698,\"offline-pin\":59658,\"offline-share\":59845,\"ondemand-video\":58938,\"online-prediction\":61675,\"opacity\":59676,\"open-in-browser\":59549,\"open-in-full\":61902,\"open-in-new\":59550,\"open-with\":59551,\"outbond\":61992,\"outbox\":61279,\"outdoor-grill\":59975,\"outgoing-mail\":61650,\"outlet\":61908,\"outlined-flag\":57710,\"padding\":59848,\"pages\":59385,\"pageview\":59552,\"palette\":58378,\"pan-tool\":59685,\"panorama\":58379,\"panorama-fish-eye\":58380,\"panorama-fisheye\":58380,\"panorama-horizontal\":58381,\"panorama-horizontal-select\":61280,\"panorama-photosphere\":59849,\"panorama-photosphere-select\":59850,\"panorama-vertical\":58382,\"panorama-vertical-select\":61281,\"panorama-wide-angle\":58383,\"panorama-wide-angle-select\":61282,\"park\":60003,\"party-mode\":59386,\"pause\":57396,\"pause-circle-filled\":57397,\"pause-circle-outline\":57398,\"pause-presentation\":57578,\"payment\":59553,\"payments\":61283,\"pedal-bike\":60201,\"pending\":61284,\"pending-actions\":61883,\"people\":59387,\"people-alt\":59937,\"people-outline\":59388,\"perm-camera-mic\":59554,\"perm-contact-cal\":59555,\"perm-contact-calendar\":59555,\"perm-data-setting\":59556,\"perm-device-info\":59557,\"perm-device-information\":59557,\"perm-identity\":59558,\"perm-media\":59559,\"perm-phone-msg\":59560,\"perm-scan-wifi\":59561,\"person\":59389,\"person-add\":59390,\"person-add-alt\":59981,\"person-add-alt-1\":61285,\"person-add-disabled\":59851,\"person-outline\":59391,\"person-pin\":58714,\"person-pin-circle\":58730,\"person-remove\":61286,\"person-remove-alt-1\":61287,\"person-search\":61702,\"personal-video\":58939,\"pest-control\":61690,\"pest-control-rodent\":61693,\"pets\":59677,\"phone\":57549,\"phone-android\":58148,\"phone-bluetooth-speaker\":58907,\"phone-callback\":58953,\"phone-disabled\":59852,\"phone-enabled\":59853,\"phone-forwarded\":58908,\"phone-in-talk\":58909,\"phone-iphone\":58149,\"phone-locked\":58910,\"phone-missed\":58911,\"phone-paused\":58912,\"phonelink\":58150,\"phonelink-erase\":57563,\"phonelink-lock\":57564,\"phonelink-off\":58151,\"phonelink-ring\":57565,\"phonelink-setup\":57566,\"photo\":58384,\"photo-album\":58385,\"photo-camera\":58386,\"photo-camera-back\":61288,\"photo-camera-front\":61289,\"photo-filter\":58427,\"photo-library\":58387,\"photo-size-select-actual\":58418,\"photo-size-select-large\":58419,\"photo-size-select-small\":58420,\"picture-as-pdf\":58389,\"picture-in-picture\":59562,\"picture-in-picture-alt\":59665,\"pie-chart\":59076,\"pie-chart-outlined\":59077,\"pin-drop\":58718,\"pivot-table-chart\":59854,\"place\":58719,\"plagiarism\":59994,\"play-arrow\":57399,\"play-circle-fill\":57400,\"play-circle-filled\":57400,\"play-circle-outline\":57401,\"play-disabled\":61290,\"play-for-work\":59654,\"playlist-add\":57403,\"playlist-add-check\":57445,\"playlist-play\":57439,\"plumbing\":61703,\"plus-one\":59392,\"point-of-sale\":61822,\"policy\":59927,\"poll\":59393,\"polymer\":59563,\"pool\":60232,\"portable-wifi-off\":57550,\"portrait\":58390,\"post-add\":59936,\"power\":58940,\"power-input\":58166,\"power-off\":58950,\"power-settings-new\":59564,\"pregnant-woman\":59678,\"present-to-all\":57567,\"preview\":61893,\"print\":59565,\"print-disabled\":59855,\"priority-high\":58949,\"privacy-tip\":61660,\"psychology\":59978,\"public\":59403,\"public-off\":61898,\"publish\":57941,\"published-with-changes\":62002,\"push-pin\":61709,\"qr-code\":61291,\"qr-code-2\":57354,\"qr-code-scanner\":61958,\"query-builder\":59566,\"question-answer\":59567,\"queue\":57404,\"queue-music\":57405,\"queue-play-next\":57446,\"quick-contacts-dialer\":57551,\"quick-contacts-mail\":57552,\"quickreply\":61292,\"radio\":57406,\"radio-button-checked\":59447,\"radio-button-off\":59446,\"radio-button-on\":59447,\"radio-button-unchecked\":59446,\"railway-alert\":59857,\"ramen-dining\":60004,\"rate-review\":58720,\"read-more\":61293,\"receipt\":59568,\"receipt-long\":61294,\"recent-actors\":57407,\"recommend\":59858,\"record-voice-over\":59679,\"redeem\":59569,\"redo\":57690,\"reduce-capacity\":61980,\"refresh\":58837,\"remove\":57691,\"remove-circle\":57692,\"remove-circle-outline\":57693,\"remove-done\":59859,\"remove-from-queue\":57447,\"remove-moderator\":59860,\"remove-red-eye\":58391,\"remove-shopping-cart\":59688,\"reorder\":59646,\"repeat\":57408,\"repeat-on\":59862,\"repeat-one\":57409,\"repeat-one-on\":59863,\"replay\":57410,\"replay-10\":57433,\"replay-30\":57434,\"replay-5\":57435,\"replay-circle-filled\":59864,\"reply\":57694,\"reply-all\":57695,\"report\":57696,\"report-off\":57712,\"report-problem\":59570,\"request-page\":61996,\"request-quote\":61878,\"reset-tv\":59865,\"restaurant\":58732,\"restaurant-menu\":58721,\"restore\":59571,\"restore-from-trash\":59704,\"restore-page\":59689,\"rice-bowl\":61941,\"ring-volume\":57553,\"roofing\":61953,\"room\":59572,\"room-preferences\":61880,\"room-service\":60233,\"rotate-90-degrees-ccw\":58392,\"rotate-left\":58393,\"rotate-right\":58394,\"rounded-corner\":59680,\"router\":58152,\"rowing\":59681,\"rss-feed\":57573,\"rtt\":59821,\"rule\":61890,\"rule-folder\":61897,\"run-circle\":61295,\"rv-hookup\":58946,\"sanitizer\":61981,\"satellite\":58722,\"save\":57697,\"save-alt\":57713,\"saved-search\":59921,\"scanner\":58153,\"scatter-plot\":57960,\"schedule\":59573,\"schedule-send\":59914,\"school\":59404,\"science\":59979,\"score\":57961,\"screen-lock-landscape\":57790,\"screen-lock-portrait\":57791,\"screen-lock-rotation\":57792,\"screen-rotation\":57793,\"screen-search-desktop\":61296,\"screen-share\":57570,\"sd\":59869,\"sd-card\":58915,\"sd-storage\":57794,\"search\":59574,\"search-off\":60022,\"security\":58154,\"segment\":59723,\"select-all\":57698,\"self-improvement\":60024,\"send\":57699,\"send-and-archive\":59916,\"send-to-mobile\":61532,\"sensor-door\":61877,\"sensor-window\":61876,\"sentiment-dissatisfied\":59409,\"sentiment-neutral\":59410,\"sentiment-satisfied\":59411,\"sentiment-satisfied-alt\":57581,\"sentiment-very-dissatisfied\":59412,\"sentiment-very-satisfied\":59413,\"set-meal\":61930,\"settings\":59576,\"settings-applications\":59577,\"settings-backup-restore\":59578,\"settings-bluetooth\":59579,\"settings-brightness\":59581,\"settings-cell\":59580,\"settings-display\":59581,\"settings-ethernet\":59582,\"settings-input-antenna\":59583,\"settings-input-component\":59584,\"settings-input-composite\":59585,\"settings-input-hdmi\":59586,\"settings-input-svideo\":59587,\"settings-overscan\":59588,\"settings-phone\":59589,\"settings-power\":59590,\"settings-remote\":59591,\"settings-system-daydream\":57795,\"settings-voice\":59592,\"share\":59405,\"shield\":59872,\"shop\":59593,\"shop-two\":59594,\"shopping-bag\":61900,\"shopping-basket\":59595,\"shopping-cart\":59596,\"short-text\":57953,\"show-chart\":59105,\"shuffle\":57411,\"shuffle-on\":59873,\"shutter-speed\":58429,\"sick\":61984,\"signal-cellular-0-bar\":61608,\"signal-cellular-4-bar\":57800,\"signal-cellular-alt\":57858,\"signal-cellular-connected-no-internet-4-bar\":57805,\"signal-cellular-no-sim\":57806,\"signal-cellular-null\":57807,\"signal-cellular-off\":57808,\"signal-wifi-0-bar\":61616,\"signal-wifi-4-bar\":57816,\"signal-wifi-4-bar-lock\":57817,\"signal-wifi-off\":57818,\"sim-card\":58155,\"sim-card-alert\":58916,\"single-bed\":59976,\"skip-next\":57412,\"skip-previous\":57413,\"slideshow\":58395,\"slow-motion-video\":57448,\"smart-button\":61889,\"smartphone\":58156,\"smoke-free\":60234,\"smoking-rooms\":60235,\"sms\":58917,\"sms-failed\":58918,\"snippet-folder\":61895,\"snooze\":57414,\"soap\":61874,\"sort\":57700,\"sort-by-alpha\":57427,\"source\":61892,\"south\":61923,\"south-east\":61924,\"south-west\":61925,\"spa\":60236,\"space-bar\":57942,\"speaker\":58157,\"speaker-group\":58158,\"speaker-notes\":59597,\"speaker-notes-off\":59690,\"speaker-phone\":57554,\"speed\":59876,\"spellcheck\":59598,\"sports\":59952,\"sports-bar\":61939,\"sports-baseball\":59985,\"sports-basketball\":59942,\"sports-cricket\":59943,\"sports-esports\":59944,\"sports-football\":59945,\"sports-golf\":59946,\"sports-handball\":59955,\"sports-hockey\":59947,\"sports-kabaddi\":59956,\"sports-mma\":59948,\"sports-motorsports\":59949,\"sports-rugby\":59950,\"sports-soccer\":59951,\"sports-tennis\":59954,\"sports-volleyball\":59953,\"square-foot\":59977,\"stacked-bar-chart\":59878,\"stacked-line-chart\":61995,\"stairs\":61865,\"star\":59448,\"star-border\":59450,\"star-half\":59449,\"star-outline\":61551,\"star-rate\":61676,\"stars\":59600,\"stay-current-landscape\":57555,\"stay-current-portrait\":57556,\"stay-primary-landscape\":57557,\"stay-primary-portrait\":57558,\"sticky-note-2\":61948,\"stop\":57415,\"stop-circle\":61297,\"stop-screen-share\":57571,\"storage\":57819,\"store\":59601,\"store-mall-directory\":58723,\"storefront\":59922,\"straighten\":58396,\"stream\":59881,\"streetview\":58734,\"strikethrough-s\":57943,\"stroller\":61870,\"style\":58397,\"subdirectory-arrow-left\":58841,\"subdirectory-arrow-right\":58842,\"subject\":59602,\"subscript\":61713,\"subscriptions\":57444,\"subtitles\":57416,\"subtitles-off\":61298,\"subway\":58735,\"superscript\":61714,\"supervised-user-circle\":59705,\"supervisor-account\":59603,\"support\":61299,\"support-agent\":61666,\"surround-sound\":57417,\"swap-calls\":57559,\"swap-horiz\":59604,\"swap-horizontal-circle\":59699,\"swap-vert\":59605,\"swap-vert-circle\":59606,\"swap-vertical-circle\":59606,\"swipe\":59884,\"switch-account\":59885,\"switch-camera\":58398,\"switch-left\":61905,\"switch-right\":61906,\"switch-video\":58399,\"sync\":58919,\"sync-alt\":59928,\"sync-disabled\":58920,\"sync-problem\":58921,\"system-update\":58922,\"system-update-alt\":59607,\"system-update-tv\":59607,\"tab\":59608,\"tab-unselected\":59609,\"table-chart\":57957,\"table-rows\":61697,\"table-view\":61886,\"tablet\":58159,\"tablet-android\":58160,\"tablet-mac\":58161,\"tag\":59887,\"tag-faces\":58400,\"takeout-dining\":60020,\"tap-and-play\":58923,\"tapas\":61929,\"taxi-alert\":61300,\"terrain\":58724,\"text-fields\":57954,\"text-format\":57701,\"text-rotate-up\":59706,\"text-rotate-vertical\":59707,\"text-rotation-angledown\":59708,\"text-rotation-angleup\":59709,\"text-rotation-down\":59710,\"text-rotation-none\":59711,\"text-snippet\":61894,\"textsms\":57560,\"texture\":58401,\"theater-comedy\":60006,\"theaters\":59610,\"thumb-down\":59611,\"thumb-down-alt\":59414,\"thumb-down-off-alt\":59890,\"thumb-up\":59612,\"thumb-up-alt\":59415,\"thumb-up-off-alt\":59891,\"thumbs-up-down\":59613,\"time-to-leave\":58924,\"timelapse\":58402,\"timeline\":59682,\"timer\":58405,\"timer-10\":58403,\"timer-3\":58404,\"timer-off\":58406,\"title\":57956,\"toc\":59614,\"today\":59615,\"toggle-off\":59893,\"toggle-on\":59894,\"toll\":59616,\"tonality\":58407,\"topic\":61896,\"touch-app\":59667,\"tour\":61301,\"toys\":58162,\"track-changes\":59617,\"traffic\":58725,\"train\":58736,\"tram\":58737,\"transfer-within-a-station\":58738,\"transform\":58408,\"transit-enterexit\":58745,\"translate\":59618,\"trending-down\":59619,\"trending-flat\":59620,\"trending-neutral\":59620,\"trending-up\":59621,\"trip-origin\":58747,\"tty\":61866,\"tune\":58409,\"turned-in\":59622,\"turned-in-not\":59623,\"tv\":58163,\"tv-off\":58951,\"two-wheeler\":59897,\"umbrella\":61869,\"unarchive\":57705,\"undo\":57702,\"unfold-less\":58838,\"unfold-more\":58839,\"unpublished\":62006,\"unsubscribe\":57579,\"update\":59683,\"update-disabled\":57461,\"upgrade\":61691,\"upload-file\":59900,\"usb\":57824,\"verified\":61302,\"verified-user\":59624,\"vertical-align-bottom\":57944,\"vertical-align-center\":57945,\"vertical-align-top\":57946,\"vertical-distribute\":57462,\"vertical-split\":59721,\"vibration\":58925,\"video-call\":57456,\"video-collection\":57418,\"video-label\":57457,\"video-library\":57418,\"video-settings\":60021,\"videocam\":57419,\"videocam-off\":57420,\"videogame-asset\":58168,\"view-agenda\":59625,\"view-array\":59626,\"view-carousel\":59627,\"view-column\":59628,\"view-comfortable\":58410,\"view-comfy\":58410,\"view-compact\":58411,\"view-day\":59629,\"view-headline\":59630,\"view-in-ar\":59902,\"view-list\":59631,\"view-module\":59632,\"view-quilt\":59633,\"view-sidebar\":61716,\"view-stream\":59634,\"view-week\":59635,\"vignette\":58421,\"visibility\":59636,\"visibility-off\":59637,\"voice-chat\":58926,\"voice-over-off\":59722,\"voicemail\":57561,\"volume-down\":57421,\"volume-mute\":57422,\"volume-off\":57423,\"volume-up\":57424,\"volunteer-activism\":60016,\"vpn-key\":57562,\"vpn-lock\":58927,\"wallet-giftcard\":59638,\"wallet-membership\":59639,\"wallet-travel\":59640,\"wallpaper\":57788,\"warning\":57346,\"wash\":61873,\"watch\":58164,\"watch-later\":59684,\"water-damage\":61955,\"waterfall-chart\":59904,\"waves\":57718,\"wb-auto\":58412,\"wb-cloudy\":58413,\"wb-incandescent\":58414,\"wb-iridescent\":58422,\"wb-shade\":59905,\"wb-sunny\":58416,\"wb-twighlight\":59906,\"wc\":58941,\"web\":57425,\"web-asset\":57449,\"weekend\":57707,\"west\":61926,\"whatshot\":59406,\"wheelchair-pickup\":61867,\"where-to-vote\":57719,\"widgets\":57789,\"wifi\":58942,\"wifi-calling\":61303,\"wifi-lock\":57825,\"wifi-off\":58952,\"wifi-protected-setup\":61692,\"wifi-tethering\":57826,\"wine-bar\":61928,\"work\":59641,\"work-off\":59714,\"work-outline\":59715,\"workspaces-filled\":59917,\"workspaces-outline\":59919,\"wrap-text\":57947,\"wrong-location\":61304,\"wysiwyg\":61891,\"youtube-searched-for\":59642,\"zoom-in\":59647,\"zoom-out\":59648,\"zoom-out-map\":58731}");

/***/ }),

/***/ "./node_modules/react-native-vector-icons/lib/create-icon-set.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-native-vector-icons/lib/create-icon-set.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=createIconSet;exports.DEFAULT_ICON_COLOR=exports.DEFAULT_ICON_SIZE=exports.NativeIconAPI=void 0;var _toConsumableArray2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var _reactNative=__webpack_require__(/*! ./react-native */ "./node_modules/react-native-vector-icons/lib/react-native.js");var _ensureNativeModuleAvailable=_interopRequireDefault(__webpack_require__(/*! ./ensure-native-module-available */ "./node_modules/react-native-vector-icons/lib/ensure-native-module-available.js"));var _createIconSourceCache=_interopRequireDefault(__webpack_require__(/*! ./create-icon-source-cache */ "./node_modules/react-native-vector-icons/lib/create-icon-source-cache.js"));var _iconButton=_interopRequireDefault(__webpack_require__(/*! ./icon-button */ "./node_modules/react-native-vector-icons/lib/icon-button.js"));var _jsxFileName="C:\\Users\\NathanRuth\\Documents\\Dev\\nativeAudioRecorder\\node_modules\\react-native-vector-icons\\lib\\create-icon-set.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var NativeIconAPI=_reactNative.NativeModules.RNVectorIconsManager||_reactNative.NativeModules.RNVectorIconsModule;exports.NativeIconAPI=NativeIconAPI;var DEFAULT_ICON_SIZE=12;exports.DEFAULT_ICON_SIZE=DEFAULT_ICON_SIZE;var DEFAULT_ICON_COLOR='black';exports.DEFAULT_ICON_COLOR=DEFAULT_ICON_COLOR;function createIconSet(glyphMap,fontFamily,fontFile,fontStyle){var fontBasename=fontFile?fontFile.replace(/\.(otf|ttf)$/,''):fontFamily;var fontReference=_reactNative.Platform.select({windows:"/Assets/"+fontFile+"#"+fontFamily,android:fontBasename,web:fontBasename,default:fontFamily});var IconNamePropType=_propTypes.default.oneOf(Object.keys(glyphMap));var Icon=function(_PureComponent){(0,_inherits2.default)(Icon,_PureComponent);var _super=_createSuper(Icon);function Icon(){var _this;(0,_classCallCheck2.default)(this,Icon);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.root=null;_this.handleRef=function(ref){_this.root=ref;};return _this;}(0,_createClass2.default)(Icon,[{key:"setNativeProps",value:function setNativeProps(nativeProps){if(this.root){this.root.setNativeProps(nativeProps);}}},{key:"render",value:function render(){var _this$props=this.props,name=_this$props.name,size=_this$props.size,color=_this$props.color,style=_this$props.style,children=_this$props.children,props=(0,_objectWithoutProperties2.default)(_this$props,["name","size","color","style","children"]);var glyph=name?glyphMap[name]||'?':'';if(typeof glyph==='number'){glyph=String.fromCodePoint(glyph);}var styleDefaults={fontSize:size,color:color};var styleOverrides={fontFamily:fontReference,fontWeight:'normal',fontStyle:'normal'};props.style=[styleDefaults,style,styleOverrides,fontStyle||{}];props.ref=this.handleRef;return _react.default.createElement(_reactNative.Text,(0,_extends2.default)({},props,{__self:this,__source:{fileName:_jsxFileName,lineNumber:91,columnNumber:9}}),glyph,children);}}]);return Icon;}(_react.PureComponent);Icon.propTypes={allowFontScaling:_propTypes.default.bool,name:IconNamePropType,size:_propTypes.default.number,color:_propTypes.default.any,children:_propTypes.default.node,style:_propTypes.default.any};Icon.defaultProps={size:DEFAULT_ICON_SIZE,allowFontScaling:false};var imageSourceCache=(0,_createIconSourceCache.default)();function resolveGlyph(name){var glyph=glyphMap[name]||'?';if(typeof glyph==='number'){return String.fromCodePoint(glyph);}return glyph;}function getImageSourceSync(name){var size=arguments.length>1&&arguments[1]!==undefined?arguments[1]:DEFAULT_ICON_SIZE;var color=arguments.length>2&&arguments[2]!==undefined?arguments[2]:DEFAULT_ICON_COLOR;(0,_ensureNativeModuleAvailable.default)();var glyph=resolveGlyph(name);var processedColor=(0,_reactNative.processColor)(color);var cacheKey=glyph+":"+size+":"+processedColor;if(imageSourceCache.has(cacheKey)){return imageSourceCache.get(cacheKey);}try{var imagePath=NativeIconAPI.getImageForFontSync(fontReference,glyph,size,processedColor);var value={uri:imagePath,scale:_reactNative.PixelRatio.get()};imageSourceCache.setValue(cacheKey,value);return value;}catch(error){imageSourceCache.setError(cacheKey,error);throw error;}}function getImageSource(name){var size,color,glyph,processedColor,cacheKey,imagePath,value,_args=arguments;return _regenerator.default.async(function getImageSource$(_context){while(1){switch(_context.prev=_context.next){case 0:size=_args.length>1&&_args[1]!==undefined?_args[1]:DEFAULT_ICON_SIZE;color=_args.length>2&&_args[2]!==undefined?_args[2]:DEFAULT_ICON_COLOR;(0,_ensureNativeModuleAvailable.default)();glyph=resolveGlyph(name);processedColor=(0,_reactNative.processColor)(color);cacheKey=glyph+":"+size+":"+processedColor;if(!imageSourceCache.has(cacheKey)){_context.next=8;break;}return _context.abrupt("return",imageSourceCache.get(cacheKey));case 8:_context.prev=8;_context.next=11;return _regenerator.default.awrap(NativeIconAPI.getImageForFont(fontReference,glyph,size,processedColor));case 11:imagePath=_context.sent;value={uri:imagePath,scale:_reactNative.PixelRatio.get()};imageSourceCache.setValue(cacheKey,value);return _context.abrupt("return",value);case 17:_context.prev=17;_context.t0=_context["catch"](8);imageSourceCache.setError(cacheKey,_context.t0);throw _context.t0;case 21:case"end":return _context.stop();}}},null,null,[[8,17]],Promise);}function loadFont(){var file,_args2=arguments;return _regenerator.default.async(function loadFont$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:file=_args2.length>0&&_args2[0]!==undefined?_args2[0]:fontFile;if(!(_reactNative.Platform.OS==='ios')){_context2.next=7;break;}(0,_ensureNativeModuleAvailable.default)();if(file){_context2.next=5;break;}throw new Error('Unable to load font, because no file was specified. ');case 5:_context2.next=7;return _regenerator.default.awrap(NativeIconAPI.loadFontWithFileName.apply(NativeIconAPI,(0,_toConsumableArray2.default)(file.split('.'))));case 7:case"end":return _context2.stop();}}},null,null,null,Promise);}function hasIcon(name){return Object.prototype.hasOwnProperty.call(glyphMap,name);}function getRawGlyphMap(){return glyphMap;}function getFontFamily(){return fontReference;}Icon.Button=(0,_iconButton.default)(Icon);Icon.getImageSource=getImageSource;Icon.getImageSourceSync=getImageSourceSync;Icon.loadFont=loadFont;Icon.hasIcon=hasIcon;Icon.getRawGlyphMap=getRawGlyphMap;Icon.getFontFamily=getFontFamily;return Icon;}

/***/ }),

/***/ "./node_modules/react-native-vector-icons/lib/create-icon-source-cache.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-vector-icons/lib/create-icon-source-cache.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=createIconSourceCache;var TYPE_VALUE='value';var TYPE_ERROR='error';function createIconSourceCache(){var cache=new Map();var setValue=function setValue(key,value){return cache.set(key,{type:TYPE_VALUE,data:value});};var setError=function setError(key,error){return cache.set(key,{type:TYPE_ERROR,data:error});};var has=function has(key){return cache.has(key);};var get=function get(key){if(!cache.has(key)){return undefined;}var _cache$get=cache.get(key),type=_cache$get.type,data=_cache$get.data;if(type===TYPE_ERROR){throw data;}return data;};return{setValue:setValue,setError:setError,has:has,get:get};}

/***/ }),

/***/ "./node_modules/react-native-vector-icons/lib/ensure-native-module-available.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-native-vector-icons/lib/ensure-native-module-available.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.default=ensureNativeModuleAvailable;var _reactNative=__webpack_require__(/*! ./react-native */ "./node_modules/react-native-vector-icons/lib/react-native.js");var NativeIconAPI=_reactNative.NativeModules.RNVectorIconsManager||_reactNative.NativeModules.RNVectorIconsModule;function ensureNativeModuleAvailable(){if(!NativeIconAPI){if(_reactNative.Platform.OS==='android'){throw new Error('RNVectorIconsModule not available, did you properly integrate the module? Try running `react-native link react-native-vector-icons` and recompiling.');}throw new Error('RNVectorIconsManager not available, did you add the library to your project and link with libRNVectorIcons.a? Try running `react-native link react-native-vector-icons` and recompiling.');}}

/***/ }),

/***/ "./node_modules/react-native-vector-icons/lib/icon-button.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-native-vector-icons/lib/icon-button.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=createIconButtonComponent;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _lodash=_interopRequireDefault(__webpack_require__(/*! lodash.isstring */ "./node_modules/lodash.isstring/index.js"));var _lodash2=_interopRequireDefault(__webpack_require__(/*! lodash.omit */ "./node_modules/lodash.omit/index.js"));var _lodash3=_interopRequireDefault(__webpack_require__(/*! lodash.pick */ "./node_modules/lodash.pick/index.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var _reactNative=__webpack_require__(/*! ./react-native */ "./node_modules/react-native-vector-icons/lib/react-native.js");var _jsxFileName="C:\\Users\\NathanRuth\\Documents\\Dev\\nativeAudioRecorder\\node_modules\\react-native-vector-icons\\lib\\icon-button.js";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var styles=_reactNative.StyleSheet.create({container:{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:8},touchable:{overflow:'hidden'},icon:{marginRight:10},text:{fontWeight:'600',backgroundColor:'transparent'}});var IOS7_BLUE='#007AFF';var TEXT_PROP_NAMES=['ellipsizeMode','numberOfLines','textBreakStrategy','selectable','suppressHighlighting','allowFontScaling','adjustsFontSizeToFit','minimumFontScale'];var TOUCHABLE_PROP_NAMES=['accessible','accessibilityLabel','accessibilityHint','accessibilityComponentType','accessibilityRole','accessibilityStates','accessibilityTraits','onFocus','onBlur','disabled','onPress','onPressIn','onPressOut','onLayout','onLongPress','nativeID','testID','delayPressIn','delayPressOut','delayLongPress','activeOpacity','underlayColor','selectionColor','onShowUnderlay','onHideUnderlay','hasTVPreferredFocus','tvParallaxProperties'];function createIconButtonComponent(Icon){var _class,_temp;return _temp=_class=function(_PureComponent){(0,_inherits2.default)(IconButton,_PureComponent);var _super=_createSuper(IconButton);function IconButton(){(0,_classCallCheck2.default)(this,IconButton);return _super.apply(this,arguments);}(0,_createClass2.default)(IconButton,[{key:"render",value:function render(){var _this$props=this.props,style=_this$props.style,iconStyle=_this$props.iconStyle,children=_this$props.children,restProps=(0,_objectWithoutProperties2.default)(_this$props,["style","iconStyle","children"]);var iconProps=(0,_lodash3.default)(restProps,TEXT_PROP_NAMES,'style','name','size','color');var touchableProps=(0,_lodash3.default)(restProps,TOUCHABLE_PROP_NAMES);var props=(0,_lodash2.default)(restProps,Object.keys(iconProps),Object.keys(touchableProps),'iconStyle','borderRadius','backgroundColor');iconProps.style=iconStyle?[styles.icon,iconStyle]:styles.icon;var colorStyle=(0,_lodash3.default)(this.props,'color');var blockStyle=(0,_lodash3.default)(this.props,'backgroundColor','borderRadius');return _react.default.createElement(_reactNative.TouchableHighlight,(0,_extends2.default)({style:[styles.touchable,blockStyle]},touchableProps,{__self:this,__source:{fileName:_jsxFileName,lineNumber:118,columnNumber:9}}),_react.default.createElement(_reactNative.View,(0,_extends2.default)({style:[styles.container,blockStyle,style]},props,{__self:this,__source:{fileName:_jsxFileName,lineNumber:122,columnNumber:11}}),_react.default.createElement(Icon,(0,_extends2.default)({},iconProps,{__self:this,__source:{fileName:_jsxFileName,lineNumber:123,columnNumber:13}})),(0,_lodash.default)(children)?_react.default.createElement(_reactNative.Text,{style:[styles.text,colorStyle],__self:this,__source:{fileName:_jsxFileName,lineNumber:125,columnNumber:15}},children):children));}}]);return IconButton;}(_react.PureComponent),_class.propTypes={backgroundColor:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.number]),borderRadius:_propTypes.default.number,color:_propTypes.default.any,size:_propTypes.default.number,iconStyle:_propTypes.default.any,style:_propTypes.default.any,children:_propTypes.default.node},_class.defaultProps={backgroundColor:IOS7_BLUE,borderRadius:5,color:'white',size:20},_temp;}

/***/ }),

/***/ "./node_modules/react-native-vector-icons/lib/react-native.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-native-vector-icons/lib/react-native.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});var _reactNative=__webpack_require__(/*! react-native */ "react-native");Object.keys(_reactNative).forEach(function(key){if(key==="default"||key==="__esModule")return;if(key in exports&&exports[key]===_reactNative[key])return;Object.defineProperty(exports,key,{enumerable:true,get:function get(){return _reactNative[key];}});});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var runtime=function(exports){"use strict";var Op=Object.prototype;var hasOwn=Op.hasOwnProperty;var undefined;var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});return obj[key];}try{define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator;var generator=Object.create(protoGenerator.prototype);var context=new Context(tryLocsList||[]);generator._invoke=makeInvokeMethod(innerFn,self,context);return generator;}exports.wrap=wrap;function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this;};var getProto=Object.getPrototypeOf;var NativeIteratorPrototype=getProto&&getProto(getProto(values([])));if(NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)){IteratorPrototype=NativeIteratorPrototype;}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction");function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}exports.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||(ctor.displayName||ctor.name)==="GeneratorFunction":false;};exports.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype);}else{genFun.__proto__=GeneratorFunctionPrototype;define(genFun,toStringTagSymbol,"GeneratorFunction");}genFun.prototype=Object.create(Gp);return genFun;};exports.awrap=function(arg){return{__await:arg};};function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg);}else{var result=record.arg;var value=result.value;if(value&&typeof value==="object"&&hasOwn.call(value,"__await")){return PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);});}return PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped;resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}}var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}this._invoke=enqueue;}defineIteratorMethods(AsyncIterator.prototype);AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this;};exports.AsyncIterator=AsyncIterator;exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){if(PromiseImpl===void 0)PromiseImpl=Promise;var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running");}if(state===GenStateCompleted){if(method==="throw"){throw arg;}return doneResult();}context.method=method;context.arg=arg;while(true){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if(context.method==="next"){context.sent=context._sent=context.arg;}else if(context.method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw context.arg;}context.dispatchException(context.arg);}else if(context.method==="return"){context.abrupt("return",context.arg);}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){state=context.done?GenStateCompleted:GenStateSuspendedYield;if(record.arg===ContinueSentinel){continue;}return{value:record.arg,done:context.done};}else if(record.type==="throw"){state=GenStateCompleted;context.method="throw";context.arg=record.arg;}}};}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){context.delegate=null;if(context.method==="throw"){if(delegate.iterator["return"]){context.method="return";context.arg=undefined;maybeInvokeDelegate(delegate,context);if(context.method==="throw"){return ContinueSentinel;}}context.method="throw";context.arg=new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record=tryCatch(method,delegate.iterator,context.arg);if(record.type==="throw"){context.method="throw";context.arg=record.arg;context.delegate=null;return ContinueSentinel;}var info=record.arg;if(!info){context.method="throw";context.arg=new TypeError("iterator result is not an object");context.delegate=null;return ContinueSentinel;}if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc;if(context.method!=="return"){context.method="next";context.arg=undefined;}}else{return info;}context.delegate=null;return ContinueSentinel;}defineIteratorMethods(Gp);define(Gp,toStringTagSymbol,"Generator");Gp[iteratorSymbol]=function(){return this;};Gp.toString=function(){return"[object Generator]";};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1];}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3];}this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(true);}exports.keys=function(object){var keys=[];for(var key in object){keys.push(key);}keys.reverse();return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next;}}next.done=true;return next;};};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable);}if(typeof iterable.next==="function"){return iterable;}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next;}}next.value=undefined;next.done=true;return next;};return next.next=next;}}return{next:doneResult};}exports.values=values;function doneResult(){return{value:undefined,done:true};}Context.prototype={constructor:Context,reset:function reset(skipTempReset){this.prev=0;this.next=0;this.sent=this._sent=undefined;this.done=false;this.delegate=null;this.method="next";this.arg=undefined;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined;}}}},stop:function stop(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg;}return this.rval;},dispatchException:function dispatchException(exception){if(this.done){throw exception;}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;if(caught){context.method="next";context.arg=undefined;}return!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){return handle("end");}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else{throw new Error("try statement without catch or finally");}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){finallyEntry=null;}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.method="next";this.next=finallyEntry.finallyLoc;return ContinueSentinel;}return this.complete(record);},complete:function complete(record,afterLoc){if(record.type==="throw"){throw record.arg;}if(record.type==="break"||record.type==="continue"){this.next=record.arg;}else if(record.type==="return"){this.rval=this.arg=record.arg;this.method="return";this.next="end";}else if(record.type==="normal"&&afterLoc){this.next=afterLoc;}return ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel;}}},"catch":function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};if(this.method==="next"){this.arg=undefined;}return ContinueSentinel;}};return exports;}( true?module.exports:undefined);try{regeneratorRuntime=runtime;}catch(accidentalStrictMode){Function("r","regeneratorRuntime = r")(runtime);}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;g=function(){return this;}();try{g=g||new Function("return this")();}catch(e){if(typeof window==="object")g=window;}module.exports=g;

/***/ }),

/***/ "./src/NativeAudioRecorder.jsx":
/*!*************************************!*\
  !*** ./src/NativeAudioRecorder.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.NativeAudioRecorder=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _reactNativePermissions=__webpack_require__(/*! react-native-permissions */ "./node_modules/react-native-permissions/lib/module/index.js");var _reactNativeAudioRecorderPlayer=_interopRequireWildcard(__webpack_require__(/*! react-native-audio-recorder-player */ "./node_modules/react-native-audio-recorder-player/index.ts"));var _reactNativeButton=_interopRequireDefault(__webpack_require__(/*! react-native-button */ "./node_modules/react-native-button/Button.js"));var _pluggableWidgetsTools=__webpack_require__(/*! @mendix/pluggable-widgets-tools */ "./node_modules/@mendix/pluggable-widgets-tools/dist/index.js");var _Badge=__webpack_require__(/*! ./components/Badge */ "./src/components/Badge.jsx");var _styles=__webpack_require__(/*! ./ui/styles */ "./src/ui/styles.js");var _jsxFileName="C:\\Users\\NathanRuth\\Documents\\Dev\\nativeAudioRecorder\\src\\NativeAudioRecorder.jsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var NativeAudioRecorder=function(_Component){(0,_inherits2.default)(NativeAudioRecorder,_Component);var _super=_createSuper(NativeAudioRecorder);function NativeAudioRecorder(props){var _this;(0,_classCallCheck2.default)(this,NativeAudioRecorder);_this=_super.call(this,props);_this.styles=(0,_pluggableWidgetsTools.mergeNativeStyles)(_styles.defaultNativeAudioRecorderStyle,_this.props.style);_this.audioRecorderPlayer=null;_this.onStartRecord=function _callee(){var hasPermission,path,audioSet,uri;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:console.log('testtesttestttes');_context.next=3;return _regenerator.default.awrap(_this.checkPermissions());case 3:hasPermission=_context.sent;console.log(hasPermission);if(!(hasPermission===true)){_context.next=14;break;}path=_reactNative.Platform.select({ios:'hello.m4a',android:'sdcard/hello.mp4'});audioSet={AudioEncoderAndroid:_reactNativeAudioRecorderPlayer.AudioEncoderAndroidType.AAC,AudioSourceAndroid:_reactNativeAudioRecorderPlayer.AudioSourceAndroidType.MIC,AVEncoderAudioQualityKeyIOS:_reactNativeAudioRecorderPlayer.AVEncoderAudioQualityIOSType.high,AVNumberOfChannelsKeyIOS:2,AVFormatIDKeyIOS:_reactNativeAudioRecorderPlayer.AVEncodingOption.aac};console.log('why?');_context.next=11;return _regenerator.default.awrap(_this.audioRecorderPlayer.startRecorder(path,audioSet));case 11:uri=_context.sent;_this.audioRecorderPlayer.addRecordBackListener(function(e){_this.setState({status:'recording',recordSecs:e.current_position,recordTime:_this.audioRecorderPlayer.mmssss(Math.floor(e.current_position))});});console.log("uri: "+uri);case 14:case"end":return _context.stop();}}},null,null,null,Promise);};_this.onStopRecord=function _callee2(){var result;return _regenerator.default.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _regenerator.default.awrap(_this.audioRecorderPlayer.stopRecorder());case 2:result=_context2.sent;_this.audioRecorderPlayer.removeRecordBackListener();_this.setState({status:'recorded',recordSecs:0});console.log(result);case 6:case"end":return _context2.stop();}}},null,null,null,Promise);};_this.onStartPlay=function _callee3(){var path,msg;return _regenerator.default.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:console.log('onStartPlay');path=_reactNative.Platform.select({ios:'hello.m4a',android:'sdcard/hello.mp4'});_this.setState({isPaused:false});_context3.next=5;return _regenerator.default.awrap(_this.audioRecorderPlayer.startPlayer(path));case 5:msg=_context3.sent;_this.audioRecorderPlayer.setVolume(1.0);_this.audioRecorderPlayer.addPlayBackListener(function(e){if(e.current_position===e.duration){console.log('finished');_this.onStopPlay();}else{_this.setState({status:'playing',currentPositionSec:e.current_position,currentDurationSec:e.duration,playTime:_this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),duration:_this.audioRecorderPlayer.mmssss(Math.floor(e.duration))});}});case 8:case"end":return _context3.stop();}}},null,null,null,Promise);};_this.onPausePlay=function _callee4(){var paused,path,msg;return _regenerator.default.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:paused=_this.state.isPaused;if(!(_this.state.status==='playing')){_context4.next=14;break;}if(_this.state.currentPositionSec===0){_this.onStopPlay();}path=_reactNative.Platform.select({ios:'hello.m4a',android:'sdcard/hello.mp4'});if(!paused){_context4.next=11;break;}_context4.next=7;return _regenerator.default.awrap(_this.audioRecorderPlayer.startPlayer(path));case 7:msg=_context4.sent;_this.setState({isPaused:false});_context4.next=14;break;case 11:_context4.next=13;return _regenerator.default.awrap(_this.audioRecorderPlayer.pausePlayer());case 13:_this.setState({isPaused:true});case 14:case"end":return _context4.stop();}}},null,null,null,Promise);};_this.onStopPlay=function _callee5(){return _regenerator.default.async(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:console.log('onStopPlay');_this.audioRecorderPlayer.stopPlayer();_this.audioRecorderPlayer.removePlayBackListener();_this.setState({status:'recorded',isPaused:false,playTime:_this.audioRecorderPlayer.mmssss(0)});case 4:case"end":return _context5.stop();}}},null,null,null,Promise);};_this.onSave=function(){_this.props.saveToFileDocument.execute();};_this.onDelete=function(){_reactNative.Alert.alert("Delete recording","Are you sure you want to delete the recording?",[{text:"Cancel",onPress:function onPress(){}},{text:"OK",onPress:function onPress(){_this.audioRecorderPlayer=null;_this.setState({recordSecs:0,recordTime:'00:00:00',currentPositionSec:0,currentDurationSec:0,playTime:'00:00:00',duration:'00:00:00',status:'new',isPaused:false});}}],{cancelable:true});};_this.checkPermissions=function _callee6(){return _regenerator.default.async(function _callee6$(_context6){while(1){switch(_context6.prev=_context6.next){case 0:console.log('testtselect');return _context6.abrupt("return",_reactNative.Platform.select({android:function android(){return _this.checkPermissionsAndroid();},ios:function ios(){return _this.checkPermissionsIos();}})());case 2:case"end":return _context6.stop();}}},null,null,null,Promise);};_this.alertPermissions=function(){_reactNative.Alert.alert("Permissions needed","You need to allow permissions in order to continue.",[{text:"Cancel",onPress:function onPress(){}},{text:"Open settings",onPress:function onPress(){_reactNative.Linking.openSettings();}}],{cancelable:true});};_this.checkPermissionsAndroid=function _callee7(){var permissions,permissionsToRequest,permissionsGranted,p,status,results,permission;return _regenerator.default.async(function _callee7$(_context7){while(1){switch(_context7.prev=_context7.next){case 0:console.log('permissions');permissions=[_reactNative.PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,_reactNative.PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE];permissionsToRequest=[];permissionsGranted=true;_context7.t0=_regenerator.default.keys(permissions);case 5:if((_context7.t1=_context7.t0()).done){_context7.next=14;break;}p=_context7.t1.value;console.log(p);_context7.next=10;return _regenerator.default.awrap(_reactNative.PermissionsAndroid.check(permissions[p]));case 10:status=_context7.sent;if(!status){console.log(status,permissions[p]);permissionsToRequest.push(permissions[p]);}_context7.next=5;break;case 14:if(!permissionsToRequest){_context7.next=20;break;}console.log(permissionsToRequest);_context7.next=18;return _regenerator.default.awrap(_reactNative.PermissionsAndroid.requestMultiple(permissionsToRequest));case 18:results=_context7.sent;for(permission in results){if(results[permission]===_reactNative.PermissionsAndroid.RESULTS.GRANTED){console.log(permission,'Permission granted');}else{permissionsGranted=false;console.log(permission,'Permission denied');_this.alertPermissions();}}case 20:return _context7.abrupt("return",permissionsGranted);case 21:case"end":return _context7.stop();}}},null,null,null,Promise);};_this.checkPermissionsIos=function _callee8(){var checkResult,requestResult;return _regenerator.default.async(function _callee8$(_context8){while(1){switch(_context8.prev=_context8.next){case 0:_context8.next=2;return _regenerator.default.awrap((0,_reactNativePermissions.check)(_reactNativePermissions.PERMISSIONS.IOS.LOCATION_ALWAYS));case 2:checkResult=_context8.sent;if(!(checkResult===_reactNativePermissions.RESULTS.GRANTED)){_context8.next=8;break;}console.log('The permission is granted');return _context8.abrupt("return",true);case 8:if(!(checkResult===_reactNativePermissions.RESULTS.DENIED)){_context8.next=18;break;}_context8.next=11;return _regenerator.default.awrap((0,_reactNativePermissions.check)(_reactNativePermissions.PERMISSIONS.IOS.LOCATION_ALWAYS));case 11:requestResult=_context8.sent;if(!(requestResult===_reactNativePermissions.RESULTS.GRANTED)){_context8.next=15;break;}console.log('The permission is granted');return _context8.abrupt("return",true);case 15:return _context8.abrupt("return",false);case 18:_this.alertPermissions();return _context8.abrupt("return",false);case 20:case"end":return _context8.stop();}}},null,null,null,Promise);};_this.state={recordSecs:0,recordTime:'00:00:00',currentPositionSec:0,currentDurationSec:0,playTime:'00:00:00',duration:'00:00:00',status:'new',isPaused:false};return _this;}(0,_createClass2.default)(NativeAudioRecorder,[{key:"renderContent",value:function renderContent(){if(this.state.status==='new'){return(0,_react.createElement)(_react.default.Fragment,null,(0,_react.createElement)(_Badge.Badge,{style:this.props.style,onClick:this.onStartRecord,iconName:"fiber-manual-record",iconColor:"#e83a3a",__self:this,__source:{fileName:_jsxFileName,lineNumber:276,columnNumber:11}}),(0,_react.createElement)(_reactNative.Text,{style:this.styles.label,__self:this,__source:{fileName:_jsxFileName,lineNumber:282,columnNumber:11}},this.state.recordTime));}if(this.state.status==='recording'){return(0,_react.createElement)(_react.default.Fragment,null,(0,_react.createElement)(_Badge.Badge,{style:this.props.style,passedStyle:{backgroundColor:"#e83a3a"},onClick:this.onStopRecord,iconName:"fiber-manual-record",iconColor:"#f2f2f2",__self:this,__source:{fileName:_jsxFileName,lineNumber:291,columnNumber:11}}),(0,_react.createElement)(_reactNative.Text,{style:this.styles.label,__self:this,__source:{fileName:_jsxFileName,lineNumber:298,columnNumber:11}},this.state.recordTime));}if(this.state.status==='recorded'){return(0,_react.createElement)(_react.default.Fragment,null,(0,_react.createElement)(_reactNative.View,{style:this.styles.bigButtons,__self:this,__source:{fileName:_jsxFileName,lineNumber:307,columnNumber:11}},(0,_react.createElement)(_Badge.Badge,{style:this.props.style,onClick:this.onStartPlay,iconName:"play-arrow",iconColor:"#14ba14",__self:this,__source:{fileName:_jsxFileName,lineNumber:308,columnNumber:13}}),(0,_react.createElement)(_Badge.Badge,{style:this.props.style,onClick:this.onStopPlay,iconName:"stop",disabled:true,iconColor:"#000000",__self:this,__source:{fileName:_jsxFileName,lineNumber:314,columnNumber:13}})),(0,_react.createElement)(_reactNative.Text,{style:this.styles.label,__self:this,__source:{fileName:_jsxFileName,lineNumber:322,columnNumber:11}},this.state.playTime," / ",this.state.recordTime));}if(this.state.status==='playing'){return(0,_react.createElement)(_react.default.Fragment,null,(0,_react.createElement)(_reactNative.View,{style:this.styles.bigButtons,__self:this,__source:{fileName:_jsxFileName,lineNumber:331,columnNumber:11}},(0,_react.createElement)(_Badge.Badge,{style:this.props.style,onClick:this.onPausePlay,iconName:this.state.isPaused?"play-arrow":"pause",iconColor:this.state.isPaused?"#14ba14":"#000000",__self:this,__source:{fileName:_jsxFileName,lineNumber:332,columnNumber:13}}),(0,_react.createElement)(_Badge.Badge,{style:this.props.style,onClick:this.onStopPlay,iconName:"stop",disabled:false,iconColor:"#000000",__self:this,__source:{fileName:_jsxFileName,lineNumber:338,columnNumber:13}})),(0,_react.createElement)(_reactNative.Text,{style:this.styles.label,__self:this,__source:{fileName:_jsxFileName,lineNumber:346,columnNumber:11}},this.state.playTime," / ",this.state.recordTime));}}},{key:"render",value:function render(){if(!this.audioRecorderPlayer){this.audioRecorderPlayer=new _reactNativeAudioRecorderPlayer.default();}return(0,_react.createElement)(_react.default.Fragment,null,(0,_react.createElement)(_reactNative.View,{style:this.styles.container,__self:this,__source:{fileName:_jsxFileName,lineNumber:360,columnNumber:9}},this.renderContent()),(0,_react.createElement)(_reactNative.View,{style:this.styles.footerButtons,__self:this,__source:{fileName:_jsxFileName,lineNumber:363,columnNumber:9}},(0,_react.createElement)(_reactNativeButton.default,{style:this.styles.footerButton,styleDisabled:this.styles.footerButtonDisabled,onPress:this.onSave,disabled:this.state.status==='new'||this.state.status==='recording'||this.props.saveToFileDocument.isExecuting,__self:this,__source:{fileName:_jsxFileName,lineNumber:364,columnNumber:11}},"SAVE"),(0,_react.createElement)(_reactNativeButton.default,{style:[this.styles.footerButton,{backgroundColor:"#ffffff",color:"#e83a3a"}],styleDisabled:this.styles.footerButtonDisabled,onPress:this.onDelete,disabled:this.state.status==='new'||this.state.status==='recording'||this.props.saveToFileDocument.isExecuting,__self:this,__source:{fileName:_jsxFileName,lineNumber:372,columnNumber:11}},"DELETE")));}}]);return NativeAudioRecorder;}(_react.Component);exports.NativeAudioRecorder=NativeAudioRecorder;

/***/ }),

/***/ "./src/components/Badge.jsx":
/*!**********************************!*\
  !*** ./src/components/Badge.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.Badge=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _react=__webpack_require__(/*! react */ "react");var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _pluggableWidgetsTools=__webpack_require__(/*! @mendix/pluggable-widgets-tools */ "./node_modules/@mendix/pluggable-widgets-tools/dist/index.js");var _styles=__webpack_require__(/*! ../ui/styles */ "./src/ui/styles.js");var _MaterialIcons=_interopRequireDefault(__webpack_require__(/*! react-native-vector-icons/MaterialIcons */ "./node_modules/react-native-vector-icons/MaterialIcons.js"));var _jsxFileName="C:\\Users\\NathanRuth\\Documents\\Dev\\nativeAudioRecorder\\src\\components\\Badge.jsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var Badge=function(_Component){(0,_inherits2.default)(Badge,_Component);var _super=_createSuper(Badge);function Badge(){var _this;(0,_classCallCheck2.default)(this,Badge);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.styles=(0,_pluggableWidgetsTools.mergeNativeStyles)(_styles.defaultBadgeStyle,_this.props.style);return _this;}(0,_createClass2.default)(Badge,[{key:"render",value:function render(){var Touchable=_reactNative.Platform.OS==="android"?_reactNative.TouchableNativeFeedback:_reactNative.TouchableOpacity;return(0,_react.createElement)(_reactNative.View,{style:[this.styles.container,this.props.disabled?{opacity:0.5}:null],__self:this,__source:{fileName:_jsxFileName,lineNumber:18,columnNumber:13}},(0,_react.createElement)(Touchable,{style:this.styles.badge,onPress:this.props.onClick,useForeground:false,disabled:this.props.disabled,__self:this,__source:{fileName:_jsxFileName,lineNumber:19,columnNumber:17}},this.renderContent()));}},{key:"renderContent",value:function renderContent(){var icon=(0,_react.createElement)(_MaterialIcons.default,{name:this.props.iconName,size:55,color:this.props.iconColor,__self:this,__source:{fileName:_jsxFileName,lineNumber:27,columnNumber:22}});return(0,_react.createElement)(_reactNative.View,{style:[this.styles.badge,this.props.passedStyle],__self:this,__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:16}},icon);}}]);return Badge;}(_react.Component);exports.Badge=Badge;

/***/ }),

/***/ "./src/ui/styles.js":
/*!**************************!*\
  !*** ./src/ui/styles.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports,"__esModule",{value:true});exports.defaultNativeAudioRecorderStyle=exports.defaultBadgeStyle=exports.darkMode=void 0;var _reactNative=__webpack_require__(/*! react-native */ "react-native");var darkMode=_reactNative.NativeModules&&_reactNative.NativeModules.RNDarkMode&&_reactNative.NativeModules.RNDarkMode.initialMode?_reactNative.NativeModules.RNDarkMode.initialMode==="dark":false;exports.darkMode=darkMode;var defaultBadgeStyle={container:{flexDirection:"row",borderRadius:80,overflow:"hidden",margin:5,shadowColor:darkMode?'white':'black',shadowOpacity:0.9,elevation:10},badge:{width:80,height:80,justifyContent:'center',alignItems:'center',borderRadius:80,padding:8,backgroundColor:"#ffffff"}};exports.defaultBadgeStyle=defaultBadgeStyle;var defaultNativeAudioRecorderStyle={container:{alignItems:"center",flexDirection:"column",flex:1,justifyContent:"center"},footerButtons:{marginTop:"auto"},footerButtonDisabled:{padding:10,backgroundColor:"lightgray",color:"grey"},footerButton:{padding:10,backgroundColor:"#2196F3",color:"#FFFFFF"},bigButtons:{alignItems:"center",flexDirection:"row"},label:{color:darkMode?"#FFFFFF":"#000000"}};exports.defaultNativeAudioRecorderStyle=defaultNativeAudioRecorderStyle;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-native":
/*!*******************************!*\
  !*** external "react-native" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ })

/******/ });
//# sourceMappingURL=NativeAudioRecorder.js.map