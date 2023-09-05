/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lexend&family=Pacifico&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --prime-one: #f8bd7f;
  --prime-two: #024776;
  --accent-one: #f5f1da;
  --accent-two: #ffffff;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Lexend", sans-serif;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 0.2fr 10fr 0.1fr;
}

/* Nav */
nav {
  background-color: var(--prime-one);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;
  box-sizing: border-box;
}

nav form {
  display: flex;
  transition: all ease-in-out 300ms;
  position: absolute;
  right: 0;
  top: 6rem;
  border-radius: 1rem;
  margin-right: 1rem;
  padding: 1rem;
  background-color: var(--prime-one);
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

/* nav form */

nav form[open] {
  opacity: 1;
}

.hiddenform {
  display: none;
}

nav form[close] {
  opacity: 0 !important;
  margin: 0;
  border: 0;
}

nav form input:not(nav form input[type="submit"]) {
  padding: 1rem;
  font-size: 1rem;
  margin: 0.5rem 0;
  border-radius: 1rem;
  border: 3px solid var(--prime-two);
  color: var(--prime-two);
  background-color: var(--prime-one);
}

nav form input:not(nav form input[type="submit"])::placeholder {
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
}

nav form input[type="submit"] {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
}

nav h1 {
  font-size: xx-large;
  letter-spacing: 4px;
  font-weight: bolder;
  color: var(--prime-two);
  font-family: "Pacifico", cursive;
}

nav button,
nav form input[type="submit"],
main .card button {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-items: center;
  align-items: center;
  padding: 0.5rem;
  background-color: transparent;
  border-radius: 0.5rem;
  outline: none;
  border: 0;
  font-size: large;
  color: var(--accent-one);
  transition: all ease-in-out 400ms;
  border: 3px solid var(--prime-two);
  color: var(--prime-two);
}

nav button svg circle,
nav button svg line {
  transition: stroke 400ms ease-in-out;
  stroke: var(--prime-two);
}

nav button:hover,
nav form input[type="submit"]:hover,
main .card button:hover {
  background-color: var(--prime-two);
  color: #fff;
}

nav button:hover svg circle,
nav button:hover svg line {
  stroke: #fff;
}

nav button svg {
  margin-left: 1rem;
}

/* Header */
header {
  width: 100%;
  text-align: center;
  margin: 2rem 0 1rem 0;
  font-weight: bold;
  font-size: 2rem;
}

/* main */

main {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 10px;
}

main .card {
  background-color: var(--prime-one);
  color: #fff;

  padding: 1rem;
  border-radius: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  font-size: large;
}

main .card h1 {
  font-weight: bolder;
  font-size: x-large;
}
/* button implement with nav button to not reuse code */

main .card h1,
main .card h2,
main .card p {
  margin-bottom: 1rem;
}

main .card h2 {
  font-weight: bold;
}

/* footer */
footer {
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  background-color: var(--prime-one);
  padding: 1rem;
  color: var(--prime-two);
  font-family: "Pacifico", cursive;
  font-size: large;
  font-weight: bold;
  letter-spacing: 0.2rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iCAAiC;EACjC,aAAa;EACb,aAAa;EACb,0BAA0B;EAC1B,0CAA0C;AAC5C;;AAEA,QAAQ;AACR;EACE,kCAAkC;EAClC,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,kCAAkC;EAClC,sBAAsB;EACtB,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;AACZ;;AAEA,aAAa;;AAEb;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,SAAS;EACT,SAAS;AACX;;AAEA;EACE,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,kCAAkC;EAClC,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA;;;EAGE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;EACf,6BAA6B;EAC7B,qBAAqB;EACrB,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,wBAAwB;EACxB,iCAAiC;EACjC,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;;EAEE,oCAAoC;EACpC,wBAAwB;AAC1B;;AAEA;;;EAGE,kCAAkC;EAClC,WAAW;AACb;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA,WAAW;AACX;EACE,WAAW;EACX,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;AACjB;;AAEA,SAAS;;AAET;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,qCAAqC;EACrC,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kCAAkC;EAClC,WAAW;;EAEX,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;AACA,uDAAuD;;AAEvD;;;EAGE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA,WAAW;AACX;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,kCAAkC;EAClC,aAAa;EACb,uBAAuB;EACvB,gCAAgC;EAChC,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;AACxB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lexend&family=Pacifico&display=swap\");\n\n:root {\n  --prime-one: #f8bd7f;\n  --prime-two: #024776;\n  --accent-one: #f5f1da;\n  --accent-two: #ffffff;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Lexend\", sans-serif;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.5fr 0.2fr 10fr 0.1fr;\n}\n\n/* Nav */\nnav {\n  background-color: var(--prime-one);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.2rem;\n  box-sizing: border-box;\n}\n\nnav form {\n  display: flex;\n  transition: all ease-in-out 300ms;\n  position: absolute;\n  right: 0;\n  top: 6rem;\n  border-radius: 1rem;\n  margin-right: 1rem;\n  padding: 1rem;\n  background-color: var(--prime-one);\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n}\n\n/* nav form */\n\nnav form[open] {\n  opacity: 1;\n}\n\n.hiddenform {\n  display: none;\n}\n\nnav form[close] {\n  opacity: 0 !important;\n  margin: 0;\n  border: 0;\n}\n\nnav form input:not(nav form input[type=\"submit\"]) {\n  padding: 1rem;\n  font-size: 1rem;\n  margin: 0.5rem 0;\n  border-radius: 1rem;\n  border: 3px solid var(--prime-two);\n  color: var(--prime-two);\n  background-color: var(--prime-one);\n}\n\nnav form input:not(nav form input[type=\"submit\"])::placeholder {\n  color: #fff;\n  font-weight: bold;\n  text-transform: capitalize;\n}\n\nnav form input[type=\"submit\"] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-content: center;\n}\n\nnav h1 {\n  font-size: xx-large;\n  letter-spacing: 4px;\n  font-weight: bolder;\n  color: var(--prime-two);\n  font-family: \"Pacifico\", cursive;\n}\n\nnav button,\nnav form input[type=\"submit\"],\nmain .card button {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-items: center;\n  align-items: center;\n  padding: 0.5rem;\n  background-color: transparent;\n  border-radius: 0.5rem;\n  outline: none;\n  border: 0;\n  font-size: large;\n  color: var(--accent-one);\n  transition: all ease-in-out 400ms;\n  border: 3px solid var(--prime-two);\n  color: var(--prime-two);\n}\n\nnav button svg circle,\nnav button svg line {\n  transition: stroke 400ms ease-in-out;\n  stroke: var(--prime-two);\n}\n\nnav button:hover,\nnav form input[type=\"submit\"]:hover,\nmain .card button:hover {\n  background-color: var(--prime-two);\n  color: #fff;\n}\n\nnav button:hover svg circle,\nnav button:hover svg line {\n  stroke: #fff;\n}\n\nnav button svg {\n  margin-left: 1rem;\n}\n\n/* Header */\nheader {\n  width: 100%;\n  text-align: center;\n  margin: 2rem 0 1rem 0;\n  font-weight: bold;\n  font-size: 2rem;\n}\n\n/* main */\n\nmain {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 10px;\n}\n\nmain .card {\n  background-color: var(--prime-one);\n  color: #fff;\n\n  padding: 1rem;\n  border-radius: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  font-size: large;\n}\n\nmain .card h1 {\n  font-weight: bolder;\n  font-size: x-large;\n}\n/* button implement with nav button to not reuse code */\n\nmain .card h1,\nmain .card h2,\nmain .card p {\n  margin-bottom: 1rem;\n}\n\nmain .card h2 {\n  font-weight: bold;\n}\n\n/* footer */\nfooter {\n  text-align: center;\n  font-weight: bold;\n  font-size: 1rem;\n  background-color: var(--prime-one);\n  padding: 1rem;\n  color: var(--prime-two);\n  font-family: \"Pacifico\", cursive;\n  font-size: large;\n  font-weight: bold;\n  letter-spacing: 0.2rem;\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


//global variable
let library = [];
let hiddenForm = true; //to tell if the form is hidden or not

//getters
/**
 * @type {HTMLInputElement}
 */
let titleForm = document.querySelector("nav form input#title");
let authorForm = document.querySelector("nav form input#author");
let pagesForm = document.querySelector("nav form input#pages");
/**
 * @type {HTMLInputElement}
 */
let readForm = document.querySelector("nav form input#read");
let submitForm = document.querySelector('nav form input[type="submit"]');
let hideOrShowForm = document.querySelector("nav button#hideshow");
/**
 * @type {HTMLFormElement}
 */
let bookForm = document.querySelector("nav form");
let bookShelf = document.querySelector("main");

//listeners
submitForm.addEventListener("click", (event) => {
  event.preventDefault();

  if (checkInputFieldsIfNull()) {
    let newBook = new Book(
      titleForm.value,
      authorForm.value,
      pagesForm.value,
      readForm.checked
    );
    library.push(newBook);
    refreshShelf();
    console.log(library);
  } else {
    alert("Cant leave form empty.");
  }
});

// When the element is visible, first animate the opacity, the n, when that’s finished, make it display: none.
// When the element is invisible, first make it display: block, then (while it’s still visually hidden, but existing on the page), animate the opacity.

hideOrShowForm.addEventListener("click", () => {
  if (hiddenForm) {
    bookForm.classList.remove("hiddenform");
    bookForm.setAttribute("open", "");

    setTimeout(() => {
      bookForm.removeAttribute("close");
    }, 20);
  } else {
    bookForm.removeAttribute("open");
    bookForm.setAttribute("close", "");
    bookForm.addEventListener(
      "transitionend",
      () => {
        bookForm.classList.add("hiddenform");
      },
      { once: true }
    );
  }
  hiddenForm = !hiddenForm;
});

//functions
const checkInputFieldsIfNull = () => {
  if (
    titleForm.value == "" ||
    authorForm.value == "" ||
    pagesForm == "" ||
    readForm == ""
  )
    return false;

  return true;
};

const refreshShelf = () => {
  //for every object there should be a card
  //destroy existing shelf
  while (bookShelf.firstChild) {
    bookShelf.removeChild(bookShelf.firstChild);
  }

  library.forEach(
    /**
     *
     * @param {Book} value
     */
    (value, index) => {
      //create elements for card
      let card = document.createElement("div");
      let cardTitle = document.createElement("h1");
      let cardAuthor = document.createElement("h2");
      let cardPages = document.createElement("p");
      let cardRead = document.createElement("p");
      let removeCard = document.createElement("button");
      //add functionality and attributes
      card.setAttribute("class", "card");
      cardTitle.textContent = value.title;
      cardAuthor.textContent = value.author;
      cardPages.textContent = value.pages;
      removeCard.textContent = "Remove";
      removeCard.addEventListener("click", () => {
        let buttonIndex = index;
        let thisButton = card;
        library.splice(buttonIndex, 1);
        bookShelf.removeChild(thisButton);
      });
      if (value.read) {
        cardRead.textContent = "Have Been Read";
      } else if (!value.read) {
        cardRead.textContent = "Haven't Been Read";
      } else {
        console.log("Error With toggle");
      }
      //append to card
      card.appendChild(cardTitle);
      card.appendChild(cardAuthor);
      card.appendChild(cardPages);
      card.appendChild(cardRead);
      card.appendChild(removeCard);
      //append card to shelf
      bookShelf.appendChild(card);
    }
  );
};

//constructor for books
/**
 *
 * @param {String} title
 * @param {String} author
 * @param {Number} pages
 * @param {Boolean} read
 */
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

})();

/******/ })()
;
//# sourceMappingURL=bundlera0887a9dd689341a286d.js.map