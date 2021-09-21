"use strict";
exports.id = "D3-Draw";
exports.ids = ["D3-Draw"];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js!./txsrc/views/Pages/D3/style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./txsrc/views/Pages/D3/style.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".stop-left {\r\n    stop-color: #426164;\r\n}\r\n\r\n.stop-right {\r\n    stop-color: #061621;\r\n}\r\n#Script-Container {\r\n    /* box-sizing: border-box; */\r\n    position: relative;\r\n    /* left: -120px; */\r\n    top: 55px;\r\n    width: 100%;\r\n    height: 920px;\r\n    /* padding: 25px; */\r\n}\r\n\r\ntext {\r\n    /* font-family: \"imported-Azo-Medium\"; */\r\n    color: #E4E5E7;\r\n}\r\n\r\npath {\r\n    fill: #E4E5E7;\r\n    stroke: none;\r\n    stroke-width: .5px;\r\n    box-shadow: 2px 2px 15px rgba(0, 0, 0, .5);\r\n}\r\n\r\n.cities-circles {\r\n    fill: url(#Gradient);\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    fill-opacity: .7;\r\n    z-index: -1;\r\n    transition: .5s;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.cities-circles.clicked {\r\n    fill: #9C3C41;\r\n    fill-opacity: 1;\r\n    r: 10;\r\n}\r\n\r\n.cities-circles.active {\r\n    fill: #5C3B42;\r\n    r: 10;\r\n}\r\n\r\npath.active {\r\n    fill: pink;\r\n}\r\n\r\n.ellipseCan {\r\n    width: 100px;\r\n    height: 100px;\r\n    stroke-width: .3;\r\n    opacity: .9;\r\n}\r\n\r\n.year-container text {\r\n    cursor: pointer;\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.year-container text.active {\r\n    fill: #5C3B42;\r\n}\r\n\r\n.legend-circles {\r\n    fill: url(#Gradient);\r\n    opacity: .5;\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.legend tspan {\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.node text {\r\n    display: none;\r\n    font: 10px sans-serif;\r\n}\r\n\r\n.node:hover text {\r\n    display: inline;\r\n}", "",{"version":3,"sources":["webpack://./txsrc/views/Pages/D3/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,wCAAwC;IACxC,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,0CAA0C;AAC9C;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,KAAK;AACT;;AAEA;IACI,aAAa;IACb,KAAK;AACT;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB","sourcesContent":[".stop-left {\r\n    stop-color: #426164;\r\n}\r\n\r\n.stop-right {\r\n    stop-color: #061621;\r\n}\r\n#Script-Container {\r\n    /* box-sizing: border-box; */\r\n    position: relative;\r\n    /* left: -120px; */\r\n    top: 55px;\r\n    width: 100%;\r\n    height: 920px;\r\n    /* padding: 25px; */\r\n}\r\n\r\ntext {\r\n    /* font-family: \"imported-Azo-Medium\"; */\r\n    color: #E4E5E7;\r\n}\r\n\r\npath {\r\n    fill: #E4E5E7;\r\n    stroke: none;\r\n    stroke-width: .5px;\r\n    box-shadow: 2px 2px 15px rgba(0, 0, 0, .5);\r\n}\r\n\r\n.cities-circles {\r\n    fill: url(#Gradient);\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    fill-opacity: .7;\r\n    z-index: -1;\r\n    transition: .5s;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.cities-circles.clicked {\r\n    fill: #9C3C41;\r\n    fill-opacity: 1;\r\n    r: 10;\r\n}\r\n\r\n.cities-circles.active {\r\n    fill: #5C3B42;\r\n    r: 10;\r\n}\r\n\r\npath.active {\r\n    fill: pink;\r\n}\r\n\r\n.ellipseCan {\r\n    width: 100px;\r\n    height: 100px;\r\n    stroke-width: .3;\r\n    opacity: .9;\r\n}\r\n\r\n.year-container text {\r\n    cursor: pointer;\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.year-container text.active {\r\n    fill: #5C3B42;\r\n}\r\n\r\n.legend-circles {\r\n    fill: url(#Gradient);\r\n    opacity: .5;\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.legend tspan {\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.node text {\r\n    display: none;\r\n    font: 10px sans-serif;\r\n}\r\n\r\n.node:hover text {\r\n    display: inline;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./txsrc/views/Pages/D3/style.css":
/*!****************************************!*\
  !*** ./txsrc/views/Pages/D3/style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./txsrc/views/Pages/D3/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./txsrc/views/Pages/D3/Draw.js":
/*!**************************************!*\
  !*** ./txsrc/views/Pages/D3/Draw.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./txsrc/views/Pages/D3/style.css");
/* harmony import */ var _DrawFunction_generateAllGroups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawFunction/generateAllGroups */ "./txsrc/views/Pages/D3/DrawFunction/generateAllGroups.js");
/* harmony import */ var _data_staticVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/staticVariables */ "./txsrc/views/Pages/D3/data/staticVariables.js");
/* harmony import */ var _styleFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styleFunctions */ "./txsrc/views/Pages/D3/styleFunctions.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities */ "./txsrc/views/Pages/D3/utilities.js");










const Draw = (
  container,
  svgRef,
  annualrain,
  slums,
  population,
  months,
  mapData
) => {
  let containerElement = svgRef.current;
  let containerX = 0;
  let containerY = 0;
  let yearLableInc = 80;
  let mapXOffSet = -100;
  let h = container.mapXOffSetWidth;
  let w = container.mapXOffSetHeight;
  let yearSelected = "2013";
  let generatedGroups = (0,_DrawFunction_generateAllGroups__WEBPACK_IMPORTED_MODULE_2__.generateAllGroups)(d3__WEBPACK_IMPORTED_MODULE_0__, container);
  while (!generatedGroups) {
    generatedGroups = (0,_DrawFunction_generateAllGroups__WEBPACK_IMPORTED_MODULE_2__.generateAllGroups)(d3__WEBPACK_IMPORTED_MODULE_0__, container);
  }
  /*--------------------------------------------------------------*/
  /*--------------------------------------------------------------*/
  ///////////////////////////Circles Drop Shadow////////////////////
  /*--------------------------------------------------------------*/
  /*--------------------------------------------------------------*/

  (0,_styleFunctions__WEBPACK_IMPORTED_MODULE_4__.generatGradient)(container);
  (0,_styleFunctions__WEBPACK_IMPORTED_MODULE_4__.generateBlur)(container);
  (0,_styleFunctions__WEBPACK_IMPORTED_MODULE_4__.shadowGenerator)(container, "drop-shadow", "330%", "330%", 3, 10, 10, 0.3);
  (0,_styleFunctions__WEBPACK_IMPORTED_MODULE_4__.shadowGenerator)(container, "graph-drop-shadow", "130%", "130%", 6, 0, 0, 1);
  (0,_styleFunctions__WEBPACK_IMPORTED_MODULE_4__.shadowGenerator)(
    container,
    "legend-drop-shadow",
    "330%",
    "330%",
    1,
    10,
    5,
    0.2
  );

  function reDrawCan() {
    const annualRainData = annualrain.data;

    const datatransfer = annualRainData.map((properties) => {
      return properties["Sum2013"];
    });

    let firstMin = d3__WEBPACK_IMPORTED_MODULE_0__.min(datatransfer);
    let firstMax = d3__WEBPACK_IMPORTED_MODULE_0__.max(datatransfer);

    let radScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear().domain([firstMin, firstMax]).range([6, 24]);

    container.attr("width", w).attr("height", h);

    // container
    //   .selectAll("g")
    //   .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

    generatedGroups.mapContainer.attr(
      "transform",
      "translate(" + mapXOffSet + ",0)"
    );
    generatedGroups.legendGraph.attr(
      "transform",
      "translate(" + (265 + mapXOffSet) + " ," + h + ")"
    );

    generatedGroups.ellipseContainer
      .selectAll("ellipse")
      .data(_data_staticVariables__WEBPACK_IMPORTED_MODULE_3__.staticState.ellipsesLength)
      .enter()
      .append("ellipse")
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .attr("rx", 0)
      .attr("ry", 0);

    generatedGroups.cityCircles.attr(
      "transform",
      "translate(" + mapXOffSet + ",0)"
    );
    generatedGroups.cityLables.attr(
      "transform",
      "translate(" + mapXOffSet + ",0)"
    );
    generatedGroups.ellipseContainer.attr(
      "transform",
      "translate(" + mapXOffSet + ",0)"
    );

    let managedArray = [];
    const legendData = annualrain.data.map((data) => {
      return data.Sum2013;
    });
    const sortedData = legendData.sort(d3__WEBPACK_IMPORTED_MODULE_0__.descending);
    managedArray.push(sortedData[0]);
    managedArray.push(sortedData[sortedData.length / 2]);
    managedArray.push(sortedData[sortedData.length - 1]);

    generatedGroups.legendGraph
      .selectAll("circle")
      .data(managedArray)
      .enter()
      .append("circle")
      .attr("class", "cities-circles")
      .attr("transform", (d, i) => {
        return "translate(0," + -radScale(d) + ")";
      })
      .attr("r", (d) => {
        return radScale(d);
      });

    generatedGroups.legendGraph
      .selectAll("line")
      .data(managedArray)
      .enter()
      .append("line")
      .attr("transform", function (d, i) {
        return "translate(0," + -radScale(d) * 2 + ")";
      })
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x1", function (d, i) {
        return i * 50 + 50;
      })
      .attr("y1", 1)
      .style("stroke", "white");

    generatedGroups.legendGraph
      .selectAll("text")
      .data(managedArray)
      .enter()
      .append("text")
      .attr("transform", function (d, i) {
        return (
          "translate(" + (i * 50 + 52) + "," + (-radScale(d) * 2 - 3) + ")"
        );
      })
      .text(function (d) {
        return d + "mm";
      })
      .style("font-size", "6pt")
      .style("fill", "white");

    generatedGroups.cityCircles
      .selectAll("circle")
      .data(annualrain.data)
      .enter()
      .append("circle")
      .attr("id", (d) => {
        return d.Station;
      })
      .attr("class", "cities-circles")
      .attr("transform", (d) => {
        const pos = (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.citiesProjection)([+d.longitude, +d.latitude]);
        return `translate(${pos[0]},${pos[1]})`;
      })
      .attr("r", (d) => {
        return radScale(d.Sum2013);
      })
      .on("mouseover", function (d) {
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this).classed("active", true);
      })
      .on("mouseout", function (d) {
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this).classed("active", false);
      })

      .on("click", function () {
        __webpack_require__.e(/*! import() | D3-stationsClick */ "D3-stationsClick").then(__webpack_require__.bind(__webpack_require__, /*! ./MapMouseControles/StationsClick */ "./txsrc/views/Pages/D3/MapMouseControles/StationsClick.js")).then(({ default: stationsClick }) => {
          stationsClick(
            population,
            months,
            yearSelected,
            generatedGroups,
            d3__WEBPACK_IMPORTED_MODULE_0__,
            mapXOffSet,
            this
          );
        });
      });

    __webpack_require__.e(/*! import() | D3-slumsComponent */ "D3-slumsComponent").then(__webpack_require__.bind(__webpack_require__, /*! ./MapComponents/SlumsComponent */ "./txsrc/views/Pages/D3/MapComponents/SlumsComponent.js")).then(({ default: slumsComponent }) => {
      slumsComponent(slums, generatedGroups, yearLableInc);
    });

    generatedGroups.yearsContainer.attr("transform", "translate(150,20)");
    generatedGroups.yearsContainer
      .selectAll("text")
      .data(_data_staticVariables__WEBPACK_IMPORTED_MODULE_3__.staticState.yearSelector)
      .enter()
      .append("text")
      .attr("x", function (d, i) {
        return i * yearLableInc;
      })
      .attr("y", 0)
      .text(function (d) {
        return d.name;
      })
      .attr("id", function (d) {
        return d.name;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", 12)

      .on("mouseover", function (d) {
        let year = this.id;
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this).classed("active", true);

        generatedGroups.yearsSlums
          .selectAll("rect")
          .transition()
          .duration(500)
          .attr("height", function (d, i) {
            return (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.slumScale)(+d.value, slums);
          });
        generatedGroups.yearsSlums
          .selectAll("text")
          .transition()
          .delay(500)
          .duration(100)
          .style("opacity", function (d) {
            if (d.year === year) {
              return 1;
            } else {
              return 0;
            }
          });
      })
      .on("mouseout", function (d) {
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this).classed("active", false);
        generatedGroups.yearsSlums
          .selectAll("rect")
          .transition()
          .duration(500)
          .attr("height", 0);
        generatedGroups.yearsSlums
          .selectAll("text")
          .transition()
          .delay(500)
          .duration(100)
          .style("opacity", 0);
      })
      .on("click", function (d) {
        __webpack_require__.e(/*! import() | D3-removeFunction */ "D3-removeFunction").then(__webpack_require__.bind(__webpack_require__, /*! ./MapComponents/RemoveFunction */ "./txsrc/views/Pages/D3/MapComponents/RemoveFunction.js")).then(({ default: removeFunction }) => {
          removeFunction(d3__WEBPACK_IMPORTED_MODULE_0__, container, generatedGroups);
        });
        (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.onClickTextFunction)(this, generatedGroups.yearsContainer);
        const yearListSelected = this.id;
        __webpack_require__.e(/*! import() | D3-DrawAll */ "D3-DrawAll").then(__webpack_require__.bind(__webpack_require__, /*! ./MapComponents/DrawAllComponents */ "./txsrc/views/Pages/D3/MapComponents/DrawAllComponents.js")).then(({ default: DrawAll }) => {
          DrawAll(
            d3__WEBPACK_IMPORTED_MODULE_0__,
            annualrain,
            yearListSelected,
            yearSelected,
            firstMin,
            firstMax,
            generatedGroups
          );
        });
      });

    __webpack_require__.e(/*! import() | D3-removeEllipses */ "D3-removeEllipses").then(__webpack_require__.bind(__webpack_require__, /*! ./MapComponents/RemoveEllipses */ "./txsrc/views/Pages/D3/MapComponents/RemoveEllipses.js")).then(({ default: removeEllipses }) => {
      removeEllipses(d3__WEBPACK_IMPORTED_MODULE_0__, container, generatedGroups);
    });

    __webpack_require__.e(/*! import() | D3-DrawAll */ "D3-DrawAll").then(__webpack_require__.bind(__webpack_require__, /*! ./MapComponents/DrawAllComponents */ "./txsrc/views/Pages/D3/MapComponents/DrawAllComponents.js")).then(({ default: DrawAll }) => {
      DrawAll(
        d3__WEBPACK_IMPORTED_MODULE_0__,
        annualrain,
        2013,
        yearSelected,
        firstMin,
        firstMax,
        generatedGroups
      );
    });

    d3__WEBPACK_IMPORTED_MODULE_0__.selectAll("g").raise();

    // window.addEventListener("click", function (event) {
    //   if (
    //     (event.srcElement.className === "content-page open" &&
    //       event.srcElement.id === "D3") ||
    //     event.srcElement.id === "control-canvas" ||
    //     event.srcElement.id === "map-canvas"
    //   ) {
    //     generatedGroups.yearsContainer
    //       .selectAll("text")
    //       .attr("font-size", 12)
    //       .style("fill", "white")
    //       .style("font-family", "imported-Azo");

    //     removeEllipses();
    //   }
    // });
  }

  // window.addEventListener("click", function (event) {
  //   let thisCanvasContainer = document.getElementsByClassName("content-page");

  //   for (let i = 0; i < thisCanvasContainer.length; i++) {
  //     if (
  //       event.srcElement.className !== "content-page open" &&
  //       event.srcElement.id === "D3" &&
  //       thisCanvasContainer[i].id === "D3" &&
  //       thisCanvasContainer[i].classList.contains("open")
  //     ) {
  //       let thisContainer = document.getElementById("Script-Container");
  //       reDrawCan();
  //     }
  //   }
  // });
  containerElement && reDrawCan();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draw);


/***/ }),

/***/ "./txsrc/views/Pages/D3/DrawFunction/generateAllGroups.js":
/*!****************************************************************!*\
  !*** ./txsrc/views/Pages/D3/DrawFunction/generateAllGroups.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateAllGroups": () => (/* binding */ generateAllGroups)
/* harmony export */ });
const generateAllGroups=(d3,container)=>{
    return {
     mapContainer : container.append("g").attr("id", "map-container-group"),
     yearsContainer : container.append("g").attr("class", "year-container"),
     yearsSlums : container.append("g").attr("class", "year-slumes"),
     lableSlums : container.append("g").attr("class", "lable-slumes"),
     cityCircles : container.append("g").attr("id", "city-indicators"),
     legendGraph : container.append("g").attr("id", "graph-legend-group"),
     ellipseContainer : container.append("g").attr("id", "ellipse-group"),
     cityLables : container.append("g").attr("id", "city-Lable"),
     groupOne : container.append("g").attr("id", "population-groupOne"),
     groupTwo : container.append("g").attr("id", "population-groupTwo"),
     groupThree : container.append("g").attr("id", "population-groupThree"),
     lables : container.append("g").attr("id", "graph-lables"),
     rainGroup : container.append("g").attr("class", "rainG"),
    }
}

/***/ }),

/***/ "./txsrc/views/Pages/D3/data/staticVariables.js":
/*!******************************************************!*\
  !*** ./txsrc/views/Pages/D3/data/staticVariables.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "staticState": () => (/* binding */ staticState)
/* harmony export */ });
const staticState = {
  ellipsesLength: [
    {
      size: 70,
      f: "#E4E5E7",
      s: "none",
    },
    {
      size: 70,
      f: "#E4E5E7",
      s: "none",
    },
    {
      size: 70,
      f: "#E4E5E7",
      s: "none",
    },
    {
      size: 82,
      f: "#E4E5E7",
      s: "none",
    },
    {
      size: 60,
      f: "none",
      s: "black",
    },
    {
      size: 60,
      f: "none",
      s: "black",
    },
    {
      size: 60,
      f: "none",
      s: "black",
    },
    {
      size: 80,
      f: "none",
      s: "none",
    },
  ],
  rectsLength: [
    {
      x: 183,
      y: 0,
      text: "Cities Population 1991",
    },
    {
      x: 63,
      y: 120,
      text: "Cities Population 2001",
    },
    {
      x: -57,
      y: 0,
      text: "Cities Population 2011",
    },
  ],
  rainMonthsName: [
    {
      name: "Jan",
    },
    {
      name: "Feb",
    },
    {
      name: "Mar",
    },
    {
      name: "Apr",
    },
    {
      name: "May",
    },
    {
      name: "Jun",
    },
    {
      name: "Ju",
    },
    {
      name: "Aug",
    },
    {
      name: "Sep",
    },
    {
      name: "Oct",
    },
    {
      name: "Nov",
    },
    {
      name: "Dec",
    },
  ],
  yearSelector: [
    {
      name: 1990,
    },
    {
      name: 1995,
    },
    {
      name: 2000,
    },
    {
      name: 2005,
    },
    {
      name: 2010,
    },
    {
      name: 2013,
    },
  ],
};


/***/ }),

/***/ "./txsrc/views/Pages/D3/styleFunctions.js":
/*!************************************************!*\
  !*** ./txsrc/views/Pages/D3/styleFunctions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateBlur": () => (/* binding */ generateBlur),
/* harmony export */   "generatGradient": () => (/* binding */ generatGradient),
/* harmony export */   "shadowGenerator": () => (/* binding */ shadowGenerator)
/* harmony export */ });
const generateBlur = (container) => {
  container
    .append("defs")
    .append("filter")
    .attr("id", "blurFilter")
    .append("feGaussianBlur")
    .attr("stdDeviation", 20);
};

const generatGradient = (container) => {
  var gradient = container
    .append("defs")
    .append("linearGradient")
    .attr("id", "Gradient")
    .attr("gradientTransform", "rotate(180)");
  gradient.append("stop").attr("class", "stop-left").attr("offset", "0");
  gradient.append("stop").attr("class", "stop-right").attr("offset", "1");
};

const shadowGenerator = (
  container,
  id,
  width,
  height,
  stdDeviation,
  dx,
  dy,
  slope
) => {
  let defsShadow = container.append("defs");

  let filterShadow = defsShadow
    .append("filter")
    .attr("id", id)
    .attr("height", width)
    .attr("width", height);

  filterShadow
    .append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", stdDeviation);

  filterShadow
    .append("feOffset")
    .attr("dx", dx)
    .attr("dy", dy)
    .attr("result", "offsetBlur");

  let feTransferShadow = filterShadow.append("feComponentTransfer");

  feTransferShadow
    .append("feFuncA")
    .attr("type", "linear")
    .attr("slope", slope);

  let feMergeShadow = filterShadow.append("feMerge");

  feMergeShadow.append("feMergeNode");
  feMergeShadow.append("feMergeNode").attr("in", "SourceGraphic");
};


/***/ }),

/***/ "./txsrc/views/Pages/D3/utilities.js":
/*!*******************************************!*\
  !*** ./txsrc/views/Pages/D3/utilities.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findMinMax": () => (/* binding */ findMinMax),
/* harmony export */   "onClickTextFunction": () => (/* binding */ onClickTextFunction),
/* harmony export */   "slumScale": () => (/* binding */ slumScale),
/* harmony export */   "geoLocations": () => (/* binding */ geoLocations),
/* harmony export */   "citiesProjection": () => (/* binding */ citiesProjection),
/* harmony export */   "angleScale": () => (/* binding */ angleScale)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");


const findMinMax = (data) => {
  const firstMin = d3__WEBPACK_IMPORTED_MODULE_0__.min(data);
  const firstMax = d3__WEBPACK_IMPORTED_MODULE_0__.max(data);
  return [firstMin, firstMax];
};

const onClickTextFunction = (d, yearsContainer) => {
  yearsContainer
    .selectAll("text")
    .attr("font-size", 12)
    .style("fill", "white")

  d3__WEBPACK_IMPORTED_MODULE_0__.select(d)
    .attr("font-size", 24)
    .style("fill", "#9C3C41")
};

const slumScale = (data,slums) => {
  const scale=d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
    .domain([slums.data[0].min, slums.data[0].max])
    .range([20, 100]);
  return scale(data)
};

const geoLocations=(data)=>{
  const projection = d3__WEBPACK_IMPORTED_MODULE_0__.geoEquirectangular();

  const geoGenerator = d3__WEBPACK_IMPORTED_MODULE_0__.geoPath().projection(projection);

  return geoGenerator(data)
}

const citiesProjection=(data)=>{
  const projectionTest = d3__WEBPACK_IMPORTED_MODULE_0__.geoEquirectangular()
    .scale(5760)
    .translate([-8650, 2860]);
    return projectionTest(data)
}

const angleScale=(data)=>{
  const angleScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
  .domain([0, 4])
  .range([0, Math.PI * 2]);
  return angleScale(data)
}

/***/ })

};
;
//# sourceMappingURL=D3-Draw.js.map