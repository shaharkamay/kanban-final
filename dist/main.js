/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/background-image.jpg */ "./images/background-image.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n:root {\n  /* Dark Theme */\n  --dark-background-color: #111111;\n  --dark-background-color-alt: #222222;\n  --dark-trim-color: #333333;\n  --dark-text-color: #eeeeee;\n  --dark-button-color: #004781;\n  --dark-icon: '🌛︎';\n  --box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);\n  --border: 1px solid rgba(0, 0, 0, 0.2); }\n\nbody {\n  /* Light Theme */\n  --background-color: #ffffff;\n  --background-color-alt: #eeeeee;\n  --trim-color: #dddddd;\n  --text-color: #333333;\n  --button-color: #008cff;\n  --body-background: linear-gradient(\r\n      0deg,\r\n      rgba(0, 140, 255, 0.3),\r\n      rgba(0, 71, 129, 0.3)\r\n    ),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat fixed center;\n  --primary-color: #006fcc;\n  --primary-color-alt: #333333;\n  --font-family: 'Quicksand', sans-serif;\n  --icon: '☀';\n  color: var(--text-color);\n  font-family: var(--font-family);\n  background: var(--body-background);\n  position: relative;\n  min-height: 99vh;\n  background-size: cover; }\n\nbody.theme-dark {\n  --background-color: var(--dark-background-color);\n  --background-color-alt: var(--dark-background-color-alt);\n  --trim-color: var(--dark-trim-color);\n  --text-color: var(--dark-text-color);\n  --button-color: var(--dark-button-color);\n  --icon: var(--dark-icon);\n  --body-background: var(--dark-background-color); }\n\n@media (prefers-color-scheme: dark) {\n  body.theme-auto {\n    --background-color: var(--dark-background-color);\n    --background-color-alt: var(--dark-background-color-alt);\n    --trim-color: var(--dark-trim-color);\n    --text-color: var(--dark-text-color);\n    --button-color: var(--dark-button-color);\n    --icon: var(--dark-icon);\n    --body-background: var(--dark-background-color); } }\n\nbody,\nh1,\nh2 {\n  margin: 0;\n  padding: 0; }\n\ninput {\n  border: var(--border);\n  padding: 0.5em;\n  color: var(--text-color);\n  background-color: var(--background-color); }\n\nbutton {\n  cursor: pointer;\n  border: 1px solid var(--button-color);\n  background: var(--button-color);\n  padding: 0.5em;\n  border-radius: 0.2em;\n  font-weight: bolder;\n  color: white;\n  transition: all 0.2s; }\n\nbutton:hover {\n  background: none;\n  color: var(--button-color);\n  transition: all 0.2s; }\n\nheader {\n  position: sticky;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  background-color: var(--primary-color);\n  color: white;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); }\n\nheader > div {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  width: 90%;\n  padding: 10px; }\n\nh1 {\n  font-size: 1.5rem;\n  margin: auto 0; }\n\nheader > div > div {\n  margin: auto 0; }\n\nheader > div > div:first-child {\n  width: 25%; }\n\n.select {\n  width: 25%;\n  text-align: right;\n  padding: 5px 0;\n  border-radius: 10px; }\n\n.select__input {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  padding: 7px 14px;\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  color: white;\n  font-weight: 500;\n  font-family: var(--font-family); }\n\n.select__input option {\n  color: #000000; }\n\n.select label::after {\n  content: var(--icon); }\n\nmain {\n  width: 100%; }\n\n.api-interaction > div {\n  display: flex;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1em 1em 0;\n  justify-content: space-between;\n  align-items: center; }\n\n.api-interaction > div p {\n  text-align: center;\n  border: var(--border);\n  background-color: var(--background-color-alt);\n  color: var(--text-color);\n  font-weight: 600;\n  padding: 0.2em 1em;\n  margin: 0;\n  cursor: default; }\n\n.api-interaction > div p::first-letter {\n  font-size: 2em; }\n\n.api-interaction img {\n  padding: 1em;\n  height: 5em;\n  position: absolute; }\n\n.lists-section {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1em;\n  margin: 0 auto;\n  padding: 1em;\n  max-width: 1200px; }\n\n.lists-section > section {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 12em;\n  box-shadow: var(--box-shadow);\n  padding: 1em;\n  background-color: var(--background-color-alt); }\n\n.lists-section ul {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center; }\n\n.lists-section h2 {\n  font-size: 1rem; }\n\n.add-task {\n  display: flex;\n  justify-content: space-between;\n  margin-top: auto;\n  gap: 1em; }\n\n.add-task input {\n  width: 70%; }\n\n.add-task button {\n  width: 30%; }\n\n.task {\n  border: var(--border);\n  background: var(--primary-color);\n  color: #eee;\n  padding: 0.5em;\n  margin: 0;\n  cursor: move;\n  transition: opacity 0.2s;\n  width: 85%; }\n\n.task.dragging {\n  opacity: 0.5;\n  transition: opacity 0.2s; }\n\nfooter {\n  display: flex;\n  margin: auto;\n  background: var(--background-color-alt);\n  color: var(--black);\n  padding: 1em 0;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\n  position: fixed;\n  width: 100%;\n  bottom: 0;\n  left: 0; }\n\nfooter .copyright {\n  margin: 0 auto;\n  font-size: 18px; }\n\n.red-bg-color {\n  background: red !important;\n  color: white !important;\n  transition: all 0.3s; }\n\n.info-icon {\n  font-size: 1.2em;\n  padding: 0.2em;\n  cursor: pointer;\n  transition: all 0.2s; }\n\n.info-icon:hover {\n  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);\n  transition: all 0.3s; }\n\n.info-div {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border: var(--border);\n  background: var(--trim-color);\n  z-index: 1;\n  padding: 1em; }\n\n.info-div ul {\n  margin: 0;\n  padding-left: 1em; }\n\n.info-div ul li {\n  font-size: 0.7em; }\n\n.info-div ul li::before {\n  font-weight: bold;\n  content: attr(data-highlightword); }\n\n.display-none {\n  display: none; }\n\n.text-cursor {\n  cursor: text; }\n\n.dragover-border-bottom {\n  border-bottom: 1px solid black; }\n\n.dragover-border-top {\n  border-top: 1px solid black; }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  /* Dark Theme */\r\n  --dark-background-color: #111111;\r\n  --dark-background-color-alt: #222222;\r\n  --dark-trim-color: #333333;\r\n  --dark-text-color: #eeeeee;\r\n  --dark-button-color: #004781;\r\n  --dark-icon: '🌛︎';\r\n  --box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);\r\n  --border: 1px solid rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nbody {\r\n  /* Light Theme */\r\n  --background-color: #ffffff;\r\n  --background-color-alt: #eeeeee;\r\n  --trim-color: #dddddd;\r\n  --text-color: #333333;\r\n  --button-color: #008cff;\r\n  --body-background: linear-gradient(\r\n      0deg,\r\n      rgba(0, 140, 255, 0.3),\r\n      rgba(0, 71, 129, 0.3)\r\n    ),\r\n    url('../images/background-image.jpg') no-repeat fixed center;\r\n\r\n  --primary-color: #006fcc;\r\n  --primary-color-alt: #333333;\r\n  --font-family: 'Quicksand', sans-serif;\r\n  --icon: '☀';\r\n\r\n  color: var(--text-color);\r\n  font-family: var(--font-family);\r\n  background: var(--body-background);\r\n\r\n  position: relative;\r\n  min-height: 99vh;\r\n  background-size: cover;\r\n}\r\nbody.theme-dark {\r\n  --background-color: var(--dark-background-color);\r\n  --background-color-alt: var(--dark-background-color-alt);\r\n  --trim-color: var(--dark-trim-color);\r\n  --text-color: var(--dark-text-color);\r\n  --button-color: var(--dark-button-color);\r\n  --icon: var(--dark-icon);\r\n  --body-background: var(--dark-background-color);\r\n}\r\n\r\n@media (prefers-color-scheme: dark) {\r\n  body.theme-auto {\r\n    --background-color: var(--dark-background-color);\r\n    --background-color-alt: var(--dark-background-color-alt);\r\n    --trim-color: var(--dark-trim-color);\r\n    --text-color: var(--dark-text-color);\r\n    --button-color: var(--dark-button-color);\r\n    --icon: var(--dark-icon);\r\n    --body-background: var(--dark-background-color);\r\n  }\r\n}\r\n\r\nbody,\r\nh1,\r\nh2 {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\ninput {\r\n  border: var(--border);\r\n  padding: 0.5em;\r\n  color: var(--text-color);\r\n  background-color: var(--background-color);\r\n}\r\nbutton {\r\n  cursor: pointer;\r\n  border: 1px solid var(--button-color);\r\n  background: var(--button-color);\r\n  padding: 0.5em;\r\n  border-radius: 0.2em;\r\n  font-weight: bolder;\r\n  color: white;\r\n  transition: all 0.2s;\r\n}\r\nbutton:hover {\r\n  background: none;\r\n  color: var(--button-color);\r\n  transition: all 0.2s;\r\n}\r\nheader {\r\n  position: sticky;\r\n  top: 0;\r\n  width: 100%;\r\n  z-index: 1;\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\nheader > div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n  margin: 0 auto;\r\n  width: 90%;\r\n  padding: 10px;\r\n}\r\nh1 {\r\n  font-size: 1.5rem;\r\n  margin: auto 0;\r\n}\r\nheader > div > div {\r\n  margin: auto 0;\r\n}\r\nheader > div > div:first-child {\r\n  width: 25%;\r\n}\r\n.select {\r\n  width: 25%;\r\n  text-align: right;\r\n  padding: 5px 0;\r\n  border-radius: 10px;\r\n}\r\n.select__input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  padding: 7px 14px;\r\n  background: none;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  color: white;\r\n  font-weight: 500;\r\n  font-family: var(--font-family);\r\n}\r\n.select__input option {\r\n  color: #000000;\r\n}\r\n.select label::after {\r\n  content: var(--icon);\r\n}\r\n\r\nmain {\r\n  width: 100%;\r\n}\r\n.api-interaction > div {\r\n  display: flex;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 1em 1em 0;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.api-interaction > div p {\r\n  text-align: center;\r\n  border: var(--border);\r\n  background-color: var(--background-color-alt);\r\n  color: var(--text-color);\r\n  font-weight: 600;\r\n  padding: 0.2em 1em;\r\n  margin: 0;\r\n  cursor: default;\r\n}\r\n.api-interaction > div p::first-letter {\r\n  font-size: 2em;\r\n}\r\n.api-interaction img {\r\n  padding: 1em;\r\n  height: 5em;\r\n  position: absolute;\r\n}\r\n.lists-section {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 1em;\r\n  margin: 0 auto;\r\n  padding: 1em;\r\n  max-width: 1200px;\r\n}\r\n.lists-section > section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex: 1 1 12em;\r\n  box-shadow: var(--box-shadow);\r\n  padding: 1em;\r\n  background-color: var(--background-color-alt);\r\n}\r\n.lists-section ul {\r\n  list-style: none;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n.lists-section h2 {\r\n  font-size: 1rem;\r\n}\r\n.add-task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: auto;\r\n  gap: 1em;\r\n}\r\n.add-task input {\r\n  width: 70%;\r\n}\r\n.add-task button {\r\n  width: 30%;\r\n}\r\n\r\n.task {\r\n  border: var(--border);\r\n  background: var(--primary-color);\r\n  color: #eee;\r\n  padding: 0.5em;\r\n  margin: 0;\r\n  cursor: move;\r\n  transition: opacity 0.2s;\r\n  width: 85%;\r\n}\r\n.task.dragging {\r\n  opacity: 0.5;\r\n  transition: opacity 0.2s;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  margin: auto;\r\n  background: var(--background-color-alt);\r\n  color: var(--black);\r\n  padding: 1em 0;\r\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\r\n  position: fixed;\r\n  width: 100%;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\nfooter .copyright {\r\n  margin: 0 auto;\r\n  font-size: 18px;\r\n}\r\n\r\n.red-bg-color {\r\n  background: red !important;\r\n  color: white !important;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.info-icon {\r\n  font-size: 1.2em;\r\n  padding: 0.2em;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n.info-icon:hover {\r\n  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);\r\n  transition: all 0.3s;\r\n}\r\n\r\n.info-div {\r\n  position: absolute;\r\n  transform: translate(-50%, -50%);\r\n  border: var(--border);\r\n  background: var(--trim-color);\r\n  z-index: 1;\r\n  padding: 1em;\r\n}\r\n.info-div ul {\r\n  margin: 0;\r\n  padding-left: 1em;\r\n}\r\n.info-div ul li {\r\n  font-size: 0.7em;\r\n}\r\n.info-div ul li::before {\r\n  font-weight: bold;\r\n  content: attr(data-highlightword);\r\n}\r\n\r\n.display-none {\r\n  display: none;\r\n}\r\n\r\n.text-cursor {\r\n  cursor: text;\r\n}\r\n\r\n.dragover-border-bottom {\r\n  border-bottom: 1px solid black;\r\n}\r\n.dragover-border-top {\r\n  border-top: 1px solid black;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
  } // For old IE

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

/***/ }),

/***/ "./images/background-image.jpg":
/*!*************************************!*\
  !*** ./images/background-image.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "background-image.jpg";

/***/ }),

/***/ "./images/icon.png":
/*!*************************!*\
  !*** ./images/icon.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "icon.png";

/***/ }),

/***/ "./images/loading.gif":
/*!****************************!*\
  !*** ./images/loading.gif ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "loading.gif";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _images_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/icon.png */ "./images/icon.png");
/* harmony import */ var _images_loading_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/loading.gif */ "./images/loading.gif");


('use strict')

/*
Page structure
*/
;(() => {
  setLocalStorage()

  //light/dark theme
  indicateTheme()

  //event listener to add-task inputs to sense 'Enter' press
  const inputTasksElements = document.querySelectorAll('.add-task__input')
  for (const input of inputTasksElements)
    input.addEventListener('keyup', clickAddTaskEventHandler)

  //event listeners to the section of all lists together
  const listsSection = document.getElementById('lists')
  addEventsToElement(listsSection, {
    click: clickAddTaskEventHandler,
    dblclick: editTaskEventHandler,
    keydown: editTaskEventHandler,
  })

  //event listeners to the section the api section
  const apiSection = document.getElementById('api-interaction-section')
  apiSection.addEventListener('click', clickEventHandlerApi)

  //event listener to search input
  addEventsToElement(document.getElementById('search'), {
    keyup: searchEventHandler,
  })

  //add event listener for each task-list to enable drag option
  const listSections = listsSection.querySelectorAll('.list-section')
  listSections.forEach((listSection) => {
    listSection.addEventListener('dragover', (e) => e.preventDefault())
  })

  //add event listener to the 'trash' element
  const deleteDrag = document.getElementById('delete-drag')
  deleteDrag.addEventListener('dragover', (e) => e.preventDefault())

  //add event listener to reminder inputs
  const reminderInputs = document.querySelectorAll(
    "[placeholder='Add reminder']"
  )
  for (const input of reminderInputs) {
    input.addEventListener('focus', (e) => {
      e.target.type = 'datetime-local'
      e.target.min = new Date().toISOString().split('.')[0]
    })
    input.addEventListener('blur', (e) => {
      if (!e.target.value) e.target.type = 'text'
    })
  }

  generateLists()
})()

/*
DOM functions
*/

//light/dark theme
function indicateTheme() {
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'auto'
    applyTheme(savedTheme)
    for (const optionElement of document.querySelectorAll('#selTheme option')) {
      optionElement.selected = savedTheme === optionElement.value
    }
    document.getElementById('selTheme').addEventListener('change', function () {
      localStorage.setItem('theme', this.value)
      applyTheme(this.value)
    })
  })
}

//Light/Dark theme mode
function applyTheme(theme) {
  document.body.classList.remove('theme-auto', 'theme-light', 'theme-dark')
  document.body.classList.add(`theme-${theme}`)
}

//Displays the tasks lists to DOM
function generateLists() {
  const listsSection = document.getElementById('lists')
  const ulLists = listsSection.querySelectorAll('ul')

  for (const list of ulLists) {
    while (list.firstChild) list.removeChild(list.firstChild)
    const tasksList = getTasksList(
      list.closest('.list-section').dataset.listType
    )
    for (const task of tasksList) {
      const li = createTaskElement(task)
      const span = createInfoElement()
      list.append(li, span)
    }
  }
}

function createTaskElement(task = {}) {
  const li = createElement(
    'li',
    [task.task],
    ['task'],
    {
      'data-task': task.task,
      'data-date': task.date,
      'data-reminder': task.reminder,
      draggable: 'true',
    },
    {
      blur: blurEventHandler,
      mouseover: mouseoverTaskEventHandler,
      dragstart: dragstartTaskEventHandler,
      dragend: dragendTaskEventHandler,
      dragover: dragoverTaskEventHandler,
      dragleave: dragleaveTaskEventHandler,
    }
  )
  return li
}

function createInfoElement() {
  const span = createElement(
    'span',
    ['🛈'],
    ['info-icon'],
    {},
    {
      mouseover: mouseoverInfoEventHandler,
      mouseout: mouseoutInfoEventHandler,
    }
  )
  return span
}

//Takes an object that has keys=types and its values=functions and sets the event listener in the element
function addEventsToElement(elem, eventListenerObj) {
  for (const type in eventListenerObj) {
    elem.addEventListener(type, eventListenerObj[type])
  }
}

function filterLists(query) {
  const allLiTasks = document.querySelectorAll('.task')

  for (const liTask of allLiTasks) {
    const task = liTask.textContent.toLowerCase()
    const infoSpan = liTask.nextElementSibling
    if (searchByQuery(task, query)) elementsDisplay([liTask, infoSpan])
    else elementsDisplay([liTask, infoSpan], 'none')
  }
}

function searchByQuery(str, query) {
  return str.search(new RegExp(query.replace(/\s+/, '|'))) !== -1
}

function elementsDisplay(elements, display = '') {
  for (const elem of elements) {
    elem.style.display = display
  }
}

/**
 * Creates a new DOM element.
 *
 * Example usage:
 * createElement("div", ["just text", createElement(...)], ["nana", "banana"], {id: "bla"})
 *
 * @param {String} tagName - the type of the element
 * @param {Array} children - the child elements for the new element.
 *                           Each child can be a DOM element, or a string (if you just want a text element).
 * @param {Array} classes - the class list of the new element
 * @param {Object} attributes - the attributes for the new element
 */

function createElement(
  tagName,
  children = [],
  classes = [],
  attributes = {},
  eventListeners = {}
) {
  const element = document.createElement(tagName)
  for (const child of children) element.append(child)

  element.classList = classes.join(' ')
  for (const attr in attributes) element.setAttribute(attr, attributes[attr])

  for (const event in eventListeners)
    element.addEventListener(event, eventListeners[event])

  return element
}

function getDragIndexTaskDOM(y, listBounds, taskHeight = 36) {
  const height = listBounds.height
  const taskPosition = height - (y - listBounds.top)
  const index = Math.round((height - taskPosition) / taskHeight)
  return index
}

/*
Event handlers
*/

//Handles the add task event
function clickAddTaskEventHandler(e) {
  if (
    !e.target.classList.contains('add-task__input') &&
    !e.target.classList.contains('add-task__button')
  )
    return
  if (e.target.classList.contains('add-task__input')) {
    if (e.key !== 'Enter') return
  }
  const listSection = e.target.closest('.list-section')
  const [taskInput, reminderInput] = [
    listSection.querySelector('.add-task__input'),
    listSection.querySelector('.add-task__reminder'),
  ]
  const listType = listSection.dataset.listType

  if (isVarFalsyAlert(taskInput.value, () => window.alert('Invalid Input!')))
    return

  const task = taskConstructor(
    taskInput.value,
    reminderInput.value ? new Date(reminderInput.value).toLocaleString() : null
  )

  if (task.reminder)
    setReminderTimeout(task.date, task.reminder, () =>
      alert(`Reminder from "${listType}" list:\n"${task.task}"`)
    )

  addTask(task, listType)
  ;[taskInput.value, reminderInput.value, reminderInput.type] = ['', '', 'text']

  generateLists()
}

function setReminderTimeout(date, reminder, func) {
  const reminderInMilliseconds =
    new Date(reminder).getTime() - new Date(date).getTime()
  setTimeout(func, reminderInMilliseconds)
}

//Handles the dragstart of a task element
function dragstartTaskEventHandler(e) {
  e.target.classList.add('dragging')
  document.getElementById('delete-drag').classList.add('red-bg-color')
}

//Handles the dragend of a task element
function dragendTaskEventHandler(e) {
  e.target.classList.remove('dragging')
  document.getElementById('delete-drag').classList.remove('red-bg-color')
  dragendEventHandler(e)
}

//Handles the task edit
function editTaskEventHandler(e) {
  if (!e.target.classList.contains('task')) return

  const liTask = e.target
  toggleEditTaskProperties(liTask, e)

  if (e.key === 'Enter') liTask.blur() // it executes the blurEventHandler which updates the task
}

function toggleEditTaskProperties(liTask, e = { type: null }) {
  liTask.contentEditable = liTask.contentEditable ? true : null //true
  liTask.draggable = liTask.draggable ? false : true //false
  liTask.classList.toggle('text-cursor')
  if (e.type === 'dblclick') liTask.focus()
}

//Handles the blur event so if the task element loses focus, the change will be saved.
function blurEventHandler(e) {
  if (e.target.classList.contains('task')) {
    const liTask = e.target
    toggleEditTaskProperties(liTask, e)
    updateEditedTask(liTask)
    generateLists()
  }
}

function updateEditedTask(liTask) {
  const listType = liTask.closest('.list-section').dataset.listType
  const newTask = taskConstructor(liTask.textContent, liTask.dataset.reminder)
  const oldTask = taskConstructor(
    liTask.dataset.task,
    liTask.dataset.date,
    liTask.dataset.reminder
  )
  updateTask(newTask, oldTask, listType)
}

//Handles the task movements between lists
function mouseoverTaskEventHandler(e) {
  document.addEventListener('keydown', numberKeyDownEventHandler)
  e.target.addEventListener('mouseout', mouseoutTaskEventHandler)
}

function mouseoutTaskEventHandler(e) {
  document.removeEventListener('keydown', numberKeyDownEventHandler)
  e.target.removeEventListener('mouseout', mouseoutTaskEventHandler)
}

function numberKeyDownEventHandler(e) {
  const listsObj = { 1: 'todo', 2: 'in-progress', 3: 'done' }
  if (!(e.key in listsObj) || !e.altKey) return

  const mouseOverElements = document.querySelectorAll(':hover')
  const liMouseOn =
    mouseOverElements[mouseOverElements.length - 1].closest('.task')

  const task = taskConstructor(
    liMouseOn.textContent,
    liMouseOn.dataset.reminder,
    liMouseOn.dataset.date
  )

  const previousListType = liMouseOn.closest('.list-section').dataset.listType

  const newListType = listsObj[e.key]

  moveTask(task, previousListType, newListType)
}

//Handles the keyup event so when the user types a letter, the interface will change accordingly.
function searchEventHandler(e) {
  if (document.activeElement.id !== 'search') return
  const searchInput = document.activeElement

  let query = searchInput.value

  filterLists(query.toLowerCase())
}

//Handles the save and load buttons click and save data to the API or load data from the API
async function clickEventHandlerApi(e) {
  toggleLoader()
  if (e.target.id === 'save-btn') {
    //Save to api
    const tasksObjects = JSON.parse(localStorage.getItem('tasksObjects'))
    await saveTasksToApi(tasksObjects)
  } else if (e.target.id === 'load-btn') {
    //Load from api
    await loadTasksFromApi()
    generateLists()
  }
  toggleLoader()
}

//Handles the dragend event of a task and deletes/moves the task
function dragendEventHandler(e) {
  const hoverElements = document.querySelectorAll(':hover')
  //Delete drag task
  if (hoverElements[hoverElements.length - 1].closest('#delete-drag'))
    return deleteTaskHandler(e)

  const listSection =
    hoverElements[hoverElements.length - 1].closest('.list-section')
  if (
    isVarFalsyAlert(listSection, () =>
      window.alert('You are not allowed to drag there!')
    )
  )
    return

  const ulList = listSection.querySelector('ul')
  const newListType = listSection.dataset.listType
  const previousListType = e.target.closest('.list-section').dataset.listType
  const task = taskConstructor(
    e.target.textContent,
    e.target.dataset.reminder,
    e.target.dataset.date
  )

  const index = indicateTaskDragIndex(ulList, e)

  moveTask(task, previousListType, newListType, index)
}

function deleteTaskHandler(e) {
  const listType = e.target.closest('.list-section').dataset.listType
  const task = taskConstructor(
    e.target.textContent,
    e.target.dataset.reminder,
    e.target.dataset.date
  )
  removeTask(task, listType)
  generateLists()
  return true
}

//Handles the dragover/dragleave event of a task and add a class to indicate what position to insert in
function dragoverTaskEventHandler(e) {
  const ulList = e.target.closest('ul')
  const listBounds = ulList.getBoundingClientRect()
  const y = e.clientY
  const liTasks = ulList.querySelectorAll('li')
  const dragIndex = getDragIndexTaskDOM(y, listBounds, liTasks[0].offsetHeight)
  const taskIndex = getElementIndex(e.target)

  liTasks.forEach((li) => {
    li.classList.remove('dragover-border-bottom', 'dragover-border-top')
  })

  if (dragIndex !== liTasks.length)
    liTasks[dragIndex].classList.add('dragover-border-top')
  else liTasks[taskIndex].classList.add('dragover-border-bottom')
}

function dragleaveTaskEventHandler(e) {
  const liTasks = e.target.closest('ul').querySelectorAll('li')
  liTasks.forEach((li) => {
    li.classList.remove('dragover-border-bottom', 'dragover-border-top')
  })
}

//Handles the mouseover event and displays a div with info of the task
function mouseoverInfoEventHandler(e) {
  const infoDiv = document.querySelector('.info-div')
  infoDiv.classList.remove('display-none')

  const task = getTaskByName(
    e.target.previousElementSibling.dataset.task,
    e.target.closest('.list-section').dataset.listType
  )

  const ulTask = createElement('ul', createInfoList(task))
  infoDiv.append(ulTask)

  const left = e.pageX
  const top = e.pageY
  const divHeight = infoDiv.offsetHeight
  infoDiv.style.left = left - 100 + 'px'
  infoDiv.style.top = top - divHeight / 2 - 20 + 'px'
}

function createInfoList(task) {
  const liTaskText = createElement('li', [task.task], [], {
    'data-highlightword': 'Task: ',
  })
  const liTaskDate = createElement('li', [task.date.split(', ')[0]], [], {
    'data-highlightword': 'Date: ',
  })
  const liTaskTime = createElement('li', [task.date.split(', ')[1]], [], {
    'data-highlightword': 'Time: ',
  })
  const liTaskReminder = createElement('li', [task.reminder], [], {
    'data-highlightword': 'Reminder: ',
  })
  return [liTaskText, liTaskDate, liTaskTime, liTaskReminder]
}
function mouseoutInfoEventHandler(e) {
  const infoDiv = document.querySelector('.info-div')
  infoDiv.classList.add('display-none')
  while (infoDiv.firstChild) infoDiv.removeChild(infoDiv.firstChild)
}

/*
Local Storage functions (task is an object)
*/

function addTask(task, listType) {
  const allTasksObj = JSON.parse(localStorage.getItem('tasks'))
  allTasksObj[listType].unshift(task.task)
  localStorage.setItem('tasks', JSON.stringify(allTasksObj))

  const allObjectsTasks = JSON.parse(localStorage.getItem('tasksObjects'))
  allObjectsTasks[listType].unshift(task)
  localStorage.setItem('tasksObjects', JSON.stringify(allObjectsTasks))
}

function updateTask(newTask, oldTask, listType) {
  const allTasksObj = JSON.parse(localStorage.getItem('tasks'))
  const i = allTasksObj[listType].findIndex((x) => x === oldTask.task)
  allTasksObj[listType][i] = newTask.task
  localStorage.setItem('tasks', JSON.stringify(allTasksObj))

  const allObjectsTasks = JSON.parse(localStorage.getItem('tasksObjects'))
  const j = allObjectsTasks[listType].findIndex((x) => x.task === oldTask.task)
  allObjectsTasks[listType][j] = newTask
  localStorage.setItem('tasksObjects', JSON.stringify(allObjectsTasks))
}

function removeTask(task, listType) {
  const allTasksObj = JSON.parse(localStorage.getItem('tasks'))
  const i = allTasksObj[listType].findIndex((x) => x === task.task)
  allTasksObj[listType].splice(i, 1)
  localStorage.setItem('tasks', JSON.stringify(allTasksObj))

  const allObjectsTasks = JSON.parse(localStorage.getItem('tasksObjects'))
  const j = allObjectsTasks[listType].findIndex((x) => x.task === task.task)
  allObjectsTasks[listType].splice(j, 1)
  localStorage.setItem('tasksObjects', JSON.stringify(allObjectsTasks))
}

function moveTask(task, previousListType, newListType, spliceIndex = null) {
  removeTask(task, previousListType)

  if (!spliceIndex) addTask(task, newListType)
  else spliceTasks(task, spliceIndex, newListType)

  generateLists()
}

function setLocalStorage() {
  const setTasks = {
    todo: [],
    'in-progress': [],
    done: [],
  }
  if (!localStorage.getItem('tasks'))
    localStorage.setItem('tasks', JSON.stringify(setTasks))
  if (!localStorage.getItem('tasksObjects'))
    localStorage.setItem('tasksObjects', JSON.stringify(setTasks))
}

function removeAllTasks() {
  localStorage.removeItem('tasks')
  localStorage.removeItem('tasksObjects')
}

function replaceAllTasks(tasks) {
  removeAllTasks()
  const todo = []
  const inProgress = []
  const done = []

  for (const task of tasks['todo']) todo.push(task.task)
  for (const task of tasks['in-progress']) inProgress.push(task.task)
  for (const task of tasks['done']) done.push(task.task)

  const tasksStrings = {
    todo: todo,
    'in-progress': inProgress,
    done: done,
  }
  localStorage.setItem('tasks', JSON.stringify(tasksStrings))
  localStorage.setItem('tasksObjects', JSON.stringify(tasks))
}

function spliceTasks(task, startIndex, listType, deleteCount = 0) {
  const allTasksObj = JSON.parse(localStorage.getItem('tasks'))
  allTasksObj[listType].splice(startIndex, deleteCount, task.task)
  localStorage.setItem('tasks', JSON.stringify(allTasksObj))

  const allObjectsTasks = JSON.parse(localStorage.getItem('tasksObjects'))
  allObjectsTasks[listType].splice(startIndex, deleteCount, task)
  localStorage.setItem('tasksObjects', JSON.stringify(allObjectsTasks))
}

function getTaskByName(taskName, listType) {
  const allObjectsTasks = JSON.parse(localStorage.getItem('tasksObjects'))
  const i = allObjectsTasks[listType].findIndex((x) => x.task === taskName)
  return allObjectsTasks[listType][i]
}

function getTasksList(listType, item = 'tasksObjects') {
  const allObjectsTasks = JSON.parse(localStorage.getItem(item))
  return allObjectsTasks[listType]
}

/*
API functions
*/
async function apiRequest(method, tasksObjects = null) {
  const response = await fetch(
    'https://json-bins.herokuapp.com/bin/614afa054021ac0e6c080cc3',
    {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: tasksObjects ? JSON.stringify({ tasks: tasksObjects }) : null,
    }
  )
  return response
}

async function saveTasksToApi(tasksObjects) {
  const response = await apiRequest('PUT', tasksObjects)

  if (!response.ok) alert(`error status! ${response.status}`)
}

async function loadTasksFromApi() {
  const response = await apiRequest('GET')

  if (!response.ok) alert(`status error! ${response.status}`)

  const data = await response.json()
  const tasks = data.tasks

  replaceAllTasks(tasks)
}

/*
Helper functions
*/

//loader gif display function
function toggleLoader() {
  const div = document.querySelector('.api-interaction > div')
  if (div.lastElementChild.tagName === 'IMG') {
    document.getElementById('loader-img').remove()
  } else {
    const loaderImg = createElement('img', [], ['loader'], {
      id: 'loader-img',
      src: './loading.gif',
    })
    div.append(loaderImg)
  }
}

function getElementIndex(element) {
  const parent = element.parentElement
  const childrenType = parent.querySelectorAll(element.tagName)
  return Array.prototype.indexOf.call(childrenType, element)
}

function taskConstructor(task, reminder, date = new Date().toLocaleString()) {
  return { task, date, reminder }
}

function indicateTaskDragIndex(ulList, e) {
  const listBounds = ulList.getBoundingClientRect()
  const y = e.clientY
  let index = getDragIndexTaskDOM(y, listBounds, e.target.offsetHeight)

  if (e.target.closest('ul') === ulList) {
    const liIndex = getElementIndex(e.target)
    if (liIndex < index) index--
  }
  return index
}

/*
Validate functions
*/

function isVarFalsyAlert(
  variable,
  alertMessage = () => window.alert('Invalid!')
) {
  if (variable) {
    return false
  }
  alertMessage()
  return true
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG9JQUFpRDtBQUM3Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSw2REFBNkQsU0FBUyx5REFBeUQseUNBQXlDLCtCQUErQiwrQkFBK0IsaUNBQWlDLHVCQUF1QixpREFBaUQsNkNBQTZDLFVBQVUscURBQXFELG9DQUFvQywwQkFBMEIsMEJBQTBCLDRCQUE0QiwrTUFBK00sNkJBQTZCLGlDQUFpQywyQ0FBMkMsZ0JBQWdCLDZCQUE2QixvQ0FBb0MsdUNBQXVDLHVCQUF1QixxQkFBcUIsNkJBQTZCLHFCQUFxQixxREFBcUQsNkRBQTZELHlDQUF5Qyx5Q0FBeUMsNkNBQTZDLDZCQUE2QixzREFBc0QseUNBQXlDLHFCQUFxQix1REFBdUQsK0RBQStELDJDQUEyQywyQ0FBMkMsK0NBQStDLCtCQUErQiwwREFBMEQsb0JBQW9CLGNBQWMsaUJBQWlCLFdBQVcsMEJBQTBCLG1CQUFtQiw2QkFBNkIsZ0RBQWdELFlBQVksb0JBQW9CLDBDQUEwQyxvQ0FBb0MsbUJBQW1CLHlCQUF5Qix3QkFBd0IsaUJBQWlCLDJCQUEyQixrQkFBa0IscUJBQXFCLCtCQUErQiwyQkFBMkIsWUFBWSxxQkFBcUIsV0FBVyxnQkFBZ0IsZUFBZSwyQ0FBMkMsaUJBQWlCLDhDQUE4QyxrQkFBa0Isa0JBQWtCLG1DQUFtQyxvQkFBb0IsbUJBQW1CLGVBQWUsb0JBQW9CLFFBQVEsc0JBQXNCLHFCQUFxQix3QkFBd0IscUJBQXFCLG9DQUFvQyxpQkFBaUIsYUFBYSxlQUFlLHNCQUFzQixtQkFBbUIsMEJBQTBCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHNCQUFzQixxQkFBcUIsaUJBQWlCLGtCQUFrQixvQkFBb0IsaUJBQWlCLHFCQUFxQixzQ0FBc0MsMkJBQTJCLHFCQUFxQiwwQkFBMEIsMkJBQTJCLFVBQVUsa0JBQWtCLDRCQUE0QixrQkFBa0Isc0JBQXNCLG1CQUFtQix1QkFBdUIsbUNBQW1DLDBCQUEwQiw4QkFBOEIsdUJBQXVCLDBCQUEwQixrREFBa0QsNkJBQTZCLHFCQUFxQix1QkFBdUIsY0FBYyxzQkFBc0IsNENBQTRDLHFCQUFxQiwwQkFBMEIsaUJBQWlCLGdCQUFnQix5QkFBeUIsb0JBQW9CLGtCQUFrQixvQkFBb0IsYUFBYSxtQkFBbUIsaUJBQWlCLHdCQUF3Qiw4QkFBOEIsa0JBQWtCLDJCQUEyQixtQkFBbUIsa0NBQWtDLGlCQUFpQixvREFBb0QsdUJBQXVCLHFCQUFxQixlQUFlLGtCQUFrQixvQkFBb0IsNEJBQTRCLDBCQUEwQix1QkFBdUIsc0JBQXNCLGVBQWUsa0JBQWtCLG1DQUFtQyxxQkFBcUIsZUFBZSxxQkFBcUIsaUJBQWlCLHNCQUFzQixpQkFBaUIsV0FBVywwQkFBMEIscUNBQXFDLGdCQUFnQixtQkFBbUIsY0FBYyxpQkFBaUIsNkJBQTZCLGlCQUFpQixvQkFBb0IsaUJBQWlCLCtCQUErQixZQUFZLGtCQUFrQixpQkFBaUIsNENBQTRDLHdCQUF3QixtQkFBbUIsZ0RBQWdELG9CQUFvQixnQkFBZ0IsY0FBYyxjQUFjLHVCQUF1QixtQkFBbUIsc0JBQXNCLG1CQUFtQiwrQkFBK0IsNEJBQTRCLDJCQUEyQixnQkFBZ0IscUJBQXFCLG1CQUFtQixvQkFBb0IsMkJBQTJCLHNCQUFzQixpREFBaUQsMkJBQTJCLGVBQWUsdUJBQXVCLHFDQUFxQywwQkFBMEIsa0NBQWtDLGVBQWUsbUJBQW1CLGtCQUFrQixjQUFjLHdCQUF3QixxQkFBcUIsdUJBQXVCLDZCQUE2QixzQkFBc0Isd0NBQXdDLG1CQUFtQixvQkFBb0Isa0JBQWtCLG1CQUFtQiw2QkFBNkIscUNBQXFDLDBCQUEwQixrQ0FBa0MsU0FBUyx5RkFBeUYsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFdBQVcsaUJBQWlCLEtBQUssV0FBVyxZQUFZLGFBQWEsWUFBWSxXQUFXLFdBQVcsU0FBUyxPQUFPLGFBQWEsYUFBYSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLGtCQUFrQixNQUFNLEtBQUssWUFBWSxhQUFhLFlBQVksV0FBVyxXQUFXLFdBQVcsd0JBQXdCLE9BQU8sVUFBVSxnQkFBZ0IsS0FBSyxZQUFZLFdBQVcsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLGtCQUFrQixNQUFNLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxpQkFBaUIsTUFBTSxnQkFBZ0IsTUFBTSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxnQkFBZ0IsTUFBTSxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxnQkFBZ0IsTUFBTSxnQkFBZ0IsTUFBTSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksbUJBQW1CLE1BQU0sZ0JBQWdCLE1BQU0sVUFBVSxZQUFZLGFBQWEsaUJBQWlCLEtBQUssZ0JBQWdCLEtBQUssZ0JBQWdCLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxpQkFBaUIsS0FBSyxVQUFVLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLGdCQUFnQixL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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTLFlBQVksVUFBVTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELFlBQVk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDRDQUE0QyxxQkFBcUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ZpbmFsLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmluYWwvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9maW5hbC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2ZpbmFsL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmluYWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9maW5hbC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9maW5hbC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JhY2tncm91bmQtaW1hZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG46cm9vdCB7XFxuICAvKiBEYXJrIFRoZW1lICovXFxuICAtLWRhcmstYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXG4gIC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yLWFsdDogIzIyMjIyMjtcXG4gIC0tZGFyay10cmltLWNvbG9yOiAjMzMzMzMzO1xcbiAgLS1kYXJrLXRleHQtY29sb3I6ICNlZWVlZWU7XFxuICAtLWRhcmstYnV0dG9uLWNvbG9yOiAjMDA0NzgxO1xcbiAgLS1kYXJrLWljb246ICfwn4yb77iOJztcXG4gIC0tYm94LXNoYWRvdzogMHB4IDVweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cXG5cXG5ib2R5IHtcXG4gIC8qIExpZ2h0IFRoZW1lICovXFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYWx0OiAjZWVlZWVlO1xcbiAgLS10cmltLWNvbG9yOiAjZGRkZGRkO1xcbiAgLS10ZXh0LWNvbG9yOiAjMzMzMzMzO1xcbiAgLS1idXR0b24tY29sb3I6ICMwMDhjZmY7XFxuICAtLWJvZHktYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIDBkZWcsXFxyXFxuICAgICAgcmdiYSgwLCAxNDAsIDI1NSwgMC4zKSxcXHJcXG4gICAgICByZ2JhKDAsIDcxLCAxMjksIDAuMylcXHJcXG4gICAgKSxcXHJcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgZml4ZWQgY2VudGVyO1xcbiAgLS1wcmltYXJ5LWNvbG9yOiAjMDA2ZmNjO1xcbiAgLS1wcmltYXJ5LWNvbG9yLWFsdDogIzMzMzMzMztcXG4gIC0tZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgLS1pY29uOiAn4piAJztcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWJhY2tncm91bmQpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWluLWhlaWdodDogOTl2aDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG5cXG5ib2R5LnRoZW1lLWRhcmsge1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3IpO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWFsdDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yLWFsdCk7XFxuICAtLXRyaW0tY29sb3I6IHZhcigtLWRhcmstdHJpbS1jb2xvcik7XFxuICAtLXRleHQtY29sb3I6IHZhcigtLWRhcmstdGV4dC1jb2xvcik7XFxuICAtLWJ1dHRvbi1jb2xvcjogdmFyKC0tZGFyay1idXR0b24tY29sb3IpO1xcbiAgLS1pY29uOiB2YXIoLS1kYXJrLWljb24pO1xcbiAgLS1ib2R5LWJhY2tncm91bmQ6IHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvcik7IH1cXG5cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICBib2R5LnRoZW1lLWF1dG8ge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1hbHQ6IHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvci1hbHQpO1xcbiAgICAtLXRyaW0tY29sb3I6IHZhcigtLWRhcmstdHJpbS1jb2xvcik7XFxuICAgIC0tdGV4dC1jb2xvcjogdmFyKC0tZGFyay10ZXh0LWNvbG9yKTtcXG4gICAgLS1idXR0b24tY29sb3I6IHZhcigtLWRhcmstYnV0dG9uLWNvbG9yKTtcXG4gICAgLS1pY29uOiB2YXIoLS1kYXJrLWljb24pO1xcbiAgICAtLWJvZHktYmFja2dyb3VuZDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yKTsgfSB9XFxuXFxuYm9keSxcXG5oMSxcXG5oMiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTsgfVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1idXR0b24tY29sb3IpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7IH1cXG5cXG5oZWFkZXIge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuXFxuaGVhZGVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAxMHB4OyB9XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IGF1dG8gMDsgfVxcblxcbmhlYWRlciA+IGRpdiA+IGRpdiB7XFxuICBtYXJnaW46IGF1dG8gMDsgfVxcblxcbmhlYWRlciA+IGRpdiA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICB3aWR0aDogMjUlOyB9XFxuXFxuLnNlbGVjdCB7XFxuICB3aWR0aDogMjUlO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG5cXG4uc2VsZWN0X19pbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiA3cHggMTRweDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7IH1cXG5cXG4uc2VsZWN0X19pbnB1dCBvcHRpb24ge1xcbiAgY29sb3I6ICMwMDAwMDA7IH1cXG5cXG4uc2VsZWN0IGxhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiB2YXIoLS1pY29uKTsgfVxcblxcbm1haW4ge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uYXBpLWludGVyYWN0aW9uID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMWVtIDFlbSAwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5hcGktaW50ZXJhY3Rpb24gPiBkaXYgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWFsdCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMC4yZW0gMWVtO1xcbiAgbWFyZ2luOiAwO1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLmFwaS1pbnRlcmFjdGlvbiA+IGRpdiBwOjpmaXJzdC1sZXR0ZXIge1xcbiAgZm9udC1zaXplOiAyZW07IH1cXG5cXG4uYXBpLWludGVyYWN0aW9uIGltZyB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBoZWlnaHQ6IDVlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcblxcbi5saXN0cy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDFlbTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7IH1cXG5cXG4ubGlzdHMtc2VjdGlvbiA+IHNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmbGV4OiAxIDEgMTJlbTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1hbHQpOyB9XFxuXFxuLmxpc3RzLXNlY3Rpb24gdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmxpc3RzLXNlY3Rpb24gaDIge1xcbiAgZm9udC1zaXplOiAxcmVtOyB9XFxuXFxuLmFkZC10YXNrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZ2FwOiAxZW07IH1cXG5cXG4uYWRkLXRhc2sgaW5wdXQge1xcbiAgd2lkdGg6IDcwJTsgfVxcblxcbi5hZGQtdGFzayBidXR0b24ge1xcbiAgd2lkdGg6IDMwJTsgfVxcblxcbi50YXNrIHtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xcbiAgY29sb3I6ICNlZWU7XFxuICBwYWRkaW5nOiAwLjVlbTtcXG4gIG1hcmdpbjogMDtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG4gIHdpZHRoOiA4NSU7IH1cXG5cXG4udGFzay5kcmFnZ2luZyB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7IH1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYWx0KTtcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxuICBwYWRkaW5nOiAxZW0gMDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7IH1cXG5cXG5mb290ZXIgLmNvcHlyaWdodCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGZvbnQtc2l6ZTogMThweDsgfVxcblxcbi5yZWQtYmctY29sb3Ige1xcbiAgYmFja2dyb3VuZDogcmVkICFpbXBvcnRhbnQ7XFxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzOyB9XFxuXFxuLmluZm8taWNvbiB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgcGFkZGluZzogMC4yZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yczsgfVxcblxcbi5pbmZvLWljb246aG92ZXIge1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zczsgfVxcblxcbi5pbmZvLWRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRyaW0tY29sb3IpO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmc6IDFlbTsgfVxcblxcbi5pbmZvLWRpdiB1bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDFlbTsgfVxcblxcbi5pbmZvLWRpdiB1bCBsaSB7XFxuICBmb250LXNpemU6IDAuN2VtOyB9XFxuXFxuLmluZm8tZGl2IHVsIGxpOjpiZWZvcmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtaGlnaGxpZ2h0d29yZCk7IH1cXG5cXG4uZGlzcGxheS1ub25lIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4udGV4dC1jdXJzb3Ige1xcbiAgY3Vyc29yOiB0ZXh0OyB9XFxuXFxuLmRyYWdvdmVyLWJvcmRlci1ib3R0b20ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrOyB9XFxuXFxuLmRyYWdvdmVyLWJvcmRlci10b3Age1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGVBQUE7RUFDQSxnQ0FBd0I7RUFDeEIsb0NBQTRCO0VBQzVCLDBCQUFrQjtFQUNsQiwwQkFBa0I7RUFDbEIsNEJBQW9CO0VBQ3BCLGtCQUFXO0VBQ1gsNENBQWE7RUFDYixzQ0FBUyxFQUFBOztBQUdYO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBbUI7RUFDbkIsK0JBQXVCO0VBQ3ZCLHFCQUFhO0VBQ2IscUJBQWE7RUFDYix1QkFBZTtFQUNmOzs7OztrRUFBa0I7RUFPbEIsd0JBQWdCO0VB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RUFBQTs7QUFHMUI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLDJDQUEyQztFQUMzQyxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7RUFDVCxPQUFPLEVBQUE7O0FBRVQ7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBOztBQUdqQjtFQUNFLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CLEVBQUE7O0FBRXRCO0VBQ0UsNENBQTRDO0VBQzVDLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUVkO0VBQ0UsU0FBUztFQUNULGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGlCQUFpQjtFQUNqQixpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSwyQkFBMkIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAvKiBEYXJrIFRoZW1lICovXFxyXFxuICAtLWRhcmstYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcXHJcXG4gIC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yLWFsdDogIzIyMjIyMjtcXHJcXG4gIC0tZGFyay10cmltLWNvbG9yOiAjMzMzMzMzO1xcclxcbiAgLS1kYXJrLXRleHQtY29sb3I6ICNlZWVlZWU7XFxyXFxuICAtLWRhcmstYnV0dG9uLWNvbG9yOiAjMDA0NzgxO1xcclxcbiAgLS1kYXJrLWljb246ICfwn4yb77iOJztcXHJcXG4gIC0tYm94LXNoYWRvdzogMHB4IDVweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgLyogTGlnaHQgVGhlbWUgKi9cXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1hbHQ6ICNlZWVlZWU7XFxyXFxuICAtLXRyaW0tY29sb3I6ICNkZGRkZGQ7XFxyXFxuICAtLXRleHQtY29sb3I6ICMzMzMzMzM7XFxyXFxuICAtLWJ1dHRvbi1jb2xvcjogIzAwOGNmZjtcXHJcXG4gIC0tYm9keS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxyXFxuICAgICAgMGRlZyxcXHJcXG4gICAgICByZ2JhKDAsIDE0MCwgMjU1LCAwLjMpLFxcclxcbiAgICAgIHJnYmEoMCwgNzEsIDEyOSwgMC4zKVxcclxcbiAgICApLFxcclxcbiAgICB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kLWltYWdlLmpwZycpIG5vLXJlcGVhdCBmaXhlZCBjZW50ZXI7XFxyXFxuXFxyXFxuICAtLXByaW1hcnktY29sb3I6ICMwMDZmY2M7XFxyXFxuICAtLXByaW1hcnktY29sb3ItYWx0OiAjMzMzMzMzO1xcclxcbiAgLS1mb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWljb246ICfimIAnO1xcclxcblxcclxcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJvZHktYmFja2dyb3VuZCk7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtaW4taGVpZ2h0OiA5OXZoO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuYm9keS50aGVtZS1kYXJrIHtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvci1hbHQ6IHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvci1hbHQpO1xcclxcbiAgLS10cmltLWNvbG9yOiB2YXIoLS1kYXJrLXRyaW0tY29sb3IpO1xcclxcbiAgLS10ZXh0LWNvbG9yOiB2YXIoLS1kYXJrLXRleHQtY29sb3IpO1xcclxcbiAgLS1idXR0b24tY29sb3I6IHZhcigtLWRhcmstYnV0dG9uLWNvbG9yKTtcXHJcXG4gIC0taWNvbjogdmFyKC0tZGFyay1pY29uKTtcXHJcXG4gIC0tYm9keS1iYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJhY2tncm91bmQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxyXFxuICBib2R5LnRoZW1lLWF1dG8ge1xcclxcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvci1hbHQ6IHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvci1hbHQpO1xcclxcbiAgICAtLXRyaW0tY29sb3I6IHZhcigtLWRhcmstdHJpbS1jb2xvcik7XFxyXFxuICAgIC0tdGV4dC1jb2xvcjogdmFyKC0tZGFyay10ZXh0LWNvbG9yKTtcXHJcXG4gICAgLS1idXR0b24tY29sb3I6IHZhcigtLWRhcmstYnV0dG9uLWNvbG9yKTtcXHJcXG4gICAgLS1pY29uOiB2YXIoLS1kYXJrLWljb24pO1xcclxcbiAgICAtLWJvZHktYmFja2dyb3VuZDogdmFyKC0tZGFyay1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuYm9keSxcXHJcXG5oMSxcXHJcXG5oMiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5pbnB1dCB7XFxyXFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICBwYWRkaW5nOiAwLjVlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcclxcbn1cXHJcXG5idXR0b246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxyXFxufVxcclxcbmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcbmhlYWRlciA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG59XFxyXFxuaGVhZGVyID4gZGl2ID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbn1cXHJcXG5oZWFkZXIgPiBkaXYgPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgd2lkdGg6IDI1JTtcXHJcXG59XFxyXFxuLnNlbGVjdCB7XFxyXFxuICB3aWR0aDogMjUlO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi5zZWxlY3RfX2lucHV0IHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDdweCAxNHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXHJcXG59XFxyXFxuLnNlbGVjdF9faW5wdXQgb3B0aW9uIHtcXHJcXG4gIGNvbG9yOiAjMDAwMDAwO1xcclxcbn1cXHJcXG4uc2VsZWN0IGxhYmVsOjphZnRlciB7XFxyXFxuICBjb250ZW50OiB2YXIoLS1pY29uKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmFwaS1pbnRlcmFjdGlvbiA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDFlbSAxZW0gMDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5hcGktaW50ZXJhY3Rpb24gPiBkaXYgcCB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWFsdCk7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogMC4yZW0gMWVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG4uYXBpLWludGVyYWN0aW9uID4gZGl2IHA6OmZpcnN0LWxldHRlciB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG59XFxyXFxuLmFwaS1pbnRlcmFjdGlvbiBpbWcge1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgaGVpZ2h0OiA1ZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbi5saXN0cy1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBnYXA6IDFlbTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxufVxcclxcbi5saXN0cy1zZWN0aW9uID4gc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXg6IDEgMSAxMmVtO1xcclxcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWFsdCk7XFxyXFxufVxcclxcbi5saXN0cy1zZWN0aW9uIHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmxpc3RzLXNlY3Rpb24gaDIge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG4uYWRkLXRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuLmFkZC10YXNrIGlucHV0IHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcbi5hZGQtdGFzayBidXR0b24ge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgYm9yZGVyOiB2YXIoLS1ib3JkZXIpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XFxyXFxuICBjb2xvcjogI2VlZTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG59XFxyXFxuLnRhc2suZHJhZ2dpbmcge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYWx0KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibGFjayk7XFxyXFxuICBwYWRkaW5nOiAxZW0gMDtcXHJcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcbmZvb3RlciAuY29weXJpZ2h0IHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVkLWJnLWNvbG9yIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJlZCAhaW1wb3J0YW50O1xcclxcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8taWNvbiB7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgcGFkZGluZzogMC4yZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXHJcXG59XFxyXFxuLmluZm8taWNvbjpob3ZlciB7XFxyXFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1kaXYge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBib3JkZXI6IHZhcigtLWJvcmRlcik7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmltLWNvbG9yKTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcbi5pbmZvLWRpdiB1bCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXHJcXG59XFxyXFxuLmluZm8tZGl2IHVsIGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC43ZW07XFxyXFxufVxcclxcbi5pbmZvLWRpdiB1bCBsaTo6YmVmb3JlIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29udGVudDogYXR0cihkYXRhLWhpZ2hsaWdodHdvcmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWN1cnNvciB7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcblxcclxcbi5kcmFnb3Zlci1ib3JkZXItYm90dG9tIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuLmRyYWdvdmVyLWJvcmRlci10b3Age1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlcy5zY3NzJ1xyXG5pbXBvcnQgaWNvbiBmcm9tICcuLi9pbWFnZXMvaWNvbi5wbmcnXHJcbmltcG9ydCBsb2FkaW5nR2lmIGZyb20gJy4uL2ltYWdlcy9sb2FkaW5nLmdpZidcclxuOygndXNlIHN0cmljdCcpXHJcblxyXG4vKlxyXG5QYWdlIHN0cnVjdHVyZVxyXG4qL1xyXG47KCgpID0+IHtcclxuICBzZXRMb2NhbFN0b3JhZ2UoKVxyXG5cclxuICAvL2xpZ2h0L2RhcmsgdGhlbWVcclxuICBpbmRpY2F0ZVRoZW1lKClcclxuXHJcbiAgLy9ldmVudCBsaXN0ZW5lciB0byBhZGQtdGFzayBpbnB1dHMgdG8gc2Vuc2UgJ0VudGVyJyBwcmVzc1xyXG4gIGNvbnN0IGlucHV0VGFza3NFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtdGFza19faW5wdXQnKVxyXG4gIGZvciAoY29uc3QgaW5wdXQgb2YgaW5wdXRUYXNrc0VsZW1lbnRzKVxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBjbGlja0FkZFRhc2tFdmVudEhhbmRsZXIpXHJcblxyXG4gIC8vZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzZWN0aW9uIG9mIGFsbCBsaXN0cyB0b2dldGhlclxyXG4gIGNvbnN0IGxpc3RzU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0cycpXHJcbiAgYWRkRXZlbnRzVG9FbGVtZW50KGxpc3RzU2VjdGlvbiwge1xyXG4gICAgY2xpY2s6IGNsaWNrQWRkVGFza0V2ZW50SGFuZGxlcixcclxuICAgIGRibGNsaWNrOiBlZGl0VGFza0V2ZW50SGFuZGxlcixcclxuICAgIGtleWRvd246IGVkaXRUYXNrRXZlbnRIYW5kbGVyLFxyXG4gIH0pXHJcblxyXG4gIC8vZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzZWN0aW9uIHRoZSBhcGkgc2VjdGlvblxyXG4gIGNvbnN0IGFwaVNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBpLWludGVyYWN0aW9uLXNlY3Rpb24nKVxyXG4gIGFwaVNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0V2ZW50SGFuZGxlckFwaSlcclxuXHJcbiAgLy9ldmVudCBsaXN0ZW5lciB0byBzZWFyY2ggaW5wdXRcclxuICBhZGRFdmVudHNUb0VsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLCB7XHJcbiAgICBrZXl1cDogc2VhcmNoRXZlbnRIYW5kbGVyLFxyXG4gIH0pXHJcblxyXG4gIC8vYWRkIGV2ZW50IGxpc3RlbmVyIGZvciBlYWNoIHRhc2stbGlzdCB0byBlbmFibGUgZHJhZyBvcHRpb25cclxuICBjb25zdCBsaXN0U2VjdGlvbnMgPSBsaXN0c1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmxpc3Qtc2VjdGlvbicpXHJcbiAgbGlzdFNlY3Rpb25zLmZvckVhY2goKGxpc3RTZWN0aW9uKSA9PiB7XHJcbiAgICBsaXN0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXHJcbiAgfSlcclxuXHJcbiAgLy9hZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlICd0cmFzaCcgZWxlbWVudFxyXG4gIGNvbnN0IGRlbGV0ZURyYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWRyYWcnKVxyXG4gIGRlbGV0ZURyYWcuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxyXG5cclxuICAvL2FkZCBldmVudCBsaXN0ZW5lciB0byByZW1pbmRlciBpbnB1dHNcclxuICBjb25zdCByZW1pbmRlcklucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICBcIltwbGFjZWhvbGRlcj0nQWRkIHJlbWluZGVyJ11cIlxyXG4gIClcclxuICBmb3IgKGNvbnN0IGlucHV0IG9mIHJlbWluZGVySW5wdXRzKSB7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LnR5cGUgPSAnZGF0ZXRpbWUtbG9jYWwnXHJcbiAgICAgIGUudGFyZ2V0Lm1pbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnLicpWzBdXHJcbiAgICB9KVxyXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIChlKSA9PiB7XHJcbiAgICAgIGlmICghZS50YXJnZXQudmFsdWUpIGUudGFyZ2V0LnR5cGUgPSAndGV4dCdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUxpc3RzKClcclxufSkoKVxyXG5cclxuLypcclxuRE9NIGZ1bmN0aW9uc1xyXG4qL1xyXG5cclxuLy9saWdodC9kYXJrIHRoZW1lXHJcbmZ1bmN0aW9uIGluZGljYXRlVGhlbWUoKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IHNhdmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSB8fCAnYXV0bydcclxuICAgIGFwcGx5VGhlbWUoc2F2ZWRUaGVtZSlcclxuICAgIGZvciAoY29uc3Qgb3B0aW9uRWxlbWVudCBvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2VsVGhlbWUgb3B0aW9uJykpIHtcclxuICAgICAgb3B0aW9uRWxlbWVudC5zZWxlY3RlZCA9IHNhdmVkVGhlbWUgPT09IG9wdGlvbkVsZW1lbnQudmFsdWVcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxUaGVtZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgdGhpcy52YWx1ZSlcclxuICAgICAgYXBwbHlUaGVtZSh0aGlzLnZhbHVlKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG4vL0xpZ2h0L0RhcmsgdGhlbWUgbW9kZVxyXG5mdW5jdGlvbiBhcHBseVRoZW1lKHRoZW1lKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd0aGVtZS1hdXRvJywgJ3RoZW1lLWxpZ2h0JywgJ3RoZW1lLWRhcmsnKVxyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChgdGhlbWUtJHt0aGVtZX1gKVxyXG59XHJcblxyXG4vL0Rpc3BsYXlzIHRoZSB0YXNrcyBsaXN0cyB0byBET01cclxuZnVuY3Rpb24gZ2VuZXJhdGVMaXN0cygpIHtcclxuICBjb25zdCBsaXN0c1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdHMnKVxyXG4gIGNvbnN0IHVsTGlzdHMgPSBsaXN0c1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgndWwnKVxyXG5cclxuICBmb3IgKGNvbnN0IGxpc3Qgb2YgdWxMaXN0cykge1xyXG4gICAgd2hpbGUgKGxpc3QuZmlyc3RDaGlsZCkgbGlzdC5yZW1vdmVDaGlsZChsaXN0LmZpcnN0Q2hpbGQpXHJcbiAgICBjb25zdCB0YXNrc0xpc3QgPSBnZXRUYXNrc0xpc3QoXHJcbiAgICAgIGxpc3QuY2xvc2VzdCgnLmxpc3Qtc2VjdGlvbicpLmRhdGFzZXQubGlzdFR5cGVcclxuICAgIClcclxuICAgIGZvciAoY29uc3QgdGFzayBvZiB0YXNrc0xpc3QpIHtcclxuICAgICAgY29uc3QgbGkgPSBjcmVhdGVUYXNrRWxlbWVudCh0YXNrKVxyXG4gICAgICBjb25zdCBzcGFuID0gY3JlYXRlSW5mb0VsZW1lbnQoKVxyXG4gICAgICBsaXN0LmFwcGVuZChsaSwgc3BhbilcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tFbGVtZW50KHRhc2sgPSB7fSkge1xyXG4gIGNvbnN0IGxpID0gY3JlYXRlRWxlbWVudChcclxuICAgICdsaScsXHJcbiAgICBbdGFzay50YXNrXSxcclxuICAgIFsndGFzayddLFxyXG4gICAge1xyXG4gICAgICAnZGF0YS10YXNrJzogdGFzay50YXNrLFxyXG4gICAgICAnZGF0YS1kYXRlJzogdGFzay5kYXRlLFxyXG4gICAgICAnZGF0YS1yZW1pbmRlcic6IHRhc2sucmVtaW5kZXIsXHJcbiAgICAgIGRyYWdnYWJsZTogJ3RydWUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYmx1cjogYmx1ckV2ZW50SGFuZGxlcixcclxuICAgICAgbW91c2VvdmVyOiBtb3VzZW92ZXJUYXNrRXZlbnRIYW5kbGVyLFxyXG4gICAgICBkcmFnc3RhcnQ6IGRyYWdzdGFydFRhc2tFdmVudEhhbmRsZXIsXHJcbiAgICAgIGRyYWdlbmQ6IGRyYWdlbmRUYXNrRXZlbnRIYW5kbGVyLFxyXG4gICAgICBkcmFnb3ZlcjogZHJhZ292ZXJUYXNrRXZlbnRIYW5kbGVyLFxyXG4gICAgICBkcmFnbGVhdmU6IGRyYWdsZWF2ZVRhc2tFdmVudEhhbmRsZXIsXHJcbiAgICB9XHJcbiAgKVxyXG4gIHJldHVybiBsaVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJbmZvRWxlbWVudCgpIHtcclxuICBjb25zdCBzcGFuID0gY3JlYXRlRWxlbWVudChcclxuICAgICdzcGFuJyxcclxuICAgIFsn8J+biCddLFxyXG4gICAgWydpbmZvLWljb24nXSxcclxuICAgIHt9LFxyXG4gICAge1xyXG4gICAgICBtb3VzZW92ZXI6IG1vdXNlb3ZlckluZm9FdmVudEhhbmRsZXIsXHJcbiAgICAgIG1vdXNlb3V0OiBtb3VzZW91dEluZm9FdmVudEhhbmRsZXIsXHJcbiAgICB9XHJcbiAgKVxyXG4gIHJldHVybiBzcGFuXHJcbn1cclxuXHJcbi8vVGFrZXMgYW4gb2JqZWN0IHRoYXQgaGFzIGtleXM9dHlwZXMgYW5kIGl0cyB2YWx1ZXM9ZnVuY3Rpb25zIGFuZCBzZXRzIHRoZSBldmVudCBsaXN0ZW5lciBpbiB0aGUgZWxlbWVudFxyXG5mdW5jdGlvbiBhZGRFdmVudHNUb0VsZW1lbnQoZWxlbSwgZXZlbnRMaXN0ZW5lck9iaikge1xyXG4gIGZvciAoY29uc3QgdHlwZSBpbiBldmVudExpc3RlbmVyT2JqKSB7XHJcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRMaXN0ZW5lck9ialt0eXBlXSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlckxpc3RzKHF1ZXJ5KSB7XHJcbiAgY29uc3QgYWxsTGlUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcclxuXHJcbiAgZm9yIChjb25zdCBsaVRhc2sgb2YgYWxsTGlUYXNrcykge1xyXG4gICAgY29uc3QgdGFzayA9IGxpVGFzay50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpXHJcbiAgICBjb25zdCBpbmZvU3BhbiA9IGxpVGFzay5uZXh0RWxlbWVudFNpYmxpbmdcclxuICAgIGlmIChzZWFyY2hCeVF1ZXJ5KHRhc2ssIHF1ZXJ5KSkgZWxlbWVudHNEaXNwbGF5KFtsaVRhc2ssIGluZm9TcGFuXSlcclxuICAgIGVsc2UgZWxlbWVudHNEaXNwbGF5KFtsaVRhc2ssIGluZm9TcGFuXSwgJ25vbmUnKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VhcmNoQnlRdWVyeShzdHIsIHF1ZXJ5KSB7XHJcbiAgcmV0dXJuIHN0ci5zZWFyY2gobmV3IFJlZ0V4cChxdWVyeS5yZXBsYWNlKC9cXHMrLywgJ3wnKSkpICE9PSAtMVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbGVtZW50c0Rpc3BsYXkoZWxlbWVudHMsIGRpc3BsYXkgPSAnJykge1xyXG4gIGZvciAoY29uc3QgZWxlbSBvZiBlbGVtZW50cykge1xyXG4gICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgRE9NIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEV4YW1wbGUgdXNhZ2U6XHJcbiAqIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wianVzdCB0ZXh0XCIsIGNyZWF0ZUVsZW1lbnQoLi4uKV0sIFtcIm5hbmFcIiwgXCJiYW5hbmFcIl0sIHtpZDogXCJibGFcIn0pXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWdOYW1lIC0gdGhlIHR5cGUgb2YgdGhlIGVsZW1lbnRcclxuICogQHBhcmFtIHtBcnJheX0gY2hpbGRyZW4gLSB0aGUgY2hpbGQgZWxlbWVudHMgZm9yIHRoZSBuZXcgZWxlbWVudC5cclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICBFYWNoIGNoaWxkIGNhbiBiZSBhIERPTSBlbGVtZW50LCBvciBhIHN0cmluZyAoaWYgeW91IGp1c3Qgd2FudCBhIHRleHQgZWxlbWVudCkuXHJcbiAqIEBwYXJhbSB7QXJyYXl9IGNsYXNzZXMgLSB0aGUgY2xhc3MgbGlzdCBvZiB0aGUgbmV3IGVsZW1lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IGF0dHJpYnV0ZXMgLSB0aGUgYXR0cmlidXRlcyBmb3IgdGhlIG5ldyBlbGVtZW50XHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChcclxuICB0YWdOYW1lLFxyXG4gIGNoaWxkcmVuID0gW10sXHJcbiAgY2xhc3NlcyA9IFtdLFxyXG4gIGF0dHJpYnV0ZXMgPSB7fSxcclxuICBldmVudExpc3RlbmVycyA9IHt9XHJcbikge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXHJcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikgZWxlbWVudC5hcHBlbmQoY2hpbGQpXHJcblxyXG4gIGVsZW1lbnQuY2xhc3NMaXN0ID0gY2xhc3Nlcy5qb2luKCcgJylcclxuICBmb3IgKGNvbnN0IGF0dHIgaW4gYXR0cmlidXRlcykgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1thdHRyXSlcclxuXHJcbiAgZm9yIChjb25zdCBldmVudCBpbiBldmVudExpc3RlbmVycylcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRMaXN0ZW5lcnNbZXZlbnRdKVxyXG5cclxuICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREcmFnSW5kZXhUYXNrRE9NKHksIGxpc3RCb3VuZHMsIHRhc2tIZWlnaHQgPSAzNikge1xyXG4gIGNvbnN0IGhlaWdodCA9IGxpc3RCb3VuZHMuaGVpZ2h0XHJcbiAgY29uc3QgdGFza1Bvc2l0aW9uID0gaGVpZ2h0IC0gKHkgLSBsaXN0Qm91bmRzLnRvcClcclxuICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGhlaWdodCAtIHRhc2tQb3NpdGlvbikgLyB0YXNrSGVpZ2h0KVxyXG4gIHJldHVybiBpbmRleFxyXG59XHJcblxyXG4vKlxyXG5FdmVudCBoYW5kbGVyc1xyXG4qL1xyXG5cclxuLy9IYW5kbGVzIHRoZSBhZGQgdGFzayBldmVudFxyXG5mdW5jdGlvbiBjbGlja0FkZFRhc2tFdmVudEhhbmRsZXIoZSkge1xyXG4gIGlmIChcclxuICAgICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC10YXNrX19pbnB1dCcpICYmXHJcbiAgICAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtdGFza19fYnV0dG9uJylcclxuICApXHJcbiAgICByZXR1cm5cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtdGFza19faW5wdXQnKSkge1xyXG4gICAgaWYgKGUua2V5ICE9PSAnRW50ZXInKSByZXR1cm5cclxuICB9XHJcbiAgY29uc3QgbGlzdFNlY3Rpb24gPSBlLnRhcmdldC5jbG9zZXN0KCcubGlzdC1zZWN0aW9uJylcclxuICBjb25zdCBbdGFza0lucHV0LCByZW1pbmRlcklucHV0XSA9IFtcclxuICAgIGxpc3RTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFza19faW5wdXQnKSxcclxuICAgIGxpc3RTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFza19fcmVtaW5kZXInKSxcclxuICBdXHJcbiAgY29uc3QgbGlzdFR5cGUgPSBsaXN0U2VjdGlvbi5kYXRhc2V0Lmxpc3RUeXBlXHJcblxyXG4gIGlmIChpc1ZhckZhbHN5QWxlcnQodGFza0lucHV0LnZhbHVlLCAoKSA9PiB3aW5kb3cuYWxlcnQoJ0ludmFsaWQgSW5wdXQhJykpKVxyXG4gICAgcmV0dXJuXHJcblxyXG4gIGNvbnN0IHRhc2sgPSB0YXNrQ29uc3RydWN0b3IoXHJcbiAgICB0YXNrSW5wdXQudmFsdWUsXHJcbiAgICByZW1pbmRlcklucHV0LnZhbHVlID8gbmV3IERhdGUocmVtaW5kZXJJbnB1dC52YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKSA6IG51bGxcclxuICApXHJcblxyXG4gIGlmICh0YXNrLnJlbWluZGVyKVxyXG4gICAgc2V0UmVtaW5kZXJUaW1lb3V0KHRhc2suZGF0ZSwgdGFzay5yZW1pbmRlciwgKCkgPT5cclxuICAgICAgYWxlcnQoYFJlbWluZGVyIGZyb20gXCIke2xpc3RUeXBlfVwiIGxpc3Q6XFxuXCIke3Rhc2sudGFza31cImApXHJcbiAgICApXHJcblxyXG4gIGFkZFRhc2sodGFzaywgbGlzdFR5cGUpXHJcbiAgO1t0YXNrSW5wdXQudmFsdWUsIHJlbWluZGVySW5wdXQudmFsdWUsIHJlbWluZGVySW5wdXQudHlwZV0gPSBbJycsICcnLCAndGV4dCddXHJcblxyXG4gIGdlbmVyYXRlTGlzdHMoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRSZW1pbmRlclRpbWVvdXQoZGF0ZSwgcmVtaW5kZXIsIGZ1bmMpIHtcclxuICBjb25zdCByZW1pbmRlckluTWlsbGlzZWNvbmRzID1cclxuICAgIG5ldyBEYXRlKHJlbWluZGVyKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShkYXRlKS5nZXRUaW1lKClcclxuICBzZXRUaW1lb3V0KGZ1bmMsIHJlbWluZGVySW5NaWxsaXNlY29uZHMpXHJcbn1cclxuXHJcbi8vSGFuZGxlcyB0aGUgZHJhZ3N0YXJ0IG9mIGEgdGFzayBlbGVtZW50XHJcbmZ1bmN0aW9uIGRyYWdzdGFydFRhc2tFdmVudEhhbmRsZXIoZSkge1xyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJylcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWRyYWcnKS5jbGFzc0xpc3QuYWRkKCdyZWQtYmctY29sb3InKVxyXG59XHJcblxyXG4vL0hhbmRsZXMgdGhlIGRyYWdlbmQgb2YgYSB0YXNrIGVsZW1lbnRcclxuZnVuY3Rpb24gZHJhZ2VuZFRhc2tFdmVudEhhbmRsZXIoZSkge1xyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJylcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLWRyYWcnKS5jbGFzc0xpc3QucmVtb3ZlKCdyZWQtYmctY29sb3InKVxyXG4gIGRyYWdlbmRFdmVudEhhbmRsZXIoZSlcclxufVxyXG5cclxuLy9IYW5kbGVzIHRoZSB0YXNrIGVkaXRcclxuZnVuY3Rpb24gZWRpdFRhc2tFdmVudEhhbmRsZXIoZSkge1xyXG4gIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrJykpIHJldHVyblxyXG5cclxuICBjb25zdCBsaVRhc2sgPSBlLnRhcmdldFxyXG4gIHRvZ2dsZUVkaXRUYXNrUHJvcGVydGllcyhsaVRhc2ssIGUpXHJcblxyXG4gIGlmIChlLmtleSA9PT0gJ0VudGVyJykgbGlUYXNrLmJsdXIoKSAvLyBpdCBleGVjdXRlcyB0aGUgYmx1ckV2ZW50SGFuZGxlciB3aGljaCB1cGRhdGVzIHRoZSB0YXNrXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUVkaXRUYXNrUHJvcGVydGllcyhsaVRhc2ssIGUgPSB7IHR5cGU6IG51bGwgfSkge1xyXG4gIGxpVGFzay5jb250ZW50RWRpdGFibGUgPSBsaVRhc2suY29udGVudEVkaXRhYmxlID8gdHJ1ZSA6IG51bGwgLy90cnVlXHJcbiAgbGlUYXNrLmRyYWdnYWJsZSA9IGxpVGFzay5kcmFnZ2FibGUgPyBmYWxzZSA6IHRydWUgLy9mYWxzZVxyXG4gIGxpVGFzay5jbGFzc0xpc3QudG9nZ2xlKCd0ZXh0LWN1cnNvcicpXHJcbiAgaWYgKGUudHlwZSA9PT0gJ2RibGNsaWNrJykgbGlUYXNrLmZvY3VzKClcclxufVxyXG5cclxuLy9IYW5kbGVzIHRoZSBibHVyIGV2ZW50IHNvIGlmIHRoZSB0YXNrIGVsZW1lbnQgbG9zZXMgZm9jdXMsIHRoZSBjaGFuZ2Ugd2lsbCBiZSBzYXZlZC5cclxuZnVuY3Rpb24gYmx1ckV2ZW50SGFuZGxlcihlKSB7XHJcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzaycpKSB7XHJcbiAgICBjb25zdCBsaVRhc2sgPSBlLnRhcmdldFxyXG4gICAgdG9nZ2xlRWRpdFRhc2tQcm9wZXJ0aWVzKGxpVGFzaywgZSlcclxuICAgIHVwZGF0ZUVkaXRlZFRhc2sobGlUYXNrKVxyXG4gICAgZ2VuZXJhdGVMaXN0cygpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVFZGl0ZWRUYXNrKGxpVGFzaykge1xyXG4gIGNvbnN0IGxpc3RUeXBlID0gbGlUYXNrLmNsb3Nlc3QoJy5saXN0LXNlY3Rpb24nKS5kYXRhc2V0Lmxpc3RUeXBlXHJcbiAgY29uc3QgbmV3VGFzayA9IHRhc2tDb25zdHJ1Y3RvcihsaVRhc2sudGV4dENvbnRlbnQsIGxpVGFzay5kYXRhc2V0LnJlbWluZGVyKVxyXG4gIGNvbnN0IG9sZFRhc2sgPSB0YXNrQ29uc3RydWN0b3IoXHJcbiAgICBsaVRhc2suZGF0YXNldC50YXNrLFxyXG4gICAgbGlUYXNrLmRhdGFzZXQuZGF0ZSxcclxuICAgIGxpVGFzay5kYXRhc2V0LnJlbWluZGVyXHJcbiAgKVxyXG4gIHVwZGF0ZVRhc2sobmV3VGFzaywgb2xkVGFzaywgbGlzdFR5cGUpXHJcbn1cclxuXHJcbi8vSGFuZGxlcyB0aGUgdGFzayBtb3ZlbWVudHMgYmV0d2VlbiBsaXN0c1xyXG5mdW5jdGlvbiBtb3VzZW92ZXJUYXNrRXZlbnRIYW5kbGVyKGUpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbnVtYmVyS2V5RG93bkV2ZW50SGFuZGxlcilcclxuICBlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlb3V0VGFza0V2ZW50SGFuZGxlcilcclxufVxyXG5cclxuZnVuY3Rpb24gbW91c2VvdXRUYXNrRXZlbnRIYW5kbGVyKGUpIHtcclxuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbnVtYmVyS2V5RG93bkV2ZW50SGFuZGxlcilcclxuICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1vdXNlb3V0VGFza0V2ZW50SGFuZGxlcilcclxufVxyXG5cclxuZnVuY3Rpb24gbnVtYmVyS2V5RG93bkV2ZW50SGFuZGxlcihlKSB7XHJcbiAgY29uc3QgbGlzdHNPYmogPSB7IDE6ICd0b2RvJywgMjogJ2luLXByb2dyZXNzJywgMzogJ2RvbmUnIH1cclxuICBpZiAoIShlLmtleSBpbiBsaXN0c09iaikgfHwgIWUuYWx0S2V5KSByZXR1cm5cclxuXHJcbiAgY29uc3QgbW91c2VPdmVyRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCc6aG92ZXInKVxyXG4gIGNvbnN0IGxpTW91c2VPbiA9XHJcbiAgICBtb3VzZU92ZXJFbGVtZW50c1ttb3VzZU92ZXJFbGVtZW50cy5sZW5ndGggLSAxXS5jbG9zZXN0KCcudGFzaycpXHJcblxyXG4gIGNvbnN0IHRhc2sgPSB0YXNrQ29uc3RydWN0b3IoXHJcbiAgICBsaU1vdXNlT24udGV4dENvbnRlbnQsXHJcbiAgICBsaU1vdXNlT24uZGF0YXNldC5yZW1pbmRlcixcclxuICAgIGxpTW91c2VPbi5kYXRhc2V0LmRhdGVcclxuICApXHJcblxyXG4gIGNvbnN0IHByZXZpb3VzTGlzdFR5cGUgPSBsaU1vdXNlT24uY2xvc2VzdCgnLmxpc3Qtc2VjdGlvbicpLmRhdGFzZXQubGlzdFR5cGVcclxuXHJcbiAgY29uc3QgbmV3TGlzdFR5cGUgPSBsaXN0c09ialtlLmtleV1cclxuXHJcbiAgbW92ZVRhc2sodGFzaywgcHJldmlvdXNMaXN0VHlwZSwgbmV3TGlzdFR5cGUpXHJcbn1cclxuXHJcbi8vSGFuZGxlcyB0aGUga2V5dXAgZXZlbnQgc28gd2hlbiB0aGUgdXNlciB0eXBlcyBhIGxldHRlciwgdGhlIGludGVyZmFjZSB3aWxsIGNoYW5nZSBhY2NvcmRpbmdseS5cclxuZnVuY3Rpb24gc2VhcmNoRXZlbnRIYW5kbGVyKGUpIHtcclxuICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pZCAhPT0gJ3NlYXJjaCcpIHJldHVyblxyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxyXG5cclxuICBsZXQgcXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZVxyXG5cclxuICBmaWx0ZXJMaXN0cyhxdWVyeS50b0xvd2VyQ2FzZSgpKVxyXG59XHJcblxyXG4vL0hhbmRsZXMgdGhlIHNhdmUgYW5kIGxvYWQgYnV0dG9ucyBjbGljayBhbmQgc2F2ZSBkYXRhIHRvIHRoZSBBUEkgb3IgbG9hZCBkYXRhIGZyb20gdGhlIEFQSVxyXG5hc3luYyBmdW5jdGlvbiBjbGlja0V2ZW50SGFuZGxlckFwaShlKSB7XHJcbiAgdG9nZ2xlTG9hZGVyKClcclxuICBpZiAoZS50YXJnZXQuaWQgPT09ICdzYXZlLWJ0bicpIHtcclxuICAgIC8vU2F2ZSB0byBhcGlcclxuICAgIGNvbnN0IHRhc2tzT2JqZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzT2JqZWN0cycpKVxyXG4gICAgYXdhaXQgc2F2ZVRhc2tzVG9BcGkodGFza3NPYmplY3RzKVxyXG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdsb2FkLWJ0bicpIHtcclxuICAgIC8vTG9hZCBmcm9tIGFwaVxyXG4gICAgYXdhaXQgbG9hZFRhc2tzRnJvbUFwaSgpXHJcbiAgICBnZW5lcmF0ZUxpc3RzKClcclxuICB9XHJcbiAgdG9nZ2xlTG9hZGVyKClcclxufVxyXG5cclxuLy9IYW5kbGVzIHRoZSBkcmFnZW5kIGV2ZW50IG9mIGEgdGFzayBhbmQgZGVsZXRlcy9tb3ZlcyB0aGUgdGFza1xyXG5mdW5jdGlvbiBkcmFnZW5kRXZlbnRIYW5kbGVyKGUpIHtcclxuICBjb25zdCBob3ZlckVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnOmhvdmVyJylcclxuICAvL0RlbGV0ZSBkcmFnIHRhc2tcclxuICBpZiAoaG92ZXJFbGVtZW50c1tob3ZlckVsZW1lbnRzLmxlbmd0aCAtIDFdLmNsb3Nlc3QoJyNkZWxldGUtZHJhZycpKVxyXG4gICAgcmV0dXJuIGRlbGV0ZVRhc2tIYW5kbGVyKGUpXHJcblxyXG4gIGNvbnN0IGxpc3RTZWN0aW9uID1cclxuICAgIGhvdmVyRWxlbWVudHNbaG92ZXJFbGVtZW50cy5sZW5ndGggLSAxXS5jbG9zZXN0KCcubGlzdC1zZWN0aW9uJylcclxuICBpZiAoXHJcbiAgICBpc1ZhckZhbHN5QWxlcnQobGlzdFNlY3Rpb24sICgpID0+XHJcbiAgICAgIHdpbmRvdy5hbGVydCgnWW91IGFyZSBub3QgYWxsb3dlZCB0byBkcmFnIHRoZXJlIScpXHJcbiAgICApXHJcbiAgKVxyXG4gICAgcmV0dXJuXHJcblxyXG4gIGNvbnN0IHVsTGlzdCA9IGxpc3RTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ3VsJylcclxuICBjb25zdCBuZXdMaXN0VHlwZSA9IGxpc3RTZWN0aW9uLmRhdGFzZXQubGlzdFR5cGVcclxuICBjb25zdCBwcmV2aW91c0xpc3RUeXBlID0gZS50YXJnZXQuY2xvc2VzdCgnLmxpc3Qtc2VjdGlvbicpLmRhdGFzZXQubGlzdFR5cGVcclxuICBjb25zdCB0YXNrID0gdGFza0NvbnN0cnVjdG9yKFxyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQsXHJcbiAgICBlLnRhcmdldC5kYXRhc2V0LnJlbWluZGVyLFxyXG4gICAgZS50YXJnZXQuZGF0YXNldC5kYXRlXHJcbiAgKVxyXG5cclxuICBjb25zdCBpbmRleCA9IGluZGljYXRlVGFza0RyYWdJbmRleCh1bExpc3QsIGUpXHJcblxyXG4gIG1vdmVUYXNrKHRhc2ssIHByZXZpb3VzTGlzdFR5cGUsIG5ld0xpc3RUeXBlLCBpbmRleClcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVGFza0hhbmRsZXIoZSkge1xyXG4gIGNvbnN0IGxpc3RUeXBlID0gZS50YXJnZXQuY2xvc2VzdCgnLmxpc3Qtc2VjdGlvbicpLmRhdGFzZXQubGlzdFR5cGVcclxuICBjb25zdCB0YXNrID0gdGFza0NvbnN0cnVjdG9yKFxyXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQsXHJcbiAgICBlLnRhcmdldC5kYXRhc2V0LnJlbWluZGVyLFxyXG4gICAgZS50YXJnZXQuZGF0YXNldC5kYXRlXHJcbiAgKVxyXG4gIHJlbW92ZVRhc2sodGFzaywgbGlzdFR5cGUpXHJcbiAgZ2VuZXJhdGVMaXN0cygpXHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuLy9IYW5kbGVzIHRoZSBkcmFnb3Zlci9kcmFnbGVhdmUgZXZlbnQgb2YgYSB0YXNrIGFuZCBhZGQgYSBjbGFzcyB0byBpbmRpY2F0ZSB3aGF0IHBvc2l0aW9uIHRvIGluc2VydCBpblxyXG5mdW5jdGlvbiBkcmFnb3ZlclRhc2tFdmVudEhhbmRsZXIoZSkge1xyXG4gIGNvbnN0IHVsTGlzdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3VsJylcclxuICBjb25zdCBsaXN0Qm91bmRzID0gdWxMaXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgY29uc3QgeSA9IGUuY2xpZW50WVxyXG4gIGNvbnN0IGxpVGFza3MgPSB1bExpc3QucXVlcnlTZWxlY3RvckFsbCgnbGknKVxyXG4gIGNvbnN0IGRyYWdJbmRleCA9IGdldERyYWdJbmRleFRhc2tET00oeSwgbGlzdEJvdW5kcywgbGlUYXNrc1swXS5vZmZzZXRIZWlnaHQpXHJcbiAgY29uc3QgdGFza0luZGV4ID0gZ2V0RWxlbWVudEluZGV4KGUudGFyZ2V0KVxyXG5cclxuICBsaVRhc2tzLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnb3Zlci1ib3JkZXItYm90dG9tJywgJ2RyYWdvdmVyLWJvcmRlci10b3AnKVxyXG4gIH0pXHJcblxyXG4gIGlmIChkcmFnSW5kZXggIT09IGxpVGFza3MubGVuZ3RoKVxyXG4gICAgbGlUYXNrc1tkcmFnSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2RyYWdvdmVyLWJvcmRlci10b3AnKVxyXG4gIGVsc2UgbGlUYXNrc1t0YXNrSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2RyYWdvdmVyLWJvcmRlci1ib3R0b20nKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmFnbGVhdmVUYXNrRXZlbnRIYW5kbGVyKGUpIHtcclxuICBjb25zdCBsaVRhc2tzID0gZS50YXJnZXQuY2xvc2VzdCgndWwnKS5xdWVyeVNlbGVjdG9yQWxsKCdsaScpXHJcbiAgbGlUYXNrcy5mb3JFYWNoKChsaSkgPT4ge1xyXG4gICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ292ZXItYm9yZGVyLWJvdHRvbScsICdkcmFnb3Zlci1ib3JkZXItdG9wJylcclxuICB9KVxyXG59XHJcblxyXG4vL0hhbmRsZXMgdGhlIG1vdXNlb3ZlciBldmVudCBhbmQgZGlzcGxheXMgYSBkaXYgd2l0aCBpbmZvIG9mIHRoZSB0YXNrXHJcbmZ1bmN0aW9uIG1vdXNlb3ZlckluZm9FdmVudEhhbmRsZXIoZSkge1xyXG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mby1kaXYnKVxyXG4gIGluZm9EaXYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheS1ub25lJylcclxuXHJcbiAgY29uc3QgdGFzayA9IGdldFRhc2tCeU5hbWUoXHJcbiAgICBlLnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmRhdGFzZXQudGFzayxcclxuICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5saXN0LXNlY3Rpb24nKS5kYXRhc2V0Lmxpc3RUeXBlXHJcbiAgKVxyXG5cclxuICBjb25zdCB1bFRhc2sgPSBjcmVhdGVFbGVtZW50KCd1bCcsIGNyZWF0ZUluZm9MaXN0KHRhc2spKVxyXG4gIGluZm9EaXYuYXBwZW5kKHVsVGFzaylcclxuXHJcbiAgY29uc3QgbGVmdCA9IGUucGFnZVhcclxuICBjb25zdCB0b3AgPSBlLnBhZ2VZXHJcbiAgY29uc3QgZGl2SGVpZ2h0ID0gaW5mb0Rpdi5vZmZzZXRIZWlnaHRcclxuICBpbmZvRGl2LnN0eWxlLmxlZnQgPSBsZWZ0IC0gMTAwICsgJ3B4J1xyXG4gIGluZm9EaXYuc3R5bGUudG9wID0gdG9wIC0gZGl2SGVpZ2h0IC8gMiAtIDIwICsgJ3B4J1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJbmZvTGlzdCh0YXNrKSB7XHJcbiAgY29uc3QgbGlUYXNrVGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgW3Rhc2sudGFza10sIFtdLCB7XHJcbiAgICAnZGF0YS1oaWdobGlnaHR3b3JkJzogJ1Rhc2s6ICcsXHJcbiAgfSlcclxuICBjb25zdCBsaVRhc2tEYXRlID0gY3JlYXRlRWxlbWVudCgnbGknLCBbdGFzay5kYXRlLnNwbGl0KCcsICcpWzBdXSwgW10sIHtcclxuICAgICdkYXRhLWhpZ2hsaWdodHdvcmQnOiAnRGF0ZTogJyxcclxuICB9KVxyXG4gIGNvbnN0IGxpVGFza1RpbWUgPSBjcmVhdGVFbGVtZW50KCdsaScsIFt0YXNrLmRhdGUuc3BsaXQoJywgJylbMV1dLCBbXSwge1xyXG4gICAgJ2RhdGEtaGlnaGxpZ2h0d29yZCc6ICdUaW1lOiAnLFxyXG4gIH0pXHJcbiAgY29uc3QgbGlUYXNrUmVtaW5kZXIgPSBjcmVhdGVFbGVtZW50KCdsaScsIFt0YXNrLnJlbWluZGVyXSwgW10sIHtcclxuICAgICdkYXRhLWhpZ2hsaWdodHdvcmQnOiAnUmVtaW5kZXI6ICcsXHJcbiAgfSlcclxuICByZXR1cm4gW2xpVGFza1RleHQsIGxpVGFza0RhdGUsIGxpVGFza1RpbWUsIGxpVGFza1JlbWluZGVyXVxyXG59XHJcbmZ1bmN0aW9uIG1vdXNlb3V0SW5mb0V2ZW50SGFuZGxlcihlKSB7XHJcbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLWRpdicpXHJcbiAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5LW5vbmUnKVxyXG4gIHdoaWxlIChpbmZvRGl2LmZpcnN0Q2hpbGQpIGluZm9EaXYucmVtb3ZlQ2hpbGQoaW5mb0Rpdi5maXJzdENoaWxkKVxyXG59XHJcblxyXG4vKlxyXG5Mb2NhbCBTdG9yYWdlIGZ1bmN0aW9ucyAodGFzayBpcyBhbiBvYmplY3QpXHJcbiovXHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrKHRhc2ssIGxpc3RUeXBlKSB7XHJcbiAgY29uc3QgYWxsVGFza3NPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKVxyXG4gIGFsbFRhc2tzT2JqW2xpc3RUeXBlXS51bnNoaWZ0KHRhc2sudGFzaylcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShhbGxUYXNrc09iaikpXHJcblxyXG4gIGNvbnN0IGFsbE9iamVjdHNUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzT2JqZWN0cycpKVxyXG4gIGFsbE9iamVjdHNUYXNrc1tsaXN0VHlwZV0udW5zaGlmdCh0YXNrKVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrc09iamVjdHMnLCBKU09OLnN0cmluZ2lmeShhbGxPYmplY3RzVGFza3MpKVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYXNrKG5ld1Rhc2ssIG9sZFRhc2ssIGxpc3RUeXBlKSB7XHJcbiAgY29uc3QgYWxsVGFza3NPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKVxyXG4gIGNvbnN0IGkgPSBhbGxUYXNrc09ialtsaXN0VHlwZV0uZmluZEluZGV4KCh4KSA9PiB4ID09PSBvbGRUYXNrLnRhc2spXHJcbiAgYWxsVGFza3NPYmpbbGlzdFR5cGVdW2ldID0gbmV3VGFzay50YXNrXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoYWxsVGFza3NPYmopKVxyXG5cclxuICBjb25zdCBhbGxPYmplY3RzVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrc09iamVjdHMnKSlcclxuICBjb25zdCBqID0gYWxsT2JqZWN0c1Rhc2tzW2xpc3RUeXBlXS5maW5kSW5kZXgoKHgpID0+IHgudGFzayA9PT0gb2xkVGFzay50YXNrKVxyXG4gIGFsbE9iamVjdHNUYXNrc1tsaXN0VHlwZV1bal0gPSBuZXdUYXNrXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzT2JqZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbE9iamVjdHNUYXNrcykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzaywgbGlzdFR5cGUpIHtcclxuICBjb25zdCBhbGxUYXNrc09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpXHJcbiAgY29uc3QgaSA9IGFsbFRhc2tzT2JqW2xpc3RUeXBlXS5maW5kSW5kZXgoKHgpID0+IHggPT09IHRhc2sudGFzaylcclxuICBhbGxUYXNrc09ialtsaXN0VHlwZV0uc3BsaWNlKGksIDEpXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoYWxsVGFza3NPYmopKVxyXG5cclxuICBjb25zdCBhbGxPYmplY3RzVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrc09iamVjdHMnKSlcclxuICBjb25zdCBqID0gYWxsT2JqZWN0c1Rhc2tzW2xpc3RUeXBlXS5maW5kSW5kZXgoKHgpID0+IHgudGFzayA9PT0gdGFzay50YXNrKVxyXG4gIGFsbE9iamVjdHNUYXNrc1tsaXN0VHlwZV0uc3BsaWNlKGosIDEpXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzT2JqZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbE9iamVjdHNUYXNrcykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVUYXNrKHRhc2ssIHByZXZpb3VzTGlzdFR5cGUsIG5ld0xpc3RUeXBlLCBzcGxpY2VJbmRleCA9IG51bGwpIHtcclxuICByZW1vdmVUYXNrKHRhc2ssIHByZXZpb3VzTGlzdFR5cGUpXHJcblxyXG4gIGlmICghc3BsaWNlSW5kZXgpIGFkZFRhc2sodGFzaywgbmV3TGlzdFR5cGUpXHJcbiAgZWxzZSBzcGxpY2VUYXNrcyh0YXNrLCBzcGxpY2VJbmRleCwgbmV3TGlzdFR5cGUpXHJcblxyXG4gIGdlbmVyYXRlTGlzdHMoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgY29uc3Qgc2V0VGFza3MgPSB7XHJcbiAgICB0b2RvOiBbXSxcclxuICAgICdpbi1wcm9ncmVzcyc6IFtdLFxyXG4gICAgZG9uZTogW10sXHJcbiAgfVxyXG4gIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShzZXRUYXNrcykpXHJcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3NPYmplY3RzJykpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3NPYmplY3RzJywgSlNPTi5zdHJpbmdpZnkoc2V0VGFza3MpKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxUYXNrcygpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGFza3MnKVxyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0YXNrc09iamVjdHMnKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlQWxsVGFza3ModGFza3MpIHtcclxuICByZW1vdmVBbGxUYXNrcygpXHJcbiAgY29uc3QgdG9kbyA9IFtdXHJcbiAgY29uc3QgaW5Qcm9ncmVzcyA9IFtdXHJcbiAgY29uc3QgZG9uZSA9IFtdXHJcblxyXG4gIGZvciAoY29uc3QgdGFzayBvZiB0YXNrc1sndG9kbyddKSB0b2RvLnB1c2godGFzay50YXNrKVxyXG4gIGZvciAoY29uc3QgdGFzayBvZiB0YXNrc1snaW4tcHJvZ3Jlc3MnXSkgaW5Qcm9ncmVzcy5wdXNoKHRhc2sudGFzaylcclxuICBmb3IgKGNvbnN0IHRhc2sgb2YgdGFza3NbJ2RvbmUnXSkgZG9uZS5wdXNoKHRhc2sudGFzaylcclxuXHJcbiAgY29uc3QgdGFza3NTdHJpbmdzID0ge1xyXG4gICAgdG9kbzogdG9kbyxcclxuICAgICdpbi1wcm9ncmVzcyc6IGluUHJvZ3Jlc3MsXHJcbiAgICBkb25lOiBkb25lLFxyXG4gIH1cclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrc1N0cmluZ3MpKVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrc09iamVjdHMnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwbGljZVRhc2tzKHRhc2ssIHN0YXJ0SW5kZXgsIGxpc3RUeXBlLCBkZWxldGVDb3VudCA9IDApIHtcclxuICBjb25zdCBhbGxUYXNrc09iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpXHJcbiAgYWxsVGFza3NPYmpbbGlzdFR5cGVdLnNwbGljZShzdGFydEluZGV4LCBkZWxldGVDb3VudCwgdGFzay50YXNrKVxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KGFsbFRhc2tzT2JqKSlcclxuXHJcbiAgY29uc3QgYWxsT2JqZWN0c1Rhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3NPYmplY3RzJykpXHJcbiAgYWxsT2JqZWN0c1Rhc2tzW2xpc3RUeXBlXS5zcGxpY2Uoc3RhcnRJbmRleCwgZGVsZXRlQ291bnQsIHRhc2spXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzT2JqZWN0cycsIEpTT04uc3RyaW5naWZ5KGFsbE9iamVjdHNUYXNrcykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhc2tCeU5hbWUodGFza05hbWUsIGxpc3RUeXBlKSB7XHJcbiAgY29uc3QgYWxsT2JqZWN0c1Rhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3NPYmplY3RzJykpXHJcbiAgY29uc3QgaSA9IGFsbE9iamVjdHNUYXNrc1tsaXN0VHlwZV0uZmluZEluZGV4KCh4KSA9PiB4LnRhc2sgPT09IHRhc2tOYW1lKVxyXG4gIHJldHVybiBhbGxPYmplY3RzVGFza3NbbGlzdFR5cGVdW2ldXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhc2tzTGlzdChsaXN0VHlwZSwgaXRlbSA9ICd0YXNrc09iamVjdHMnKSB7XHJcbiAgY29uc3QgYWxsT2JqZWN0c1Rhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpdGVtKSlcclxuICByZXR1cm4gYWxsT2JqZWN0c1Rhc2tzW2xpc3RUeXBlXVxyXG59XHJcblxyXG4vKlxyXG5BUEkgZnVuY3Rpb25zXHJcbiovXHJcbmFzeW5jIGZ1bmN0aW9uIGFwaVJlcXVlc3QobWV0aG9kLCB0YXNrc09iamVjdHMgPSBudWxsKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICdodHRwczovL2pzb24tYmlucy5oZXJva3VhcHAuY29tL2Jpbi82MTRhZmEwNTQwMjFhYzBlNmMwODBjYzMnLFxyXG4gICAge1xyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiB0YXNrc09iamVjdHMgPyBKU09OLnN0cmluZ2lmeSh7IHRhc2tzOiB0YXNrc09iamVjdHMgfSkgOiBudWxsLFxyXG4gICAgfVxyXG4gIClcclxuICByZXR1cm4gcmVzcG9uc2VcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZVRhc2tzVG9BcGkodGFza3NPYmplY3RzKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlSZXF1ZXN0KCdQVVQnLCB0YXNrc09iamVjdHMpXHJcblxyXG4gIGlmICghcmVzcG9uc2Uub2spIGFsZXJ0KGBlcnJvciBzdGF0dXMhICR7cmVzcG9uc2Uuc3RhdHVzfWApXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRUYXNrc0Zyb21BcGkoKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlSZXF1ZXN0KCdHRVQnKVxyXG5cclxuICBpZiAoIXJlc3BvbnNlLm9rKSBhbGVydChgc3RhdHVzIGVycm9yISAke3Jlc3BvbnNlLnN0YXR1c31gKVxyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgY29uc3QgdGFza3MgPSBkYXRhLnRhc2tzXHJcblxyXG4gIHJlcGxhY2VBbGxUYXNrcyh0YXNrcylcclxufVxyXG5cclxuLypcclxuSGVscGVyIGZ1bmN0aW9uc1xyXG4qL1xyXG5cclxuLy9sb2FkZXIgZ2lmIGRpc3BsYXkgZnVuY3Rpb25cclxuZnVuY3Rpb24gdG9nZ2xlTG9hZGVyKCkge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcGktaW50ZXJhY3Rpb24gPiBkaXYnKVxyXG4gIGlmIChkaXYubGFzdEVsZW1lbnRDaGlsZC50YWdOYW1lID09PSAnSU1HJykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlci1pbWcnKS5yZW1vdmUoKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBsb2FkZXJJbWcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCBbXSwgWydsb2FkZXInXSwge1xyXG4gICAgICBpZDogJ2xvYWRlci1pbWcnLFxyXG4gICAgICBzcmM6ICcuL2xvYWRpbmcuZ2lmJyxcclxuICAgIH0pXHJcbiAgICBkaXYuYXBwZW5kKGxvYWRlckltZylcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRJbmRleChlbGVtZW50KSB7XHJcbiAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50XHJcbiAgY29uc3QgY2hpbGRyZW5UeXBlID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudC50YWdOYW1lKVxyXG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGNoaWxkcmVuVHlwZSwgZWxlbWVudClcclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0NvbnN0cnVjdG9yKHRhc2ssIHJlbWluZGVyLCBkYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpKSB7XHJcbiAgcmV0dXJuIHsgdGFzaywgZGF0ZSwgcmVtaW5kZXIgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbmRpY2F0ZVRhc2tEcmFnSW5kZXgodWxMaXN0LCBlKSB7XHJcbiAgY29uc3QgbGlzdEJvdW5kcyA9IHVsTGlzdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gIGNvbnN0IHkgPSBlLmNsaWVudFlcclxuICBsZXQgaW5kZXggPSBnZXREcmFnSW5kZXhUYXNrRE9NKHksIGxpc3RCb3VuZHMsIGUudGFyZ2V0Lm9mZnNldEhlaWdodClcclxuXHJcbiAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ3VsJykgPT09IHVsTGlzdCkge1xyXG4gICAgY29uc3QgbGlJbmRleCA9IGdldEVsZW1lbnRJbmRleChlLnRhcmdldClcclxuICAgIGlmIChsaUluZGV4IDwgaW5kZXgpIGluZGV4LS1cclxuICB9XHJcbiAgcmV0dXJuIGluZGV4XHJcbn1cclxuXHJcbi8qXHJcblZhbGlkYXRlIGZ1bmN0aW9uc1xyXG4qL1xyXG5cclxuZnVuY3Rpb24gaXNWYXJGYWxzeUFsZXJ0KFxyXG4gIHZhcmlhYmxlLFxyXG4gIGFsZXJ0TWVzc2FnZSA9ICgpID0+IHdpbmRvdy5hbGVydCgnSW52YWxpZCEnKVxyXG4pIHtcclxuICBpZiAodmFyaWFibGUpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuICBhbGVydE1lc3NhZ2UoKVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9