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

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var runtime=function(exports){"use strict";var Op=Object.prototype;var hasOwn=Op.hasOwnProperty;var undefined;var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});return obj[key];}try{define({},"");}catch(err){define=function define(obj,key,value){return obj[key]=value;};}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator;var generator=Object.create(protoGenerator.prototype);var context=new Context(tryLocsList||[]);generator._invoke=makeInvokeMethod(innerFn,self,context);return generator;}exports.wrap=wrap;function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)};}catch(err){return{type:"throw",arg:err};}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this;};var getProto=Object.getPrototypeOf;var NativeIteratorPrototype=getProto&&getProto(getProto(values([])));if(NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)){IteratorPrototype=NativeIteratorPrototype;}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction");function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){define(prototype,method,function(arg){return this._invoke(method,arg);});});}exports.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||(ctor.displayName||ctor.name)==="GeneratorFunction":false;};exports.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype);}else{genFun.__proto__=GeneratorFunctionPrototype;define(genFun,toStringTagSymbol,"GeneratorFunction");}genFun.prototype=Object.create(Gp);return genFun;};exports.awrap=function(arg){return{__await:arg};};function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg);}else{var result=record.arg;var value=result.value;if(value&&typeof value==="object"&&hasOwn.call(value,"__await")){return PromiseImpl.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject);},function(err){invoke("throw",err,resolve,reject);});}return PromiseImpl.resolve(value).then(function(unwrapped){result.value=unwrapped;resolve(result);},function(error){return invoke("throw",error,resolve,reject);});}}var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl(function(resolve,reject){invoke(method,arg,resolve,reject);});}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg();}this._invoke=enqueue;}defineIteratorMethods(AsyncIterator.prototype);AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this;};exports.AsyncIterator=AsyncIterator;exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){if(PromiseImpl===void 0)PromiseImpl=Promise;var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next();});};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running");}if(state===GenStateCompleted){if(method==="throw"){throw arg;}return doneResult();}context.method=method;context.arg=arg;while(true){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult;}}if(context.method==="next"){context.sent=context._sent=context.arg;}else if(context.method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw context.arg;}context.dispatchException(context.arg);}else if(context.method==="return"){context.abrupt("return",context.arg);}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){state=context.done?GenStateCompleted:GenStateSuspendedYield;if(record.arg===ContinueSentinel){continue;}return{value:record.arg,done:context.done};}else if(record.type==="throw"){state=GenStateCompleted;context.method="throw";context.arg=record.arg;}}};}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){context.delegate=null;if(context.method==="throw"){if(delegate.iterator["return"]){context.method="return";context.arg=undefined;maybeInvokeDelegate(delegate,context);if(context.method==="throw"){return ContinueSentinel;}}context.method="throw";context.arg=new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record=tryCatch(method,delegate.iterator,context.arg);if(record.type==="throw"){context.method="throw";context.arg=record.arg;context.delegate=null;return ContinueSentinel;}var info=record.arg;if(!info){context.method="throw";context.arg=new TypeError("iterator result is not an object");context.delegate=null;return ContinueSentinel;}if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc;if(context.method!=="return"){context.method="next";context.arg=undefined;}}else{return info;}context.delegate=null;return ContinueSentinel;}defineIteratorMethods(Gp);define(Gp,toStringTagSymbol,"Generator");Gp[iteratorSymbol]=function(){return this;};Gp.toString=function(){return"[object Generator]";};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1];}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3];}this.tryEntries.push(entry);}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record;}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(true);}exports.keys=function(object){var keys=[];for(var key in object){keys.push(key);}keys.reverse();return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next;}}next.done=true;return next;};};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable);}if(typeof iterable.next==="function"){return iterable;}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next;}}next.value=undefined;next.done=true;return next;};return next.next=next;}}return{next:doneResult};}exports.values=values;function doneResult(){return{value:undefined,done:true};}Context.prototype={constructor:Context,reset:function reset(skipTempReset){this.prev=0;this.next=0;this.sent=this._sent=undefined;this.done=false;this.delegate=null;this.method="next";this.arg=undefined;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined;}}}},stop:function stop(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg;}return this.rval;},dispatchException:function dispatchException(exception){if(this.done){throw exception;}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;if(caught){context.method="next";context.arg=undefined;}return!!caught;}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){return handle("end");}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true);}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc);}}else{throw new Error("try statement without catch or finally");}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break;}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){finallyEntry=null;}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.method="next";this.next=finallyEntry.finallyLoc;return ContinueSentinel;}return this.complete(record);},complete:function complete(record,afterLoc){if(record.type==="throw"){throw record.arg;}if(record.type==="break"||record.type==="continue"){this.next=record.arg;}else if(record.type==="return"){this.rval=this.arg=record.arg;this.method="return";this.next="end";}else if(record.type==="normal"&&afterLoc){this.next=afterLoc;}return ContinueSentinel;},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel;}}},"catch":function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");},delegateYield:function delegateYield(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};if(this.method==="next"){this.arg=undefined;}return ContinueSentinel;}};return exports;}( true?module.exports:undefined);try{regeneratorRuntime=runtime;}catch(accidentalStrictMode){Function("r","regeneratorRuntime = r")(runtime);}

/***/ }),

/***/ "./src/NativeAudioRecorder.jsx":
/*!*************************************!*\
  !*** ./src/NativeAudioRecorder.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(exports,"__esModule",{value:true});exports.NativeAudioRecorder=void 0;var _regenerator=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _react=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _Badge=__webpack_require__(/*! ./components/Badge */ "./src/components/Badge.jsx");var _reactNativeAudioRecorderPlayer=_interopRequireWildcard(__webpack_require__(/*! react-native-audio-recorder-player */ "./node_modules/react-native-audio-recorder-player/index.ts"));var _jsxFileName="C:\\Users\\NathanRuth\\Documents\\Dev\\nativeAudioRecorder-js\\src\\NativeAudioRecorder.jsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var NativeAudioRecorder=function(_Component){(0,_inherits2.default)(NativeAudioRecorder,_Component);var _super=_createSuper(NativeAudioRecorder);function NativeAudioRecorder(props){var _this;(0,_classCallCheck2.default)(this,NativeAudioRecorder);_this=_super.call(this,props);_this.audioRecorderPlayer=null;_this.onStartRecord=function _callee(){var granted,_granted,path,audioSet,uri;return _regenerator.default.async(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(!(_reactNative.Platform.OS==='android')){_context.next=17;break;}_context.prev=1;_context.next=4;return _regenerator.default.awrap(_reactNative.PermissionsAndroid.request(_reactNative.PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{title:'Permissions for write access',message:'Give permission to your storage to write a file',buttonPositive:'ok'}));case 4:granted=_context.sent;if(!(granted===_reactNative.PermissionsAndroid.RESULTS.GRANTED)){_context.next=9;break;}console.log('You can use the storage');_context.next=11;break;case 9:console.log('permission denied');return _context.abrupt("return");case 11:_context.next=17;break;case 13:_context.prev=13;_context.t0=_context["catch"](1);console.warn(_context.t0);return _context.abrupt("return");case 17:if(!(_reactNative.Platform.OS==='android')){_context.next=34;break;}_context.prev=18;_context.next=21;return _regenerator.default.awrap(_reactNative.PermissionsAndroid.request(_reactNative.PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,{title:'Permissions for recording audio',message:'Give permission to your microphone to record audio',buttonPositive:'ok'}));case 21:_granted=_context.sent;if(!(_granted===_reactNative.PermissionsAndroid.RESULTS.GRANTED)){_context.next=26;break;}console.log('You can use the mic');_context.next=28;break;case 26:console.log('permission denied');return _context.abrupt("return");case 28:_context.next=34;break;case 30:_context.prev=30;_context.t1=_context["catch"](18);console.warn(_context.t1);return _context.abrupt("return");case 34:path=_reactNative.Platform.select({ios:'hello.m4a',android:'sdcard/hello.mp4'});audioSet={AudioEncoderAndroid:_reactNativeAudioRecorderPlayer.AudioEncoderAndroidType.AAC,AudioSourceAndroid:_reactNativeAudioRecorderPlayer.AudioSourceAndroidType.MIC,AVEncoderAudioQualityKeyIOS:_reactNativeAudioRecorderPlayer.AVEncoderAudioQualityIOSType.high,AVNumberOfChannelsKeyIOS:2,AVFormatIDKeyIOS:_reactNativeAudioRecorderPlayer.AVEncodingOption.aac};console.log('audioSet',audioSet);console.log('audiorecorderplaayer',_this.audioRecorderPlayer);_context.next=40;return _regenerator.default.awrap(_this.audioRecorderPlayer.startRecorder(path,audioSet));case 40:uri=_context.sent;_this.audioRecorderPlayer.addRecordBackListener(function(e){_this.setState({recordSecs:e.current_position,recordTime:_this.audioRecorderPlayer.mmssss(Math.floor(e.current_position))});});console.log("uri: "+uri);case 43:case"end":return _context.stop();}}},null,null,[[1,13],[18,30]],Promise);};_this.onStopRecord=function _callee2(){var result;return _regenerator.default.async(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.next=2;return _regenerator.default.awrap(_this.audioRecorderPlayer.stopRecorder());case 2:result=_context2.sent;_this.audioRecorderPlayer.removeRecordBackListener();_this.setState({recordSecs:0});console.log(result);case 6:case"end":return _context2.stop();}}},null,null,null,Promise);};_this.onStartPlay=function _callee3(){var path,msg;return _regenerator.default.async(function _callee3$(_context3){while(1){switch(_context3.prev=_context3.next){case 0:console.log('onStartPlay');path=_reactNative.Platform.select({ios:'hello.m4a',android:'sdcard/hello.mp4'});_context3.next=4;return _regenerator.default.awrap(_this.audioRecorderPlayer.startPlayer(path));case 4:msg=_context3.sent;_this.audioRecorderPlayer.setVolume(1.0);console.log(msg);_this.audioRecorderPlayer.addPlayBackListener(function(e){if(e.current_position===e.duration){console.log('finished');_this.audioRecorderPlayer.stopPlayer();}_this.setState({currentPositionSec:e.current_position,currentDurationSec:e.duration,playTime:_this.audioRecorderPlayer.mmssss(Math.floor(e.current_position)),duration:_this.audioRecorderPlayer.mmssss(Math.floor(e.duration))});});case 8:case"end":return _context3.stop();}}},null,null,null,Promise);};_this.onPausePlay=function _callee4(){return _regenerator.default.async(function _callee4$(_context4){while(1){switch(_context4.prev=_context4.next){case 0:_context4.next=2;return _regenerator.default.awrap(_this.audioRecorderPlayer.pausePlayer());case 2:case"end":return _context4.stop();}}},null,null,null,Promise);};_this.onStopPlay=function _callee5(){return _regenerator.default.async(function _callee5$(_context5){while(1){switch(_context5.prev=_context5.next){case 0:console.log('onStopPlay');_this.audioRecorderPlayer.stopPlayer();_this.audioRecorderPlayer.removePlayBackListener();case 3:case"end":return _context5.stop();}}},null,null,null,Promise);};_this.state={recordSecs:0,recordTime:'00:00:00',currentPositionSec:0,currentDurationSec:0,playTime:'00:00:00',duration:'00:00:00'};return _this;}(0,_createClass2.default)(NativeAudioRecorder,[{key:"render",value:function render(){if(!this.audioRecorderPlayer){this.audioRecorderPlayer=new _reactNativeAudioRecorderPlayer.default();}return(0,_react.createElement)(_reactNative.View,{__self:this,__source:{fileName:_jsxFileName,lineNumber:147,columnNumber:13}},(0,_react.createElement)(_reactNative.Button,{style:this.props.style,onPress:this.onStartRecord,title:"onStartRecord",__self:this,__source:{fileName:_jsxFileName,lineNumber:148,columnNumber:15}},"onStartRecord"),(0,_react.createElement)(_Badge.Badge,{style:this.props.style,onClick:this.onStopRecord,value:"StopRecord",__self:this,__source:{fileName:_jsxFileName,lineNumber:154,columnNumber:17}}),(0,_react.createElement)(_Badge.Badge,{style:this.props.style,onClick:this.onStartPlay,value:"StartPlay",__self:this,__source:{fileName:_jsxFileName,lineNumber:159,columnNumber:17}}),(0,_react.createElement)(_Badge.Badge,{style:this.props.style,onClick:this.onStopPlay,value:"StopPlay",__self:this,__source:{fileName:_jsxFileName,lineNumber:164,columnNumber:17}}),(0,_react.createElement)(_reactNative.Text,{__self:this,__source:{fileName:_jsxFileName,lineNumber:169,columnNumber:17}},this.state.recordSecs),(0,_react.createElement)(_reactNative.Text,{__self:this,__source:{fileName:_jsxFileName,lineNumber:170,columnNumber:17}},this.state.recordTime),(0,_react.createElement)(_reactNative.Text,{__self:this,__source:{fileName:_jsxFileName,lineNumber:171,columnNumber:17}},this.state.currentPositionSec),(0,_react.createElement)(_reactNative.Text,{__self:this,__source:{fileName:_jsxFileName,lineNumber:172,columnNumber:17}},this.state.currentDurationSec),(0,_react.createElement)(_reactNative.Text,{__self:this,__source:{fileName:_jsxFileName,lineNumber:173,columnNumber:17}},this.state.playTime),(0,_react.createElement)(_reactNative.Text,{__self:this,__source:{fileName:_jsxFileName,lineNumber:174,columnNumber:17}},this.state.duration));}}]);return NativeAudioRecorder;}(_react.Component);exports.NativeAudioRecorder=NativeAudioRecorder;

/***/ }),

/***/ "./src/components/Badge.jsx":
/*!**********************************!*\
  !*** ./src/components/Badge.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.Badge=void 0;var _classCallCheck2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));var _inherits2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _getPrototypeOf2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));var _react=__webpack_require__(/*! react */ "react");var _reactNative=__webpack_require__(/*! react-native */ "react-native");var _pluggableWidgetsTools=__webpack_require__(/*! @mendix/pluggable-widgets-tools */ "./node_modules/@mendix/pluggable-widgets-tools/dist/index.js");var _styles=__webpack_require__(/*! ../ui/styles */ "./src/ui/styles.js");var _jsxFileName="C:\\Users\\NathanRuth\\Documents\\Dev\\nativeAudioRecorder-js\\src\\components\\Badge.jsx";function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2.default)(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2.default)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2.default)(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var Badge=function(_Component){(0,_inherits2.default)(Badge,_Component);var _super=_createSuper(Badge);function Badge(){var _this;(0,_classCallCheck2.default)(this,Badge);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.styles=(0,_pluggableWidgetsTools.mergeNativeStyles)(_styles.defaultBadgeStyle,_this.props.style);return _this;}(0,_createClass2.default)(Badge,[{key:"render",value:function render(){var Touchable=_reactNative.Platform.OS==="android"?_reactNative.TouchableNativeFeedback:_reactNative.TouchableOpacity;return(0,_react.createElement)(_reactNative.View,{style:this.styles.container,__self:this,__source:{fileName:_jsxFileName,lineNumber:15,columnNumber:13}},(0,_react.createElement)(Touchable,{style:this.styles.badge,onPress:this.props.onClick,useForeground:true,__self:this,__source:{fileName:_jsxFileName,lineNumber:16,columnNumber:17}},this.renderContent()));}},{key:"renderContent",value:function renderContent(){var text=(0,_react.createElement)(_reactNative.Text,{style:this.styles.label,__self:this,__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:22}},this.props.value);if(_reactNative.Platform.OS==="android"){return(0,_react.createElement)(_reactNative.View,{style:this.styles.badge,__self:this,__source:{fileName:_jsxFileName,lineNumber:27,columnNumber:20}},text);}return text;}}]);return Badge;}(_react.Component);exports.Badge=Badge;

/***/ }),

/***/ "./src/ui/styles.js":
/*!**************************!*\
  !*** ./src/ui/styles.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports,"__esModule",{value:true});exports.defaultBadgeStyle=void 0;var defaultBadgeStyle={container:{flexDirection:"row",borderRadius:30,overflow:"hidden"},badge:{borderRadius:30,paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,backgroundColor:"#D9534F",overflow:"hidden"},label:{textAlign:"center",fontSize:15,fontWeight:"bold",color:"#FFFFFF"}};exports.defaultBadgeStyle=defaultBadgeStyle;

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